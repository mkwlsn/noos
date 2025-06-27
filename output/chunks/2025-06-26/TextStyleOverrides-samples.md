---
title: Samples
slug: TextStyleOverrides-samples
source_file: plugin-api-TextStyleOverrides.html
source_url: 'https://www.figma.com/plugin-docs/api/TextStyleOverrides/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: c7a84d223a56bcaa
token_count: 485
chunk_title: Samples
chunk_slug: TextStyleOverrides-samples
chunk_index: 1
chunk_of_total: 2
parent_file: TextStyleOverrides.md
parent_slug: TextStyleOverrides
char_count: 1696
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - TextStyleOverrides-introduction
compiler: noos-figma
---

### Example: Text node that consumes a style with two overrides

Imagine you have a Figma text node with a single textStyle, with the text "hello world".

- The font in the style is a Regular weight, and non-italicized.
- A user has bolded "hello", and italicized "world", but left the space in between untouched.

```
// Notice that the textStyleId is uniform across the selection,// which we can determine using either getStyledTextSegments()// or getRangeTextStyleId()text.getRangeTextStyleId(0, text.characters.length)// Output: "someStyleId" (non-mixed)text.getStyledTextSegments(['textStyleOverrides', 'textStyleId'])// Output:[ { "characters": "hello", "start": 0, "end": 5, "textStyleOverrides": [ "SEMANTIC_WEIGHT" // indicates that the font weight differs from the original style ], textStyleId: "someStyleId" }, { "characters": " ", "start": 5, "end": 6, "textStyleOverrides": [], // indicates that this segment follows the original style textStyleId: "someStyleId" }, { "characters": "world", "start": 6, "end": 11, "textStyleOverrides": [ "SEMANTIC_ITALIC" // indicates that the italics differ from the original style ], textStyleId: "someStyleId" }]// Next, to find out what was overridden, we can use getStyledTextSegments(['fontWeight', 'fontName'])text.getStyledTextSegments(['fontWeight', 'fontName'])// Output:[ { "characters": "hello", "start": 0, "end": 5, "fontName": { "family": "Inter", "style": "Bold" }, "fontWeight": 700 }, { "characters": " ", "start": 5, "end": 6, "fontName": { "family": "Inter", "style": "Regular" }, "fontWeight": 400 }, { "characters": "world", "start": 6, "end": 11, "fontName": { "family": "Inter", "style": "Italic" }, "fontWeight": 400 }]
```
