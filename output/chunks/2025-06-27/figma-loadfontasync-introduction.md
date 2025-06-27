---
title: Introduction
slug: figma-loadfontasync-introduction
source_file: plugin-api-figma-loadfontasync.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-loadfontasync/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 48c3e94d3e0839a8
token_count: 157
chunk_title: Introduction
chunk_slug: figma-loadfontasync-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: figma-loadfontasync.md
parent_slug: figma-loadfontasync
char_count: 548
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-loadfontasync-signature-remarks
compiler: noos-figma
---

# loadFontAsync

Makes a font available in the plugin for use when creating and modifying text. Calling this function is necessary to modify any property of a text node that may cause the rendered text to change, including `.characters`, `.fontSize`, `.fontName`, etc.

You can either pass in a hardcoded font, a font loaded via `listAvailableFontsAsync`, or the font stored on an existing text node.

Read more about how to work with fonts, when to load them, and how to load them in the [Working with Text](/plugin-docs/working-with-text/)
 page.
