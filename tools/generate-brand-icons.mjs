import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");

const source = path.join(
  root,
  "public",
  "brand",
  "logo-shield.png"
);

const outputs = {
  icon512: path.join(root, "public", "icon-512.png"),
  icon192: path.join(root, "public", "icon-192.png"),
  apple: path.join(root, "public", "apple-touch-icon.png"),
  favicon: path.join(root, "public", "favicon.ico"),
};

const CANONICAL_SOURCE = Object.freeze({
  format: "png",
  width: 460,
  height: 450,
  channels: 4,
  hasAlpha: true,
});

const NORMALIZED_MASTER_SIZE = 512;

const PNG_OPTIONS = Object.freeze({
  compressionLevel: 9,
  adaptiveFiltering: true,
});

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function readCanonicalSource() {
  const sourceBuffer = await fs.readFile(source);
  const metadata = await sharp(sourceBuffer).metadata();

  assert(
    metadata.format === CANONICAL_SOURCE.format,
    `Brand source must be PNG; observed ${metadata.format}.`
  );

  assert(
    metadata.width === CANONICAL_SOURCE.width &&
      metadata.height === CANONICAL_SOURCE.height,
    `Brand source must be ${CANONICAL_SOURCE.width}x${CANONICAL_SOURCE.height}; ` +
      `observed ${metadata.width}x${metadata.height}.`
  );

  assert(
    metadata.channels === CANONICAL_SOURCE.channels,
    `Brand source must expose ${CANONICAL_SOURCE.channels} channels; ` +
      `observed ${metadata.channels}.`
  );

  assert(
    metadata.hasAlpha === CANONICAL_SOURCE.hasAlpha,
    "Brand source must contain an alpha channel."
  );

  return sourceBuffer;
}

async function normalizeIconMaster(sourceBuffer) {
  return sharp(sourceBuffer)
    .resize(
      NORMALIZED_MASTER_SIZE,
      NORMALIZED_MASTER_SIZE,
      {
        fit: "contain",
        position: "centre",
        background: {
          r: 0,
          g: 0,
          b: 0,
          alpha: 0,
        },
        kernel: sharp.kernel.lanczos3,
      }
    )
    .png(PNG_OPTIONS)
    .toBuffer();
}

async function derivePng(masterBuffer, size) {
  return sharp(masterBuffer)
    .resize(size, size, {
      fit: "fill",
      kernel: sharp.kernel.lanczos3,
    })
    .png(PNG_OPTIONS)
    .toBuffer();
}

function createIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  let offset = 6 + count * 16;

  for (const { size, buffer } of images) {
    const entry = Buffer.alloc(16);

    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);

    entries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([
    header,
    ...entries,
    ...images.map(({ buffer }) => buffer),
  ]);
}

async function main() {
  await fs.mkdir(path.join(root, "public"), { recursive: true });

  const sourceBuffer = await readCanonicalSource();

  /*
   * Canonical artwork and delivery geometry are separate concerns.
   *
   * The canonical 460x450 crest is never stretched or cropped.
   * It is projected onto a transparent 512x512 delivery canvas
   * using aspect-preserving contain + centre.
   *
   * All downstream browser/PWA artifacts derive from this single
   * normalized square master.
   */
  const master512 = await normalizeIconMaster(sourceBuffer);

  const icon192 = await derivePng(master512, 192);
  const apple180 = await derivePng(master512, 180);

  const faviconSizes = [16, 32, 48, 256];

  const faviconImages = [];

  for (const size of faviconSizes) {
    faviconImages.push({
      size,
      buffer: await derivePng(master512, size),
    });
  }

  const favicon = createIco(faviconImages);

  assert(
    favicon.length >= 6 &&
      favicon.readUInt16LE(0) === 0 &&
      favicon.readUInt16LE(2) === 1 &&
      favicon.readUInt16LE(4) === faviconImages.length,
    "Generated favicon has an invalid ICO header."
  );

  await Promise.all([
    fs.writeFile(outputs.icon512, master512),
    fs.writeFile(outputs.icon192, icon192),
    fs.writeFile(outputs.apple, apple180),
    fs.writeFile(outputs.favicon, favicon),
  ]);

  console.log(
    "Generated governed brand icons from canonical transparent crest."
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
