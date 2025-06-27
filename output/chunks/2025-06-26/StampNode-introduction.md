---
title: Introduction
slug: StampNode-introduction
source_file: plugin-api-StampNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StampNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 9f8c38ca0f543f35
token_count: 87
chunk_title: Introduction
chunk_slug: StampNode-introduction
chunk_index: 0
chunk_of_total: 33
parent_file: StampNode.md
parent_slug: StampNode
char_count: 302
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - StampNode-getauthorasync-promise
  - StampNode-id-string-readonly
  - StampNode-isasset-boolean-readonly
  - StampNode-getcssasync-promise-key-string-string-
  - StampNode-gettoplevelframe-framenode-undefined
  - StampNode-getplugindatakey-string-string
  - StampNode-setplugindatakey-string-value-string-voi
  - StampNode-getsharedplugindatanamespace-string-key-
  - StampNode-setsharedplugindatanamespace-string-key-
  - StampNode-getdevresourcesasyncoptions-includechild
  - StampNode-visible-boolean
  - StampNode-componentpropertyreferences-nodeproperty
  - StampNode-boundvariables-readonly-field-in-variabl
  - StampNode-clearexplicitvariablemodeforcollectionco
  - StampNode-opacity-number-blendmode-blendmode
  - StampNode-ismask-boolean
  - StampNode-effects-readonlyarray-effectstyleid-stri
  - StampNode-seteffectstyleidasyncstyleid-string-prom
  - StampNode-strokes-readonlyarray-strokestyleid-stri
  - StampNode-setstrokestyleidasyncstyleid-string-prom
  - StampNode-strokejoin-strokejoin-figmamixed
  - StampNode-strokegeometry-vectorpaths-readonly-stro
  - StampNode-outlinestroke-vectornode-null
  - StampNode-fillgeometry-vectorpaths-readonly-x-numb
  - StampNode-maxwidth-number-null-minheight-number-nu
  - StampNode-maxheight-number-null-relativetransform-
  - StampNode-absoluteboundingbox-rect-null-readonly-l
  - StampNode-constrainproportions-boolean-rotation-nu
  - StampNode-exportsettings-readonlyarray-exportasync
  - StampNode-reactions-readonlyarray
  - StampNode-constraints-constraints-targetaspectrati
  - StampNode-unlockaspectratio-void
compiler: noos-figma
---

# StampNode

Stamps are nodes that are inserted by users into the canvas via the Stamp Wheel. Use the stamp's `name` property to tell what type of stamp it is. When created it will be one of:

- `+1`
- `Dot`
- `Heart`
- `Profile`
- `Question`
- `Star`
- `Thumbs down`
- `Thumbs up`

## Stamp properties
