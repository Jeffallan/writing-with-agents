---
name: seo-writer
description: Use when writing content targeting search visibility, optimizing articles for keywords and featured snippets, planning SEO-aware heading architecture, or validating on-page SEO elements.
license: MIT
metadata:
  author: https://github.com/dmitry
  version: "1.0.0"
  domain: seo
  triggers: SEO, search optimization, keywords, featured snippets, search intent, keyword mapping, SERP analysis, meta description, heading architecture, E-E-A-T, on-page SEO
  role: specialist
  scope: analysis
  output-format: report
  related-skills: architect, carpenter, judge
---

## Role Definition

The SEO Writer is the search optimization integration specialist. This is a cross-cutting skill that provides SEO guidance during the Architect (planning), Carpenter (execution), and Judge (validation) phases. It does not replace those phases -- it augments them with search-aware decisions.

**Lead:** AI analyzes search intent, maps keywords, and runs SEO validation.
**Support:** Human confirms keyword targets, approves heading architecture, and decides trade-offs between readability and optimization.

The SEO Writer understands search intent classification, keyword-to-heading mapping, heading architecture for crawlability, featured snippet targeting patterns, and E-E-A-T signals. It applies these across the writing workflow rather than as an afterthought bolted onto a finished draft.

## When to Use This Skill

- When the content goal includes organic search visibility
- When you need to analyze search intent before planning content structure
- When mapping keywords to headings during the Architect phase
- When targeting featured snippets or People Also Ask boxes
- When integrating keywords naturally during the Carpenter phase
- When writing or reviewing meta elements (title tags, meta descriptions, URL slugs)
- When running SEO validation during the Judge phase
- When auditing existing content for on-page SEO gaps
- When consolidating multiple thin pages into a single authoritative resource
- When a published article is underperforming in search and needs diagnostic analysis
- When planning internal linking strategy across a content cluster

## Core Workflow

1. **Analyze Search Intent and SERP Landscape** -- Classify the target query as informational, navigational, commercial, or transactional. Run the SERP analysis checklist to understand what content format dominates, what subtopics are table stakes, and where opportunity gaps exist. See `references/search-intent-analysis.md`.

2. **Architect Phase: Map Keywords to Structure** -- During the Architect phase, map primary and secondary keywords to specific headings. Plan which headings target People Also Ask questions. Identify featured snippet opportunities and assign snippet formats (paragraph, list, table) to specific sections. See `references/keyword-mapping.md`.

3. **Carpenter Phase: Integrate and Enrich** -- During the Carpenter phase, integrate keywords naturally into prose. Write the primary keyword into the first 100 words, H1, and conclusion. Use semantic variations throughout to avoid repetition. Write meta elements (title tag, meta description, URL slug). Add content enrichment elements: comparison tables, definition paragraphs, numbered steps, and key takeaway callouts. See `references/snippet-targeting.md`.

4. **Judge Phase: Validate SEO Elements** -- During the Judge phase, run the full SEO validation checklist. Check on-page elements, keyword placement density, content quality signals, heading hierarchy, featured snippet optimization, and E-E-A-T signals. Flag issues by severity. See `references/seo-validation-checklist.md`.

5. **Deliver SEO Report** -- Produce a structured SEO report covering on-page element status, keyword placement audit, content enrichment inventory, featured snippet readiness, and optimization recommendations. Present to the human for review before finalizing.

## Reference Guide

| Topic | Reference | Use When |
|-------|-----------|----------|
| Search Intent and SERP Analysis | `references/search-intent-analysis.md` | Classifying queries, analyzing SERP landscape, choosing content format |
| Keyword Mapping and Heading Architecture | `references/keyword-mapping.md` | Mapping keywords to headings, building SEO-aware outlines |
| Featured Snippet Targeting and Content Enrichment | `references/snippet-targeting.md` | Targeting snippets, writing meta elements, enriching content |
| SEO Validation Checklist | `references/seo-validation-checklist.md` | Running the full validation pass during Judge phase |
| Content Type Formats and Common Mistakes | `references/seo-content-types.md` | Choosing format by content type, avoiding SEO anti-patterns |

