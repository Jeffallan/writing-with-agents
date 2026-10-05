# Capture Note Template

This template defines the full frontmatter and body structure for research-source notes created by the `/writing-with-agents:capture` command.

---

## Frontmatter Template

Always use the complete template. Never omit fields — leave them empty if unknown.

```yaml
---
# Universal
title: "[Source Title]"
author: "[Author Name]"
date_created: "[ISO date of note creation]"
date_modified: "[ISO date, same as created initially]"
type: research-source
status: seed

# Publication
source_url: "[URL if applicable]"
source_type: "[article | paper | documentation | video | podcast | book | other]"
publication_date: "[Date of original publication if known]"
publisher: "[Publisher or platform name]"

# Obsidian-specific
aliases: []
tags: []
cssclass: research-source

# Flowers workflow
flowers_domain: "[Domain topic this relates to]"
flowers_phase: "intake"
flowers_content_plan: ""
flowers_articles_used_in: []

# Source/Content fields
key_claims_count: 0
open_questions_count: 0
relevance_score: "[high | medium | low]"

# Relationship fields
related_sources: []
related_notes: []
contradicts: []
supports: []
---
```

---

## Body Sections

Always include all 6 sections in this order. Populate based on content analysis.

### Section 1: Key Claims

```markdown
## Key Claims

- [Claim 1 — the most important assertion from the source]
- [Claim 2]
- [Claim 3]
- [Additional claims as warranted]
```

Extract the source's primary arguments, findings, or assertions. Be specific — "OAuth 2.0 is insufficient for identity verification in regulated industries" not "talks about identity verification."

### Section 2: Architecture/Method

```markdown
## Architecture/Method

[Describe the structure, methodology, or framework presented in the source. For technical content, describe the architecture. For research, describe the methodology. For opinion pieces, describe the argument structure.]
```

### Section 3: Relevance to My Work

```markdown
## Relevance to My Work

[Personalized based on user's answer to "What are you working on?" — connect the source material to their specific project, article, or research direction. Be concrete about how this source could inform their work.]
```

This section differentiates a Flowers research note from a generic bookmark. It captures why this source matters to the user's current work.

### Section 4: Notable Quotes

```markdown
## Notable Quotes

> "[Direct quote from source]"
> — [Attribution]

> "[Another notable quote]"
> — [Attribution]
```

Select 2-5 quotes that are particularly well-phrased, contain key insights, or would make strong citations in a future article.

### Section 5: Linked Resources

```markdown
## Linked Resources

- [Resource 1 — title and URL if available]
- [Resource 2]
```

Capture any resources referenced by or related to this source that might be worth capturing separately.

### Section 6: Open Questions

```markdown
## Open Questions

- [Question 1 — what does this source leave unanswered?]
- [Question 2 — what contradictions or gaps does it surface?]
```

Identify gaps, contradictions, or follow-up research directions suggested by this source.

---

## Example Output

```markdown
---
title: "API-First Identity Verification for Regulated Industries"
author: "Jane Smith"
date_created: "2026-02-08"
date_modified: "2026-02-08"
type: research-source
status: seed
source_url: "https://example.com/api-first-identity"
source_type: article
publication_date: "2026-01-15"
publisher: "TechCrunch"
aliases: []
tags: [identity-verification, fintech, api, regulation]
cssclass: research-source
flowers_domain: "identity verification in fintech"
flowers_phase: "intake"
flowers_content_plan: ""
flowers_articles_used_in: []
key_claims_count: 4
open_questions_count: 2
relevance_score: high
related_sources: []
related_notes: []
contradicts: []
supports: []
---

## Key Claims

- Traditional KYC processes take 48+ hours and lose 23% of applicants to abandonment
- API-first verification platforms reduce onboarding time to under 5 minutes
- Verifiable credentials standard (W3C) enables portable identity across platforms
- Regulatory fragmentation (SOC 2, HIPAA, KYC) drives demand for unified orchestration

## Architecture/Method

Presents a three-layer verification architecture: authentication (OIDC/OAuth), credential verification (W3C VCs), and compliance orchestration (regulation-specific rules engine). Argues for API-first approach over embedded widget pattern.

## Relevance to My Work

Directly supports the pillar article on identity verification in regulated industries. The three-layer architecture maps well to the Technical Architecture branch of the domain whirlybird. The abandonment statistics strengthen the business case section.

## Notable Quotes

> "Identity verification isn't a feature — it's infrastructure. Every transaction on your platform flows through it."
> — Jane Smith

> "The companies winning in regulated fintech aren't the ones with the best verification UI. They're the ones with the best verification API."
> — Jane Smith

## Linked Resources

- W3C Verifiable Credentials Data Model 2.0 — https://www.w3.org/TR/vc-data-model-2.0/
- NIST SP 800-63-4 Digital Identity Guidelines — referenced but not linked

## Open Questions

- How does the verifiable credentials model handle revocation at scale?
- What's the actual compliance cost reduction — article claims "significant" but doesn't quantify
```
