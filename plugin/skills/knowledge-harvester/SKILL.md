---
name: knowledge-harvester
description: Use when capturing research artifacts to a vault or knowledge base, formatting source citations, saving synthesized connections from a writing project, or enriching a knowledge base with produced content.
license: MIT
metadata:
  author: https://github.com/dmitry
  version: "1.0.0"
  domain: research
  triggers: knowledge harvest, vault capture, save research, citation metadata, knowledge base, capture artifacts, save to vault, research feedback loop
  role: specialist
  scope: implementation
  output-format: document
  related-skills: research-intake, content-strategist
---

## Role Definition

The Knowledge Harvester captures research artifacts and writing outputs back into the user's vault or knowledge base, creating a feedback loop where each content creation cycle enriches the source material for future work.

**Lead:** AI formats artifacts with consistent structure, frontmatter, and linking.
**Support:** Human approves what gets captured, where it goes, and how it connects to existing notes.

This skill handles four categories of artifacts: research sources discovered during gap-filling, synthesized connections identified during content creation, domain maps (whirlybirds) as persistent reference artifacts, and links from produced articles back to the source notes that informed them.

The Knowledge Harvester does not generate new research or content. It captures, formats, and files what was produced during the research-intake, content-strategist, and Flowers cycle phases. Every artifact it writes was already validated by the human during those upstream phases.

## When to Use This Skill

- After completing a writing project and wanting to preserve research for future use
- After gap-filling research during research-intake that should be saved permanently
- When a produced article should link back to its source notes in the vault
- When domain whirlybirds should be saved as persistent reference artifacts
- When synthesized connections or insights emerged during writing that should be captured
- When enriching a knowledge base with citation metadata from content creation
- At the end of a content strategy cycle to close the feedback loop
- When consolidating scattered research notes into structured vault entries
- When a content cluster is complete and cross-references between articles need permanent capture
- When domain expertise accumulated over multiple articles should be formalized as reference material

## Core Workflow

1. **Identify artifacts to capture** -- Review the outputs from the completed writing phases. Catalog what should be captured: research sources from gap-filling, connections discovered during content creation, domain whirlybirds, and article-to-source links. Present the catalog to the human for confirmation. Do not assume everything should be captured -- the human decides what has lasting value.

2. **Format each artifact as structured markdown** -- Apply consistent frontmatter, heading structure, and linking conventions to each artifact. Every artifact gets YAML frontmatter with type, domain, date, tags, and relationship metadata. See `references/vault-format.md` for the full format specification.

3. **Present formatted artifacts to human for approval** -- Use AskUserQuestion to show each formatted artifact (or a summary for large batches) and ask the human to approve, modify, or reject. Do not write to the vault without explicit approval. The human may adjust titles, tags, connections, or decide to skip specific artifacts.

4. **Write approved artifacts to vault** -- Save each approved artifact to the vault path established during the research-intake session setup. Match the existing vault's file naming and folder conventions. If no convention exists, use lowercase hyphenated filenames in the root vault directory.

5. **Confirm capture with summary** -- After all approved artifacts are written, present a summary of what was saved and where. Include a count of new notes, updated connections, and the enrichment this cycle added to the vault. State the feedback loop status: the vault is now richer for the next content creation cycle.

## Reference Guide

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Artifact types, the feedback loop, what to capture | `references/harvest-process.md` | Identifying artifacts, understanding the feedback loop |
| Frontmatter templates, tagging, linking, Obsidian compatibility | `references/vault-format.md` | Formatting any artifact for vault capture |

## Constraints

**MUST DO:**

- Present all artifacts to the human for approval before writing to the vault
- Apply consistent frontmatter to every captured artifact
- Match the existing vault's naming and folder conventions
- Include relationship metadata linking artifacts to source notes and produced articles
- Tag each artifact with the domain and content cycle that produced it
- Confirm the vault path before writing any files (use the path from research-intake session setup)
- Provide a capture summary after all artifacts are written

**MUST NOT DO:**

- Write to the vault without human approval
- Modify existing vault files unless explicitly asked to update them
- Invent metadata or connections that were not established during upstream phases
- Skip frontmatter or tagging -- every artifact gets structured metadata
- Assume a vault folder structure -- discover it from what exists or ask the human
- Generate new research or content -- this skill captures, it does not create
- Overwrite existing vault notes without explicit human instruction to update
- Create duplicate entries for artifacts that already exist in the vault -- check before writing
- Capture artifacts without relationship metadata -- every note must link to its origin phase and related artifacts
- Strip or simplify frontmatter to save time -- incomplete metadata breaks future indexing passes
- Capture speculative connections that were not validated during upstream phases
- Batch large artifact sets without giving the human an opportunity to review individual items

## Output Templates

**Capture Catalog (presented before writing):**

```markdown
## Artifacts Ready for Capture

| # | Artifact | Type | Proposed Filename | Source Phase |
|---|----------|------|-------------------|-------------|
| 1 | [Source title] | Research source | [filename.md] | Research-intake |
| 2 | [Connection description] | Synthesis note | [filename.md] | Content creation |
| 3 | [Domain whirlybird] | Domain map | [filename.md] | Content-strategist |
| 4 | [Article backlink] | Article link | [filename.md] | Flowers cycle |

Vault path: [confirmed path]

Approve all, select by number, or modify?
```

**Capture Summary (delivered after writing):**

```markdown
## Knowledge Harvest Complete

**Vault path:** [path]
**Artifacts captured:** [count]
**New research sources:** [count]
**Synthesis notes:** [count]
**Domain maps saved:** [count]
**Article backlinks:** [count]

The vault is now enriched with material from the [domain] content cycle.
Next content creation cycle in this domain will benefit from [count] new source notes and [count] documented connections.
```

## Knowledge Reference

The feedback loop is the core design principle of this skill. Without harvest, each content creation cycle starts from scratch. With harvest, each cycle inherits the research, connections, and domain maps from previous cycles. Over time, the vault becomes a compounding knowledge asset where later articles benefit from the accumulated research of earlier ones.

The four artifact types serve distinct purposes in the feedback loop. Research sources are raw material discovered during gap-filling -- they feed directly into future research-intake passes. Synthesized connections are insights that emerged during content creation but were not present in any single source -- they represent original thinking worth preserving. Domain maps (whirlybirds saved as persistent references) provide spatial overviews of a knowledge domain that inform future content strategy decisions. Article backlinks connect the produced article to its source notes, creating bidirectional traceability between published content and the research that informed it.

Frontmatter consistency across all captured artifacts enables programmatic discovery. When every artifact carries structured YAML metadata with type, domain, date, tags, and relationship fields, future research-intake passes can index the vault efficiently. Inconsistent metadata forces manual discovery and defeats the purpose of structured capture. The frontmatter templates in the reference files enforce this consistency at the point of creation rather than relying on retroactive cleanup.

The human approval gate before vault writes serves two purposes. First, it prevents low-value artifacts from cluttering the knowledge base. Not every research finding or connection justifies permanent storage. The human filters for lasting value. Second, it gives the human an opportunity to adjust titles, tags, and connections before the artifact enters the vault's link graph. Adjustments at write time are trivial. Corrections after the artifact has been linked to by other notes are disruptive.
