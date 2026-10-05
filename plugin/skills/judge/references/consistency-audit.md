# Pass 4: Consistency Audit

This pass checks whether the draft is internally consistent. A piece can have clean sentences, good readability, and zero AI voice tells -- and still feel off because it calls the same thing by three different names, shifts between formal and casual tone, or uses two different date formats.

Run this pass after Readability Scoring. By this point the prose is clean at the sentence level (Passes 1-2) and the metrics are known (Pass 3). The Consistency Audit looks at cross-document patterns that only emerge when you compare sections against each other.

---

## Check Categories

### Terminology Consistency

**Same concept, same term.** If you call it "deployment pipeline" in Section 1, do not call it "release process" in Section 3 and "CI/CD workflow" in Section 5 unless you have defined these as distinct concepts.

**Detection method:**
- Build a terminology list from the draft. For each technical term, domain-specific phrase, or product name, note every variant used.
- Flag any concept that appears under two or more names without explicit definition of the distinction.
- Check acronyms: every acronym must be expanded on first use. Flag acronyms that appear unexpanded or that are expanded more than once.
- Check capitalization: proper nouns and product names must be capitalized consistently throughout.

**Severity:** Must-fix for same-concept-different-name. Review-and-decide for capitalization edge cases (e.g., "internet" vs. "Internet").

### Tone Consistency

**The tone set in the opening must carry through to the end.** Readers notice when a piece starts conversational and turns academic in the middle, or opens formally and drops into slang.

**Detection method:**
- Compare the tone of the opening two paragraphs against the Architect blueprint's tone specification (if provided).
- Check each section's opening paragraph against the overall tone. Flag sections that shift register.
- Look for informal markers in formal pieces: contractions, slang, rhetorical questions, sentence fragments used for emphasis.
- Look for formal markers in informal pieces: passive voice clusters, Latin phrases, jargon without explanation, overly complex sentence structures.
- Check point of view: if the piece uses "you" (second person), it should use "you" throughout. If it uses "we", that should be consistent. Flag shifts between "you", "we", "one", and "the reader".

**Severity:** Review-and-decide. Tone is subjective. The human decides whether a shift is a problem or a deliberate choice.

### Formatting Consistency

**Every structural element should follow the same pattern throughout the piece.**

**Detection method:**

- **Lists:** Are all lists the same style? If one list uses bullets, all lists should use bullets (unless there is a clear reason for numbered lists in some places). Check whether list items are full sentences or fragments -- they should be consistent within each list.
- **Headings:** Are all headings the same case? Title Case, Sentence case, or ALL CAPS -- pick one and apply it everywhere. Check heading hierarchy: H2 sections should not contain H4 subsections without an H3 in between.
- **Code samples:** If the piece includes code, check that all samples use the same formatting conventions: same indentation, same comment style, same language tag on fenced code blocks.
- **Bold and italic:** Are they used for consistent purposes? Bold for key terms and italic for emphasis is a common convention. Flag uses that break the established pattern.
- **Links:** Are links formatted consistently? Inline links vs. reference links, bare URLs vs. anchor text.

**Severity:** Must-fix for broken heading hierarchy and mixed list styles within the same section. Review-and-decide for cross-section formatting variations that may be intentional.

### Number and Date Formatting

**Pick a convention and apply it everywhere.**

**Detection method:**

- **Digit threshold:** Common convention is to spell out numbers one through nine and use digits for 10 and above. Whatever the piece uses, it should be consistent. Flag mixed usage.
- **Date format:** "January 5, 2025" vs. "Jan 5, 2025" vs. "2025-01-05" vs. "1/5/2025" -- the piece should use one format throughout. Flag mixed formats.
- **Percentage format:** "15%" vs. "15 percent" vs. "fifteen percent" -- one format throughout.
- **Currency format:** "$1,000" vs. "$1000" vs. "1,000 dollars" -- one format throughout.
- **Measurement format:** "5 km" vs. "5km" vs. "five kilometers" -- one format throughout. Check spacing between number and unit.

**Severity:** Must-fix when the same type of number or date appears in two different formats within the piece. Review-and-decide for edge cases (e.g., "one" in narrative prose vs. "1" in a technical comparison).

---

## How to Run This Pass

1. Build a terminology index: list every technical term, product name, acronym, and domain phrase with all variants and locations.
2. Check each term for consistency. Flag terms with multiple variants.
3. Verify all acronyms are expanded on first use and only on first use.
4. Compare the tone of each section opening against the blueprint's tone specification and the article's opening.
5. Check point of view consistency across the full draft.
6. Audit list formatting, heading hierarchy, code sample formatting, bold/italic usage, and link formatting.
7. Audit number, date, percentage, currency, and measurement formatting.

---

## Consistency Report Format

```
### Pass 4: Consistency Audit

**Terminology Issues:** [count]
- "[Term A]" vs. "[Term B]" -- same concept, used in [locations] -- recommend standardizing to "[preferred term]"
- "[Acronym]" -- not expanded on first use (first appears in [location])
- "[Acronym]" -- expanded more than once ([locations])
- "[Name]" -- capitalization inconsistency: "[variant 1]" in [location], "[variant 2]" in [location]

**Tone Issues:** [count]
- [Section]: shifts from [tone A] to [tone B] -- "[example sentence]"
- POV shift: "[you]" in [location], "[we]" in [location]

**Formatting Issues:** [count]
- Lists: [description of inconsistency and locations]
- Headings: [description of case or hierarchy issue and locations]
- Code samples: [description of formatting difference and locations]
- Bold/italic: [description of inconsistent usage and locations]

**Number/Date Formatting Issues:** [count]
- [Type]: "[format A]" in [location] vs. "[format B]" in [location]
```
