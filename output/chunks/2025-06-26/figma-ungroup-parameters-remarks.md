---
title: Parameters + Remarks
slug: figma-ungroup-parameters-remarks
source_file: plugin-api-figma-ungroup.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-ungroup/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: b1547710ad100901
token_count: 99
chunk_title: Parameters + Remarks
chunk_slug: figma-ungroup-parameters-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-ungroup.md
parent_slug: figma-ungroup
char_count: 346
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-ungroup-introduction-signature
merged_titles:
  - Parameters
  - Remarks
compiler: noos-figma
---

### node

The node to ungroup.

This API is roughly the equivalent of pressing Ctrl-Shift-G/⌘⇧G in the editor, but ungroups the given node rather than all nodes in the current selection.

If the ungrouped node is part of the current selection, the ungrouped node's children will become part of the selection. Otherwise the selection is unchanged.
