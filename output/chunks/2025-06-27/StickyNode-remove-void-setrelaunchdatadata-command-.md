---
title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
slug: StickyNode-remove-void-setrelaunchdatadata-command-
source_file: plugin-api-StickyNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StickyNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5e25d3c8878fcc0e
token_count: 159
chunk_title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
chunk_slug: StickyNode-remove-void-setrelaunchdatadata-command-
chunk_index: 9
chunk_of_total: 33
parent_file: StickyNode.md
parent_slug: StickyNode
char_count: 556
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - StickyNode-introduction
  - StickyNode-iswidewidth-boolean-clone-stickynode
  - StickyNode-fills-readonlyarray-figmamixed
  - StickyNode-fillstyleid-string-figmamixed
  - StickyNode-setfillstyleidasyncstyleid-string-promis
  - StickyNode-blendmode-blendmode-id-string-readonly
  - StickyNode-parent-basenode-childrenmixin-null-reado
  - StickyNode-name-string-removed-boolean-readonly
  - StickyNode-tostring-string
  - StickyNode-getrelaunchdata-command-string-string-is
  - StickyNode-getcssasync-promise-key-string-string-
  - StickyNode-gettoplevelframe-framenode-undefined
  - StickyNode-getplugindatakey-string-string
  - StickyNode-setplugindatakey-string-value-string-voi
  - StickyNode-getplugindatakeys-string
  - StickyNode-getsharedplugindatanamespace-string-key-
  - StickyNode-setsharedplugindatanamespace-string-key-
  - StickyNode-getsharedplugindatakeysnamespace-string-
  - StickyNode-getdevresourcesasyncoptions-includechild
  - StickyNode-editdevresourceasynccurrenturl-string-ne
  - StickyNode-setdevresourcepreviewasyncurl-string-pre
  - StickyNode-maxwidth-number-null-minheight-number-nu
  - StickyNode-maxheight-number-null-relativetransform-
  - StickyNode-absolutetransform-transform-readonly-abs
  - StickyNode-visible-boolean-locked-boolean
  - StickyNode-stucknodes-scenenode-readonly
  - StickyNode-attachedconnectors-connectornode-readonl
  - StickyNode-boundvariables-readonly-field-in-variabl
  - StickyNode-inferredvariables-readonly-field-in-vari
  - StickyNode-resolvedvariablemodes-collectionid-strin
  - StickyNode-clearexplicitvariablemodeforcollectionco
  - StickyNode-exportsettings-readonlyarray-exportasync
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
