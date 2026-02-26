---
name: research-intake
description: Use when ingesting source material for a writing project, building a knowledge map from notes and documents, identifying research gaps, or preparing a research corpus for content creation.
license: MIT
metadata:
  author: https://github.com/dmitry
  version: "1.0.0"
  domain: research
  triggers: research intake, ingest sources, knowledge map, gap analysis, source material, research corpus, note ingestion, document analysis, research preparation
  role: specialist
  scope: analysis
  output-format: document
  related-skills: content-strategist, madman, knowledge-harvester
---

## Role Definition

The Research Intake specialist traverses, indexes, and maps source material into a structured knowledge map before any content creation begins.

**Lead:** AI traverses and indexes source material, builds the knowledge map, identifies gaps.
**Support:** Human steers gap-filling priorities, validates the map, and seeds with context about what matters.

This skill handles Obsidian vault files, markdown notes, reference documents, prior research, and web URLs. It assumes arbitrary nested file and folder structures with no predetermined naming conventions or organizational schemes. The skill does not assume Zettelkasten, PARA, or any other specific note-taking methodology.

The knowledge map is a structured inventory of what the research corpus contains, what it lacks, and how its pieces connect. It is not an outline or a content plan -- those belong to downstream skills.

## When to Use This Skill

- Starting a writing project and need to understand what material already exists
- Ingesting an Obsidian vault, folder of markdown notes, or collection of reference documents
- Building a research corpus from scattered sources before content planning
- Identifying what gaps exist in existing research before generating new material
- Preparing source material for handoff to the content-strategist or madman phase
- Auditing a knowledge base to understand coverage and depth across topics
- Onboarding to a new domain where prior research exists but is unorganized
- Combining multiple research sources into a unified understanding
- Returning to a dormant project and need to rediscover what research already exists
- Validating that source material has enough depth to support a planned content calendar
- Cross-referencing claims across multiple documents to find contradictions or reinforcement
- Preparing for a content audit where you need to map what topics are already covered and to what depth
- Triaging a large collection of notes to determine which are relevant to a specific writing project

## Core Workflow

1. **Establish session context** -- Use AskUserQuestion to determine the source material location. Ask for the vault path, working directory, or confirmation that no vault exists. If a vault path is provided, confirm it before traversal. If no vault exists, ask the human to provide files, folders, or URLs directly.

2. **Traverse and index all source material** -- Recursively read every file in the provided path. For each file, extract: title or filename, topics covered, key claims made, sources cited, depth of coverage (deep, moderate, or surface), and any metadata present. Do not skip files based on naming or format assumptions. Read everything.

3. **Build knowledge map** -- Synthesize the indexed material into a structured knowledge map. Group topics with depth assessments. Extract key claims with their supporting sources. Identify connections between topics across different files. Catalog all existing sources. Surface gaps where coverage is thin or missing. See `references/intake-process.md` for the full indexing methodology and output format.

4. **Present gaps for human steering** -- Use AskUserQuestion to present identified gaps as a multi-select list. The human chooses which gaps to investigate. Do not fill gaps without explicit human selection. For each selected gap, propose 3 specific research directions plus a skip option. See `references/gap-analysis.md` for gap categories and the investigation process.

5. **Fill selected gaps and offer vault capture** -- Research the human-selected gaps via web search and synthesis. Present findings for validation before any storage. Offer to capture findings as structured notes in the vault path established in step 1. The knowledge map plus any gap-fill results become the input to the content-strategist or madman phase.

## Reference Guide

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Indexing methodology, traversal process, knowledge map format | `references/intake-process.md` | Traversing sources, building the knowledge map |
| Gap categories, investigation process, vault capture format | `references/gap-analysis.md` | Presenting gaps, filling selected gaps, capturing findings |

## Constraints

**MUST DO:**

