---
compiler: noos-figma
created: '2025-06-27T06:12:59.185Z'
version: 1.0.0
content_hash: 6389be16a17f5ee5
---
---
title: `"currentpagechange"` + `"selectionchange"`
slug: figma-on-currentpagechange-selectionchange
source_file: plugin-api-figma-on.html
source_url: https://www.figma.com/plugin-docs/api/figma-on/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 47687cf43d7ae8f2
token_count: 205
chunk_title: `"currentpagechange"` + `"selectionchange"`
chunk_slug: figma-on-currentpagechange-selectionchange
chunk_index: 2
chunk_of_total: 10
parent_file: figma-on.md
parent_slug: figma-on
char_count: 715
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks: ["figma-on-introduction", "figma-on-ontype-stylechange-callback-event-stylec", "figma-on-documentchange", "figma-on-textreview", "figma-on-drop", "figma-on-close", "figma-on-run", "figma-on-stylechange", "figma-on-timerresume-timeradjust"]
merged_titles: ["`"currentpagechange"`", "`"selectionchange"`"]
---

This event will trigger when the user navigates to a different page, or when the plugin changes the value of `figma.currentPage`.

This event will trigger when the selection of the current page changes. This can happen:

- By user action.
- Due to plugin code.
- When the current page changes (a `"currentpagechange"` event always triggers a `"selectionchange"` event).
- When a selected node is deleted.
- When a selected node becomes the child of another selected node (in which case it is considered indirectly selected, and is no longer in `figma.currentPage.selection`)

Note also that changing the selection via the plugin API, then changing it back to its previous value immediately still triggers the event.
