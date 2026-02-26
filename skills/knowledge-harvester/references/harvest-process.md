# Knowledge Harvest Process

This reference details what artifacts to capture, the feedback loop concept, and the step-by-step process for identifying, cataloging, and presenting artifacts for vault capture.

---

## The Feedback Loop

The knowledge harvester exists to close a loop that most content creation workflows leave open:

```
Vault --> Research Intake --> Content Creation --> Knowledge Harvest --> Vault (enriched)
```

Without the harvest step, research gathered during content creation evaporates. Sources are found, used, and forgotten. Connections are synthesized, applied to one article, and lost. Domain maps are built, used for planning, and discarded.

With the harvest step, every content creation cycle makes the vault denser and more valuable. The next time you write about this domain or an adjacent one, the research corpus is richer, the connections are documented, and the sources are cataloged with metadata.

### Compound Returns

Each cycle through the loop produces compound returns:

- **Cycle 1:** Vault has scattered notes. Research-intake builds a knowledge map. Content is produced. Harvest captures 10 sources, 5 connections, 1 domain map.
- **Cycle 2:** Vault now has structured sources. Research-intake finds them immediately. Gap analysis is faster because existing coverage is clear. Harvest captures 8 new sources, 12 connections (including cross-cycle links).
- **Cycle 3:** Vault is dense enough that some articles require minimal new research. The knowledge map reveals new angles from accumulated connections. Each cycle builds on the last.

The value is not in any single artifact but in the accumulation over multiple cycles.

---

## What to Capture

Four categories of artifacts emerge from a content creation cycle. Not every cycle produces all four, and the human decides which artifacts from each category have lasting value.

### 1. Research Sources

Sources discovered during the research-intake gap-filling process. These are external references that informed the content.

**What to capture for each source:**
- Title, author, URL, and access date
- Key claims extracted from the source
- Which articles the source informed
- How the source connects to other vault notes
- Relevance assessment: how central was this source to the content?

**When to capture:** After gap-filling research is validated during research-intake, or after the Flowers cycle reveals that a source was particularly valuable.

**When NOT to capture:** If the source was consulted but did not meaningfully inform the content. Not every search result deserves a vault note. Capture sources that you would want to find again.

### 2. Synthesized Connections

Insights that emerged during content creation that were not present in any single source. These are the cross-domain links, contradictions, patterns, and novel framings that the writing process surfaced.

**What to capture for each connection:**
- The connection itself (what relates to what, and how)
- Which sources or vault notes are connected
- Which article surfaced this connection
- Whether the connection is confirmed (supported by evidence) or hypothesized (identified during writing but not yet verified)

**When to capture:** After the Architect phase (which identifies connections during triage) or after the Judge phase (which may surface connections during detection passes).

**When NOT to capture:** If the connection is trivial or obvious within the domain. Capture connections that would be valuable to rediscover.

### 3. Domain Maps

Whirlybirds (Mermaid mindmaps) created during the content-strategist phase. These are spatial representations of the knowledge domain that have value as persistent reference artifacts.

**What to capture for each domain map:**
- The Mermaid mindmap diagram
- The center of gravity and what it means
- Which articles were derived from which branches
- Date created and whether the map is current or superseded

**When to capture:** After the content-strategist phase completes and production begins. The domain whirlybird is a snapshot of the domain understanding at a point in time.

**When NOT to capture:** If the domain whirlybird was a rough draft that was immediately superseded by a better version. Capture the version the human selected and used for planning.

### 4. Article Backlinks

Links from produced articles back to the source notes and research that informed them. These backlinks create bidirectional navigation: from a vault note, you can see which articles it informed; from an article, you can trace back to its sources.

**What to capture for each backlink:**
- The produced article title and location
- Which vault notes or sources informed it
- Which branch of the domain whirlybird it came from
- Publication date and status

**When to capture:** After an article completes the Flowers cycle (Judge phase complete, or quality-rubric passes).

**When NOT to capture:** If the article was abandoned or the content was merged into another piece. Capture backlinks for completed, published, or publication-ready content.

---

## Artifact Identification Process

After a content creation cycle completes (or at any point the human requests a harvest), walk through the following steps to identify what to capture:

### Step 1: Review Research-Intake Outputs

- Scan the knowledge map for sources cataloged during intake
- Check gap-fill notes for sources discovered during research
- Identify any connections that were documented in the knowledge map

### Step 2: Review Content-Strategist Outputs

- Locate the selected domain whirlybird
- Note which articles were planned and which branches they map to
- Check for strategic decisions documented during topology selection

### Step 3: Review Flowers Cycle Outputs

- For each completed article, identify the sources it drew from
- Check the Architect blueprint for connections identified during triage
- Check the Judge report for insights surfaced during detection passes
- Note any new research conducted during the Madman phase

### Step 4: Build the Artifact Catalog

Compile all identified artifacts into a catalog table:

```markdown
| # | Artifact | Type | Source Phase | Vault Value |
|---|----------|------|-------------|-------------|
| 1 | [description] | Research source | Research-intake | [why this is worth keeping] |
| 2 | [description] | Synthesis note | Architect | [why this is worth keeping] |
| 3 | [description] | Domain map | Content-strategist | [why this is worth keeping] |
| 4 | [description] | Article backlink | Judge | [why this is worth keeping] |
```

### Step 5: Present Catalog to Human

Use AskUserQuestion to present the catalog and ask the human to approve, modify, or reject each artifact. The human may:

- Approve all artifacts
- Select specific artifacts by number
- Modify proposed filenames, tags, or connections
- Add artifacts the AI missed
- Reject artifacts that do not have lasting value

Do not write any files until the human responds.

---

## Batch Processing

When the artifact count is large (more than 10), present a summary rather than individual previews:

```markdown
I identified [N] artifacts to capture:
- [X] research sources
- [Y] synthesis notes
- [Z] domain maps
- [W] article backlinks

Would you like to:
A) Review each artifact individually before capture
B) Review a summary of each category, then approve by category
C) Approve all and I will write them with standard formatting
D) Select specific categories to capture (skip others)
```

For option A, present artifacts one at a time. For option B, show one example from each category plus a list of titles. For option C, proceed with capture using standard formatting from `vault-format.md`.
