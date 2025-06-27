---
title: 'style: BaseStyle | null + type: ''STYLE_DELETE'''
slug: StyleChange-style-basestyle-null-type-styledelete
source_file: plugin-api-StyleChange.html
source_url: 'https://www.figma.com/plugin-docs/api/StyleChange/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 28779e574577de1c
token_count: 99
chunk_title: 'style: BaseStyle | null + type: ''STYLE_DELETE'''
chunk_slug: StyleChange-style-basestyle-null-type-styledelete
chunk_index: 2
chunk_of_total: 4
parent_file: StyleChange.md
parent_slug: StyleChange
char_count: 346
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - StyleChange-introduction
  - StyleChange-style-basestyle-null-type-stylecreate
  - StyleChange-style-basestyle-null-type-stylepropertyc
merged_titles:
  - 'style: BaseStyle | null'
  - 'type: ''STYLE_DELETE'''
compiler: noos-figma
---

The style that has been updated in the document. This is null for StyleDeleteChange.

## StyleDeleteChange

Emitted when a style has been removed from the document.

The string literal "STYLE_DELETE" representing the type of document change this is. Always check the type before reading other properties. In this case, the returned style is null.
