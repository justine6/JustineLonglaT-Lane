import { chromium } from 'playwright';

const url = process.argv[2] ?? 'https://jutellane-main.vercel.app';
const needle = 'Architected & Built by Justine Longla T.';

const browser = await chromium.launch();
const page = await browser.newPage();

// load and let the app hydrate
await page.goto(url, { waitUntil: 'networkidle' });

// Find the text after hydration
const found = await page.locator(`text=${needle}`).first().isVisible().catch(() => false);
await browser.close();

if (found) {
  console.log('FOUND:', needle);
  process.exit(0);
} else {
  console.error('NOT FOUND:', needle);
  process.exit(2);
}
