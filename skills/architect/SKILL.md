---
name: architect
description: Use when organizing raw material into a coherent structure, defining the throughline of a piece, building an outline, or making strategic decisions about what to include and cut from generated content.
license: MIT
metadata:
  author: https://github.com/dmitry
  version: "1.0.0"
  domain: structure
  triggers: organize, structure, outline, throughline, blueprint, architect, arrange content, content structure, information architecture, editorial decision
  role: specialist
  scope: design
  output-format: document
  related-skills: madman, whirlybird, carpenter
---

## Role Definition

The Architect is the strategic structuring phase. Human leads decision-making. AI formulates the structure, presents options, and maps material to sections.

**Lead:** Human decides what the piece is about, what stays, what gets cut.
**Support:** AI organizes, proposes structures, identifies gaps, and builds the blueprint.

The Architect is NOT sentimental about the Madman's output. The Madman overproduced on purpose. Cutting 70-80% of that material is normal and healthy. The goal is to find the strongest 20-30% and arrange it into something a reader can follow.

## When to Use This Skill

- After the Whirlybird phase has selected and grouped raw Madman material
- When you have excess material and need to decide what stays and what goes
- When the piece lacks a clear throughline or argument
- When you need to choose between competing structures (technical vs. narrative vs. tutorial)
- When reorganizing an existing draft that has structural problems
- Before handing off to the Carpenter for construction
- When the Carpenter phase has identified a structural problem and sent it back for resolution
- When multiple throughline candidates exist and the human needs options to choose from
- When a draft reads as a collection of ideas rather than a single coherent argument
- When existing content needs to be repurposed for a different audience or format
- When estimating scope (word count, section count) for a planned piece

## Core Workflow

1. **Receive material** -- Take the Whirlybird selection and the full Madman output. The Whirlybird clusters are your starting point; the raw Madman material is your backup inventory.

2. **Triage material** -- Mark each idea or cluster:
   - STAR: strongest material, must include
   - ARROW: supporting material, include if it serves the throughline
   - CROSS: weak, redundant, or off-topic, cut it
   See `references/architect-process.md` for the full triage methodology.

3. **Identify the ONE throughline** -- Distill the piece down to a single-sentence thesis. Every section must connect to this sentence or get cut. Present 2-3 throughline options to the human for selection.

4. **Build structure** -- Select the appropriate template (technical/nonfiction, SEO long-form, or tutorial/how-to) and map surviving material to sections. Identify gaps where new material or research is needed. See `references/blueprint-template.md` for structure templates.

5. **Present the Architect Blueprint** -- Deliver the complete blueprint to the human for approval. Do not proceed to the Carpenter phase without explicit sign-off. See `references/collaborative-decision.md` for the handoff protocol.

## Reference Guide

| Topic | Reference |
|-------|-----------|
| Triage methodology and section mapping | `references/architect-process.md` |
| Blueprint output format and structure templates | `references/blueprint-template.md` |
| Human-led decision process and Carpenter handoff | `references/collaborative-decision.md` |

## Constraints

**MUST DO:**
- Present multiple throughline options for human selection
- Cut at least 70% of Madman material -- if you are keeping most of it, you are not being selective enough
- Map every surviving idea to a specific section
- Identify gaps explicitly -- do not paper over missing evidence
- Get human approval on the blueprint before Carpenter handoff
- Show what gets cut for each throughline option -- the cost of a choice is as important as the benefit
- Note transitions between adjacent sections -- if no natural transition exists, the structure may need reordering
- Verify the blueprint checklist before presenting: thesis is arguable, sections have starred support, gaps are named
- Include estimated scope (word count range, section count) in the blueprint

**MUST NOT DO:**
- Decide the throughline without human input
- Keep material out of sentiment ("but we worked hard on that")
- Skip the triage step and jump straight to outlining
- Build structure around weak material just because it exists
- Proceed to Carpenter without an approved blueprint
- Present options as ranked recommendations -- frame them as trade-offs with different strengths
- Paper over gaps with vague section descriptions -- name what is missing explicitly
- Create more than 3 options for any single decision -- two or three prevents decision fatigue
- Allow sections that rely solely on arrow-level material with no starred support

## Output Templates

The primary output is the **Architect Blueprint**. See `references/blueprint-template.md` for the full template, including variants for technical, SEO, and tutorial content.

A minimal blueprint contains:
- Thesis (single sentence)
- Target audience
- Section-by-section structure with purpose, key points, evidence, and transitions
- Gaps to fill
- SEO notes (when applicable)

**Section Mapping Entry Format**

Each section in the blueprint should include:
- **Purpose** -- what this section accomplishes for the reader
- **Key points** -- specific ideas mapped from Madman material, with triage marks (STAR/ARROW)
- **Evidence** -- data, examples, or case studies assigned to support the key points
- **Transition to next** -- the logical connection that leads into the following section
- **Gaps** -- any missing evidence or thin material flagged for the Carpenter

**Throughline Options Format**

When presenting throughline candidates to the human:
- **Option A:** [Throughline sentence] -- strongest support from [starred items X, Y]
- **Option B:** [Throughline sentence] -- strongest support from [starred items Z, W]
- **Option C:** [Throughline sentence] -- strongest support from [starred items X, Z]

Each option must show what it optimizes for and what material gets cut if chosen.

## Knowledge Reference

This skill implements the Architect phase from Betty S. Flowers' "Madman, Architect, Carpenter, Judge" framework (1981). The Architect sits between divergent generation (Madman/Whirlybird) and convergent construction (Carpenter). Its job is to impose order on chaos without killing the energy of the raw material.

The triage system (STAR / ARROW / CROSS) provides a consistent vocabulary for material quality across sessions. STAR items meet at least two criteria: original insight, direct throughline support, specific evidence, or would leave a hole if removed. Expect 5-8 starred items from a typical Madman session. ARROW items earn a place only when they reinforce a starred idea, provide necessary context, or serve as transitions. CROSS items are cut without remorse -- redundant, tangential, or only included because the Madman produced them.

The throughline must be expressible in one sentence, arguable (a reasonable person could disagree), specific (concrete language, not vague), and supported by the starred material. If the starred material does not support the throughline, either the throughline is wrong or the triage needs revisiting.

When structural problems surface during the Carpenter phase, the correct response is to reopen the Architect phase for the affected sections only, not to patch the structure during prose construction. Structural drift produces pieces where the first half follows one logic and the second half follows another.
