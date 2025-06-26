---
title: loadFontAsync
slug: figma-loadfontasync
source_file: plugin-api-figma-loadfontasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-loadfontasync/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: fee36855a49978d2
token_count: 381
---
# loadFontAsync

Makes a font available in the plugin for use when creating and modifying text. Calling this function is necessary to modify any property of a text node that may cause the rendered text to change, including `.characters`, `.fontSize`, `.fontName`, etc.

You can either pass in a hardcoded font, a font loaded via `listAvailableFontsAsync`, or the font stored on an existing text node.

Read more about how to work with fonts, when to load them, and how to load them in the [Working with Text](/plugin-docs/working-with-text/) page.

## Signature

### loadFontAsync(fontName: FontName): Promise

## Remarks

This function only works to load fonts already accessible in the Figma editor available to plugins. It does not load fonts from the internet.

Tip: to load multiple fonts at the same time, you may find [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) helpful.

A common question is whether a plugin needs to be careful about calling `loadFontAsync(font)` for the same font multiple times. The answer is somewhat nuanced. The result of loading a font is cached, so calling `loadFontAsync` won't re-fetch the same font from disk. Therefore, calling `loadFontAsync` on every frame would be perfectly ok.

However, note that `loadFontAsync` returns a Promise. Even a Promise resolves immediately, it still needs to round-trip to the JavaScript event loop. So you probably shouldn't call `loadFontAsync` on the same font repeatedly inside a loop.