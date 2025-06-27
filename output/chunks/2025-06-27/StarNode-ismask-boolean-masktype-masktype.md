---
title: 'isMask: boolean + maskType: MaskType'
slug: StarNode-ismask-boolean-masktype-masktype
source_file: plugin-api-StarNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StarNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c7653f7ceac51263
token_count: 108
chunk_title: 'isMask: boolean + maskType: MaskType'
chunk_slug: StarNode-ismask-boolean-masktype-masktype
chunk_index: 27
chunk_of_total: 57
parent_file: StarNode.md
parent_slug: StarNode
char_count: 375
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - StarNode-introduction-type-star-readonly
  - StarNode-innerradius-number
  - StarNode-id-string-readonly
  - StarNode-parent-basenode-childrenmixin-null-reado
  - StarNode-name-string-removed-boolean-readonly
  - StarNode-tostring-string
  - StarNode-remove-void-setrelaunchdatadata-command-
  - StarNode-getrelaunchdata-command-string-string-is
  - StarNode-getcssasync-promise-key-string-string-
  - StarNode-gettoplevelframe-framenode-undefined
  - StarNode-getplugindatakey-string-string
  - StarNode-setplugindatakey-string-value-string-voi
  - StarNode-getplugindatakeys-string
  - StarNode-getsharedplugindatanamespace-string-key-
  - StarNode-setsharedplugindatanamespace-string-key-
  - StarNode-getsharedplugindatakeysnamespace-string-
  - StarNode-getdevresourcesasyncoptions-includechild
  - StarNode-editdevresourceasynccurrenturl-string-ne
  - StarNode-setdevresourcepreviewasyncurl-string-pre
  - StarNode-locked-boolean
  - StarNode-stucknodes-scenenode-readonly
  - StarNode-attachedconnectors-connectornode-readonl
  - StarNode-boundvariables-readonly-field-in-variabl
  - StarNode-inferredvariables-readonly-field-in-vari
  - StarNode-resolvedvariablemodes-collectionid-strin
  - StarNode-clearexplicitvariablemodeforcollectionco
  - StarNode-opacity-number-blendmode-blendmode
  - StarNode-effects-readonlyarray-effectstyleid-stri
  - StarNode-seteffectstyleidasyncstyleid-string-prom
  - StarNode-cornersmoothing-number-fills-readonlyarr
  - StarNode-fillstyleid-string-figmamixed
  - StarNode-setfillstyleidasyncstyleid-string-promis
  - StarNode-strokestyleid-string
  - StarNode-setstrokestyleidasyncstyleid-string-prom
  - StarNode-strokejoin-strokejoin-figmamixed-strokea
  - StarNode-dashpattern-readonlyarray-strokegeometry
  - StarNode-strokecap-strokecap-figmamixed-strokemit
  - StarNode-outlinestroke-vectornode-null
  - StarNode-fillgeometry-vectorpaths-readonly-x-numb
  - StarNode-maxwidth-number-null-minheight-number-nu
  - StarNode-maxheight-number-null-relativetransform-
  - StarNode-absolutetransform-transform-readonly-abs
  - StarNode-layoutalign-min-center-max-stretch-inher
  - StarNode-layoutgrow-number
  - StarNode-layoutpositioning-auto-absolute
  - StarNode-absoluterenderbounds-rect-null-readonly
  - StarNode-constrainproportions-boolean-rotation-nu
  - StarNode-layoutsizinghorizontal-fixed-hug-fill
  - StarNode-layoutsizingvertical-fixed-hug-fill
  - StarNode-resizewidth-number-height-number-void
  - StarNode-resizewithoutconstraintswidth-number-hei
  - StarNode-rescalescale-number-void-constraints-con
  - StarNode-targetaspectratio-vector-null-readonly
  - StarNode-exportsettings-readonlyarray-exportasync
  - StarNode-reactions-readonlyarray
  - StarNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'isMask: boolean'
  - 'maskType: MaskType'
compiler: noos-figma
---

Whether this node is a mask. A mask node masks its subsequent siblings.

[View more →](/plugin-docs/api/properties/nodes-ismask/)

Type of masking to use if this node is a mask. Defaults to `"ALPHA"`. You must check `isMask` to verify that this is a mask; changing `maskType` does not automatically turn on `isMask`, and a node that is not a mask can still have a `maskType`.
