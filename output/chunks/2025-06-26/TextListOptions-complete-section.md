---
title: Complete Section
slug: TextListOptions-complete-section
source_file: plugin-api-TextListOptions.html
source_url: 'https://www.figma.com/plugin-docs/api/TextListOptions/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: f00279e0551a9263
token_count: 134
chunk_title: Complete Section
chunk_slug: TextListOptions-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: TextListOptions.md
parent_slug: TextListOptions
char_count: 467
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# TextListOptions

```
type TextListOptions = { type: "ORDERED" | "UNORDERED" | "NONE"}
```An object describing list settings for a range of text. The possible values for `type` are:

- `"ORDERED"`: if the text range has been set to be part of an ordered list (ie: list with numerical counter).
- `"UNORDERED"`: if the text range has been set to be part of an unordered list (ie: bulleted list).
- `"NONE"`: if the text range is plain text and is not part of any list
