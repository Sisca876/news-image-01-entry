// news-image-01 entry: "The Day in Six Stories", a one-page newspaper
// poster summing up Friday 13 November 2026 in six verified stories.
// The artwork is entry.png beside this file; the program's only job is
// to place those exact bytes at /output/entry.png for the judge.
// Node 22, standard library only, no network.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// /output exists in the grader, but creating the directory keeps the entry
// working for any runner that hands it a fresh output path.
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
