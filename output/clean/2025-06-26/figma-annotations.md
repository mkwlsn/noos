---
title: figma.annotations
slug: figma-annotations
source_file: plugin-api-figma-annotations.html
source_url: https://www.figma.com/plugin-docs/api/figma-annotations/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: f31487370d978d50
token_count: 196
---
# figma.annotations

These are all defined on `figma.annotations`.

### getAnnotationCategoriesAsync(): Promise

Returns a list of all [`AnnotationCategory`](/plugin-docs/api/AnnotationCategory/)s that exist in the current file.

### getAnnotationCategoryByIdAsync(id: string): Promise

Returns an [`AnnotationCategory`](/plugin-docs/api/AnnotationCategory/) by its ID. If not found, returns a promise containing null.

[View more →](/plugin-docs/api/properties/figma-annotations-getannotationcategorybyidasync/)### addAnnotationCategoryAsync(categoryInput: { label: string; color: AnnotationCategoryColor }): Promise

Adds a new [`AnnotationCategory`](/plugin-docs/api/AnnotationCategory/).

[View more →](/plugin-docs/api/properties/figma-annotations-addannotationcategoryasync/)