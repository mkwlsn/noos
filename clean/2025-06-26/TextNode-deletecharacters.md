---
title: deleteCharacters
slug: TextNode-deletecharacters
source_file: plugin-api-TextNode-deletecharacters.html
source_url: https://www.figma.com/plugin-docs/api/TextNode-deletecharacters/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 4f1166962d78bf15
token_count: 266
---
# deleteCharacters

Remove characters in the text from `start` (inclusive) to `end` (exclusive).

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

## Signature

### deleteCharacters(start: number, end: number): void

## Remarks

This API allows you to remove characters in a text node while preserving the styles of the existing characters. However, you still need to call [`figma.loadFontAsync`](/plugin-docs/api/properties/figma-loadfontasync/) before using this API.

##### caution

⚠ Did you know: not all glyphs that you might think as a "character" are actually stored as a single character in JavaScript string? JavaScript strings are UTF-16 encoded. Some characters like "👍" are stored using two characters! Try it in the JavaScript console: "👍".length is 2! The two characters are called "surrogate pairs". Even more mindblowing: some characters are made of multiple emojis. For example, "👨‍👧", which you should see in your browser as a single character, has length 5. "👨‍👧".substring(0, 2) is "👨" and "👨‍👧".substring(3, 5) is "👧".