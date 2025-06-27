---
title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
slug: WashiTapeNode-getrelaunchdata-command-string-string-is
source_file: plugin-api-WashiTapeNode.html
source_url: 'https://www.figma.com/plugin-docs/api/WashiTapeNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 645deeef9953ea32
token_count: 156
chunk_title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
chunk_slug: WashiTapeNode-getrelaunchdata-command-string-string-is
chunk_index: 6
chunk_of_total: 54
parent_file: WashiTapeNode.md
parent_slug: WashiTapeNode
char_count: 544
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - WashiTapeNode-introduction
  - WashiTapeNode-id-string-readonly
  - WashiTapeNode-parent-basenode-childrenmixin-null-reado
  - WashiTapeNode-name-string-removed-boolean-readonly
  - WashiTapeNode-tostring-string
  - WashiTapeNode-remove-void-setrelaunchdatadata-command-
  - WashiTapeNode-getcssasync-promise-key-string-string-
  - WashiTapeNode-gettoplevelframe-framenode-undefined
  - WashiTapeNode-getplugindatakey-string-string
  - WashiTapeNode-setplugindatakey-string-value-string-voi
  - WashiTapeNode-getplugindatakeys-string
  - WashiTapeNode-getsharedplugindatanamespace-string-key-
  - WashiTapeNode-setsharedplugindatanamespace-string-key-
  - WashiTapeNode-getsharedplugindatakeysnamespace-string-
  - WashiTapeNode-getdevresourcesasyncoptions-includechild
  - WashiTapeNode-editdevresourceasynccurrenturl-string-ne
  - WashiTapeNode-setdevresourcepreviewasyncurl-string-pre
  - WashiTapeNode-locked-boolean
  - WashiTapeNode-stucknodes-scenenode-readonly
  - WashiTapeNode-attachedconnectors-connectornode-readonl
  - WashiTapeNode-boundvariables-readonly-field-in-variabl
  - WashiTapeNode-inferredvariables-readonly-field-in-vari
  - WashiTapeNode-resolvedvariablemodes-collectionid-strin
  - WashiTapeNode-clearexplicitvariablemodeforcollectionco
  - WashiTapeNode-opacity-number-blendmode-blendmode
  - WashiTapeNode-ismask-boolean-masktype-masktype
  - WashiTapeNode-effects-readonlyarray-effectstyleid-stri
  - WashiTapeNode-seteffectstyleidasyncstyleid-string-prom
  - WashiTapeNode-fillstyleid-string-figmamixed
  - WashiTapeNode-setfillstyleidasyncstyleid-string-promis
  - WashiTapeNode-strokestyleid-string
  - WashiTapeNode-setstrokestyleidasyncstyleid-string-prom
  - WashiTapeNode-strokejoin-strokejoin-figmamixed-strokea
  - WashiTapeNode-dashpattern-readonlyarray-strokegeometry
  - WashiTapeNode-strokecap-strokecap-figmamixed-strokemit
  - WashiTapeNode-outlinestroke-vectornode-null
  - WashiTapeNode-fillgeometry-vectorpaths-readonly-x-numb
  - WashiTapeNode-maxwidth-number-null-minheight-number-nu
  - WashiTapeNode-maxheight-number-null-relativetransform-
  - WashiTapeNode-absolutetransform-transform-readonly-abs
  - WashiTapeNode-layoutalign-min-center-max-stretch-inher
  - WashiTapeNode-layoutgrow-number
  - WashiTapeNode-layoutpositioning-auto-absolute
  - WashiTapeNode-absoluterenderbounds-rect-null-readonly
  - WashiTapeNode-constrainproportions-boolean-rotation-nu
  - WashiTapeNode-layoutsizinghorizontal-fixed-hug-fill
  - WashiTapeNode-layoutsizingvertical-fixed-hug-fill
  - WashiTapeNode-resizewidth-number-height-number-void
  - WashiTapeNode-resizewithoutconstraintswidth-number-hei
  - WashiTapeNode-rescalescale-number-void-targetaspectrat
  - WashiTapeNode-exportsettings-readonlyarray-exportasync
  - WashiTapeNode-reactions-readonlyarray
  - WashiTapeNode-setreactionsasyncreactions-array-promise
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
