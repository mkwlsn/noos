---
title: TextCase
slug: TextCase
source_file: plugin-api-TextCase.html
source_url: https://www.figma.com/plugin-docs/api/TextCase/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: f27676553f3285f4
token_count: 143
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