---
title: `"close"`
slug: figma-on-close
source_file: plugin-api-figma-on.html
source_url: https://www.figma.com/plugin-docs/api/figma-on/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 3e8b9ecc6baeda1d
token_count: 269
chunk_title: `"close"`
chunk_slug: figma-on-close
chunk_index: 7
chunk_of_total: 11
parent_file: figma-on.md
parent_slug: figma-on
char_count: 941
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["figma-on-introduction", "figma-on-ontype-stylechange-callback-event-stylec", "figma-on-callback", "figma-on-currentpagechange-selectionchange", "figma-on-documentchange", "figma-on-textreview", "figma-on-drop", "figma-on-run", "figma-on-stylechange", "figma-on-timerstart"]
---

This event will trigger when the plugin is about to close, either from a call to `figma.closePlugin()` or the user closing the plugin via the UI.

This is a good place to run cleanup actions. For example, some plugins add UI elements in the canvas by creating nodes. These UI elements should be deleted when the plugin is closed. Note that you don't need to call `figma.closePlugin()` again in this function.

You should use this API only if strictly necessary, and run as little code as possible in the callback when doing so. When a user closes a plugin, they expect it to be closed immediately. Having long-running actions in the closing callback prevents the plugin for closing promptly.

This is also not the place to run any asynchronous actions (e.g. register callbacks, using `await`, etc). The plugin execution environment will be destroyed immediately when all the callbacks have returned, and further callbacks will not be called.