- Traverse all provided material -- do not skip files based on name, size, or assumed relevance
- Build a complete knowledge map before presenting gaps
- Present gaps to the human for steering before investigating any of them
- Offer vault capture for all research findings
- Confirm the vault path or working directory before writing any files
- Flag claims that appear in source material without supporting evidence
- Record the depth assessment (deep, moderate, surface) for every indexed topic
- Distinguish between topics that are discussed and topics that are merely mentioned
- Include file paths in every knowledge map entry so the human can trace claims back to their source
- Present the complete knowledge map before moving to gap identification

**MUST NOT DO:**

- Assume Zettelkasten, PARA, or any specific note-taking format
- Fill gaps without explicit human approval of which gaps to investigate
- Skip the vault capture offer after gap-filling research
- Impose organizational structure on the existing vault or notes
- Modify existing source files during the intake process
- Proceed to content planning -- that belongs to the content-strategist skill
- Summarize or paraphrase source material during indexing -- extract structure and metadata, preserve original content
- Discard files that appear irrelevant based on filename alone -- open and index every file
- Merge or consolidate source files during intake -- the knowledge map is read-only on the source corpus
- Present gaps without categorizing them -- every gap needs a category to determine the right investigation approach
- Generate content or draw conclusions during the intake process -- intake is indexing and mapping, not synthesis

## Output Templates

```markdown
# Knowledge Map: [Domain]

## Topics Covered
- [Topic A]: [deep / moderate / surface] -- [primary source files]
- [Topic B]: [deep / moderate / surface] -- [primary source files]

## Key Claims and Arguments
- [Claim 1] -- supported by [source/note], strength: [strong / moderate / weak]
- [Claim 2] -- supported by [source/note], strength: [strong / moderate / weak]

## Existing Sources
- [Source 1]: [what it covers], [file location]
- [Source 2]: [what it covers], [file location]

## Connections Identified
- [Topic A] relates to [Topic C] through [mechanism]
- [Claim 2] contradicts [Claim 5] on [specific point]

## Gaps Identified
1. [Gap description] -- [category: undeveloped / unsupported / missing perspective / outdated]
2. [Gap description] -- [category]
```

## Knowledge Reference

The knowledge map is the central artifact of this skill. It serves as a structured inventory rather than a content plan. The distinction matters: a knowledge map says "here is what exists, here is what is missing, here is how pieces connect." A content plan says "here is what to write and in what order." The research-intake skill produces the former. Downstream skills like the content-strategist consume the knowledge map and transform it into editorial decisions.

Gap analysis follows a four-category model: undeveloped topics (mentioned but not explored), unsupported claims (asserted without evidence), missing perspectives (one-sided coverage), and outdated material (superseded by newer information). Each category implies a different research action. Undeveloped topics need exploratory research. Unsupported claims need source verification. Missing perspectives need deliberate counter-sourcing. Outdated material needs current-state research. Categorizing gaps before investigating them prevents wasted effort on low-value research directions.

The depth assessment scale (deep, moderate, surface) provides a quick triage of coverage quality. Deep coverage means the source contains detailed evidence, multiple supporting examples, and nuanced argumentation. Moderate coverage means the topic is addressed with some evidence but lacks exhaustive treatment. Surface coverage means the topic is mentioned or referenced without substantive exploration. This three-level scale is deliberately coarse to enable fast indexing across large source collections without getting bogged down in granular scoring.

Connection mapping across source files reveals relationships that no single document contains. When two notes discuss the same concept using different terminology, the knowledge map surfaces this overlap. When one note's conclusion contradicts another's premise, the knowledge map flags the tension. These cross-file connections are among the most valuable outputs of the intake process because they represent insights that exist in the corpus but are invisible to anyone reading files in isolation.

The human steering step for gap-filling prevents wasted research effort. Not every gap is worth investigating. A gap in a peripheral topic may be irrelevant to the planned content. A gap in a core topic may be critical. Only the human can make this judgment because only the human knows the editorial intent. Presenting gaps as a structured multi-select list with categories and proposed research directions gives the human enough information to decide without requiring them to formulate the research plan themselves.
