# Collaborative Seeding

This reference describes how the human seeds the Madman phase, the collaborative oscillation between human and AI, and the handoff format to the Whirlybird phase.

---

## The Collaborative Oscillation Principle

The Madman phase is not AI-only. It is a collaboration with a clear division of labor:

**AI leads production.** The AI generates volume -- raw ideas, fragments, angles, evidence, hooks. The AI's advantage is speed, breadth, and the ability to explore many directions simultaneously without fatigue.

**Human leads direction.** The human provides the seed that shapes what the AI generates. The human's advantage is lived experience, editorial judgment, domain expertise, and the ability to say "this resonates" or "this is off-track."

The human does not write the raw material. The human seeds it with experience and editorial intent, then reviews what the AI produces. This is not delegation -- it is oscillation. The human and AI take turns shaping the output.

---

## What the Human Provides

A complete seed includes five components. Not all are required for every project, but the stronger the seed, the more relevant the Madman's output will be.

### 1. Topic or Subject

The core subject matter. This can be broad ("content marketing ROI") or narrow ("why most content marketing ROI calculations ignore opportunity cost").

A narrow topic produces more focused output. A broad topic produces more divergent material that may need heavier curation in the Whirlybird phase.

### 2. Unique Angle or Experience

This is the most valuable part of the seed. The human's lived experience, original insight, or specific perspective is what separates the final piece from generic content on the same topic.

Examples of strong angle seeds:
- "I managed a content team for 3 years and found that our best-performing posts were the ones we almost didn't publish."
- "Most advice about writing documentation assumes a technical audience, but our users are non-technical."
- "I interviewed 12 founders and noticed a pattern nobody talks about."

If the human cannot articulate a unique angle, the Madman phase should still proceed, but the output will lean more generic. The Whirlybird phase can sharpen the angle later.

### 3. Target Audience

Who will read this piece? The more specific the audience description, the better the Madman can calibrate:
- Their knowledge level (beginner, intermediate, expert)
- Their role or context (developer, manager, founder, student)
- Their current pain point or motivation for reading
- What they have probably already read on this topic

### 4. Problem This Solves for the Reader

What does the reader gain from this piece? This is distinct from the topic -- it is the transformation the piece enables.

Examples:
- "After reading this, the reader will know how to evaluate whether their content marketing spend is actually profitable."
- "This piece helps engineering managers stop wasting time in unproductive code reviews."

### 5. Specific Material to Incorporate

Any material the human wants woven into the piece:
- Data from their own research or experience
- Quotes they want to reference
- Frameworks or models they use
- Specific examples or case studies from their work
- Constraints (word count, publication outlet, tone)

---

## When the Seed Is Thin

If the human provides only a topic with no angle, audience, or experience, the AI asks one round of up to 3 clarifying questions in a single `AskUserQuestion` call before proceeding. One round keeps the creative phase moving; a second round would stall it.

Ask only about what the seed is missing, and pick the questions in this priority order:

1. **Angle:** "What is your take on this topic?" (Highest impact on output relevance)
2. **Audience:** "Who specifically is this for?" (Shapes tone and depth)
3. **Problem:** "What should the reader be able to do after reading this?" (Shapes content selection)
4. **Lived experience:** "What have you seen or done firsthand that bears on this?" (Supplies anecdotes the AI cannot invent)

Make each question multiple choice where possible: offer 2 to 4 concrete options drawn from the topic, and leave an "Other" path so the human can answer in their own words. A seed missing only one element gets a single question.

If the human skips a question or declines to elaborate, generate with what you have. Generating material from a thin seed is better than not generating at all. The Whirlybird phase can compensate.

---

## The Seeding Conversation

A typical seeding exchange looks like this:

**Human:** "I want to write about developer productivity."

**AI (one `AskUserQuestion` round, 3 questions):**

1. "What is your angle on developer productivity?" Options: data from your own team; a contrarian opinion; a specific slice (code review, onboarding, tooling); Other.
2. "Who is this for?" Options: individual engineers; engineering managers; executives; Other.
3. "Do you have a firsthand story to anchor it?" Options: yes, a team turnaround; yes, a metric that backfired; no, keep it general; Other.

**Human:** Picks "data from your own team" and "engineering managers", and adds under Other: "I've been tracking my team's output for 2 years and found that our most productive weeks were the ones with the most 'wasted' time -- long lunches, side projects, unstructured pairing."

**AI:** [Proceeds to generate Madman output seeded with this angle]

The AI does not ask follow-up questions after the seed is provided. The priority is to generate material. The human can redirect during the review phase.

---

## Handoff Format: Madman to Whirlybird

When the Madman phase is complete, the output is delivered to the human. The human reviews it and marks:

- Which ideas resonate
- Which fragments have energy
- Which angles to pursue
- What is missing from their perspective
- What to discard entirely

This annotated Madman output becomes the input to the Whirlybird phase. The Whirlybird takes the human-curated raw material and begins grouping, clustering, and finding relationships.

### Handoff Checklist

The Madman delivers:

1. **Full raw material dump** -- All dimensions populated, nothing filtered out
2. **Marked high-energy fragments** -- Passages flagged during generation as having momentum
3. **Hook candidates** -- 3-5 complete opening paragraphs
4. **Dimension coverage note** -- Which dimensions produced the most material and which were thin
5. **Open questions** -- Anything the AI noticed during generation that needs human input (factual verification, experience gaps, audience assumptions)

The human responds with:

1. **Selections** -- Which ideas, fragments, and hooks to carry forward
2. **Additions** -- Any new material sparked by reading the Madman output
3. **Cuts** -- What to discard (no explanation needed)
4. **Direction** -- Any refinement to the angle, audience, or thesis

This human-annotated package is what the Whirlybird skill receives as input.

---

## Anti-Patterns

### The AI Over-Seeds Itself

The AI generates material that sounds authoritative but does not reflect the human's actual experience or angle. The Madman must anchor to the human's seed, not replace it with generic expertise.

**Fix:** After generating, check each core idea against the human's seed. Flag any ideas that drifted from the provided angle.

### The Human Over-Directs

The human provides such a detailed brief that there is nothing for the Madman to generate. The seed becomes a finished outline.

**Fix:** If the human's input already has structure, skip the Madman phase entirely and begin with the Architect. The Madman is for exploration, not execution of a pre-existing plan.

### Analysis Paralysis on Seeding

The human spends too long perfecting their seed before the Madman can begin.

**Fix:** Remind the human that the seed does not need to be polished. A rough direction is sufficient. The Madman's job is to generate options, not to execute a precise brief.
