#!/usr/bin/env node

/**
 * sync-content.mjs
 *
 * Pre-build script that copies repo-root content into Starlight pages under
 * site/src/content/docs/. Run via `npm run sync`. The work is done by the
 * handbook's site-sync piece; this file holds what is particular to this site.
 * Skills folder, domains, docs URL and credit come from [tool.skill-linter]
 * in pyproject.toml.
 */

import path from 'node:path';
import { syncSite } from '../src/components/site-sync/sync.mjs';

const BASE_PATH = '/writing-with-agents';
const GITHUB_BLOB = 'https://github.com/Jeffallan/writing-with-agents/blob/main';

syncSite({
  repoRoot: path.resolve(import.meta.dirname, '..', '..'),
  siteDir: path.resolve(import.meta.dirname, '..'),
  base: BASE_PATH,
  githubBlob: GITHUB_BLOB,
  pageTitle: 'Writing With Agents | {title}',
  docs: [
    {
      src: 'README.md',
      dest: 'readme.md',
      title: 'README',
      description: 'Project overview, architecture, and usage patterns',
      category: 'project',
    },
    {
      src: 'CHANGELOG.md',
      dest: 'changelog.md',
      title: 'Changelog',
      description: 'Version history and release notes',
      category: 'project',
    },
  ],
  workflowsDir: 'docs/workflow',
  linkMap: { LICENSE: `${GITHUB_BLOB}/LICENSE` },
  llmsOrder: [
    { category: 'skills', name: 'Skills' },
    { category: 'workflows', name: 'Workflows' },
    { category: 'project', name: 'Optional' },
  ],
  indexMirror: (version) => `# Writing With Agents

> ${version.skillCount} specialized writing skills for Claude Code — AI-assisted writing with progressive disclosure and collaborative oscillation.

Separate brainstorming, structuring, and editing into distinct AI-assisted phases using Betty Flowers' cognitive writing framework.

## Quick Install

Inside Claude Code, add this repo as a plugin marketplace and install:

\`\`\`
/plugin marketplace add Jeffallan/writing-with-agents
/plugin install writing-with-agents@writing-with-agents
\`\`\`

Or via [skills.sh](https://skills.sh):

\`\`\`bash
npx skills add Jeffallan/writing-with-agents
\`\`\`

## Stats

- **${version.skillCount}** specialized skills across 7 domains
- **${version.workflowCount}** workflow commands
- **${version.referenceFileCount}** deep-dive reference files

See the [README](${BASE_PATH}/readme/) for full usage and architecture details.
`,
});
