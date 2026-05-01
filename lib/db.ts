import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not configured.");
}

const globalForSql = globalThis as unknown as {
  sql?: postgres.Sql;
};

export const sql =
  globalForSql.sql ??
  postgres(process.env.DATABASE_URL, {
    ssl: "require",
    max: 1,
  });

if (process.env.NODE_ENV !== "production") {
  globalForSql.sql = sql;
}