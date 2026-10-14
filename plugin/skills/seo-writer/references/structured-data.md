# Structured Data (JSON-LD)

The SEO Report ends with a ready-to-paste JSON-LD block for the piece's schema type, filled from the draft and the Architect blueprint. This reference maps content types to schema types, gives one template per type, and sets the fill rules. Supported types: Article, BlogPosting, FAQPage, HowTo, and Review.

---

## Content Type to Schema Type

| Content type | Schema type |
|---|---|
| Article / Guide | `Article` |
| Blog post, opinion, personal essay | `BlogPosting` |
| FAQ content (question headings with direct answers) | `FAQPage` |
| How-to / Tutorial (ordered steps) | `HowTo` |
| Product or service review | `Review` |
| Comparison | `Article` (add a `Review` block per item only if the piece rates each one) |
| Anything else | `Article` (fallback) |

Pick one primary type. When a piece fits two (a how-to written as a blog post), use the type that matches its structure: ordered steps make it `HowTo`, question headings make it `FAQPage`.

Google retired HowTo rich results in 2023 and shows FAQ rich results only for a small set of authoritative sites. Both types still describe the page to search engines and other consumers, so emit them when the content fits, and say in the report that no rich result is expected.

---

## Fill Rules

1. **Take values only from the draft and the blueprint.** Headline from the H1, step names from step headings, question text from question headings, answer text from the paragraph under each question, author from frontmatter or blueprint.
2. **Never invent values.** For anything the draft does not state (author URL, publish date, image URL, publisher logo, rating), write a string that starts with `TODO:` and names the missing value, such as `"TODO: author profile URL"`. The block stays valid JSON.
3. **List every TODO in the report** under the block, so the human knows what to fill before publishing.
4. **Use plain text in text fields.** Strip Markdown from answers and step text. Keep inline commands as plain text.
5. **Validate before publishing.** The block must parse with a JSON parser (`python3 -c "import json,sys; json.load(sys.stdin)"`). Tell the human to run Google's Rich Results Test on the published page.

---

## Templates

### Article

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[H1, 110 characters or fewer]",
  "description": "[meta description]",
  "author": {
    "@type": "Person",
    "name": "[author name]",
    "url": "TODO: author profile URL"
  },
  "datePublished": "TODO: publish date (YYYY-MM-DD)",
  "image": "TODO: lead image URL"
}
```

### BlogPosting

Same properties as Article, with `"@type": "BlogPosting"`.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[H1]",
  "description": "[meta description]",
  "author": {
    "@type": "Person",
    "name": "[author name]",
    "url": "TODO: author profile URL"
  },
  "datePublished": "TODO: publish date (YYYY-MM-DD)",
  "image": "TODO: lead image URL"
}
```

### FAQPage

One `Question` per question heading, in document order.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[question heading text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[answer paragraph as plain text]"
      }
    }
  ]
}
```

### HowTo

One `HowToStep` per step, in order. Add `totalTime` (ISO 8601 duration, such as `PT10M`) only when the draft states the time.

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "[H1]",
  "description": "[meta description or opening sentence]",
  "totalTime": "PT10M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "[step heading without the 'Step N:' prefix]",
      "text": "[step instructions as plain text]"
    }
  ]
}
```

### Review

`itemReviewed` takes the most specific type the draft supports (`Product`, `SoftwareApplication`, `Book`, `Organization`); use `Thing` when unsure. Fill `reviewRating` only from a rating the draft states.

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "[reviewed item]"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "[rating from the draft, or TODO: rating]",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "[author name]"
  },
  "reviewBody": "[one-paragraph summary from the draft]"
}
```

---

## Report Format

```
## Structured Data
Schema type: [type] ([reason])

<script type="application/ld+json">
[filled JSON-LD block]
</script>

TODO values to fill before publishing:
- [property]: [what is missing]
```

If the block has no TODO values, write "TODO values: none".
