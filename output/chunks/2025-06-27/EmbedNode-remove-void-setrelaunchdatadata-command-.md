---
title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
slug: EmbedNode-remove-void-setrelaunchdatadata-command-
source_file: plugin-api-EmbedNode.html
source_url: 'https://www.figma.com/plugin-docs/api/EmbedNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5e25d3c8878fcc0e
token_count: 159
chunk_title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
chunk_slug: EmbedNode-remove-void-setrelaunchdatadata-command-
chunk_index: 5
chunk_of_total: 29
parent_file: EmbedNode.md
parent_slug: EmbedNode
char_count: 556
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - EmbedNode-introduction
  - EmbedNode-clone-embednode-id-string-readonly
  - EmbedNode-parent-basenode-childrenmixin-null-reado
  - EmbedNode-name-string-removed-boolean-readonly
  - EmbedNode-tostring-string
  - EmbedNode-getrelaunchdata-command-string-string-is
  - EmbedNode-getcssasync-promise-key-string-string-
  - EmbedNode-gettoplevelframe-framenode-undefined
  - EmbedNode-getplugindatakey-string-string
  - EmbedNode-setplugindatakey-string-value-string-voi
  - EmbedNode-getplugindatakeys-string
  - EmbedNode-getsharedplugindatanamespace-string-key-
  - EmbedNode-setsharedplugindatanamespace-string-key-
  - EmbedNode-getsharedplugindatakeysnamespace-string-
  - EmbedNode-getdevresourcesasyncoptions-includechild
  - EmbedNode-editdevresourceasynccurrenturl-string-ne
  - EmbedNode-setdevresourcepreviewasyncurl-string-pre
  - EmbedNode-maxwidth-number-null-minheight-number-nu
  - EmbedNode-maxheight-number-null-relativetransform-
  - EmbedNode-absolutetransform-transform-readonly-abs
  - EmbedNode-visible-boolean-locked-boolean
  - EmbedNode-stucknodes-scenenode-readonly
  - EmbedNode-attachedconnectors-connectornode-readonl
  - EmbedNode-boundvariables-readonly-field-in-variabl
  - EmbedNode-inferredvariables-readonly-field-in-vari
  - EmbedNode-resolvedvariablemodes-collectionid-strin
  - EmbedNode-clearexplicitvariablemodeforcollectionco
  - EmbedNode-exportsettings-readonlyarray-exportasync
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
