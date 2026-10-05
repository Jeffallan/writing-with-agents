# Vault Format Reference

This reference specifies the frontmatter templates, tagging conventions, linking conventions, and Obsidian compatibility requirements for all artifacts captured by the knowledge-harvester skill.

---

## Frontmatter Templates

Every artifact written to the vault includes YAML frontmatter. The frontmatter structure varies by artifact type.

### Research Source

```markdown
---
type: research-source
domain: [domain topic from knowledge map]
date_captured: [ISO 8601 date, e.g., 2026-02-08]
source_author: [author name, or "unknown"]
source_url: [URL, or "N/A" for offline sources]
source_date: [publication date if known, or "undated"]
related_articles:
  - [title of produced article that used this source]
tags:
  - [topic tag 1]
  - [topic tag 2]
  - [topic tag 3]
---

# [Source Title]

**Author:** [author name]
**URL:** [url]
**Published:** [date]
**Accessed:** [date this source was consulted]

## Key Claims
- [claim 1]
- [claim 2]
- [claim 3]

## Relevance
[1-2 sentences on why this source matters to the domain and how it was used]

## Used In
- [[article-title]] -- [how this source informed the article]

## Connection To
- [[related-vault-note-1]] -- [nature of the connection]
- [[related-vault-note-2]] -- [nature of the connection]
```

### Synthesis Note

```markdown
---
type: synthesis
domain: [domain topic]
date_captured: [ISO 8601 date]
confidence: [confirmed / hypothesized]
surfaced_during: [phase name -- e.g., Architect, Judge]
related_articles:
  - [article title]
tags:
  - [topic tag 1]
  - [topic tag 2]
---

# [Connection or Insight Title]

## The Connection
[Clear statement of what relates to what, and how]

## Supporting Evidence
- [evidence point 1, with source]
- [evidence point 2, with source]

## Implications
[What this connection means for the domain or for future content]

## Source Notes
- [[source-note-1]] -- [role in this connection]
- [[source-note-2]] -- [role in this connection]

## Surfaced During
[Which article and which phase revealed this connection]
```

### Domain Map

```markdown
---
type: domain-map
domain: [domain topic]
date_captured: [ISO 8601 date]
map_status: [current / superseded]
articles_derived:
  - [article title 1]
  - [article title 2]
tags:
  - [domain tag]
  - domain-map
---

# Domain Map: [Domain Name]

## Center of Gravity
[What the center represents and why it was chosen]

## Whirlybird

\```mermaid
mindmap
  root((Domain Center))
    Branch One
      Feather 1a
      Feather 1b
    Branch Two
      Feather 2a
      Feather 2b
    Branch Three
      Feather 3a
      Feather 3b
\```

## Branch Descriptions
- **Branch One:** [what this branch covers]
- **Branch Two:** [what this branch covers]
- **Branch Three:** [what this branch covers]

## Articles Derived from This Map
- [[article-1]] -- from Branch [N]
- [[article-2]] -- from Branch [N]

## Notes
[Any context about this map: why this center was chosen, what alternatives were considered, what gaps remain]
```

### Article Backlink

```markdown
---
type: article-backlink
domain: [domain topic]
date_captured: [ISO 8601 date]
article_status: [draft / published]
publication_date: [date if published, or "unpublished"]
whirlybird_source: [branch label from domain whirlybird]
tags:
  - [topic tag 1]
  - [topic tag 2]
  - article-backlink
---

# Article: [Article Title]

**Status:** [draft / published]
**Published:** [date or "not yet published"]
**Word count:** [approximate]
**Type:** [pillar / cluster / targeted / standalone]

## Source Material
This article drew from the following vault notes:
- [[source-note-1]] -- [how it was used]
- [[source-note-2]] -- [how it was used]
- [[source-note-3]] -- [how it was used]

## Domain Map Reference
Derived from: [[domain-map-note]], Branch [N]: [branch label]

## Key Arguments
- [Main argument 1 from the article]
- [Main argument 2 from the article]

## Cross-Links
- Links to: [[related-article-1]] -- [relationship]
- Links from: [[related-article-2]] -- [relationship]
```

---

## Citation Metadata Requirements

