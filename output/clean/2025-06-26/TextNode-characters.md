---
title: characters
slug: TextNode-characters
source_file: plugin-api-TextNode-characters.html
source_url: https://www.figma.com/plugin-docs/api/TextNode-characters/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: c9518876b2c667b5
token_count: 107
---
# characters

The raw characters in the text node. Setting this property requires the font the be loaded.

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

## Signature

### characters: string

## Remarks

Setting this property will reset styles applied to character ranges.

Setting the `characters` property can change the [`name`](/plugin-docs/api/properties/nodes-name/) of the node if `autoRename === true`.