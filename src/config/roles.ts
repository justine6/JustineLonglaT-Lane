// src/config/roles.ts

export type Role =
  | "public"
  | "user"
  | "client"
  | "premium"
  | "admin";

export function planToRole(plan: string | null | undefined): Role {
  switch (plan) {
    case "intro-call":
      return "client";

    case "arch-review":
      return "client";

    case "retainer":
      return "premium";

    default:
      return "user";
  }
}