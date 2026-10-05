# Pass 1: AI Voice Detection

AI-generated text follows predictable patterns. This pass identifies those patterns so the human can decide which instances to rewrite with authentic voice. Not every flagged instance is wrong -- some are false positives. The goal is detection, not automatic removal.

Run this pass first because it is the broadest scan. Many AI voice patterns overlap with Strunk & White violations (filler adverbs are both AI tells and needless words), so catching them here prevents duplicate flagging in later passes.

---

## Pattern Categories

### Filler Transitions

These transitions add no information. They signal that the AI is bridging between ideas without a real logical connection. Flag every instance.

- "It's worth noting that..."
- "It's important to understand that..."
- "Let's dive into..."
- "Let's explore..."
- "When it comes to..."
- "In order to..."
- "At the end of the day..."
- "Moving on to..."
- "With that said..."
- "That being said..."
- "Having said that..."
- "This brings us to..."

**Severity:** Must-fix. These phrases almost never belong in polished prose. Replace each with either a direct statement or nothing at all.

### Generic Openings

These openings are AI defaults when the model has no specific hook. They signal vague, context-free writing.

- "In today's [fast-paced/digital/modern] [world/landscape/era]..."
- "In the realm of..."
- "In the world of..."
- "[Topic] is a [critical/important/essential] [aspect/component/element]..."
- "[Topic] has become increasingly..."
- "When we think about [topic]..."
- "It's no secret that..."
- "As we all know..."

**Severity:** Must-fix. Every opening should be specific to the actual content. Replace with a concrete claim, a data point, a story, or a direct statement.

### Hedge Words and Weasel Phrases

These phrases weaken claims without adding nuance. They are AI safety behaviors leaking into prose.

- "It can potentially..."
- "This could possibly..."
- "Some experts suggest..."
- "It is generally believed..."
- "In many cases..."
- "It's widely recognized..."
- "For the most part..."
- "To a certain extent..."
- "It's safe to say..."

**Severity:** Review-and-decide. Some hedging is appropriate when the claim genuinely has uncertainty. Flag all instances so the human can judge which hedges are warranted and which are throat-clearing.

### Symmetrical Paragraph Structure

AI tends to produce paragraphs that mirror each other in structure. This creates a monotonous rhythm that readers notice subconsciously even when they cannot name the problem.

**Detection criteria -- flag when 3+ consecutive paragraphs exhibit:**

- Same opening structure (e.g., all start with a gerund phrase, all start with "The [noun]...")
- Same length within 10% of each other (e.g., three paragraphs of 85, 90, and 88 words)
- Same internal structure (e.g., all follow the pattern: claim, example, conclusion)

**Severity:** Review-and-decide. Some structural similarity is fine. Three or more consecutive paragraphs with the same shape is a pattern that should be broken. The human decides where to vary the rhythm.

### Filler Adverbs

These adverbs add emphasis without adding meaning. They are verbal tics in AI-generated prose.

- "Truly"
- "Really"
- "Very"
- "Actually"
- "Basically"
- "Essentially"
- "Literally"
- "Obviously"
- "Clearly"
- "Certainly"
- "Definitely"
- "Significantly"
- "Incredibly"

**Detection rule:** Flag only when the adverb adds no meaning. "The server was literally on fire" in a story about a data center fire is fine. "This is literally the best approach" is filler.

**Severity:** Must-fix (when they add no meaning). Remove the adverb and check if the sentence loses anything. If it does not, the adverb was filler.

### Over-Qualification

AI models hedge by adding qualifications before making any statement. This produces prose that constantly apologizes for itself.

- "While there are many approaches, one option might be..."
- "Although results may vary, it's possible that..."
- "This is just one perspective, but..."

**Detection rule:** Flag sentences where the qualification is longer than or equal in length to the actual claim. Flag sentences that qualify a claim the author clearly believes to be true.

**Severity:** Review-and-decide. Some qualification is honest writing. Excessive qualification is AI safety behavior and should be trimmed or removed.

---

## How to Run This Pass

1. Read the full draft once without flagging anything. Get a sense of the overall voice.
2. Scan for filler transitions. Mark each instance with its location (section and paragraph number).
3. Scan for generic openings. Pay special attention to the article opening, section openings, and paragraph openings.
4. Scan for hedge words and weasel phrases. Note whether each instance is warranted hedging or filler.
5. Check paragraph structure. Compare consecutive paragraphs for symmetrical patterns.
6. Scan for filler adverbs. Test each by removing it and checking for meaning loss.
7. Scan for over-qualification. Flag sentences where the qualification outweighs the claim.

---

## AI Voice Detection Report Format

```
### Pass 1: AI Voice Detection

**Risk Level:** [Low / Medium / High]
(Low = 0-3 findings, Medium = 4-8 findings, High = 9+ findings)

**Filler Transitions Found:** [count]
- [Location]: "[exact phrase]"
- [Location]: "[exact phrase]"

**Generic Openings Found:** [count]
- [Location]: "[exact phrase]"

**Hedge Words / Weasel Phrases Found:** [count]
- [Location]: "[exact phrase]" -- [warranted / filler]

**Symmetrical Paragraph Patterns Found:** [count]
- [Location]: [description of the pattern -- e.g., "Paragraphs 3-5 in Section 2 all open with gerund phrases and are within 10% word count"]

**Filler Adverbs Found:** [count]
- [Location]: "[word]" -- [adds meaning / filler]

**Over-Qualification Found:** [count]
- [Location]: "[exact phrase]"
```
