---
title: description
slug: nodes-description
source_file: plugin-api-nodes-description.html
source_url: https://www.figma.com/plugin-docs/api/nodes-description/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 106e34b16335c9fa
token_count: 150
---
# description

The plain-text annotation entered by the user for this style/component.

 Supported on:

- ComponentNode
- ComponentSetNode
- EffectStyle
- GridStyle
- PaintStyle
- TextStyle

## Signature

### description: string

## Remarks

To set a rich-text description using markdown, see [`descriptionMarkdown`](/plugin-docs/api/properties/nodes-descriptionmarkdown/)

##### caution

⚠️ There is a currently a bug in Figma where the description field will appear to be missing or not up to date. Until this is fixed, the workaround is to re-publish nodes for which the description is missing.