Every research source artifact must include sufficient metadata to relocate the source:

| Field | Required | Notes |
|-------|----------|-------|
| Title | Yes | The title of the source document, article, or page |
| Author | Yes (use "unknown" if unavailable) | Person or organization |
| URL | Yes (use "N/A" for offline) | Full URL, not shortened |
| Source date | Yes (use "undated" if unavailable) | When the source was published or last updated |
| Access date | Yes | When the source was consulted during research |

For sources without URLs (books, interviews, personal communications), include enough identifying information to locate the source: ISBN, publication name, interview date, or other identifiers.

---

## Tagging Conventions

Tags serve two purposes: topic discovery and artifact type filtering.

### Topic Tags

- Use lowercase with hyphens: `api-security`, `content-strategy`, `rate-limiting`
- Use the same tag vocabulary as the knowledge map topics where possible
- Limit to 3-5 topic tags per artifact -- enough to find it, not so many that tags lose meaning
- Prefer specific tags over broad ones: `oauth-2-pkce` over `authentication`

### Type Tags

Every artifact automatically gets a type tag matching its frontmatter type:
- `research-source`
- `synthesis`
- `domain-map`
- `article-backlink`

These type tags enable filtering all artifacts of a given kind.

### Domain Tags

If the vault covers multiple domains, add a domain tag to every artifact:
- `domain/api-security`
- `domain/content-marketing`

Use a consistent prefix so domain tags are visually distinct from topic tags.

---

## Linking Conventions

### Obsidian Wikilinks

Use Obsidian-style wikilinks for all internal vault references:

```markdown
- [[note-title]] -- description of the link
- [[folder/note-title]] -- if the vault uses folder structure
- [[note-title|Display Text]] -- when the note title differs from desired display text
```

### Link Directionality

Every link should be bidirectional where possible:

- If Note A links to Note B, Note B should link back to Note A
- Research sources link to the articles they informed; article backlinks link to the sources
- Synthesis notes link to the source notes involved; source notes do not need to link back (to avoid cluttering source notes with every synthesis that references them)

### External Links

For URLs to external content, use standard markdown links:

```markdown
[Source Title](https://example.com/article)
```

Do not use wikilinks for external URLs. Wikilinks are for vault-internal navigation only.

---

## Obsidian Compatibility

All vault artifacts must be compatible with Obsidian's rendering and linking:

1. **YAML frontmatter** must be valid YAML between `---` delimiters at the top of the file
2. **Wikilinks** use `[[double brackets]]` syntax
3. **Tags** in frontmatter use the `tags:` array format (not inline `#tag` in frontmatter)
4. **Inline tags** may be used in the body text as `#tag-name` where helpful for quick filtering
5. **Mermaid diagrams** render natively in Obsidian -- no special plugin required
6. **Filenames** should avoid special characters: use letters, numbers, hyphens, and spaces only
7. **Folder paths** in wikilinks use forward slashes: `[[folder/note-title]]`

### Frontmatter Gotchas

- Dates must be quoted if they contain only numbers: `date_captured: "2026-02-08"` or use ISO format which YAML parses as a string in most contexts
- Lists in frontmatter use the indented dash format, not inline arrays
- Boolean values (`true`/`false`) should not be quoted
- Strings containing colons must be quoted: `source_url: "https://example.com"`

---

## File Naming

### Convention Priority

1. **Match the existing vault convention first.** If the vault uses `Title Case Names.md`, follow that. If it uses `lowercase-hyphenated.md`, follow that. If it uses a date prefix like `2026-02-08-note-title.md`, follow that.

2. **If no convention is detectable**, default to lowercase hyphenated: `source-title-shortened.md`

3. **Never mix conventions** within a single harvest batch. All artifacts from one harvest use the same naming convention.

### Naming Patterns by Type

| Type | Pattern | Example |
|------|---------|---------|
| Research source | `[short-source-title].md` | `api-security-owasp-top-10.md` |
| Synthesis note | `synthesis-[short-description].md` | `synthesis-rate-limiting-trust-connection.md` |
| Domain map | `domain-map-[domain].md` | `domain-map-api-security.md` |
| Article backlink | `article-[short-title].md` | `article-complete-guide-api-security.md` |
