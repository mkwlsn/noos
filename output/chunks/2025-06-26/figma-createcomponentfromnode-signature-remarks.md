---
title: Signature + Remarks
slug: figma-createcomponentfromnode-signature-remarks
source_file: plugin-api-figma-createcomponentfromnode.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createcomponentfromnode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: e8ab717bab24f608
token_count: 191
chunk_title: Signature + Remarks
chunk_slug: figma-createcomponentfromnode-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-createcomponentfromnode.md
parent_slug: figma-createcomponentfromnode
char_count: 668
heading_level: h2
chunk_type: tutorial
merge_type: merged
tags: []
sibling_chunks:
  - figma-createcomponentfromnode-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### createComponentFromNode(node: SceneNode): ComponentNode

To create a brand new component instead, use [`figma.createComponent`](/plugin-docs/api/properties/figma-createcomponent/).

There are many restrictions on what nodes can be turned into components. For example, the node cannot be a component or component set and cannot be inside a component, component set, or instance.

If you try to create a component from a node that cannot be turned into a component, then the function will throw a `Cannot create component from node` error.

Create a component from a node```
const frame = figma.createFrame()const component = figma.createComponentFromNode(frame)
```
