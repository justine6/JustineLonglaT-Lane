import { Health, nowIso } from "@suite/shared";

export async function GET() {
  const response: Health = {
    ok: true,
    now: nowIso(),
  };

  return Response.json(response);
}