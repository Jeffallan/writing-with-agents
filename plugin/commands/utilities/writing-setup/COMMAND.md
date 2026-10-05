---
description: Configure session defaults for writing workflows (vault path, content type preferences)
argument-hint: "[--vault-path PATH] [--content-type TYPE]"
---

# Writing Setup

**Arguments:** $ARGUMENTS

---

## Purpose

Configure session defaults for writing workflows. Sets vault path for knowledge capture, default content type, and other preferences that persist across commands in the current session.

---

## Argument Parsing

| Argument | Required | Description |
|----------|----------|-------------|
| `--vault-path` | No | Default vault path for knowledge capture |
| `--content-type` | No | Default content type (article, tutorial, blog-post, white-paper, case-study, documentation) |

If no arguments provided, run interactive setup.

---

## Interactive Setup

When no arguments are provided, use AskUserQuestion to configure:

### Question 1: Vault Path

```
"Where should research artifacts be saved?"
```
Options:
- Specify vault path (user provides path)
- Use current working directory
- No vault integration this session

### Question 2: Default Content Type

```
"What type of content will you primarily create?"
```
Options:
- Article/Essay
- Tutorial/How-to
- Blog post
- Other (user specifies)

### Question 3: SEO Default

```
"Should SEO optimization be enabled by default?"
```
Options:
- Yes, enable SEO for all content
- No, I'll enable per-article
- Only for blog posts and SEO content

---

## Configuration Storage

Save configuration to `~/.claude/writing-with-agents/config.json`:

```json
{
  "vault_path": "/path/to/vault",
  "default_content_type": "article",
  "seo_default": false,
  "configured_at": "2026-02-08T12:00:00Z"
}
```

---

## Output

```
## Writing Setup Complete

**Vault path:** {path or "not configured"}
**Default content type:** {type}
**SEO default:** {enabled/disabled}

Configuration saved. These defaults apply to all writing commands this session.

Run `/writing-with-agents:writing-setup` again to reconfigure.
```

---

## Constraints

### MUST DO
- Use AskUserQuestion for interactive setup
- Validate vault path exists if provided
- Save configuration for session use

### MUST NOT DO
- Overwrite existing configuration without confirmation
- Require vault path (it's optional)
- Store sensitive information in config
