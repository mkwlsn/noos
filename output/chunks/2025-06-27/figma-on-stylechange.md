---
title: `"stylechange"`
slug: figma-on-stylechange
source_file: plugin-api-figma-on.html
source_url: https://www.figma.com/plugin-docs/api/figma-on/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 9e9a66210df965c6
token_count: 216
chunk_title: `"stylechange"`
chunk_slug: figma-on-stylechange
chunk_index: 9
chunk_of_total: 11
parent_file: figma-on.md
parent_slug: figma-on
char_count: 754
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["figma-on-introduction", "figma-on-ontype-stylechange-callback-event-stylec", "figma-on-callback", "figma-on-currentpagechange-selectionchange", "figma-on-documentchange", "figma-on-textreview", "figma-on-drop", "figma-on-close", "figma-on-run", "figma-on-timerstart"]
---

Triggered when any styles in the document change.

The callback will receive a StyleChangeEvent with the below interface:

```
interface StyleChangeEvent { styleChanges: StyleChange[]}
```There are 3 different [`StyleChange`](/plugin-docs/api/StyleChange/)
 types. Each of these changes has a `type` property to distinguish them:

Change`type` propertyDescription[`StyleCreateChange`](/plugin-docs/api/StyleChange/#stylecreatechange)
`'STYLE_CREATE'`A style has been added to the document.[`StyleDeleteChange`](/plugin-docs/api/StyleChange/#styledeletechange)
`'STYLE_DELETE'`A style has been removed from the document.[`StylePropertyChange`](/plugin-docs/api/StyleChange/#stylepropertychange)
`'STYLE_PROPERTY_CHANGE'`A style has had a property changed.