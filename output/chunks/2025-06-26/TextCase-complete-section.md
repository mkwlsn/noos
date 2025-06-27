---
title: Complete Section
slug: TextCase-complete-section
source_file: plugin-api-TextCase.html
source_url: 'https://www.figma.com/plugin-docs/api/TextCase/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: f27676553f3285f4
token_count: 164
chunk_title: Complete Section
chunk_slug: TextCase-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: TextCase.md
parent_slug: TextCase
char_count: 572
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# TextCase

```
type TextCase = "ORIGINAL" | "UPPER" | "LOWER" | "TITLE" | "SMALL_CAPS" | "SMALL_CAPS_FORCED"
```The possible values are:

- `"ORIGINAL"`: show the text as defined, no overrides.
- `"UPPER"`: all characters are in upper case.
- `"LOWER"`: all characters are in lower case.
- `"TITLE"`: the first character of each word is upper case and all other characters are in lower case.
- `"SMALL_CAPS"`: all characters are in small upper case.
- `"SMALL_CAPS_FORCED"`: the first character of each word is upper case and all other characters are in small upper case.
