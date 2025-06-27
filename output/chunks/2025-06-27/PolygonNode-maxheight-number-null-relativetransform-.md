---
title: 'maxHeight: number | null + relativeTransform: Transform'
slug: PolygonNode-maxheight-number-null-relativetransform-
source_file: plugin-api-PolygonNode.html
source_url: 'https://www.figma.com/plugin-docs/api/PolygonNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2b9db03002c915e2
token_count: 124
chunk_title: 'maxHeight: number | null + relativeTransform: Transform'
chunk_slug: PolygonNode-maxheight-number-null-relativetransform-
chunk_index: 40
chunk_of_total: 56
parent_file: PolygonNode.md
parent_slug: PolygonNode
char_count: 431
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - PolygonNode-introduction
  - PolygonNode-pointcount-number-id-string-readonly
  - PolygonNode-parent-basenode-childrenmixin-null-reado
  - PolygonNode-name-string-removed-boolean-readonly
  - PolygonNode-tostring-string
  - PolygonNode-remove-void-setrelaunchdatadata-command-
  - PolygonNode-getrelaunchdata-command-string-string-is
  - PolygonNode-getcssasync-promise-key-string-string-
  - PolygonNode-gettoplevelframe-framenode-undefined
  - PolygonNode-getplugindatakey-string-string
  - PolygonNode-setplugindatakey-string-value-string-voi
  - PolygonNode-getplugindatakeys-string
  - PolygonNode-getsharedplugindatanamespace-string-key-
  - PolygonNode-setsharedplugindatanamespace-string-key-
  - PolygonNode-getsharedplugindatakeysnamespace-string-
  - PolygonNode-getdevresourcesasyncoptions-includechild
  - PolygonNode-editdevresourceasynccurrenturl-string-ne
  - PolygonNode-setdevresourcepreviewasyncurl-string-pre
  - PolygonNode-locked-boolean
  - PolygonNode-stucknodes-scenenode-readonly
  - PolygonNode-attachedconnectors-connectornode-readonl
  - PolygonNode-boundvariables-readonly-field-in-variabl
  - PolygonNode-inferredvariables-readonly-field-in-vari
  - PolygonNode-resolvedvariablemodes-collectionid-strin
  - PolygonNode-clearexplicitvariablemodeforcollectionco
  - PolygonNode-opacity-number-blendmode-blendmode
  - PolygonNode-ismask-boolean-masktype-masktype
  - PolygonNode-effects-readonlyarray-effectstyleid-stri
  - PolygonNode-seteffectstyleidasyncstyleid-string-prom
  - PolygonNode-cornersmoothing-number-fills-readonlyarr
  - PolygonNode-fillstyleid-string-figmamixed
  - PolygonNode-setfillstyleidasyncstyleid-string-promis
  - PolygonNode-strokestyleid-string
  - PolygonNode-setstrokestyleidasyncstyleid-string-prom
  - PolygonNode-strokejoin-strokejoin-figmamixed-strokea
  - PolygonNode-dashpattern-readonlyarray-strokegeometry
  - PolygonNode-strokecap-strokecap-figmamixed-strokemit
  - PolygonNode-outlinestroke-vectornode-null
  - PolygonNode-fillgeometry-vectorpaths-readonly-x-numb
  - PolygonNode-maxwidth-number-null-minheight-number-nu
  - PolygonNode-absolutetransform-transform-readonly-abs
  - PolygonNode-layoutalign-min-center-max-stretch-inher
  - PolygonNode-layoutgrow-number
  - PolygonNode-layoutpositioning-auto-absolute
  - PolygonNode-absoluterenderbounds-rect-null-readonly
  - PolygonNode-constrainproportions-boolean-rotation-nu
  - PolygonNode-layoutsizinghorizontal-fixed-hug-fill
  - PolygonNode-layoutsizingvertical-fixed-hug-fill
  - PolygonNode-resizewidth-number-height-number-void
  - PolygonNode-resizewithoutconstraintswidth-number-hei
  - PolygonNode-rescalescale-number-void-constraints-con
  - PolygonNode-targetaspectratio-vector-null-readonly
  - PolygonNode-exportsettings-readonlyarray-exportasync
  - PolygonNode-reactions-readonlyarray
  - PolygonNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'maxHeight: number | null'
  - 'relativeTransform: Transform'
compiler: noos-figma
---

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `maxHeight`.

The position of a node relative to its containing parent as a [`Transform`](/plugin-docs/api/Transform/)
 matrix. Not used for scaling, see `width` and `height` instead. Read the details page to understand the nuances of this property.

[View more →](/plugin-docs/api/properties/nodes-relativetransform/)
