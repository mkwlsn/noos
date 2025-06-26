---
title: AnnotationProperty
slug: AnnotationProperty
source_file: plugin-api-AnnotationProperty.html
source_url: https://www.figma.com/plugin-docs/api/AnnotationProperty/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 1d074bc8bd46ab1b
token_count: 139
---
# AnnotationProperty

```
interface AnnotationProperty { readonly type: AnnotationPropertyType}type AnnotationPropertyType = | 'width' | 'height' | 'maxWidth' | 'minWidth' | 'maxHeight' | 'minHeight' | 'fills' | 'strokes' | 'effects' | 'strokeWeight' | 'cornerRadius' | 'textStyleId' | 'textAlignHorizontal' | 'fontFamily' | 'fontStyle' | 'fontSize' | 'fontWeight' | 'lineHeight' | 'letterSpacing' | 'itemSpacing' | 'padding' | 'layoutMode' | 'alignItems' | 'opacity' | 'mainComponent'
```A property pinned in an [Annotation](/plugin-docs/api/Annotation/).