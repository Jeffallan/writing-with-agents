# Writing With Agents — Project Configuration

> This file governs Claude's behavior when working on the writing-with-agents repository.

---

## Skill Authorship Standards

Skills follow the [Agent Skills specification](https://agentskills.io/specification). This section covers project-specific conventions.

### The Description Trap

**Critical:** Skill descriptions must be TRIGGER-ONLY. Never summarize the workflow or process.

**BAD — Process in description:**
```yaml
description: Use for brainstorming. First generate raw material across dimensions,
then present to user for seeding, then overproduce 3-5x.
```

**GOOD — Trigger-only:**
```yaml
description: Use when brainstorming ideas, generating raw material, or starting
the creative phase of a writing project.
```

**Format:** `Use when [specific triggering conditions]`

### Frontmatter Requirements

```yaml
---
name: skill-name-with-hyphens
description: Use when [triggering conditions] - max 1024 chars
license: MIT
metadata:
  author: https://github.com/dmitry
  version: "1.0.0"
  domain: generation | structure | craft | quality | strategy | seo | research
  triggers: keyword1, keyword2, keyword3
  role: specialist | expert
  scope: design | analysis | implementation
  output-format: document | report | analysis
  related-skills: architect, carpenter, judge
---
```

**Domain values for this project:**
`generation` · `structure` · `craft` · `quality` · `strategy` · `seo` · `research`

### Progressive Disclosure Architecture

**Tier 1 — SKILL.md (~80-100 lines)**
- Role definition and collaborative model (who leads, who supports)
- When-to-use guidance (triggers)
- Core workflow (5 steps)
- Constraints (MUST DO / MUST NOT DO)
- Routing table to references

**Tier 2 — Reference Files (100-600 lines each)**
- Deep procedural content
- Templates and output formats
- Examples and anti-patterns
- Loaded only when context requires

### Collaborative Oscillation Model

Every skill in this project defines a **lead** and a **support** role:

| Phase | Lead | Support |
|-------|------|---------|
| Madman | AI generates | Human seeds with experience |
| Whirlybird | AI generates options | Human selects and combines |
| Architect | Human decides | AI formulates |
| Carpenter | AI builds | Human spot-checks |
| Judge | AI detects | Human decides |

Skills must encode this lead/support dynamic, not treat phases as AI-only.

---

## Release Checklist

### 1. Update Version and Counts

Update `version.json`, then run:
```bash
python scripts/update-docs.py
```

### 2. Validate Skills Integrity

```bash
python scripts/validate-skills.py
python scripts/validate-markdown.py
```

### 3. Update CHANGELOG.md

Add new version entry following Keep a Changelog format.

---

## Default Style Constraints

The following patterns should be avoided in all generated prose unless the user explicitly permits them per-article:

- **Em dashes** — Do not use. Restructure the sentence instead.
- **Sentences starting with "And" or "But"** — Do not begin sentences with coordinating conjunctions. Rewrite to connect the idea differently.

These constraints apply to the Carpenter and Judge phases. The Madman phase is exempt (raw material is unfiltered by design).

---

## Attribution

Based on Betty S. Flowers' "Madman, Architect, Carpenter, Judge" framework (1981),
extended with Bryan Garner's whirlybird technique from *The Winning Brief*.

Collaborative oscillation model developed through dialectic conversation between
Jeff (Synergetic Solutions) and Claude.

Plugin structure adapted from [fullstack-dev-skills](https://github.com/jeffallan/claude-skills) by Jeff Allan.