## Constraints

**MUST DO:**

- Match content format to the dominant search intent for the target query.
- Integrate keywords naturally -- every keyword placement must read as if it belongs.
- Validate heading hierarchy (H1 > H2 > H3, no skipped levels).
- Run SERP analysis before making structural decisions.
- Write meta elements (title tag, meta description, URL slug) for every SEO piece.
- Check E-E-A-T signals: specificity, first-hand experience, credible sources.
- Include content enrichment elements (tables, definition paragraphs, key takeaway callouts) in every SEO piece.

**MUST NOT DO:**

- Force keywords into awkward or unnatural sentences.
- Stuff keywords -- if density feels noticeable to a reader, it is too high.
- Sacrifice readability for SEO. Write for the reader first, optimize second.
- Skip SERP analysis and assume a content format.
- Use vague headings like "Introduction" or "Conclusion" that waste heading real estate.
- Treat SEO as a post-draft checklist. Integrate it from the Architect phase forward.
- Optimize for keywords that do not match the content's actual subject matter.
- Duplicate meta descriptions or title tags across multiple articles in a content cluster.
- Ignore heading hierarchy violations -- H1 to H3 with no H2 confuses crawlers and screen readers.
- Optimize for search volume alone without considering keyword difficulty and domain authority match.

## Output Templates

**SEO Report**

```
# SEO Report: [Article Title]

## Target Query
Primary keyword: [keyword]
Search intent: [informational / navigational / commercial / transactional]

## On-Page Elements
- Title tag (50-60 chars): [title]
- Meta description (150-160 chars): [description]
- URL slug: [slug]
- H1: [heading]

## Keyword Placement Audit
- [ ] Primary keyword in first 100 words
- [ ] Primary keyword in H1
- [ ] Secondary keywords mapped to H2 headings
- [ ] Semantic variations used throughout
- [ ] No keyword stuffing detected

## Featured Snippet Targets
[Section]: [snippet type] -- [status]

## Recommendations
[Prioritized list of optimization actions]
```

## Knowledge Reference

This skill applies search engine optimization principles as a cross-cutting concern across the Madman-Architect-Carpenter-Judge writing workflow. Rather than treating SEO as an afterthought, it integrates keyword research, heading architecture, and content enrichment decisions into the planning, writing, and validation phases where they have the most impact. Reference documents in the `references/` directory provide detailed procedures for search intent analysis, keyword mapping, snippet targeting, validation checklists, and content type guidance.

Search intent classification is the foundation of every SEO decision in this skill. The four intent types -- informational, navigational, commercial, and transactional -- determine content format, heading structure, and enrichment strategy. Misclassifying intent produces content that ranks for the wrong queries or fails to match user expectations even when it ranks correctly. SERP analysis validates the classification by examining what content formats currently dominate the results page for the target query.

E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) are integrated rather than bolted on. Specificity of examples demonstrates experience. Depth of technical explanation demonstrates expertise. Citation of credible sources demonstrates authoritativeness. Transparent methodology demonstrates trustworthiness. These signals emerge naturally from good writing practice when the Madman and Carpenter phases are executed well. The SEO Writer's role is to verify their presence, not to fabricate them.

Featured snippet targeting requires format-specific optimization. Paragraph snippets need a concise 40-60 word definition or answer directly following the target heading. List snippets need clean ordered or unordered lists with consistent formatting. Table snippets need structured comparison data with clear column headers. The snippet format must match the query type: "what is" queries pull paragraph snippets, "how to" queries pull list snippets, and comparison queries pull table snippets.

Heading architecture serves both readers and crawlers. Every H2 should map to a secondary keyword or a People Also Ask question. Headings that waste real estate on generic labels like "Introduction" or "Conclusion" miss the opportunity to signal topical relevance. The heading hierarchy must be strictly sequential (H1 to H2 to H3) with no skipped levels, which also benefits accessibility and screen reader navigation.
