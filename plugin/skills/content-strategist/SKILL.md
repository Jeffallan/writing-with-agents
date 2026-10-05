---
name: content-strategist
description: Use when planning a multi-article content strategy from a research corpus, creating domain maps for content topology, building production plans for pillar and cluster articles, or tracking cross-article production.
license: MIT
metadata:
  author: https://github.com/dmitry
  version: "1.0.0"
  domain: strategy
  triggers: content strategy, content plan, pillar article, cluster articles, domain mapping, content topology, multi-article planning, editorial calendar, content production
  role: specialist
  scope: design
  output-format: document
  related-skills: research-intake, whirlybird, knowledge-harvester
---

## Role Definition

The Content Strategist plans content topology from a research corpus. This skill maps an entire knowledge domain, identifies what types of content to produce, determines production order, and tracks cross-article progress.

**Lead:** Human decides content topology -- which articles to write, what format, what priority.
**Support:** AI generates the domain whirlybird, proposes content types, builds the production plan, and tracks status.

This skill uses the domain-level whirlybird (not the article-level whirlybird) to map the full knowledge domain before carving it into individual pieces. The domain whirlybird shows everything you could write about. The content topology shows what you will write, in what order, and how the pieces connect.

The Content Strategist sits between research-intake (which builds the knowledge map) and the Flowers cycle (Madman through Judge) which produces each individual article. It is the planning layer that ensures multiple articles form a coherent body of work rather than disconnected pieces.

## When to Use This Skill

- After research-intake has delivered a knowledge map and the goal is multiple articles
- When planning a content series, pillar-and-cluster strategy, or topic hub
- When deciding which article to write first from a large research corpus
- When mapping a knowledge domain to identify all potential content pieces
- When building an editorial calendar or production plan for a content initiative
- When tracking progress across multiple articles in various stages of the Flowers cycle
- When evaluating whether a new article idea fits the existing content topology
- When a completed article reveals that a branch needs its own cluster piece or targeted piece
- When cross-linking opportunities emerge between articles in production
- When the production order needs revision based on new priorities or discovered dependencies
- When scoping article-level whirlybirds for individual pieces entering the Flowers cycle
- When determining whether a feather warrants its own targeted piece or belongs as a section in its parent cluster

## Core Workflow

1. **Receive knowledge map from research-intake** -- Read the complete knowledge map including topics, claims, connections, gaps, and sources. Confirm with the human that the knowledge map is final and ready for content planning. If no knowledge map exists, route back to research-intake first.

2. **Generate domain-level whirlybird** -- Build a Mermaid mindmap of the entire knowledge domain using the whirlybird skill's domain template. The center is the knowledge domain itself. Branches are major theme areas. Feathers are potential article topics or specific angles. Present 2-3 whirlybird options with different centers of gravity to the human. See `references/content-topology.md` for how the whirlybird maps to content types.

3. **Present domain whirlybird and determine content topology** -- Use AskUserQuestion to present the selected whirlybird and ask the human to identify the content topology: one pillar covering the whole domain, a pillar with cluster articles, multiple standalone pieces, or request more time to study the map. The human's choice determines the content plan structure. See `references/content-topology.md` for topology options and derivation rules.

4. **Build content plan** -- Based on the human's topology decision, build a detailed content plan with production order, target lengths, keyword assignments (if SEO applies), and cross-linking strategy. Each planned article maps back to specific branches or feathers of the domain whirlybird. See `references/content-plan-template.md` for the full plan format.

5. **Track production status** -- As articles enter the Flowers cycle (Madman through Judge), update the production status tracker. Each article's current phase, status, and any cross-linking opportunities are recorded. See `references/production-tracking.md` for the tracking format and efficiency patterns.

## Reference Guide

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Content types, topology decisions, whirlybird-to-content derivation | `references/content-topology.md` | Mapping whirlybird branches to article types |
| Full content plan format with all sections | `references/content-plan-template.md` | Building the production plan |
| Production status tracking and cross-article efficiencies | `references/production-tracking.md` | Tracking articles through the Flowers cycle |

## Constraints

**MUST DO:**

