---
title: TextStyleOverrides
slug: TextStyleOverrides
source_file: plugin-api-TextStyleOverrides.html
source_url: https://www.figma.com/plugin-docs/api/TextStyleOverrides/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 93e0e8ab61a7cb26
token_count: 615
---
# TextStyleOverrides

```
type TextStyleOverrideType = { type: "SEMANTIC_ITALIC" | "SEMANTIC_WEIGHT" | "HYPERLINK" | "TEXT_DECORATION"}
```An object describing the overrides applied on top of a text style. An array of TextStyleOverrides can be returned by [getStyledTextSegments](/plugin-docs/api/properties/TextNode-getstyledtextsegments/).

- `"SEMANTIC_ITALIC"`: if the text range has a style which has been overridden to be italic.
- `"SEMANTIC_WEIGHT"`: if the text range has a style which has been overridden to be bold.
- `"HYPERLINK"`: if the text range has a style which has been overridden to have a hyperlink on it.
- `"TEXT_DECORATION"`: if the text range has a style which has been overridden to be underlined or have a strikethrough.

## Samples

### Example: Text node that consumes a style with two overrides

Imagine you have a Figma text node with a single textStyle, with the text "hello world".

- The font in the style is a Regular weight, and non-italicized.
- A user has bolded "hello", and italicized "world", but left the space in between untouched.

```
// Notice that the textStyleId is uniform across the selection,// which we can determine using either getStyledTextSegments()// or getRangeTextStyleId()text.getRangeTextStyleId(0, text.characters.length)// Output: "someStyleId" (non-mixed)text.getStyledTextSegments(['textStyleOverrides', 'textStyleId'])// Output:[ { "characters": "hello", "start": 0, "end": 5, "textStyleOverrides": [ "SEMANTIC_WEIGHT" // indicates that the font weight differs from the original style ], textStyleId: "someStyleId" }, { "characters": " ", "start": 5, "end": 6, "textStyleOverrides": [], // indicates that this segment follows the original style textStyleId: "someStyleId" }, { "characters": "world", "start": 6, "end": 11, "textStyleOverrides": [ "SEMANTIC_ITALIC" // indicates that the italics differ from the original style ], textStyleId: "someStyleId" }]// Next, to find out what was overridden, we can use getStyledTextSegments(['fontWeight', 'fontName'])text.getStyledTextSegments(['fontWeight', 'fontName'])// Output:[ { "characters": "hello", "start": 0, "end": 5, "fontName": { "family": "Inter", "style": "Bold" }, "fontWeight": 700 }, { "characters": " ", "start": 5, "end": 6, "fontName": { "family": "Inter", "style": "Regular" }, "fontWeight": 400 }, { "characters": "world", "start": 6, "end": 11, "fontName": { "family": "Inter", "style": "Italic" }, "fontWeight": 400 }]
```