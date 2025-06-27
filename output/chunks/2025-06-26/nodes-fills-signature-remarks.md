---
title: Signature + Remarks
slug: nodes-fills-signature-remarks
source_file: plugin-api-nodes-fills.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-fills/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 1d4addbba071f013
token_count: 143
chunk_title: Signature + Remarks
chunk_slug: nodes-fills-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-fills.md
parent_slug: nodes-fills
char_count: 500
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-fills-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### fills: ReadonlyArray | figma.mixed

This property can return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/) if the node has multiple sets of fills. Text nodes can have multiple sets of fills if some characters are colored differently than others.

Use [`solidPaint`](/plugin-docs/api/properties/figma-util-solidpaint/) to create solid paint fills with CSS color strings.

Page nodes have a [`backgrounds`](/plugin-docs/api/PageNode/#backgrounds) property instead of a `fills` property.
