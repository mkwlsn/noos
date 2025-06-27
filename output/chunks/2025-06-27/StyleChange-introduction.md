---
title: Introduction
slug: StyleChange-introduction
source_file: plugin-api-StyleChange.html
source_url: 'https://www.figma.com/plugin-docs/api/StyleChange/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5ea2027b4c1342ba
token_count: 61
chunk_title: Introduction
chunk_slug: StyleChange-introduction
chunk_index: 0
chunk_of_total: 4
parent_file: StyleChange.md
parent_slug: StyleChange
char_count: 213
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - StyleChange-style-basestyle-null-type-stylecreate
  - StyleChange-style-basestyle-null-type-styledelete
  - StyleChange-style-basestyle-null-type-stylepropertyc
compiler: noos-figma
---

# StyleChange

Figma has 3 types of document style changes that we currently notify on.

```
type StyleChange = | StyleCreateChange | StyleDeleteChange | StylePropertyChange
```

## StyleChange (common properties)
