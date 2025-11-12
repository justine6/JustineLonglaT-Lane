// app/api/onboarding/route.ts
import { NextRequest } from "next/server";
import { Resend } from "resend";
import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";

type OnboardingPayload = {
  name: string;
  email: string;
  company?: string;
  goals: string;
  projectTypes?: string[];
  priorities?: string[];
  budget?: string;
  deadline?: string;
  comms?: string;
  stack?: string;
  notes?: string;
  files?: { url: string; pathname: string; size?: number; contentType?: string }[];
};

const hasDB =
  !!process.env.POSTGRES_URL ||
  !!process.env.DATABASE_URL ||
  !!process.env.POSTGRES_PRISMA_URL;

export async function POST(req: NextRequest) {
  try {
    let body: any = {};
    let filesMeta: OnboardingPayload["files"] = [];

    // 1) Parse body (multipart or JSON)
    const ctype = req.headers.get("content-type") || "";
    if (ctype.includes("multipart/form-data")) {
      const form = await req.formData();
      const get = (k: string) => (form.get(k) as string | null) ?? "";
      const parseJSON = (k: string) => {
        const v = get(k);
        try { return v ? JSON.parse(v) : undefined; } catch { return undefined; }
      };

      body = {
        name: get("name")?.trim(),
        email: get("email")?.trim(),
        company: get("company")?.trim(),
        goals: get("goals")?.trim(),
        projectTypes: parseJSON("projectTypes"),
        priorities: parseJSON("priorities"),
        budget: get("budget")?.trim(),
        deadline: get("deadline")?.trim(),
        comms: get("comms")?.trim(),
        stack: get("stack")?.trim(),
        notes: get("notes")?.trim(),
      };

      // honeypot
      const honeypot = (form.get("company_site") as string) || "";
      if (honeypot.trim()) return Response.json({ ok: true });

      // uploads
      const fileFields = form.getAll("files");
      for (const f of fileFields) {
        if (!(f instanceof File)) continue;
        // (Optional) enforce size/type limits here
        const blob = await put(`onboarding/${Date.now()}-${f.name}`, f, {
          access: "private",
          addRandomSuffix: false,
        });
        filesMeta.push({
          url: blob.url,
          pathname: blob.pathname,
          size: f.size,
          contentType: f.type,
        });
      }
    } else {
      body = await req.json().catch(() => ({}));
      // honeypot
      if (typeof body.company_site === "string" && body.company_site.trim() !== "")
        return Response.json({ ok: true });
    }

    // 2) Validate
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const goals = (body.goals || "").trim();
    if (!name || !email || !goals) {
      return new Response(JSON.stringify({ error: "name, email, and goals are required." }), {
        status: 400,
      });
    }

    const payload: OnboardingPayload = {
      name,
      email,
      company: body.company?.trim() || undefined,
      goals,
      projectTypes: body.projectTypes ?? undefined,
      priorities: body.priorities ?? undefined,
      budget: body.budget?.trim() || undefined,
      deadline: body.deadline?.trim() || undefined,
      comms: body.comms?.trim() || undefined,
      stack: body.stack?.trim() || undefined,
      notes: body.notes?.trim() || undefined,
      files: filesMeta.length ? filesMeta : undefined,
    };

    // 3) Persist to DB if configured
    if (hasDB) {
      await sql/* sql */`
        CREATE TABLE IF NOT EXISTS onboarding_submissions (
          id BIGSERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          company TEXT,
          goals TEXT NOT NULL,
          project_types JSONB,
          priorities JSONB,
          budget TEXT,
          deadline TEXT,
          comms TEXT,
          stack TEXT,
          notes TEXT,
          files JSONB,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );
      `;
      await sql/* sql */`
        INSERT INTO onboarding_submissions
          (name, email, company, goals, project_types, priorities, budget, deadline, comms, stack, notes, files)
        VALUES
          (${payload.name}, ${payload.email}, ${payload.company ?? null}, ${payload.goals},
           ${JSON.stringify(payload.projectTypes ?? null)},
           ${JSON.stringify(payload.priorities ?? null)},
           ${payload.budget ?? null}, ${payload.deadline ?? null}, ${payload.comms ?? null},
           ${payload.stack ?? null}, ${payload.notes ?? null},
           ${JSON.stringify(payload.files ?? null)});
      `;
    }

    // 4) Email (admin + confirmation)
    const from = process.env.ONBOARDING_FROM_EMAIL || "hello@example.com";
    const admin = process.env.ONBOARDING_ADMIN_EMAIL || "admin@example.com";
    const resend = new Resend(process.env.RESEND_API_KEY!);

    const subject = `New Onboarding — ${payload.name}`;
    const lines = [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.company ? `Company: ${payload.company}` : "",
      `Goals: ${payload.goals}`,
      payload.projectTypes?.length ? `Project types: ${payload.projectTypes.join(", ")}` : "",
      payload.priorities?.length ? `Priorities: ${payload.priorities.join(", ")}` : "",
      payload.budget ? `Budget: ${payload.budget}` : "",
      payload.deadline ? `Deadline: ${payload.deadline}` : "",
      payload.comms ? `Comms: ${payload.comms}` : "",
      payload.stack ? `Stack: ${payload.stack}` : "",
      payload.notes ? `Notes: ${payload.notes}` : "",
      payload.files?.length ? `Files: ${payload.files.map((f) => f.pathname).join(", ")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    await resend.emails.send({
      from,
      to: admin,
      reply_to: payload.email,
      subject,
      text: lines,
    });

    await resend.emails.send({
      from,
      to: payload.email,
      subject: "Thanks — onboarding received | Jutellane Solutions",
      text: [
        `Hi ${payload.name},`,
        ``,
        `Thanks for sharing your onboarding details — I’ll review and come prepared for our session.`,
        ``,
        `Summary you sent:`,
        `- Goals: ${payload.goals}`,
        payload.projectTypes?.length ? `- Project types: ${payload.projectTypes.join(", ")}` : "",
        payload.priorities?.length ? `- Priorities: ${payload.priorities.join(", ")}` : "",
        payload.budget ? `- Budget: ${payload.budget}` : "",
        payload.deadline ? `- Deadline: ${payload.deadline}` : "",
        payload.comms ? `- Comms: ${payload.comms}` : "",
        payload.stack ? `- Stack: ${payload.stack}` : "",
        payload.notes ? `- Notes: ${payload.notes}` : "",
        payload.files?.length
          ? `- Files received: ${payload.files.map((f) => f.pathname).join(", ")}`
          : "",
        ``,
        `If you need anything before the call, simply reply to this email.`,
        `— Jutellane Solutions`,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: err?.message || "Server error" }), {
      status: 500,
    });
  }
}
