---
title: 'widgetSyncedState: { [key: string]: any } [readonly]'
slug: WidgetNode-widgetsyncedstate-key-string-any-readonl
source_file: plugin-api-WidgetNode.html
source_url: 'https://www.figma.com/plugin-docs/api/WidgetNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 84b22ee032a7ecd5
token_count: 79
chunk_title: 'widgetSyncedState: { [key: string]: any } [readonly]'
chunk_slug: WidgetNode-widgetsyncedstate-key-string-any-readonl
chunk_index: 2
chunk_of_total: 33
parent_file: WidgetNode.md
parent_slug: WidgetNode
char_count: 274
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - WidgetNode-introduction-type-widget-readonly
  - WidgetNode-widgetid-string-readonly
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
  - WidgetNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

Returns the synced state stored on the widget. This is only readable by widgets created by the same `manifest.id`.

For more information, check out [this page in our widget documentation](https://figma.com/widget-docs/managing-multiple-widgets#widgetnodewidgetsyncedstate)
.
