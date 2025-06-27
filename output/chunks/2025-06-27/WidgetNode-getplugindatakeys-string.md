---
title: 'getPluginDataKeys(): string[]'
slug: WidgetNode-getplugindatakeys-string
source_file: plugin-api-WidgetNode.html
source_url: 'https://www.figma.com/plugin-docs/api/WidgetNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7e44c85c4733e960
token_count: 66
chunk_title: 'getPluginDataKeys(): string[]'
chunk_slug: WidgetNode-getplugindatakeys-string
chunk_index: 15
chunk_of_total: 33
parent_file: WidgetNode.md
parent_slug: WidgetNode
char_count: 231
heading_level: h3
chunk_type: method
merge_type: atomic
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
  - WidgetNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

Retrieves a list of all keys stored on this node or style using using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. This enables iterating through all data stored privately on a node or style by your plugin.
