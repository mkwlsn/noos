---
title: AnnotationCategory
slug: AnnotationCategory
source_file: plugin-api-AnnotationCategory.html
source_url: https://www.figma.com/plugin-docs/api/AnnotationCategory/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: ba7785ad741f6a55
token_count: 228
---
# AnnotationCategory

## AnnotationCategory properties

An `AnnotationCategory` is a way to distinguish your [Annotations](/plugin-docs/api/Annotation/)
. Categories can be given a color and a custom label. This helps different audiences consuming Annotations, for example developers or copy writers, find the Annotations most relevant to their work.

### id: string [readonly]

The unique identifier of the annotation category.

### label: string [readonly]

The label of the annotation category.

### color: AnnotationCategoryColor [readonly]

The color of the annotation category.

### isPreset: boolean [readonly]

Whether this annotation category is a preset.

### remove(): void

Removes this annotation category from the document.

### setColor(color: AnnotationCategoryColor): void

Sets the color of the annotation category.

### setLabel(label: string): void

Sets the label of the annotation category.