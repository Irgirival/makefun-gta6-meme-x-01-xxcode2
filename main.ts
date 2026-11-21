// gta6-meme-x-01 entry (Node 22, standard library only): the entry is the X post
// itself, so the program only has to hand the gate the post's address. It copies
// POST.json from the repository root to /output/POST.json, where the gate reads it.
// That is all the program has to do. No network, no wall clock, no files outside
// the repository: every run writes the same bytes.
//
// Before copying, it validates POST.json: the file must parse as JSON and carry
// a url string pointing at an x.com (or twitter.com) status. A bad POST.json
// fails fast here with a clear message instead of silently handing the gate a
// post address it would refuse.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(botDir, 'POST.json');
let post;
try {
  post = JSON.parse(readFileSync(postPath, 'utf8'));
} catch (error) {
  console.error(`POST.json does not parse as JSON: ${(error as Error).message}`);
  process.exit(1);
}
if (typeof post?.url !== 'string' || !/^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+/.test(post.url)) {
  console.error(`POST.json at ${postPath} must carry a url string like https://x.com/<handle>/status/<id>; got: ${JSON.stringify(post?.url)}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(postPath, join(outputDir, 'POST.json'));
} catch (error) {
  console.error(`could not copy POST.json from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
