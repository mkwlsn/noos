---
title: 'getCSSAsync(): Promise<{ [key: string]: string }>'
slug: EllipseNode-getcssasync-promise-key-string-string-
source_file: plugin-api-EllipseNode.html
source_url: 'https://www.figma.com/plugin-docs/api/EllipseNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6f328d3ce7af20a4
token_count: 62
chunk_title: 'getCSSAsync(): Promise<{ [key: string]: string }>'
chunk_slug: EllipseNode-getcssasync-promise-key-string-string-
chunk_index: 7
chunk_of_total: 56
parent_file: EllipseNode.md
parent_slug: EllipseNode
char_count: 214
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - EllipseNode-introduction
  - EllipseNode-arcdata-arcdata-id-string-readonly
  - EllipseNode-parent-basenode-childrenmixin-null-reado
  - EllipseNode-name-string-removed-boolean-readonly
  - EllipseNode-tostring-string
  - EllipseNode-remove-void-setrelaunchdatadata-command-
  - EllipseNode-getrelaunchdata-command-string-string-is
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
  - EllipseNode-resolvedvariablemodes-collectionid-strin
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
compiler: noos-figma
---

Resolves to a JSON object of CSS properties of the node. This is the same CSS that Figma shows in the inspect panel and is helpful if you are building a [plugin for code generation](/plugin-docs/codegen-plugins/)
.
