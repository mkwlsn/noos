---
title: 'setSharedPluginData(namespace: string, key: string, value: string): void'
slug: StampNode-setsharedplugindatanamespace-string-key-
source_file: plugin-api-StampNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StampNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 61d4f5eefdf6533f
token_count: 66
chunk_title: 'setSharedPluginData(namespace: string, key: string, value: string): void'
chunk_slug: StampNode-setsharedplugindatanamespace-string-key-
chunk_index: 14
chunk_of_total: 57
parent_file: StampNode.md
parent_slug: StampNode
char_count: 230
heading_level: h3
chunk_type: guide
merge_type: atomic
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
  - StampNode-maxheight-number-null-relativetransform-
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
compiler: noos-figma
---

Lets you store custom information on any node or style, public to all plugins. The total size of your entry (`namespace`, `key`, `value`) cannot exceed 100 kB.

[View more →](/plugin-docs/api/properties/nodes-setsharedplugindata/)
