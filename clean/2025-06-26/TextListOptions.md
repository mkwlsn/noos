---
title: TextListOptions
slug: TextListOptions
source_file: plugin-api-TextListOptions.html
source_url: https://www.figma.com/plugin-docs/api/TextListOptions/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: f00279e0551a9263
token_count: 117
---
# TextListOptions

```
type TextListOptions = { type: "ORDERED" | "UNORDERED" | "NONE"}
```An object describing list settings for a range of text. The possible values for `type` are:

- `"ORDERED"`: if the text range has been set to be part of an ordered list (ie: list with numerical counter).
- `"UNORDERED"`: if the text range has been set to be part of an unordered list (ie: bulleted list).
- `"NONE"`: if the text range is plain text and is not part of any list