# Architect Process: Triage and Structure

This reference covers the detailed methodology for triaging Madman material, identifying the throughline, selecting a structure template, and mapping material to sections.

---

## Material Triage

Triage is the first and most consequential step. Every idea, cluster, or fragment from the Madman/Whirlybird phases gets one of three marks:

### STAR -- Strongest Material (Must Include)

These are the ideas that made you stop and pay attention. They meet at least two of these criteria:
- Original insight not easily found elsewhere
- Directly supports the emerging throughline
- Contains specific evidence, data, or concrete examples
- Would leave a noticeable hole if removed

Expect 5-8 starred items from a typical Madman session. If you have more than 10, you are not being selective enough.

### ARROW -- Supporting Material (Conditional Include)

These ideas are solid but not essential. They earn a place only if:
- They directly reinforce a starred idea
- They provide necessary context the reader needs
- They serve as transitions between starred sections
- No starred idea already covers the same ground

Arrow material is where most cutting happens. Be honest: does this idea earn its word count, or does it just feel comfortable?

### CROSS -- Cut Material (Discard)

Mark for cutting when any of these apply:
- Redundant with a stronger idea already starred
- Tangential to the emerging throughline
- Interesting but belongs in a different piece
- Weak evidence or unsupported assertion
- Only included because the Madman phase produced it

**Be ruthless.** Cutting 70-80% of Madman output is normal. The Madman's job was to overproduce. The Architect's job is to select. These are complementary, not contradictory. Material that gets cut is not wasted -- it served its purpose by helping you find the starred material.

---

## Throughline Identification

The throughline is the single core argument of the piece. It must satisfy all of these:

1. **Expressible in one sentence.** If you need two sentences, you have two pieces. Pick one.
2. **Arguable.** A reasonable person could disagree. "Testing is important" is not a throughline. "Integration tests catch more production bugs per hour invested than unit tests" is a throughline.
3. **Specific.** Replace vague words with concrete ones. "Better" becomes "40% faster." "Many developers" becomes "teams shipping weekly."
4. **Supported by your starred material.** If your best material does not support the throughline, either the throughline is wrong or the triage is wrong. Revisit both.

### Process for Finding the Throughline

Present the human with 2-3 candidate throughlines derived from the starred material. Frame them as:

- **Option A:** [Throughline sentence] -- Strongest support from [starred items X, Y]
- **Option B:** [Throughline sentence] -- Strongest support from [starred items Z, W]
- **Option C:** [Throughline sentence] -- Strongest support from [starred items X, Z]

The human selects. If none fit, use their feedback to generate a revised set. Do not proceed to structure without a locked throughline.

---

## Structure Templates

Choose the template that best serves the throughline and audience. Each template defines a section sequence. Not every section is mandatory -- adapt to the material.

### Technical / Nonfiction

Best for: essays, opinion pieces, technical arguments, experience reports.

```
1. Hook -- Concrete scene, stat, or question that creates tension
2. Context -- What the reader needs to understand the argument
3. Thesis -- State the throughline explicitly
4. Evidence Block 1 -- Strongest supporting argument with proof
5. Evidence Block 2 -- Second supporting argument
6. Counterargument -- The best objection, addressed honestly
7. Implications -- What follows if the thesis is true
8. Close -- Return to the hook, transformed by the argument
```

### SEO Long-Form

Best for: search-targeted content, comprehensive guides, keyword-driven pieces.

```
1. Title (H1) -- Contains primary keyword
2. Introduction -- Hook + thesis + preview of what the reader will learn
3. Background/Definition (H2) -- Foundational concept with secondary keyword
4. Core Section 1 (H2) -- Primary keyword variation in heading
5. Core Section 2 (H2) -- Secondary keyword in heading
6. Core Section 3 (H2) -- Related keyword in heading
7. Practical Application (H2) -- How-to element for featured snippet potential
8. Common Mistakes/FAQ (H2) -- Targets People Also Ask queries
9. Conclusion -- Summary + next step/CTA
```

### Tutorial / How-To

Best for: step-by-step guides, walkthroughs, implementation guides.

```
1. What You Will Build/Learn -- Outcome stated up front
2. Prerequisites -- What the reader needs before starting
3. Step 1 -- First action with expected result
4. Step 2 -- Next action, building on Step 1
5. Step N -- Continue until complete
6. Verification -- How to confirm it worked
7. Troubleshooting -- Common failure modes and fixes
8. Next Steps -- Where to go from here
```

---

## Section Mapping

Once the throughline is locked and the template is selected, map surviving material to sections.

### The Mapping Process

1. **Assign each starred item to a section.** Every starred idea must land somewhere. If a starred idea does not fit any section, either the structure is wrong or the triage needs revisiting.

2. **Assign arrow items that earn their place.** Only place arrow material in a section if it directly supports a starred item in that section or fills a necessary gap.

3. **Identify gaps.** After mapping, check each section. Does it have enough material to stand on its own? Sections with only arrow material and no starred material are structurally weak -- consider merging or cutting them.

4. **Note transitions.** Between each section pair, note the logical connection. If two adjacent sections have no natural transition, the structure may need reordering.

5. **Flag research needs.** Mark any section where the material is thin or claims lack evidence. These become explicit items in the "Gaps to Fill" section of the blueprint.

### Think in Blocks, Not Sentences

At this stage, you are working with ideas and evidence, not prose. A section mapping entry looks like:

```
### Section: Evidence Block 1
Purpose: Demonstrate that X leads to Y
Mapped material:
  - [STAR] The anecdote about Team Alpha's migration (Madman cluster 3)
  - [ARROW] The benchmark data from the 2024 survey (Madman item 17)
Gap: Need a second concrete example to avoid over-reliance on one case
Transition to next: From "this works in practice" to "but what about objections"
```

This level of detail gives the Carpenter a clear spec to build from. Ambiguity at the Architect stage becomes structural problems at the Carpenter stage.
