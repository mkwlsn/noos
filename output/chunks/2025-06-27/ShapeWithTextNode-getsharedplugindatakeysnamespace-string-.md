---
title: 'getSharedPluginDataKeys(namespace: string): string[]'
slug: ShapeWithTextNode-getsharedplugindatakeysnamespace-string-
source_file: plugin-api-ShapeWithTextNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ShapeWithTextNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 3fd0ffde5160545a
token_count: 70
chunk_title: 'getSharedPluginDataKeys(namespace: string): string[]'
chunk_slug: ShapeWithTextNode-getsharedplugindatakeysnamespace-string-
chunk_index: 24
chunk_of_total: 39
parent_file: ShapeWithTextNode.md
parent_slug: ShapeWithTextNode
char_count: 242
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - ShapeWithTextNode-introduction
  - ShapeWithTextNode-type-shapewithtext-readonly-shapetype-sq
  - ShapeWithTextNode-rotation-number
  - ShapeWithTextNode-clone-shapewithtextnode-fills-readonlyar
  - ShapeWithTextNode-fillstyleid-string-figmamixed
  - ShapeWithTextNode-setfillstyleidasyncstyleid-string-promis
  - ShapeWithTextNode-strokestyleid-string
  - ShapeWithTextNode-setstrokestyleidasyncstyleid-string-prom
  - ShapeWithTextNode-strokejoin-strokejoin-figmamixed-strokea
  - ShapeWithTextNode-dashpattern-readonlyarray-strokegeometry
  - ShapeWithTextNode-opacity-number-blendmode-blendmode
  - ShapeWithTextNode-id-string-readonly
  - ShapeWithTextNode-parent-basenode-childrenmixin-null-reado
  - ShapeWithTextNode-name-string-removed-boolean-readonly
  - ShapeWithTextNode-tostring-string
  - ShapeWithTextNode-remove-void-setrelaunchdatadata-command-
  - ShapeWithTextNode-getrelaunchdata-command-string-string-is
  - ShapeWithTextNode-getcssasync-promise-key-string-string-
  - ShapeWithTextNode-gettoplevelframe-framenode-undefined
  - ShapeWithTextNode-getplugindatakey-string-string
  - ShapeWithTextNode-setplugindatakey-string-value-string-voi
  - ShapeWithTextNode-getplugindatakeys-string
  - ShapeWithTextNode-getsharedplugindatanamespace-string-key-
  - ShapeWithTextNode-setsharedplugindatanamespace-string-key-
  - ShapeWithTextNode-getdevresourcesasyncoptions-includechild
  - ShapeWithTextNode-editdevresourceasynccurrenturl-string-ne
  - ShapeWithTextNode-setdevresourcepreviewasyncurl-string-pre
  - ShapeWithTextNode-maxwidth-number-null-minheight-number-nu
  - ShapeWithTextNode-maxheight-number-null-relativetransform-
  - ShapeWithTextNode-absolutetransform-transform-readonly-abs
  - ShapeWithTextNode-visible-boolean-locked-boolean
  - ShapeWithTextNode-stucknodes-scenenode-readonly
  - ShapeWithTextNode-attachedconnectors-connectornode-readonl
  - ShapeWithTextNode-boundvariables-readonly-field-in-variabl
  - ShapeWithTextNode-inferredvariables-readonly-field-in-vari
  - ShapeWithTextNode-resolvedvariablemodes-collectionid-strin
  - ShapeWithTextNode-clearexplicitvariablemodeforcollectionco
  - ShapeWithTextNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

Retrieves a list of all keys stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/)
. This enables iterating through all data stored in a given namespace.

## Dev resource properties
