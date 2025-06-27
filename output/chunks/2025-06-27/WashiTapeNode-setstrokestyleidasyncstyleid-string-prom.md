---
title: >-
  setStrokeStyleIdAsync(styleId: string): Promise + strokeWeight: number |
  figma.mixed
slug: WashiTapeNode-setstrokestyleidasyncstyleid-string-prom
source_file: plugin-api-WashiTapeNode.html
source_url: 'https://www.figma.com/plugin-docs/api/WashiTapeNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b2237b49b7a6109a
token_count: 189
chunk_title: >-
  setStrokeStyleIdAsync(styleId: string): Promise + strokeWeight: number |
  figma.mixed
chunk_slug: WashiTapeNode-setstrokestyleidasyncstyleid-string-prom
chunk_index: 32
chunk_of_total: 54
parent_file: WashiTapeNode.md
parent_slug: WashiTapeNode
char_count: 659
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
  - WashiTapeNode-getrelaunchdata-command-string-string-is
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
  - 'setStrokeStyleIdAsync(styleId: string): Promise'
  - 'strokeWeight: number | figma.mixed'
compiler: noos-figma
---

Set the [`PaintStyle`](/plugin-docs/api/PaintStyle/)
 that the [`strokes`](/plugin-docs/api/node-properties/#strokes)
 property of this node is linked to.

The thickness of the stroke, in pixels. This value must be non-negative and can be fractional.

##### caution

For rectangle nodes or frame-like nodes using different individual stroke weights, this property will return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/)
.

##### info

For rectangle nodes or frame-like nodes, individual stroke weights can be set for each side using the following properties:

- `strokeTopWeight`
- `strokeBottomWeight`
- `strokeLeftWeight`
- `strokeRightWeight`
