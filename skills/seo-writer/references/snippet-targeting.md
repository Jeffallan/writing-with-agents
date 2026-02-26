# Featured Snippet Targeting and Content Enrichment

## Featured Snippet Formats

Featured snippets are the highlighted answer boxes that appear above standard search results. Winning a featured snippet dramatically increases visibility. Each snippet type has a specific content structure that triggers selection.

| Snippet Type | How to Target | Format |
|---|---|---|
| Paragraph | Define the key concept in 40-60 words immediately after the relevant H2 heading. Use a clear, direct sentence structure: "[Term] is [definition]." | Clear definition paragraph, no filler |
| List | Place a numbered or bulleted list immediately after the relevant H2 heading. Use 3-8 items. Each item should start with a consistent grammatical pattern. | Steps (numbered) or ranked items (bulleted) |
| Table | Place a comparison or data table immediately after the relevant H2 heading. Use clear column headers and at least 3 rows of data. | Side-by-side data with headers |

### Paragraph Snippet Targeting

The paragraph snippet rewards concise, authoritative definitions. The target pattern:

1. Use the question or keyword as the H2 heading.
2. Immediately follow with a 40-60 word paragraph that directly answers the question.
3. Do not start with "In this section..." or "Let's explore..." -- start with the answer.
4. After the snippet-target paragraph, expand with supporting detail.

**Example:**

```
## What Is OAuth 2.0?

OAuth 2.0 is an authorization framework that allows third-party applications
to access a user's resources without exposing their credentials. It works by
issuing access tokens through an authorization server, enabling scoped and
time-limited access instead of sharing passwords directly.

[Expanded explanation follows here...]
```

### List Snippet Targeting

The list snippet rewards structured sequences. The target pattern:

1. Use a "how to" question or process-oriented keyword as the H2 heading.
2. Immediately follow with a numbered or bulleted list.
3. Keep each list item to one concise line.
4. Use parallel grammatical structure across all items.

**Example:**

```
## How to Implement OAuth 2.0

1. Register your application with the authorization provider.
2. Configure redirect URIs and requested scopes.
3. Implement the authorization code flow in your application.
4. Exchange the authorization code for an access token.
5. Use the access token to make authenticated API requests.
6. Handle token refresh when the access token expires.

[Detailed explanation of each step follows...]
```

### Table Snippet Targeting

The table snippet rewards structured comparisons. The target pattern:

1. Use a comparison-oriented keyword as the H2 heading.
2. Immediately follow with a markdown table.
3. Use clear, scannable column headers.
4. Include at least 3 rows of data.
5. Keep cell content concise -- save detail for the body text below the table.

## Content Enrichment Elements

Beyond snippet targeting, enriched content signals comprehensiveness and authority to search engines. Include these elements where they naturally fit.

### Comparison Tables

Use when presenting alternatives, pros/cons, or feature sets. Tables make commercial-intent content scannable and increase time on page.

```
| Feature | Tool A | Tool B | Tool C |
|---|---|---|---|
| [feature 1] | [value] | [value] | [value] |
| [feature 2] | [value] | [value] | [value] |
| [feature 3] | [value] | [value] | [value] |
```

### Numbered Step Lists

Use for any sequential process. Numbered lists target list snippets and signal structured, actionable content.

### Definition Paragraphs

Use when introducing a key concept. A 40-60 word definition paragraph after an H2 targets paragraph snippets and provides immediate value to the reader.

### Key Takeaway Callouts

Use at the end of major sections to summarize the most important point. These serve readers who scan and reinforce the section's core message.

```
**Key takeaway:** [One-sentence summary of the section's most important point.]
```

### Original Data and Examples

Use whenever possible. Original data, real-world examples, case study references, and first-hand experience are strong E-E-A-T signals. Generic advice ranks poorly against content backed by specific evidence.

## Link Map Template

Internal and external links support SEO by distributing authority and signaling topical relevance. Plan links during the Architect phase, not as an afterthought.

### Internal Links

```
| Anchor Text | Target Page | Section Placement |
|---|---|---|
| [descriptive anchor text] | [URL or page title] | [section where link appears] |
| [descriptive anchor text] | [URL or page title] | [section where link appears] |
| [descriptive anchor text] | [URL or page title] | [section where link appears] |
```

**Internal link rules:**
- Use descriptive anchor text, not "click here" or "read more."
- Link to the most relevant page, not the homepage.
- Place links where they add context for the reader, not at random.
- Aim for 3-5 internal links per 1,000 words.

### External Links

```
| Anchor Text | Target URL | Purpose |
|---|---|---|
| [descriptive anchor text] | [external URL] | [source / reference / further reading] |
| [descriptive anchor text] | [external URL] | [source / reference / further reading] |
```

**External link rules:**
- Link to authoritative, primary sources.
- Do not link to direct competitors for the same target keyword.
- Ensure external links open in a new tab (if the publishing platform supports it).
- Verify links are not broken before publication.

## Meta Elements Template

Write meta elements after the content is drafted. The content informs the meta, not the other way around.

### Title Tag (50-60 characters)

The title tag appears in search results and browser tabs. It is the single most important on-page ranking signal.

```
Format: [Primary Keyword]: [Compelling Modifier or Benefit]
Example: "OAuth 2.0 Guide: How Authorization Flows Work in Practice"
Length: 57 characters
```

**Rules:**
- Primary keyword near the front.
- 50-60 characters. Longer titles get truncated in SERPs.
- No keyword repetition within the title.
- Must be unique across the site.

### Meta Description (150-160 characters)

The meta description appears below the title in search results. It does not directly affect ranking but strongly affects click-through rate.

```
Format: [What the reader will learn or gain]. [Specific detail or scope]. [Implicit or explicit CTA.]
Example: "Learn how OAuth 2.0 authorization flows work with practical code examples. Covers all four grant types and common security pitfalls."
Length: 134 characters
```

**Rules:**
- 150-160 characters. Shorter is acceptable; longer gets truncated.
- Include the primary keyword naturally.
- Describe the content's value, not just its topic.
- Do not duplicate the title tag.

### URL Slug

```
Format: /primary-keyword-modifier
Example: /oauth-2-authorization-guide
```

**Rules:**
- Use hyphens, not underscores.
- Include the primary keyword.
- Keep it short: 3-5 words.
- No stop words ("a," "the," "and") unless they are part of the keyword.
- All lowercase.
