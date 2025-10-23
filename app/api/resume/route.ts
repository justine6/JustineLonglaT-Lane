import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.json");
  try {
    const json = await fs.readFile(filePath, "utf8");
    return new NextResponse(json, { headers: { "Content-Type": "application/json" } });
  } catch {
    return NextResponse.json({ error: "resume.json not found" }, { status: 404 });
  }
}
