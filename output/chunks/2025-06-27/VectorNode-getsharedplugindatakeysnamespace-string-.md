---
title: 'getSharedPluginDataKeys(namespace: string): string[]'
slug: VectorNode-getsharedplugindatakeysnamespace-string-
source_file: plugin-api-VectorNode.html
source_url: 'https://www.figma.com/plugin-docs/api/VectorNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 3fd0ffde5160545a
token_count: 70
chunk_title: 'getSharedPluginDataKeys(namespace: string): string[]'
chunk_slug: VectorNode-getsharedplugindatakeysnamespace-string-
chunk_index: 15
chunk_of_total: 57
parent_file: VectorNode.md
parent_slug: VectorNode
char_count: 242
heading_level: h3
chunk_type: guide
merge_type: atomic
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
  - VectorNode-maxheight-number-null-relativetransform-
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
compiler: noos-figma
---

Retrieves a list of all keys stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/)
. This enables iterating through all data stored in a given namespace.

## Dev resource properties
