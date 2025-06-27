---
title: Signature + Remarks
slug: nodes-layoutwrap-signature-remarks
source_file: plugin-api-nodes-layoutwrap.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-layoutwrap/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 4441e7d19d60eba7
token_count: 124
chunk_title: Signature + Remarks
chunk_slug: nodes-layoutwrap-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-layoutwrap.md
parent_slug: nodes-layoutwrap
char_count: 432
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-layoutwrap-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### layoutWrap: 'NO_WRAP' | 'WRAP'

This property can only be set on layers with `layoutMode === "HORIZONTAL"`. Setting it on layers without this property will throw an Error.

This property must be set to `"WRAP"` in order for the [`counterAxisSpacing`](/plugin-docs/api/properties/nodes-counteraxisspacing/)
 and [`counterAxisAlignContent`](/plugin-docs/api/properties/nodes-counteraxisaligncontent/)
 properties to be applicable.
