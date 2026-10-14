# v0.3.2 Feedback round after the Claude plugin directory launch

**Status:** Approved 2026-10-14 with modifications (count sync #16, CHANGELOG credit, claude-skills release process, awesome-list submission #17)
**Epic:** GitHub milestone [v0.3.2](https://github.com/Jeffallan/writing-with-agents/milestone/1)
**Repo:** [Jeffallan/writing-with-agents](https://github.com/Jeffallan/writing-with-agents) (base: `main` at `9fa1bb2`, v0.3.1)
**Created:** 2026-10-14

---

## 1. Epic overview

**Purpose.** v0.3.1 went live in the Claude plugin directory on 2026-10-13. The first outside user review found four gaps: Madman asks one clarifying question and often picks the wrong one, Judge lets AI-voice tells through, seo-writer does not produce alt text, and seo-writer names a schema type without producing the markup. The directory launch also left the docs describing a Claude Code-only install.

**User value.** Better seeds in Madman, cleaner final prose from Judge, a standalone human-voice pass usable from any CLAUDE.md, SEO output that covers accessibility and structured data, and install docs that reach Cowork and app users.

**Scope.**
- In: issues #7 to #17.
- Out: GEO TL;DR summaries (deferred by the maintainer), any change to skill descriptions or triggers.

**Stakeholders.** Maintainer (decides), directory users on Claude Code, Cowork, and the Claude apps, the feedback author, and upstream humanizer (attribution).

## 2. Goals and success metrics

**Primary goal.** Ship v0.3.2 through directory review with all nine issues closed.

**Success metrics.**
- `validate-skills.py`, `validate-markdown.py --check`, and `update-docs.py --check` exit 0 with zero warnings.
- Judge flags the staging tells (humanizer §1 to §5) on a fixture draft where v0.3.1 misses them.
- `/writing-with-agents:human-voice` in embedded mode returns only final text for a README paragraph, a code comment, and a commit message, with code and commit trailers unchanged.
- Docs site builds locally (`npm run build`), since CI does not build on PRs.

## 3. Requirements summary

**Functional.**
| # | Requirement |
|---|---|
| 7 | Madman may ask up to 3 questions in one `AskUserQuestion` round when the seed is ambiguous; no follow-ups |
| 8 | Judge runs a detection-only human-voice pass from a vendored humanizer v3.1.0 catalog; findings go in the Consolidated Report |
| 9 | New utility command `human-voice` with interactive mode (report, approve, new file) and embedded mode (final text only) |
| 10 | seo-writer writes descriptive, keyword-aware alt text for every image or image slot |
| 11 | seo-writer outputs a ready-to-paste JSON-LD block for the recommended schema type |
| 12 | Docs cover directory install on all surfaces, a text-only directory badge, and the review/pinning facts in the release checklist |
| 13 | Docs show users a Final Prose CLAUDE.md snippet for final deliverables only: finished content intended to be read by humans (READMEs, docs pages, articles, release notes, PR descriptions); commit messages, code comments, and changelog entries excluded (revised 2026-10-14 for per-run catalog cost) |
| 14 | This repo's CLAUDE.md adopts the same Final Prose rule |
| 15 | Human-voice pass over human-facing docs only |
| 16 | `update-docs.py` keeps skill, reference, and command counts in sync everywhere they are stated |
| 17 | Maintainer submits the project to awesome-claude-code through the web form, using prepared content |

**Non-functional.**
- SKILL.md stays at 80 to 100 non-blank lines (validator warning otherwise). Detail goes in references.
- Core Workflow keeps 5 to 7 steps; H2 order stays canonical.
- Default style constraints hold: no em dashes, no sentences starting with And or But.
- Vendored content keeps the MIT notice (Copyright (c) 2025 Siqi Chen) and a pinned tag.

**Business rules.**
- Judge never rewrites. Human-voice in Judge is detection-only.
- The human-voice command never overwrites the original in interactive mode.
- No "Official" or "Verified" wording, and no Anthropic or Claude logos, in the badge or docs.

**Edge cases.**
- Embedded mode on a code comment: comment text only; identifiers and doc-tag syntax unchanged.
- Embedded mode on a commit: conventional-commit prefix, issue refs, and trailers preserved.
- Writing sample present (Carpenter edit copy): voice matching overrides the dash rule only if the sample uses dashes; our style constraints still apply, so the command keeps the no-dash rule.
- No images in a draft: alt-text step reports "none" rather than inventing slots.
- Draft content type has no schema mapping: JSON-LD falls back to Article.

## 4. Technical change overview

| Component | Type | Description | Risk | Dependencies |
|---|---|---|---|---|
| `madman/SKILL.md`, `references/collaborative-seeding.md`, `references/content-type-adaptation.md:201`, `flowers-cycle/COMMAND.md` Phase 1 | Enhancement | Replace one-question rule with one round of up to 3 | Low (9) | None |
| `judge/references/human-voice.md` (new), `ai-voice-detection.md`, `judge-consolidated-report.md`, `judge/SKILL.md`, `flowers-cycle/COMMAND.md` Phase 5, README, CLAUDE.md attribution + release checklist | New + Enhancement | Vendor humanizer catalog, wire into Pass 1, add report section | Medium (14) | None; blocks #9, #13, #14, #15 |
| `commands/utilities/human-voice/{COMMAND.md,human-voice.yaml}` (new), `plugin.json` map, `workflow-manifest.yaml`, `docs/workflow/human-voice.md` (new), READMEs, manifest descriptions, `index.mdx` cards | New | Standalone command with interactive and embedded modes | Medium (14) | #8 |
| `seo-writer/SKILL.md`, `seo-validation-checklist.md`, `seo-content-types.md:100`, new `references/alt-text.md` | Enhancement | Alt-text workflow step, rule, examples, checklist item | Low (8) | None |
| `seo-writer/SKILL.md`, `seo-validation-checklist.md:66-78`, new `references/structured-data.md` | Enhancement | JSON-LD templates and output | Low (11) | None |
| `README.md`, `plugin/README.md`, `site/src/content/docs/index.mdx`, `CLAUDE.md` release checklist, `CHANGELOG.md` | Docs | Directory install paths, badge, review/pinning note | Low (9) | None |
| `README.md`, `plugin/README.md`, site | Docs | Final Prose snippet and scope guidance | Low (10) | #9 |
| `CLAUDE.md` | Enhancement | Final Prose section | Low (8) | #9 |
| `README.md`, `plugin/README.md`, `docs/examples.md`, `docs/workflow/*.md`, `index.mdx` | Docs | Human-voice pass over prose | Medium (12) | #8, #9, and after #12 and #13 land |
| `scripts/update-docs.py`, `index.mdx`, `plugin/README.md`, `README.md` tree, manifests | Fix | Count regexes and file coverage | Low (10) | None; must land before release so counts read 10 / 5 / 35 |
| None in repo | External | Awesome-list submission by the maintainer | Low (7) | v0.3.2 tagged |

**Risk scoring (Scope / Deps / Blocking / Stability / UX / Testing / Reversibility):**
- #7: 1/1/1/1/3/1/1 = 9
- #8: 2/1/3/2/3/2/1 = 14
- #9: 3/2/2/2/2/2/1 = 14
- #10: 1/1/1/1/2/1/1 = 8
- #11: 2/1/1/2/2/2/1 = 11
- #12: 2/1/1/1/2/1/1 = 9
- #13: 2/2/1/1/1/2/1 = 10
- #14: 1/2/1/1/1/1/1 = 8
- #15: 3/2/1/1/2/2/1 = 12
- #16: 2/1/2/1/1/2/1 = 10
- #17: 1/2/1/1/1/1/0 = 7 (no repo change)

No high-risk items. #8, #9, and #15 get incremental delivery and an extra review pass.

## 5. Impact analysis

**Codebase impact.** Three skills (madman, judge, seo-writer), one command (flowers-cycle), one new command, three new reference files (human-voice, alt-text, structured-data), manifests, READMEs, CLAUDE.md, docs site home page, and six workflow docs.

**Counts.** References go from 32 to 35; workflows from 4 to 5; skills stay at 10. #16 makes `update-docs.py` cover the manifest descriptions, `index.mdx`, `plugin/README.md`, and the README tree, so every stated count updates from one run.

**Data model / API changes.** None. Command registration adds one entry to the `plugin.json` commands map. `marketplace.json` must not gain a `commands` key (commit `439d4ad`).

**UX changes.** Madman's opening may ask up to three questions. Judge's report gains a human-voice section. A new slash command appears.

**Migration.** None for users. Directory users stay on `9fa1bb2` until v0.3.2 passes review; Claude Code marketplace users get it on `/plugin` update.

**Rollback.** Each issue is a separate commit or PR; `git revert` restores the previous behavior. The directory keeps serving the last reviewed commit, so a bad merge does not reach directory users until it is reviewed.

**Tradeoffs.**
- Vendoring humanizer costs manual upstream syncs; it buys every-surface support and review coverage.
- Keeping the vendored file verbatim (plus header) makes upstream diffs clean, at the cost of a thin wrapper in `ai-voice-detection.md`.
- Up to three Madman questions adds one turn of friction; it buys a better seed.

## 6. Testing strategy

The repo has no test suite. Verification is static validators plus scenario checks run in a fresh Claude Code session with the plugin loaded from the working tree. Load the working tree with the claude-skills `dev-link` pattern ([local_skill_development.md](https://github.com/Jeffallan/claude-skills/blob/main/docs/local_skill_development.md)): move the installed cache snapshot aside, symlink the working copy in its place, restart the CLI, and restore with `dev-unlink` afterwards.

**Static (every change).**
```bash
python3 scripts/validate-skills.py
python3 scripts/validate-markdown.py --check
python3 scripts/update-docs.py --check
cd site && npm run build
```

**RED-GREEN for skill behavior.** Before each skill change, run the scenario on v0.3.1 and record the failure; after the change, rerun and record the pass. Fixtures live in a local folder outside the repo.

| Fixture | Used by | RED on v0.3.1 | GREEN after |
|---|---|---|---|
| `fixtures/thin-seed.md`: topic only | #7 | One question asked | One round of up to 3 multiple-choice questions, then generation |
| `fixtures/staging-tells.md`: a draft with §1 to §5, §6, §8, §19, §22 tells | #8 | Pass 1 misses most | Human-voice findings list each tell with location |
| `fixtures/image-draft.md`: draft with 3 image slots | #10 | No alt text | Alt text per slot, specific and keyword-aware |
| `fixtures/howto-draft.md` | #11 | Schema type named only | Valid JSON-LD HowTo block (checked with a JSON parser) |
| `fixtures/commit.txt`, `fixtures/comment.py`, `fixtures/readme-para.md` | #9, #13 | Command absent | Embedded mode returns final text only; prefix, trailers, code untouched |

**Coverage goal.** Every acceptance criterion in #7 to #15 maps to a static check or a fixture scenario. The 90% branch-coverage target in the template does not apply to Markdown skills.

## 7. User behavior testing

**E2E scenarios.**
1. `/writing-with-agents:flowers-cycle` with a thin seed: Madman asks one batched round, generates, offers the Fool; Judge report shows a human-voice section; human approves a subset; only approved edits apply.
2. `/writing-with-agents:human-voice fixtures/staging-tells.md`: report, approval, rewrite saved as a new file, original unchanged.
3. A CLAUDE.md with the Final Prose snippet: a README section and a PR description pass through embedded mode; a commit message and a docstring do not.
4. `--seo` flowers-cycle run on `image-draft.md`: SEO report includes alt text and JSON-LD.

**Regression.**
- Fool stress-test step still offered in Phase 1.
- Judge still produces one `AskUserQuestion` call covering every decision.
- Judge routing (full rebuild vs light polish) unchanged.
- Existing four commands still register under their documented names.

## 8. Implementation notes

**Patterns to follow.**
- Commands: `COMMAND.md` with `description` and `argument-hint` frontmatter, `## Purpose`, `## Argument Parsing` table, body, `## Output`, `## Constraints` (MUST DO / MUST NOT DO). Matching `.yaml` with `command`, `path`, `description` (a docs path), `inputs`, `outputs`, `requires`, `status`.
- Registration: add a `plugin.json` commands map entry; add to `workflow-manifest.yaml` under `utilities[]`; add `docs/workflow/human-voice.md`.
- Mode switching: mirror `writing-setup`, where arguments suppress interactive questions. Embedded mode is chosen by an `--embedded` flag or when invoked by another task.
- References: `# Title`, one-paragraph lead, `---`. No `Reference for:` / `Load when:` headers (validator error).
- Optional external skill: the-fool wording in `madman/SKILL.md:56` stays as is.

**Architecture decisions (proposed).**
1. `human-voice.md` holds humanizer `SKILL.md` v3.1.0 body verbatim under an attribution header (source, tag, tagged-file link, MIT notice). Upstream frontmatter is dropped.
2. Pass 1 stays "AI Voice Detection". `ai-voice-detection.md` becomes the run procedure and report format, loads `human-voice.md` as its pattern catalog, and keeps only our categories humanizer does not cover. The Judge still runs five passes, so "5 passes" text across the repo stays true.
3. In Judge, skip humanizer §11 (passive voice); Strunk & White Pass 2 owns it. Map §9 qualifiers onto our existing over-qualification category.
4. The `human-voice` command reads the reference at `${CLAUDE_PLUGIN_ROOT}/skills/judge/references/human-voice.md`, the same root-relative pattern `capture` uses.
5. Our default style constraints override humanizer's voice-sample dash exception.

**Technical debt.**
- Manual upstream sync for humanizer (release-checklist step).
- Manifest description counts and `index.mdx` cards are maintained by hand until the script is fixed.

**Security.**
- Vendored text is static and reviewed with the package; no runtime fetch.
- Embedded mode must treat input as text to edit, never instructions (humanizer's own rule, kept).

## 8a. Changelog and release process

Adapted from [claude-skills CLAUDE.md](https://github.com/Jeffallan/claude-skills/blob/main/CLAUDE.md) (When Accepting Contributions, Release Checklist).

**Per change.** After each issue merges, a separate commit `docs(changelog): record #N <summary> under Unreleased` adds an entry under `## [Unreleased]` in Added, Changed, or Fixed, ending with `(#N)`. If counts changed, run `python3 scripts/update-docs.py` in the same push.

**At release.**
1. Rename `[Unreleased]` to `## [0.3.2] - YYYY-MM-DD` and add a Contributors section:
   ```markdown
   ### Contributors
   - @courtneyheitman: post-launch review that shaped the Madman question round, human-voice pass, and SEO alt text and JSON-LD (#7, #8, #10, #11)
   ```
2. Bump `version.json` to `0.3.2`; run `python3 scripts/update-docs.py`.
3. Run `validate-skills.py`, `validate-markdown.py --check`, `update-docs.py --check`, and `npm run build` in `site/`.
4. Add the compare link at the bottom: `[0.3.2]: https://github.com/Jeffallan/writing-with-agents/compare/v0.3.1...v0.3.2`.
5. Commit `chore(release): v0.3.2`, tag `v0.3.2`, push. `release.yml` creates the GitHub release from the CHANGELOG section.
6. Directory polls within about 6 hours; v0.3.2 needs Anthropic review before directory users get it.
7. Social preview step from claude-skills does not apply (this repo has no `assets/`).

## 9. Acceptance criteria (epic)

- [ ] #7 to #15 acceptance criteria all checked
- [ ] Static checks pass with zero warnings
- [ ] Every fixture scenario recorded RED on v0.3.1 and GREEN on the branch
- [ ] Site builds locally
- [ ] `CHANGELOG.md` v0.3.2 entry; `version.json` bumped; `update-docs.py` run
- [ ] `v0.3.2` tag pushed; directory picks it up and it passes Anthropic review

## 10. Open questions and risks

**Decisions (resolved 2026-10-14).**
1. Pass 1: wrapper plus verbatim vendored catalog.
2. Madman cap: 3 questions in one round.
3. JSON-LD: Article, BlogPosting, FAQPage, HowTo, Review.
4. Count drift: fixed by #16 in this milestone.

**Unknowns.**
- Whether directory review treats the vendored third-party file differently.
- Whether Cowork and the apps resolve `${CLAUDE_PLUGIN_ROOT}` for commands the same way Claude Code does (verify in #12).
- Public listing URL behavior for signed-out visitors.

**Assumptions.**
- Humanizer v3.1.0 stays MIT and the copy is allowed with notice.
- Commands are model-invocable by name, so a CLAUDE.md rule can trigger `writing-with-agents:human-voice`.

**Risks and mitigations.**
| Risk | Mitigation |
|---|---|
| Judge SKILL.md exceeds 100 lines | Keep additions to one routing row and one constraint; detail in references |
| Embedded mode alters code or trailers | Fixture checks on comment and commit; explicit MUST NOT in Constraints |
| #15 changes meaning in docs | Diff review per file; commands, paths, and links compared before and after |
| Release lag | Directory serves `9fa1bb2` until review; note in release checklist (#12) |

## 11. Codebase analysis

**Affected modules.**
- `plugin/skills/madman/`: SKILL.md:46, 75, 87; collaborative-seeding.md:67-93; content-type-adaptation.md:201
- `plugin/skills/judge/`: SKILL.md:17-26 role, 51-59 passes, 96-106 routing, 108-128 constraints, 157-161 knowledge; ai-voice-detection.md (147 lines); strunk-white-rules.md:25-36 passive; judge-consolidated-report.md:55-93 findings, 111-128 SEO status
- `plugin/skills/seo-writer/`: SKILL.md:40-50 workflow, 105-134 report template; seo-validation-checklist.md:66-78; seo-content-types.md:100
- `plugin/commands/writing/flowers-cycle/COMMAND.md`: 39-53 Phase 1, 122-146 Phase 5, 208-210 MUST NOT
- `plugin/.claude-plugin/plugin.json`:33-46 commands map; `.claude-plugin/marketplace.json` description; `plugin/commands/workflow-manifest.yaml` utilities
- `README.md`: 6 count markers, 9-14 badge row, 42-65 install, 113 Judge row, 136-141 commands table, 177-186 tree, 218-224 attribution
- `plugin/README.md`:7, 13 hardcoded counts; no install section
- `site/src/content/docs/index.mdx`: 3, 20-30 cards (31 References already stale), 34-49 install
- `CLAUDE.md`: 83-101 release checklist, 105-112 style constraints, 116-124 attribution

**Patterns discovered.**
- Commands: see Section 8. Registration requires the `plugin.json` map (commit `439d4ad`).
- AskUserQuestion in commands: quoted question, `Options:` bullet list of 3 to 4 labels. In skills: prose with parenthetical options; Judge uses one call for every decision.
- No existing mode switch; `writing-setup` argument-driven skip is the closest precedent.

**Reference implementations.**
- `plugin/commands/utilities/writing-setup/` for a utility command with argument-driven non-interactive behavior
- `plugin/commands/capture/` for `${CLAUDE_PLUGIN_ROOT}` reference loading and a Reference Guide table
- `madman/SKILL.md:56` and `flowers-cycle/COMMAND.md:51` for optional-skill wording
- `judge/references/strunk-white-rules.md:3` for inline credit of an outside source

**Test locations and conventions.**
- No tests. Validators: `scripts/validate-skills.py` (frontmatter, metadata, section order, 80-100 line SKILL.md, workflow YAML schema, manifest DAG, count consistency), `scripts/validate-markdown.py` (fences, tables; default path `plugin/skills` only), `scripts/update-docs.py --check`.
- CI (`.github/workflows/ci.yml`) runs validators on PRs; site build runs only on main.

## 12. Linked tickets

**Epic:** [v0.3.2](https://github.com/Jeffallan/writing-with-agents/milestone/1)

| Key | Summary | Type | Size |
|---|---|---|---|
| [#7](https://github.com/Jeffallan/writing-with-agents/issues/7) | Madman: short batch of clarifying questions | enhancement | S |
| [#8](https://github.com/Jeffallan/writing-with-agents/issues/8) | Judge: human-voice pass from vendored humanizer catalog | enhancement | M |
| [#9](https://github.com/Jeffallan/writing-with-agents/issues/9) | `/writing-with-agents:human-voice` command with embedded mode | enhancement | M |
| [#10](https://github.com/Jeffallan/writing-with-agents/issues/10) | SEO: keyword-aware alt text | enhancement | S |
| [#11](https://github.com/Jeffallan/writing-with-agents/issues/11) | SEO: JSON-LD structured data | enhancement | S |
| [#12](https://github.com/Jeffallan/writing-with-agents/issues/12) | Document the directory listing | documentation | S |
| [#13](https://github.com/Jeffallan/writing-with-agents/issues/13) | Final Prose CLAUDE.md snippet for users | documentation | S |
| [#14](https://github.com/Jeffallan/writing-with-agents/issues/14) | Final Prose rule in this repo's CLAUDE.md | enhancement | XS |
| [#15](https://github.com/Jeffallan/writing-with-agents/issues/15) | Human-voice pass over the docs | documentation | M |
| [#16](https://github.com/Jeffallan/writing-with-agents/issues/16) | update-docs.py keeps every count in sync | bug | S |
| [#17](https://github.com/Jeffallan/writing-with-agents/issues/17) | Submit to awesome-claude-code (maintainer, web form) | documentation | XS |

## Implementation Plan Adjustments

**Plan Created:** 2026-10-14
**Implementation Plan:** `implementation-plan.md` (this folder)

### Tickets Added
- [#16](https://github.com/Jeffallan/writing-with-agents/issues/16) update-docs.py keeps every count in sync: the maintainer asked that skill counts stay correct; discovery found the script misses the manifests, `index.mdx`, `plugin/README.md`, and the README tree
- [#17](https://github.com/Jeffallan/writing-with-agents/issues/17) Submit to awesome-claude-code: maintainer request; must be a human web-form submission per the list's rules
- [#18](https://github.com/Jeffallan/writing-with-agents/issues/18) Release v0.3.2: gives the claude-skills release process and the @courtneyheitman credit a ticket `/execute-ticket` can run

### Tickets Split
- None. No ticket exceeds 8 points.

### Story Points Updated
- Added `**Size:**` lines to all 12 issues (GitHub has no points field): #7 2, #8 5, #9 5, #10 2, #11 3, #12 2, #13 2, #14 1, #15 3, #16 3, #17 1, #18 2. Total 31.

### New Dependencies (GitHub blocked-by links)
- #9 blocked by #8: the command loads the vendored reference
- #13, #14 blocked by #9: the Final Prose rule invokes the command's embedded mode
- #15 blocked by #8, #9, #12, #13, #16: the docs pass runs after every other docs edit
- #18 blocked by #7 to #16: release waits for all work
- #17 blocked by #18: submission describes the shipped `human-voice` command

### Ticket Bodies
- All 12 issues rewritten as self-contained tickets (implementation steps with file:line references, files table, fixture RED/GREEN checks, acceptance criteria, changelog step).
