// Runs after `npm run build` (postbuild): checks the <title> of the built pages.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(import.meta.dirname, '..', 'dist');
const SITE = 'Writing With Agents';

const titleOf = (file) => readFileSync(file, 'utf8').match(/<title>([^<]*)<\/title>/)?.[1];

const pages = readdirSync(DIST, { recursive: true })
  .filter((f) => f.endsWith('index.html'))
  .map((f) => path.join(DIST, f));

test('homepage title says what the site is', () => {
  assert.equal(titleOf(path.join(DIST, 'index.html')), `${SITE}: Writing Skills for Claude Code`);
});

test('no page title repeats the site name', () => {
  for (const page of pages) {
    const title = titleOf(page) ?? '';
    assert.ok(title.split(SITE).length <= 2, `${path.relative(DIST, page)}: "${title}"`);
  }
});
