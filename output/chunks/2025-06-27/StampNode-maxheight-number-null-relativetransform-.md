---
title: 'maxHeight: number | null + relativeTransform: Transform'
slug: StampNode-maxheight-number-null-relativetransform-
source_file: plugin-api-StampNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StampNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2b9db03002c915e2
token_count: 124
chunk_title: 'maxHeight: number | null + relativeTransform: Transform'
chunk_slug: StampNode-maxheight-number-null-relativetransform-
chunk_index: 40
chunk_of_total: 57
parent_file: StampNode.md
parent_slug: StampNode
char_count: 431
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - StampNode-introduction
  - StampNode-getauthorasync-promise
  - StampNode-id-string-readonly
  - StampNode-parent-basenode-childrenmixin-null-reado
  - StampNode-name-string-removed-boolean-readonly
  - StampNode-tostring-string
  - StampNode-remove-void-setrelaunchdatadata-command-
  - StampNode-getrelaunchdata-command-string-string-is
  - StampNode-getcssasync-promise-key-string-string-
  - StampNode-gettoplevelframe-framenode-undefined
  - StampNode-getplugindatakey-string-string
  - StampNode-setplugindatakey-string-value-string-voi
  - StampNode-getplugindatakeys-string
  - StampNode-getsharedplugindatanamespace-string-key-
  - StampNode-setsharedplugindatanamespace-string-key-
  - StampNode-getsharedplugindatakeysnamespace-string-
  - StampNode-getdevresourcesasyncoptions-includechild
  - StampNode-editdevresourceasynccurrenturl-string-ne
  - StampNode-setdevresourcepreviewasyncurl-string-pre
  - StampNode-locked-boolean
  - StampNode-stucknodes-scenenode-readonly
  - StampNode-attachedconnectors-connectornode-readonl
  - StampNode-boundvariables-readonly-field-in-variabl
  - StampNode-inferredvariables-readonly-field-in-vari
  - StampNode-resolvedvariablemodes-collectionid-strin
  - StampNode-clearexplicitvariablemodeforcollectionco
  - StampNode-opacity-number-blendmode-blendmode
  - StampNode-ismask-boolean-masktype-masktype
  - StampNode-effects-readonlyarray-effectstyleid-stri
  - StampNode-seteffectstyleidasyncstyleid-string-prom
  - StampNode-fillstyleid-string-figmamixed
  - StampNode-setfillstyleidasyncstyleid-string-promis
  - StampNode-strokestyleid-string
  - StampNode-setstrokestyleidasyncstyleid-string-prom
  - StampNode-strokejoin-strokejoin-figmamixed-strokea
  - StampNode-dashpattern-readonlyarray-strokegeometry
  - StampNode-strokecap-strokecap-figmamixed-strokemit
  - StampNode-outlinestroke-vectornode-null
  - StampNode-fillgeometry-vectorpaths-readonly-x-numb
  - StampNode-maxwidth-number-null-minheight-number-nu
  - StampNode-absolutetransform-transform-readonly-abs
  - StampNode-layoutalign-min-center-max-stretch-inher
  - StampNode-layoutgrow-number
  - StampNode-layoutpositioning-auto-absolute
  - StampNode-absoluterenderbounds-rect-null-readonly
  - StampNode-constrainproportions-boolean-rotation-nu
  - StampNode-layoutsizinghorizontal-fixed-hug-fill
  - StampNode-layoutsizingvertical-fixed-hug-fill
  - StampNode-resizewidth-number-height-number-void
  - StampNode-resizewithoutconstraintswidth-number-hei
  - StampNode-rescalescale-number-void-exportsettings-
  - StampNode-exportasyncsettings-exportsettingsrest-p
  - StampNode-reactions-readonlyarray
  - StampNode-setreactionsasyncreactions-array-promise
  - StampNode-targetaspectratio-vector-null-readonly
  - StampNode-lockaspectratio-void-unlockaspectratio-v
merged_titles:
  - 'maxHeight: number | null'
  - 'relativeTransform: Transform'
compiler: noos-figma
---

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `maxHeight`.

The position of a node relative to its containing parent as a [`Transform`](/plugin-docs/api/Transform/)
 matrix. Not used for scaling, see `width` and `height` instead. Read the details page to understand the nuances of this property.

[View more →](/plugin-docs/api/properties/nodes-relativetransform/)
