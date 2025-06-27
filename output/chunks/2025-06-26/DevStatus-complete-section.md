---
title: Complete Section
slug: DevStatus-complete-section
source_file: plugin-api-DevStatus.html
source_url: 'https://www.figma.com/plugin-docs/api/DevStatus/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 6c204177efe5b287
token_count: 220
chunk_title: Complete Section
chunk_slug: DevStatus-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: DevStatus.md
parent_slug: DevStatus
char_count: 770
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# DevStatus

```
type DevStatus = { type: "READY_FOR_DEV" | "COMPLETED", description?: string} | null
````DevStatus` represents whether or not a node has a particular handoff (or dev) status applied to it. A `null` value represents no status, and the `type` field represents the type of status the node has.

A node can have the statuses:

- `"READY_FOR_DEV"`, indicating that the node's contents are ready to be implemented by a developer
- `"COMPLETED"`, indicating that dev work for the design is done

Description is an optional field where the designer can add more information about the design and what has changed.

##### caution

Note: currently, the plugin API does not reflect if a node has been changed since a status was set, but this can be seen in the app.
