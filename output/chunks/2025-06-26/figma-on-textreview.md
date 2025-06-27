---
compiler: noos-figma
created: '2025-06-27T06:12:59.185Z'
version: 1.0.0
content_hash: 11089439235a64cf
---
---
title: `"textreview"`
slug: figma-on-textreview
source_file: plugin-api-figma-on.html
source_url: https://www.figma.com/plugin-docs/api/figma-on/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: bda64a4ae9f9f766
token_count: 427
chunk_title: `"textreview"`
chunk_slug: figma-on-textreview
chunk_index: 4
chunk_of_total: 10
parent_file: figma-on.md
parent_slug: figma-on
char_count: 1493
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["figma-on-introduction", "figma-on-ontype-stylechange-callback-event-stylec", "figma-on-currentpagechange-selectionchange", "figma-on-documentchange", "figma-on-drop", "figma-on-close", "figma-on-run", "figma-on-stylechange", "figma-on-timerresume-timeradjust"]
---

##### info

This event is only available to plugins that have the `"textreview"` capability in their `manifest.json` and the plugin is running in text review mode.

`"textreview"` events allow plugins to review text in a document and act as either a replacement or a supplement to native spell check.

This event is triggered periodically when the user is typing in a text node. The callback will be passed with a TextReviewEvent with the below interface:

```
interface TextReviewEvent { text: string}
```The `text` property is the text that the user has currently typed into the node.

A `"textreview"` event listener should return a promise that resolves to an array of `TextReviewRange` objects. Each `TextReviewRange` object represents a single range of text that should be marked as either an error or a suggestion. The `TextReviewRange` interface is defined as:

```
type TextReviewRange = { start: number end: number suggestions: string[] color?: 'RED' | 'GREEN' | 'BLUE'}
```The `start` property is the index of the first character in the range. The `end` property is the index of the last character in the range. The `suggestions` property is an array of strings that represent the suggestions for the range. The `color` property is optional and can be used to change the color of the underline that is drawn under the range. If no color is specified the underline will be red.

For more information read our in depth guide on [text review plugins](/plugin-docs/textreview-plugins/).
