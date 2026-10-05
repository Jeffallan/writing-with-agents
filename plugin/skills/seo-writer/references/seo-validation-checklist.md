# SEO Validation Checklist

Run this checklist during the Judge phase after the Carpenter has delivered a complete draft. Every item is a pass/fail check. Flag failures by severity: **must-fix** (will hurt ranking) or **review** (optimization opportunity).

## Full SEO Validation Report Template

```
# SEO Validation Report: [Article Title]

Date: [date]
Target keyword: [primary keyword]
Search intent: [informational / navigational / commercial / transactional]
Word count: [n]

## On-Page Elements
- [ ] Title tag present and 50-60 characters
- [ ] Title tag contains primary keyword near the front
- [ ] Title tag is unique (not duplicated on site)
- [ ] H1 present and matches or closely mirrors title tag
- [ ] H1 contains primary keyword
- [ ] Meta description present and 150-160 characters
- [ ] Meta description contains primary keyword naturally
- [ ] Meta description describes value, not just topic
- [ ] URL slug is short, hyphenated, and contains primary keyword

## Keyword Placement
- [ ] Primary keyword appears in the first 100 words
- [ ] Primary keyword appears in at least one H2 heading
- [ ] Primary keyword appears in the conclusion or final section
- [ ] Secondary keywords are mapped to specific H2 headings
- [ ] Semantic variations are used throughout the body text
- [ ] No keyword stuffing detected (keyword reads naturally in every instance)
- [ ] Keyword density does not exceed 1-2% for the primary keyword

## Content Quality Signals
- [ ] Content is comprehensive: covers all table-stakes subtopics from SERP analysis
- [ ] Content is differentiated: includes at least one angle competitors miss
- [ ] Content is accurate: claims are supported by evidence, data, or examples
- [ ] Content is current: no outdated information, references, or screenshots
- [ ] Content is actionable: reader can apply what they learned
- [ ] Content is original: includes unique perspective, data, or experience

## Structure and Readability
- [ ] Heading hierarchy is valid (H1 > H2 > H3, no skipped levels)
- [ ] Headings are specific and keyword-aware (no vague labels)
- [ ] Headings read as a coherent story top to bottom
- [ ] Paragraphs are 2-4 sentences (no walls of text)
- [ ] Reading level matches target audience (check against SERP analysis)
- [ ] Visual breaks present: tables, lists, code blocks, or callouts every 300-400 words

## Featured Snippet Optimization
- [ ] Definition paragraphs (40-60 words) follow relevant H2 headings
- [ ] How-to steps are formatted as numbered lists immediately after H2
- [ ] Comparison data is presented in tables immediately after H2
- [ ] FAQ-style questions are used as headings where appropriate
- [ ] Snippet-target content directly answers the heading question without preamble

## E-E-A-T Signals
- [ ] Expertise demonstrated through technical specificity (not generic advice)
- [ ] First-hand experience visible: real examples, case references, specific numbers
- [ ] Sources are credible: links to authoritative references, not thin content
- [ ] Practical knowledge evident: content solves a real problem, not just explains a concept
- [ ] No excessive hedging: "might," "could," "it depends" used only when genuinely warranted
- [ ] Author context present: bio, credentials, or relevant experience referenced (if applicable)

## Schema Markup Recommendation
Based on the content type, recommend the appropriate schema:

| Content Type | Recommended Schema |
|---|---|
| How-to / Tutorial | HowTo schema |
| FAQ content | FAQPage schema |
| Article / Guide | Article schema |
| Product review | Review schema |
| Comparison | Article schema with itemReviewed |

Recommended schema for this piece: [schema type]
Reason: [brief justification based on content type and snippet targets]
```

## How to Use This Checklist

### During the Judge Phase

1. Open the checklist and work through each section top to bottom.
2. For each item, check the draft against the criteria. Mark pass or fail.
3. For failed items, note the specific location and what needs to change.
4. Classify each failure:
   - **Must-fix:** Missing title tag, broken heading hierarchy, no keyword in first 100 words, keyword stuffing, missing meta description.
   - **Review:** Paragraph slightly over 4 sentences, reading level one grade above target, missing one semantic variation.
5. Present the completed report to the human with must-fix items listed first.

### Severity Guide

**Must-fix items** are issues that directly harm ranking potential or user experience. These should be resolved before publication.

Examples:
- Title tag missing or over 60 characters
- No H1 on the page
- Primary keyword absent from first 100 words
- Heading hierarchy skips a level
- Keyword stuffing (same phrase repeated unnaturally)
- Meta description missing

**Review items** are optimization opportunities. The content can publish without addressing them, but fixing them improves search performance.

Examples:
- Semantic variation could be added in one more section
- A definition paragraph is 70 words instead of 40-60
- One H2 heading is vague but not keyword-empty
- Internal link count is below the 3-5 per 1,000 words target

### Integration with the Judge Consolidated Report

When the SEO Writer checklist runs as part of the Judge phase, its results feed into the Judge's consolidated report. The SEO section of the Judge report should include:

1. Overall SEO status: Pass / Needs Work / Fail
2. Must-fix count and list
3. Review item count and list
4. Featured snippet readiness: Ready / Partially Ready / Not Targeted
5. E-E-A-T assessment: Strong / Adequate / Weak
