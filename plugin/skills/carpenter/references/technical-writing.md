# Technical Writing Reference

This reference covers writing considerations specific to technical content, including term handling, example placement, information structure, code samples, and SEO.

## Define Terms on First Use

When a technical term appears for the first time, define it immediately. After the definition, use the term consistently throughout the piece without redefining it.

**First use:** "The ORM (Object-Relational Mapper) translates between database rows and application objects."

**Subsequent uses:** "The ORM handles this conversion automatically."

Do not assume the reader knows the term. Do not define it multiple times. Do not switch between the term and a synonym. Consistency reduces cognitive load.

If a piece uses many technical terms, consider a glossary section. But the in-text definition on first use is still required even if a glossary exists.

## Use Examples Immediately After Concepts

Abstract explanations followed by examples stick. Abstract explanations without examples fade. Place an example as close to the concept as possible.

**Pattern:**
1. State the concept in one or two sentences.
2. Show an example immediately.
3. Explain what the example demonstrates if it is not obvious.

Do not stack multiple concepts before showing examples. Each concept gets its own example before moving to the next concept.

## Inverted Pyramid: Most Important Information First

Put the most critical information at the top. Follow with supporting detail. End with background and context.

This structure serves readers who scan (most of them) and readers who read deeply (they get the important part first, then the detail they want). It also makes content resilient to truncation. If a reader stops halfway through, they still got the most valuable information.

Apply the inverted pyramid at three levels:
- **Article level:** The most important takeaway appears in the introduction.
- **Section level:** Each section opens with its key point.
- **Paragraph level:** Each paragraph leads with its main claim.

## Code Samples

Code samples in technical writing serve a specific purpose: they make abstract concepts concrete. They are not documentation. They are not production code. They are teaching tools.

**Minimal.** Include only the code that illustrates the concept. Strip out error handling, logging, configuration, and anything else that is not directly relevant. If the reader needs the full implementation, link to a repository.

**Correct.** Every code sample must work. A broken code sample destroys credibility faster than any prose mistake. If you cannot verify the code runs, say so explicitly.

**Commented.** Add brief comments that connect the code to the concept being explained. Do not comment every line. Comment the lines that matter.

```python
# Connect using connection pooling to reuse database connections
pool = ConnectionPool(max_size=10)
conn = pool.acquire()  # Returns existing connection or creates new one
```

**Language-appropriate.** Match the code language to the audience. If the article is about a Python library, use Python. If the audience is polyglot, choose the language that makes the concept clearest.

## SEO Writing Considerations

SEO and clear writing are not in conflict. Good SEO practice is largely good writing practice with a few structural additions.

**Primary keyword in the first 100 words.** Introduce the primary keyword naturally in the opening paragraph. Do not force it. If it does not fit naturally in the first 100 words, the introduction may need restructuring anyway.

**Secondary keywords in H2 and H3 headings.** Use secondary keywords in subheadings where they fit naturally. Headings serve readers first and search engines second. A heading that confuses the reader to include a keyword is a bad heading.

**Headings as clear descriptive signposts.** Every heading should tell the reader exactly what the section covers. Clever or vague headings hurt both readers and search rankings. "How Connection Pooling Reduces Latency" is better than "The Pool Problem" or "Going Deeper."

**Short paragraphs.** Keep paragraphs to 2-4 sentences for web content. Long paragraphs discourage reading on screens. This is good writing practice regardless of SEO.

**Eighth-grade reading level.** Write clearly enough that a general audience can follow. This does not mean dumbing down technical content. It means using direct sentences, common words where they suffice, and defining specialized terms when they are necessary.

**Semantic keyword variations.** Use natural variations of the primary keyword throughout the piece. If the primary keyword is "connection pooling," also use "pool connections," "database connection pool," and "pooled connections" where they fit naturally. Do not force variations. If they do not fit, the content does not need them.

**Meta description candidate.** Write one sentence of 150-160 characters that summarizes the article and includes the primary keyword. This sentence often works as the article's opening line or as a standalone summary for search result snippets.

```
Meta description: "Connection pooling reduces database latency by reusing
open connections instead of creating new ones for every query."
(142 characters)
```
