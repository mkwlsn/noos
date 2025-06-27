---
title: createComponent
slug: figma-createcomponent
source_file: plugin-api-figma-createcomponent.html
source_url: https://www.figma.com/plugin-docs/api/figma-createcomponent/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: a2b3a948a8279ca8
token_count: 134
---
# createComponent

##### info

This API is only available in Figma Design

Creates a new, empty component.

## Signature

### createComponent(): ComponentNode

## Remarks

By default, the new node has width and height both at 100, and is parented under `figma.currentPage`.

This function creates a brand new component. To create a component from an existing node, use [`figma.createComponentFromNode`](/plugin-docs/api/properties/figma-createcomponentfromnode/)
.

Create a component```
const component = figma.createComponent()
```