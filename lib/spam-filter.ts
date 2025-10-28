/**
 * Very small content filter to catch common spam pitches.
 * Keep the list short and focused to avoid false positives.
 * You can expand this over time based on your inbox.
 */
const PHRASES = [
  "guest post",
  "seo services",
  "backlink",
  "domain authority",
  "adult content",
  "casino",
  "crypto investment",
  "sponsor post",
  "write for us",
  "viagra",
  "loan approval",
  "forex signals",
  "telegram signals",
];

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, " ")
    .normalize("NFKC")
    .trim();
}

/**
 * Returns true if message looks like spam.
 */
export function isLikelySpam(input: {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}) {
  const hay = normalize(
    [input.name, input.email, input.company, input.message].filter(Boolean).join(" | ")
  );

  for (const p of PHRASES) {
    if (hay.includes(p)) return true;
  }

  // Optional: flag links-heavy content
  const urlCount = (hay.match(/https?:\/\//g) || []).length;
  if (urlCount >= 3) return true;

  // Optional: too-short + link combo
  if (hay.length < 40 && urlCount >= 1) return true;

  return false;
}
