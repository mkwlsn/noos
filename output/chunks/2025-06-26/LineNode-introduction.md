---
title: Introduction
slug: LineNode-introduction
source_file: plugin-api-LineNode.html
source_url: 'https://www.figma.com/plugin-docs/api/LineNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 138d91565aae1d8a
token_count: 114
chunk_title: Introduction
chunk_slug: LineNode-introduction
chunk_index: 0
chunk_of_total: 31
parent_file: LineNode.md
parent_slug: LineNode
char_count: 398
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - LineNode-id-string-readonly
  - LineNode-isasset-boolean-readonly
  - LineNode-getcssasync-promise-key-string-string-
  - LineNode-gettoplevelframe-framenode-undefined
  - LineNode-getplugindatakey-string-string
  - LineNode-setplugindatakey-string-value-string-voi
  - LineNode-getsharedplugindatanamespace-string-key-
  - LineNode-setsharedplugindatanamespace-string-key-
  - LineNode-getdevresourcesasyncoptions-includechild
  - LineNode-visible-boolean
  - LineNode-componentpropertyreferences-nodeproperty
  - LineNode-boundvariables-readonly-field-in-variabl
  - LineNode-clearexplicitvariablemodeforcollectionco
  - LineNode-opacity-number-blendmode-blendmode
  - LineNode-ismask-boolean
  - LineNode-effects-readonlyarray-effectstyleid-stri
  - LineNode-seteffectstyleidasyncstyleid-string-prom
  - LineNode-strokes-readonlyarray-strokestyleid-stri
  - LineNode-setstrokestyleidasyncstyleid-string-prom
  - LineNode-strokejoin-strokejoin-figmamixed
  - LineNode-strokegeometry-vectorpaths-readonly-stro
  - LineNode-outlinestroke-vectornode-null
  - LineNode-fillgeometry-vectorpaths-readonly-x-numb
  - LineNode-maxwidth-number-null-minheight-number-nu
  - LineNode-maxheight-number-null-relativetransform-
  - LineNode-absoluteboundingbox-rect-null-readonly-l
  - LineNode-constrainproportions-boolean-rotation-nu
  - LineNode-exportsettings-readonlyarray-exportasync
  - LineNode-reactions-readonlyarray
  - LineNode-annotations-readonlyarray
compiler: noos-figma
---

# LineNode

The line node represents a one-dimensional object. It is typically given a stroke so that it is visible. Its two primary properties are its length and rotation. In Figma and in our API, this is represented by the `width` and `rotation`. The height of a line is always 0. Lines can be created using [`figma.createLine`](/plugin-docs/api/properties/figma-createline/).

## Line properties
