---
title: Remarks
slug: nodes-resize-remarks
source_file: plugin-api-nodes-resize.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-resize/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9bc9235547334eb6
token_count: 254
chunk_title: Remarks
chunk_slug: nodes-resize-remarks
chunk_index: 2
chunk_of_total: 3
parent_file: nodes-resize.md
parent_slug: nodes-resize
char_count: 887
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-resize-introduction
  - nodes-resize-signature-parameters
compiler: noos-figma
---

Since this function applies constraints recursively (when there are multiple levels of nested frames with constraints), calls to this function could be expensive. Use [`resizeWithoutConstraints`](/plugin-docs/api/properties/nodes-resizewithoutconstraints/)
 if you don't need to apply constraints.

##### caution

⚠️ If this node is a text node with a missing font or contains a text node with a missing font, the text node will be resized but the text will not re-layout until the next time the text node is opened on a machine that has the font. This can cause the text node to re-layout immediately and be surprising to your user. Consider checking if the document [`figma.hasMissingFont`](/plugin-docs/api/figma/#hasmissingfont)
 before using this function.

Ignores `targetAspectRatio`. If `targetAspectRatio` has been set, it will be updated to correspond to the post-resize value.
