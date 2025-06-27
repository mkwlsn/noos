---
title: Signature + Remarks
slug: nodes-strokealign-signature-remarks
source_file: plugin-api-nodes-strokealign.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-strokealign/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6a5ab4d534cda3ff
token_count: 151
chunk_title: Signature + Remarks
chunk_slug: nodes-strokealign-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-strokealign.md
parent_slug: nodes-strokealign
char_count: 527
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-strokealign-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### strokeAlign: 'CENTER' | 'INSIDE' | 'OUTSIDE'

Center-aligned stroke means the center of the stroke falls exactly on the geometry. Inside-aligned stroke shifts the stroke so it lies completely inside the shape, and outside-aligned stroke is vice versa.

##### info

Inside and outside stroke are actually implemented by doubling the stroke weight and masking the stroke by the fill. This means inside-aligned stroke will never draw strokes outside the fill and outside-aligned stroke will never draw strokes inside the fill.
