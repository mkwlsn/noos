---
title: Signature + Remarks
slug: figma-createbooleanoperation-signature-remarks
source_file: plugin-api-figma-createbooleanoperation.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createbooleanoperation/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: fdfe56df4da41967
token_count: 192
chunk_title: Signature + Remarks
chunk_slug: figma-createbooleanoperation-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-createbooleanoperation.md
parent_slug: figma-createbooleanoperation
char_count: 669
heading_level: h2
chunk_type: tutorial
merge_type: merged
tags: []
sibling_chunks:
  - figma-createbooleanoperation-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### createBooleanOperation(): BooleanOperationNode

Using this function is not recommended because empty boolean operation nodes can have surprising, unpredictable behavior. It will eventually be remove. Use one of the functions listed above instead.

Creates a new, empty boolean operation node. The particular kind of operation is set via `.booleanOperation`. By default, the value is `"UNION"`.

This snippet, for example, creates a boolean operation node that is a union of a rectangle and an ellipse.

Create a boolean operation node```
const node = figma.createBooleanOperation()node.appendChild(figma.createRectangle())node.appendChild(figma.createEllipse())
```
