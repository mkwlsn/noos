---
title: >-
  resolvedVariableModes: { [collectionId: string]: string } +
  explicitVariableModes: { [collectionId: string]: string }
slug: EllipseNode-resolvedvariablemodes-collectionid-strin
source_file: plugin-api-EllipseNode.html
source_url: 'https://www.figma.com/plugin-docs/api/EllipseNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9750894e0b5ad9d5
token_count: 126
chunk_title: >-
  resolvedVariableModes: { [collectionId: string]: string } +
  explicitVariableModes: { [collectionId: string]: string }
chunk_slug: EllipseNode-resolvedvariablemodes-collectionid-strin
chunk_index: 23
chunk_of_total: 56
parent_file: EllipseNode.md
parent_slug: EllipseNode
char_count: 441
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - EllipseNode-introduction
  - EllipseNode-arcdata-arcdata-id-string-readonly
  - EllipseNode-parent-basenode-childrenmixin-null-reado
  - EllipseNode-name-string-removed-boolean-readonly
  - EllipseNode-tostring-string
  - EllipseNode-remove-void-setrelaunchdatadata-command-
  - EllipseNode-getrelaunchdata-command-string-string-is
  - EllipseNode-getcssasync-promise-key-string-string-
  - EllipseNode-gettoplevelframe-framenode-undefined
  - EllipseNode-getplugindatakey-string-string
  - EllipseNode-setplugindatakey-string-value-string-voi
  - EllipseNode-getplugindatakeys-string
  - EllipseNode-getsharedplugindatanamespace-string-key-
  - EllipseNode-setsharedplugindatanamespace-string-key-
  - EllipseNode-getsharedplugindatakeysnamespace-string-
  - EllipseNode-getdevresourcesasyncoptions-includechild
  - EllipseNode-editdevresourceasynccurrenturl-string-ne
  - EllipseNode-setdevresourcepreviewasyncurl-string-pre
  - EllipseNode-locked-boolean
  - EllipseNode-stucknodes-scenenode-readonly
  - EllipseNode-attachedconnectors-connectornode-readonl
  - EllipseNode-boundvariables-readonly-field-in-variabl
  - EllipseNode-inferredvariables-readonly-field-in-vari
  - EllipseNode-clearexplicitvariablemodeforcollectionco
  - EllipseNode-opacity-number-blendmode-blendmode
  - EllipseNode-ismask-boolean-masktype-masktype
  - EllipseNode-effects-readonlyarray-effectstyleid-stri
  - EllipseNode-seteffectstyleidasyncstyleid-string-prom
  - EllipseNode-cornersmoothing-number-fills-readonlyarr
  - EllipseNode-fillstyleid-string-figmamixed
  - EllipseNode-setfillstyleidasyncstyleid-string-promis
  - EllipseNode-strokestyleid-string
  - EllipseNode-setstrokestyleidasyncstyleid-string-prom
  - EllipseNode-strokejoin-strokejoin-figmamixed-strokea
  - EllipseNode-dashpattern-readonlyarray-strokegeometry
  - EllipseNode-strokecap-strokecap-figmamixed-strokemit
  - EllipseNode-outlinestroke-vectornode-null
  - EllipseNode-fillgeometry-vectorpaths-readonly-x-numb
  - EllipseNode-maxwidth-number-null-minheight-number-nu
  - EllipseNode-maxheight-number-null-relativetransform-
  - EllipseNode-absolutetransform-transform-readonly-abs
  - EllipseNode-layoutalign-min-center-max-stretch-inher
  - EllipseNode-layoutgrow-number
  - EllipseNode-layoutpositioning-auto-absolute
  - EllipseNode-absoluterenderbounds-rect-null-readonly
  - EllipseNode-constrainproportions-boolean-rotation-nu
  - EllipseNode-layoutsizinghorizontal-fixed-hug-fill
  - EllipseNode-layoutsizingvertical-fixed-hug-fill
  - EllipseNode-resizewidth-number-height-number-void
  - EllipseNode-resizewithoutconstraintswidth-number-hei
  - EllipseNode-rescalescale-number-void-constraints-con
  - EllipseNode-targetaspectratio-vector-null-readonly
  - EllipseNode-exportsettings-readonlyarray-exportasync
  - EllipseNode-reactions-readonlyarray
  - EllipseNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'resolvedVariableModes: { [collectionId: string]: string }'
  - 'explicitVariableModes: { [collectionId: string]: string }'
compiler: noos-figma
---

The resolved mode for this node for each variable collection in this file.

[View more →](/plugin-docs/api/properties/nodes-resolvedvariablemodes/)

The explicitly set modes for this node.
For `SceneNodes`, represents a subset of [`resolvedVariableModes`](/plugin-docs/api/properties/nodes-resolvedvariablemodes/)
.
Note that this does not include [workspace and team-default modes](https://help.figma.com/hc/en-us/articles/12611253730071)
.
