# Scoring Dimensions Reference

This reference defines the 10 quality dimensions used by the Quality Rubric skill. Each dimension includes its name, responsible phase(s), a 5-level scoring rubric, and rework routing instructions.

## Scoring Scale

| Score | Label | Meaning |
|-------|-------|---------|
| 5 | Excellent | Exceeds expectations. Professional publication quality. No improvements needed. |
| 4 | Good | Meets expectations. Ready to publish with minor tweaks at most. |
| 3 | Adequate | Acceptable but noticeable weaknesses. Could publish but quality would be questioned. |
| 2 | Weak | Significant issues that undermine the piece. Not publishable without rework. |
| 1 | Poor | Fundamental problems. Major rework required at the responsible phase. |

Any dimension scoring below 4 triggers a rework recommendation. The piece does not pass the quality gate until all critical dimensions (defined per content type) reach 4 or higher.

---

## Dimension 1: Thesis and Argument

**Phase Responsible:** Architect

| Score | Description |
|-------|-------------|
| 5 | Clear, compelling thesis stated early. Every section advances the argument. Reader can articulate the thesis after reading without referring back. No tangential sections. |
| 4 | Thesis is clear and stated within the introduction. Most sections connect to it directly. One or two minor digressions that do not derail the argument. |
| 3 | Thesis is present but buried or vague. Some sections feel disconnected from the main argument. Reader has to work to identify the central claim. |
| 2 | Thesis is unclear or contradicted by parts of the piece. Multiple sections drift from the main argument. Reader finishes unsure of the point. |
| 1 | No identifiable thesis. The piece reads as a collection of loosely related ideas without a unifying argument. |

**If below 4:** Return to Architect. Re-run the throughline identification step. The Architect must distill a single-sentence thesis and verify every section connects to it. Cut or restructure sections that drift.

---

## Dimension 2: Evidence and Depth

**Phases Responsible:** Madman + Carpenter

| Score | Description |
|-------|-------------|
| 5 | Every claim backed by specific evidence. Original examples drawn from real experience. Data cited where appropriate. Depth goes beyond surface-level treatment on every key point. |
| 4 | Most claims supported with evidence. Examples are specific rather than generic. One or two points could use deeper support but do not undermine credibility. |
| 3 | Mix of supported and unsupported claims. Some examples are generic or hypothetical when concrete evidence would strengthen the point. Depth is uneven across sections. |
| 2 | Multiple claims lack evidence. Examples feel invented or surface-level. Key arguments rely on assertion rather than demonstration. |
| 1 | Claims are almost entirely unsupported. The piece asserts without demonstrating. No specific evidence, data, or concrete examples. |

**If below 4:** Return to Madman for more material generation, then Carpenter to integrate new evidence. The Madman should generate specific examples, data points, and concrete scenarios for the weakest claims. The Carpenter then weaves this material into the existing draft.

---

## Dimension 3: Structure and Flow

**Phases Responsible:** Architect + Carpenter

| Score | Description |
|-------|-------------|
| 5 | Logical progression feels inevitable. Each section builds on the previous one. Heading hierarchy tells the complete story on its own. Transitions are seamless and purposeful. |
| 4 | Clear logical structure. Sections follow a coherent order. Heading hierarchy is sound. One or two transitions could be smoother but the reader never gets lost. |
| 3 | Structure is present but some sections feel out of order. A few transitions are abrupt or mechanical. Heading hierarchy has minor inconsistencies. |
| 2 | Significant structural problems. Sections jump between topics without clear logic. Several transitions are missing or forced. Reader has to mentally reorder the content. |
| 1 | No discernible structure. Content is arranged without apparent logic. Headings are misleading or absent. Reader cannot follow the progression. |

**If below 4:** Return to Architect. Re-examine the blueprint section order, heading hierarchy, and transition logic. The Architect should propose an alternative structure and get human approval before the Carpenter rebuilds transitions.

