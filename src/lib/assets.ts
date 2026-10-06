// Build-time helpers that find real assets in /public.
// Nothing is faked: if a file isn't there, callers render a marked placeholder.
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const PUBLIC = join(process.cwd(), 'public');
const EXT = ['webp', 'jpg', 'jpeg', 'png', 'avif'];

/** 'images/akshat' → '/images/akshat.jpg' if any supported extension exists. */
export function findImage(base: string): string | null {
  for (const e of EXT) if (existsSync(join(PUBLIC, `${base}.${e}`))) return `/${base}.${e}`;
  return null;
}

/** All screenshots in public/work/<slug>/, sorted naturally (1, 2, 10). */
export function projectShots(slug: string): string[] {
  const dir = join(PUBLIC, 'work', slug);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => EXT.includes(f.split('.').pop()!.toLowerCase()) && !f.startsWith('cover'))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `/work/${slug}/${f}`);
}

export const hasFile = (p: string) => existsSync(join(PUBLIC, p.replace(/^\//, '')));
