---
title: 'getTopLevelFrame(): FrameNode | undefined'
slug: WashiTapeNode-gettoplevelframe-framenode-undefined
source_file: plugin-api-WashiTapeNode.html
source_url: 'https://www.figma.com/plugin-docs/api/WashiTapeNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 870bdd57b99cfd2b
token_count: 73
chunk_title: 'getTopLevelFrame(): FrameNode | undefined'
chunk_slug: WashiTapeNode-gettoplevelframe-framenode-undefined
chunk_index: 8
chunk_of_total: 54
parent_file: WashiTapeNode.md
parent_slug: WashiTapeNode
char_count: 254
heading_level: h3
chunk_type: method
merge_type: atomic
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
compiler: noos-figma
---

Returns the top-most frame that contains this node. If the node is not inside a frame, this will return undefined.

##### info

This function will only work in Figma Design and will throw an error if called in FigJam or Slides.

## Plugin data properties
