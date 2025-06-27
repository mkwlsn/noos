---
title: Remarks
slug: figma-group-remarks
source_file: plugin-api-figma-group.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-group/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9d802fddfdadf54b
token_count: 296
chunk_title: Remarks
chunk_slug: figma-group-remarks
chunk_index: 2
chunk_of_total: 4
parent_file: figma-group.md
parent_slug: figma-group
char_count: 1035
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-group-introduction
  - figma-group-signature-parameters
  - figma-group-possible-error-cases
compiler: noos-figma
---

This API is roughly the equivalent of pressing Ctrl-G/⌘G in the editor, but groups the specified list of nodes rather than the current selection. You may still, of course, group the current selection by passing it as an argument:

Group nodes```
figma.group(figma.currentPage.selection, parent)
```

##### info

Why is there no `figma.createGroup()` function? It would create an empty group, and empty groups are not supported in Figma.

##### info

Why do we require `figma.group(...)` to specify the parent, rather let you call `parent.appendChild(group)` separately? It allows you to create the new group while keeping all the grouped layers in the same absolute x/y locations. The method `.appendChild` preserves the relative position of a node, so if you use `.appendChild` to populate a group, you would need to do additional work to put them back in their original location if that was the desired behavior.

Since grouping involves moving nodes to a different parent, this operation is subject to many reparenting restrictions:
