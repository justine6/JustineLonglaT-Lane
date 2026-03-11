import fs from "node:fs";
import path from "node:path";

export type MembershipRecord = {
  email: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  stripeCheckoutSessionId?: string;
  planKey: "consulting-session" | "platform-access" | "platform-architect";
  status: "active" | "inactive";
  mode: "payment" | "subscription";
  grantedAt: string;
  updatedAt: string;
};

const DATA_PATH = path.join(process.cwd(), "data", "members.json");

function ensureStore() {
  if (!fs.existsSync(DATA_PATH)) {
    fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
    fs.writeFileSync(DATA_PATH, "[]", "utf8");
  }
}

function readMembers(): MembershipRecord[] {
  ensureStore();
  const raw = fs.readFileSync(DATA_PATH, "utf8");
  return JSON.parse(raw) as MembershipRecord[];
}

function writeMembers(records: MembershipRecord[]) {
  ensureStore();
  fs.writeFileSync(DATA_PATH, JSON.stringify(records, null, 2), "utf8");
}

export function upsertMembership(record: MembershipRecord) {
  const records = readMembers();

  const index = records.findIndex(
    (r) =>
      r.email.toLowerCase() === record.email.toLowerCase() ||
      (!!record.stripeSubscriptionId &&
        r.stripeSubscriptionId === record.stripeSubscriptionId)
  );

  if (index >= 0) {
    records[index] = {
      ...records[index],
      ...record,
      updatedAt: new Date().toISOString(),
    };
  } else {
    records.push(record);
  }

  writeMembers(records);
}

export function deactivateMembershipBySubscriptionId(subscriptionId: string) {
  const records = readMembers();

  const index = records.findIndex(
    (r) => r.stripeSubscriptionId === subscriptionId
  );

  if (index >= 0) {
    records[index].status = "inactive";
    records[index].updatedAt = new Date().toISOString();
    writeMembers(records);
  }
}