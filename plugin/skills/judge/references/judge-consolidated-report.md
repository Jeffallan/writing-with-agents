# Judge Consolidated Report Format

This reference defines the unified report format that combines findings from all detection passes. After running each individual pass, merge results into this single document for human review.

---

## Why This Order

The five passes run in a specific sequence. Each pass builds on the context established by prior passes.

1. **AI Voice Detection (Pass 1)** runs first because it is the broadest scan. It catches the most obvious problems -- filler transitions, generic openings, hedge words -- that would clutter later passes if not identified upfront. Flagging these first also prevents double-counting: a filler adverb caught in Pass 1 does not need to be re-flagged as a needless word in Pass 2.

2. **Strunk & White Rules (Pass 2)** runs second because it operates at the sentence level. With AI voice patterns already flagged, this pass can focus on composition: passive voice, needless words, negative form, vague language, structural repetition, and weak endings. These are craft issues, not AI tells.

3. **Readability Scoring (Pass 3)** runs third because it measures the result of Passes 1 and 2. Removing filler words and converting passive voice changes sentence lengths and word counts. Measuring readability before those fixes would produce inaccurate numbers. This pass provides quantitative evidence for problems that the earlier passes detected qualitatively.

4. **Consistency Audit (Pass 4)** runs fourth because it looks across the document rather than within individual sentences. Terminology, tone, formatting, and number conventions can only be audited once the sentence-level work is stable. Running this earlier risks flagging issues in passages that will be rewritten anyway.

5. **SEO Validation (Pass 5)** runs last and only when the Architect blueprint includes SEO requirements. SEO checks (keyword placement, meta description, heading structure) depend on the final text. Running them before the draft is polished would produce false negatives and false positives. Skip this pass entirely for non-SEO content.

---

## Report Template

```markdown
# Judge Detection Report: [Article Title]

**Draft received from:** Carpenter phase
**Architect blueprint:** [reference to blueprint]
**Target audience:** [from blueprint]
**Content type:** [General / Technical]
**Date of review:** [date]

---

## Must-Fix Issues

Issues that almost always improve the piece. These include needless words, throat-clearing, filler transitions, broken parallelism, negative form, clear formatting errors, and broken heading hierarchy.

### From Pass 1: AI Voice Detection
- [Finding]: [Location] -- [Explanation]

### From Pass 2: Strunk & White
- [Finding]: [Location] -- [Explanation and suggested replacement]

### From Pass 3: Readability
- [Finding]: [Location] -- [Metric value vs. target]

### From Pass 4: Consistency
- [Finding]: [Location] -- [Explanation]

---

## Review-and-Decide Issues

Issues that require human judgment. The AI flags these but does not presume they are wrong. Passive voice may be justified. A hedge word may reflect genuine uncertainty. A long sentence may be deliberately complex.

### From Pass 1: AI Voice Detection
- [Finding]: [Location] -- [Explanation and recommendation]

### From Pass 2: Strunk & White
- [Finding]: [Location] -- [Explanation and recommendation]

### From Pass 3: Readability
- [Finding]: [Location] -- [Metric value vs. target, context]

### From Pass 4: Consistency
- [Finding]: [Location] -- [Explanation and options]

---

## Metrics Summary

| Metric | Value |
|--------|-------|
| Word count | [n] |
| Flesch-Kincaid grade | [n] |
| Average sentence length | [n] words |
| Sentence length variation | SD [n], range [min]-[max] |
| Average paragraph length | [n] sentences |
| Passive voice | [n]% of sentences |
| AI voice risk level | [Low / Medium / High] |
| Must-fix issues | [count] |
| Review-and-decide issues | [count] |

---

## SEO Status (if applicable)

Skip this section entirely for non-SEO content.

- [ ] Primary keyword appears in title
- [ ] Primary keyword appears in first 100 words
- [ ] Primary keyword appears in at least one H2
- [ ] Secondary keywords present in body text
- [ ] Meta description written and within 150-160 characters
- [ ] Heading hierarchy is valid (H1 > H2 > H3, no skipped levels)
- [ ] Internal links included where relevant
- [ ] External links to authoritative sources included
- [ ] Image alt text contains relevant keywords (if images present)
- [ ] URL slug is concise and contains primary keyword

**SEO notes:** [Any observations about keyword density, missed opportunities, or conflicts between SEO requirements and prose quality]
```

---

## Severity Classification Guide

When assigning findings to "Must-Fix" or "Review-and-Decide," use these criteria:

**Must-Fix** -- The finding is almost certainly a defect:
- Filler transitions that add no meaning
- Generic openings that could apply to any article
- Needless word phrases with clear shorter replacements
- Negative form where the positive is stronger
- Broken heading hierarchy
- Same concept referred to by different names without justification
- Acronyms used without expansion
- Formatting inconsistencies within the same section

**Review-and-Decide** -- The finding may be intentional or context-dependent:
- Passive voice (sometimes justified)
- Hedge words (sometimes reflect genuine uncertainty)
- Long sentences (sometimes deliberately complex)
- Tone shifts (sometimes mark intentional section transitions)
- Vague language (sometimes serves transitional purposes)
- Symmetrical paragraph structure (sometimes a rhetorical device)
- Cross-section formatting differences (sometimes reflect different content types)

---

## Presenting the Report

When delivering the consolidated report to the human:

1. State the total count of must-fix and review-and-decide issues.
2. Present the full report.
3. Ask the human which review-and-decide items to accept, reject, or modify.
4. Do not begin editing until the human has responded.
5. After receiving approval, implement only the approved changes.
6. Deliver the polished piece with a summary of changes made.
