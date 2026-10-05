# Keyword Mapping and Heading Architecture

## Keyword Plan Template

Before writing or structuring content, complete the keyword plan. This plan maps directly to the Architect blueprint and informs every heading decision.

```
## Keyword Plan

### Primary Keyword
- Keyword: [exact phrase]
- Search volume: [monthly estimate or range]
- Search intent: [informational / navigational / commercial / transactional]
- Difficulty: [low / medium / high]

### Secondary Keywords
Map each secondary keyword to a specific heading.

| Secondary Keyword | Target Heading | Heading Level |
|---|---|---|
| [keyword phrase] | [planned heading text] | H2 |
| [keyword phrase] | [planned heading text] | H2 |
| [keyword phrase] | [planned heading text] | H2 |
| [keyword phrase] | [planned heading text] | H3 |

### Semantic / LSI Keywords
These are related terms and variations to weave throughout the body text.
They do not need dedicated headings -- they provide topical coverage.

- [semantic term 1]
- [semantic term 2]
- [semantic term 3]
- [semantic term 4]
- [semantic term 5]

### People Also Ask Targets
Questions to answer in the content, sourced from SERP analysis.

| PAA Question | Section Placement | Snippet Format |
|---|---|---|
| [question from SERP] | [heading or FAQ section] | [paragraph / list / table] |
| [question from SERP] | [heading or FAQ section] | [paragraph / list / table] |
| [question from SERP] | [heading or FAQ section] | [paragraph / list / table] |
```

## Heading Architecture Rules

Headings serve two audiences simultaneously: readers scanning for relevance and search engines parsing content structure. Every heading must work for both.

### Rule 1: One H1 Per Page

The H1 is the page title. It contains the primary keyword. Keep it between 50 and 60 characters. There is exactly one H1 per page -- no exceptions.

The H1 should be specific enough that a reader knows exactly what the page covers without reading anything else.

**Weak H1:** "A Guide to Authentication"
**Strong H1:** "OAuth 2.0 Authentication: How It Works and When to Use It"

### Rule 2: H2 Sections Target Secondary Keywords or PAA Questions

Each H2 heading represents a major section of the content. Map secondary keywords to H2 headings so that each major section targets a distinct search sub-query.

When a People Also Ask question aligns with a section, use the question (or a close variation) as the H2. This directly targets featured snippet selection for that question.

**Example mapping:**
- H1: "OAuth 2.0 Authentication: How It Works and When to Use It"
- H2: "What Is OAuth 2.0?" (PAA question, informational secondary keyword)
- H2: "How OAuth 2.0 Authorization Flows Work" (secondary keyword: "OAuth 2.0 authorization flows")
- H2: "OAuth 2.0 vs API Keys: When to Choose Which" (secondary keyword: "OAuth 2.0 vs API keys")

### Rule 3: H3 Subsections Only When Genuinely Needed

Use H3 headings only when an H2 section has distinct sub-parts that benefit from their own headings. Do not add H3 headings just to break up text or to hit a keyword -- that is keyword stuffing through structure.

A good test: if you removed the H3 and merged its content into the parent H2 section, would the section be harder to scan? If yes, keep the H3. If no, remove it.

### Rule 4: Never Skip Heading Levels

The hierarchy must be sequential: H1 to H2 to H3. Never jump from H1 to H3 or from H2 to H4. Skipped levels break the document outline for both screen readers and search engines.

```
CORRECT:
H1: Main Title
  H2: First Major Section
    H3: Subsection
  H2: Second Major Section

INCORRECT:
H1: Main Title
  H3: Subsection (skipped H2)
  H2: Section
    H4: Sub-subsection (skipped H3)
```

### Rule 5: Headings Are Signposts, Not Vague Labels

Every heading should tell the reader what they will learn in that section. Vague headings waste the heading's dual role as a navigation aid and a keyword signal.

| Vague Heading | Specific Heading |
|---|---|
| Introduction | Why OAuth 2.0 Replaced OAuth 1.0 |
| Background | The Problem with Password-Based API Authentication |
| Details | How the Authorization Code Flow Works Step by Step |
| Conclusion | When to Choose OAuth 2.0 Over Simpler Alternatives |

### Rule 6: Headings Tell a Story Read Top to Bottom

Read your headings in sequence without any body text. They should form a coherent outline that tells the story of the piece. If the headings read as a disconnected list of topics, the structure needs work.

**Disconnected headings:**
- What Is OAuth?
- Grant Types
- Security
- Implementation

**Story-driven headings:**
- What Is OAuth 2.0 and Why Does It Exist?
- The Four Grant Types and When to Use Each
- Security Risks You Must Handle in Production
- Implementing OAuth 2.0 in Your Application

## Mapping Keywords to the Architect Blueprint

When working with the Architect skill, integrate the keyword plan directly into the blueprint. Each section in the blueprint should note:

1. **Primary or secondary keyword assigned** to the section heading
2. **Semantic keywords** to weave into the section body
3. **PAA question** the section answers (if applicable)
4. **Snippet target** and format (paragraph, list, or table)

This ensures the Carpenter phase has clear keyword guidance per section rather than a vague instruction to "include keywords throughout."