---

## Dimension 4: Clarity and Readability

**Phases Responsible:** Carpenter + Judge

| Score | Description |
|-------|-------------|
| 5 | Every sentence clear on first read. Complex ideas made accessible without oversimplification. Technical terms defined on first use. Sentence length varies naturally. No jargon without context. |
| 4 | Writing is clear throughout. One or two sentences may benefit from simplification. Technical content is accessible to the target audience. Readability metrics within target range. |
| 3 | Generally clear but several passages require re-reading. Some sentences are overlong or convoluted. Technical terms occasionally used without definition. Readability metrics borderline. |
| 2 | Frequent clarity issues. Multiple passages are confusing on first read. Jargon used without explanation. Sentences are consistently too long or too dense. |
| 1 | Pervasively unclear. Most paragraphs require multiple readings. Writing is inaccessible to the stated target audience. |

**If below 4:** Continue Judge passes. The Judge should run additional readability and clarity detection passes, flagging specific sentences and passages. If the problem is systemic rather than line-level, return to Carpenter for a clarity-focused rewrite of affected sections.

---

## Dimension 5: Voice and Authority

**Phases Responsible:** Madman (user seeds) + Carpenter

| Score | Description |
|-------|-------------|
| 5 | Confident, authoritative voice throughout. Expertise conveyed through specificity, not assertion. Author's unique perspective is evident. The piece could not have been written by just anyone. |
| 4 | Voice is consistent and confident. Author's perspective comes through in most sections. Expertise is demonstrated rather than claimed. Minor passages where voice flattens. |
| 3 | Voice is present but inconsistent. Some sections sound authoritative while others sound generic. A few passages read as though written by someone without domain expertise. |
| 2 | Voice is weak or inconsistent throughout. The piece reads as a competent summary rather than an authoritative take. Little evidence of the author's unique perspective. |
| 1 | No discernible author voice. The piece reads as generic content that could have been produced by anyone on the topic. No authority or unique perspective. |

**If below 4:** The human needs to inject more voice. Return to Carpenter with the human rewriting key passages in their own words and the Carpenter preserving that voice while polishing. This dimension cannot be fixed by AI alone -- it requires the human author's direct input, experience, and perspective.

---

## Dimension 6: Opening and Hook

**Phases Responsible:** Madman + Carpenter

| Score | Description |
|-------|-------------|
| 5 | Immediately compelling. Reader hooked within two sentences. The opening creates a question, tension, or promise that demands continued reading. No throat-clearing. |
| 4 | Strong opening that engages quickly. Reader motivated to continue within the first paragraph. Minor throat-clearing that could be trimmed but does not lose the reader. |
| 3 | Adequate opening that states the topic but does not compel. Reader continues out of interest in the topic rather than the writing. Some throat-clearing before the hook arrives. |
| 2 | Weak opening. Generic introduction that could belong to any article on the topic. Reader must push through multiple paragraphs before finding a reason to care. |
| 1 | No hook. The piece opens with background, definitions, or context that gives the reader no reason to continue. Throat-clearing dominates the first several paragraphs. |

**If below 4:** Return to Madman output for stronger hook candidates. Review the raw Madman material for compelling anecdotes, surprising data points, or provocative framings that were generated but not used. The Carpenter then rebuilds the opening around the strongest candidate.

---

## Dimension 7: Conclusion and Takeaway

**Phases Responsible:** Architect + Carpenter

| Score | Description |
|-------|-------------|
| 5 | Synthesizes the piece into a new insight that could not have been stated at the beginning. Clear, memorable takeaway. Reader knows exactly what to do next or think differently about. |
| 4 | Solid conclusion that ties back to the thesis. Takeaway is clear. Reader leaves with a concrete understanding of the main point and its implications. |
| 3 | Conclusion summarizes but does not synthesize. Takeaway is present but generic. Reader finishes without a strong sense of "so what" or "now what." |
| 2 | Weak conclusion that trails off or introduces new ideas. No clear takeaway. The piece ends without resolution. |
| 1 | No real conclusion. The piece stops rather than ends. No synthesis, no takeaway, no call to action. Reader is left wondering what the point was. |

