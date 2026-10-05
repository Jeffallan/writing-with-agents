# Content Type Adaptation

This reference describes how the Madman adapts its generation process based on the content type. Different formats demand different emphasis during raw material generation.

---

## Content Type Overview

| Content Type | Typical Length | Key Concern | Madman Focus |
|---|---|---|---|
| Technical documentation | 1,000-5,000 words | Accuracy, completeness | Comprehensive coverage, edge cases |
| Nonfiction article/essay | 1,500-4,000 words | Argument, evidence | Strong thesis candidates, supporting data |
| SEO long-form content | 1,500-3,000 words | Search intent, structure | Keyword variations, PAA questions, angle gaps |
| White paper | 3,000-8,000 words | Authority, depth | Original analysis, data points, expert quotes |
| Case study | 1,000-2,500 words | Narrative, results | Story arc candidates, metrics, before/after |
| Tutorial/how-to | 1,500-4,000 words | Clarity, actionability | Step sequences, prerequisites, troubleshooting |
| Blog post | 800-2,500 words | Engagement, value | Hook candidates, surprising angles, shareability |

---

## Adaptation by Content Type

### Technical Documentation

**Priority dimensions:**
- Real-world applications (every concept needs a concrete example)
- Audience questions (what will users get stuck on?)
- Counterarguments (what are the edge cases, limitations, gotchas?)

**De-emphasized dimensions:**
- Hooks and openers (technical docs do not need a catchy lead)
- Analogies and metaphors (precision over poetry)

**Generation guidance:**
- Enumerate every parameter, option, and configuration variant
- Brainstorm error states and failure modes
- List prerequisites the reader might not know they need
- Capture "what I wish someone had told me" moments from the human's seed

### Nonfiction Article or Essay

**Priority dimensions:**
- Core arguments (the thesis must be sharp and debatable)
- Evidence and examples (every claim needs support)
- Hooks and openers (the lead determines whether anyone reads the rest)
- Raw fragments (essays live or die on voice -- capture passages with energy)

**De-emphasized dimensions:**
- Real-world applications (may be implicit in the argument)

**Generation guidance:**
- Generate at least 5 distinct thesis candidates before settling
- For each thesis, generate both supporting and opposing evidence
- Write hooks that create tension, curiosity, or surprise
- Capture any passage where the writer's voice comes through strongly

### SEO Long-Form Content

**Priority dimensions:**
- Audience questions (these map directly to search queries and PAA boxes)
- Unique angles (differentiation from existing ranking content)
- Evidence and examples (E-E-A-T signals for search engines)

**Additional dimensions (SEO-specific):**
- Keyword variations and semantic clusters
- PAA-style questions at multiple knowledge levels
- Angle gaps relative to currently ranking content
- Featured snippet targets (definitions, lists, tables)

**Generation guidance:**
- Start with search intent: what does the reader actually want when they type this query?
- Map the topic against existing top-ranking content to find gaps
- Generate content at multiple depth levels (overview, intermediate, expert)
- Produce structured data candidates (comparison tables, numbered lists, definitions)

### White Paper

**Priority dimensions:**
- Core arguments (white papers need a rigorous central thesis)
- Evidence and data (original data, research citations, expert quotes)
- Counterarguments (the piece must address objections to maintain authority)
- Connections to adjacent topics (white papers situate their argument in a broader context)

**De-emphasized dimensions:**
- Hooks and openers (white papers have more leeway for a methodical opening)

**Generation guidance:**
- Generate more evidence than any other content type -- aim for 5x
- Identify gaps where original research or data would strengthen the piece
- Brainstorm expert sources the human could reference or interview
- Map the argument's logical structure even at the Madman stage (without organizing it)
- Capture industry-specific terminology and framing

### Case Study

**Priority dimensions:**
- Evidence and examples (metrics, timelines, concrete results)
- Real-world applications (the before/after transformation)
- Hooks and openers (the narrative hook that makes the reader care)
- Analogies and metaphors (making results relatable)

**De-emphasized dimensions:**
- Counterarguments (case studies are persuasive, not balanced)
- Connections to adjacent topics (keep the focus tight)

**Generation guidance:**
- Generate multiple story arc candidates (chronological, problem-solution, results-first)
- Brainstorm every quantifiable metric, even ones that seem minor
- Capture the emotional arc alongside the data arc
- List specific dialogue, decisions, or turning points from the human's experience
- Generate "what if they had not done this" counterfactuals for contrast

### Tutorial or How-To

**Priority dimensions:**
- Real-world applications (every step needs a concrete context)
- Audience questions (what will the reader get confused about?)
- Counterarguments (what are the common mistakes and pitfalls?)

**De-emphasized dimensions:**
- Hooks and openers (tutorials can start with a brief problem statement)
- Analogies and metaphors (step-by-step clarity over creative comparison)

**Generation guidance:**
- Brainstorm multiple step sequences for the same outcome
- List every prerequisite and assumption
- Generate troubleshooting scenarios for each major step
- Capture "this is where people usually get stuck" moments
- Produce variations for different environments, skill levels, or tools

### Blog Post

**Priority dimensions:**
- Hooks and openers (blog posts live or die on the first paragraph)
- Unique angles (a blog post must justify its existence in a crowded feed)
- Raw fragments (voice and personality are the differentiator)
- Audience questions (what makes the reader click and stay?)

**De-emphasized dimensions:**
- Connections to adjacent topics (keep the scope tight for a blog post)

**Generation guidance:**
- Generate at least 5 hooks -- blog posts need the strongest opening of any format
- Focus on shareability: what would make a reader send this to a colleague?
- Capture surprising data points, counterintuitive claims, and "I did not know that" moments
- Keep the raw material focused on a single strong idea rather than comprehensive coverage

---

## Scaling Phase Depth to Request Size

Not every writing request justifies a full Madman phase. Scale the depth of generation to match the scope of the project.

### Quick (under 800 words)

- Work through 4-5 dimensions instead of all 10
- Prioritize: core arguments, audience questions, hooks, raw fragments
- Generate 2-3 hook candidates instead of 5
- Target 2-3x raw material rather than 3-5x
- Time investment: single generation pass, no iteration

**When to use:** Social media threads, short blog posts, email newsletters, brief commentary.

### Medium (800-2,500 words)

- Work through all 10 dimensions but accept thin coverage on some
- Generate 3-5 hook candidates
- Target 3x raw material
- Time investment: one generation pass with a brief human review before proceeding

**When to use:** Standard blog posts, short articles, documentation pages.

### Long (2,500-5,000 words)

- Full dimension coverage with depth
- Generate 5 hook candidates with complete opening paragraphs
- Target 3-5x raw material
- Time investment: full generation pass, human review, one round of supplemental generation if dimensions are thin

**When to use:** Feature articles, long-form essays, detailed tutorials, comprehensive guides.

### Major (over 5,000 words)

- Full dimension coverage with extensive depth
- Generate 5+ hook candidates
- Target 4-5x raw material
- Time investment: multiple generation passes, human review between each, dimension-specific deep dives as needed
- Consider splitting the Madman phase by section if the topic has natural divisions

**When to use:** White papers, research reports, book chapters, pillar content.

---

## Choosing the Right Scale

If the human does not specify a target length, estimate based on content type:

1. Check the content type table at the top of this document for typical length ranges.
2. Default to the middle of the range for that content type.
3. Select the scaling tier that matches.
4. If uncertain, ask the human: "How long do you want the final piece to be?" This is a reasonable clarifying question that does not stall the creative phase.
