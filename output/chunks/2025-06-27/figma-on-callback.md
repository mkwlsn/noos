---
title: callback
slug: figma-on-callback
source_file: plugin-api-figma-on.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-on/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f6898aa8421473d5
token_count: 358
chunk_title: callback
chunk_slug: figma-on-callback
chunk_index: 2
chunk_of_total: 11
parent_file: figma-on.md
parent_slug: figma-on
char_count: 1251
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - figma-on-introduction
  - figma-on-ontype-stylechange-callback-event-stylec
  - figma-on-currentpagechange-selectionchange
  - figma-on-documentchange
  - figma-on-textreview
  - figma-on-drop
  - figma-on-close
  - figma-on-run
  - figma-on-stylechange
  - figma-on-timerstart
compiler: noos-figma
---

A function that will be called when the event happens.
If `type` is 'run', then this function will be passed a `RunEvent`.
If `type` is 'drop', then this function will be passed a `DropEvent`.
If `type` is 'documentchange', then this function will be passed a `DocumentChangeEvent`.

Otherwise nothing will be passed in.

## Remarks

This API tries to match Node.js conventions around similar `.on` APIs.

It's important to understand that the `.on` API runs the callbacks asynchronously. For example:

```
figma.on("selectionchange", () => { console.log("changed") })console.log("before")figma.currentPage.selection = []console.log("after")// Output:// "before"// "after"// "changed"
```The asynchronous nature of these APIs have a few other implications.

The callback will not necessarily be called each time the event happens. For example, this will only trigger the event once:

```
figma.currentPage.selection = [figma.createRectangle()]figma.currentPage.selection = [figma.createFrame()]
```Nor will the ordering of the event trigger and event registration affect whether the callback is called.

```
figma.currentPage.selection = [figma.createFrame()]figma.on("selectionchange", () => { "this will get called!" })
```

## Available event types
