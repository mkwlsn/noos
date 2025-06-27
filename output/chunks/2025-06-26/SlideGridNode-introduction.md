---
title: Introduction
slug: SlideGridNode-introduction
source_file: plugin-api-SlideGridNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideGridNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 4c1c683525406c65
token_count: 118
chunk_title: Introduction
chunk_slug: SlideGridNode-introduction
chunk_index: 0
chunk_of_total: 20
parent_file: SlideGridNode.md
parent_slug: SlideGridNode
char_count: 412
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - SlideGridNode-id-string-readonly
  - SlideGridNode-isasset-boolean-readonly
  - SlideGridNode-getcssasync-promise-key-string-string-
  - SlideGridNode-gettoplevelframe-framenode-undefined
  - SlideGridNode-getplugindatakey-string-string
  - SlideGridNode-setplugindatakey-string-value-string-voi
  - SlideGridNode-getsharedplugindatanamespace-string-key-
  - SlideGridNode-setsharedplugindatanamespace-string-key-
  - SlideGridNode-getdevresourcesasyncoptions-includechild
  - SlideGridNode-x-number
  - SlideGridNode-maxwidth-number-null-minheight-number-nu
  - SlideGridNode-maxheight-number-null-relativetransform-
  - SlideGridNode-absoluteboundingbox-rect-null-readonly
  - SlideGridNode-visible-boolean
  - SlideGridNode-componentpropertyreferences-nodeproperty
  - SlideGridNode-boundvariables-readonly-field-in-variabl
  - SlideGridNode-clearexplicitvariablemodeforcollectionco
  - SlideGridNode-exportsettings-readonlyarray-exportasync
  - SlideGridNode-children-readonlyarray-readonly
compiler: noos-figma
---

# SlideGridNode

This Slide Grid node exists exactly once in every Figma Slides document.
The Slide Grid cannot be selected or edited in the UI.
The only way you can manipulate the Slide Grid via the Plugin API is to interface with its children, which are all Slide Rows.

Slide Grids cannot be created using the Plugin API.
The Slide Grid node will always be top level in the document.

## Slide Grid properties