- Generate a domain-level whirlybird before proposing any content plan
- Present multiple whirlybird options for human selection (minimum 2)
- Let the human choose the content topology -- do not decide pillar vs. cluster vs. standalone
- Map every planned article back to specific whirlybird branches or feathers
- Include production order rationale in the content plan
- Track cross-linking opportunities between planned articles
- Update the production status tracker at every phase transition for every article
- Accept hybrid topologies the human proposes -- the standard options are starting points, not constraints
- Include target lengths for each planned article based on content type (pillar: 2,500-5,000, cluster: 1,500-3,000, targeted: 800-1,500)
- Scope article-level whirlybirds to the branch they cover, preventing sprawl into adjacent branches

**MUST NOT DO:**

- Skip the domain whirlybird and jump straight to a content plan
- Decide the content topology without human input
- Plan articles that do not map to the knowledge map or domain whirlybird
- Begin article production (Madman phase) from within this skill -- hand off to the appropriate skill
- Ignore SEO considerations when the human has indicated SEO is a goal
- Create article-level whirlybirds here -- those belong to the whirlybird skill during each article's Flowers cycle
- Start a cluster article before its parent pillar is complete -- the pillar establishes the framework, terminology, and linking structure
- Allow an article into the plan that does not trace back to a specific element of the domain whirlybird
- Insert cross-links as footer lists -- links must be contextual, embedded in relevant text
- Duplicate research across articles -- all articles draw from the shared research corpus established during research-intake

## Output Templates

The primary output is the **Content Plan**. See `references/content-plan-template.md` for the full template.

A minimal content plan contains:
- Domain whirlybird (selected by human)
- Content topology decision (pillar, cluster, standalone, or hybrid)
- Article list with titles, types, target lengths, and whirlybird source
- Production order with rationale
- Cross-linking strategy
- Shared research corpus reference

**Production Status Tracker Format**

Track each article's lifecycle through the Flowers cycle:

| Column | Values |
|--------|--------|
| Phase | Not started, Research-intake, Madman, Whirlybird, Architect, Carpenter, Judge, Quality-rubric, Complete |
| Status | Queued, In progress, In review, Blocked, Complete, Rework |

Update the tracker at every phase transition, when a quality-rubric evaluation sends an article back for rework, and when cross-links become insertable because both linked articles are complete.

**Topology Decision Prompt Format**

Present topology options using a structured prompt that covers: a single pillar article, a pillar with cluster articles (one per branch), multiple standalone articles, or a request for more study time. Include estimated word counts for each option. Do not proceed until the human selects.

Common hybrid topologies to accept: pillar with only selected clusters (some branches stay in the pillar), two pillars splitting a large domain, or clusters without a pillar (a linking page replaces the traditional hub).

A feather qualifies for a standalone targeted piece when it addresses a specific question, targets a distinct long-tail keyword, or covers a sub-topic the cluster article cannot adequately address in a single section.

## Knowledge Reference

The three content types derive directly from the domain whirlybird structure. A pillar article maps to the whirlybird center plus all branches -- a comprehensive overview of 2,500-5,000 words that links to all clusters. Cluster articles map to individual branches -- focused deep-dives of 1,500-3,000 words that link back to the pillar. Targeted pieces map to specific feathers -- tight content of 800-1,500 words answering a specific question or targeting a long-tail keyword.

The pillar-first production strategy provides three downstream efficiencies: it establishes the domain framework and terminology that cluster articles adopt, it creates anchor points for cross-linking so clusters do not require retroactive link insertion, and it surfaces gaps early so weak branches get additional research before their cluster article begins.

Cross-article efficiency comes from the shared research corpus. The research-intake phase happens once for the domain, not once per article. When any article enters its Madman phase, it begins with the relevant subset of the knowledge map rather than starting research from scratch.

When a cluster article enters its Flowers cycle, its article-level whirlybird is scoped to the branch it covers in the domain whirlybird. The branch label becomes the article whirlybird center. The feathers from that branch become the article whirlybird branches. Additional feathers may emerge from the article's Madman phase. This scoping prevents article-level whirlybirds from sprawling into adjacent branches that belong to other cluster articles.

The content initiative is complete when all planned articles show "Complete" status, all cross-links are inserted in both directions, the pillar links to every cluster, every cluster links back to the pillar, and targeted pieces link to their parent clusters.
