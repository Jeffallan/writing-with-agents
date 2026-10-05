# Edit-Copy Markup Convention

The single source of truth for how a human marks up an edit copy (`*-human-edits.md`) and how the AI interprets each mark. The Carpenter delivers the edit copy and teaches this convention; the Judge parses it on return. Both skills reference this file so the vocabulary stays identical across the cycle.

## The Three Markers

The human marks up the edit copy using a simple annotation system:

| Marker | Syntax | Meaning |
|--------|--------|---------|
| **Strikethrough** | `~~text~~` | Material to cut. |
| **Square brackets** | `[commentary]` | A note, question, alternative phrasing, or direction for the AI. |
| **Direct rewrite** | replacement text written inline | Replacement prose written where the original was. |

The format matters because it preserves the original draft alongside the human's intent. It gives the AI enough context to understand not just *what* changed but *why*.

## How the AI Treats Each Marker

Treat every annotation as a directive, not a suggestion. The edit copy is where the human's thinking is most concentrated.

- **Auto-propagate: strikethroughs and direct rewrites.** These are directives. Apply them unconditionally without asking. Strikethroughs are cuts, not maybes.
- **Resolve: bracketed commentary.** This is the human thinking out loud. Extract the intent, draft a proposed resolution for each bracket, and present all of them for confirmation before rebuilding. Never delete a bracket silently and never guess without surfacing it.

## Where This Fits in the Cycle

1. The Carpenter delivers a preservation + edit pair (`draft-N.md` and `draft-N-human-edits.md`) and tells the human to mark up the edit copy using the three markers above.
2. The human marks up `draft-N-human-edits.md`.
3. On return, the AI catalogs every mark into auto-propagate (strikethroughs, direct rewrites) and resolve (brackets), then confirms routing:
   - Structural edits route back to the Architect.
   - Sentence-level edits route to the Judge, which merges these marks with its detection findings into one consolidated report.
