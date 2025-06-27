---
title: Introduction
slug: SliceNode-introduction
source_file: plugin-api-SliceNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SliceNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 366752bacc698e6d
token_count: 148
chunk_title: Introduction
chunk_slug: SliceNode-introduction
chunk_index: 0
chunk_of_total: 20
parent_file: SliceNode.md
parent_slug: SliceNode
char_count: 515
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - SliceNode-id-string-readonly
  - SliceNode-isasset-boolean-readonly
  - SliceNode-getcssasync-promise-key-string-string-
  - SliceNode-gettoplevelframe-framenode-undefined
  - SliceNode-getplugindatakey-string-string
  - SliceNode-setplugindatakey-string-value-string-voi
  - SliceNode-getsharedplugindatanamespace-string-key-
  - SliceNode-setsharedplugindatanamespace-string-key-
  - SliceNode-getdevresourcesasyncoptions-includechild
  - SliceNode-visible-boolean
  - SliceNode-componentpropertyreferences-nodeproperty
  - SliceNode-boundvariables-readonly-field-in-variabl
  - SliceNode-clearexplicitvariablemodeforcollectionco
  - SliceNode-x-number
  - SliceNode-maxwidth-number-null-minheight-number-nu
  - SliceNode-maxheight-number-null-relativetransform-
  - SliceNode-absoluteboundingbox-rect-null-readonly-l
  - SliceNode-constrainproportions-boolean-rotation-nu
  - SliceNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

# SliceNode

A slice is an invisible object with a bounding box, represented as dashed lines in the editor. Its purpose is to allow you to export a specific part of a document. Generally, the only thing you will do with a slice is to add an [`exportSettings`](/plugin-docs/api/SliceNode/#exportsettings) and export its content via [`exportAsync`](/plugin-docs/api/properties/nodes-exportasync/). Slices can be created using [`figma.createSlice`](/plugin-docs/api/properties/figma-createslice/).

## Slice properties
