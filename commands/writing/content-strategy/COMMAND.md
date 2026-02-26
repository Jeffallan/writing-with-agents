---
description: Orchestrate a multi-article content strategy from research corpus through domain mapping, content planning, and production
argument-hint: "<source-path> [--vault-path PATH]"
---

# Content Strategy

**Arguments:** $ARGUMENTS

---

## Purpose

Orchestrates the multi-article outer loop: Research Intake, Gap Analysis, Domain Mapping, Content Plan, and Knowledge Harvest. Produces a content plan that feeds individual articles into the Flowers writing cycle.

---

## Argument Parsing

| Argument | Required | Default | Description |
|----------|----------|---------|-------------|
| `source-path` | Yes | -- | Path to source material (files, folders, vault directory) |
| `--vault-path` | No | none | Path to vault for knowledge capture |

---

## Phase Sequence

### Phase 1: Research Intake

**Skill:** `research-intake`

1. Establish session context:
   - If `--vault-path` provided, use it
   - Otherwise, ask via AskUserQuestion (specify vault path, use cwd, or no vault)

2. Traverse source-path recursively, read and index all content

3. Build knowledge map (topics, depth, claims, sources, connections, gaps)

4. Present knowledge map to human for validation

---

### Phase 2: Gap Analysis

**Skill:** `research-intake`

1. Present identified gaps to human via AskUserQuestion (multi-select)

2. For selected gaps, propose research directions (3 options per gap)

3. Fill selected gaps via research

4. Present findings for validation

5. Offer vault capture if vault-path is configured

---

### Phase 3: Domain Mapping

**Skill:** `content-strategist` + `whirlybird`

1. Generate domain-level whirlybird (Mermaid mindmap of entire knowledge domain)

2. Present domain whirlybird to human

3. Ask human to identify content topology via AskUserQuestion:
   - One pillar covering whole domain
   - Pillar + cluster articles
   - Multiple standalone articles
   - Let me study the map and specify

---

### Phase 4: Content Plan

**Skill:** `content-strategist`

1. Based on human's topology decision, build content plan

2. Identify pillar article, cluster articles, and targeted pieces

3. Set production order (pillar first, then clusters by value, then targeted)

4. Assign keywords if SEO is relevant

5. Present content plan to human for approval

---

### Phase 5: Execute (Per Article)

For each article in the content plan, invoke the Flowers cycle:

```
/writing-with-agents:flowers-cycle "<article topic>" --content-type <type> [--seo]
```

Track production status as articles complete.

---

### Phase 6: Knowledge Harvest

**Skill:** `knowledge-harvester`

1. After articles are produced, gather all research artifacts

2. Format for vault ingestion (sources, connections, domain map, article links)

3. Present to human for approval

4. Write to vault-path if approved

---

## Output

```
## Content Strategy Complete

**Domain:** {domain}
**Source Material:** {source-path}

### Content Plan
- Pillar: {title}
- Clusters: {count}
- Targeted: {count}

### Production Status
| Article | Status |
|---------|--------|
| [each article] | [status] |

### Knowledge Harvest
- Artifacts captured: {count}
- Vault path: {path}
```

---

## Constraints

### MUST DO
- Complete intake and gap analysis before domain mapping
- Generate domain whirlybird (not article whirlybird) for content topology
- Get human approval on content plan before starting production
- Offer knowledge harvest after production

### MUST NOT DO
- Skip gap analysis
- Start writing articles before content plan is approved
- Assume any specific note format for source material
- Write to vault without human approval
