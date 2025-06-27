---
title: Introduction
slug: SlideRowNode-introduction
source_file: plugin-api-SlideRowNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideRowNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: c827eabab989d994
token_count: 143
chunk_title: Introduction
chunk_slug: SlideRowNode-introduction
chunk_index: 0
chunk_of_total: 20
parent_file: SlideRowNode.md
parent_slug: SlideRowNode
char_count: 498
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - SlideRowNode-id-string-readonly
  - SlideRowNode-isasset-boolean-readonly
  - SlideRowNode-getcssasync-promise-key-string-string-
  - SlideRowNode-gettoplevelframe-framenode-undefined
  - SlideRowNode-getplugindatakey-string-string
  - SlideRowNode-setplugindatakey-string-value-string-voi
  - SlideRowNode-getsharedplugindatanamespace-string-key-
  - SlideRowNode-setsharedplugindatanamespace-string-key-
  - SlideRowNode-getdevresourcesasyncoptions-includechild
  - SlideRowNode-x-number
  - SlideRowNode-maxwidth-number-null-minheight-number-nu
  - SlideRowNode-maxheight-number-null-relativetransform-
  - SlideRowNode-absoluteboundingbox-rect-null-readonly
  - SlideRowNode-visible-boolean
  - SlideRowNode-componentpropertyreferences-nodeproperty
  - SlideRowNode-boundvariables-readonly-field-in-variabl
  - SlideRowNode-clearexplicitvariablemodeforcollectionco
  - SlideRowNode-exportsettings-readonlyarray-exportasync
  - SlideRowNode-children-readonlyarray-readonly
compiler: noos-figma
---

# SlideRowNode

Slide Rows are children of the Slide Grid node.
Slide Rows are also neither selectable nor editable within the UI.
The only way you can manipulate Slide Rows are to interface with their children, which are all Slides.
We currently do not support Slide Rows being top level nodes on the Canvas; Slide Rows must be direct children of the Slide Grid.

Slide Rows can be created using [`figma.createSlideRow`](/plugin-docs/api/properties/figma-createsliderow/).

## Slide Row properties
