---
title: Annotation properties
slug: Annotation-annotation-properties
source_file: plugin-api-Annotation.html
source_url: 'https://www.figma.com/plugin-docs/api/Annotation/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: b43ab1c4cc895ea5
token_count: 69
chunk_title: Annotation properties
chunk_slug: Annotation-annotation-properties
chunk_index: 1
chunk_of_total: 4
parent_file: Annotation.md
parent_slug: Annotation
char_count: 240
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - Annotation-introduction
  - Annotation-annotation-node-properties
  - Annotation-example-usage
compiler: noos-figma
---

```
interface Annotation { readonly label?: string readonly labelMarkdown?: string readonly properties?: ReadonlyArray readonly categoryId?: string}
```See [AnnotationProperty](/plugin-docs/api/AnnotationProperty/) for supported properties.
