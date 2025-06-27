---
title: Parameters
slug: figma-flatten-parameters
source_file: plugin-api-figma-flatten.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-flatten/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 93dcb83c7397bbd4
token_count: 191
chunk_title: Parameters
chunk_slug: figma-flatten-parameters
chunk_index: 0
chunk_of_total: 3
parent_file: figma-flatten.md
parent_slug: figma-flatten
char_count: 667
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-flatten-remarks
  - figma-flatten-possible-error-cases
compiler: noos-figma
---

### nodes

The list of nodes in the new group. This list must be non-empty and cannot include any node that cannot be reparented, such as children of instances. Make a copy of those nodes first if necessary.

### parent

The node under which the new vector will be created. This is similar to `parent.appendChild(group)` and defaults to `figma.currentPage` if left unspecified.

### index

An optional index argument that specifies where inside `parent` the new vector will be created. When this argument is not provided, it will default to appending the vector as the last (topmost) child. This is similar to the index argument in `parent.insertChild(index, group)`.
