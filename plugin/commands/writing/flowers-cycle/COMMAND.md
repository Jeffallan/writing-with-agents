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

5. Offer an optional thesis stress-test with `the-fool` skill via AskUserQuestion (run it or skip it). Recommend it for argument-driven or long-form pieces, since weaknesses are cheapest to fix before any structural commitment. If `the-fool` is not in the available skills list, recommend installing it from <https://github.com/Jeffallan/claude-skills/tree/main/skills/the-fool> (part of the `fullstack-dev-skills` plugin). Carry any Fool findings forward by type: structural items go to the Architect in Phase 3, tonal items to the Judge in Phase 5.

**Handoff:** Raw material dump (plus any Fool findings) to Phase 2

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

3. Identify the throughline (single-sentence thesis). Absorb any structural Fool findings from Phase 1.

4. Build the Architect Blueprint with section map

5. If `--seo` flag is set, load `seo-writer` skill for keyword mapping and heading architecture

6. Present blueprint to human for approval via AskUserQuestion

7. Human may request changes to structure before proceeding

**Re-entry from Phase 4:** When the Carpenter routes a marked-up draft back for structural rework, use the Architect's return-from-Carpenter variant: read `outline-N.md`, `draft-N.md`, `draft-N-human-edits.md`, and the Carpenter's edit catalog, then regenerate the outline as `outline-N+1.md`. Do not restart triage from scratch.

**Handoff:** Approved Architect Blueprint to Phase 4

---

### Phase 4: Carpenter (Prose Construction)

**Skill:** `carpenter`
**Lead:** AI builds | **Support:** Human spot-checks

1. Load the `carpenter` skill

2. Write section by section following the approved blueprint

3. If `--seo` flag is set, load `seo-writer` skill for keyword integration rules

4. Run Carpenter quality checklist

5. Deliver the draft as a preservation + edit pair: `draft-N.md` (never edited) and `draft-N-human-edits.md` (the copy the human marks up). Tell the human which file to edit and how to mark it up: `~~strikethrough~~` cuts, `[brackets]` leave notes, inline replacement text is a direct rewrite.

6. When the human returns the edit copy, catalog every change and confirm the routing destination via AskUserQuestion:
   - **Return to Architect** (Phase 3 re-entry): structural edits such as sections reordered, cut, or added, a reframed thesis, or a changed voice
   - **Proceed to Judge** (Phase 5): sentence-level edits within the existing structure

**Handoff:** `draft-N.md`, `draft-N-human-edits.md`, and the blueprint to Phase 5, or the edit catalog to Phase 3

---

### Phase 5: Judge (Detection and Polish)

**Skill:** `judge`
**Lead:** AI detects | **Support:** Human decides

1. Load the `judge` skill

2. Read `draft-N.md`, `draft-N-human-edits.md`, and the blueprint. Parse the edit copy into auto-propagate items (strikethroughs and direct rewrites, applied unconditionally) and brackets to resolve (each paired with a proposed resolution).

3. Run all detection passes in order:
   - Pass 1: AI Voice Detection
   - Pass 2: Strunk & White Rules
   - Pass 3: Readability Scoring
   - Pass 4: Consistency Audit
   - Pass 5: SEO Validation (only if `--seo` flag)

   Add any tonal Fool findings from Phase 1 as extra review-and-decide candidates.

4. Present the Judge Consolidated Report with all three signal types: auto-propagate, brackets to resolve, and detection findings grouped by severity

5. Use a single AskUserQuestion call for every decision: each bracket resolution, each review-and-decide finding, and the routing choice:
   - **Full Carpenter rebuild:** substantial but non-structural edits. Return to Phase 4 with the approved bundle; the Carpenter rebuilds from the existing outline as `draft-N+1.md` + `draft-N+1-human-edits.md`.
   - **Light polish:** minor edits. The Judge applies the approved bundle inline and writes `final-draft-X.md` + `final-draft-X-human-edits.md`, with `X` starting at 1. Further edits to a final draft return to the Judge and produce `final-draft-X+1`.

**Handoff:** `final-draft-X.md` to Phase 6

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
- Article: final-draft-X.md (edit copy: final-draft-X-human-edits.md)
- Judge Consolidated Report: [auto-propagate, brackets, detection findings]
- Quality Scorecard: [dimension scores]
```

---

## Constraints

### MUST DO
- Execute all 6 phases in order. Routing back to an earlier phase (Phase 4 to Phase 3, Phase 5 to Phase 4) is a re-entry, not a skip.
- Use AskUserQuestion at every human decision point
- Load the corresponding skill for each phase
- Present artifacts for human approval before proceeding
- Deliver every draft as a preservation + edit pair and tell the human which file to edit
- Apply auto-propagate edits (strikethroughs, direct rewrites) without asking again

### MUST NOT DO
- Skip phases
- Proceed without human approval at decision points
- Make structural changes during Carpenter phase (go back to Architect)
- Route structural edits from the Carpenter's edit catalog to the Judge (they go to the Architect)
- Send structural Fool output to the Judge (it goes to the Architect; only tonal items go to the Judge)
- Make autonomous editing decisions during Judge phase (present findings, human decides)
