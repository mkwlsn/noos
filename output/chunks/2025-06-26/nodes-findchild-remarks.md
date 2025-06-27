---
title: Remarks
slug: nodes-findchild-remarks
source_file: plugin-api-nodes-findchild.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findchild/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: a82314af1be22ff6
token_count: 64
chunk_title: Remarks
chunk_slug: nodes-findchild-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-findchild.md
parent_slug: nodes-findchild
char_count: 223
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findchild-introduction
compiler: noos-figma
---

This function returns `null` if no matching node is found.

Example: find the first frame that is an immediate child of the current page.

```
const firstChildFrame = figma.currentPage.findChild(n => n.type === "FRAME")
```
