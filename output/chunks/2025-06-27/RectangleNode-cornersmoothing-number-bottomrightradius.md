---
title: 'cornerSmoothing: number + bottomRightRadius: number'
slug: RectangleNode-cornersmoothing-number-bottomrightradius
source_file: plugin-api-RectangleNode.html
source_url: 'https://www.figma.com/plugin-docs/api/RectangleNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 8f6a5c4f2ff539ed
token_count: 187
chunk_title: 'cornerSmoothing: number + bottomRightRadius: number'
chunk_slug: RectangleNode-cornersmoothing-number-bottomrightradius
chunk_index: 29
chunk_of_total: 61
parent_file: RectangleNode.md
parent_slug: RectangleNode
char_count: 653
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - RectangleNode-introduction
  - RectangleNode-id-string-readonly
  - RectangleNode-parent-basenode-childrenmixin-null-reado
  - RectangleNode-name-string-removed-boolean-readonly
  - RectangleNode-tostring-string
  - RectangleNode-remove-void-setrelaunchdatadata-command-
  - RectangleNode-getrelaunchdata-command-string-string-is
  - RectangleNode-getcssasync-promise-key-string-string-
  - RectangleNode-gettoplevelframe-framenode-undefined
  - RectangleNode-getplugindatakey-string-string
  - RectangleNode-setplugindatakey-string-value-string-voi
  - RectangleNode-getplugindatakeys-string
  - RectangleNode-getsharedplugindatanamespace-string-key-
  - RectangleNode-setsharedplugindatanamespace-string-key-
  - RectangleNode-getsharedplugindatakeysnamespace-string-
  - RectangleNode-getdevresourcesasyncoptions-includechild
  - RectangleNode-editdevresourceasynccurrenturl-string-ne
  - RectangleNode-setdevresourcepreviewasyncurl-string-pre
  - RectangleNode-locked-boolean
  - RectangleNode-stucknodes-scenenode-readonly
  - RectangleNode-attachedconnectors-connectornode-readonl
  - RectangleNode-boundvariables-readonly-field-in-variabl
  - RectangleNode-inferredvariables-readonly-field-in-vari
  - RectangleNode-resolvedvariablemodes-collectionid-strin
  - RectangleNode-clearexplicitvariablemodeforcollectionco
  - RectangleNode-opacity-number-blendmode-blendmode
  - RectangleNode-ismask-boolean-masktype-masktype
  - RectangleNode-effects-readonlyarray-effectstyleid-stri
  - RectangleNode-seteffectstyleidasyncstyleid-string-prom
  - RectangleNode-fills-readonlyarray-figmamixed
  - RectangleNode-fillstyleid-string-figmamixed
  - RectangleNode-setfillstyleidasyncstyleid-string-promis
  - RectangleNode-strokestyleid-string
  - RectangleNode-setstrokestyleidasyncstyleid-string-prom
  - RectangleNode-strokejoin-strokejoin-figmamixed-strokea
  - RectangleNode-dashpattern-readonlyarray-strokegeometry
  - RectangleNode-strokecap-strokecap-figmamixed-strokemit
  - RectangleNode-outlinestroke-vectornode-null
  - RectangleNode-fillgeometry-vectorpaths-readonly
  - RectangleNode-stroketopweight-number-strokebottomweigh
  - RectangleNode-strokeleftweight-number-strokerightweigh
  - RectangleNode-x-number-y-number
  - RectangleNode-minwidth-number-null-maxwidth-number-nul
  - RectangleNode-minheight-number-null-maxheight-number-n
  - RectangleNode-relativetransform-transform
  - RectangleNode-absolutetransform-transform-readonly-abs
  - RectangleNode-layoutalign-min-center-max-stretch-inher
  - RectangleNode-layoutgrow-number
  - RectangleNode-layoutpositioning-auto-absolute
  - RectangleNode-absoluterenderbounds-rect-null-readonly
  - RectangleNode-constrainproportions-boolean-rotation-nu
  - RectangleNode-layoutsizinghorizontal-fixed-hug-fill
  - RectangleNode-layoutsizingvertical-fixed-hug-fill
  - RectangleNode-resizewidth-number-height-number-void
  - RectangleNode-resizewithoutconstraintswidth-number-hei
  - RectangleNode-rescalescale-number-void-constraints-con
  - RectangleNode-targetaspectratio-vector-null-readonly
  - RectangleNode-exportsettings-readonlyarray-exportasync
  - RectangleNode-reactions-readonlyarray
  - RectangleNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'cornerSmoothing: number'
  - 'bottomRightRadius: number'
compiler: noos-figma
---

A value that lets you control how "smooth" the corners are. Ranges from 0 to 1.

[View more →](/plugin-docs/api/properties/nodes-cornersmoothing/)

You can set individual corner radius of each of the four corners of a rectangle node or frame-like node. Similar to `cornerRadius`, these value must be non-negative and can be fractional. If an edge length is less than twice the corner radius, the corner radius for each vertex of the edge will be clamped to half the edge length.

Setting `cornerRadius` sets the property for all four corners. Setting these corners to different values makes `cornerRadius` return `mixed`.

## Geometry-related properties
