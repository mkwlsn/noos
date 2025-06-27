---
title: >-
  findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } &
  SceneNode> + criteria
slug: nodes-findallwithcriteria-findallwithcriteriacriteria-findallcrite
source_file: plugin-api-nodes-findallwithcriteria.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findallwithcriteria/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f4b6b5e0c9a55707
token_count: 476
chunk_title: >-
  findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } &
  SceneNode> + criteria
chunk_slug: nodes-findallwithcriteria-findallwithcriteriacriteria-findallcrite
chunk_index: 1
chunk_of_total: 6
parent_file: nodes-findallwithcriteria.md
parent_slug: nodes-findallwithcriteria
char_count: 1665
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-findallwithcriteria-introduction
  - nodes-findallwithcriteria-find-by-node-type
  - nodes-findallwithcriteria-find-by-plugin-data
  - nodes-findallwithcriteria-find-by-shared-plugin-data
  - nodes-findallwithcriteria-combining-criterias
merged_titles:
  - >-
    findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } &
    SceneNode>
  - criteria
compiler: noos-figma
---

## Parameters

An object of type [`FindAllCriteria`](/plugin-docs/api/FindAllCriteria/)
 that specifies the search criteria. The following criterias are currently supported:

- Nodes with specific `types`
- Nodes with `SharedPluginData` by their namespace and keys.
- Nodes with `PluginData` by their keys.
- A combination of any of the above.

## Remarks

This is a faster but more limited search compared to [`findAll`](/plugin-docs/api/properties/nodes-findall/)
, which lets you search nodes based on any logic you can include in a callback.

When paired with [`figma.skipInvisibleInstanceChildren = true`](/plugin-docs/api/properties/figma-skipinvisibleinstancechildren/)
, this method can be hundreds of times faster in large documents with tens of thousands of nodes.

The return value is narrowly typed to match the provided `types`, which makes it much easier to use node-type-specific properties. For example, `node.findAllWithCriteria({ types: ['TEXT'] })` will return `TextNode[]` instead of the more generic `SceneNode[]` from [`findAll`](/plugin-docs/api/properties/nodes-findall/)
.

Nodes are included in back-to-front order, which is the same order as in [`findAll`](/plugin-docs/api/properties/nodes-findall/)
. Parents always appear before their children, and children appear in same relative order before their children, and children appear in same relative order as in the [`children`](/plugin-docs/api/properties/nodes-children/)
 array.

This traversal method is known as ["pre-order traversal"](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR))
.

##### info

The node this method is called on is not included.

## Example Usages
