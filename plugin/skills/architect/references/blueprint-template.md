# Architect Blueprint Template

This reference defines the output format for the Architect phase. The blueprint is the spec that the Carpenter builds from. Ambiguity here becomes problems later.

---

## Standard Blueprint Format

```markdown
# Architect Blueprint: [Topic]

## Thesis
[Single sentence core argument]

## Target Audience
[Who, what they know, what they need]

## Structure

### [Section Title]
**Purpose:** [What this section accomplishes]
**Key points:**
- [Point 1 -- from Madman material]
- [Point 2]
**Evidence:** [What supports these points]
**Transition to next:** [How this connects forward]

### [Next Section Title]
...

## Gaps to Fill
[Missing evidence, examples needed, research required]

## SEO Notes (if applicable)
**Primary keyword:** [target]
**Secondary keywords:** [list]
**Heading keyword mapping:** [which keywords map to which H2/H3]
**Target word count:** [based on SERP analysis]
```

---

## Blueprint by Content Type

The standard format above applies to all content types. The following sections show how the **Structure** portion adapts to each template.

### Technical / Nonfiction Blueprint

```markdown
## Structure

### Hook
**Purpose:** Create immediate tension or curiosity
**Key points:**
- [Concrete opening scene, statistic, or provocative question]
**Evidence:** [Source or experience that grounds the hook]
**Transition to next:** Opens the question that Context will answer

### Context
**Purpose:** Give the reader enough background to follow the argument
**Key points:**
- [Key concept 1 the reader needs]
- [Key concept 2]
**Evidence:** [Brief grounding -- not a literature review]
**Transition to next:** "Given this context, here is what I argue"

### Thesis
**Purpose:** State the throughline explicitly
**Key points:**
- [The throughline sentence]
- [Optional: scope or boundary statement]
**Evidence:** [Preview of what supports this]
**Transition to next:** "Here is why"

### Evidence Block 1
**Purpose:** Present the strongest supporting argument
**Key points:**
- [Primary argument]
- [Supporting detail]
**Evidence:** [Data, example, case study]
**Transition to next:** Connect to second line of evidence

### Evidence Block 2
**Purpose:** Present the second supporting argument
**Key points:**
- [Secondary argument]
- [Supporting detail]
**Evidence:** [Data, example, case study]
**Transition to next:** Acknowledge the strongest objection

### Counterargument
**Purpose:** Address the best objection honestly
**Key points:**
- [The strongest counterargument, stated fairly]
- [Why the thesis holds despite this objection]
**Evidence:** [What supports the rebuttal]
**Transition to next:** Move from defense to implications

### Implications
**Purpose:** Show what follows if the thesis is true
**Key points:**
- [Practical consequence 1]
- [Practical consequence 2]
**Evidence:** [What makes these implications credible]
**Transition to next:** Return to the opening

### Close
**Purpose:** Return to the hook, transformed by the argument
**Key points:**
- [Callback to opening scene/question]
- [How the argument changes the reader's understanding]
**Evidence:** [None needed -- this is synthesis]
**Transition to next:** N/A
```

### SEO Long-Form Blueprint

