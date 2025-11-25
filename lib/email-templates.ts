type Reason = "general" | "project-inquiry" | "request-resume";

export function subjectForReason(reason: Reason): string {
  switch (reason) {
    case "request-resume": return "Résumé request from website";
    case "project-inquiry": return "Project inquiry from website";
    default: return "New message from website";
  }
}

export function renderContactHtml(opts: { name: string; email: string; company?: string; message?: string; reason: Reason; }) {
  const { name, email, company, message, reason } = opts;
  const title = subjectForReason(reason);
  return baseHtml(title, `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;line-height:1.6;color:#0f172a;">
      <tr><td><strong>Name:</strong> ${escapeHtml(name)}</td></tr>
      <tr><td><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#1d4ed8;text-decoration:none;">${escapeHtml(email)}</a></td></tr>
      ${company ? `<tr><td><strong>Company:</strong> ${escapeHtml(company)}</td></tr>` : ``}
      <tr><td style="padding-top:8px;"><strong>Reason:</strong> ${escapeHtml(reason)}</td></tr>
      ${message ? `<tr><td style="padding-top:8px;"><strong>Message:</strong></td></tr>
        <tr><td><div style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:12px;">${escapeHtml(message)}</div></td></tr>` : ``}
    </table>
  `);
}

export function renderContactText(opts: { name: string; email: string; company?: string; message?: string; reason: Reason; }) {
  const { name, email, company, message, reason } = opts;
  const title = subjectForReason(reason);
  return `${title}

Name: ${name}
Email: ${email}
Company: ${company ?? ""}

Reason: ${reason}

Message:
${message ?? ""}

— Sent from jutellane.com`;
}

export function renderAutoReplyHtml(name: string, reason: Reason) {
  const title = "Thanks for reaching out!";
  const body = `
    <p style="margin:0 0 8px 0;">Hi ${escapeHtml(name)},</p>
    <p style="margin:0 0 12px 0;">Thanks for your message — I received it.</p>
    ${
      reason === "request-resume"
        ? `<p style="margin:0 0 12px 0;">Since you requested my résumé, I’ll reply shortly with the most relevant version for your role. If you can, please include the job link or key requirements.</p>`
        : `<p style="margin:0 0 12px 0;">I’ll get back to you shortly with next steps.</p>`
    }
    <p style="margin:0 0 4px 0;">— Justine Tekang</p>
    <p style="margin:0;color:#64748b;">Justine Longla T.</p>
  `;
  return baseHtml(title, body);
}

export function renderAutoReplyText(name: string, reason: Reason) {
  return `Thanks for reaching out!

Hi ${name},

Thanks for your message — I received it.
${
  reason === "request-resume"
    ? "You requested my résumé — I’ll reply shortly with the most relevant version. Please include the job link or key requirements if possible."
    : "I’ll get back to you shortly with next steps."
}

— Justine Tekang
Justine Longla T.`;
}

function baseHtml(title: string, inner: string) {
  return `<!doctype html>
<html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:#f6f8fa;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6f8fa;padding:24px;">
    <tr><td align="center">
      <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
        <tr><td style="padding:20px 24px;background:#1d4ed8;color:#ffffff;">
          <div style="font-weight:700;font-size:18px;">Justine Longla T.</div>
          <div style="opacity:.9;font-size:14px;margin-top:2px;">${escapeHtml(title)}</div>
        </td></tr>
        <tr><td style="padding:24px;">${inner}</td></tr>
        <tr><td style="padding:16px 24px;background:#f8fafc;border-top:1px solid #e5e7eb;font-size:12px;color:#334155;">
          — Sent from <a style="color:#1d4ed8;text-decoration:none;" href="https://justinelonglat-lane.com">jutellane.com</a>
        </td></tr>
      </table>
      <div style="font-size:12px;color:#64748b;margin-top:10px;">© ${new Date().getFullYear()} Justine Longla T.</div>
    </td></tr>
  </table>
</body></html>`;
}

// Minimal HTML escape
function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
