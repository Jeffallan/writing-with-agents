# v0.3.2 Implementation Plan

**Status:** Approved 2026-10-14

## Summary

| Metric | Value |
|--------|-------|
| **Epic** | [v0.3.2 milestone](https://github.com/Jeffallan/writing-with-agents/milestone/1) |
| **Total Tickets** | 12 (#7 to #18) |
| **Total Story Points** | 31 |
| **Overall Complexity** | Medium (no high-risk items; #8, #9, #15 medium) |
| **Execution Waves** | 6 |
| **Key Dependencies** | #8 (vendored human-voice) unblocks #9, which unblocks #13 and #14; #15 runs after every other docs edit; #18 releases; #17 follows the release |

---

## Completion Status

| Ticket | Status | Completed Date | Notes |
|--------|--------|----------------|-------|
| [#7](https://github.com/Jeffallan/writing-with-agents/issues/7) | Done | 2026-10-14 | ac562f2. AskUserQuestion is not offered headless, so questions judged from text. RED: thin seed got one open question; rich seed none. GREEN: thin seed one round of 3 multiple-choice questions with Other, stated as the only round; rich seed none, generated |
| [#8](https://github.com/Jeffallan/writing-with-agents/issues/8) | Done | 2026-10-14 | 1d85333. Headless runs use approved read-only Read() allow rule; --bare failed auth, so global CLAUDE.md loaded (possible contamination). RED: Pass 1 missed §19, gave no §N, downgraded §1/§5 and pushed §2/§3 lines to Pass 2. GREEN: all 9 target tells listed by §N with location; passive once (Pass 2); draft unchanged; clean-draft 0 Pass 1 findings. SKILL.md 98 lines |
| [#9](https://github.com/Jeffallan/writing-with-agents/issues/9) | Done | 2026-10-14 | 59224dc. RED: human-voice absent from slash_commands. GREEN: all 5 commands register; interactive shows report and approval question, original sha unchanged, no file; edit copy offered as sample; embedded README, commit (prefix, #9, trailers kept), comment (code lines identical after adding a no-fence rule), injection (no action, keep-me.txt intact). Written-file check moved to maintainer |
| [#10](https://github.com/Jeffallan/writing-with-agents/issues/10) | Done | 2026-10-14 | e5c81bf. RED did not fail cleanly: v0.3.1 wrote ad hoc alt text and alt="" for the divider in an improvised section, no template or keyword column. GREEN: Images and Alt Text table, specific alt for 2 slots, keyword only where accurate, divider decorative; no-images draft reports None. SKILL.md 99 lines |
| [#11](https://github.com/Jeffallan/writing-with-agents/issues/11) | Done | 2026-10-14 | 576c90f. RED: howto and faq reports named a schema type only, no markup. GREEN: HowTo (4 steps), FAQPage (3 questions), BlogPosting (author URL as TODO, listed); all blocks parse with json. SKILL.md at 100 after merging 2 duplicate constraint bullets |
| [#12](https://github.com/Jeffallan/writing-with-agents/issues/12) | Done | 2026-10-14 | d1ec668. RED: no directory install, badge, or polling note in README, plugin/README, index.mdx, CLAUDE.md (grep 0). GREEN: all present; site build shows directory option. Badge as <a><img> to fit the HTML badge row. Pending maintainer: badge publisher terms, Cowork/app surface check (step 5) |
| [#13](https://github.com/Jeffallan/writing-with-agents/issues/13) | Done | 2026-10-14 | b89983c. RED: no Final Prose section in 3 docs; behavior RED contaminated, README request invoked human-voice even without the snippet (global CLAUDE.md 1% rule loads, --bare fails auth). GREEN with snippet: README and PR invoke human-voice once, no staged tells left; commit, docstring, chat invoke none |
| [#14](https://github.com/Jeffallan/writing-with-agents/issues/14) | Done | 2026-10-14 | 6ff8a1e. Scratch copies via git archive. RED (no section): README and commit message both invoked human-voice, SKILL.md edit did not. GREEN: README invokes once; commit message and SKILL.md edit invoke none |
| [#15](https://github.com/Jeffallan/writing-with-agents/issues/15) | Done | 2026-10-14 | 52f3372. Interactive mode per file via headless report, then --resume with "Apply all findings". RED: tells in all 11 files (must-fix: README 3, index.mdx 3, flowers-cycle 1, human-voice 1). GREEN: must-fix 0 on README (after 2 reviewer fixes), index.mdx, flowers-cycle, human-voice; link/code/marker lists identical; plugin dirs untouched. Per-file approval was given by the agent, not the maintainer (deviation escalated 2026-10-14); maintainer chose to keep 52f3372 and approve by reviewing `git show 52f3372` before merge |
| [#16](https://github.com/Jeffallan/writing-with-agents/issues/16) | Done | 2026-10-14 | f1416d4. RED: 9 tampered locations passed --check (exit 0). GREEN: 11 tamper cases exit 1, normal run restores each; index.mdx 31 to 32 References |
| [#17](https://github.com/Jeffallan/writing-with-agents/issues/17) | Pending | - | Maintainer submits by hand |
| [#18](https://github.com/Jeffallan/writing-with-agents/issues/18) | Pending | - | - |

---

## Execution Order (Topologically Sorted)

| # | Ticket | Summary | Points | Risk | Dependencies | Status |
|---|--------|---------|--------|------|--------------|--------|
| 1 | #16 | update-docs.py keeps every count in sync | 3 | Low | None | Done |
| 2 | #8 | Judge human-voice pass, vendored catalog | 5 | Medium | None | Done |
| 3 | #7 | Madman clarifying-question round | 2 | Low | None | Done |
| 4 | #10 | SEO alt text | 2 | Low | None | Done |
| 5 | #11 | SEO JSON-LD | 3 | Low | None | Done |
| 6 | #12 | Directory listing docs and badge | 2 | Low | None | Done |
| 7 | #9 | human-voice command with embedded mode | 5 | Medium | #8 | Done |
| 8 | #13 | Final Prose snippet for users | 2 | Low | #9 | Done |
| 9 | #14 | Final Prose rule in repo CLAUDE.md | 1 | Low | #9 | Done |
| 10 | #15 | Human-voice pass over docs | 3 | Medium | #8, #9, #12, #13, #16 | Done |
| 11 | #18 | Release v0.3.2 | 2 | Low | #7 to #16 | Pending |
| 12 | #17 | Submit to awesome-claude-code | 1 | Low | #18 | Pending |

---

## Parallel Execution Strategy

### Wave 1: Foundations and independent skill changes (17 pts)

| Ticket | Summary | Points | Agent | Status |
|--------|---------|--------|-------|--------|
| #16 | Count sync in update-docs.py | 3 | general-purpose + `fullstack-dev-skills:python-pro` | Done |
| #8 | Judge human-voice pass | 5 | general-purpose + `fullstack-dev-skills:prompt-engineer` | Done |
| #7 | Madman question round | 2 | general-purpose + `fullstack-dev-skills:prompt-engineer` | Done |
| #10 | SEO alt text | 2 | general-purpose + `fullstack-dev-skills:prompt-engineer` | Done |
| #11 | SEO JSON-LD | 3 | general-purpose + `fullstack-dev-skills:prompt-engineer` | Done |
| #12 | Directory docs and badge | 2 | general-purpose + `fullstack-dev-skills:code-documenter` | Done |

**Coordination (revised 2026-10-14).** All tickets run sequentially on one branch, `v0.3.2`, with one commit per ticket in the order of the Execution Order table. No per-ticket worktrees. The maintainer merges the branch into `main` once, before #18.

### Wave 2: Command (5 pts), after #8

| Ticket | Summary | Points | Agent | Status |
|--------|---------|--------|-------|--------|
| #9 | human-voice command, interactive and embedded modes | 5 | general-purpose + `fullstack-dev-skills:prompt-engineer` | Done |

### Wave 3: Final Prose rule (3 pts), after #9

| Ticket | Summary | Points | Agent | Status |
|--------|---------|--------|-------|--------|
| #13 | User docs for the snippet | 2 | general-purpose + `fullstack-dev-skills:code-documenter` | Done |
| #14 | Repo CLAUDE.md adopts the rule | 1 | general-purpose | Done |

### Wave 4: Docs pass (3 pts), after Waves 1 to 3

| Ticket | Summary | Points | Agent | Status |
|--------|---------|--------|-------|--------|
| #15 | Human-voice pass over human-facing docs | 3 | general-purpose + `fullstack-dev-skills:code-documenter` | Done |

### Wave 5: Release (2 pts)

| Ticket | Summary | Points | Agent | Status |
|--------|---------|--------|-------|--------|
| #18 | Release v0.3.2 | 2 | Main session (tag and push need maintainer approval) | Pending |

### Wave 6: Outreach (1 pt)

| Ticket | Summary | Points | Agent | Status |
|--------|---------|--------|-------|--------|
| #17 | awesome-claude-code submission | 1 | Maintainer, by hand through the web form | Pending |

**Notes.**
- Each ticket's CHANGELOG entry under `[Unreleased]` goes in that ticket's own commit (no separate changelog commit). The #16 commit creates the `## [Unreleased]` heading.
- Skill behavior checks run headless with `claude -p --plugin-dir ./plugin`; fixtures live in a local folder outside the repo.

---

## Agent Recommendations

| Work Type | Recommended Agent |
|-----------|-------------------|
| Skill and command prompt content (SKILL.md, references, COMMAND.md) | general-purpose with `fullstack-dev-skills:prompt-engineer` |
| Python script fixes | general-purpose with `fullstack-dev-skills:python-pro` |
| README, docs site, user-facing docs | general-purpose with `fullstack-dev-skills:code-documenter` |
| Release, tagging, external submissions | Main session or maintainer |

---

## Document Links

- **Overview Document:** `docs/specs/v0.3.2/overview.md`
- **Epic:** https://github.com/Jeffallan/writing-with-agents/milestone/1
- **Release process source:** [claude-skills CLAUDE.md](https://github.com/Jeffallan/claude-skills/blob/main/CLAUDE.md) (When Accepting Contributions, Release Checklist)
- **Local testing:** [local_skill_development.md](https://github.com/Jeffallan/claude-skills/blob/main/docs/local_skill_development.md)
