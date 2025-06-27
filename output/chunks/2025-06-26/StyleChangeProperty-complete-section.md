---
title: Complete Section
slug: StyleChangeProperty-complete-section
source_file: plugin-api-StyleChangeProperty.html
source_url: 'https://www.figma.com/plugin-docs/api/StyleChangeProperty/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: f0a557e441519101
token_count: 141
chunk_title: Complete Section
chunk_slug: StyleChangeProperty-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: StyleChangeProperty.md
parent_slug: StyleChangeProperty
char_count: 491
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# StyleChangeProperty

```
type StyleChangeProperty = | 'name' | 'pluginData' | 'type' | 'description' | 'remote' | 'documentationLinks' | 'fontSize' | 'textDecoration' | 'leadingTrim' | 'letterSpacing' | 'lineHeight' | 'paragraphIndent' | 'paragraphSpacing' | 'listSpacing' | 'hangingPunctuation' | 'hangingList' | 'textCase' | 'paint' | 'effects' | 'layoutGrids'
```Different properties that can be reported by a [StylePropertyChange](/plugin-docs/api/DocumentChange/#stylepropertychange).
