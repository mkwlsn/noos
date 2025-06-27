---
title: >-
  on(type: 'stylechange', callback: (event: StyleChangeEvent) => void): void +
  type
slug: figma-on-ontype-stylechange-callback-event-stylec
source_file: plugin-api-figma-on.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-on/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: aa4371a579532c12
token_count: 150
chunk_title: >-
  on(type: 'stylechange', callback: (event: StyleChangeEvent) => void): void +
  type
chunk_slug: figma-on-ontype-stylechange-callback-event-stylec
chunk_index: 1
chunk_of_total: 11
parent_file: figma-on.md
parent_slug: figma-on
char_count: 524
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-on-introduction
  - figma-on-callback
  - figma-on-currentpagechange-selectionchange
  - figma-on-documentchange
  - figma-on-textreview
  - figma-on-drop
  - figma-on-close
  - figma-on-run
  - figma-on-stylechange
  - figma-on-timerstart
merged_titles:
  - 'on(type: ''stylechange'', callback: (event: StyleChangeEvent) => void): void'
  - type
compiler: noos-figma
---

## Parameters

A string identifying the type of event that the callback will be called on.

This is either an `ArgFreeEventType`, `run`, `drop`, or `documentchange`. The `run` event callback will be passed a `RunEvent`. The `drop` event callback will be passed a `DropEvent`. The `documentchange` event callback will be passed a `DocumentChangeEvent`.

```
type ArgFreeEventType = "selectionchange" | "currentpagechange" | "close" | "timerstart" | "timerstop" | "timerpause" | "timerresume" | "timeradjust" | "timerdone"
```
