---
title: `"textreview"`
slug: figma-on-textreview
source_file: plugin-api-figma-on.html
source_url: https://www.figma.com/plugin-docs/api/figma-on/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 9470cec6363ca4b7
token_count: 427
chunk_title: `"textreview"`
chunk_slug: figma-on-textreview
chunk_index: 5
chunk_of_total: 11
parent_file: figma-on.md
parent_slug: figma-on
char_count: 1494
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["figma-on-introduction", "figma-on-ontype-stylechange-callback-event-stylec", "figma-on-callback", "figma-on-currentpagechange-selectionchange", "figma-on-documentchange", "figma-on-drop", "figma-on-close", "figma-on-run", "figma-on-stylechange", "figma-on-timerstart"]
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

For more information read our in depth guide on [text review plugins](/plugin-docs/textreview-plugins/)
.