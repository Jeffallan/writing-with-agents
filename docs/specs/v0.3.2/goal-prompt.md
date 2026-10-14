Execute the v0.3.2 milestone tickets for writing-with-agents through #15, then stop for maintainer review before the release ticket (#18).

<done_when>
Branch `v0.3.2` holds exactly one commit per ticket for #16, #8, #7, #10, #11, #12, #9, #13, #14, #15, in that order; every ticket's acceptance criteria are checked with fresh evidence; the Completion Status table in the implementation plan is current; and you have posted the final report described at the end. Do not start #18 or #17.
</done_when>

<hard_rules>
- Never push, merge, tag, open PRs, close or comment on issues yourself, or touch `main`. The maintainer does the single merge after review. Commit bodies carry `Closes #N` on purpose: the issues close when the maintainer pushes the merge.
- One commit per ticket, nothing else on the branch. Each commit includes that ticket's CHANGELOG entry under `## [Unreleased]` (Added, Changed, or Fixed), ending `(#N)`. The #16 commit creates the `## [Unreleased]` heading above `## [0.3.1]`. Ignore the "separate commit `docs(changelog): ...`" checkbox in the issue bodies; this rule replaces it.
- Stop and ask on any deviation from a ticket's steps, any blocker, or after 3 failed attempts at the same problem.
- Never edit `plugin/skills/**`, `plugin/commands/**`, or `plugin/references/**` while working #15.
- Prose you write (docs, commit messages, CHANGELOG) follows the style rules in CLAUDE.md: no em dashes, no sentences starting with And/But/So/Or/Yet, no "not X but Y" constructions.
</hard_rules>

