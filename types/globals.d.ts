export {};

type AppRole = "public" | "member" | "premium" | "admin";

declare global {
  interface CustomJwtSessionClaims {
    metadata?: {
      role?: AppRole;
    };
  }

  interface UserPublicMetadata {
    role?: AppRole;
  }
}