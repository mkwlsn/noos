---
title: 'setPluginData(key: string, value: string): void'
slug: WidgetNode-setplugindatakey-string-value-string-voi
source_file: plugin-api-WidgetNode.html
source_url: 'https://www.figma.com/plugin-docs/api/WidgetNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d482d58dab7fc304
token_count: 64
chunk_title: 'setPluginData(key: string, value: string): void'
chunk_slug: WidgetNode-setplugindatakey-string-value-string-voi
chunk_index: 14
chunk_of_total: 33
parent_file: WidgetNode.md
parent_slug: WidgetNode
char_count: 224
heading_level: h3
chunk_type: guide
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
  - WidgetNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

Lets you store custom information on any node or style, private to your plugin. The total size of your entry (`pluginId`, `key`, `value`) cannot exceed 100 kB.

[View more →](/plugin-docs/api/properties/nodes-setplugindata/)
