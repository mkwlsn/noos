---
title: 'getTopLevelFrame(): FrameNode | undefined'
slug: WidgetNode-gettoplevelframe-framenode-undefined
source_file: plugin-api-WidgetNode.html
source_url: 'https://www.figma.com/plugin-docs/api/WidgetNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 870bdd57b99cfd2b
token_count: 73
chunk_title: 'getTopLevelFrame(): FrameNode | undefined'
chunk_slug: WidgetNode-gettoplevelframe-framenode-undefined
chunk_index: 12
chunk_of_total: 33
parent_file: WidgetNode.md
parent_slug: WidgetNode
char_count: 254
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

Returns the top-most frame that contains this node. If the node is not inside a frame, this will return undefined.

##### info

This function will only work in Figma Design and will throw an error if called in FigJam or Slides.

## Plugin data properties
