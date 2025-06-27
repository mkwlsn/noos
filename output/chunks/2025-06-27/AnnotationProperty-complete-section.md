---
title: Complete Section
slug: AnnotationProperty-complete-section
source_file: plugin-api-AnnotationProperty.html
source_url: 'https://www.figma.com/plugin-docs/api/AnnotationProperty/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f1940a196a0cf4dc
token_count: 160
chunk_title: Complete Section
chunk_slug: AnnotationProperty-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: AnnotationProperty.md
parent_slug: AnnotationProperty
char_count: 557
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# AnnotationProperty

```
interface AnnotationProperty { readonly type: AnnotationPropertyType}type AnnotationPropertyType = | 'width' | 'height' | 'maxWidth' | 'minWidth' | 'maxHeight' | 'minHeight' | 'fills' | 'strokes' | 'effects' | 'strokeWeight' | 'cornerRadius' | 'textStyleId' | 'textAlignHorizontal' | 'fontFamily' | 'fontStyle' | 'fontSize' | 'fontWeight' | 'lineHeight' | 'letterSpacing' | 'itemSpacing' | 'padding' | 'layoutMode' | 'alignItems' | 'opacity' | 'mainComponent'
```A property pinned in an [Annotation](/plugin-docs/api/Annotation/)
.