**If below 4:** Return to Architect. The conclusion is a structural problem, not a prose problem. The Architect must revisit the throughline and define what insight the conclusion should deliver. Then the Carpenter rebuilds the conclusion to synthesize the argument into that insight.

---

## Dimension 8: Technical Accuracy

**Phase Responsible:** Judge

| Score | Description |
|-------|-------------|
| 5 | All facts verified. Technical details correct and current. Nuances captured accurately. No oversimplifications that mislead. Sources cited where appropriate. |
| 4 | Facts are accurate. Technical details are correct with minor simplifications that do not mislead. One or two points could benefit from additional precision but nothing is wrong. |
| 3 | Mostly accurate but one or two factual errors or misleading simplifications. Technical details are broadly correct but lack precision in places. |
| 2 | Multiple factual errors or significant oversimplifications. Technical details are wrong in ways that would undermine credibility with a knowledgeable reader. |
| 1 | Pervasive inaccuracies. The piece would misinform a reader. Technical details are fundamentally wrong or outdated. |

**If below 4:** Continue Judge with a focused accuracy review. The Judge should flag every factual claim, verify each against authoritative sources, and correct errors. If the inaccuracies stem from the source material, return to the research phase for better sources.

---

## Dimension 9: SEO Optimization

**Phases Responsible:** Architect + Carpenter + Judge

**Note:** Score this dimension only for content with SEO objectives. Mark as N/A for content without SEO requirements.

| Score | Description |
|-------|-------------|
| 5 | Primary keyword placed naturally in title, H1, first 100 words, at least two H2s, and conclusion. Semantic variations used throughout. Heading hierarchy follows SEO best practices. Meta description is compelling and within character limits. Internal linking opportunities identified. |
| 4 | Primary keyword present in title, H1, and first 100 words. Most H2s include keyword or semantic variation. Heading hierarchy is sound. Meta description present and adequate. |
| 3 | Primary keyword in title and body but placement is uneven. Some headings miss keyword opportunities. Meta description is generic or missing. Heading hierarchy has minor issues. |
| 2 | Keyword usage is sparse or forced. Headings do not reflect search intent. No meta description. Heading hierarchy is broken or flat. |
| 1 | No evidence of SEO consideration. Keywords absent from key positions. No heading structure. No meta description. Content does not align with search intent. |

**If below 4:** Run SEO validation from the seo-writer skill. The seo-writer should audit keyword placement, heading hierarchy, and meta description, then provide specific fixes. The Carpenter implements placement changes; the Judge verifies they read naturally.

---

## Dimension 10: Originality and Value-Add

**Phases Responsible:** Madman (user seeds) + Pre-Research

| Score | Description |
|-------|-------------|
| 5 | Contains original analysis, unique examples, and perspectives not found elsewhere. A reader familiar with existing content on this topic would learn something new. The piece advances the conversation. |
| 4 | Offers a distinct angle or original examples on an established topic. Most content adds value beyond what already exists. One or two sections cover well-trodden ground but with fresh framing. |
| 3 | Mix of original and derivative content. Some sections offer new perspectives while others repeat what is widely available. A knowledgeable reader would find partial value. |
| 2 | Mostly derivative. The piece covers the same ground as existing content with little new insight. Examples and analysis are generic rather than original. |
| 1 | Entirely derivative. Nothing in the piece could not be found in existing content on the topic. No original examples, analysis, or perspective. |

**If below 4:** Return to the research phase or Madman phase. The research phase should identify what existing content covers and where gaps exist. The Madman should then generate material that fills those gaps, drawing on the human's unique experience and perspective. This dimension, like Voice and Authority, requires human input to fix properly.
