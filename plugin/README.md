# Writing With Agents

Skills and commands for writing nonfiction with Claude, built on Betty S. Flowers' "Madman, Architect, Carpenter, Judge" framework and Bryan Garner's whirlybird technique. Each phase defines who leads and who supports: Claude generates, structures, drafts, and detects problems, while you seed ideas, choose the structure, and decide which edits to accept.

## What's included

**Skills (10):**

- **Inner loop:** `madman` (raw material), `whirlybird` (mindmap outlines), `architect` (structure and thesis), `carpenter` (prose), `judge` (editing passes), `quality-rubric` (scoring)
- **Cross-cutting:** `seo-writer`
- **Outer loop:** `research-intake`, `content-strategist`, `knowledge-harvester`

**Commands (5):**

- `/writing-with-agents:flowers-cycle` takes one article through every phase
- `/writing-with-agents:content-strategy` plans a multi-article series from a research corpus
- `/writing-with-agents:capture` turns a URL, file, or text into a structured research note
- `/writing-with-agents:writing-setup` saves session defaults
- `/writing-with-agents:human-voice` removes AI-voice tells from a draft, README, docstring, or commit message, either with a report and approval or, with `--embedded`, by returning only the final text

## Install

- **claude.ai (Cowork and the Claude apps):** open Customize, then Plugins, and search for "Writing With Agents", or open the [directory listing](https://claude.ai/customize/plugins/id/f54e0a10-f5d3-48c4-addb-2c74360c8130%40anthropic-plugin-directory) while signed in.
- **Claude Code:** run `/plugin`, open Discover, search for "Writing With Agents" (Anthropic Directory), and pick user, project, or local scope.

## Final Prose rule

To have Claude clean up finished deliverables (READMEs, docs pages, articles, release notes, PR descriptions) automatically, add this to a project `CLAUDE.md` or to `~/.claude/CLAUDE.md`:

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

Each run reads the full human-voice catalog, which is why the rule skips small, frequent prose such as commit messages, code comments, and changelog entries. The plugin must be installed for the rule to work.

## What the plugin reads, writes, and fetches

The plugin contains only Markdown and YAML instructions. It has no scripts, hooks, or MCP servers, and it sends nothing anywhere on its own. When you use it, Claude acts through your host's built-in tools, under your host's permission settings:

- Reads the files and folders you point it at, such as drafts or a notes vault
- Fetches URLs you provide (for example with `/capture`) and runs web searches only for research gaps you select
- Writes drafts, outlines, and notes to the locations you choose, and stores session defaults in `~/.claude/writing-with-agents/config.json`

## Documentation

Full documentation, workflow guides, and the privacy policy: <https://jeffallan.github.io/writing-with-agents/>

Source and issues: <https://github.com/Jeffallan/writing-with-agents>

## License

MIT
