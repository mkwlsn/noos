---
title: 'setFillStyleIdAsync(styleId: string): Promise + strokes: ReadonlyArray'
slug: HighlightNode-setfillstyleidasyncstyleid-string-promis
source_file: plugin-api-HighlightNode.html
source_url: 'https://www.figma.com/plugin-docs/api/HighlightNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: a7cea1cd5f4c8dd4
token_count: 89
chunk_title: 'setFillStyleIdAsync(styleId: string): Promise + strokes: ReadonlyArray'
chunk_slug: HighlightNode-setfillstyleidasyncstyleid-string-promis
chunk_index: 32
chunk_of_total: 57
parent_file: HighlightNode.md
parent_slug: HighlightNode
char_count: 309
heading_level: h3
chunk_type: guide
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
  - 'setFillStyleIdAsync(styleId: string): Promise'
  - 'strokes: ReadonlyArray'
compiler: noos-figma
---

Sets the [`PaintStyle`](/plugin-docs/api/PaintStyle/)
 that the [`fills`](/plugin-docs/api/properties/nodes-fills/)
 property of this node is linked to.

The paints used to fill the area of the shape's strokes. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.
