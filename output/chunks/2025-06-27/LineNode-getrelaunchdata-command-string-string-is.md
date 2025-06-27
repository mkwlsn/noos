---
title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
slug: LineNode-getrelaunchdata-command-string-string-is
source_file: plugin-api-LineNode.html
source_url: 'https://www.figma.com/plugin-docs/api/LineNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 645deeef9953ea32
token_count: 156
chunk_title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
chunk_slug: LineNode-getrelaunchdata-command-string-string-is
chunk_index: 6
chunk_of_total: 54
parent_file: LineNode.md
parent_slug: LineNode
char_count: 544
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - LineNode-introduction
  - LineNode-id-string-readonly
  - LineNode-parent-basenode-childrenmixin-null-reado
  - LineNode-name-string-removed-boolean-readonly
  - LineNode-tostring-string
  - LineNode-remove-void-setrelaunchdatadata-command-
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
  - LineNode-ismask-boolean-masktype-masktype
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
