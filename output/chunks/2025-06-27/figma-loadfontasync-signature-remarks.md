---
title: Signature + Remarks
slug: figma-loadfontasync-signature-remarks
source_file: plugin-api-figma-loadfontasync.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-loadfontasync/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6860d6ef562df287
token_count: 272
chunk_title: Signature + Remarks
chunk_slug: figma-loadfontasync-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-loadfontasync.md
parent_slug: figma-loadfontasync
char_count: 949
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-loadfontasync-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### loadFontAsync(fontName: FontName): Promise

This function only works to load fonts already accessible in the Figma editor available to plugins. It does not load fonts from the internet.

Tip: to load multiple fonts at the same time, you may find [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
 helpful.

A common question is whether a plugin needs to be careful about calling `loadFontAsync(font)` for the same font multiple times. The answer is somewhat nuanced. The result of loading a font is cached, so calling `loadFontAsync` won't re-fetch the same font from disk. Therefore, calling `loadFontAsync` on every frame would be perfectly ok.

However, note that `loadFontAsync` returns a Promise. Even a Promise resolves immediately, it still needs to round-trip to the JavaScript event loop. So you probably shouldn't call `loadFontAsync` on the same font repeatedly inside a loop.
