---
title: 'isMask: boolean + maskType: MaskType'
slug: LineNode-ismask-boolean-masktype-masktype
source_file: plugin-api-LineNode.html
source_url: 'https://www.figma.com/plugin-docs/api/LineNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c7653f7ceac51263
token_count: 108
chunk_title: 'isMask: boolean + maskType: MaskType'
chunk_slug: LineNode-ismask-boolean-masktype-masktype
chunk_index: 26
chunk_of_total: 54
parent_file: LineNode.md
parent_slug: LineNode
char_count: 375
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - LineNode-introduction
  - LineNode-id-string-readonly
  - LineNode-parent-basenode-childrenmixin-null-reado
  - LineNode-name-string-removed-boolean-readonly
  - LineNode-tostring-string
  - LineNode-remove-void-setrelaunchdatadata-command-
  - LineNode-getrelaunchdata-command-string-string-is
  - LineNode-getcssasync-promise-key-string-string-
  - LineNode-gettoplevelframe-framenode-undefined
  - LineNode-getplugindatakey-string-string
  - LineNode-setplugindatakey-string-value-string-voi
  - LineNode-getplugindatakeys-string
  - LineNode-getsharedplugindatanamespace-string-key-
  - LineNode-setsharedplugindatanamespace-string-key-
  - LineNode-getsharedplugindatakeysnamespace-string-
  - LineNode-getdevresourcesasyncoptions-includechild
  - LineNode-editdevresourceasynccurrenturl-string-ne
  - LineNode-setdevresourcepreviewasyncurl-string-pre
  - LineNode-locked-boolean
  - LineNode-stucknodes-scenenode-readonly
  - LineNode-attachedconnectors-connectornode-readonl
  - LineNode-boundvariables-readonly-field-in-variabl
  - LineNode-inferredvariables-readonly-field-in-vari
  - LineNode-resolvedvariablemodes-collectionid-strin
  - LineNode-clearexplicitvariablemodeforcollectionco
  - LineNode-opacity-number-blendmode-blendmode
  - LineNode-effects-readonlyarray-effectstyleid-stri
  - LineNode-seteffectstyleidasyncstyleid-string-prom
  - LineNode-fillstyleid-string-figmamixed
  - LineNode-setfillstyleidasyncstyleid-string-promis
  - LineNode-strokestyleid-string
  - LineNode-setstrokestyleidasyncstyleid-string-prom
  - LineNode-strokejoin-strokejoin-figmamixed-strokea
  - LineNode-dashpattern-readonlyarray-strokegeometry
  - LineNode-strokecap-strokecap-figmamixed-strokemit
  - LineNode-outlinestroke-vectornode-null
  - LineNode-fillgeometry-vectorpaths-readonly-x-numb
  - LineNode-maxwidth-number-null-minheight-number-nu
  - LineNode-maxheight-number-null-relativetransform-
  - LineNode-absolutetransform-transform-readonly-abs
  - LineNode-layoutalign-min-center-max-stretch-inher
  - LineNode-layoutgrow-number
  - LineNode-layoutpositioning-auto-absolute
  - LineNode-absoluterenderbounds-rect-null-readonly
  - LineNode-constrainproportions-boolean-rotation-nu
  - LineNode-layoutsizinghorizontal-fixed-hug-fill
  - LineNode-layoutsizingvertical-fixed-hug-fill
  - LineNode-resizewidth-number-height-number-void
  - LineNode-resizewithoutconstraintswidth-number-hei
  - LineNode-rescalescale-number-void-constraints-con
  - LineNode-exportsettings-readonlyarray-exportasync
  - LineNode-reactions-readonlyarray
  - LineNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'isMask: boolean'
  - 'maskType: MaskType'
compiler: noos-figma
---

Whether this node is a mask. A mask node masks its subsequent siblings.

[View more →](/plugin-docs/api/properties/nodes-ismask/)

Type of masking to use if this node is a mask. Defaults to `"ALPHA"`. You must check `isMask` to verify that this is a mask; changing `maskType` does not automatically turn on `isMask`, and a node that is not a mask can still have a `maskType`.
