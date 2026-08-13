import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const repositoryRoot = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '..',
);

const paths = {
  source: resolve(
    repositoryRoot,
    'public',
    'brand',
    'logo-shield.png',
  ),
  icon512: resolve(repositoryRoot, 'public', 'icon-512.png'),
  icon192: resolve(repositoryRoot, 'public', 'icon-192.png'),
  appleTouch: resolve(
    repositoryRoot,
    'public',
    'apple-touch-icon.png',
  ),
  favicon: resolve(repositoryRoot, 'public', 'favicon.ico'),
};

const pngSignature = Buffer.from([
  0x89,
  0x50,
  0x4e,
  0x47,
  0x0d,
  0x0a,
  0x1a,
  0x0a,
]);

function assertPng(buffer, label) {
  if (
    buffer.length < pngSignature.length ||
    !buffer.subarray(0, pngSignature.length).equals(pngSignature)
  ) {
    throw new Error(`${label} is not a genuine PNG file.`);
  }
}

async function createPng(source, size) {
  const output = await sharp(source)
    .resize(size, size, {
      fit: 'fill',
      kernel: sharp.kernel.lanczos3,
    })
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
    .toBuffer();

  assertPng(output, `${size}x${size} icon`);

  return output;
}

function createIco(images) {
  const directoryEntrySize = 16;
  const headerSize = 6;
  const directorySize = images.length * directoryEntrySize;
  const header = Buffer.alloc(headerSize);
  const directory = Buffer.alloc(directorySize);

  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  let imageOffset = headerSize + directorySize;

  images.forEach(({ size, buffer }, index) => {
    const entryOffset = index * directoryEntrySize;
    const encodedDimension = size === 256 ? 0 : size;

    directory.writeUInt8(encodedDimension, entryOffset);
    directory.writeUInt8(encodedDimension, entryOffset + 1);
    directory.writeUInt8(0, entryOffset + 2);
    directory.writeUInt8(0, entryOffset + 3);
    directory.writeUInt16LE(1, entryOffset + 4);
    directory.writeUInt16LE(32, entryOffset + 6);
    directory.writeUInt32LE(buffer.length, entryOffset + 8);
    directory.writeUInt32LE(imageOffset, entryOffset + 12);

    imageOffset += buffer.length;
  });

  return Buffer.concat([
    header,
    directory,
    ...images.map(({ buffer }) => buffer),
  ]);
}

async function verifySource(source) {
  assertPng(source, 'Brand shield source');

  const metadata = await sharp(source).metadata();

  if (metadata.width !== 512 || metadata.height !== 512) {
    throw new Error(
      'Brand shield source must be exactly 512x512 pixels.',
    );
  }

  if (!metadata.hasAlpha || metadata.channels !== 4) {
    throw new Error(
      'Brand shield source must be a four-channel PNG with alpha.',
    );
  }
}

async function main() {
  const source = await readFile(paths.source);

  await verifySource(source);
  await mkdir(resolve(repositoryRoot, 'public'), {
    recursive: true,
  });

  const icon192 = await createPng(source, 192);
  const appleTouch = await createPng(source, 180);

  const faviconSizes = [16, 32, 48, 256];
  const faviconImages = [];

  for (const size of faviconSizes) {
    faviconImages.push({
      size,
      buffer: await createPng(source, size),
    });
  }

  const favicon = createIco(faviconImages);

  if (
    favicon.readUInt16LE(0) !== 0 ||
    favicon.readUInt16LE(2) !== 1 ||
    favicon.readUInt16LE(4) !== faviconSizes.length
  ) {
    throw new Error('Generated favicon has an invalid ICO header.');
  }

  await copyFile(paths.source, paths.icon512);
  await writeFile(paths.icon192, icon192);
  await writeFile(paths.appleTouch, appleTouch);
  await writeFile(paths.favicon, favicon);

  console.log('Generated governed brand assets:');
  console.log('  public/icon-512.png');
  console.log('  public/icon-192.png');
  console.log('  public/apple-touch-icon.png');
  console.log('  public/favicon.ico');
  console.log(
    `  favicon sizes: ${faviconSizes.join(', ')} pixels`,
  );
}

main().catch((error) => {
  console.error('Brand icon generation failed.');
  console.error(error);
  process.exitCode = 1;
});
