type Health = {
  ok: true;
  now: string;
};

function nowIso(): string {
  return new Date().toISOString();
}

export async function GET() {
  const response: Health = {
    ok: true,
    now: nowIso(),
  };

  return Response.json(response);
}