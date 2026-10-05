# Research Intake Process

This reference details the step-by-step process for traversing source material, indexing content, and building a knowledge map.

---

## Session Setup

Before traversal begins, establish the session context using AskUserQuestion. The question determines the source material location and the working directory for any output files.

### Setup Questions

Ask one of the following based on context:

1. **Vault path known:** "I see you mentioned [path]. Should I traverse this location for source material?"
2. **No path provided:** "Where is your source material located? Provide a vault path, folder path, or tell me you will paste content directly."
3. **Multiple sources:** "I can ingest material from multiple locations. What is the primary path, and are there additional folders or URLs to include?"

Store the confirmed path as the session vault path. All vault capture operations later in the workflow will use this path.

---

## Source Material Types

The intake process handles all of the following without requiring the user to specify which types are present:

| Source Type | How to Handle |
|-------------|---------------|
| Obsidian vault (.md files with frontmatter, wikilinks) | Read all files recursively. Parse YAML frontmatter for metadata. Follow wikilinks to map connections. |
| Plain markdown notes (.md without Obsidian conventions) | Read all files recursively. Use headings and content to infer topics. |
| Reference documents (.md, .txt) | Read full content. Extract claims, sources cited, and topic coverage. |
| Prior research summaries | Read and index as high-value sources. Flag depth of coverage per topic. |
| Web URLs (provided by human) | Fetch and read content. Extract key claims, author, date, and relevance. |
| PDF content (pasted or referenced) | Process provided text. Note that direct PDF reading depends on tooling availability. |

### File Traversal Rules

1. **Read everything.** Do not skip files based on filename, folder name, or file size. A file named "scratch.md" may contain key insights. A file in a folder named "archive" may contain foundational research.
2. **Respect depth.** Traverse all nested folders to arbitrary depth. Do not stop at a maximum folder depth.
3. **Note file metadata.** Record filename, path, modification date if available, and file size as context signals. Recently modified files may indicate active research areas.
4. **Handle encoding gracefully.** If a file cannot be read, log the path and continue. Do not halt traversal on read errors.

---

## Indexing Process

For each file read during traversal, extract and record the following:

### Per-File Index Entry

```markdown
### [Filename]
- **Path:** [full path]
- **Topics:** [comma-separated topic list]
- **Depth:** [deep / moderate / surface]
- **Key claims:**
  - [claim 1]
  - [claim 2]
- **Sources cited:** [any external sources referenced in this file]
- **Connections:** [wikilinks, explicit references to other files, or thematic connections]
- **Notes:** [anything notable -- contradictions, strong passages, gaps within the file]
```

### Depth Assessment Criteria

| Depth Level | Criteria |
|-------------|----------|
| Deep | Topic is the primary focus. Multiple claims with supporting evidence. Detailed treatment with nuance. |
| Moderate | Topic receives meaningful coverage but is not the primary focus. Some claims with partial evidence. |
| Surface | Topic is mentioned or touched on briefly. Few or no supporting claims. Quick reference without development. |

---

## Building the Knowledge Map

After all files are indexed, synthesize the per-file entries into a unified knowledge map. The knowledge map is the primary output of the intake process.

### Synthesis Steps

1. **Aggregate topics.** Merge topic mentions across all files. For each topic, record the highest depth level found and list all files that cover it.

2. **Extract key claims.** Pull the strongest claims from across all files. For each claim, note which files support it, whether evidence is provided, and whether any files contradict it.

3. **Catalog sources.** List all external sources cited across the corpus. Note what each source covers and which files reference it.

4. **Map connections.** Identify relationships between topics:
   - Explicit connections (wikilinks, cross-references, citations)
   - Thematic connections (topics that appear together in multiple files)
   - Causal or logical connections (topic A depends on or leads to topic B)
   - Contradictions (files that make opposing claims about the same topic)

5. **Identify gaps.** Surface areas where the corpus is thin or missing. See `gap-analysis.md` for the full gap identification methodology.

### Knowledge Map Output Format

```markdown
# Knowledge Map: [Domain]

## Domain Summary
[2-3 sentences describing the overall scope and character of the research corpus]

## Topics Covered
- [Topic A]: deep -- covered in [file1.md], [file2.md], [file3.md]
- [Topic B]: moderate -- covered in [file2.md], [file4.md]
- [Topic C]: surface -- mentioned in [file1.md]

## Key Claims and Arguments
- [Claim 1] -- supported by [file1.md], [file3.md]; evidence strength: strong
- [Claim 2] -- supported by [file2.md]; evidence strength: moderate
- [Claim 3] -- asserted in [file4.md]; evidence strength: weak (no supporting data)
- [Claim 4] -- contradicted between [file1.md] and [file5.md]

## Existing Sources
- [Source 1]: covers [topics], cited in [file1.md], [file2.md]
- [Source 2]: covers [topics], cited in [file3.md]

## Connections Identified
- [Topic A] relates to [Topic C] through [mechanism]
- [Topic B] depends on [Topic D] (which is a gap -- see below)
- [Claim 2] contradicts [Claim 4] on [specific point]
- [File1.md] and [File3.md] approach [Topic A] from complementary angles

## Gaps Identified
1. [Gap description] -- category: [see gap-analysis.md for categories]
2. [Gap description] -- category: [see gap-analysis.md for categories]

## Corpus Statistics
- Total files indexed: [n]
- Topics identified: [n]
- Key claims extracted: [n]
- External sources cataloged: [n]
- Gaps identified: [n]
```

---

## Completion Check

Before delivering the knowledge map, verify:

- [ ] All files in the provided path were read (or logged as unreadable)
- [ ] Every file has a per-file index entry
- [ ] Topics are aggregated with depth assessments
- [ ] Key claims include evidence strength ratings
- [ ] Connections include both explicit and thematic links
- [ ] Contradictions between sources are surfaced, not hidden
- [ ] Gaps are identified and categorized
- [ ] Corpus statistics are accurate
- [ ] The domain summary accurately reflects the corpus scope
