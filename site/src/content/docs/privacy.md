---
title: Privacy Policy
description: How the Writing With Agents plugin and its documentation site handle information
---

**Effective:** May 1, 2026

This privacy policy describes how the **Writing With Agents** plugin (`writing-with-agents`) and its companion documentation site at `https://jeffallan.github.io/writing-with-agents/` handle information.

The plugin and documentation site are maintained by [@jeffallan](https://github.com/jeffallan) as an individual open-source project. This is a personal project and is not a product or service of Synergetic Solutions or any other entity.

## 1. The Plugin

The plugin distributes static content: markdown skill files, slash command templates, and reference documents. When you install the plugin in Claude Code or another compatible host, the plugin:

- **Does not collect, transmit, or store any personal information.**
- **Does not make network requests on your behalf.**
- **Does not include telemetry, analytics, or usage tracking of any kind.**
- **Runs entirely within your local Claude environment.** All file reads, prompts, and tool calls happen within your existing Claude host process.

Any data your Claude host sends to Anthropic during a session (prompts, tool results, etc.) is governed by Anthropic's privacy policy, not this one. The plugin itself adds no additional data collection.

## 2. Local Content and Your Knowledge Vault

Several skills and commands in this plugin (for example `/capture` and the `knowledge-harvester` skill) read from local files or URLs you provide and write generated material (research notes, outlines, drafts, mindmaps) to a **knowledge vault directory you configure**. This vault is a regular directory on your own machine.

The plugin does not transmit your vault contents anywhere. Read and write operations are performed by your Claude host's built-in file and web tools, governed by your host's permissions model. If a workflow fetches a URL you supply, that fetch is performed by your Claude host (subject to its privacy policy), not by the plugin.

## 3. MCP Server Integrations

This plugin does not require, bundle, run, or proxy any [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server. If you choose to configure MCP servers in your Claude host alongside this plugin (for example, to access a notes database or an external research source):

- The MCP server runs in your local environment under your configuration and credentials.
- Any data sent to the MCP server, and any data the MCP server forwards to a third-party vendor, is governed by **that vendor's privacy policy**, not this one.
- This project has no visibility into, and assumes no responsibility for, the data flow between your MCP server and the underlying service.

Before configuring an MCP server, review the privacy policy of the vendor whose service it accesses.

## 4. The Documentation Site

The documentation site at `https://jeffallan.github.io/writing-with-agents/` uses the following third-party services:

| Service | Purpose | Data involved |
|---|---|---|
| GitHub Pages | Static site hosting | IP addresses logged in standard server access logs, governed by [GitHub's privacy policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) |
| Google Analytics 4 (`G-QS4KFCN3S4`) | Aggregate page-view and session metrics | Cookies, page URL, referrer, approximate geolocation derived from IP, browser/device info; governed by [Google's privacy policy](https://policies.google.com/privacy) |
| jsDelivr CDN | Loads the Mermaid diagram library on pages that render diagrams | IP address logged in CDN access logs; governed by [jsDelivr's privacy policy](https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net) |

To opt out of Google Analytics, you can use the [Google Analytics opt-out browser add-on](https://tools.google.com/dlpage/gaoptout), enable browser privacy features such as Do Not Track, or use any standard ad/tracker blocker. The site functions normally with these enabled.

## 5. GitHub Repository Interactions

If you file an issue, open a pull request, post in discussions, or otherwise interact with the project's [GitHub repository](https://github.com/Jeffallan/writing-with-agents), GitHub processes that interaction under [GitHub's privacy policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Information you post publicly on GitHub remains public.

## 6. Contact

All privacy questions, sensitive disclosures, data subject requests, and other inquiries related to this project should be sent through the contact form on the maintainer's personal site:

[https://jeffallan.github.io/#ContactMe](https://jeffallan.github.io/#ContactMe)

Form submissions are processed by [Formspree](https://formspree.io/legal/privacy-policy/), a third-party form-handling service. Their privacy policy applies to the form-submission step.

## 7. Sale of Personal Information

This project does not sell, rent, or trade personal information. No personal information is collected by the plugin itself, and the documentation site's third-party services are used solely for hosting and aggregate site analytics as described in section 4.

## 8. Children

This project is not directed at children under 13 (or the equivalent minimum age in your jurisdiction). No information is intentionally collected from children.

## 9. Changes to This Policy

If this policy changes materially, the updated version will be published at this URL with a new effective date. Material changes will also be noted in the project's [CHANGELOG.md](https://github.com/Jeffallan/writing-with-agents/blob/main/CHANGELOG.md).
