---
title: AnnotationProperty
slug: AnnotationProperty
source_file: plugin-api-AnnotationProperty.html
source_url: https://www.figma.com/plugin-docs/api/AnnotationProperty/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: f1940a196a0cf4dc
token_count: 140
---
# AnnotationProperty

```
interface AnnotationProperty { readonly type: AnnotationPropertyType}type AnnotationPropertyType = | 'width' | 'height' | 'maxWidth' | 'minWidth' | 'maxHeight' | 'minHeight' | 'fills' | 'strokes' | 'effects' | 'strokeWeight' | 'cornerRadius' | 'textStyleId' | 'textAlignHorizontal' | 'fontFamily' | 'fontStyle' | 'fontSize' | 'fontWeight' | 'lineHeight' | 'letterSpacing' | 'itemSpacing' | 'padding' | 'layoutMode' | 'alignItems' | 'opacity' | 'mainComponent'
```A property pinned in an [Annotation](/plugin-docs/api/Annotation/)
.