---
title: >-
  Introduction + off(type: 'stylechange', callback: (event: StyleChangeEvent) =>
  void): void
slug: figma-off-introduction-offtype-stylechange-callbac
source_file: plugin-api-figma-off.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-off/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b5ce5b403a1c4c56
token_count: 174
chunk_title: >-
  Introduction + off(type: 'stylechange', callback: (event: StyleChangeEvent) =>
  void): void
chunk_slug: figma-off-introduction-offtype-stylechange-callbac
chunk_index: 0
chunk_of_total: 1
parent_file: figma-off.md
parent_slug: figma-off
char_count: 606
heading_level: h3
chunk_type: tutorial
merge_type: merged
tags: []
sibling_chunks: []
merged_titles:
  - Introduction
  - 'off(type: ''stylechange'', callback: (event: StyleChangeEvent) => void): void'
compiler: noos-figma
---

# off

Removes a callback added with `figma.on` or `figma.once`.

## Signature

## Remarks

The callback needs to be the same object that was originally added. For example, you can do this:

Correct way to remove a callback```
let fn = () => { console.log("selectionchanged") }figma.on("selectionchange", fn)figma.off("selectionchange", fn)
```whereas the following won't work, because the function objects are different:

Incorrect way to remove a callback```
figma.on("selectionchange", () => { console.log("selectionchanged") })figma.off("selectionchange", () => { console.log("selectionchanged") })
```
