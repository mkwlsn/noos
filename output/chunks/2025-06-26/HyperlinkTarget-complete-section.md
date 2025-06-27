---
title: Complete Section
slug: HyperlinkTarget-complete-section
source_file: plugin-api-HyperlinkTarget.html
source_url: 'https://www.figma.com/plugin-docs/api/HyperlinkTarget/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: fbcfe4689dd8e22a
token_count: 128
chunk_title: Complete Section
chunk_slug: HyperlinkTarget-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: HyperlinkTarget.md
parent_slug: HyperlinkTarget
char_count: 448
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# HyperlinkTarget

```
type HyperlinkTarget = { type: "URL" | "NODE" value: string}
```An object representing hyperlink target. The possible values for `type` are:

- `"URL"`: value is a hyperlink URL. If the URL points to a valid node in the current document, the `HyperlinkTarget` is automatically converted to type `"NODE"`.
- `"NODE"`: value is the `id` of a node in the current document. Note that the node cannot be a sublayer of an instance.
