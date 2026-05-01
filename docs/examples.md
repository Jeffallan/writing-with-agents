# Examples

Representative use cases for the Writing With Agents plugin, covering the primary slash commands and individual skills. Each example shows what the user types and what the plugin produces.

## Example 1: Run a full Flowers cycle on a single article

Use the `/flowers-cycle` command with a topic (e.g., `/flowers-cycle "API-first identity verification for fintech"`) to orchestrate the madman, whirlybird, architect, carpenter, judge, and quality-rubric skills end-to-end. You receive a publish-ready article along with the intermediate artifacts: raw idea dump from the madman skill, nonlinear mindmap of structural options from whirlybird, chosen outline from architect, drafted prose from carpenter, edits flagging AI voice tells and readability issues from judge, and a final score against the quality rubric.

## Example 2: Plan a multi-article content campaign from a research corpus

Use the `/content-strategy` command to turn a folder of research notes and source material into a coordinated content plan. The content-strategist skill produces a domain map clustering related themes, identifies pillar articles versus cluster articles for SEO topology, and returns a production schedule with article-level briefs you can feed into `/flowers-cycle` one at a time.

## Example 3: Capture a URL or PDF into a structured research note

Use the `/capture` command (e.g., `/capture https://example.com/article-on-zero-trust`) to fetch a source and convert it into a Flowers-format research note in your knowledge vault. The capture command and knowledge-harvester skill extract key claims, generate a citation block with the source's metadata, and link the new note to existing related notes in your vault so downstream calls to research-intake can pick it up.

## Example 4: Audit a finished draft for AI voice and prose quality

> "Edit this draft for publication. Use the judge skill to flag AI voice patterns (em-dash overuse, fake-insight constructions, generic sentence shapes) and readability issues, and the quality-rubric skill to score the result against publishable standards."

You get back a line-level diff with rewrite suggestions for each AI tell, a readability score (Flesch / Flesch-Kincaid), a consistency audit covering terminology, tense, and voice, and a per-dimension rubric score telling you whether the draft is ready or needs another pass through architect or carpenter.

## Example 5: SEO-optimize an existing article for search visibility

> "Optimize this draft for search. Use the seo-writer skill to plan keyword-aligned heading architecture, identify featured-snippet candidate paragraphs, and validate on-page SEO."

The seo-writer skill returns a keyword targeting plan, a restructured heading hierarchy with primary and secondary keywords mapped to each section, paragraphs rewritten in answer-box format for featured snippets, a meta description sized to Google's display limits, and an on-page SEO checklist (alt text, internal links, schema suggestions).
