# Writing With Agents

Skills and commands for writing nonfiction with Claude, built on Betty S. Flowers' "Madman, Architect, Carpenter, Judge" framework and Bryan Garner's whirlybird technique. Each phase defines who leads and who supports: Claude generates, structures, drafts, and detects problems, while you seed ideas, choose the structure, and decide which edits to accept.

## What's included

**Skills (10):**

- **Inner loop:** `madman` (raw material), `whirlybird` (mindmap outlines), `architect` (structure and thesis), `carpenter` (prose), `judge` (editing passes), `quality-rubric` (scoring)
- **Cross-cutting:** `seo-writer`
- **Outer loop:** `research-intake`, `content-strategist`, `knowledge-harvester`

**Commands (4):**

- `/writing-with-agents:flowers-cycle` takes one article through every phase
- `/writing-with-agents:content-strategy` plans a multi-article series from a research corpus
- `/writing-with-agents:capture` turns a URL, file, or text into a structured research note
- `/writing-with-agents:writing-setup` saves session defaults

## What the plugin reads, writes, and fetches

The plugin contains only Markdown and YAML instructions. It has no scripts, hooks, or MCP servers, and it sends nothing anywhere on its own. When you use it, Claude acts through your host's built-in tools, under your host's permission settings:

- **Reads** the files and folders you point it at, such as drafts or a notes vault
- **Fetches** URLs you provide (for example with `/capture`) and runs web searches only for research gaps you select
- **Writes** drafts, outlines, and notes to the locations you choose, and stores session defaults in `~/.claude/writing-with-agents/config.json`

## Documentation

Full documentation, workflow guides, and the privacy policy: <https://jeffallan.github.io/writing-with-agents/>

Source and issues: <https://github.com/Jeffallan/writing-with-agents>

## License

MIT
