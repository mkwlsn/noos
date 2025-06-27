---
title: StyleChange
slug: StyleChange
source_file: plugin-api-StyleChange.html
source_url: https://www.figma.com/plugin-docs/api/StyleChange/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 278bb9e7ab2cdc5f
token_count: 390
---
# StyleChange

Figma has 3 types of document style changes that we currently notify on.

```
type StyleChange = | StyleCreateChange | StyleDeleteChange | StylePropertyChange
```

## StyleChange (common properties)

### style: BaseStyle | null

The style that has been updated in the document. This is null for StyleDeleteChange.

## StyleCreateChange

Emitted when a style has been added to the document.

### type: 'STYLE_CREATE'

The string literal "STYLE_CREATE" representing the type of document change this is. Always check the type before reading other properties.

### style: BaseStyle | null

The style that has been updated in the document. This is null for StyleDeleteChange.

## StyleDeleteChange

Emitted when a style has been removed from the document.

### type: 'STYLE_DELETE'

The string literal "STYLE_DELETE" representing the type of document change this is. Always check the type before reading other properties. In this case, the returned style is null.

### style: BaseStyle | null

The style that has been updated in the document. This is null for StyleDeleteChange.

## StylePropertyChange

Emitted when a style has had a property changed.

### type: 'STYLE_PROPERTY_CHANGE'

The string literal "STYLE_PROPERTY_CHANGE" representing the type of document change this is. Always check the type before reading other properties.

### properties: StyleChangeProperty[]

Array of properties that have been changed on the node.

### style: BaseStyle | null

The style that has been updated in the document. This is null for StyleDeleteChange.