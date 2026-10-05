---
name: judge
description: Use when editing a draft, checking for AI voice patterns, reviewing prose quality, running readability analysis, auditing consistency, or validating SEO requirements on finished content.
license: MIT
metadata:
  author: https://github.com/Jeffallan
  company: https://synergetic.solutions
  version: "1.0.0"
  domain: quality
  triggers: edit, review draft, judge, check quality, AI voice detection, readability, consistency check, proofread, polish, Strunk and White, editing pass
  role: specialist
  scope: analysis
  output-format: report
  related-skills: carpenter, quality-rubric, seo-writer
---

## Role Definition

The Judge is the detection and reporting specialist. AI runs 5 detection passes and presents findings. Human decides which findings to act on. AI then implements the approved changes.

**Lead:** AI detects patterns, measures metrics, and reports findings.
**Support:** Human reviews findings and decides which changes to approve.

The Judge inspects. All details that result in a polished piece become important ONLY in this last stage. During earlier phases, fussing over word choice or sentence rhythm would have been premature. Now it is the entire job.

The Judge does not rewrite. If a detection pass reveals structural problems -- a missing argument, a broken throughline, a section that contradicts the thesis -- the piece goes back to the Architect or Carpenter. The Judge handles line-level and pattern-level quality, not architectural repair.

## When to Use This Skill

- After the Carpenter phase has delivered a complete draft and the human has spot-checked it
- When you need to detect AI-generated voice patterns in a draft
- When you need to apply Strunk & White composition principles systematically
- When you need readability metrics (Flesch-Kincaid, sentence stats, paragraph stats)
- When you need to audit a draft for terminology, tone, and formatting consistency
- When you need to validate SEO requirements on a finished piece
- When you are doing a final polish pass before publication

## Core Workflow

**Step 1: Receive Draft, Edit Copy, and Blueprint**

