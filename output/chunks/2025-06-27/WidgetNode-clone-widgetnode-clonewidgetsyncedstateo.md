---
title: >-
  clone(): WidgetNode + cloneWidget(syncedStateOverrides: { [name: string]: any
  }, syncedMapOverrides?: { [mapName: string]: { [key: string]: any } }):
  WidgetNode
slug: WidgetNode-clone-widgetnode-clonewidgetsyncedstateo
source_file: plugin-api-WidgetNode.html
source_url: 'https://www.figma.com/plugin-docs/api/WidgetNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 74d843aacba77c42
token_count: 115
chunk_title: >-
  clone(): WidgetNode + cloneWidget(syncedStateOverrides: { [name: string]: any
  }, syncedMapOverrides?: { [mapName: string]: { [key: string]: any } }):
  WidgetNode
chunk_slug: WidgetNode-clone-widgetnode-clonewidgetsyncedstateo
chunk_index: 3
chunk_of_total: 33
parent_file: WidgetNode.md
parent_slug: WidgetNode
char_count: 400
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - WidgetNode-introduction-type-widget-readonly
  - WidgetNode-widgetid-string-readonly
  - WidgetNode-widgetsyncedstate-key-string-any-readonl
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
  - WidgetNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'clone(): WidgetNode'
  - >-
    cloneWidget(syncedStateOverrides: { [name: string]: any },
    syncedMapOverrides?: { [mapName: string]: { [key: string]: any } }):
    WidgetNode
compiler: noos-figma
---

Create an identical copy of this WidgetNode. By default, the duplicate will be parented under `figma.currentPage`.

Create a copy of this WidgetNode while overriding specific synced state & synced map values for the widget.
Overrides are only applied if a widget is cloning itself or other widgets created by the same `manifest.id`.

[View more →](/plugin-docs/api/properties/WidgetNode-clonewidget/)
