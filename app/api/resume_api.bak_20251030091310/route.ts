import { NextResponse } from "next/server";
import { LINKS } from '@/config/links';
import { promises as fs } from "fs";
import { LINKS } from '@/config/links';
import path from "path";
import { LINKS } from '@/config/links';

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.json");
  try {
    const json = await fs.readFile(filePath, "utf8");
    return new NextResponse(json, { headers: { "Content-Type": "application/json" } });
  } catch {
    return NextResponse.json({ error: "resume.json not found" }, { status: 404 });
  }
}

