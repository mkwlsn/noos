---
title: 'setSharedPluginData(namespace: string, key: string, value: string): void'
slug: BooleanOperationNode-setsharedplugindatanamespace-string-key-
source_file: plugin-api-BooleanOperationNode.html
source_url: 'https://www.figma.com/plugin-docs/api/BooleanOperationNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 61d4f5eefdf6533f
token_count: 66
chunk_title: 'setSharedPluginData(namespace: string, key: string, value: string): void'
chunk_slug: BooleanOperationNode-setsharedplugindatanamespace-string-key-
chunk_index: 13
chunk_of_total: 64
parent_file: BooleanOperationNode.md
parent_slug: BooleanOperationNode
char_count: 230
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - BooleanOperationNode-introduction
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

Lets you store custom information on any node or style, public to all plugins. The total size of your entry (`namespace`, `key`, `value`) cannot exceed 100 kB.

[View more →](/plugin-docs/api/properties/nodes-setsharedplugindata/)
