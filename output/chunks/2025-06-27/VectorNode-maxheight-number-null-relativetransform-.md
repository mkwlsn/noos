---
title: 'maxHeight: number | null + relativeTransform: Transform'
slug: VectorNode-maxheight-number-null-relativetransform-
source_file: plugin-api-VectorNode.html
source_url: 'https://www.figma.com/plugin-docs/api/VectorNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2b9db03002c915e2
token_count: 124
chunk_title: 'maxHeight: number | null + relativeTransform: Transform'
chunk_slug: VectorNode-maxheight-number-null-relativetransform-
chunk_index: 41
chunk_of_total: 57
parent_file: VectorNode.md
parent_slug: VectorNode
char_count: 431
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - VectorNode-introduction
  - VectorNode-vectornetwork-vectornetwork
  - VectorNode-handlemirroring-handlemirroring-figmamix
  - VectorNode-parent-basenode-childrenmixin-null-reado
  - VectorNode-name-string-removed-boolean-readonly
  - VectorNode-tostring-string
  - VectorNode-remove-void-setrelaunchdatadata-command-
  - VectorNode-getrelaunchdata-command-string-string-is
  - VectorNode-getcssasync-promise-key-string-string-
  - VectorNode-gettoplevelframe-framenode-undefined
  - VectorNode-getplugindatakey-string-string
  - VectorNode-setplugindatakey-string-value-string-voi
  - VectorNode-getplugindatakeys-string
  - VectorNode-getsharedplugindatanamespace-string-key-
  - VectorNode-setsharedplugindatanamespace-string-key-
  - VectorNode-getsharedplugindatakeysnamespace-string-
  - VectorNode-getdevresourcesasyncoptions-includechild
  - VectorNode-editdevresourceasynccurrenturl-string-ne
  - VectorNode-setdevresourcepreviewasyncurl-string-pre
  - VectorNode-locked-boolean
  - VectorNode-stucknodes-scenenode-readonly
  - VectorNode-attachedconnectors-connectornode-readonl
  - VectorNode-boundvariables-readonly-field-in-variabl
  - VectorNode-inferredvariables-readonly-field-in-vari
  - VectorNode-resolvedvariablemodes-collectionid-strin
  - VectorNode-clearexplicitvariablemodeforcollectionco
  - VectorNode-opacity-number-blendmode-blendmode
  - VectorNode-ismask-boolean-masktype-masktype
  - VectorNode-effects-readonlyarray-effectstyleid-stri
  - VectorNode-seteffectstyleidasyncstyleid-string-prom
  - VectorNode-cornersmoothing-number-fills-readonlyarr
  - VectorNode-fillstyleid-string-figmamixed
  - VectorNode-setfillstyleidasyncstyleid-string-promis
  - VectorNode-strokestyleid-string
  - VectorNode-setstrokestyleidasyncstyleid-string-prom
  - VectorNode-strokejoin-strokejoin-figmamixed-strokea
  - VectorNode-dashpattern-readonlyarray-strokegeometry
  - VectorNode-strokecap-strokecap-figmamixed-strokemit
  - VectorNode-outlinestroke-vectornode-null
  - VectorNode-fillgeometry-vectorpaths-readonly-x-numb
  - VectorNode-maxwidth-number-null-minheight-number-nu
  - VectorNode-absolutetransform-transform-readonly-abs
  - VectorNode-layoutalign-min-center-max-stretch-inher
  - VectorNode-layoutgrow-number
  - VectorNode-layoutpositioning-auto-absolute
  - VectorNode-absoluterenderbounds-rect-null-readonly
  - VectorNode-constrainproportions-boolean-rotation-nu
  - VectorNode-layoutsizinghorizontal-fixed-hug-fill
  - VectorNode-layoutsizingvertical-fixed-hug-fill
  - VectorNode-resizewidth-number-height-number-void
  - VectorNode-resizewithoutconstraintswidth-number-hei
  - VectorNode-rescalescale-number-void-constraints-con
  - VectorNode-targetaspectratio-vector-null-readonly
  - VectorNode-exportsettings-readonlyarray-exportasync
  - VectorNode-reactions-readonlyarray
  - VectorNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'maxHeight: number | null'
  - 'relativeTransform: Transform'
compiler: noos-figma
---

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `maxHeight`.

The position of a node relative to its containing parent as a [`Transform`](/plugin-docs/api/Transform/)
 matrix. Not used for scaling, see `width` and `height` instead. Read the details page to understand the nuances of this property.

[View more →](/plugin-docs/api/properties/nodes-relativetransform/)
