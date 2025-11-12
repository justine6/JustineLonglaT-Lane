// components/PremiumOnboarding.tsx
"use client";

import { useEffect, useMemo, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

/* ---------------------------------- Types --------------------------------- */

type Props = {
  initialName?: string;
  initialEmail?: string;
};

type OnboardingData = {
  name?: string;
  email?: string;
  company?: string;
  goals?: string;
  projectTypes?: string[];
  priorities?: string[];
  budget?: string;
  deadline?: string;
  comms?: string;
  stack?: string;
  notes?: string;
  files?: File[];
};

/* ------------------------------- Main Wizard ------------------------------ */

export default function OnboardingPremium({
  initialName = "",
  initialEmail = "",
}: Props) {
  const router = useRouter();
  const [step, setStep] = useState(0);

  // core fields
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [company, setCompany] = useState("");
  const [goals, setGoals] = useState("");

  // project details
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const [priorities, setPriorities] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [deadline, setDeadline] = useState("");

  // extras
  const [comms, setComms] = useState("");
  const [stack, setStack] = useState("");
  const [notes, setNotes] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  // UX
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const [redirectCanceled, setRedirectCanceled] = useState(false);

  // keep prefill fresh if page receives params later
  useEffect(() => {
    if (initialName && !name) setName(initialName);
    if (initialEmail && !email) setEmail(initialEmail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialName, initialEmail]);

  const canNext = useMemo(() => {
    if (step === 0) return name.trim() !== "" && email.trim() !== "" && goals.trim() !== "";
    return true;
  }, [step, name, email, goals]);

  const next = () => canNext && setStep((s) => Math.min(s + 1, 2));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const stepVariants = {
    initial: { opacity: 0, y: 8, scale: 0.995 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18 } },
    exit: { opacity: 0, y: -6, scale: 0.995, transition: { duration: 0.14 } },
  };

  /* ---------------------------- File input guardrails --------------------------- */

  const onFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files ?? []);
    const MAX_FILES = 5;
    const MAX_SIZE = 10 * 1024 * 1024;
    const trimmed = list.slice(0, MAX_FILES).filter((f) => f.size <= MAX_SIZE);
    setFiles(trimmed);
  };

  /* --------------------------------- Submit --------------------------------- */

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    setOk(false);
    setRedirectCanceled(false);

    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("company", company);
      fd.append("goals", goals);
      fd.append("projectTypes", JSON.stringify(projectTypes));
      fd.append("priorities", JSON.stringify(priorities));
      fd.append("budget", budget);
      fd.append("deadline", deadline);
      fd.append("comms", comms);
      fd.append("stack", stack);
      fd.append("notes", notes);
      fd.append("company_site", ""); // honeypot

      files.forEach((file, idx) => fd.append("files", file, file.name || `file-${idx}`));

      const res = await fetch("/api/onboarding", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to submit onboarding");

      setOk(true);

      // auto-redirect after 3s unless canceled
      const t = setTimeout(() => {
        if (!redirectCanceled) router.push("/projects");
      }, 3000);

      // cleanup if user navigates quickly
      return () => clearTimeout(t);
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const snapshot: OnboardingData = {
    name,
    email,
    company,
    goals,
    projectTypes,
    priorities,
    budget,
    deadline,
    comms,
    stack,
    notes,
    files,
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${step}-${ok ? "ok" : "pending"}`}
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {ok ? (
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Thanks — onboarding received!</h3>
                <p className="mt-2 text-sm text-slate-600">
                  A confirmation email is on the way. I’ll review the details before our session.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => router.push("/projects")}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    Explore Projects now
                  </button>
                  <button
                    onClick={() => {
                      setRedirectCanceled(true);
                      router.push("/contact");
                    }}
                    className="rounded-lg border px-4 py-2 text-slate-700 hover:bg-slate-50"
                  >
                    Contact
                  </button>
                </div>
              </div>
            ) : step === 0 ? (
              <SectionIntro
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                company={company}
                setCompany={setCompany}
                goals={goals}
                setGoals={setGoals}
                onNext={next}
              />
            ) : step === 1 ? (
              <SectionProjectDetails
                projectTypes={projectTypes}
                setProjectTypes={setProjectTypes}
                priorities={priorities}
                setPriorities={setPriorities}
                budget={budget}
                setBudget={setBudget}
                deadline={deadline}
                setDeadline={setDeadline}
                comms={comms}
                setComms={setComms}
                stack={stack}
                setStack={setStack}
                notes={notes}
                setNotes={setNotes}
                onBack={back}
                onNext={next}
                onFilesChange={onFilesChange}
                files={files}
              />
            ) : (
              <SectionReview
                data={snapshot}
                onBack={back}
                onSubmit={handleSubmit}
                submitting={submitting}
                error={error}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Toast */}
        <Toast
          show={ok}
          onCancel={() => setRedirectCanceled(true)}
          message={
            redirectCanceled
              ? "Submission received. Redirect cancelled."
              : "Submission received! Redirecting to Projects…"
          }
        />
      </div>
    </div>
  );
}

/* ------------------------------- Toast UI --------------------------------- */

function Toast({
  show,
  onCancel,
  message,
}: {
  show: boolean;
  onCancel: () => void;
  message: string;
}) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 right-4 z-50"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-3 rounded-xl border border-emerald-300 bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">✓</span>
            <span className="text-sm text-slate-800">{message}</span>
            <button
              onClick={onCancel}
              className="ml-2 rounded-md border px-2 py-1 text-xs text-slate-700 hover:bg-slate-50"
            >
              Cancel redirect
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------- Step: Intro ------------------------------- */

function SectionIntro({
  name,
  setName,
  email,
  setEmail,
  company,
  setCompany,
  goals,
  setGoals,
  onNext,
}: {
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  company: string;
  setCompany: (v: string) => void;
  goals: string;
  setGoals: (v: string) => void;
  onNext: () => void;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">Premium onboarding</h3>
      <p className="mt-1 text-sm text-slate-600">
        Tell me a little about you and your goals for this engagement.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input label="Name *" value={name} onChange={setName} placeholder="Your full name" />
        <Input label="Email *" value={email} onChange={setEmail} placeholder="you@company.com" />
      </div>

      <div className="mt-4">
        <Input label="Company" value={company} onChange={setCompany} placeholder="Your company" />
      </div>

      <div className="mt-4">
        <Textarea
          label="What outcomes are you aiming for? *"
          value={goals}
          onChange={setGoals}
          placeholder="Short description of success criteria…"
          rows={4}
        />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={onNext}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}

/* --------------------------- Step: Project details -------------------------- */

function SectionProjectDetails({
  projectTypes,
  setProjectTypes,
  priorities,
  setPriorities,
  budget,
  setBudget,
  deadline,
  setDeadline,
  comms,
  setComms,
  stack,
  setStack,
  notes,
  setNotes,
  files,
  onFilesChange,
  onBack,
  onNext,
}: {
  projectTypes: string[];
  setProjectTypes: (v: string[]) => void;
  priorities: string[];
  setPriorities: (v: string[]) => void;
  budget: string;
  setBudget: (v: string) => void;
  deadline: string;
  setDeadline: (v: string) => void;
  comms: string;
  setComms: (v: string) => void;
  stack: string;
  setStack: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;
  files: File[];
  onFilesChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const PT = [
    "Landing page",
    "Docs / Knowledge base",
    "E-commerce",
    "DevOps/Cloud Infra",
    "Observability",
    "Security & Compliance",
    "Migration",
    "Data/ETL",
    "Other",
  ];

  const PRI = ["Speed", "Quality", "Cost", "Security", "Compliance", "Time-to-market"];

  const toggle = (arr: string[], set: (v: string[]) => void, item: string) => {
    set(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]);
  };

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">Premium onboarding</h3>

      <div className="mt-6">
        <Label>Project type(s)</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {PT.map((p) => (
            <Pill key={p} active={projectTypes.includes(p)} onClick={() => toggle(projectTypes, setProjectTypes, p)}>
              {p}
            </Pill>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Label>What matters most?</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {PRI.map((p) => (
            <Pill key={p} active={priorities.includes(p)} onClick={() => toggle(priorities, setPriorities, p)}>
              {p}
            </Pill>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Select
          label="Indicative budget"
          value={budget}
          onChange={setBudget}
          options={[
            { v: "", l: "Select…" },
            { v: "$2k–$5k", l: "$2k–$5k" },
            { v: "$5k–$10k", l: "$5k–$10k" },
            { v: "$10k–$25k", l: "$10k–$25k" },
            { v: "$25k+", l: "$25k+" },
          ]}
        />
        <Input label="Desired deadline" value={deadline} onChange={setDeadline} placeholder="e.g., June 30 or ASAP" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input label="Comms preference" value={comms} onChange={setComms} placeholder="Slack, Teams, Email…" />
        <Input label="Stack / environment" value={stack} onChange={setStack} placeholder="AWS, k8s, Next.js, Postgres…" />
      </div>

      <div className="mt-6">
        <Textarea label="Notes / links" value={notes} onChange={setNotes} rows={4} />
      </div>

      <div className="mt-6">
        <Label>Attachments (optional) — up to 5 files, 10MB each</Label>
        <input
          type="file"
          multiple
          className="mt-2 block w-full rounded-lg border px-3 py-2 text-sm"
          onChange={onFilesChange}
        />
        {files?.length ? (
          <div className="mt-2">
            <FileList files={files.map((f) => ({ name: f.name, size: f.size }))} />
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button onClick={onBack} className="rounded-lg border px-4 py-2 text-slate-700 hover:bg-slate-50">
          Back
        </button>
        <button onClick={onNext} className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
}

/* ------------------------------ Step: Review ------------------------------- */

function SectionReview({
  data,
  onBack,
  onSubmit,
  submitting,
  error,
}: {
  data: OnboardingData;
  onBack: () => void;
  onSubmit: () => void;
  submitting: boolean;
  error: string | null;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">Quick review</h3>
      <div className="mt-4 divide-y">
        <Row label="Name" value={data.name} />
        <Row label="Email" value={data.email} />
        <Row label="Company" value={data.company} />
        <Row label="Goals" value={data.goals} />
        <Row label="Project types" value={data.projectTypes} />
        <Row label="Priorities" value={data.priorities} />
        <Row label="Budget" value={data.budget} />
        <Row label="Deadline" value={data.deadline} />
        <Row label="Comms" value={data.comms} />
        <Row label="Stack" value={data.stack} />
        <Row label="Notes" value={data.notes} />
        {data.files?.length ? (
          <div className="py-2">
            <div className="min-w-40 text-sm font-medium text-slate-600">Files</div>
            <FileList files={data.files.map((f) => ({ name: f.name, size: f.size }))} />
          </div>
        ) : null}
      </div>

      {error ? <p className="mt-3 text-sm text-red-600">⚠️ {error}</p> : null}

      <div className="mt-6 flex items-center gap-3">
        <button onClick={onBack} className="rounded-lg border px-4 py-2 text-slate-700 hover:bg-slate-50">
          Back
        </button>
        <button
          onClick={onSubmit}
          disabled={submitting}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Submit onboarding"}
        </button>
      </div>
    </div>
  );
}

/* ------------------------------- UI Helpers -------------------------------- */

function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-medium text-slate-700">{children}</div>;
}

function Input({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <input
        className="mt-1 block w-full rounded-lg border px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  rows = 3,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <textarea
        rows={rows}
        className="mt-1 block w-full resize-y rounded-lg border px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { v: string; l: string }[];
}) {
  return (
    <label className="block">
      <Label>{label}</Label>
      <select
        className="mt-1 block w-full rounded-lg border px-3 py-2 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.v} value={o.v}>
            {o.l}
          </option>
        ))}
      </select>
    </label>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full border px-3 py-1 text-sm " +
        (active
          ? "border-blue-600 bg-blue-50 text-blue-700"
          : "border-slate-300 text-slate-700 hover:bg-slate-50")
      }
    >
      {children}
    </button>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string | string[] | undefined;
}) {
  const display =
    Array.isArray(value) ? (value.length ? value.join(", ") : "—") : value?.trim() || "—";
  return (
    <div className="flex items-start gap-4 py-2 text-sm">
      <div className="min-w-40 font-medium text-slate-600">{label}:</div>
      <div className="flex-1 text-slate-900">{display}</div>
    </div>
  );
}

function FileList({ files }: { files: { name: string; size: number }[] }) {
  return (
    <ul className="mt-1 space-y-1 text-sm text-slate-700">
      {files.map((f, i) => (
        <li key={`${f.name}-${i}`} className="flex items-center justify-between rounded-md border px-3 py-2">
          <span className="truncate">{f.name}</span>
          <span className="ml-3 shrink-0 text-xs text-slate-500">{formatBytes(f.size)}</span>
        </li>
      ))}
    </ul>
  );
}

function formatBytes(n: number) {
  if (!n && n !== 0) return "—";
  const u = ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(n) / Math.log(1024)), u.length - 1);
  return `${(n / Math.pow(1024, i)).toFixed(1)} ${u[i]}`;
}
