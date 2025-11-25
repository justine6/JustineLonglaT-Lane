#!/usr/bin/env node
// tools/validate-links.mjs
//
// Simple link validator for the consulting site.
// Usage:
//   BASE_URL=http://localhost:3000 node tools/validate-links.mjs
//
// or just:
//   node tools/validate-links.mjs
// (defaults to http://localhost:3000)

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

// Starting points to crawl
const START_PATHS = [
  "/",            // home
  "/readme",      // profile
  "/projects",
  "/contact",
  "/intro-call",
  "/hire-me",
  "/resume",
];

const visitedPages = new Set();
const checkedLinks = new Map();

/**
 * Fetch a URL and return { status, ok, redirected }
 */
async function checkUrl(url) {
  if (checkedLinks.has(url)) {
    return checkedLinks.get(url);
  }

  try {
    const res = await fetch(url, { redirect: "manual" });
    const info = {
      status: res.status,
      ok: res.status >= 200 && res.status < 300,
      redirected: res.status >= 300 && res.status < 400,
    };
    checkedLinks.set(url, info);
    return info;
  } catch (err) {
    const info = { status: 0, ok: false, redirected: false, error: String(err) };
    checkedLinks.set(url, info);
    return info;
  }
}

/**
 * Very small HTML link extractor.
 * Not a full parser, but fine for validating typical pages.
 */
function extractLinks(html, pageUrl) {
  const links = [];
  const hrefRegex = /href="([^"]+)"/gi;
  let match;

  while ((match = hrefRegex.exec(html)) !== null) {
    const rawHref = match[1];

    // Ignore anchors and javascript: links
    if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("javascript:")) {
      continue;
    }

    try {
      const absolute = new URL(rawHref, pageUrl);
      links.push(absolute);
    } catch {
      // Ignore malformed URLs
    }
  }

  return links;
}

/**
 * Crawl a single page: check its own URL, then any internal links found.
 */
async function crawlPath(path) {
  const pageUrl = new URL(path, BASE_URL).toString();

  if (visitedPages.has(pageUrl)) return;
  visitedPages.add(pageUrl);

  console.log(`\n🔎 Crawling page: ${pageUrl}`);

  const pageResult = await checkUrl(pageUrl);

  if (!pageResult.ok) {
    console.error(
      `  ❌ Page failed: ${pageResult.status} ${pageResult.error ? "— " + pageResult.error : ""}`,
    );
    return;
  } else {
    console.log(`  ✅ Page OK (${pageResult.status})`);
  }

  // Fetch HTML to find links
  const res = await fetch(pageUrl);
  const html = await res.text();

  const links = extractLinks(html, pageUrl);
  console.log(`  Found ${links.length} <a> links on this page.`);

  for (const urlObj of links) {
    const url = urlObj.toString();
    const sameOrigin = urlObj.origin === new URL(BASE_URL).origin;

    const result = await checkUrl(url);

    if (result.ok) {
      console.log(`    ✅ ${sameOrigin ? "[internal]" : "[external]"} ${url} (${result.status})`);
    } else if (result.redirected) {
      console.warn(`    ⚠️  ${sameOrigin ? "[internal]" : "[external]"} ${url} (${result.status} redirect)`);
    } else {
      console.error(
        `    ❌ ${sameOrigin ? "[internal]" : "[external]"} ${url} (${result.status}${
          result.error ? " — " + result.error : ""
        })`,
      );
    }

    // If it's an internal link, consider crawling it too
    if (sameOrigin) {
      const relPath = urlObj.pathname + (urlObj.search ?? "");
      if (!visitedPages.has(url)) {
        await crawlPath(relPath);
      }
    }
  }
}

async function main() {
  console.log(`🔗 Link validator starting at BASE_URL = ${BASE_URL}`);
  for (const path of START_PATHS) {
    await crawlPath(path);
  }

  console.log("\n✅ Done.");
  console.log(`Pages crawled: ${visitedPages.size}`);
  console.log(`Links checked: ${checkedLinks.size}`);
}

main().catch((err) => {
  console.error("Fatal error in link validator:", err);
  process.exit(1);
});
