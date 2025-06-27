---
title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
slug: BooleanOperationNode-getrelaunchdata-command-string-string-is
source_file: plugin-api-BooleanOperationNode.html
source_url: 'https://www.figma.com/plugin-docs/api/BooleanOperationNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 645deeef9953ea32
token_count: 156
chunk_title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
chunk_slug: BooleanOperationNode-getrelaunchdata-command-string-string-is
chunk_index: 6
chunk_of_total: 64
parent_file: BooleanOperationNode.md
parent_slug: BooleanOperationNode
char_count: 544
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - BooleanOperationNode-introduction
  - BooleanOperationNode-id-string-readonly
  - BooleanOperationNode-parent-basenode-childrenmixin-null-reado
  - BooleanOperationNode-name-string-removed-boolean-readonly
  - BooleanOperationNode-tostring-string
  - BooleanOperationNode-remove-void-setrelaunchdatadata-command-
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
