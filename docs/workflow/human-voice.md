# Human Voice Command

Remove AI-voice tells from any text: a draft, a README section, a docstring, or a commit message.

**Usage:** `/writing-with-agents:human-voice <file-or-text> [--embedded] [--sample PATH]`

The command loads the human-voice pattern catalog that the Judge uses in Pass 1 (vendored from [humanizer](https://github.com/blader/humanizer) v3.1.0) and runs its full process: mark the tells, draft a rewrite, check it, and write the final version. The Judge only detects; this command rewrites.

## Modes

**Interactive (default).** You get a findings table with each tell's pattern number (§N), location, and severity, then one question: apply all findings, apply must-fix findings only, choose findings, or cancel. The rewrite is saved beside the original as `<name>-human-voice.<ext>`. The original file is never overwritten.

**Embedded.** Pass `--embedded`, or let another task call the command while it produces a deliverable. The command returns only the final text, with no report, question, or new file. A CLAUDE.md rule can use this mode to clean up READMEs, docs pages, release notes, and pull request descriptions before they are saved.

## What stays unchanged

- Code blocks, inline code, commands, paths, YAML frontmatter, and link targets in documents
- Code, identifiers, and doc-tag syntax (`@param`, `:returns:`) in comments and docstrings
- The conventional-commit prefix, issue references, and trailers such as `Co-Authored-By` in commit messages

## Final Prose rule

Add this rule to a `CLAUDE.md` file so finished deliverables pass through embedded mode before Claude hands them over:

```markdown
## Final Prose

Before delivering a final deliverable, run the
writing-with-agents:human-voice command on it in embedded mode and deliver
its output. Final deliverables are finished content intended to be read
by humans, such as READMEs, documentation pages, articles, release notes,
and PR descriptions.

Does not apply to commit messages, code comments, changelog entries, code,
command output, drafts in progress, or conversational replies.
```

Put the rule in a project's `CLAUDE.md` to cover one repository, or in `~/.claude/CLAUDE.md` to cover every project. The writing-with-agents plugin must be installed, since the rule calls its `human-voice` command.

The rule runs once per deliverable, after it is finished. Each run reads the full human-voice catalog (about 5,000 words), which is why the list of covered content is short. Commit messages, code comments, and changelog entries are small and frequent, and a pass on each one costs more than it gains.

## Voice

Pass `--sample PATH` to match a writing sample. In interactive mode, if a Carpenter edit copy (`draft-N-human-edits.md`) sits beside the input, the command offers it as the sample. The project's style constraints still apply either way: no em dashes or en dashes, and no sentences starting with "And" or "But".
