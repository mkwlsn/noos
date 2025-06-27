---
title: HyperlinkTarget
slug: HyperlinkTarget
source_file: plugin-api-HyperlinkTarget.html
source_url: https://www.figma.com/plugin-docs/api/HyperlinkTarget/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: fbcfe4689dd8e22a
token_count: 112
---
# HyperlinkTarget

```
type HyperlinkTarget = { type: "URL" | "NODE" value: string}
```An object representing hyperlink target. The possible values for `type` are:

- `"URL"`: value is a hyperlink URL. If the URL points to a valid node in the current document, the `HyperlinkTarget` is automatically converted to type `"NODE"`.
- `"NODE"`: value is the `id` of a node in the current document. Note that the node cannot be a sublayer of an instance.