import fs from "fs";
import path from "path";

export type ProposalRecord = {
  id: string;
  intent: string;
  service: string;
  tier: string;

  name?: string;
  email?: string;
  phone?: string;

  approvedAt: string;

  stripeSessionId?: string;
  paid?: boolean;
  amountCents?: number;
  currency?: string;
};

const DATA_PATH = path.join(process.cwd(), "data", "proposals.json");

function ensureFile() {
  if (!fs.existsSync(DATA_PATH)) {
    fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
    fs.writeFileSync(DATA_PATH, "[]", "utf8");
  }
}

export function readProposals(): ProposalRecord[] {
  ensureFile();
  const raw = fs.readFileSync(DATA_PATH, "utf8");
  return JSON.parse(raw);
}

export function writeProposals(records: ProposalRecord[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(records, null, 2), "utf8");
}

export function addProposal(record: ProposalRecord) {
  const records = readProposals();
  records.unshift(record);
  writeProposals(records);
}

export function markProposalPaid(
  stripeSessionId: string,
  amountCents?: number,
  currency?: string
) {
  const records = readProposals();

  const rec = records.find((r) => r.stripeSessionId === stripeSessionId);
  if (!rec) return;

  rec.paid = true;
  rec.amountCents = amountCents;
  rec.currency = currency;

  writeProposals(records);
}
