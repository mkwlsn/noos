---
title: Signature + Remarks
slug: nodes-primaryaxissizingmode-signature-remarks
source_file: plugin-api-nodes-primaryaxissizingmode.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-primaryaxissizingmode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ee0bd8905ed54cdd
token_count: 274
chunk_title: Signature + Remarks
chunk_slug: nodes-primaryaxissizingmode-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-primaryaxissizingmode.md
parent_slug: nodes-primaryaxissizingmode
char_count: 959
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-primaryaxissizingmode-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### primaryAxisSizingMode: 'FIXED' | 'AUTO'

Auto-layout frames have a primary axis, which is the axis that resizes when you add new items into the frame. For example, frames with "VERTICAL" [`layoutMode`](/plugin-docs/api/properties/nodes-layoutmode/)
 resize in the y-axis.

- `"FIXED"`: The primary axis length is determined by the user or plugins, unless the `layoutAlign` is set to “STRETCH” or `layoutGrow` is 1.
- `"AUTO"`: The primary axis length is determined by the size of the children. If set, the auto-layout frame will automatically resize along the counter axis to fit its children.

Note: `“AUTO”` should not be used in any axes where [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/)
 = “STRETCH” or [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/)
 = 1. Either use `“FIXED”` or disable [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/)
/[`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/)
.
