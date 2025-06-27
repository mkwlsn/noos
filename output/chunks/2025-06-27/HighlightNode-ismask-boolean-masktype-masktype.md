---
title: 'isMask: boolean + maskType: MaskType'
slug: HighlightNode-ismask-boolean-masktype-masktype
source_file: plugin-api-HighlightNode.html
source_url: 'https://www.figma.com/plugin-docs/api/HighlightNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c7653f7ceac51263
token_count: 108
chunk_title: 'isMask: boolean + maskType: MaskType'
chunk_slug: HighlightNode-ismask-boolean-masktype-masktype
chunk_index: 27
chunk_of_total: 57
parent_file: HighlightNode.md
parent_slug: HighlightNode
char_count: 375
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - HighlightNode-introduction
  - HighlightNode-vectornetwork-vectornetwork
  - HighlightNode-handlemirroring-handlemirroring-figmamix
  - HighlightNode-parent-basenode-childrenmixin-null-reado
  - HighlightNode-name-string-removed-boolean-readonly
  - HighlightNode-tostring-string
  - HighlightNode-remove-void-setrelaunchdatadata-command-
  - HighlightNode-getrelaunchdata-command-string-string-is
  - HighlightNode-getcssasync-promise-key-string-string-
  - HighlightNode-gettoplevelframe-framenode-undefined
  - HighlightNode-getplugindatakey-string-string
  - HighlightNode-setplugindatakey-string-value-string-voi
  - HighlightNode-getplugindatakeys-string
  - HighlightNode-getsharedplugindatanamespace-string-key-
  - HighlightNode-setsharedplugindatanamespace-string-key-
  - HighlightNode-getsharedplugindatakeysnamespace-string-
  - HighlightNode-getdevresourcesasyncoptions-includechild
  - HighlightNode-editdevresourceasynccurrenturl-string-ne
  - HighlightNode-setdevresourcepreviewasyncurl-string-pre
  - HighlightNode-locked-boolean
  - HighlightNode-stucknodes-scenenode-readonly
  - HighlightNode-attachedconnectors-connectornode-readonl
  - HighlightNode-boundvariables-readonly-field-in-variabl
  - HighlightNode-inferredvariables-readonly-field-in-vari
  - HighlightNode-resolvedvariablemodes-collectionid-strin
  - HighlightNode-clearexplicitvariablemodeforcollectionco
  - HighlightNode-opacity-number-blendmode-blendmode
  - HighlightNode-effects-readonlyarray-effectstyleid-stri
  - HighlightNode-seteffectstyleidasyncstyleid-string-prom
  - HighlightNode-cornersmoothing-number-fills-readonlyarr
  - HighlightNode-fillstyleid-string-figmamixed
  - HighlightNode-setfillstyleidasyncstyleid-string-promis
  - HighlightNode-strokestyleid-string
  - HighlightNode-setstrokestyleidasyncstyleid-string-prom
  - HighlightNode-strokejoin-strokejoin-figmamixed-strokea
  - HighlightNode-dashpattern-readonlyarray-strokegeometry
  - HighlightNode-strokecap-strokecap-figmamixed-strokemit
  - HighlightNode-outlinestroke-vectornode-null
  - HighlightNode-fillgeometry-vectorpaths-readonly-x-numb
  - HighlightNode-maxwidth-number-null-minheight-number-nu
  - HighlightNode-maxheight-number-null-relativetransform-
  - HighlightNode-absolutetransform-transform-readonly-abs
  - HighlightNode-layoutalign-min-center-max-stretch-inher
  - HighlightNode-layoutgrow-number
  - HighlightNode-layoutpositioning-auto-absolute
  - HighlightNode-absoluterenderbounds-rect-null-readonly
  - HighlightNode-constrainproportions-boolean-rotation-nu
  - HighlightNode-layoutsizinghorizontal-fixed-hug-fill
  - HighlightNode-layoutsizingvertical-fixed-hug-fill
  - HighlightNode-resizewidth-number-height-number-void
  - HighlightNode-resizewithoutconstraintswidth-number-hei
  - HighlightNode-rescalescale-number-void-constraints-con
  - HighlightNode-targetaspectratio-vector-null-readonly
  - HighlightNode-exportsettings-readonlyarray-exportasync
  - HighlightNode-reactions-readonlyarray
  - HighlightNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'isMask: boolean'
  - 'maskType: MaskType'
compiler: noos-figma
---

Whether this node is a mask. A mask node masks its subsequent siblings.

[View more →](/plugin-docs/api/properties/nodes-ismask/)

Type of masking to use if this node is a mask. Defaults to `"ALPHA"`. You must check `isMask` to verify that this is a mask; changing `maskType` does not automatically turn on `isMask`, and a node that is not a mask can still have a `maskType`.