```markdown
## Structure

### Title (H1)
**Purpose:** Contain primary keyword, signal topic clearly
**Key points:**
- [Exact title with primary keyword placement]
**Evidence:** N/A
**Transition to next:** Title leads into introduction

### Introduction
**Purpose:** Hook the reader, state thesis, preview content
**Key points:**
- [Hook sentence]
- [Thesis/value proposition]
- [What the reader will learn -- 2-3 bullets]
**Evidence:** [Credibility signal if available]
**Transition to next:** "Let us start with the basics" or equivalent

### Background / Definition (H2)
**Purpose:** Establish foundational concept, capture definition-seeking searches
**Key points:**
- [Core definition or concept]
- [Why this matters to the reader]
**Evidence:** [Authoritative source if needed]
**Target keyword:** [Secondary keyword for this heading]
**Transition to next:** From "what it is" to "how it works"

### Core Section 1 (H2)
**Purpose:** [Primary subtopic]
**Key points:**
- [Point 1]
- [Point 2]
**Evidence:** [Supporting data or examples]
**Target keyword:** [Keyword variation for this heading]
**Transition to next:** [Connection to next subtopic]

### Core Section 2 (H2)
**Purpose:** [Second subtopic]
**Key points:**
- [Point 1]
- [Point 2]
**Evidence:** [Supporting data or examples]
**Target keyword:** [Secondary keyword for this heading]
**Transition to next:** [Connection to next subtopic]

### Core Section 3 (H2)
**Purpose:** [Third subtopic]
**Key points:**
- [Point 1]
- [Point 2]
**Evidence:** [Supporting data or examples]
**Target keyword:** [Related keyword for this heading]
**Transition to next:** Move from concepts to application

### Practical Application (H2)
**Purpose:** Actionable steps for featured snippet potential
**Key points:**
- [Step or action 1]
- [Step or action 2]
**Evidence:** [Examples or demonstrations]
**Target keyword:** [How-to keyword variation]
**Transition to next:** Anticipate mistakes

### Common Mistakes / FAQ (H2)
**Purpose:** Target People Also Ask queries, address objections
**Key points:**
- [Mistake or question 1]
- [Mistake or question 2]
**Evidence:** [Why these are mistakes, correct approaches]
**Target keyword:** [FAQ-style keyword]
**Transition to next:** Wrap up

### Conclusion
**Purpose:** Summarize, provide next step or CTA
**Key points:**
- [Key takeaway restated]
- [Specific next action for the reader]
**Evidence:** N/A
**Transition to next:** N/A

## SEO Notes
**Primary keyword:** [target]
**Secondary keywords:** [list]
**Heading keyword mapping:**
- H1: [primary keyword]
- H2 Background: [secondary keyword]
- H2 Core 1: [keyword variation]
- H2 Core 2: [secondary keyword]
- H2 Core 3: [related keyword]
- H2 Practical: [how-to keyword]
- H2 FAQ: [FAQ keyword]
**Target word count:** [based on SERP analysis of top 5 results]
**Internal linking opportunities:** [related content to link to]
```

### Tutorial / How-To Blueprint

```markdown
## Structure

### What You Will Build / Learn
**Purpose:** State the outcome before the process
**Key points:**
- [Concrete deliverable or capability the reader gains]
- [Why this matters]
**Evidence:** [Screenshot, demo, or example of the finished result]
**Transition to next:** "Before we start, you will need..."

### Prerequisites
**Purpose:** Prevent frustration by setting expectations up front
**Key points:**
- [Tool or knowledge requirement 1]
- [Tool or knowledge requirement 2]
- [Version numbers where relevant]
**Evidence:** [Links to installation guides if needed]
**Transition to next:** "With that in place, let us begin"

### Step 1: [Action Name]
**Purpose:** [What this step accomplishes]
**Key points:**
- [Specific action to take]
- [Expected result after this step]
**Evidence:** [Code sample, screenshot, or command output]
**Transition to next:** "Now that X is done, we can Y"

### Step 2: [Action Name]
**Purpose:** [What this step accomplishes]
**Key points:**
- [Specific action to take]
- [Expected result after this step]
**Evidence:** [Code sample, screenshot, or command output]
**Transition to next:** [Connection to next step]

### Step N: [Final Action]
**Purpose:** [What the last step accomplishes]
**Key points:**
- [Specific action to take]
- [Expected result -- the completed thing]
**Evidence:** [Final code sample or screenshot]
**Transition to next:** "Let us verify this works"

### Verification
**Purpose:** Confirm the tutorial produced the expected result
**Key points:**
- [How to test that it worked]
- [What correct output looks like]
**Evidence:** [Expected output, screenshot, or test command]
**Transition to next:** "If something went wrong..."

### Troubleshooting
**Purpose:** Address common failure modes
**Key points:**
- [Problem 1] -- [Cause] -- [Fix]
- [Problem 2] -- [Cause] -- [Fix]
**Evidence:** [Error messages the reader might see]
**Transition to next:** "With this working, here is where to go next"

### Next Steps
**Purpose:** Point the reader forward
**Key points:**
- [Natural extension 1]
- [Natural extension 2]
**Evidence:** [Links to follow-up resources]
**Transition to next:** N/A
```

---

## Blueprint Checklist

Before presenting the blueprint to the human for approval, verify:

- [ ] Thesis is a single arguable sentence
- [ ] Target audience is specific enough to make content decisions
- [ ] Every section has a stated purpose
- [ ] Every section has at least one key point mapped from Madman material
- [ ] Transitions between adjacent sections are logical
- [ ] Gaps are identified explicitly, not papered over
- [ ] No section relies solely on arrow-level material with no starred support
- [ ] SEO notes are included if the piece has search intent
- [ ] The structure serves the reader, not the writer's attachment to material
