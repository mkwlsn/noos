---
title: >-
  getDevResourcesAsync(options?: { includeChildren: boolean }): Promise +
  addDevResourceAsync(url: string, name?: string): Promise
slug: LineNode-getdevresourcesasyncoptions-includechild
source_file: plugin-api-LineNode.html
source_url: 'https://www.figma.com/plugin-docs/api/LineNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2a05de36e1edba29
token_count: 105
chunk_title: >-
  getDevResourcesAsync(options?: { includeChildren: boolean }): Promise +
  addDevResourceAsync(url: string, name?: string): Promise
chunk_slug: LineNode-getdevresourcesasyncoptions-includechild
chunk_index: 15
chunk_of_total: 54
parent_file: LineNode.md
parent_slug: LineNode
char_count: 366
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - LineNode-introduction
  - LineNode-id-string-readonly
  - LineNode-parent-basenode-childrenmixin-null-reado
  - LineNode-name-string-removed-boolean-readonly
  - LineNode-tostring-string
  - LineNode-remove-void-setrelaunchdatadata-command-
  - LineNode-getrelaunchdata-command-string-string-is
  - LineNode-getcssasync-promise-key-string-string-
  - LineNode-gettoplevelframe-framenode-undefined
  - LineNode-getplugindatakey-string-string
  - LineNode-setplugindatakey-string-value-string-voi
  - LineNode-getplugindatakeys-string
  - LineNode-getsharedplugindatanamespace-string-key-
  - LineNode-setsharedplugindatanamespace-string-key-
  - LineNode-getsharedplugindatakeysnamespace-string-
  - LineNode-editdevresourceasynccurrenturl-string-ne
  - LineNode-setdevresourcepreviewasyncurl-string-pre
  - LineNode-locked-boolean
  - LineNode-stucknodes-scenenode-readonly
  - LineNode-attachedconnectors-connectornode-readonl
  - LineNode-boundvariables-readonly-field-in-variabl
  - LineNode-inferredvariables-readonly-field-in-vari
  - LineNode-resolvedvariablemodes-collectionid-strin
  - LineNode-clearexplicitvariablemodeforcollectionco
  - LineNode-opacity-number-blendmode-blendmode
  - LineNode-ismask-boolean-masktype-masktype
  - LineNode-effects-readonlyarray-effectstyleid-stri
  - LineNode-seteffectstyleidasyncstyleid-string-prom
  - LineNode-fillstyleid-string-figmamixed
  - LineNode-setfillstyleidasyncstyleid-string-promis
  - LineNode-strokestyleid-string
  - LineNode-setstrokestyleidasyncstyleid-string-prom
  - LineNode-strokejoin-strokejoin-figmamixed-strokea
  - LineNode-dashpattern-readonlyarray-strokegeometry
  - LineNode-strokecap-strokecap-figmamixed-strokemit
  - LineNode-outlinestroke-vectornode-null
  - LineNode-fillgeometry-vectorpaths-readonly-x-numb
  - LineNode-maxwidth-number-null-minheight-number-nu
  - LineNode-maxheight-number-null-relativetransform-
  - LineNode-absolutetransform-transform-readonly-abs
  - LineNode-layoutalign-min-center-max-stretch-inher
  - LineNode-layoutgrow-number
  - LineNode-layoutpositioning-auto-absolute
  - LineNode-absoluterenderbounds-rect-null-readonly
  - LineNode-constrainproportions-boolean-rotation-nu
  - LineNode-layoutsizinghorizontal-fixed-hug-fill
  - LineNode-layoutsizingvertical-fixed-hug-fill
  - LineNode-resizewidth-number-height-number-void
  - LineNode-resizewithoutconstraintswidth-number-hei
  - LineNode-rescalescale-number-void-constraints-con
  - LineNode-exportsettings-readonlyarray-exportasync
  - LineNode-reactions-readonlyarray
  - LineNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'getDevResourcesAsync(options?: { includeChildren: boolean }): Promise'
  - 'addDevResourceAsync(url: string, name?: string): Promise'
compiler: noos-figma
---

Gets all of the dev resources on a node. This includes any inherited dev resources from components and component sets.

[View more →](/plugin-docs/api/properties/nodes-getdevresourcesasync/)

Adds a dev resource to a node. This will fail if the node already has a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-adddevresourceasync/)
