---
title: descriptionMarkdown
slug: nodes-descriptionmarkdown
source_file: plugin-api-nodes-descriptionmarkdown.html
source_url: https://www.figma.com/plugin-docs/api/nodes-descriptionmarkdown/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 200f5d5e4cb3ff00
token_count: 120
---
# descriptionMarkdown

The rich-text annotation entered by the user for this style/component.

 Supported on:

- ComponentNode
- ComponentSetNode
- EffectStyle
- GridStyle
- PaintStyle
- TextStyle

## Signature

### descriptionMarkdown: string

## Remarks

##### caution

⚠️ There is a currently a bug in Figma where the description field will appear to be missing or not up to date. Until this is fixed, the workaround is to re-publish nodes for which the description is missing.