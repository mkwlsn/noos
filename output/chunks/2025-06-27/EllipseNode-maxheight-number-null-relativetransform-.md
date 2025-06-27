---
title: 'maxHeight: number | null + relativeTransform: Transform'
slug: EllipseNode-maxheight-number-null-relativetransform-
source_file: plugin-api-EllipseNode.html
source_url: 'https://www.figma.com/plugin-docs/api/EllipseNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2b9db03002c915e2
token_count: 124
chunk_title: 'maxHeight: number | null + relativeTransform: Transform'
chunk_slug: EllipseNode-maxheight-number-null-relativetransform-
chunk_index: 40
chunk_of_total: 56
parent_file: EllipseNode.md
parent_slug: EllipseNode
char_count: 431
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - EllipseNode-introduction
  - EllipseNode-arcdata-arcdata-id-string-readonly
  - EllipseNode-parent-basenode-childrenmixin-null-reado
  - EllipseNode-name-string-removed-boolean-readonly
  - EllipseNode-tostring-string
  - EllipseNode-remove-void-setrelaunchdatadata-command-
  - EllipseNode-getrelaunchdata-command-string-string-is
  - EllipseNode-getcssasync-promise-key-string-string-
  - EllipseNode-gettoplevelframe-framenode-undefined
  - EllipseNode-getplugindatakey-string-string
  - EllipseNode-setplugindatakey-string-value-string-voi
  - EllipseNode-getplugindatakeys-string
  - EllipseNode-getsharedplugindatanamespace-string-key-
  - EllipseNode-setsharedplugindatanamespace-string-key-
  - EllipseNode-getsharedplugindatakeysnamespace-string-
  - EllipseNode-getdevresourcesasyncoptions-includechild
  - EllipseNode-editdevresourceasynccurrenturl-string-ne
  - EllipseNode-setdevresourcepreviewasyncurl-string-pre
  - EllipseNode-locked-boolean
  - EllipseNode-stucknodes-scenenode-readonly
  - EllipseNode-attachedconnectors-connectornode-readonl
  - EllipseNode-boundvariables-readonly-field-in-variabl
  - EllipseNode-inferredvariables-readonly-field-in-vari
  - EllipseNode-resolvedvariablemodes-collectionid-strin
  - EllipseNode-clearexplicitvariablemodeforcollectionco
  - EllipseNode-opacity-number-blendmode-blendmode
  - EllipseNode-ismask-boolean-masktype-masktype
  - EllipseNode-effects-readonlyarray-effectstyleid-stri
  - EllipseNode-seteffectstyleidasyncstyleid-string-prom
  - EllipseNode-cornersmoothing-number-fills-readonlyarr
  - EllipseNode-fillstyleid-string-figmamixed
  - EllipseNode-setfillstyleidasyncstyleid-string-promis
  - EllipseNode-strokestyleid-string
  - EllipseNode-setstrokestyleidasyncstyleid-string-prom
  - EllipseNode-strokejoin-strokejoin-figmamixed-strokea
  - EllipseNode-dashpattern-readonlyarray-strokegeometry
  - EllipseNode-strokecap-strokecap-figmamixed-strokemit
  - EllipseNode-outlinestroke-vectornode-null
  - EllipseNode-fillgeometry-vectorpaths-readonly-x-numb
  - EllipseNode-maxwidth-number-null-minheight-number-nu
  - EllipseNode-absolutetransform-transform-readonly-abs
  - EllipseNode-layoutalign-min-center-max-stretch-inher
  - EllipseNode-layoutgrow-number
  - EllipseNode-layoutpositioning-auto-absolute
  - EllipseNode-absoluterenderbounds-rect-null-readonly
  - EllipseNode-constrainproportions-boolean-rotation-nu
  - EllipseNode-layoutsizinghorizontal-fixed-hug-fill
  - EllipseNode-layoutsizingvertical-fixed-hug-fill
  - EllipseNode-resizewidth-number-height-number-void
  - EllipseNode-resizewithoutconstraintswidth-number-hei
  - EllipseNode-rescalescale-number-void-constraints-con
  - EllipseNode-targetaspectratio-vector-null-readonly
  - EllipseNode-exportsettings-readonlyarray-exportasync
  - EllipseNode-reactions-readonlyarray
  - EllipseNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'maxHeight: number | null'
  - 'relativeTransform: Transform'
compiler: noos-figma
---

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `maxHeight`.

The position of a node relative to its containing parent as a [`Transform`](/plugin-docs/api/Transform/)
 matrix. Not used for scaling, see `width` and `height` instead. Read the details page to understand the nuances of this property.

[View more →](/plugin-docs/api/properties/nodes-relativetransform/)
