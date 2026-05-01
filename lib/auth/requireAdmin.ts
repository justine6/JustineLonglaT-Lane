import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

function isAdminEmail(email?: string | null) {
  const adminEmails = process.env.ADMIN_EMAILS ?? "";

  return adminEmails
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean)
    .includes((email ?? "").toLowerCase());
}

export async function requireAdmin() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const email = user.emailAddresses?.[0]?.emailAddress;
  const role = user.publicMetadata?.role;

  if (role !== "admin" && !isAdminEmail(email)) {
    redirect("/");
  }

  return user;
}