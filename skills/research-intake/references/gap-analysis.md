# Gap Analysis

This reference details how to identify gaps in a research corpus, present them to the human for steering, investigate selected gaps, and capture findings for vault storage.

---

## Gap Identification Categories

After building the knowledge map, scan the corpus for gaps in each of the following categories:

### 1. Topics Mentioned but Not Developed

A topic appears in the corpus -- referenced in a claim, listed in a connection, or named in a heading -- but has no substantive coverage. The corpus acknowledges the topic exists without explaining, arguing, or providing evidence about it.

**Signal:** Topic depth rated as "surface" in the knowledge map, or topic appears only in connection mappings without its own coverage.

### 2. Claims Without Evidence

A claim is stated in the corpus but lacks supporting data, citations, examples, or reasoning. The claim may be correct, but the corpus does not make the case.

**Signal:** Evidence strength rated as "weak" in the knowledge map. The claim exists as assertion only.

### 3. Contradictions Between Sources

Two or more files in the corpus make opposing claims about the same topic without resolution. The contradiction may be genuine (the sources disagree) or apparent (the sources address different aspects that appear to conflict).

**Signal:** Contradictions surfaced during knowledge map synthesis. Both claims exist without a file that resolves or addresses the tension.

### 4. Missing Perspectives or Counterarguments

The corpus presents a position without engaging opposing views. The coverage is one-sided, which weakens the argument and leaves the content vulnerable to reader objections.

**Signal:** Key claims exist without corresponding counterarguments. No file in the corpus addresses the strongest objection to the main thesis.

### 5. Adjacent Topics That Would Strengthen Coverage

Topics not present in the corpus that would meaningfully strengthen the content if included. These are topics the reader would expect to see or that would provide necessary context for existing claims.

**Signal:** Connection mapping reveals dependencies on topics not covered. Reader questions (anticipated) point to areas the corpus does not address.

### 6. Outdated Information

Sources or claims in the corpus reference data, statistics, or conditions that may no longer be current. The passage of time has potentially invalidated or weakened the evidence.

**Signal:** Source dates are more than 2 years old for fast-moving topics, or claims reference specific data points without dates.

---

## Gap Presentation

Present identified gaps to the human using AskUserQuestion. Format the presentation as a numbered multi-select list grouped by category.

### Presentation Format

```markdown
I identified the following gaps in your research corpus. Which would you like me to investigate?

**Topics mentioned but not developed:**
1. [Topic X] -- mentioned in [file1.md] but no substantive coverage
2. [Topic Y] -- referenced as a connection to [Topic A] but unexplored

**Claims without evidence:**
3. [Claim Z] -- asserted in [file2.md] without supporting data
4. [Claim W] -- stated in [file3.md], needs citation or example

**Missing perspectives:**
5. No counterargument to [main thesis] found in corpus
6. [Stakeholder group] perspective absent from coverage

**Adjacent topics:**
7. [Adjacent topic] would provide necessary context for [Claim 1]

Select by number (e.g., "1, 3, 5") or say "all" or "none."
```

Do not investigate any gaps until the human responds with their selection.

---

## Gap Investigation

For each gap the human selects, propose 3 specific research directions plus a skip option.

### Investigation Options Format

```markdown
For gap [N]: [gap description]

I can investigate via:
A) [Specific research direction 1] -- [what this would cover]
B) [Specific research direction 2] -- [what this would cover]
C) [Specific research direction 3] -- [what this would cover]
D) Skip this gap for now

Which direction?
```

### Research Execution

For the selected direction:

1. **Search and gather.** Use web search to find relevant sources. Prioritize authoritative sources: peer-reviewed research, recognized experts, reputable publications, official documentation.

2. **Synthesize findings.** Do not dump raw search results. Synthesize what was found into a coherent summary with:
   - Key findings relevant to the gap
   - Sources consulted (with URLs and dates)
   - How the findings connect to existing corpus material
   - Any new gaps or questions surfaced by the research

3. **Present for validation.** Deliver the synthesized findings to the human. The human confirms accuracy, relevance, and whether the gap is adequately filled.

4. **Iterate if needed.** If the human says the gap is not adequately filled, propose 2 follow-up directions. Do not repeat the same search with different phrasing.

---

## Vault Capture

After gap-filling research is validated, offer to capture findings as structured notes in the vault.

### Capture Offer Format

```markdown
Research findings are validated. Would you like me to save these to your vault?

I would create the following notes:
1. [Proposed filename] -- [what it captures]
2. [Proposed filename] -- [what it captures]

Save location: [vault path from session setup]

Proceed with capture? (yes / no / modify filenames)
```

### Vault Note Format

Each captured note follows this structure:

```markdown
---
type: research-source
domain: [domain topic from knowledge map]
date_captured: [ISO 8601 date, e.g., 2026-02-08]
source_url: [URL if applicable]
source_author: [author if known]
gap_filled: [description of the gap this research addresses]
tags:
  - [topic tag 1]
  - [topic tag 2]
---

# [Source or Finding Title]

**Author:** [author name or "synthesized from multiple sources"]
**URL:** [url or "N/A"]
**Date accessed:** [date]

## Key Claims
- [claim 1]
- [claim 2]
- [claim 3]

## Evidence and Data
[Supporting data, statistics, or examples found during research]

## Connection to Existing Research
- Relates to: [existing vault note or topic from knowledge map]
- Supports: [existing claim in corpus]
- Contradicts: [existing claim, if applicable]
- Fills gap: [original gap description]

## Open Questions
- [Any questions raised by this research that remain unanswered]
```

### Filename Conventions

- Use lowercase with hyphens: `api-rate-limiting-research.md`
- Prefix with domain when the vault covers multiple domains: `fintech-trust-deficit.md`
- Do not nest in subdirectories unless the vault already uses a folder structure -- match the existing convention

---

## Handoff

After intake is complete, the knowledge map plus any gap-fill notes are ready for:

- **Content-strategist:** If the goal is to plan multiple articles from the research corpus
- **Madman:** If the goal is to write a single article and the research provides the seed material

State the available next steps to the human and let them choose the path forward.
