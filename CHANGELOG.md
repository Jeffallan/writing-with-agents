# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- The docs site header has a Sites menu linking Jeff Smolinski's site and both docs sites, with the current one marked. The menu comes from the handbook's `site-nav` through Copier (`.copier-answers.yml`); `handbook-update.yml` opens a PR when it changes
- CI runs skill-linter as a report-only job, configured in `pyproject.toml`. It will replace the three validation scripts once its current findings (the missing H1 titles, #28) are fixed

### Changed

- CI lints and builds the docs site on every pull request and push to `main`, and the deploy waits for it. Before, the site was only built during deploy, which pull requests skip (#23)
- The docs site has a Prettier config (`site/.prettierrc`) matching its existing style, and its hand-written files are formatted to it (#23)
- The docs site moves to Astro 7.3, Starlight 0.42, sharp 0.35, Prettier 3.9, and prettier-plugin-astro 1.1. Sidebar groups use the `items` form Starlight 0.39 requires. js-yaml stays on 4 because Starlight still depends on its default export, and Dependabot skips js-yaml major updates (#22)

### Fixed

- The docs site footer reads "Principal Consultant at Synergetic Solutions" again. Astro 7 dropped the line break before the link, so the live site showed "atSynergetic"
- The docs site loads its own Google tag, `GT-MK98CW3N`, which reports to the site's Google Analytics stream. It had loaded the hub's tag (`G-QS4KFCN3S4`), whose page views also went to this site's stream, so hub and docs-site views were counted twice

### Security

- GitHub Actions in `ci.yml`, `validate.yml`, and `release.yml` are pinned to commit SHAs, with the release tag in a trailing comment
- Dependabot checks GitHub Actions and the docs site's npm dependencies weekly, one grouped pull request per ecosystem (`.github/dependabot.yml`)
- `actions/checkout` 7.0.1, `actions/setup-node` 7.1.0, and `actions/setup-python` 7.0.0, pinned to commit SHAs (#21)

## [0.3.2] - 2026-10-14

### Added

- Judge Pass 1 now marks AI-voice tells from a human-voice pattern catalog vendored from [humanizer](https://github.com/blader/humanizer) v3.1.0 (MIT, Siqi Chen) in `judge/references/human-voice.md`. Findings carry the catalog's pattern number (§N); staging tells (§1 to §5) and chatbot residue (§22) are must-fix. The Judge stays detection-only, and passive voice stays with the Strunk & White pass (#8)
- seo-writer writes alt text for every image or image slot: it describes the specific picture, adds a keyword only where the description stays accurate, and gives decorative images empty alt. Rules and examples live in `seo-writer/references/alt-text.md`, and the SEO Report gains an Images and Alt Text table (#10)
- seo-writer ends the SEO Report with a ready-to-paste JSON-LD block for Article, BlogPosting, FAQPage, HowTo, or Review, filled only from the draft and blueprint. Missing values stay as `TODO:` strings and are listed in the report. Templates and the content-type mapping live in `seo-writer/references/structured-data.md` (#11)
- Install instructions for the Claude plugin directory (Claude Code, Cowork, and the Claude apps) in the README, `plugin/README.md`, and the docs site home page, a text-only directory badge, and a release checklist note on directory polling, review, and commit pinning (#12)
- `/writing-with-agents:human-voice` command. It runs the human-voice catalog's full process on any text. Interactive mode reports tells by §N, asks once for approval, and saves the rewrite beside the original without overwriting it. `--embedded` (or a call from another task) returns only the final text. Code, doc tags, commit prefixes, issue references, and trailers stay unchanged (#9)
- Final Prose rule: a `CLAUDE.md` snippet in the README, `plugin/README.md`, and the human-voice workflow page that runs `human-voice` in embedded mode on finished deliverables (READMEs, docs pages, articles, release notes, PR descriptions). Commit messages, code comments, and changelog entries are left out because each run reads the full catalog (#13)

### Changed

- Madman asks one round of up to 3 clarifying questions in a single `AskUserQuestion` call, multiple choice where possible, when the seed is too thin. It still generates after that round with no follow-ups; the length question counts toward the cap (#7)
- This repository's `CLAUDE.md` adopts the Final Prose rule for its own finished prose (READMEs, docs pages, release notes, PR descriptions). Skill and command files, commit messages, code comments, and changelog entries stay out of scope (#14)
- Human-voice pass over the README, `plugin/README.md`, `docs/examples.md`, the workflow pages, and the docs site home page: staged contrasts, dashes, and bold labels removed, headings in sentence case. Links, commands, paths, and count markers are unchanged (#15)

### Fixed

- `scripts/update-docs.py` now keeps every stated count in sync: the manifest descriptions, the docs site home page, the skill and command headings in `plugin/README.md`, and the per-skill reference counts in the README tree. `--check` fails when any of them is stale or no longer matches its pattern (#16)

### Contributors

- [@courtneyheitman](https://github.com/courtneyheitman): post-launch review that shaped the Madman question round, human-voice pass, and SEO alt text and JSON-LD (#7, #8, #10, #11)

## [0.3.1] - 2026-10-05

### Added

- `plugin/README.md`, required by the plugin directory, listing the skills and commands and stating what the plugin reads, writes, and fetches

### Fixed

- Commands now register under their documented names (`/writing-with-agents:flowers-cycle`, `:content-strategy`, `:capture`, `:writing-setup`). The nested `commands/` layout had registered them as `writing-with-agents:writing:flowers-cycle:COMMAND` and similar

## [0.3.0] - 2026-10-05

### Added

- Output Frontmatter on the five outer-loop and cross-cutting skills, extending the v0.2.0 provenance chain: `knowledge-map` (research-intake), `domain-whirlybird` and `content-plan` (content-strategist), `harvest-report` (knowledge-harvester), `quality-scorecard` (quality-rubric), `seo-keyword-map` and `seo-report` (seo-writer). Cross-cutting artifacts attach with `applies-to` instead of `parent`
- Canonical edit-copy markup convention in `skills/_shared/markup-convention.md`, shared by Carpenter and Judge
- Carpenter handoff templates reference (`references/carpenter-handoff.md`)
- Plugin directory listing metadata in `plugin.json`: `homepage`, `documentationUrl`, `supportUrl`, `privacyPolicyUrl`
- Privacy policy on the documentation site
- Maintainer credit and documentation link at the end of every SKILL.md, with a site footer showing the credit once per page
- Representative use cases in `docs/examples.md`

### Changed

- The plugin now lives in `plugin/`, and the marketplace source points to `./plugin`, so installs ship only skills, commands, references, and LICENSE instead of the whole repository
- `flowers-cycle` command synced with the v0.2.0 skills: optional Fool stress-test after Madman, Architect re-entry from Carpenter, preservation + edit pair delivery and routing at Carpenter, three-signal Judge Consolidated Report with full-rebuild vs light-polish routing
- Judge templates and Fool output handling moved to `references/judge-consolidated-report.md`, replacing the pre-v0.2.0 "Judge Detection Report" template it still held
- Architect section mapping format moved into `references/blueprint-template.md`, which gains STAR/ARROW marks and per-section gaps
- Capture note template moved from `commands/capture/references/` to `references/capture/`, linked through `${CLAUDE_PLUGIN_ROOT}`
- Skill validator accepts 5-7 Core Workflow steps (was exactly 5); the 100-line limit is unchanged and all skills now pass with zero warnings
- Skill metadata `author` corrected and `company` added; plugin author email corrected
- GitHub Actions moved off Node 20: configure-pages v6, upload-pages-artifact v5, deploy-pages v5, action-gh-release v3; the docs site builds on Node 24
- GitHub Pages deploy split into its own CI workflow

### Fixed

- Install command in README and docs site: `writing-with-agents@writing-with-agents` (the documented `@Jeffallan/writing-with-agents` form fails)
- Skill validation skips underscore-prefixed directories such as `skills/_shared/`

## [0.2.0] - 2026-04-21

### Added

- YAML frontmatter convention on all inner-loop artifacts (`type`, `version`, `parent`, `derived-from`) so downstream phases can trace provenance across the Flowers cycle
- Preservation + edit copy pair at every Carpenter and Judge delivery: `draft-N.md` + `draft-N-human-edits.md` (Carpenter), `final-draft-X.md` + `final-draft-X-human-edits.md` (Judge light-polish route)
- Carpenter Step 6: post-delivery edit catalog with `AskUserQuestion` routing the marked-up draft to Architect (structural edits) or Judge (polish edits)
- Architect Return-from-Carpenter variant: regenerates the outline as `outline-N+1.md` when receiving structural rework from the Carpenter
- Handling Fool Output sections in Architect (accepts structural revisions) and Judge (accepts tonal-only revisions), with install recommendation pointing to <https://github.com/Jeffallan/claude-skills/tree/main/skills/the-fool> when `the-fool` is absent
- Madman Step 6: recommended thesis stress-test via `the-fool` before the Whirlybird phase
- Whirlybird Step 1 acknowledges optional Fool pass between Madman and Whirlybird
- Judge three-signal aggregation: auto-propagate (strikethroughs and direct rewrites, applied unconditionally), brackets-to-resolve (user commentary with proposed AI resolutions), detection findings (5-pass output)
- Judge routing decision (full Carpenter rebuild vs light polish) presented via a single `AskUserQuestion` call covering every decision at once

### Changed

- Judge consolidated report format now includes auto-propagate and brackets-to-resolve sections alongside detection findings, plus a routing recommendation
- Judge Post-Edit Summary template split into two variants (Light Polish route, Full Carpenter Rebuild route)
- Carpenter Citation Standard renumbered from Step 6 to Step 7 (now follows the routing step)

## [0.1.0] - 2026-02-08

### Added

- 10 specialized writing skills across 7 domains (generation, structure, craft, quality, strategy, seo, research)
- Inner loop: madman, whirlybird, architect, carpenter, judge, quality-rubric
- Cross-cutting: seo-writer
- Outer loop: research-intake, content-strategist, knowledge-harvester
- 31 reference files with deep procedural content
- 4 workflow commands: flowers-cycle, content-strategy, capture, writing-setup
- Validation scripts: validate-skills.py, validate-markdown.py, update-docs.py
- Progressive disclosure architecture (Tier 1 SKILL.md + Tier 2 references)
- Collaborative oscillation model defining AI/human lead and support roles per phase

[Unreleased]: https://github.com/Jeffallan/writing-with-agents/compare/v0.3.2...HEAD
[0.3.2]: https://github.com/Jeffallan/writing-with-agents/compare/v0.3.1...v0.3.2
