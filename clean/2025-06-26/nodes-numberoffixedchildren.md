---
title: numberOfFixedChildren
slug: nodes-numberoffixedchildren
source_file: plugin-api-nodes-numberoffixedchildren.html
source_url: https://www.figma.com/plugin-docs/api/nodes-numberoffixedchildren/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 85b736d2e7b80f8b
token_count: 155
---
# numberOfFixedChildren

Determines which children of the frame are fixed children in a scrolling frame.

 Supported on:

- ComponentNode
- FrameNode
- InstanceNode

## Signature

### numberOfFixedChildren: number

## Remarks

In Figma, fixed children are always on top of scrolling (non-fixed) children. Despite the "Fix position when scrolling" checkbox in the UI, fixed layers are not represented as a boolean property on individual layers. Instead, what we really have are two sections of children inside each frame. These section headers are visible in the layers panel when a frame has at least one fixed child.