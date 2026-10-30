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
  author: https://github.com/Jeffallan
  company: https://synergetic.solutions
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
- An H1 title (`# Skill Name`) directly after the frontmatter, and no other H1 outside code fences
- Role definition and collaborative model (who leads, who supports)
- When-to-use guidance (triggers)
- Core workflow (5-7 steps)
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

## Shared Code from the Handbook

The site code under `site/src/components/site-*/`, the shared CI workflows and `.github/workflows/handbook-update.yml` come from the private handbook through Copier (`.copier-answers.yml`). Change them in the handbook, not here.

The versions of the shared site packages come from the handbook too (`personal-sites/package.json`): `astro`, `@astrojs/starlight`, `@jdevalk/astro-seo-graph`, `astro-og-canvas`, `starlight-links-validator`, the `@fontsource` fonts, `js-yaml`, `smol-toml`, `sharp`, `prettier` and `prettier-plugin-astro`. Don't bump them in `site/package.json`. Bump them in the handbook. **They reach this repo only with a handbook release**, as the update PR that `handbook-update.yml` opens, carrying the new `site/package.json` and lockfile.

## Release Checklist

### 1. Update Version and Counts

Update `version.json`, then write the version and counts into the docs:
```bash
uvx skill-linter@0.2.0 stamp
```

### 2. Validate Skills Integrity

```bash
uvx skill-linter@0.2.0 release
uvx skill-linter@0.2.0 stamp --check
```

These are the checks CI runs. [skill-linter](https://pypi.org/project/skill-linter/) is configured in `pyproject.toml`; `uvx skill-linter rules` lists every rule.

### 3. Update CHANGELOG.md

Add new version entry following Keep a Changelog format.

### 4. Plan for Directory Review

The Claude plugin directory polls this repository about every 6 hours. Each new version needs Anthropic review before directory users get it, and directory installs pin the reviewed commit (v0.3.1 pins `9fa1bb2`). Expect directory users to stay on the previous version until the review passes; marketplace and `npx skills add` users get the release when the tag is pushed.

### 5. Check the Vendored Humanizer Catalog

`plugin/skills/judge/references/human-voice.md` is a pinned copy of humanizer. Compare its pinned tag with the latest upstream tag:
```bash
gh api repos/blader/humanizer/tags -q '.[0].name'
```
If upstream is newer, review the diff of `SKILL.md` between the two tags, replace the body of `human-voice.md` below its attribution header, and bump the pinned tag in the header.

---

## Default Style Constraints

The following patterns should be avoided in all generated prose unless the user explicitly permits them per-article:

- **Em dashes** — Do not use. Restructure the sentence instead.
- **Sentences starting with "And" or "But"** — Do not begin sentences with coordinating conjunctions. Rewrite to connect the idea differently.

These constraints apply to the Carpenter and Judge phases. The Madman phase is exempt (raw material is unfiltered by design).

---

## Final Prose

Before delivering a final deliverable, run the
writing-with-agents:human-voice command on it in embedded mode and deliver
its output. Final deliverables are finished content intended to be read
by humans, such as READMEs, documentation pages, docs site pages, release
notes, and PR descriptions.

Does not apply to commit messages, code comments, changelog entries, code,
command output, drafts in progress, or conversational replies. Each run
reads the full human-voice catalog, so the list stays short.

Default Style Constraints govern the article content the skills generate in the Carpenter and Judge phases (Madman stays exempt). Final Prose governs this repository's own prose. Skill and command files under `plugin/skills/` and `plugin/commands/` are instructions for Claude and are excluded.

---

## Attribution

Based on Betty S. Flowers' "Madman, Architect, Carpenter, Judge" framework (1981),
extended with Bryan Garner's whirlybird technique from *The Winning Brief*.

Collaborative oscillation model developed through dialectic conversation between
the maintainer ([@jeffallan](https://github.com/jeffallan)) and Claude.

Plugin structure adapted from [fullstack-dev-skills](https://github.com/jeffallan/claude-skills) by [@jeffallan](https://github.com/jeffallan).

Judge Pass 1 pattern catalog (`plugin/skills/judge/references/human-voice.md`) vendored from [humanizer](https://github.com/blader/humanizer) v3.1.0 by Siqi Chen, MIT License.
