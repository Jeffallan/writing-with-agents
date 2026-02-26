<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4B0082,100:6A5ACD&height=200&section=header&text=Writing%20With%20Agents&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=35" width="100%" alt="Writing With Agents" />
</p>

<p align="center">
  <!-- SKILL_COUNT -->10<!-- /SKILL_COUNT --> Skills · <!-- REFERENCE_COUNT -->31<!-- /REFERENCE_COUNT --> References · <!-- WORKFLOW_COUNT -->4<!-- /WORKFLOW_COUNT --> Workflows
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
  <img src="https://img.shields.io/badge/Claude%20Code-Plugin-blueviolet.svg" alt="Claude Code Plugin" />
  <a href="https://github.com/Jeffallan/writing-with-agents/stargazers"><img src="https://img.shields.io/github/stars/Jeffallan/writing-with-agents" alt="GitHub Stars" /></a>
</p>

---

## Why This Exists

Most AI writing tools mix brainstorming, structuring, and editing into a single prompt. The result is flat, mediocre output that sounds like everything else. Betty Flowers identified in 1981 that writing requires four distinct cognitive modes, each demanding a different kind of thinking. Mixing them produces internal conflict: your inner critic shuts down your inner generator before it can produce anything worth editing.

This plugin gives each mode its own skill, workflow, and quality gates. The AI and human trade leadership at every phase: AI generates raw volume when quantity matters, human decides structure when judgment matters.

---

## What This Is

A Claude Code plugin that separates the writing process into five phases, each with a defined lead and support role:

| Phase | Lead | Support | Deliverable |
|-------|------|---------|-------------|
| Madman | AI generates | Human seeds with experience | Raw material dump |
| Whirlybird | AI generates options | Human selects and combines | Chosen mindmap diagram |
| Architect | Human decides | AI formulates | Structured blueprint |
| Carpenter | AI builds | Human spot-checks | Complete draft |
| Judge | AI detects | Human decides | Polished final piece |

This is the **collaborative oscillation model**: not AI-only automation, not human-only writing. Each phase leverages what each party does best.

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

| Skill | Domain | What It Does |
|-------|--------|-------------|
| `madman` | generation | Generates 3-5x raw material from human-seeded topics across 8 dimensions. Quantity over quality. |
| `whirlybird` | structure | Produces nonlinear Mermaid mindmaps. Human selects and combines branches into a working outline. |
| `architect` | structure | Builds a throughline and section blueprint from the chosen outline. Human leads structural decisions. |
| `carpenter` | craft | Constructs full prose from the blueprint. Human spot-checks voice, tone, and accuracy. |
| `judge` | quality | Runs 5 editing passes (AI voice, Strunk & White, readability, consistency, SEO). Human approves changes before any edits. |
| `quality-rubric` | quality | Scores across 10 dimensions (1-5 scale). Routes any dimension below 4 back to the responsible phase for targeted rework. |

### Cross-Cutting

| Skill | Domain | What It Does |
|-------|--------|-------------|
| `seo-writer` | seo | Integrates during Architect (keyword mapping), Carpenter (natural placement), and Judge (validation). Not a post-draft bolt-on. |

### Outer Loop (Multi-Article)

| Skill | Domain | What It Does |
|-------|--------|-------------|
| `research-intake` | research | Ingests sources into structured research notes and identifies gaps in coverage. |
| `content-strategist` | strategy | Maps a domain into a multi-article content plan with prioritized topics and linking strategy. |
| `knowledge-harvester` | research | Captures insights from completed articles back into the research vault for future use. |

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

This reduces initial token usage by ~50%. In practice, each skill conversation starts with ~80-100 lines instead of 400+, preserving your context window for actual content.

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
