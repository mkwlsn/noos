---
title: `"timerstart"`
slug: figma-on-timerstart
source_file: plugin-api-figma-on.html
source_url: https://www.figma.com/plugin-docs/api/figma-on/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 35e0197a49de5110
token_count: 124
chunk_title: `"timerstart"`
chunk_slug: figma-on-timerstart
chunk_index: 10
chunk_of_total: 11
parent_file: figma-on.md
parent_slug: figma-on
char_count: 434
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: ["figma-on-introduction", "figma-on-ontype-stylechange-callback-event-stylec", "figma-on-callback", "figma-on-currentpagechange-selectionchange", "figma-on-documentchange", "figma-on-textreview", "figma-on-drop", "figma-on-close", "figma-on-run", "figma-on-stylechange"]
---

This event will trigger when somebody starts a timer in the document. This can happen either by a user (either the current user or a multiplayer user) starting the timer from the UI, or triggered by plugin code. To inspect the current state of the timer when this event fires, use the `figma.timer` interface. For example:

```
figma.on("timerstart", () => console.log(figma.timer.remaining))figma.timer.start(300)// Output:// 300
```