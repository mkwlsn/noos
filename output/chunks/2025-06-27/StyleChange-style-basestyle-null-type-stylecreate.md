---
title: 'style: BaseStyle | null + type: ''STYLE_CREATE'''
slug: StyleChange-style-basestyle-null-type-stylecreate
source_file: plugin-api-StyleChange.html
source_url: 'https://www.figma.com/plugin-docs/api/StyleChange/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6e0715af18205bfa
token_count: 86
chunk_title: 'style: BaseStyle | null + type: ''STYLE_CREATE'''
chunk_slug: StyleChange-style-basestyle-null-type-stylecreate
chunk_index: 1
chunk_of_total: 4
parent_file: StyleChange.md
parent_slug: StyleChange
char_count: 300
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - StyleChange-introduction
  - StyleChange-style-basestyle-null-type-styledelete
  - StyleChange-style-basestyle-null-type-stylepropertyc
merged_titles:
  - 'style: BaseStyle | null'
  - 'type: ''STYLE_CREATE'''
compiler: noos-figma
---

The style that has been updated in the document. This is null for StyleDeleteChange.

## StyleCreateChange

Emitted when a style has been added to the document.

The string literal "STYLE_CREATE" representing the type of document change this is. Always check the type before reading other properties.
