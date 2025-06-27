---
title: Introduction
slug: BooleanOperationNode-introduction
source_file: plugin-api-BooleanOperationNode.html
source_url: 'https://www.figma.com/plugin-docs/api/BooleanOperationNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f94b1e877c1bf252
token_count: 229
chunk_title: Introduction
chunk_slug: BooleanOperationNode-introduction
chunk_index: 0
chunk_of_total: 64
parent_file: BooleanOperationNode.md
parent_slug: BooleanOperationNode
char_count: 801
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - BooleanOperationNode-id-string-readonly
  - BooleanOperationNode-parent-basenode-childrenmixin-null-reado
  - BooleanOperationNode-name-string-removed-boolean-readonly
  - BooleanOperationNode-tostring-string
  - BooleanOperationNode-remove-void-setrelaunchdatadata-command-
  - BooleanOperationNode-getrelaunchdata-command-string-string-is
  - BooleanOperationNode-getcssasync-promise-key-string-string-
  - BooleanOperationNode-gettoplevelframe-framenode-undefined
  - BooleanOperationNode-getplugindatakey-string-string
  - BooleanOperationNode-setplugindatakey-string-value-string-voi
  - BooleanOperationNode-getplugindatakeys-string
  - BooleanOperationNode-getsharedplugindatanamespace-string-key-
  - BooleanOperationNode-setsharedplugindatanamespace-string-key-
  - BooleanOperationNode-getsharedplugindatakeysnamespace-string-
  - BooleanOperationNode-getdevresourcesasyncoptions-includechild
  - BooleanOperationNode-editdevresourceasynccurrenturl-string-ne
  - BooleanOperationNode-setdevresourcepreviewasyncurl-string-pre
  - BooleanOperationNode-locked-boolean
  - BooleanOperationNode-stucknodes-scenenode-readonly
  - BooleanOperationNode-attachedconnectors-connectornode-readonl
  - BooleanOperationNode-boundvariables-readonly-field-in-variabl
  - BooleanOperationNode-inferredvariables-readonly-field-in-vari
  - BooleanOperationNode-resolvedvariablemodes-collectionid-strin
  - BooleanOperationNode-clearexplicitvariablemodeforcollectionco
  - BooleanOperationNode-opacity-number-blendmode-blendmode
  - BooleanOperationNode-ismask-boolean-masktype-masktype
  - BooleanOperationNode-effects-readonlyarray-effectstyleid-stri
  - BooleanOperationNode-seteffectstyleidasyncstyleid-string-prom
  - BooleanOperationNode-appendchildchild-scenenode-void
  - BooleanOperationNode-insertchildindex-number-child-scenenode-
  - BooleanOperationNode-findchildrencallback-node-scenenode-bool
  - BooleanOperationNode-findchildcallback-node-scenenode-boolean
  - BooleanOperationNode-findallcallback-node-scenenode-boolean-s
  - BooleanOperationNode-findonecallback-node-scenenode-boolean-s
  - BooleanOperationNode-findallwithcriteriacriteria-findallcrite
  - BooleanOperationNode-findwidgetnodesbywidgetidwidgetid-string
  - BooleanOperationNode-x-number-y-number
  - BooleanOperationNode-minwidth-number-null-maxwidth-number-nul
  - BooleanOperationNode-minheight-number-null-maxheight-number-n
  - BooleanOperationNode-relativetransform-transform
  - BooleanOperationNode-absolutetransform-transform-readonly-abs
  - BooleanOperationNode-layoutalign-min-center-max-stretch-inher
  - BooleanOperationNode-layoutgrow-number
  - BooleanOperationNode-layoutpositioning-auto-absolute
  - BooleanOperationNode-absoluterenderbounds-rect-null-readonly
  - BooleanOperationNode-constrainproportions-boolean-rotation-nu
  - BooleanOperationNode-layoutsizinghorizontal-fixed-hug-fill
  - BooleanOperationNode-layoutsizingvertical-fixed-hug-fill
  - BooleanOperationNode-resizewidth-number-height-number-void
  - BooleanOperationNode-resizewithoutconstraintswidth-number-hei
  - BooleanOperationNode-rescalescale-number-void-targetaspectrat
  - BooleanOperationNode-exportsettings-readonlyarray-exportasync
  - BooleanOperationNode-reactions-readonlyarray
  - BooleanOperationNode-setreactionsasyncreactions-array-promise
  - BooleanOperationNode-cornersmoothing-number-fills-readonlyarr
  - BooleanOperationNode-fillstyleid-string-figmamixed
  - BooleanOperationNode-setfillstyleidasyncstyleid-string-promis
  - BooleanOperationNode-strokestyleid-string
  - BooleanOperationNode-setstrokestyleidasyncstyleid-string-prom
  - BooleanOperationNode-strokejoin-strokejoin-figmamixed-strokea
  - BooleanOperationNode-dashpattern-readonlyarray-strokegeometry
  - BooleanOperationNode-strokecap-strokecap-figmamixed-strokemit
  - BooleanOperationNode-outlinestroke-vectornode-null
compiler: noos-figma
---

# BooleanOperationNode

Boolean operations combine any set of shape layers through one of four formulas: Union, Subtract, Intersect, and Exclude. The layers to be combined are stored in its `children` array. You can create boolean operation nodes using [`figma.union`](/plugin-docs/api/figma/#union)
, [`figma.subtract`](/plugin-docs/api/figma/#subtract)
, [`figma.intersect`](/plugin-docs/api/figma/#intersect)
, [`figma.exclude`](/plugin-docs/api/figma/#exclude)
.

Like the group node, the boolean operations node is always set to fit its children. As such, its position and size can change when you add or resize its children.

More information on how boolean operations work can be found on our [help page](https://help.figma.com/hc/en-us/articles/360039957534)
.

## Boolean operation properties
