import type { AppRole } from "@/lib/auth/roles";
import type { SupportedPlanKey } from "@/lib/clerk-role-sync";

declare module "@clerk/types" {
  interface UserPublicMetadata {
    role?: AppRole;
    plan?: SupportedPlanKey;
  }
}

export {};