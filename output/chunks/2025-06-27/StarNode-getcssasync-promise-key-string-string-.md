---
title: 'getCSSAsync(): Promise<{ [key: string]: string }>'
slug: StarNode-getcssasync-promise-key-string-string-
source_file: plugin-api-StarNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StarNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6f328d3ce7af20a4
token_count: 62
chunk_title: 'getCSSAsync(): Promise<{ [key: string]: string }>'
chunk_slug: StarNode-getcssasync-promise-key-string-string-
chunk_index: 8
chunk_of_total: 57
parent_file: StarNode.md
parent_slug: StarNode
char_count: 214
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - StarNode-introduction-type-star-readonly
  - StarNode-innerradius-number
  - StarNode-id-string-readonly
  - StarNode-parent-basenode-childrenmixin-null-reado
  - StarNode-name-string-removed-boolean-readonly
  - StarNode-tostring-string
  - StarNode-remove-void-setrelaunchdatadata-command-
  - StarNode-getrelaunchdata-command-string-string-is
  - StarNode-gettoplevelframe-framenode-undefined
  - StarNode-getplugindatakey-string-string
  - StarNode-setplugindatakey-string-value-string-voi
  - StarNode-getplugindatakeys-string
  - StarNode-getsharedplugindatanamespace-string-key-
  - StarNode-setsharedplugindatanamespace-string-key-
  - StarNode-getsharedplugindatakeysnamespace-string-
  - StarNode-getdevresourcesasyncoptions-includechild
  - StarNode-editdevresourceasynccurrenturl-string-ne
  - StarNode-setdevresourcepreviewasyncurl-string-pre
  - StarNode-locked-boolean
  - StarNode-stucknodes-scenenode-readonly
  - StarNode-attachedconnectors-connectornode-readonl
  - StarNode-boundvariables-readonly-field-in-variabl
  - StarNode-inferredvariables-readonly-field-in-vari
  - StarNode-resolvedvariablemodes-collectionid-strin
  - StarNode-clearexplicitvariablemodeforcollectionco
  - StarNode-opacity-number-blendmode-blendmode
  - StarNode-ismask-boolean-masktype-masktype
  - StarNode-effects-readonlyarray-effectstyleid-stri
  - StarNode-seteffectstyleidasyncstyleid-string-prom
  - StarNode-cornersmoothing-number-fills-readonlyarr
  - StarNode-fillstyleid-string-figmamixed
  - StarNode-setfillstyleidasyncstyleid-string-promis
  - StarNode-strokestyleid-string
  - StarNode-setstrokestyleidasyncstyleid-string-prom
  - StarNode-strokejoin-strokejoin-figmamixed-strokea
  - StarNode-dashpattern-readonlyarray-strokegeometry
  - StarNode-strokecap-strokecap-figmamixed-strokemit
  - StarNode-outlinestroke-vectornode-null
  - StarNode-fillgeometry-vectorpaths-readonly-x-numb
  - StarNode-maxwidth-number-null-minheight-number-nu
  - StarNode-maxheight-number-null-relativetransform-
  - StarNode-absolutetransform-transform-readonly-abs
  - StarNode-layoutalign-min-center-max-stretch-inher
  - StarNode-layoutgrow-number
  - StarNode-layoutpositioning-auto-absolute
  - StarNode-absoluterenderbounds-rect-null-readonly
  - StarNode-constrainproportions-boolean-rotation-nu
  - StarNode-layoutsizinghorizontal-fixed-hug-fill
  - StarNode-layoutsizingvertical-fixed-hug-fill
  - StarNode-resizewidth-number-height-number-void
  - StarNode-resizewithoutconstraintswidth-number-hei
  - StarNode-rescalescale-number-void-constraints-con
  - StarNode-targetaspectratio-vector-null-readonly
  - StarNode-exportsettings-readonlyarray-exportasync
  - StarNode-reactions-readonlyarray
  - StarNode-setreactionsasyncreactions-array-promise
compiler: noos-figma
---

Resolves to a JSON object of CSS properties of the node. This is the same CSS that Figma shows in the inspect panel and is helpful if you are building a [plugin for code generation](/plugin-docs/codegen-plugins/)
.
