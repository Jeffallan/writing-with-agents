# Production Tracking

This reference describes how to track production status across multiple articles in a content plan, identify cross-article efficiencies, and manage the lifecycle of a multi-article content initiative.

---

## Production Status Format

Track every article in the content plan using the following table:

```markdown
## Production Status

| # | Article | Type | Phase | Status | Last Updated | Link |
|---|---------|------|-------|--------|-------------|------|
| 1 | [Pillar title] | Pillar | Judge | Complete | [date] | [link to draft] |
| 2 | [Cluster A title] | Cluster | Carpenter | In progress | [date] | -- |
| 3 | [Cluster B title] | Cluster | Madman | In progress | [date] | -- |
| 4 | [Cluster C title] | Cluster | Not started | Queued | -- | -- |
| 5 | [Targeted piece title] | Targeted | Not started | Blocked (waiting on Cluster A) | -- | -- |
```

### Phase Values

| Phase | Meaning |
|-------|---------|
| Not started | Article is planned but no work has begun |
| Research-intake | Additional research needed before Madman phase |
| Madman | Raw material generation in progress |
| Whirlybird | Nonlinear outlining and center-of-gravity selection |
| Architect | Structure and throughline development |
| Carpenter | Prose construction from blueprint |
| Judge | Detection passes and editing |
| Quality-rubric | Final quality scoring |
| Complete | Published or ready for publication |

### Status Values

| Status | Meaning |
|--------|---------|
| Queued | Waiting for its turn in the production order |
| In progress | Currently being worked on in the indicated phase |
| In review | Waiting for human decision or approval |
| Blocked | Cannot proceed until a dependency is resolved |
| Complete | Finished and ready for publication or published |
| Rework | Sent back to a prior phase by quality-rubric |

---

## Cross-Article Efficiencies

When producing multiple articles from the same research corpus, several efficiencies apply:

### Shared Research Corpus

All articles draw from the same knowledge map and gap-fill research. When entering the Madman phase for any article:

1. Start with the subset of the knowledge map relevant to that article's branch
2. Include any gap-fill notes that address topics in the article's scope
3. The Madman still generates 3-5x raw material, but the seed is richer because the research corpus already exists

This eliminates redundant research across articles. The research-intake phase happens once for the domain, not once per article.

### Pillar-First Strategy

Writing the pillar article first provides three efficiencies for downstream cluster articles:

1. **Framework established.** The pillar defines the domain framework, terminology, and argument structure. Cluster articles adopt this framework rather than inventing their own.

2. **Linking structure ready.** The pillar creates anchor points that cluster articles link back to. Without the pillar, cross-linking requires retroactive insertion.

3. **Gaps surfaced early.** The pillar writing process reveals which branches have strong material and which need additional research before their cluster article is started.

### Cross-Linking During Production

As each article is completed, update the cross-linking strategy:

```markdown
## Cross-Link Status

| Link | From Article | To Article | Status |
|------|-------------|------------|--------|
| Section 2 deep dive | Pillar | Cluster A | Inserted (Cluster A complete) |
| Context reference | Cluster A | Pillar | Inserted |
| Dependency link | Cluster B | Cluster A | Pending (Cluster B in Carpenter) |
| Sub-topic link | Cluster A | Targeted 1 | Pending (Targeted 1 not started) |
```

Links are inserted in both directions when both articles exist. When only one article is complete, note the pending link for insertion when the other article is finished.

### Article-Level Whirlybird Scoping

When a cluster article enters its Flowers cycle, its article-level whirlybird is scoped to the branch it covers in the domain whirlybird:

- **Center:** The branch label from the domain whirlybird
- **Branches:** The feathers from that domain whirlybird branch
- **Additional feathers:** New material generated during the article's Madman phase

This scoping prevents the article-level whirlybird from sprawling into adjacent branches that belong to other cluster articles.

---

## Production Update Protocol

Update the production status tracker at each phase transition:

1. **Phase start:** Update the Phase column when an article enters a new phase
2. **Phase complete:** Update Status to "In review" when awaiting human approval
3. **Human decision:** Update Status to "In progress" (next phase) or "Rework" (return to prior phase)
4. **Completion:** Update Status to "Complete" and add the link to the finished draft
5. **Cross-links:** Update the cross-link status table when links are inserted or become possible

### Update Trigger Points

The tracker should be updated when:

- An article moves from one Flowers phase to the next
- A quality-rubric evaluation sends an article back for rework
- A cross-link becomes insertable because both articles are now complete
- The human requests a status overview
- Production order changes based on new information or priorities

---

## Completion Criteria

The content initiative is complete when:

- [ ] All planned articles show "Complete" status
- [ ] All cross-links are inserted in both directions
- [ ] The pillar article links to every cluster article
- [ ] Every cluster article links back to the pillar
- [ ] Targeted pieces link to their parent clusters
- [ ] The knowledge-harvester has captured artifacts back to the vault (if applicable)
- [ ] The human has approved the final state of all articles
