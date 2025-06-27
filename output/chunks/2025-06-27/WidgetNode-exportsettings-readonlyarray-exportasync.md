---
title: >-
  exportSettings: ReadonlyArray + exportAsync(settings: ExportSettingsREST):
  Promise
slug: WidgetNode-exportsettings-readonlyarray-exportasync
source_file: plugin-api-WidgetNode.html
source_url: 'https://www.figma.com/plugin-docs/api/WidgetNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 924f9f28fdb126d1
token_count: 188
chunk_title: >-
  exportSettings: ReadonlyArray + exportAsync(settings: ExportSettingsREST):
  Promise
chunk_slug: WidgetNode-exportsettings-readonlyarray-exportasync
chunk_index: 32
chunk_of_total: 33
parent_file: WidgetNode.md
parent_slug: WidgetNode
char_count: 658
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - WidgetNode-introduction-type-widget-readonly
  - WidgetNode-widgetid-string-readonly
  - WidgetNode-widgetsyncedstate-key-string-any-readonl
  - WidgetNode-clone-widgetnode-clonewidgetsyncedstateo
  - WidgetNode-setwidgetsyncedstatesyncedstate-name-str
  - WidgetNode-id-string-readonly
  - WidgetNode-parent-basenode-childrenmixin-null-reado
  - WidgetNode-name-string-removed-boolean-readonly
  - WidgetNode-tostring-string
  - WidgetNode-remove-void-setrelaunchdatadata-command-
  - WidgetNode-getrelaunchdata-command-string-string-is
  - WidgetNode-getcssasync-promise-key-string-string-
  - WidgetNode-gettoplevelframe-framenode-undefined
  - WidgetNode-getplugindatakey-string-string
  - WidgetNode-setplugindatakey-string-value-string-voi
  - WidgetNode-getplugindatakeys-string
  - WidgetNode-getsharedplugindatanamespace-string-key-
  - WidgetNode-setsharedplugindatanamespace-string-key-
  - WidgetNode-getsharedplugindatakeysnamespace-string-
  - WidgetNode-getdevresourcesasyncoptions-includechild
  - WidgetNode-editdevresourceasynccurrenturl-string-ne
  - WidgetNode-setdevresourcepreviewasyncurl-string-pre
  - WidgetNode-maxwidth-number-null-minheight-number-nu
  - WidgetNode-maxheight-number-null-relativetransform-
  - WidgetNode-absolutetransform-transform-readonly-abs
  - WidgetNode-visible-boolean-locked-boolean
  - WidgetNode-stucknodes-scenenode-readonly
  - WidgetNode-attachedconnectors-connectornode-readonl
  - WidgetNode-boundvariables-readonly-field-in-variabl
  - WidgetNode-inferredvariables-readonly-field-in-vari
  - WidgetNode-resolvedvariablemodes-collectionid-strin
  - WidgetNode-clearexplicitvariablemodeforcollectionco
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

## Stickable properties

In FigJam a stickable is any node that sticks to other nodes when put on top of them. If the node the stickable is `stuckTo` moves, the stickable moves along with it.
