---
title: off
slug: figma-off
source_file: plugin-api-figma-off.html
source_url: https://www.figma.com/plugin-docs/api/figma-off/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 85ae76723be8e2bc
token_count: 291
---
# off

Removes a callback added with `figma.on` or `figma.once`.

## Signature

### off(type: ArgFreeEventType, callback: () => void): void

### off(type: 'run', callback: (event: RunEvent) => void): void

### off(type: 'drop', callback: (event: DropEvent) => boolean): void

### off(type: 'documentchange', callback: (event: DocumentChangeEvent) => void): void

### off(type: 'slidesviewchange', callback: (event: SlidesViewChangeEvent) => void): void

### off(type: 'textreview', callback: (event: TextReviewEvent) => Promise | TextReviewRange[]): void

### off(type: 'stylechange', callback: (event: StyleChangeEvent) => void): void

## Remarks

The callback needs to be the same object that was originally added. For example, you can do this:

Correct way to remove a callback```
let fn = () => { console.log("selectionchanged") }figma.on("selectionchange", fn)figma.off("selectionchange", fn)
```whereas the following won't work, because the function objects are different:

Incorrect way to remove a callback```
figma.on("selectionchange", () => { console.log("selectionchanged") })figma.off("selectionchange", () => { console.log("selectionchanged") })
```