# Alt Text

Screen reader users and search engines read an image the same way: through its alt text. Write alt text for every image or image slot in the draft during the Carpenter phase, and audit it during the Judge phase. Each alt text describes the specific picture first; a keyword goes in only when the sentence still describes that picture accurately.

---

## The Rule

1. **Describe what this image shows, specifically.** Name the people, objects, setting, and action a sighted reader would notice first. Ask what the reader would lose if the image failed to load, and write that.
2. **Add a keyword only if the description stays true.** Use the primary keyword or a secondary keyword when it names something actually in the image. If adding it turns the description into a sales line or a guess, leave it out.
3. **Mark decorative images as decorative.** Dividers, background textures, spacer graphics, and purely ornamental icons get empty alt (`alt=""`) so screen readers skip them. List them as decorative in the SEO report. Never write keyword alt text for a decorative image.
4. **Keep it short.** Aim for about 125 characters. Screen readers read alt text in one pass, and long alt text gets cut off or skimmed.
5. **Skip the preamble.** Do not start with "image of", "picture of", or "photo of". Screen readers already announce the element as an image. Say "screenshot" only when the reader needs to know it is a screen capture.

---

## Screenshots and Charts

A screenshot or chart carries one fact the reader needs. Name the screen, then state that fact.

| Bad | Good |
|---|---|
| "Dashboard screenshot" | "Gallup team grid with an empty Influencing column" |
| "Chart of results" | "Bar chart: mean time to resolve fell from 41 to 19 minutes after the runbook rewrite" |
| "Settings page" | "Repository settings with branch protection enabled for main" |

When the chart's data matters to the argument, put the numbers in the body text as well. Alt text is not a substitute for a data table.

---

## Good and Bad Pairs

| Image | Bad alt text | Why it fails | Good alt text |
|---|---|---|---|
| Six designers at a whiteboard sorting printed strengths reports | "People studying" | Vague; says nothing a reader can use | "A team reviewing their CliftonStrengths results, sorted into the four domains on a whiteboard" |
| Same image | "CliftonStrengths for teams CliftonStrengths workshop strengths-based management" | Keyword stuffing; describes no image | "A team reviewing their CliftonStrengths results, sorted into the four domains on a whiteboard" |
| Engineer pairing at one laptop | "Image of two developers" | Preamble plus a generic subject | "Two engineers pair programming on a shared laptop during a code review" |
| Wavy divider line between sections | "Team strengths workshop divider" | Keyword on a decorative image | `alt=""` (decorative) |
| Headshot of the author | "Best leadership coach in Chicago" | A sales line, not a description | "Portrait of Dana Ortiz, author and leadership coach" |

---

## Image Slots in a Draft

Drafts often hold placeholders such as `[IMAGE: photo of ...]` instead of finished images. Treat each placeholder as an image slot:

- Write alt text from the placeholder's description. If the description is too thin to describe the picture ("[IMAGE: team photo]"), flag the slot and ask for the missing detail instead of inventing it.
- Mark placeholders that describe dividers, backgrounds, or ornaments as decorative.
- If the draft has no images and no slots, report "None" in the Images and Alt Text table. Do not invent slots.

---

## Report Format

Add this table to the SEO Report, one row per image or slot:

```
## Images and Alt Text
| Slot | Alt text | Keyword used | Decorative |
|------|----------|--------------|------------|
| [location or filename] | "[alt text]" | [keyword or "none"] | [yes / no] |
```

For a decorative image, the alt text cell reads `alt=""` and the keyword cell reads "none".
