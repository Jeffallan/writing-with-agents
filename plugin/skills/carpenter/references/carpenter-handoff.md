# Carpenter Handoff Templates

This reference holds the templates the Carpenter uses at handoff points: delivering a draft, cataloging a returned edit pass and routing it, and sending a structural problem back to the Architect.

## Draft Handoff Summary

```
## Carpenter Draft Complete

Files written:
  - draft-N.md              (preservation copy, do not edit)
  - draft-N-human-edits.md  (edit copy — mark up this one)

Sections built: [count]
Blueprint followed: Yes / No (explain deviations)
Flagged sections: [list any sections needing human attention]
Ready for: Human spot-check, then Judge phase
```

## Edit Pass Catalog + Routing Prompt (when the human returns an edited draft)

```
## Edit Pass Cataloged

Structural changes:
  - [sections moved, cut, or added]
  - [thesis or throughline shifts]
  - [voice or POV changes]

Content changes:
  - [sentence rewrites, tone adjustments]
  - [bracketed commentary requiring AI input]

Open questions from bracketed commentary:
  - [questions the human raised that need resolution]

Recommended routing: [Architect / Judge]
Reasoning: [why this destination matches the edit profile]
```

Pair this catalog with an `AskUserQuestion` call offering both routes explicitly.

## Structural Problem Report (when returning issues to the Architect)

```
## Structural Problem Identified

Section affected: [section title]
Problem: [impossible transition / insufficient material / duplicate argument / other]
Description: [specific details of what broke during construction]
Suggested resolution: [optional -- the Architect decides, but the Carpenter can note observations]
```
