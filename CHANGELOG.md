# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
