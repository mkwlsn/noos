---
title: layoutWrap
slug: nodes-layoutwrap
source_file: plugin-api-nodes-layoutwrap.html
source_url: https://www.figma.com/plugin-docs/api/nodes-layoutwrap/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: c17bf041b88cb523
token_count: 169
---
# layoutWrap

Determines whether this layer should use wrapping auto-layout. Defaults to "NO_WRAP".

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

## Signature

### layoutWrap: 'NO_WRAP' | 'WRAP'

## Remarks

This property can only be set on layers with `layoutMode === "HORIZONTAL"`. Setting it on layers without this property will throw an Error.

This property must be set to `"WRAP"` in order for the [`counterAxisSpacing`](/plugin-docs/api/properties/nodes-counteraxisspacing/) and [`counterAxisAlignContent`](/plugin-docs/api/properties/nodes-counteraxisaligncontent/) properties to be applicable.