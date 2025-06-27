---
title: Remarks
slug: TextNode-deletecharacters-remarks
source_file: plugin-api-TextNode-deletecharacters.html
source_url: 'https://www.figma.com/plugin-docs/api/TextNode-deletecharacters/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 02ed3b0a68b5c9be
token_count: 235
chunk_title: Remarks
chunk_slug: TextNode-deletecharacters-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: TextNode-deletecharacters.md
parent_slug: TextNode-deletecharacters
char_count: 821
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - TextNode-deletecharacters-introduction-signature
compiler: noos-figma
---

This API allows you to remove characters in a text node while preserving the styles of the existing characters. However, you still need to call [`figma.loadFontAsync`](/plugin-docs/api/properties/figma-loadfontasync/) before using this API.

##### caution

⚠ Did you know: not all glyphs that you might think as a "character" are actually stored as a single character in JavaScript string? JavaScript strings are UTF-16 encoded. Some characters like "👍" are stored using two characters! Try it in the JavaScript console: "👍".length is 2! The two characters are called "surrogate pairs". Even more mindblowing: some characters are made of multiple emojis. For example, "👨‍👧", which you should see in your browser as a single character, has length 5. "👨‍👧".substring(0, 2) is "👨" and "👨‍👧".substring(3, 5) is "👧".
