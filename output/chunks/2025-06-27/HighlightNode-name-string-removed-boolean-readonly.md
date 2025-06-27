---
title: 'name: string + removed: boolean [readonly]'
slug: HighlightNode-name-string-removed-boolean-readonly
source_file: plugin-api-HighlightNode.html
source_url: 'https://www.figma.com/plugin-docs/api/HighlightNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c4baeb2f9c019773
token_count: 141
chunk_title: 'name: string + removed: boolean [readonly]'
chunk_slug: HighlightNode-name-string-removed-boolean-readonly
chunk_index: 4
chunk_of_total: 57
parent_file: HighlightNode.md
parent_slug: HighlightNode
char_count: 491
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - HighlightNode-introduction
  - HighlightNode-vectornetwork-vectornetwork
  - HighlightNode-handlemirroring-handlemirroring-figmamix
  - HighlightNode-parent-basenode-childrenmixin-null-reado
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
  - HighlightNode-ismask-boolean-masktype-masktype
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
  - 'name: string'
  - 'removed: boolean [readonly]'
compiler: noos-figma
---

The name of the layer that appears in the layers panel. Calling `figma.root.name` will return the name, read-only, of the current file.

[View more →](/plugin-docs/api/properties/nodes-name/)

Returns true if this node has been removed since it was first accessed. If your plugin stays open for a while and stores references to nodes, you should write your code defensively and check that the nodes haven't been removed by the user.

[View more →](/plugin-docs/api/properties/nodes-removed/)