<sources_of_truth>
1. Each GitHub issue body is self-contained and authoritative: `gh issue view N -R Jeffallan/writing-with-agents`. It has steps, files, fixture checks, and acceptance criteria.
2. Plan and progress: `docs/specs/v0.3.2/implementation-plan.md`
3. Epic context and resolved decisions: `docs/specs/v0.3.2/overview.md`
4. Repo: [Jeffallan/writing-with-agents](https://github.com/Jeffallan/writing-with-agents)
Precedence: this goal's hard rules and decisions, then the issue body, then the plan, then the overview. Report any conflict you resolve this way in the final report.
</sources_of_truth>

<decisions_already_made>
Do not re-ask these.
- Single branch `v0.3.2` from `main` (`9fa1bb2`, v0.3.1). Create it if it does not exist; if it exists, read `git log main..v0.3.2` and the Completion Status table to find where to resume.
- Sequential execution in the order above. No parallel worktrees.
- Behavioral checks run headless instead of the `dev-link` pattern the issue bodies mention (approved deviation: the plugin is not installed locally, so there is no cache to swap). Base command, run from a scratch copy of the fixture inside the fixtures folder, never from the repo:
  `claude -p --bare --plugin-dir <repo>/plugin --permission-mode acceptEdits --permission-prompts none "<prompt>"`
  `--bare` keeps the global `~/.claude/CLAUDE.md` (which already bans AI tells) from masking RED results. If `--bare` fails to authenticate, drop it, rerun, and note the possible contamination in the ticket's Notes. Never use `bypassPermissions`.
- Headless runs cannot answer `AskUserQuestion`. Judge RED and GREEN by whether the question or report appears and what it contains. For #9 interactive mode, GREEN is: report shown, approval question asked, original fixture unchanged (`sha256sum` before and after). The written-file check moves to the maintainer list in the final report.
- Fixtures live in a local folder outside the repo, never in the repo. Create each one when its ticket first needs it; keep them short.
- The Final Prose rule (#13, #14) covers final deliverables only: finished content intended to be read by humans (READMEs, docs pages, articles, release notes, PR descriptions). Commit messages, code comments, and changelog entries are excluded. The issue bodies already reflect this.
- Vendored humanizer is pinned to v3.1.0 and lives at `plugin/skills/judge/references/human-voice.md` (#8). #9's embedded mode keeps its code-comment and commit-message handling.
- #9 relies on #16's script for the manifest command count; do not hand-edit it.
- Acceptance criteria that depend on later tickets (for example #16's "skills 10, workflows 5, references 35 everywhere") stay unchecked at that ticket's commit. Verify them after #15 and list them in the final report.
- #13 and #14 behavior checks: create a scratch directory under the fixtures folder with a `CLAUDE.md` holding the snippet, run the base command without `--bare` (the scratch `CLAUDE.md` must load) plus `--output-format stream-json` from it, and grep the stream for a `human-voice` command or skill invocation. Present for README and PR-description requests; absent for commit-message, docstring, and chat requests. For the README request, also grep the final text for staged tells (em dashes, "not just", "Let's dive", "Here's the thing"); none may remain.
- execute-ticket and complete-ticket mention Jira, Confluence, and "the user handles git commit". Skip every Jira and Confluence step. You make the commits.
</decisions_already_made>

<per_ticket_loop>
For each ticket, in order:
1. Load the `fullstack-dev-skills:project:execution:execute-ticket` skill, plus the skill the issue names on its Skill line (`fullstack-dev-skills:python-pro`, `fullstack-dev-skills:prompt-engineer`, or `fullstack-dev-skills:code-documenter`). Treat this goal as approval for the skill's start-of-ticket and parallel-execution checkpoints; keep its deviation and blocker checkpoints.
2. Read the issue body. Confirm its blockers are committed on the branch.
3. RED: run the issue's fixture or tamper check against the current branch state and record the result.
4. Implement the issue's steps. Read each file before editing it. Keep SKILL.md files at 80 to 100 non-blank lines. Judge SKILL.md is already at 97, so for #8 move wording into references rather than adding lines.
5. GREEN: rerun the same checks and record the result.
6. Verify from the repo root, every ticket:
   `python3 scripts/validate-skills.py && python3 scripts/validate-markdown.py --check && python3 scripts/update-docs.py --check`
   Run `python3 scripts/update-docs.py` first when counts changed. Also run `cd site && npm run build` when the ticket touches README, docs, or the site.
   All must exit 0 with zero validator warnings.
7. Commit: `type(scope): summary (#N)`, a short bullet body, and `Closes #N`.
8. Update the ticket's row in the plan's Completion Status table: Status `Done`, Completed Date, and Notes holding the commit SHA plus RED/GREEN in a few words. Also set the matching Status cells in the Execution Order and wave tables.
9. Before moving on, restate the next ticket number and these hard rules to yourself.
</per_ticket_loop>

<context_hygiene>
- Delegate broad searches to Explore agents. Any subagent brief names the same skill the ticket names ("Use the fullstack-dev-skills:<skill> skill to ...") and asks the agent to list the skills it loaded.
- Summarize long tool output and headless-run transcripts; keep only the evidence lines.
- The plan's Completion Status table is your progress record. After a context reset, rebuild state from it and `git log main..v0.3.2`, not from memory.
</context_hygiene>

<final_report>
When #15 is committed, stop and post:
- A table: ticket, commit SHA, RED result, GREEN result, verification commands and exit codes.
- Deviations (approved or pending), with reasons.
- Follow-up tickets you drafted but did not file.
- Anything the maintainer must check by hand: the badge publisher terms (#12), the Cowork and app surface check (#12), and the human-voice docs diff review (#15).
- One line: "Ready for review. #18 (release) is next and needs your approval to merge, tag, and push."
</final_report>

Reminder: one commit per ticket on `v0.3.2`, no push or merge, stop before #18.

---

## Kickoff command

The maintainer started the session with this `/goal` command. The original path pointed at the maintainer's local notes folder; it is shown here with the repo path.

```
/goal Follow the instructions in docs/specs/v0.3.2/goal-prompt.md exactly. Start by reading that file in full.
```
