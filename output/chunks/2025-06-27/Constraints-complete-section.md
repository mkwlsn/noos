---
title: Complete Section
slug: Constraints-complete-section
source_file: plugin-api-Constraints.html
source_url: 'https://www.figma.com/plugin-docs/api/Constraints/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: dfff068ccaf15ee8
token_count: 149
chunk_title: Complete Section
chunk_slug: Constraints-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: Constraints.md
parent_slug: Constraints
char_count: 520
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# Constraints

```
interface Constraints { readonly horizontal: ConstraintType readonly vertical: ConstraintType}
```The resizing behavior of a layer when its containing frame is resized.

```
type ConstraintType = "MIN" | "CENTER" | "MAX" | "STRETCH" | "SCALE"
```The possible values of the resizing behavior of a layer when its containing frame is resized. In the UI, these are referred to as:

- "MIN": Left or Top
- "MAX": Right or Bottom
- "CENTER": Center
- "STRETCH": Left & Right or Top & Bottom
- "SCALE": Scale
