---
title: Annotation
slug: Annotation
source_file: plugin-api-Annotation.html
source_url: https://www.figma.com/plugin-docs/api/Annotation/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 71347fb8c4924aa4
token_count: 538
---
# Annotation

Annotations let you add notes and pin properties to nodes in Dev Mode.

The `annotations` field is supported on the following node types: [ComponentNode](/plugin-docs/api/ComponentNode/)
, [ComponentSetNode](/plugin-docs/api/ComponentSetNode/)
, [EllipseNode](/plugin-docs/api/EllipseNode/)
, [FrameNode](/plugin-docs/api/FrameNode/)
, [InstanceNode](/plugin-docs/api/InstanceNode/)
, [LineNode](/plugin-docs/api/LineNode/)
, [PolygonNode](/plugin-docs/api/PolygonNode/)
, [RectangleNode](/plugin-docs/api/RectangleNode/)
, [StarNode](/plugin-docs/api/StarNode/)
, [TextNode](/plugin-docs/api/TextNode/)
, [VectorNode](/plugin-docs/api/VectorNode/)
.

## Annotation properties

```
interface Annotation { readonly label?: string readonly labelMarkdown?: string readonly properties?: ReadonlyArray readonly categoryId?: string}
```See [AnnotationProperty](/plugin-docs/api/AnnotationProperty/)
 for supported properties.

## Annotation node properties

### annotations: ReadonlyArray

Annotations on the node.

Learn more about annotations in the [Help Center](https://help.figma.com/hc/en-us/articles/20774752502935)
 or see the [Annotation type](/plugin-docs/api/Annotation/)
 for usage examples.

## Example usage

```
const node = figma.currentPage.selection[0]// Add an annotation notenode.annotations = [{ label: 'Main product navigation' }]// Pin the fill propertynode.annotations = [{ properties: [{ type: 'fills' }] }]// Add an annotation with a note and width property pinnednode.annotations = [ { label: 'Pressing activates animation', properties: [{ type: 'width' }] },]// Add a rich-text annotation label with markdownnode.annotations = [ { labelMarkdown: '# Important \n Pressing activates a *fun* animation' },]// Add multiple annotations with annotation categoriescategories = await figma.annotations.getAnnotationCategoriesAsync()interactionCategory = categories[1]a11yCategory = categories[2]node.annotations = [ { label: 'Pressing activates animation', categoryId: interactionCategory.id, }, { label: 'Fill in aria-label with i18n string', categoryId: a11yCategory.id, },]// Clear an annotationnode.annotations = []
```