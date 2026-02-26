# Writing With Agents

A Claude Code skill plugin implementing Betty Flowers' "Madman, Architect, Carpenter, Judge" writing framework (1981) with Bryan Garner's whirlybird technique, SEO optimization, a 10-dimension quality rubric, and multi-article content strategy.

<!-- SKILL_COUNT -->10<!-- /SKILL_COUNT --> specialized writing skills | <!-- REFERENCE_COUNT -->31<!-- /REFERENCE_COUNT --> reference files | <!-- WORKFLOW_COUNT -->4<!-- /WORKFLOW_COUNT --> workflow commands

---

## What This Is

A structured AI-assisted writing methodology that separates creative energy from critical energy across distinct phases. Each phase defines a **lead** and a **support** role — the AI and human collaborate throughout, but who drives changes at each step.

| Phase | Lead | Support | Deliverable |
|-------|------|---------|-------------|
| Madman | AI generates | Human seeds with experience | Raw material dump |
| Whirlybird | AI generates options | Human selects and combines | Chosen mindmap diagram |
| Architect | Human decides | AI formulates | Structured blueprint |
| Carpenter | AI builds | Human spot-checks | Complete draft |
| Judge | AI detects | Human decides | Polished final piece |

This is the **collaborative oscillation model** — not AI-only automation, not human-only writing. Each phase leverages what each party does best.

---

## Installation

```bash
claude install /path/to/writing-with-agents
```

Or clone and install:

```bash
git clone https://github.com/Jeffallan/writing-with-agents.git
claude install ./writing-with-agents
```

---

## Quick Start

### Write a Single Article

```
/writing-with-agents:flowers-cycle "API-first identity verification for fintech"
```

This runs the full Flowers cycle: Madman, Whirlybird, Architect, Carpenter, Judge, Quality Rubric.

### With SEO Optimization

```
/writing-with-agents:flowers-cycle "API-first identity verification" --seo
```

### Plan a Multi-Article Strategy

```
/writing-with-agents:content-strategy /path/to/research/notes
```

### Capture a Research Source

```
/writing-with-agents:capture /path/to/note.md https://example.com/article
```

### Configure Session Defaults

```
/writing-with-agents:writing-setup
```

---

## Skills

### Inner Loop (Single Article)

| Skill | Domain | Role |
|-------|--------|------|
| `madman` | generation | Creative generator — produces 3-5x raw material |
| `whirlybird` | structure | Nonlinear outlining via Mermaid mindmaps |
| `architect` | structure | Strategic structuring — throughline and blueprint |
| `carpenter` | craft | Prose construction from blueprint |
| `judge` | quality | 5 detection passes with consolidated report |
| `quality-rubric` | quality | 10-dimension scoring with phase-rework routing |

### Cross-Cutting

| Skill | Domain | Role |
|-------|--------|------|
| `seo-writer` | seo | SEO integration across Architect/Carpenter/Judge |

### Outer Loop (Multi-Article)

| Skill | Domain | Role |
|-------|--------|------|
| `research-intake` | research | Source ingestion and gap analysis |
| `content-strategist` | strategy | Domain mapping and content planning |
| `knowledge-harvester` | research | Vault capture and feedback loop |

---

## Workflow Commands

| Command | Description |
|---------|-------------|
| `/writing-with-agents:flowers-cycle` | Single-article inner loop (6 phases) |
| `/writing-with-agents:content-strategy` | Multi-article outer loop (6 phases) |
| `/writing-with-agents:capture` | Capture source into structured research note |
| `/writing-with-agents:writing-setup` | Configure session defaults |

---

## Architecture

### Two Loops

```
Outer Loop (runs once per domain):
  Intake --> Gap Analysis --> Domain Mapping --> Content Plan --> [Inner Loop per article] --> Knowledge Harvest

Inner Loop (runs once per article):
  Madman --> Whirlybird --> Architect --> Carpenter --> Judge --> Quality Rubric
```

### Progressive Disclosure

Each skill loads in two tiers:
- **Tier 1 (SKILL.md):** ~80-100 lines with role, triggers, workflow, constraints, routing table
- **Tier 2 (references/):** Detailed procedural content loaded only when context requires

This reduces initial token usage by ~50%.

---

## Project Structure

```
writing-with-agents/
  .claude-plugin/
    plugin.json
    marketplace.json
  skills/
    madman/          (SKILL.md + 3 references)
    whirlybird/      (SKILL.md + 3 references)
    architect/       (SKILL.md + 3 references)
    carpenter/       (SKILL.md + 3 references)
    judge/           (SKILL.md + 5 references)
    quality-rubric/  (SKILL.md + 2 references)
    seo-writer/      (SKILL.md + 5 references)
    content-strategist/ (SKILL.md + 3 references)
    research-intake/ (SKILL.md + 2 references)
    knowledge-harvester/ (SKILL.md + 2 references)
  commands/
    writing/
      flowers-cycle/    (COMMAND.md + yaml)
      content-strategy/ (COMMAND.md + yaml)
    capture/            (COMMAND.md + yaml + references/)
    utilities/
      writing-setup/    (COMMAND.md + yaml)
    workflow-manifest.yaml
  scripts/
    validate-skills.py
    validate-markdown.py
    update-docs.py
  docs/workflow/
  CLAUDE.md
  version.json
```

---

## Attribution

Based on Betty S. Flowers' "Madman, Architect, Carpenter, Judge: Roles and the Writing Process" (*Language Arts*, Vol. 58, No. 7, October 1981). Extended with Bryan Garner's whirlybird technique from *The Winning Brief*.

Collaborative oscillation model developed through dialectic conversation between Jeff (Synergetic Solutions) and Claude (Anthropic).

Plugin structure adapted from [fullstack-dev-skills](https://github.com/jeffallan/claude-skills) by Jeff Allan (@jeffallan).

---

## License

MIT
