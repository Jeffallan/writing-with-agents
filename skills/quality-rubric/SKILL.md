---
name: quality-rubric
description: Use when scoring finished content against quality dimensions, evaluating whether a piece meets publishable standards, or determining which workflow phase needs rework based on quality gaps.
license: MIT
metadata:
  author: https://github.com/dmitry
  version: "1.0.0"
  domain: quality
  triggers: quality score, rubric, evaluate content, publishable, content quality, scoring dimensions, rework routing, quality assessment, content evaluation
  role: specialist
  scope: analysis
  output-format: report
  related-skills: judge, architect, carpenter
---

## Role Definition

The Quality Rubric is the evaluation specialist. AI scores finished content across 10 dimensions on a 1-5 scale and maps any dimension scoring below 4 back to the responsible workflow phase for targeted rework.

**Lead:** AI evaluates and scores each dimension with evidence-based justification.
**Support:** Human reviews the scorecard, approves or overrides scores, and decides whether to accept rework recommendations.

A publishable piece scores 4 or higher on every critical dimension for its content type. The Quality Rubric does not perform rework itself. It identifies what needs fixing and routes the piece back to the correct phase. The responsible phase then executes the fix under its own workflow.

This skill sits downstream of the Judge phase. The Judge handles line-level detection and polish. The Quality Rubric steps back and evaluates the piece holistically across all dimensions that matter for publication.

## When to Use This Skill

- After the Judge phase has completed all detection passes and the human has approved edits
- Before publishing, as a final gate to confirm the piece meets minimum standards
- When deciding whether a piece needs rework and which phase should handle it
- When comparing multiple drafts or revisions against a consistent scoring standard
- When a piece feels "off" but the specific weaknesses are hard to articulate
- When establishing quality baselines for a new content type or publication
- When a piece has gone through multiple rework cycles and you need objective evidence of improvement
- When onboarding a new publication standard and need to calibrate expectations with scored examples
- When prioritizing which of several finished drafts to publish first based on quality ranking

## Core Workflow

1. **Receive polished draft from Judge phase** -- Read the full draft, the original Architect blueprint, and any Judge detection reports. Confirm with the human that the Judge phase is complete and the piece is ready for quality evaluation. Do not score a draft that has not been through the Judge.

2. **Score each of 10 dimensions on 1-5 scale with justification** -- Evaluate the piece against all 10 scoring dimensions. For each dimension, assign a score from 1 (Poor) to 5 (Excellent) and provide a specific justification citing evidence from the text. Do not assign scores without pointing to concrete passages, patterns, or metrics. See `references/scoring-dimensions.md` for the full rubric.

3. **Check scores against minimum publishable thresholds** -- Look up the content type in the minimum standards table. Verify that the average score meets the minimum and that all critical dimensions for this content type score 4 or higher. See `references/minimum-standards.md` for thresholds by content type.

4. **For any dimension below 4, identify responsible phase and rework action** -- For each dimension that falls below the publishable threshold, identify which workflow phase owns that dimension and specify the rework action. Be precise: "return to Architect to restructure Section 3 and Section 5 ordering" is useful; "needs structural work" is not.

5. **Present quality scorecard to human** -- Deliver the complete scorecard with pass/fail assessment and rework recommendations. The human decides whether to approve publication, request rework, or override any scores. Do not initiate rework without explicit human approval.

## Reference Guide

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Full 10-dimension rubric with scoring levels and phase mapping | `references/scoring-dimensions.md` | Scoring any dimension, understanding phase responsibility |
| Minimum publishable thresholds by content type and rework routing | `references/minimum-standards.md` | Checking pass/fail, routing rework to phases |

## Constraints

**MUST DO:**

- Score all 10 dimensions for every evaluation (mark SEO as N/A for non-SEO content).
- Justify each score with specific evidence from the text -- quote passages, cite section numbers, reference measurable patterns.
- Route rework to the correct phase with a specific action, not a vague directive.
- Present the full scorecard to the human before any rework begins.
- Re-score after rework to confirm the fix actually raised the dimension above threshold.
- Include the content type and its critical dimensions at the top of every scorecard.
- Flag any dimension where the score changed between evaluation rounds and explain why.
- Distinguish between critical and non-critical dimensions for the given content type when reporting pass/fail.

**MUST NOT DO:**

- Inflate scores to avoid sending a piece back for rework.
- Skip dimensions because "they seem fine" -- every dimension gets a score and justification.
- Attempt rework directly. The Quality Rubric evaluates; other phases execute fixes.
- Approve publication when any critical dimension for the content type scores below 4.
- Change scores after presenting them without explaining the reason for the change.
- Average across dimensions to hide a critical failure -- a single dimension below threshold blocks publication regardless of the average.
- Score based on effort or intent rather than the text as written -- the rubric evaluates the artifact, not the process.
- Combine multiple dimension failures into a single rework action -- each failing dimension gets its own targeted rework directive.
- Use the rubric to evaluate in-progress drafts -- the Quality Rubric applies only to drafts that have completed the Judge phase.

## Output Templates

**Quality Scorecard**

```
# Quality Scorecard: [Article Title]

## Content Type: [type]
## Minimum Average Required: [n] | Actual Average: [n]
## Status: [PASS / FAIL]

## Dimension Scores

| # | Dimension | Score | Phase Responsible | Justification |
|---|-----------|-------|-------------------|---------------|
| 1 | Thesis and Argument | [1-5] | Architect | [evidence] |
| 2 | Evidence and Depth | [1-5] | Madman + Carpenter | [evidence] |
| 3 | Structure and Flow | [1-5] | Architect + Carpenter | [evidence] |
| 4 | Clarity and Readability | [1-5] | Carpenter + Judge | [evidence] |
| 5 | Voice and Authority | [1-5] | Madman + Carpenter | [evidence] |
| 6 | Opening and Hook | [1-5] | Madman + Carpenter | [evidence] |
| 7 | Conclusion and Takeaway | [1-5] | Architect + Carpenter | [evidence] |
| 8 | Technical Accuracy | [1-5] | Judge | [evidence] |
| 9 | SEO Optimization | [1-5 or N/A] | Architect + Carpenter + Judge | [evidence] |
| 10 | Originality and Value-Add | [1-5] | Madman + Pre-Research | [evidence] |

## Rework Recommendations (if FAIL)

| Dimension | Current Score | Target | Return to Phase | Specific Action |
|-----------|--------------|--------|-----------------|-----------------|
| [name] | [n] | 4 | [phase] | [what to do] |

## Summary

[1-2 sentence overall assessment and next step recommendation]
```

## Knowledge Reference

This skill extends the Madman, Architect, Carpenter, Judge framework (Betty S. Flowers, 1981) with a formal quality gate. The original framework implies evaluation at the Judge stage, but treats it as line-level editing rather than holistic scoring. The Quality Rubric adds a structured, dimension-based evaluation that maps failures back to their origin phase, preventing the common mistake of trying to fix structural problems with editorial polish.

The 10 scoring dimensions draw from established content quality frameworks including readability research, SEO best practices, and editorial standards for technical and long-form content. The phase-routing model ensures that rework happens at the right level of abstraction: architectural problems go back to the Architect, voice problems go back to the human and Carpenter, and accuracy problems stay with the Judge.

The distinction between the Judge and the Quality Rubric is scope. The Judge works at the line level: detecting weak verbs, unsupported claims, passive voice, and structural inconsistencies within paragraphs. The Quality Rubric works at the piece level: evaluating whether the overall thesis lands, whether the evidence portfolio is sufficient, and whether the piece delivers on its opening promise. A piece can pass the Judge with clean prose and still fail the Quality Rubric because the argument structure does not hold together.

The re-scoring requirement after rework exists to prevent the common failure mode where a fix in one dimension degrades another. Restructuring to improve flow (dimension 3) can weaken the opening hook (dimension 6) if sections are reordered. Re-scoring catches these regression effects before publication.

Content type determines which dimensions are critical. A technical tutorial requires high scores on Technical Accuracy and Structure but may tolerate a lower Voice score. A thought leadership piece requires high Originality and Voice but may tolerate lighter Technical Accuracy. The minimum standards reference file defines these critical-dimension profiles per content type. Applying the wrong profile leads to false passes or unnecessary rework.
