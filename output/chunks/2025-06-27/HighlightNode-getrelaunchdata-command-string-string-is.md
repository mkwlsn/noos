---
title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
slug: HighlightNode-getrelaunchdata-command-string-string-is
source_file: plugin-api-HighlightNode.html
source_url: 'https://www.figma.com/plugin-docs/api/HighlightNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 645deeef9953ea32
token_count: 156
chunk_title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
chunk_slug: HighlightNode-getrelaunchdata-command-string-string-is
chunk_index: 7
chunk_of_total: 57
parent_file: HighlightNode.md
parent_slug: HighlightNode
char_count: 544
heading_level: h3
chunk_type: method
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
  - 'getRelaunchData(): { [command: string]: string }'
  - 'isAsset: boolean [readonly]'
compiler: noos-figma
---

Retreives the reluanch data stored on this node using [`setRelaunchData`](/plugin-docs/api/properties/nodes-setrelaunchdata/)

Returns true if Figma detects that a node is an asset, otherwise returns false. An asset is is either an icon or a raster image.

This property is useful if you’re building a [plugin for code generation](/plugin-docs/codegen-plugins/)
.

##### info

This property uses a set of heuristics to determine if a node is an asset. At a high level an icon is a small vector graphic and an image is a node with an image fill.
