---
title: Introduction
slug: BooleanOperationNode-introduction
source_file: plugin-api-BooleanOperationNode.html
source_url: 'https://www.figma.com/plugin-docs/api/BooleanOperationNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: d1f2a7d8ab4729cd
token_count: 228
chunk_title: Introduction
chunk_slug: BooleanOperationNode-introduction
chunk_index: 0
chunk_of_total: 34
parent_file: BooleanOperationNode.md
parent_slug: BooleanOperationNode
char_count: 796
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - BooleanOperationNode-id-string-readonly
  - BooleanOperationNode-isasset-boolean-readonly
  - BooleanOperationNode-getcssasync-promise-key-string-string-
  - BooleanOperationNode-gettoplevelframe-framenode-undefined
  - BooleanOperationNode-getplugindatakey-string-string
  - BooleanOperationNode-setplugindatakey-string-value-string-voi
  - BooleanOperationNode-getsharedplugindatanamespace-string-key-
  - BooleanOperationNode-setsharedplugindatanamespace-string-key-
  - BooleanOperationNode-getdevresourcesasyncoptions-includechild
  - BooleanOperationNode-visible-boolean
  - BooleanOperationNode-componentpropertyreferences-nodeproperty
  - BooleanOperationNode-boundvariables-readonly-field-in-variabl
  - BooleanOperationNode-clearexplicitvariablemodeforcollectionco
  - BooleanOperationNode-opacity-number-blendmode-blendmode
  - BooleanOperationNode-ismask-boolean
  - BooleanOperationNode-effects-readonlyarray-effectstyleid-stri
  - BooleanOperationNode-seteffectstyleidasyncstyleid-string-prom
  - BooleanOperationNode-x-number
  - BooleanOperationNode-maxwidth-number-null-minheight-number-nu
  - BooleanOperationNode-maxheight-number-null-relativetransform-
  - BooleanOperationNode-absoluteboundingbox-rect-null-readonly-l
  - BooleanOperationNode-constrainproportions-boolean-rotation-nu
  - BooleanOperationNode-targetaspectratio-vector-null-readonly
  - BooleanOperationNode-unlockaspectratio-void-exportsettings-re
  - BooleanOperationNode-exportasyncsettings-exportsettingsrest-p
  - BooleanOperationNode-reactions-readonlyarray
  - BooleanOperationNode-cornerradius-number-figmamixed
  - BooleanOperationNode-fills-readonlyarray-figmamixed
  - BooleanOperationNode-strokes-readonlyarray-strokestyleid-stri
  - BooleanOperationNode-setstrokestyleidasyncstyleid-string-prom
  - BooleanOperationNode-strokejoin-strokejoin-figmamixed
  - BooleanOperationNode-strokegeometry-vectorpaths-readonly-stro
  - BooleanOperationNode-outlinestroke-vectornode-null
compiler: noos-figma
---

# BooleanOperationNode

Boolean operations combine any set of shape layers through one of four formulas: Union, Subtract, Intersect, and Exclude. The layers to be combined are stored in its `children` array. You can create boolean operation nodes using [`figma.union`](/plugin-docs/api/figma/#union), [`figma.subtract`](/plugin-docs/api/figma/#subtract), [`figma.intersect`](/plugin-docs/api/figma/#intersect), [`figma.exclude`](/plugin-docs/api/figma/#exclude).

Like the group node, the boolean operations node is always set to fit its children. As such, its position and size can change when you add or resize its children.

More information on how boolean operations work can be found on our [help page](https://help.figma.com/hc/en-us/articles/360039957534).

## Boolean operation properties
