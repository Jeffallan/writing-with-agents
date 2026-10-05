# Pass 2: Strunk & White Composition Rules

This pass applies core composition principles from *The Elements of Style* by William Strunk Jr. and E.B. White. These rules are not absolute laws. They are strong defaults that produce clearer prose when followed and should be broken only with deliberate intent.

Run this pass after AI Voice Detection. Many AI voice issues (filler transitions, hedge words) will already be flagged. This pass catches structural and stylistic problems that remain.

---

## Detection Table

| Check | Detection Method | Severity |
|-------|-----------------|----------|
| Passive voice | Flag "was/were/is/are/been [past participle]" | Review -- not all are wrong |
| Needless words | Flag known phrases: "the fact that", "in order to", etc. | Must-fix (usually) |
| Negative form | Flag "not un-", "not in-", double negatives | Must-fix |
| Vague language | Flag sentences with no concrete nouns or numbers | Review |
| Loose sentence chains | Flag 3+ consecutive similar structures | Review |
| Separated modifiers | Flag modifiers >5 words from what they modify | Review |
| Weak endings | Flag sentences ending in prepositions or filler | Review |

---

## Detection Details

### Passive Voice

**Detection method:** Flag constructions using "was/were/is/are/been" followed by a past participle (e.g., "was created", "is considered", "were found", "has been established").

**Why it matters:** Passive voice hides the actor. "The report was written" does not tell you who wrote it. Active voice ("The team wrote the report") is almost always clearer.

**When passive is acceptable:**
- The actor is unknown or irrelevant: "The building was constructed in 1924."
- The action matters more than the actor: "The data was corrupted during transfer."
- Scientific or technical convention requires it.

**Severity:** Review-and-decide. Flag all instances. The human decides which to convert to active voice and which to keep.

### Needless Words

**Detection method:** Flag the following phrases and their variants:

- "the fact that" -- replace with "that" or restructure
- "in order to" -- replace with "to"
- "the reason why is that" -- replace with "because"
- "owing to the fact that" -- replace with "since" or "because"
- "in spite of the fact that" -- replace with "though" or "although"
- "call your attention to the fact that" -- replace with "remind you" or "notify you"
- "the question as to whether" -- replace with "whether"
- "there is no doubt but that" -- replace with "no doubt" or "doubtless"
- "used for [gerund] purposes" -- replace with "used to [verb]"
- "he is a man who" / "she is a woman who" -- replace with "he/she [verb]"
- "this is a [noun] that" -- replace with "this [verb]"
- "it is" / "there is" / "there are" (expletive constructions) -- restructure to lead with the real subject

**Severity:** Must-fix (usually). These phrases almost always have a shorter, clearer replacement. The rare exception is when the longer form creates a deliberate rhetorical rhythm.

### Negative Form

**Detection method:** Flag constructions that express a positive idea through negation:

- "not un-" constructions: "not unlikely" (use "likely"), "not uncommon" (use "common")
- "not in-" constructions: "not infrequent" (use "frequent"), "not insignificant" (use "significant")
- Double negatives that obscure meaning: "not without merit" (use "has merit")
- "did not remember" (use "forgot"), "did not pay attention" (use "ignored")

**Severity:** Must-fix. Negative form is almost always weaker than the direct positive statement. The only exception is deliberate litotes for rhetorical effect, which should be rare.

### Vague Language

**Detection method:** Flag sentences that contain no concrete nouns, no specific numbers, no named entities, and no sensory details. Look for clusters of abstract nouns: "situation", "approach", "aspect", "factor", "issue", "thing", "area", "level", "process".

**Examples of vague vs. concrete:**
- Vague: "The situation improved significantly."
- Concrete: "Response times dropped from 3 seconds to 400 milliseconds."
- Vague: "Various factors contributed to the issue."
- Concrete: "Three configuration errors caused the outage: a missing index, a stale cache, and a race condition in the queue consumer."

**Severity:** Review-and-decide. Some sentences serve transitional or introductory purposes where abstraction is appropriate. Flag all vague sentences so the human can decide which need specifics.

### Loose Sentence Chains

**Detection method:** Flag 3 or more consecutive sentences that follow the same grammatical structure. Common patterns:

- Subject-verb-object chains: "The team built X. The team tested Y. The team deployed Z."
- "This [verb]..." chains: "This means... This suggests... This implies..."
- Compound sentence chains: "[Clause], and [clause]. [Clause], and [clause]. [Clause], and [clause]."

**Severity:** Review-and-decide. Parallel structure is a legitimate rhetorical device when used deliberately. Accidental repetition of structure signals autopilot writing.

### Separated Modifiers

**Detection method:** Flag modifiers that are more than 5 words away from the word they modify.

**Example:**
- Separated: "The engineer who had been working on the project for three years reluctantly approved the change." (The modifier "reluctantly" is far from "approved".)
- Fixed: "The engineer reluctantly approved the change. She had spent three years on the project."

**Severity:** Review-and-decide. Long sentences with distant modifiers are not always wrong, but they risk misreading. The human decides whether clarity requires restructuring.

### Weak Endings

**Detection method:** Flag sentences that end with:

- Prepositions used as filler: "...is something we need to think about." "...is a topic worth looking into."
- Trailing qualifiers: "...in some cases." "...to a certain degree." "...more or less."
- Anticlimactic words: sentences that build toward a strong point but end on a weak word

**Why it matters:** Sentence endings carry emphasis. The last word or phrase is what the reader carries into the next sentence. Ending on filler or a preposition wastes that emphasis.

**Severity:** Review-and-decide. Not every sentence needs a power ending. But important sentences -- thesis statements, section closers, paragraph conclusions -- should end strong.

---

## How to Run This Pass

1. Scan for passive voice constructions. Mark each with its location and note whether the passive seems justified.
2. Scan for needless word phrases from the list above. Mark each with its suggested replacement.
3. Scan for negative form constructions. Mark each with the direct positive alternative.
4. Identify sentences with no concrete nouns, numbers, or named entities. Mark as vague.
5. Check for 3+ consecutive sentences with the same grammatical structure.
6. Check for modifiers separated from their targets by more than 5 words.
7. Check sentence endings, especially for key sentences (openers, closers, thesis statements).

---

## Strunk & White Report Format

```
### Pass 2: Strunk & White

**Passive Voice Instances:** [count] ([percentage] of total sentences)
- [Location]: "[sentence]" -- [justified / convert to active]

**Needless Words Found:** [count]
- [Location]: "[phrase]" -- replace with "[replacement]"

**Negative Form Found:** [count]
- [Location]: "[phrase]" -- replace with "[positive form]"

**Vague Sentences Found:** [count]
- [Location]: "[sentence]" -- needs [concrete nouns / numbers / specifics]

**Loose Sentence Chains Found:** [count]
- [Location]: [description of the repeated structure]

**Separated Modifiers Found:** [count]
- [Location]: "[modifier]" is [n] words from "[target]"

**Weak Endings Found:** [count]
- [Location]: "[sentence ending]" -- [suggestion]
```
