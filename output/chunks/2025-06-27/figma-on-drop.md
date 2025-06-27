---
title: `"drop"`
slug: figma-on-drop
source_file: plugin-api-figma-on.html
source_url: https://www.figma.com/plugin-docs/api/figma-on/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: bfd90036dd3d7f3d
token_count: 713
chunk_title: `"drop"`
chunk_slug: figma-on-drop
chunk_index: 6
chunk_of_total: 11
parent_file: figma-on.md
parent_slug: figma-on
char_count: 2495
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: ["figma-on-introduction", "figma-on-ontype-stylechange-callback-event-stylec", "figma-on-callback", "figma-on-currentpagechange-selectionchange", "figma-on-documentchange", "figma-on-textreview", "figma-on-close", "figma-on-run", "figma-on-stylechange", "figma-on-timerstart"]
---

This event will trigger when objects outside Figma (such as elements from other browser windows, or files from the local filesystem) are dropped onto the canvas.

It can also be triggered by a special `pluginDrop` message sent from the UI. See the [Triggering drop events from the UI](/plugin-docs/creating-ui/#triggering-drop-events-from-the-ui)
 section for more details.

The callback will be passed a `DropEvent` with the below interface. It should return `false` if it wants to handle the particular drop and stop Figma from performing the default drop behavior.

```
interface DropEvent { node: BaseNode | SceneNode x: number y: number absoluteX: number absoluteY: number items: DropItem[] files: DropFile[] dropMetadata?: any}
```- The `node` property contains the node where the drop landed. This will sometimes be the page node if the drop didn't land on anything in the canvas, or if target node is locked or cannot be a parent of another node.
- The `x` and `y` properties are coordinates relative to the node drop target
- The `absoluteX` and `absoluteY` properties are absolute canvas coordinates
- The `items` property is an array of `DropItem` objects. You will see multiple objects if a drop contains multiple, non-file data types. If there are no data items, this array will be empty.
- The `files` property is an array of dropped files represented as `DropFile` objects. If no files are present, this array will be empty.
- The `dropMetadata` property comes from drop events explicitly triggered by the UI.

Items and files will conform to the below interfaces:

```
interface DropItem { type: string // e.g. "text/html", "text/uri-list", etc... data: string}interface DropFile { name: string // file name type: string // e.g. "image/png" getBytesAsync(): Promise // get raw file bytes getTextAsync(): Promise // get text assuming file is UTF8-encoded}
```See the Icon Drag-and-Drop and PNG Crop examples in the [figma/plugin-samples](https://github.com/figma/plugin-samples)
 repository for plugins that implement this API.

#### UI Recommendations

When the plugin registers a drop callback, it should give the user instructions with either text in the plugin UI or [`figma.notify()`](/plugin-docs/api/properties/figma-notify/)
 (if the plugin does not show a UI) telling them what to do.

[`figma.notify()`](/plugin-docs/api/properties/figma-notify/)
 can be called with the `timeout` option set to `Infinity` to make the notification show for as long as the plugin is open.