---
title: Complete Section
slug: InheritedStyleField-complete-section
source_file: plugin-api-InheritedStyleField.html
source_url: 'https://www.figma.com/plugin-docs/api/InheritedStyleField/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ddf3dcb03c4d8cc4
token_count: 133
chunk_title: Complete Section
chunk_slug: InheritedStyleField-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: InheritedStyleField.md
parent_slug: InheritedStyleField
char_count: 464
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# InheritedStyleField

```
type InheritedStyleField = | 'fillStyleId' | 'strokeStyleId' | 'backgroundStyleId' | 'textStyleId' | 'effectStyleId' | 'gridStyleId' | 'strokeStyleId'
```A [StyleConsumer](/plugin-docs/api/StyleConsumers/)
 will have this style applied in one of these style fields. Note that not every style type can be applied to every style field. For example, a PaintStyle can be applied in `fillStyleId` or `strokeStyleId`, but not in `textStyleId`.
