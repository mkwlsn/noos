---
title: Signature + Remarks
slug: nodes-rotation-signature-remarks
source_file: plugin-api-nodes-rotation.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-rotation/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 3341aab80495572e
token_count: 98
chunk_title: Signature + Remarks
chunk_slug: nodes-rotation-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-rotation.md
parent_slug: nodes-rotation
char_count: 340
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-rotation-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### rotation: number

The rotation is with respect to the top-left of the object. Therefore, it is independent from the position of the object. If you want to rotate with respect to the center (or any arbitrary point), you can do so via matrix transformations and [`relativeTransform`](/plugin-docs/api/properties/nodes-relativetransform/).
