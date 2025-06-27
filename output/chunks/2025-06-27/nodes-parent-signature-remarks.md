---
title: Signature + Remarks
slug: nodes-parent-signature-remarks
source_file: plugin-api-nodes-parent.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-parent/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6348aeb7d279673e
token_count: 114
chunk_title: Signature + Remarks
chunk_slug: nodes-parent-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-parent.md
parent_slug: nodes-parent
char_count: 397
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-parent-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### parent: (BaseNode & ChildrenMixin) | null [readonly]

The root node (i.e. `figma.root`) doesn't have a parent.

Components accessed via [`instance.getMainComponentAsync()`](/plugin-docs/api/InstanceNode/#getmaincomponentasync)
 or [`instance.mainComponent`](/plugin-docs/api/InstanceNode/#maincomponent)
 do not always have a parent. They could be remote components or soft-deleted components.
