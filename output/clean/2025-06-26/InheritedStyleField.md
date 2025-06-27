---
title: InheritedStyleField
slug: InheritedStyleField
source_file: plugin-api-InheritedStyleField.html
source_url: https://www.figma.com/plugin-docs/api/InheritedStyleField/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 2f634b929c35d1ee
token_count: 116
---
# InheritedStyleField

```
type InheritedStyleField = | 'fillStyleId' | 'strokeStyleId' | 'backgroundStyleId' | 'textStyleId' | 'effectStyleId' | 'gridStyleId' | 'strokeStyleId'
```A [StyleConsumer](/plugin-docs/api/StyleConsumers/) will have this style applied in one of these style fields. Note that not every style type can be applied to every style field. For example, a PaintStyle can be applied in `fillStyleId` or `strokeStyleId`, but not in `textStyleId`.