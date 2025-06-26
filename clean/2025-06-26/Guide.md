---
title: Guide
slug: Guide
source_file: plugin-api-Guide.html
source_url: https://www.figma.com/plugin-docs/api/Guide/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 8cb17f17df33c4f4
token_count: 68
---
# Guide

```
interface Guide { readonly axis: "X" | "Y" readonly offset: number}
```Guides are either a horizontal (Y-axis) or vertical straight (X-axis) line. The offset determines its position relative to the node it is stored in (usually either the canvas or a frame).