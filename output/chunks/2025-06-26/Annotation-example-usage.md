---
title: Example usage
slug: Annotation-example-usage
source_file: plugin-api-Annotation.html
source_url: 'https://www.figma.com/plugin-docs/api/Annotation/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 9318b73c4d49b190
token_count: 263
chunk_title: Example usage
chunk_slug: Annotation-example-usage
chunk_index: 3
chunk_of_total: 4
parent_file: Annotation.md
parent_slug: Annotation
char_count: 920
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - Annotation-introduction
  - Annotation-annotation-properties
  - Annotation-annotation-node-properties
compiler: noos-figma
---

```
const node = figma.currentPage.selection[0]// Add an annotation notenode.annotations = [{ label: 'Main product navigation' }]// Pin the fill propertynode.annotations = [{ properties: [{ type: 'fills' }] }]// Add an annotation with a note and width property pinnednode.annotations = [ { label: 'Pressing activates animation', properties: [{ type: 'width' }] },]// Add a rich-text annotation label with markdownnode.annotations = [ { labelMarkdown: '# Important \n Pressing activates a *fun* animation' },]// Add multiple annotations with annotation categoriescategories = await figma.annotations.getAnnotationCategoriesAsync()interactionCategory = categories[1]a11yCategory = categories[2]node.annotations = [ { label: 'Pressing activates animation', categoryId: interactionCategory.id, }, { label: 'Fill in aria-label with i18n string', categoryId: a11yCategory.id, },]// Clear an annotationnode.annotations = []
```