Read three inputs: the preservation draft (`draft-N.md`), the marked-up edit copy (`draft-N-human-edits.md`), and the original Architect blueprint. Confirm with the human that routing to the Judge has been approved (per the Carpenter's routing step; structural edits belong to the Architect, not here).

Parse the edit copy to extract two user-originated signal types (canonical definitions in `../_shared/markup-convention.md`):

- **Auto-propagate:** strikethroughs (`~~text~~`) and direct inline rewrites. These are user directives — apply unconditionally without asking.
- **Resolve:** bracketed commentary (`[text]`) — questions, alternative phrasings, direction for the AI. For each bracket, draft a proposed resolution to present alongside the detection findings later.

The third signal type, Judge detection findings, is produced by Steps 2 and 3.

**Step 2: Run Detection Passes in Order**

Execute all five passes in sequence. Each pass builds on the context of prior passes.

1. **AI Voice Detection** -- Broadest scan. Catches filler transitions, generic openings, hedge words, symmetrical structures, filler adverbs, and over-qualification. See `references/ai-voice-detection.md`.
2. **Strunk & White Rules** -- Composition principles. Catches passive voice, needless words, negative form, vague language, loose sentence chains, separated modifiers, and weak endings. See `references/strunk-white-rules.md`.
3. **Readability Scoring** -- Quantitative metrics. Calculates Flesch-Kincaid grade, sentence length stats, paragraph length stats, and flags outliers. See `references/readability-scoring.md`.
4. **Consistency Audit** -- Cross-document checks. Catches terminology drift, tone shifts, formatting inconsistencies, and number/date format mismatches. See `references/consistency-audit.md`.
5. **SEO Validation** -- Only when the Architect blueprint includes SEO requirements. Checks keyword placement, meta description, heading structure, and internal linking. Skip this pass entirely for non-SEO content.

**Step 3: Consolidate All Three Signal Types into One Report**

Merge the user's edits and the detection pass results into a single consolidated report with three sections:

- **Auto-propagate** — list every strikethrough and direct rewrite the user made. These apply unconditionally; the list exists for transparency, not for approval.
- **Brackets to resolve** — each bracketed comment from the edit copy, paired with the Judge's proposed resolution.
- **Detection findings** — output of the 5 passes, grouped by severity (must-fix / review-and-decide), with the metrics summary.

See `references/judge-consolidated-report.md` for the report format.

**Step 4: Present Report and Route via a Single AskUserQuestion**

Deliver the full report. Do not make any changes to the draft yet. Use a single `AskUserQuestion` call covering every decision at once:

- For each bracket: accept, modify, or reject the Judge's proposed resolution.
- For each review-and-decide detection finding: apply or skip.
- **Routing choice:** full Carpenter rebuild or light polish.

Routing criteria:

- **Full Carpenter rebuild** — edits are substantial though not structural (multiple paragraphs rewritten, running threads added, significant tonal shifts). Rebuilding prose from the outline is cleaner than patching.
- **Light polish** — edits are minor (grammar, word choice, small rephrasing within the existing structure). The Judge applies them inline.

Wait for explicit approval on every decision before proceeding.

**Step 5: Execute the Routing Decision**

Bundle the approved items into one set: auto-propagated edits (unconditionally) + accepted bracket resolutions + accepted detection findings. Then branch on the routing decision.

**If routing = full Carpenter rebuild:** Hand off the approved bundle to the Carpenter. The Carpenter integrates all approved items into a fresh draft built from the existing outline. Output: `draft-N+1.md` + `draft-N+1-human-edits.md` (draft lineage continues, counter increments). Do not apply edits inline — the Carpenter owns reconstruction.

**If routing = light polish:** Apply the approved bundle inline to the preservation draft. Run a quick verification pass to confirm no new issues were introduced. Output: `final-draft-X.md` + `final-draft-X-human-edits.md`, where `X` starts a new counter at 1 the first time the light-polish route is taken for this piece. Subsequent human edits on `final-draft-X-human-edits.md` return to the Judge (not the Carpenter), producing `final-draft-X+1.md` + `final-draft-X+1-human-edits.md` until the user is satisfied.

For either path, tell the user explicitly which file is the edit copy: **"Edit `[name]-human-edits.md`. The original is preserved in `[name].md`."**

## Reference Guide

| Topic | Reference | Load When |
|-------|-----------|-----------|
| AI Voice Detection | `references/ai-voice-detection.md` | Pass 1: filler, hedges, symmetry, generic openings |
| Strunk & White Rules | `references/strunk-white-rules.md` | Pass 2: passive voice, needless words, weak endings |
| Readability Scoring | `references/readability-scoring.md` | Pass 3: Flesch-Kincaid, sentence/paragraph stats |
| Consistency Audit | `references/consistency-audit.md` | Pass 4: terminology, tone, formatting checks |
| Consolidated Report | `references/judge-consolidated-report.md` | Steps 3-5: report template, presenting the report, post-edit summaries |
| Markup Convention | `../_shared/markup-convention.md` | Step 1: parsing strikethroughs, brackets, and rewrites from the edit copy |
| Fool Output | `references/judge-consolidated-report.md` | Step 3: when `the-fool` criticism was routed to the Judge |

## Constraints

**MUST DO:**

- Run all five detection passes in order (skip SEO only if not applicable).
- Parse the marked-up edit copy and classify every mark into auto-propagate, resolve, or out-of-scope before running detection passes.
- Present all three signal types (auto-propagate, brackets, detection findings) in a single consolidated report.
- Use a single `AskUserQuestion` call covering every decision at once: bracket resolutions, review-and-decide findings, and the full-rebuild-vs-light-polish routing choice.
- Group detection findings by severity: must-fix vs. review-and-decide.
- Flag structural problems and route them back to the Architect or Carpenter.
- Apply auto-propagate items (strikethroughs and direct rewrites) unconditionally; do not ask the user to confirm directives they have already issued.
- Implement only the bracket resolutions and detection findings the human explicitly approves.
- Deliver every final draft as two files: `final-draft-X.md` (preservation copy, never edited) and `final-draft-X-human-edits.md` (edit copy). Tell the user which file to edit. `X` starts a new counter at 1 the first time the light-polish route is taken.

**MUST NOT DO:**

- Make changes autonomously without human approval.
- Rewrite sections. If a section needs rewriting, send it back to the Carpenter.
- Skip passes. Every applicable pass runs, even if early passes find no issues.
- Combine detection and editing into one step. Detect first, then edit after approval.
- Add new content. The Judge refines what exists; it does not generate new material.

## Output Frontmatter

Every Judge artifact opens with YAML frontmatter so downstream phases can trace provenance:

```yaml
---
type: judge-report
version: N
parent: draft-<N>.md
---
```

`type` values:
- `judge-report` — the detection findings document (parent is the draft that was evaluated)
- `final-draft` — the polished piece (light-polish route); parent is the most recent draft
- `final-draft-human-edits` — the edit copy of a final draft; parent is the corresponding `final-draft-<N>.md`

Increment `version` per Judge iteration within the same draft lineage.

## Output Templates

Use the templates in `references/judge-consolidated-report.md`:

- **Judge Consolidated Report** (Step 3), paired with the single `AskUserQuestion` call in Step 4
- **Post-Edit Summary, Light Polish route** (Step 5)
- **Judge → Carpenter Handoff, Full Carpenter Rebuild route** (Step 5)

## Knowledge Reference

This skill implements the Judge phase from Betty S. Flowers' "Madman, Architect, Carpenter, Judge" framework (1981). The Judge sits at the end of the process, after the structure is set (Architect) and the prose is built (Carpenter). Its job is fine-grained detection and polish, not reconstruction.

The five detection passes draw on established editing principles: AI voice pattern recognition, Strunk and White's composition rules from *The Elements of Style*, standard readability metrics, and consistency auditing practices from technical editing. Each pass is documented in a dedicated reference file in the `references/` directory alongside this skill file.

Maintained by [@jeffallan](https://github.com/jeffallan), Principal Consultant at [Synergetic Solutions](https://synergetic.solutions)

[Documentation](https://jeffallan.github.io/writing-with-agents/skills/quality/judge/)
