---
title: Signature + Remarks
slug: nodes-cornerradius-signature-remarks
source_file: plugin-api-nodes-cornerradius.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-cornerradius/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 8d5a88f9e25e6b5e
token_count: 149
chunk_title: Signature + Remarks
chunk_slug: nodes-cornerradius-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-cornerradius.md
parent_slug: nodes-cornerradius
char_count: 521
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-cornerradius-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### cornerRadius: number | figma.mixed

This value must be non-negative and can be fractional. If an edge length is less than twice the corner radius, the corner radius for each vertex of the edge will be clamped to half the edge length.

This property can return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/) if different vertices have different values.properties. Vector nodes can have individual corner radii on each vertex. Rectangle nodes can also have different corner radii on each of the four corners.
