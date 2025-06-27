---
title: Signature + Parameters
slug: figma-combineasvariants-signature-parameters
source_file: plugin-api-figma-combineasvariants.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-combineasvariants/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 6e275790d882a475
token_count: 216
chunk_title: Signature + Parameters
chunk_slug: figma-combineasvariants-signature-parameters
chunk_index: 1
chunk_of_total: 4
parent_file: figma-combineasvariants.md
parent_slug: figma-combineasvariants
char_count: 756
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-combineasvariants-introduction
  - figma-combineasvariants-remarks
  - figma-combineasvariants-possible-error-cases
merged_titles:
  - Signature
  - Parameters
compiler: noos-figma
---

### combineAsVariants(nodes: ReadonlyArray, parent: BaseNode & ChildrenMixin, index?: number): ComponentSetNode

### nodes

The list of nodes in the new component set. This list must be non-empty, and must consist of only component nodes.

### parent

The node under which the new component set will be created. This is similar to `parent.appendChild(componentSet)`, but must be specified at the time that the group is created rather than later.

### index

An optional index argument that specifies where inside `parent` the new component set will be created. When this argument is not provided, it will default to appending the component set as the last (topmost) child. This is similar to the index argument in `parent.insertChild(index, componentSet)`.
