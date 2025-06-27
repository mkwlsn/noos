---
title: Introduction
slug: VectorNode-introduction
source_file: plugin-api-VectorNode.html
source_url: 'https://www.figma.com/plugin-docs/api/VectorNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: d37c03699440f27b
token_count: 254
chunk_title: Introduction
chunk_slug: VectorNode-introduction
chunk_index: 0
chunk_of_total: 35
parent_file: VectorNode.md
parent_slug: VectorNode
char_count: 888
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - VectorNode-vectornetwork-vectornetwork
  - VectorNode-handlemirroring-handlemirroring-figmamix
  - VectorNode-isasset-boolean-readonly
  - VectorNode-getcssasync-promise-key-string-string-
  - VectorNode-gettoplevelframe-framenode-undefined
  - VectorNode-getplugindatakey-string-string
  - VectorNode-setplugindatakey-string-value-string-voi
  - VectorNode-getsharedplugindatanamespace-string-key-
  - VectorNode-setsharedplugindatanamespace-string-key-
  - VectorNode-getdevresourcesasyncoptions-includechild
  - VectorNode-visible-boolean
  - VectorNode-componentpropertyreferences-nodeproperty
  - VectorNode-boundvariables-readonly-field-in-variabl
  - VectorNode-clearexplicitvariablemodeforcollectionco
  - VectorNode-opacity-number-blendmode-blendmode
  - VectorNode-ismask-boolean
  - VectorNode-effects-readonlyarray-effectstyleid-stri
  - VectorNode-seteffectstyleidasyncstyleid-string-prom
  - VectorNode-fills-readonlyarray-figmamixed
  - VectorNode-strokes-readonlyarray-strokestyleid-stri
  - VectorNode-setstrokestyleidasyncstyleid-string-prom
  - VectorNode-strokejoin-strokejoin-figmamixed
  - VectorNode-strokegeometry-vectorpaths-readonly-stro
  - VectorNode-outlinestroke-vectornode-null
  - VectorNode-fillgeometry-vectorpaths-readonly-x-numb
  - VectorNode-maxwidth-number-null-minheight-number-nu
  - VectorNode-maxheight-number-null-relativetransform-
  - VectorNode-absoluteboundingbox-rect-null-readonly-l
  - VectorNode-constrainproportions-boolean-rotation-nu
  - VectorNode-targetaspectratio-vector-null-readonly
  - VectorNode-unlockaspectratio-void-exportsettings-re
  - VectorNode-exportasyncsettings-exportsettingsrest-p
  - VectorNode-reactions-readonlyarray
  - VectorNode-annotations-readonlyarray
compiler: noos-figma
---

# VectorNode

The vector node is our most general representation of shape, allowing you to specify individual vertices, segments, and regions. They are typically created in the UI using the pen tool, pencil tool, or when flattening a selection. Learn more about [vector networks on our help page](https://help.figma.com/hc/en-us/articles/360040450213). Vectors can be created using [`figma.createVector`](/plugin-docs/api/properties/figma-createvector/).

Note that similarly to groups, `VectorNode`s' position and size are automatically adjusted to fit its vertices. For example, the positions returned by `vectorPaths` is relative to the vector object position. That position will update as you change the vector content. That means that after setting a value to `vectorPaths`, reading the same value again may give a different result than what you originally set.

## Vector properties
