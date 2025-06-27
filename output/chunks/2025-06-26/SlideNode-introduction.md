---
title: Introduction
slug: SlideNode-introduction
source_file: plugin-api-SlideNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: fe24eee73bd56b6f
token_count: 145
chunk_title: Introduction
chunk_slug: SlideNode-introduction
chunk_index: 0
chunk_of_total: 45
parent_file: SlideNode.md
parent_slug: SlideNode
char_count: 506
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - SlideNode-isskippedslide-boolean-id-string-readonl
  - SlideNode-isasset-boolean-readonly
  - SlideNode-getcssasync-promise-key-string-string-
  - SlideNode-gettoplevelframe-framenode-undefined
  - SlideNode-getplugindatakey-string-string
  - SlideNode-setplugindatakey-string-value-string-voi
  - SlideNode-getsharedplugindatanamespace-string-key-
  - SlideNode-setsharedplugindatanamespace-string-key-
  - SlideNode-getdevresourcesasyncoptions-includechild
  - SlideNode-visible-boolean
  - SlideNode-componentpropertyreferences-nodeproperty
  - SlideNode-boundvariables-readonly-field-in-variabl
  - SlideNode-clearexplicitvariablemodeforcollectionco
  - SlideNode-children-readonlyarray-readonly
  - SlideNode-detachedinfo-detachedinfo-null-readonly
  - SlideNode-layoutgrids-readonlyarray-gridstyleid-st
  - SlideNode-setgridstyleidasyncstyleid-string-promis
  - SlideNode-guides-readonlyarray
  - SlideNode-inferredautolayout-inferredautolayoutres
  - SlideNode-layoutmode-none-horizontal-vertical
  - SlideNode-paddingright-number-paddingtop-number
  - SlideNode-verticalpadding-number-primaryaxissizing
  - SlideNode-annotations-readonlyarray
  - SlideNode-backgroundstyleid-string-fills-readonlya
  - SlideNode-strokes-readonlyarray-strokestyleid-stri
  - SlideNode-setstrokestyleidasyncstyleid-string-prom
  - SlideNode-strokejoin-strokejoin-figmamixed
  - SlideNode-strokegeometry-vectorpaths-readonly-stro
  - SlideNode-outlinestroke-vectornode-null
  - SlideNode-fillgeometry-vectorpaths-readonly-corner
  - SlideNode-bottomrightradius-number
  - SlideNode-stroketopweight-number-strokebottomweigh
  - SlideNode-strokeleftweight-number-strokerightweigh
  - SlideNode-opacity-number-blendmode-blendmode
  - SlideNode-ismask-boolean
  - SlideNode-effects-readonlyarray-effectstyleid-stri
  - SlideNode-seteffectstyleidasyncstyleid-string-prom
  - SlideNode-maxwidth-number-null-minheight-number-nu
  - SlideNode-maxheight-number-null-relativetransform-
  - SlideNode-absoluteboundingbox-rect-null-readonly-l
  - SlideNode-constrainproportions-boolean-rotation-nu
  - SlideNode-targetaspectratio-vector-null-readonly
  - SlideNode-unlockaspectratio-void-exportsettings-re
  - SlideNode-exportasyncsettings-exportsettingsrest-p
compiler: noos-figma
---

# SlideNode

A Slide is the fundamental building block of the Slides product.
It is a 1920x1080 frame that is non-resizable, non-rotatable, and cannot undergo any other transformations.
Users add content to Slides, and those slides are presented in the presentation.

Slides can be created using [`figma.createSlide`](/plugin-docs/api/properties/figma-createslide/).

We currently do not support Slides being top level nodes on the Canvas; Slides must be direct children of Slide Rows.

## Slide properties
