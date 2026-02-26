# Pass 3: Readability Scoring

This pass produces quantitative metrics about the draft's readability. Numbers do not replace editorial judgment, but they catch problems that are invisible when you are deep in the text -- sentences that ballooned to 60 words, paragraphs that stretch to 10 sentences, or a reading level that drifted far from the target audience.

Run this pass after Strunk & White. The composition fixes from Pass 2 (removing needless words, converting passive voice) will change sentence lengths and word counts. Measuring readability before those fixes would produce inaccurate numbers.

---

## Metrics Table

| Metric | Target (general) | Target (technical) | How to Calculate |
|--------|------------------|-------------------|-----------------|
| Flesch-Kincaid Grade | 7-9 | 10-13 | Sentence length + syllable count |
| Average sentence length | 15-20 words | 18-25 words | Total words / total sentences |
| Sentence length variation | Mix of 5-35 word sentences | Mix of 8-40 word sentences | Standard deviation of sentence word counts |
| Average paragraph length | 2-4 sentences | 3-5 sentences | Total sentences / total paragraphs |
| Longest sentence | Flag if >40 words | Flag if >50 words | Max word count among all sentences |
| Longest paragraph | Flag if >6 sentences | Flag if >8 sentences | Max sentence count among all paragraphs |

**Audience note:** Use "general" targets for blog posts, marketing content, essays, and non-specialist writing. Use "technical" targets for developer documentation, whitepapers, academic writing, and domain-expert audiences. The Architect blueprint should specify the target audience. If it does not, default to general.

---

## Metric Details

### Flesch-Kincaid Grade Level

**Formula:**
0.39 * (total words / total sentences) + 11.8 * (total syllables / total words) - 15.59

**Interpretation:**
- Grade 5-6: Easy reading. Suitable for broad consumer audiences.
- Grade 7-9: Standard. Suitable for general non-fiction, blogs, journalism.
- Grade 10-13: Moderately difficult. Suitable for technical and professional audiences.
- Grade 14+: Difficult. Typical of academic papers and legal documents.

**What to do when the score is off-target:**
- Too high: Look for long sentences and multi-syllable words that have simpler alternatives. Do not dumb down technical terms -- reduce sentence complexity instead.
- Too low: The writing may be choppy or oversimplified. Check whether the audience actually needs more depth.

### Average Sentence Length

**How to calculate:** Count total words in the draft. Count total sentences (period, question mark, exclamation mark, colon introducing a list, or semicolon each count as a sentence boundary). Divide words by sentences.

**What the number means:**
- Under 12 words average: Choppy, telegraphic. May feel like a list of facts.
- 15-20 words average (general): Natural reading rhythm.
- 18-25 words average (technical): Allows for necessary qualifications and precision.
- Over 30 words average: Dense. Readers will lose the thread of individual sentences.

### Sentence Length Variation

**How to calculate:** Compute the word count for every sentence. Calculate the standard deviation. Also note the minimum and maximum sentence lengths.

**What to look for:**
- Low standard deviation (under 5): The sentences are all roughly the same length. This creates a monotonous rhythm even when the content is strong. Mix short punchy sentences with longer explanatory ones.
- High standard deviation (over 15): There may be a few extremely long sentences pulling the average. Check the longest sentences for potential splitting.
- No sentences under 8 words: The draft lacks short declarative statements. Short sentences create emphasis and give the reader breathing room.

### Average Paragraph Length

**How to calculate:** Count total sentences. Count total paragraphs (separated by blank lines or explicit paragraph breaks). Divide sentences by paragraphs.

**What the number means:**
- 1 sentence average: Not paragraphs, just a list of sentences. Needs grouping.
- 2-4 sentences (general): Good. Each paragraph makes one point with support.
- 3-5 sentences (technical): Allows for setup, explanation, and example.
- Over 6 sentences: Paragraphs are doing too much work. Look for natural split points.

### Longest Sentence

**Detection rule:** Find the sentence with the highest word count. Flag if it exceeds the threshold for the content type (40 words for general, 50 for technical).

**What to do:** Long sentences are not automatically bad. Check whether the sentence is:
- A run-on that combines multiple ideas (split it)
- A well-structured complex sentence with clear subordination (probably fine)
- A list embedded in a sentence (convert to a bullet list)

### Longest Paragraph

**Detection rule:** Find the paragraph with the highest sentence count. Flag if it exceeds the threshold (6 sentences for general, 8 for technical).

**What to do:** Long paragraphs usually contain more than one idea. Find the point where the topic shifts and split there.

---

## How to Run This Pass

1. Count total words, sentences, and paragraphs in the draft.
2. Calculate Flesch-Kincaid grade level and compare against the target.
3. Calculate average sentence length and compare against the target.
4. Calculate sentence length variation (standard deviation, min, max).
5. Calculate average paragraph length and compare against the target.
6. Identify the longest sentence and flag if over threshold.
7. Identify the longest paragraph and flag if over threshold.
8. Note any sections that deviate significantly from the overall averages.

---

## Readability Report Format

```
### Pass 3: Readability Scoring

**Content Type:** [General / Technical]
**Word Count:** [n]

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| Flesch-Kincaid Grade | [n] | [range] | [On target / Above / Below] |
| Avg. Sentence Length | [n] words | [range] | [On target / Above / Below] |
| Sentence Length Variation | SD [n], range [min]-[max] | Mix of short and long | [Good variation / Too uniform / Too erratic] |
| Avg. Paragraph Length | [n] sentences | [range] | [On target / Above / Below] |
| Longest Sentence | [n] words ([location]) | <[threshold] | [OK / Flag] |
| Longest Paragraph | [n] sentences ([location]) | <[threshold] | [OK / Flag] |

**Flagged Sentences (over threshold):**
- [Location]: [n] words -- "[first 10 words]..."

**Flagged Paragraphs (over threshold):**
- [Location]: [n] sentences -- consider splitting at "[topic shift point]"

**Section-Level Deviations:**
- [Section]: Avg sentence length [n] vs. overall [n] -- [note]
```
