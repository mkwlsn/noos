---
title: Complete Section
slug: StrokeCap-complete-section
source_file: plugin-api-StrokeCap.html
source_url: 'https://www.figma.com/plugin-docs/api/StrokeCap/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 4cb899b4ef745361
token_count: 234
chunk_title: Complete Section
chunk_slug: StrokeCap-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: StrokeCap.md
parent_slug: StrokeCap
char_count: 816
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# StrokeCap

```
type StrokeCap = "NONE" |"ROUND" |"SQUARE" |"ARROW_LINES" |"ARROW_EQUILATERAL" |"DIAMOND_FILLED" |"TRIANGLE_FILLED" |"CIRCLE_FILLED"
```The possible values are:

- `"NONE"`: nothing is added to the end of the stroke
- `"ROUND"`: a semi-circle is added to the end of the stroke
- `"SQUARE"`: a square is added to the end of the stroke
- `"ARROW_LINES"`: an arrow made up of two lines is added to the end of the stroke
- `"ARROW_EQUILATERAL"`: an arrow made up of an equilateral triangle pointing outwards is added to the end of the stroke
- `"DIAMOND_FILLED"`: a filled diamond is added to the end of the stroke
- `"TRIANGLE_FILLED"`: an arrow made up of an equilateral triangle pointing inwards is added to the end of the stroke
- `"CIRCLE_FILLED"`: a filled circle is added to the end of the stroke
