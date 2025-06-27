---
compiler: noos-figma
created: '2025-06-27T06:12:59.185Z'
version: 1.0.0
content_hash: f360077e9d536da4
---
---
title: `"stylechange"`
slug: figma-on-stylechange
source_file: plugin-api-figma-on.html
source_url: https://www.figma.com/plugin-docs/api/figma-on/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: bad28f5c040a259d
token_count: 364
chunk_title: `"stylechange"`
chunk_slug: figma-on-stylechange
chunk_index: 8
chunk_of_total: 10
parent_file: figma-on.md
parent_slug: figma-on
char_count: 1273
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: ["figma-on-introduction", "figma-on-ontype-stylechange-callback-event-stylec", "figma-on-currentpagechange-selectionchange", "figma-on-documentchange", "figma-on-textreview", "figma-on-drop", "figma-on-close", "figma-on-run", "figma-on-timerresume-timeradjust"]
---

Triggered when any styles in the document change.

The callback will receive a StyleChangeEvent with the below interface:

```
interface StyleChangeEvent { styleChanges: StyleChange[]}
```There are 3 different [`StyleChange`](/plugin-docs/api/StyleChange/) types. Each of these changes has a `type` property to distinguish them:

Change`type` propertyDescription[`StyleCreateChange`](/plugin-docs/api/StyleChange/#stylecreatechange)`'STYLE_CREATE'`A style has been added to the document.[`StyleDeleteChange`](/plugin-docs/api/StyleChange/#styledeletechange)`'STYLE_DELETE'`A style has been removed from the document.[`StylePropertyChange`](/plugin-docs/api/StyleChange/#stylepropertychange)`'STYLE_PROPERTY_CHANGE'`A style has had a property changed.### `"timerstart"`

This event will trigger when somebody starts a timer in the document. This can happen either by a user (either the current user or a multiplayer user) starting the timer from the UI, or triggered by plugin code. To inspect the current state of the timer when this event fires, use the `figma.timer` interface. For example:

```
figma.on("timerstart", () => console.log(figma.timer.remaining))figma.timer.start(300)// Output:// 300
```### `"timerpause"`

Triggered when a timer that is running is paused.
