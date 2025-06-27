---
title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
slug: StarNode-remove-void-setrelaunchdatadata-command-
source_file: plugin-api-StarNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StarNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5e25d3c8878fcc0e
token_count: 159
chunk_title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
chunk_slug: StarNode-remove-void-setrelaunchdatadata-command-
chunk_index: 6
chunk_of_total: 57
parent_file: StarNode.md
parent_slug: StarNode
char_count: 556
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - StarNode-introduction-type-star-readonly
  - StarNode-innerradius-number
  - StarNode-id-string-readonly
  - StarNode-parent-basenode-childrenmixin-null-reado
  - StarNode-name-string-removed-boolean-readonly
  - StarNode-tostring-string
  - StarNode-getrelaunchdata-command-string-string-is
  - StarNode-getcssasync-promise-key-string-string-
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
merged_titles:
  - 'remove(): void'
  - 'setRelaunchData(data: { [command: string]: string }): void'
compiler: noos-figma
---

Removes this node and all of its children from the document.

[View more →](/plugin-docs/api/properties/nodes-remove/)

Sets state on the node to show a button and description when the node is selected. Clears the button and description when `relaunchData` is `{}`.

##### info

In Figma and Dev Mode, this shows up in the properties panel. In FigJam, this shows up in the property menu. See [here](/plugin-docs/api/properties/nodes-setrelaunchdata/#example-figma-design-ui)
 for examples.

[View more →](/plugin-docs/api/properties/nodes-setrelaunchdata/)
