---
title: 'dashPattern: ReadonlyArray + strokeGeometry: VectorPaths [readonly]'
slug: WashiTapeNode-dashpattern-readonlyarray-strokegeometry
source_file: plugin-api-WashiTapeNode.html
source_url: 'https://www.figma.com/plugin-docs/api/WashiTapeNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 4abe154d462719f8
token_count: 65
chunk_title: 'dashPattern: ReadonlyArray + strokeGeometry: VectorPaths [readonly]'
chunk_slug: WashiTapeNode-dashpattern-readonlyarray-strokegeometry
chunk_index: 34
chunk_of_total: 54
parent_file: WashiTapeNode.md
parent_slug: WashiTapeNode
char_count: 226
heading_level: h3
chunk_type: guide
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
  - WashiTapeNode-setstrokestyleidasyncstyleid-string-prom
  - WashiTapeNode-strokejoin-strokejoin-figmamixed-strokea
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
  - 'dashPattern: ReadonlyArray'
  - 'strokeGeometry: VectorPaths [readonly]'
compiler: noos-figma
---

A list of numbers specifying alternating dash and gap lengths, in pixels.

An array of paths representing the object strokes relative to the node.
StrokeGeometry is always from the center regardless of the nodes `strokeAlign`.
