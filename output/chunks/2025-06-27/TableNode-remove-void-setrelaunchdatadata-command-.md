---
title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
slug: TableNode-remove-void-setrelaunchdatadata-command-
source_file: plugin-api-TableNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TableNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5e25d3c8878fcc0e
token_count: 159
chunk_title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
chunk_slug: TableNode-remove-void-setrelaunchdatadata-command-
chunk_index: 12
chunk_of_total: 36
parent_file: TableNode.md
parent_slug: TableNode
char_count: 556
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - TableNode-introduction-type-table-readonly
  - TableNode-insertrowrowindex-number-void-insertcolu
  - TableNode-removerowrowindex-number-void-removecolu
  - TableNode-moverowfromindex-number-toindex-number-v
  - TableNode-resizerowrowindex-number-height-number-v
  - TableNode-fills-readonlyarray-figmamixed
  - TableNode-fillstyleid-string-figmamixed
  - TableNode-setfillstyleidasyncstyleid-string-promis
  - TableNode-blendmode-blendmode-id-string-readonly
  - TableNode-parent-basenode-childrenmixin-null-reado
  - TableNode-name-string-removed-boolean-readonly
  - TableNode-tostring-string
  - TableNode-getrelaunchdata-command-string-string-is
  - TableNode-getcssasync-promise-key-string-string-
  - TableNode-gettoplevelframe-framenode-undefined
  - TableNode-getplugindatakey-string-string
  - TableNode-setplugindatakey-string-value-string-voi
  - TableNode-getplugindatakeys-string
  - TableNode-getsharedplugindatanamespace-string-key-
  - TableNode-setsharedplugindatanamespace-string-key-
  - TableNode-getsharedplugindatakeysnamespace-string-
  - TableNode-getdevresourcesasyncoptions-includechild
  - TableNode-editdevresourceasynccurrenturl-string-ne
  - TableNode-setdevresourcepreviewasyncurl-string-pre
  - TableNode-maxwidth-number-null-minheight-number-nu
  - TableNode-maxheight-number-null-relativetransform-
  - TableNode-absolutetransform-transform-readonly-abs
  - TableNode-visible-boolean-locked-boolean
  - TableNode-stucknodes-scenenode-readonly
  - TableNode-attachedconnectors-connectornode-readonl
  - TableNode-boundvariables-readonly-field-in-variabl
  - TableNode-inferredvariables-readonly-field-in-vari
  - TableNode-resolvedvariablemodes-collectionid-strin
  - TableNode-clearexplicitvariablemodeforcollectionco
  - TableNode-exportsettings-readonlyarray-exportasync
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
