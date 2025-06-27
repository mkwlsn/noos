---
title: 'style: BaseStyle | null + type: ''STYLE_PROPERTY_CHANGE'''
slug: StyleChange-style-basestyle-null-type-stylepropertyc
source_file: plugin-api-StyleChange.html
source_url: 'https://www.figma.com/plugin-docs/api/StyleChange/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d5793745bb220776
token_count: 88
chunk_title: 'style: BaseStyle | null + type: ''STYLE_PROPERTY_CHANGE'''
chunk_slug: StyleChange-style-basestyle-null-type-stylepropertyc
chunk_index: 3
chunk_of_total: 4
parent_file: StyleChange.md
parent_slug: StyleChange
char_count: 307
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - StyleChange-introduction
  - StyleChange-style-basestyle-null-type-stylecreate
  - StyleChange-style-basestyle-null-type-styledelete
merged_titles:
  - 'style: BaseStyle | null'
  - 'type: ''STYLE_PROPERTY_CHANGE'''
compiler: noos-figma
---

The style that has been updated in the document. This is null for StyleDeleteChange.

## StylePropertyChange

Emitted when a style has had a property changed.

The string literal "STYLE_PROPERTY_CHANGE" representing the type of document change this is. Always check the type before reading other properties.
