---
title: StyleChangeProperty
slug: StyleChangeProperty
source_file: plugin-api-StyleChangeProperty.html
source_url: https://www.figma.com/plugin-docs/api/StyleChangeProperty/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 3a0208ecc3c25b2a
token_count: 123
---
# StyleChangeProperty

```
type StyleChangeProperty = | 'name' | 'pluginData' | 'type' | 'description' | 'remote' | 'documentationLinks' | 'fontSize' | 'textDecoration' | 'leadingTrim' | 'letterSpacing' | 'lineHeight' | 'paragraphIndent' | 'paragraphSpacing' | 'listSpacing' | 'hangingPunctuation' | 'hangingList' | 'textCase' | 'paint' | 'effects' | 'layoutGrids'
```Different properties that can be reported by a [StylePropertyChange](/plugin-docs/api/DocumentChange/#stylepropertychange)
.