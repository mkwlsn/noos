---
title: createBooleanOperation
slug: figma-createbooleanoperation
source_file: plugin-api-figma-createbooleanoperation.html
source_url: https://www.figma.com/plugin-docs/api/figma-createbooleanoperation/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: d3418306230a0130
token_count: 240
---
# createBooleanOperation

DEPRECATED: Use [`figma.union`](/plugin-docs/api/figma/#union)
, [`figma.subtract`](/plugin-docs/api/figma/#subtract)
, [`figma.intersect`](/plugin-docs/api/figma/#intersect)
, [`figma.exclude`](/plugin-docs/api/figma/#exclude)
 instead.

## Signature

### createBooleanOperation(): BooleanOperationNode

## Remarks

Using this function is not recommended because empty boolean operation nodes can have surprising, unpredictable behavior. It will eventually be remove. Use one of the functions listed above instead.

Creates a new, empty boolean operation node. The particular kind of operation is set via `.booleanOperation`. By default, the value is `"UNION"`.

This snippet, for example, creates a boolean operation node that is a union of a rectangle and an ellipse.

Create a boolean operation node```
const node = figma.createBooleanOperation()node.appendChild(figma.createRectangle())node.appendChild(figma.createEllipse())
```