---
title: createComponentFromNode
slug: figma-createcomponentfromnode
source_file: plugin-api-figma-createcomponentfromnode.html
source_url: https://www.figma.com/plugin-docs/api/figma-createcomponentfromnode/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: be316f6c385dedca
token_count: 237
---
# createComponentFromNode

##### info

This API is only available in Figma Design

Creates a component from an existing node, preserving all of its properties and children. The behavior is similar to using the Create component button in the toolbar.

## Signature

### createComponentFromNode(node: SceneNode): ComponentNode

## Remarks

To create a brand new component instead, use [`figma.createComponent`](/plugin-docs/api/properties/figma-createcomponent/).

There are many restrictions on what nodes can be turned into components. For example, the node cannot be a component or component set and cannot be inside a component, component set, or instance.

If you try to create a component from a node that cannot be turned into a component, then the function will throw a `Cannot create component from node` error.

Create a component from a node```
const frame = figma.createFrame()const component = figma.createComponentFromNode(frame)
```