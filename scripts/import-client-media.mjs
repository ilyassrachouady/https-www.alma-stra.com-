import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const sourceRoot = process.argv[2];
if (!sourceRoot) throw new Error('Usage: node scripts/import-client-media.mjs /path/to/WEB_SITE');
const manifest = JSON.parse(await fs.readFile('scripts/client-media-manifest.json', 'utf8'));
const groups = {};
for (const item of manifest) {
  const destination = path.join('public', item.file);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  // Technical web preparation only: honor orientation, retain the entire frame,
  // resize without upscaling and encode. No generative or structural alteration.
  await sharp(path.join(sourceRoot, item.source)).rotate()
    .resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: item.kind === 'document' ? 94 : 90 }).toFile(destination);
  const meta = await sharp(destination).metadata();
  const blur = await sharp(destination).resize(24,24,{fit:'inside'}).webp({quality:40}).toBuffer();
  (groups[item.group] ??= []).push({ src: item.file, kind: item.kind,
    caption: item.caption, alt: item.caption, width: meta.width, height: meta.height,
    blurDataURL: `data:image/webp;base64,${blur.toString('base64')}` });
}
await fs.writeFile('lib/client-media.ts', `// Generated from the reviewed client-media-manifest.json.\nexport type ProjectImage = { src: string; kind: "photo" | "render" | "document"; caption: string; alt: string; width: number; height: number; blurDataURL: string };\nexport const clientMedia: Record<string, ProjectImage[]> = ${JSON.stringify(groups,null,2)};\n`);
console.log(`Prepared ${manifest.length} supplied images in ${Object.keys(groups).length} collections.`);
