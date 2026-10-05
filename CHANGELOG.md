# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
