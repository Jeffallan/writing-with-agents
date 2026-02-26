---
description: Orchestrate a single article through the Flowers writing cycle (Madman, Whirlybird, Architect, Carpenter, Judge, Quality Rubric)
argument-hint: "<topic> [--content-type TYPE] [--seo]"
---

# Flowers Cycle

**Arguments:** $ARGUMENTS

---

## Purpose

Orchestrates the complete single-article writing workflow based on Betty Flowers' four-phase framework, extended with Bryan Garner's whirlybird technique and a quality rubric. Each phase involves collaborative oscillation between AI and human.

---

## Argument Parsing

Parse arguments to determine configuration:

| Argument | Required | Default | Description |
|----------|----------|---------|-------------|
| `topic` | Yes | -- | The topic or subject to write about |
| `--content-type` | No | article | article, tutorial, blog-post, white-paper, case-study, documentation |
| `--seo` | No | off | Enable SEO optimization layer across all phases |

---

## Phase Sequence

Execute these 6 phases in order. Each phase uses the corresponding skill. Do not skip phases.

### Phase 1: Madman (Generation)

**Skill:** `madman`
**Lead:** AI generates | **Support:** Human seeds

1. Ask the human to seed the Madman via AskUserQuestion:
   - What is the topic?
   - What is your unique angle, experience, or authority?
   - Who is the target audience?
   - Any specific material to incorporate?

2. Load the `madman` skill and generate raw material across all dimensions

3. If `--seo` flag is set, additionally generate keyword variations, PAA questions, and angle gaps

4. Present raw material dump to human for review

**Handoff:** Raw material dump to Phase 2

---

### Phase 2: Whirlybird (Nonlinear Outlining)

**Skill:** `whirlybird`
**Lead:** AI generates options | **Support:** Human selects

1. Load the `whirlybird` skill

2. Generate 2-3 whirlybird options as Mermaid mindmaps with different centers of gravity

3. Present options to human via AskUserQuestion for selection

4. If human selects "Combine elements," generate a combined whirlybird for approval

**Handoff:** Selected whirlybird to Phase 3

---

### Phase 3: Architect (Structure)

**Skill:** `architect`
**Lead:** Human decides | **Support:** AI formulates

1. Load the `architect` skill

2. Triage Madman material against the selected whirlybird

3. Identify the throughline (single-sentence thesis)

4. Build the Architect Blueprint with section map

5. If `--seo` flag is set, load `seo-writer` skill for keyword mapping and heading architecture

6. Present blueprint to human for approval via AskUserQuestion

7. Human may request changes to structure before proceeding

**Handoff:** Approved Architect Blueprint to Phase 4

---

### Phase 4: Carpenter (Prose Construction)

**Skill:** `carpenter`
**Lead:** AI builds | **Support:** Human spot-checks

1. Load the `carpenter` skill

2. Write section by section following the approved blueprint

3. If `--seo` flag is set, load `seo-writer` skill for keyword integration rules

4. Run Carpenter quality checklist

5. Present complete draft to human for spot-check

**Handoff:** Complete draft to Phase 5

---

### Phase 5: Judge (Detection and Polish)

**Skill:** `judge`
**Lead:** AI detects | **Support:** Human decides

1. Load the `judge` skill

2. Run all detection passes in order:
   - Pass 1: AI Voice Detection
   - Pass 2: Strunk & White Rules
   - Pass 3: Readability Scoring
   - Pass 4: Consistency Audit
   - Pass 5: SEO Validation (only if `--seo` flag)

3. Present consolidated Judge Detection Report grouped by severity

4. Human selects which findings to act on via AskUserQuestion

5. Implement approved changes

**Handoff:** Polished draft to Phase 6

---

### Phase 6: Quality Rubric (Scoring)

**Skill:** `quality-rubric`
**Lead:** AI scores | **Support:** Human reviews

1. Load the `quality-rubric` skill

2. Score all 10 dimensions (1-5)

3. Check against minimum publishable thresholds for the content type

4. If any critical dimension is below 4, recommend rework with phase routing

5. Present Quality Scorecard to human

6. If human approves, deliver final article. If rework needed, return to indicated phase.

---

## Output

```
## Flowers Cycle Complete

**Topic:** {topic}
**Content Type:** {content_type}
**SEO:** {enabled/disabled}

### Quality Scorecard
| Dimension | Score |
|-----------|-------|
| [each dimension] | [score] |

**Average:** {average}
**Status:** {Publishable / Needs Rework}

### Deliverables
- Article: [final content]
- Judge Report: [detection findings]
- Quality Scorecard: [dimension scores]
```

---

## Constraints

### MUST DO
- Execute all 6 phases in order
- Use AskUserQuestion at every human decision point
- Load the corresponding skill for each phase
- Present artifacts for human approval before proceeding

### MUST NOT DO
- Skip phases
- Proceed without human approval at decision points
- Make structural changes during Carpenter phase (go back to Architect)
- Make autonomous editing decisions during Judge phase (present findings, human decides)
