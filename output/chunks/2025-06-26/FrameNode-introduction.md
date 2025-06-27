---
title: Introduction
slug: FrameNode-introduction
source_file: plugin-api-FrameNode.html
source_url: 'https://www.figma.com/plugin-docs/api/FrameNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 57d968738423ad4a
token_count: 185
chunk_title: Introduction
chunk_slug: FrameNode-introduction
chunk_index: 0
chunk_of_total: 48
parent_file: FrameNode.md
parent_slug: FrameNode
char_count: 646
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - FrameNode-type-frame-readonly-clone-framenode
  - FrameNode-id-string-readonly
  - FrameNode-isasset-boolean-readonly
  - FrameNode-getcssasync-promise-key-string-string-
  - FrameNode-gettoplevelframe-framenode-undefined
  - FrameNode-getplugindatakey-string-string
  - FrameNode-setplugindatakey-string-value-string-voi
  - FrameNode-getsharedplugindatanamespace-string-key-
  - FrameNode-setsharedplugindatanamespace-string-key-
  - FrameNode-getdevresourcesasyncoptions-includechild
  - FrameNode-visible-boolean
  - FrameNode-componentpropertyreferences-nodeproperty
  - FrameNode-boundvariables-readonly-field-in-variabl
  - FrameNode-clearexplicitvariablemodeforcollectionco
  - FrameNode-children-readonlyarray-readonly
  - FrameNode-detachedinfo-detachedinfo-null-readonly
  - FrameNode-layoutgrids-readonlyarray-gridstyleid-st
  - FrameNode-setgridstyleidasyncstyleid-string-promis
  - FrameNode-guides-readonlyarray
  - FrameNode-inferredautolayout-inferredautolayoutres
  - FrameNode-layoutmode-none-horizontal-vertical
  - FrameNode-paddingright-number-paddingtop-number
  - FrameNode-verticalpadding-number-primaryaxissizing
  - FrameNode-annotations-readonlyarray
  - FrameNode-backgroundstyleid-string-fills-readonlya
  - FrameNode-strokes-readonlyarray-strokestyleid-stri
  - FrameNode-setstrokestyleidasyncstyleid-string-prom
  - FrameNode-strokejoin-strokejoin-figmamixed
  - FrameNode-strokegeometry-vectorpaths-readonly-stro
  - FrameNode-outlinestroke-vectornode-null
  - FrameNode-fillgeometry-vectorpaths-readonly-corner
  - FrameNode-bottomrightradius-number
  - FrameNode-stroketopweight-number-strokebottomweigh
  - FrameNode-strokeleftweight-number-strokerightweigh
  - FrameNode-opacity-number-blendmode-blendmode
  - FrameNode-ismask-boolean
  - FrameNode-effects-readonlyarray-effectstyleid-stri
  - FrameNode-seteffectstyleidasyncstyleid-string-prom
  - FrameNode-maxwidth-number-null-minheight-number-nu
  - FrameNode-maxheight-number-null-relativetransform-
  - FrameNode-absoluteboundingbox-rect-null-readonly-l
  - FrameNode-constrainproportions-boolean-rotation-nu
  - FrameNode-targetaspectratio-vector-null-readonly
  - FrameNode-unlockaspectratio-void-exportsettings-re
  - FrameNode-exportasyncsettings-exportsettingsrest-p
  - FrameNode-reactions-readonlyarray
  - FrameNode-overflowdirection-overflowdirection
compiler: noos-figma
---

# FrameNode

The frame node is a container used to define a layout hierarchy. It is similar to `` in HTML. It is different from [`GroupNode`](/plugin-docs/api/GroupNode/), which is closer to a folder for layers. Frames can be created using [`figma.createFrame`](/plugin-docs/api/properties/figma-createframe/).

Frames generally have their own size, though the size can be determined by that of its children in the case of auto-layout frames.

⚠️ It is possible for a user to convert a frame into a group via the UI, and vice-versa. If you hold onto a node in a long-running plugin, you can't assume its `type` never changes.

## Frame properties
