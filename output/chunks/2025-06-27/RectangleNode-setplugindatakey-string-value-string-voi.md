---
title: 'setPluginData(key: string, value: string): void'
slug: RectangleNode-setplugindatakey-string-value-string-voi
source_file: plugin-api-RectangleNode.html
source_url: 'https://www.figma.com/plugin-docs/api/RectangleNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d482d58dab7fc304
token_count: 64
chunk_title: 'setPluginData(key: string, value: string): void'
chunk_slug: RectangleNode-setplugindatakey-string-value-string-voi
chunk_index: 10
chunk_of_total: 61
parent_file: RectangleNode.md
parent_slug: RectangleNode
char_count: 224
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - RectangleNode-introduction
  - RectangleNode-id-string-readonly
  - RectangleNode-parent-basenode-childrenmixin-null-reado
  - RectangleNode-name-string-removed-boolean-readonly
  - RectangleNode-tostring-string
  - RectangleNode-remove-void-setrelaunchdatadata-command-
  - RectangleNode-getrelaunchdata-command-string-string-is
  - RectangleNode-getcssasync-promise-key-string-string-
  - RectangleNode-gettoplevelframe-framenode-undefined
  - RectangleNode-getplugindatakey-string-string
  - RectangleNode-getplugindatakeys-string
  - RectangleNode-getsharedplugindatanamespace-string-key-
  - RectangleNode-setsharedplugindatanamespace-string-key-
  - RectangleNode-getsharedplugindatakeysnamespace-string-
  - RectangleNode-getdevresourcesasyncoptions-includechild
  - RectangleNode-editdevresourceasynccurrenturl-string-ne
  - RectangleNode-setdevresourcepreviewasyncurl-string-pre
  - RectangleNode-locked-boolean
  - RectangleNode-stucknodes-scenenode-readonly
  - RectangleNode-attachedconnectors-connectornode-readonl
  - RectangleNode-boundvariables-readonly-field-in-variabl
  - RectangleNode-inferredvariables-readonly-field-in-vari
  - RectangleNode-resolvedvariablemodes-collectionid-strin
  - RectangleNode-clearexplicitvariablemodeforcollectionco
  - RectangleNode-opacity-number-blendmode-blendmode
  - RectangleNode-ismask-boolean-masktype-masktype
  - RectangleNode-effects-readonlyarray-effectstyleid-stri
  - RectangleNode-seteffectstyleidasyncstyleid-string-prom
  - RectangleNode-cornersmoothing-number-bottomrightradius
  - RectangleNode-fills-readonlyarray-figmamixed
  - RectangleNode-fillstyleid-string-figmamixed
  - RectangleNode-setfillstyleidasyncstyleid-string-promis
  - RectangleNode-strokestyleid-string
  - RectangleNode-setstrokestyleidasyncstyleid-string-prom
  - RectangleNode-strokejoin-strokejoin-figmamixed-strokea
  - RectangleNode-dashpattern-readonlyarray-strokegeometry
  - RectangleNode-strokecap-strokecap-figmamixed-strokemit
  - RectangleNode-outlinestroke-vectornode-null
  - RectangleNode-fillgeometry-vectorpaths-readonly
  - RectangleNode-stroketopweight-number-strokebottomweigh
  - RectangleNode-strokeleftweight-number-strokerightweigh
  - RectangleNode-x-number-y-number
  - RectangleNode-minwidth-number-null-maxwidth-number-nul
  - RectangleNode-minheight-number-null-maxheight-number-n
  - RectangleNode-relativetransform-transform
  - RectangleNode-absolutetransform-transform-readonly-abs
  - RectangleNode-layoutalign-min-center-max-stretch-inher
  - RectangleNode-layoutgrow-number
  - RectangleNode-layoutpositioning-auto-absolute
  - RectangleNode-absoluterenderbounds-rect-null-readonly
  - RectangleNode-constrainproportions-boolean-rotation-nu
  - RectangleNode-layoutsizinghorizontal-fixed-hug-fill
  - RectangleNode-layoutsizingvertical-fixed-hug-fill
  - RectangleNode-resizewidth-number-height-number-void
  - RectangleNode-resizewithoutconstraintswidth-number-hei
  - RectangleNode-rescalescale-number-void-constraints-con
  - RectangleNode-targetaspectratio-vector-null-readonly
  - RectangleNode-exportsettings-readonlyarray-exportasync
  - RectangleNode-reactions-readonlyarray
  - RectangleNode-setreactionsasyncreactions-array-promise
compiler: noos-figma
---

Lets you store custom information on any node or style, private to your plugin. The total size of your entry (`pluginId`, `key`, `value`) cannot exceed 100 kB.

[View more →](/plugin-docs/api/properties/nodes-setplugindata/)
