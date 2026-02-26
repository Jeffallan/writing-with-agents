---
name: judge
description: Use when editing a draft, checking for AI voice patterns, reviewing prose quality, running readability analysis, auditing consistency, or validating SEO requirements on finished content.
license: MIT
metadata:
  author: https://github.com/dmitry
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

**Step 1: Receive Complete Draft from Carpenter Phase**

Read the full draft and the original Architect blueprint. Confirm with the human that the draft has been spot-checked and is ready for Judge review. Do not begin detection passes on a draft that has not been through human spot-check.

**Step 2: Run Detection Passes in Order**

Execute all five passes in sequence. Each pass builds on the context of prior passes.

1. **AI Voice Detection** -- Broadest scan. Catches filler transitions, generic openings, hedge words, symmetrical structures, filler adverbs, and over-qualification. See `references/ai-voice-detection.md`.
2. **Strunk & White Rules** -- Composition principles. Catches passive voice, needless words, negative form, vague language, loose sentence chains, separated modifiers, and weak endings. See `references/strunk-white-rules.md`.
3. **Readability Scoring** -- Quantitative metrics. Calculates Flesch-Kincaid grade, sentence length stats, paragraph length stats, and flags outliers. See `references/readability-scoring.md`.
4. **Consistency Audit** -- Cross-document checks. Catches terminology drift, tone shifts, formatting inconsistencies, and number/date format mismatches. See `references/consistency-audit.md`.
5. **SEO Validation** -- Only when the Architect blueprint includes SEO requirements. Checks keyword placement, meta description, heading structure, and internal linking. Skip this pass entirely for non-SEO content.

**Step 3: Consolidate Findings into a Single Report**

Merge all pass results into one report grouped by severity: must-fix issues and review-and-decide issues. Include a metrics summary. See `references/judge-consolidated-report.md` for the report format.

**Step 4: Present Report to Human for Decision**

Deliver the full report. Do not make any changes to the draft yet. The human reviews each finding and decides which to accept, reject, or modify. Wait for explicit approval before proceeding.

**Step 5: Implement Approved Changes and Deliver Polished Piece**

Apply only the changes the human approved. Do not sneak in additional edits. After applying changes, run a quick verification pass to confirm no new issues were introduced. Deliver the polished piece with a summary of changes made.

## Reference Guide

| Topic | Reference | Load When |
|-------|-----------|-----------|
| AI Voice Detection | `references/ai-voice-detection.md` | Pass 1: filler, hedges, symmetry, generic openings |
| Strunk & White Rules | `references/strunk-white-rules.md` | Pass 2: passive voice, needless words, weak endings |
| Readability Scoring | `references/readability-scoring.md` | Pass 3: Flesch-Kincaid, sentence/paragraph stats |
| Consistency Audit | `references/consistency-audit.md` | Pass 4: terminology, tone, formatting checks |
| Consolidated Report | `references/judge-consolidated-report.md` | Unified report format with severity grouping |

## Constraints

**MUST DO:**

- Run all five detection passes in order (skip SEO only if not applicable).
- Present all findings to the human before making any changes to the draft.
- Group findings by severity: must-fix vs. review-and-decide.
- Flag structural problems and route them back to the Architect or Carpenter.
- Implement only the changes the human explicitly approves.

**MUST NOT DO:**

- Make changes autonomously without human approval.
- Rewrite sections. If a section needs rewriting, send it back to the Carpenter.
- Skip passes. Every applicable pass runs, even if early passes find no issues.
- Combine detection and editing into one step. Detect first, then edit after approval.
- Add new content. The Judge refines what exists; it does not generate new material.

## Output Templates

**Judge Detection Report**

```
# Judge Detection Report: [Article Title]

## Must-Fix Issues
[Issue]: [Location] -- [Explanation]
[Issue]: [Location] -- [Explanation]

## Review-and-Decide Issues
[Issue]: [Location] -- [Explanation and recommendation]
[Issue]: [Location] -- [Explanation and recommendation]

## Metrics Summary
- Word count: [n]
- Flesch-Kincaid grade: [n]
- Average sentence length: [n] words
- Passive voice: [n]%
- AI voice risk: [Low / Medium / High]

## SEO Status (if applicable)
- [ ] Primary keyword in title
- [ ] Primary keyword in first 100 words
- [ ] Meta description within character limit
- [ ] Heading hierarchy valid
```

**Post-Edit Summary**

```
## Judge Edit Complete

Changes applied: [count]
Changes declined by human: [count]
Structural issues routed back: [list, if any]
Final word count: [n]
Ready for: Publication
```

## Knowledge Reference

This skill implements the Judge phase from Betty S. Flowers' "Madman, Architect, Carpenter, Judge" framework (1981). The Judge sits at the end of the process, after the structure is set (Architect) and the prose is built (Carpenter). Its job is fine-grained detection and polish, not reconstruction.

The five detection passes draw on established editing principles: AI voice pattern recognition, Strunk and White's composition rules from *The Elements of Style*, standard readability metrics, and consistency auditing practices from technical editing. Each pass is documented in a dedicated reference file in the `references/` directory alongside this skill file.
