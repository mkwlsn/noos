---
title: Signature + Parameters
slug: figma-group-signature-parameters
source_file: plugin-api-figma-group.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-group/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 05e5ddfb2047b527
token_count: 223
chunk_title: Signature + Parameters
chunk_slug: figma-group-signature-parameters
chunk_index: 1
chunk_of_total: 4
parent_file: figma-group.md
parent_slug: figma-group
char_count: 780
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-group-introduction
  - figma-group-remarks
  - figma-group-possible-error-cases
merged_titles:
  - Signature
  - Parameters
compiler: noos-figma
---

### group(nodes: ReadonlyArray, parent: BaseNode & ChildrenMixin, index?: number): GroupNode

### nodes

The list of nodes in the new group. This list must be non-empty as Figma does not support empty groups. This list cannot include any node that cannot be reparented, such as children of instances.

### parent

The node under which the new group will be created. This is similar to `parent.appendChild(group)`, but must be specified at the time that the group is created rather than later.

### index

An optional index argument that specifies where inside `parent` the new group will be created. When this argument is not provided, it will default to appending the group as the last (topmost) child. This is similar to the index argument in `parent.insertChild(index, group)`.
