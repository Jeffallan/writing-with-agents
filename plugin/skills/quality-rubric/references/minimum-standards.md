# Minimum Publishable Standards

This reference defines the minimum quality thresholds for different content types. A piece passes the quality gate only when it meets both the minimum average score and scores 4 or higher on all critical dimensions for its content type.

## Publishable Thresholds by Content Type

| Content Type | Minimum Average | Critical Dimensions (must be 4+) |
|---|---|---|
| Technical documentation | 4.0 | Technical Accuracy (8), Clarity and Readability (4), Structure and Flow (3) |
| Blog post | 3.8 | Opening and Hook (6), Originality and Value-Add (10), Structure and Flow (3) |
| SEO long-form | 3.8 | SEO Optimization (9), Structure and Flow (3), Originality and Value-Add (10) |
| White paper | 4.2 | Evidence and Depth (2), Voice and Authority (5), Technical Accuracy (8) |
| Case study | 3.8 | Evidence and Depth (2), Opening and Hook (6), Conclusion and Takeaway (7) |
| Tutorial | 4.0 | Clarity and Readability (4), Structure and Flow (3), Technical Accuracy (8) |

**Reading the table:** The number in parentheses is the dimension number from `scoring-dimensions.md`. A piece of content must meet both conditions to pass: the average across all scored dimensions must meet or exceed the minimum average, AND every critical dimension for that content type must score 4 or higher.

**SEO dimension handling:** For content types without SEO objectives, dimension 9 (SEO Optimization) is marked N/A and excluded from the average calculation. For SEO long-form content, dimension 9 is critical and included in the average.

---

## Pass/Fail Decision Logic

1. Calculate the average score across all scored dimensions (exclude any marked N/A).
2. Check whether the average meets or exceeds the minimum for the content type.
3. Check whether every critical dimension for the content type scores 4 or higher.
4. The piece passes ONLY if both conditions are met.

**If the average is met but a critical dimension is below 4:** FAIL. The critical dimension must be fixed regardless of how strong the other scores are.

**If all critical dimensions are 4+ but the average is below minimum:** FAIL. The piece has weak spots across non-critical dimensions that collectively drag it below standard.

**If both conditions fail:** FAIL. Address critical dimensions first, then re-evaluate the average.

---

## Phase-Rework Routing Summary

When a dimension scores below 4, route the piece back to the responsible phase with a specific action. This table provides the default routing. The Quality Rubric should tailor the specific action to the particular weakness found.

| Dimension | Return to Phase | Default Rework Action |
|---|---|---|
| 1. Thesis and Argument | Architect | Re-run throughline identification. Distill single-sentence thesis. Verify every section connects. Cut sections that drift. |
| 2. Evidence and Depth | Madman, then Carpenter | Madman generates specific examples, data, and concrete scenarios for weak claims. Carpenter integrates new evidence into draft. |
| 3. Structure and Flow | Architect | Re-examine blueprint section order, heading hierarchy, and transition logic. Propose alternative structure for human approval. |
| 4. Clarity and Readability | Judge (or Carpenter for systemic issues) | Judge runs additional readability passes on flagged passages. If problems are systemic, Carpenter does a clarity-focused rewrite of affected sections. |
| 5. Voice and Authority | Human + Carpenter | Human rewrites key passages in their own voice. Carpenter preserves human voice while polishing. Cannot be fixed by AI alone. |
| 6. Opening and Hook | Madman, then Carpenter | Review Madman output for unused hook candidates -- anecdotes, data, provocative framings. Carpenter rebuilds opening around strongest candidate. |
| 7. Conclusion and Takeaway | Architect, then Carpenter | Architect defines what insight the conclusion must deliver. Carpenter rebuilds conclusion to synthesize argument into that insight. |
| 8. Technical Accuracy | Judge | Judge runs focused accuracy review, flagging and verifying every factual claim. If source material is flawed, return to research phase. |
| 9. SEO Optimization | seo-writer skill | Run SEO validation from seo-writer. Audit keyword placement, heading hierarchy, and meta description. Carpenter implements fixes. Judge verifies naturalness. |
| 10. Originality and Value-Add | Research + Madman | Research identifies gaps in existing content. Madman generates material filling those gaps using human experience. Requires human input. |

---

## Re-Scoring After Rework

After rework is complete and the piece returns from the responsible phase:

1. Re-score only the dimensions that were flagged for rework.
2. Verify the rework did not degrade other dimensions.
3. Recalculate the average with the new scores.
4. Re-check pass/fail conditions.

If the piece still fails, identify whether the rework was insufficient (same phase, deeper fix) or misdirected (different phase needed). Do not loop more than twice on the same dimension without escalating to the human for a decision on whether to accept the current quality level or fundamentally rethink the piece.
