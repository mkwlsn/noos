---
title: Introduction
slug: BaseStyle-introduction
source_file: plugin-api-BaseStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/BaseStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5ab63673ff75197d
token_count: 196
chunk_title: Introduction
chunk_slug: BaseStyle-introduction
chunk_index: 0
chunk_of_total: 13
parent_file: BaseStyle.md
parent_slug: BaseStyle
char_count: 684
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - BaseStyle-id-string-readonly
  - BaseStyle-getstyleconsumersasync-promise-consumers
  - BaseStyle-getplugindatakey-string-string
  - BaseStyle-setplugindatakey-string-value-string-voi
  - BaseStyle-getplugindatakeys-string
  - BaseStyle-getsharedplugindatanamespace-string-key-
  - BaseStyle-setsharedplugindatanamespace-string-key-
  - BaseStyle-getsharedplugindatakeysnamespace-string-
  - BaseStyle-description-string-descriptionmarkdown-s
  - BaseStyle-documentationlinks-readonlyarray-remote-
  - BaseStyle-key-string-readonly
  - BaseStyle-getpublishstatusasync-promise
compiler: noos-figma
---

# BaseStyle

[Styles](https://help.figma.com/hc/en-us/articles/360039238753-Styles-in-Figma)
 in Figma define reusable colors, text properties, effects, or layout grids that can be applied to nodes.

Here are the different types of styles, each with their own set of properties:

- PaintStyle
- TextStyle
- EffectStyle
- GridStyle

In the [type declarations](/plugin-docs/api/typings/)
, each style type is represented with an interface. The most general, `BaseStyle`, is a [union](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
 of these interfaces:

```
type BaseStyle = PaintStyle | TextStyle | EffectStyle | GridStyle
```

## Base style properties
