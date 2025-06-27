---
title: >-
  exportSettings: ReadonlyArray + exportAsync(settings: ExportSettingsREST):
  Promise
slug: ShapeWithTextNode-exportsettings-readonlyarray-exportasync
source_file: plugin-api-ShapeWithTextNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ShapeWithTextNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f9c0bb9aa40cb7f1
token_count: 133
chunk_title: >-
  exportSettings: ReadonlyArray + exportAsync(settings: ExportSettingsREST):
  Promise
chunk_slug: ShapeWithTextNode-exportsettings-readonlyarray-exportasync
chunk_index: 38
chunk_of_total: 39
parent_file: ShapeWithTextNode.md
parent_slug: ShapeWithTextNode
char_count: 465
heading_level: h3
chunk_type: guide
merge_type: merged
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
  - ShapeWithTextNode-getsharedplugindatakeysnamespace-string-
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
merged_titles:
  - 'exportSettings: ReadonlyArray'
  - 'exportAsync(settings: ExportSettingsREST): Promise'
compiler: noos-figma
---

List of export settings stored on the node. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

Exports the node as an encoded image.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-exportasync/)
