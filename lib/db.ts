import postgres from "postgres";

const databaseUrl = process.env.DATABASE_URL;

const globalForSql = globalThis as unknown as {
  sql?: postgres.Sql;
};

export const sql =
  globalForSql.sql ??
  postgres(databaseUrl ?? "", {
    ssl: "require",
    max: 1,
  });

if (!databaseUrl) {
  console.warn("⚠️ DATABASE_URL is not configured.");
}

if (process.env.NODE_ENV !== "production") {
  globalForSql.sql = sql;
}