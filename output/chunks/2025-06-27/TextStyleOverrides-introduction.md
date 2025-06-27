---
title: Introduction
slug: TextStyleOverrides-introduction
source_file: plugin-api-TextStyleOverrides.html
source_url: 'https://www.figma.com/plugin-docs/api/TextStyleOverrides/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 531f0cf905725ee0
token_count: 214
chunk_title: Introduction
chunk_slug: TextStyleOverrides-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: TextStyleOverrides.md
parent_slug: TextStyleOverrides
char_count: 748
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - TextStyleOverrides-samples
compiler: noos-figma
---

# TextStyleOverrides

```
type TextStyleOverrideType = { type: "SEMANTIC_ITALIC" | "SEMANTIC_WEIGHT" | "HYPERLINK" | "TEXT_DECORATION"}
```An object describing the overrides applied on top of a text style. An array of TextStyleOverrides can be returned by [getStyledTextSegments](/plugin-docs/api/properties/TextNode-getstyledtextsegments/)
.

- `"SEMANTIC_ITALIC"`: if the text range has a style which has been overridden to be italic.
- `"SEMANTIC_WEIGHT"`: if the text range has a style which has been overridden to be bold.
- `"HYPERLINK"`: if the text range has a style which has been overridden to have a hyperlink on it.
- `"TEXT_DECORATION"`: if the text range has a style which has been overridden to be underlined or have a strikethrough.
