---
title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
slug: MediaNode-remove-void-setrelaunchdatadata-command-
source_file: plugin-api-MediaNode.html
source_url: 'https://www.figma.com/plugin-docs/api/MediaNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5e25d3c8878fcc0e
token_count: 159
chunk_title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
chunk_slug: MediaNode-remove-void-setrelaunchdatadata-command-
chunk_index: 6
chunk_of_total: 30
parent_file: MediaNode.md
parent_slug: MediaNode
char_count: 556
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - MediaNode-introduction
  - MediaNode-resizewidth-number-height-number-void-re
  - MediaNode-clone-medianode-id-string-readonly
  - MediaNode-parent-basenode-childrenmixin-null-reado
  - MediaNode-name-string-removed-boolean-readonly
  - MediaNode-tostring-string
  - MediaNode-getrelaunchdata-command-string-string-is
  - MediaNode-getcssasync-promise-key-string-string-
  - MediaNode-gettoplevelframe-framenode-undefined
  - MediaNode-getplugindatakey-string-string
  - MediaNode-setplugindatakey-string-value-string-voi
  - MediaNode-getplugindatakeys-string
  - MediaNode-getsharedplugindatanamespace-string-key-
  - MediaNode-setsharedplugindatanamespace-string-key-
  - MediaNode-getsharedplugindatakeysnamespace-string-
  - MediaNode-getdevresourcesasyncoptions-includechild
  - MediaNode-editdevresourceasynccurrenturl-string-ne
  - MediaNode-setdevresourcepreviewasyncurl-string-pre
  - MediaNode-maxwidth-number-null-minheight-number-nu
  - MediaNode-maxheight-number-null-relativetransform-
  - MediaNode-absolutetransform-transform-readonly-abs
  - MediaNode-visible-boolean-locked-boolean
  - MediaNode-stucknodes-scenenode-readonly
  - MediaNode-attachedconnectors-connectornode-readonl
  - MediaNode-boundvariables-readonly-field-in-variabl
  - MediaNode-inferredvariables-readonly-field-in-vari
  - MediaNode-resolvedvariablemodes-collectionid-strin
  - MediaNode-clearexplicitvariablemodeforcollectionco
  - MediaNode-exportsettings-readonlyarray-exportasync
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
