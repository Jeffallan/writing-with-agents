---
description: Capture content from a URL, file path, or raw text and produce a structured Flowers research-source note
argument-hint: "<path> <source>"
---

# Capture

**Arguments:** $ARGUMENTS

---

## Purpose

Captures content from a URL, file path, or raw text string and produces a structured Flowers research-source note at the specified target path. Designed for building a research corpus one source at a time.

---

## Argument Parsing

| Argument | Required | Description |
|----------|----------|-------------|
| `path` | Yes | Where to write the note (file path) |
| `source` | Yes | URL, file path, or quoted text string to capture |

**Example:** `/writing-with-agents:capture /Users/dmitry/note-sync/my-note.md https://example.com/article`

---

## Execution Flow

### Step 1: Detect Source Type

Determine the source type and fetch content:

| Source Type | Detection | Action |
|-------------|-----------|--------|
| URL | Starts with `http://` or `https://` | Fetch with WebFetch tool |
| File path | Path exists on filesystem | Read with Read tool |
| Raw text | Everything else (quoted string) | Use directly |

### Step 2: Ask Context Question

Ask the user via AskUserQuestion:

```
"What are you working on? (This helps personalize the Relevance section)"
```

Options:
- Research for a specific article
- General domain research
- Competitive analysis
- Background reading

The user's answer seeds the "Relevance to My Work" section.

### Step 3: Analyze and Generate Note

Analyze the captured content and generate a structured note with:

1. **Full Flowers frontmatter** — always the complete template from `references/capture-note-template.md`
2. **Fixed body sections** in this order:
   - Key Claims
   - Architecture/Method
   - Relevance to My Work (personalized to user's answer from Step 2)
   - Notable Quotes
   - Linked Resources
   - Open Questions

### Step 4: Write the Note

Write the formatted note to the specified `path` using the Write tool.

### Step 5: Confirm

```
## Capture Complete

**Source:** {source}
**Saved to:** {path}
**Type:** research-source
**Status:** seed

Key claims captured: {count}
Open questions identified: {count}
```

---

## Reference Guide

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Note Template | `references/capture-note-template.md` | Always — defines frontmatter and body structure |

---

## Constraints

### MUST DO
- Always use the full frontmatter template (never partial)
- Set `type: research-source` and `status: seed`
- Ask the user what they're working on before generating
- Include all 6 body sections even if some are sparse

### MUST NOT DO
- Skip the context question
- Omit frontmatter fields
- Write to path without generating the full note structure
- Modify the source content (capture faithfully, analyze separately)
