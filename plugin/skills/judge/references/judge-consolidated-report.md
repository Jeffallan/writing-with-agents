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

The report carries all three signal types from Step 3: the user's auto-propagate edits, the brackets to resolve, and the detection findings.

```markdown
# Judge Consolidated Report: [Article Title]

**Draft:** draft-N.md (edit copy: draft-N-human-edits.md)
**Architect blueprint:** [reference to blueprint]
**Target audience:** [from blueprint]
**Content type:** [General / Technical]
**Date of review:** [date]

---

## Auto-Propagate (user directives, applied unconditionally)

Listed for transparency, not for approval.

- [Strikethrough at location]: [what was cut]
- [Direct rewrite at location]: [before] → [after]

---

## Brackets to Resolve (user commentary + Judge proposed resolutions)

- [Bracket location]: "[user text]"
  Proposed resolution: [Judge's draft resolution]
  Decision: accept / modify / reject?

---

## Detection Findings

### Must-Fix Issues

Issues that almost always improve the piece. These include needless words, throat-clearing, filler transitions, broken parallelism, negative form, clear formatting errors, and broken heading hierarchy.

#### From Pass 1: AI Voice Detection
- [Finding]: [Location] -- [Explanation]

#### From Pass 2: Strunk & White
- [Finding]: [Location] -- [Explanation and suggested replacement]

#### From Pass 3: Readability
- [Finding]: [Location] -- [Metric value vs. target]

#### From Pass 4: Consistency
- [Finding]: [Location] -- [Explanation]

### Review-and-Decide Issues

Issues that require human judgment. The AI flags these but does not presume they are wrong. Passive voice may be justified. A hedge word may reflect genuine uncertainty. A long sentence may be deliberately complex.

#### From Pass 1: AI Voice Detection
- [Finding]: [Location] -- [Explanation and recommendation]
  Decision: apply / skip?

#### From Pass 2: Strunk & White
- [Finding]: [Location] -- [Explanation and recommendation]
  Decision: apply / skip?

#### From Pass 3: Readability
- [Finding]: [Location] -- [Metric value vs. target, context]
  Decision: apply / skip?

#### From Pass 4: Consistency
- [Finding]: [Location] -- [Explanation and options]
  Decision: apply / skip?

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

---

## Routing Recommendation

[Full Carpenter rebuild / Light polish] -- [one-sentence reasoning]
```

Pair this report with a single `AskUserQuestion` call covering bracket decisions, review-and-decide decisions, and the routing choice.

---

## Incorporating Fool Output

When `the-fool` skill has produced criticism and the routing decision sent tonal-only revisions to the Judge, incorporate the Fool's findings alongside the five detection passes during aggregation. Treat Fool tonal items (word swaps, register adjustments, softening absolutes) as additional candidates in the consolidated report — the human still decides which to accept.

Reject Fool output that contains structural revisions (scoping, reframing, adding evidence, repositioning arguments, new sections). Structural changes belong to the Architect. Route the structural items back and proceed with only the tonal remainder.

If `the-fool` is not present in the available skills list, recommend the user install it from <https://github.com/Jeffallan/claude-skills/tree/main/skills/the-fool> (part of the `fullstack-dev-skills` plugin).

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

1. State the counts: auto-propagate edits, brackets to resolve, must-fix issues, and review-and-decide issues.
2. Present the full report. Do not change the draft yet.
3. Use a single `AskUserQuestion` call for every decision: each bracket resolution (accept, modify, reject), each review-and-decide finding (apply, skip), and the routing choice (full Carpenter rebuild or light polish).
4. Wait for explicit approval on every decision before proceeding.
5. Execute the routing decision with the approved bundle: auto-propagate edits, accepted bracket resolutions, and accepted detection findings.
6. Close with the matching post-edit summary below.

---

## Post-Edit Summary: Light Polish Route

```
## Judge Light Polish Complete

Files written:
  - final-draft-X.md              (preservation copy, do not edit)
  - final-draft-X-human-edits.md  (edit copy — mark up this one)

Auto-propagated: [count]
Brackets resolved: [count accepted] / [count total]
Detection findings applied: [count accepted] / [count total]
Structural issues routed back: [list, if any]
Final word count: [n]
Ready for: Further light-polish pass through Judge, or publication
```

---

## Post-Edit Summary: Full Carpenter Rebuild Route

```
## Judge → Carpenter Handoff

Approved items bundled for rebuild:
  - Auto-propagate: [count]
  - Bracket resolutions accepted: [count]
  - Detection findings accepted: [count]

Carpenter will output:
  - draft-N+1.md
  - draft-N+1-human-edits.md

Outline used: outline-N.md (unchanged)
```
