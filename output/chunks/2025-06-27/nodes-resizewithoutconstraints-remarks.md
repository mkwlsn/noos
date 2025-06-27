---
title: Remarks
slug: nodes-resizewithoutconstraints-remarks
source_file: plugin-api-nodes-resizewithoutconstraints.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-resizewithoutconstraints/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b936a5370837d797
token_count: 199
chunk_title: Remarks
chunk_slug: nodes-resizewithoutconstraints-remarks
chunk_index: 2
chunk_of_total: 3
parent_file: nodes-resizewithoutconstraints.md
parent_slug: nodes-resizewithoutconstraints
char_count: 695
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-resizewithoutconstraints-introduction
  - nodes-resizewithoutconstraints-signature-parameters
compiler: noos-figma
---

This function will not cause its children to resize. Use [`resize`](/plugin-docs/api/properties/nodes-resize/)
 if you need to apply constraints.

##### caution

⚠️ If this node is a text node with a missing font, the text node will be resized but the text will not re-layout until the next time the text node is opened on a machine that has the font. This can cause the text node to re-layout immediately and be surprising to your user. Consider checking the text node property [`hasMissingFont`](/plugin-docs/api/TextNode/#hasmissingfont)
 before using this function.

Ignores `targetAspectRatio`. If `targetAspectRatio` has been set, it will be updated to correspond to the post-resize value.
