---
title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
slug: CodeBlockNode-remove-void-setrelaunchdatadata-command-
source_file: plugin-api-CodeBlockNode.html
source_url: 'https://www.figma.com/plugin-docs/api/CodeBlockNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5e25d3c8878fcc0e
token_count: 159
chunk_title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
chunk_slug: CodeBlockNode-remove-void-setrelaunchdatadata-command-
chunk_index: 6
chunk_of_total: 30
parent_file: CodeBlockNode.md
parent_slug: CodeBlockNode
char_count: 556
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - CodeBlockNode-introduction-type-codeblock-readonly
  - CodeBlockNode-code-string-codelanguage-typescript-cpp-
  - CodeBlockNode-blendmode-blendmode-id-string-readonly
  - CodeBlockNode-parent-basenode-childrenmixin-null-reado
  - CodeBlockNode-name-string-removed-boolean-readonly
  - CodeBlockNode-tostring-string
  - CodeBlockNode-getrelaunchdata-command-string-string-is
  - CodeBlockNode-getcssasync-promise-key-string-string-
  - CodeBlockNode-gettoplevelframe-framenode-undefined
  - CodeBlockNode-getplugindatakey-string-string
  - CodeBlockNode-setplugindatakey-string-value-string-voi
  - CodeBlockNode-getplugindatakeys-string
  - CodeBlockNode-getsharedplugindatanamespace-string-key-
  - CodeBlockNode-setsharedplugindatanamespace-string-key-
  - CodeBlockNode-getsharedplugindatakeysnamespace-string-
  - CodeBlockNode-getdevresourcesasyncoptions-includechild
  - CodeBlockNode-editdevresourceasynccurrenturl-string-ne
  - CodeBlockNode-setdevresourcepreviewasyncurl-string-pre
  - CodeBlockNode-maxwidth-number-null-minheight-number-nu
  - CodeBlockNode-maxheight-number-null-relativetransform-
  - CodeBlockNode-absolutetransform-transform-readonly-abs
  - CodeBlockNode-visible-boolean-locked-boolean
  - CodeBlockNode-stucknodes-scenenode-readonly
  - CodeBlockNode-attachedconnectors-connectornode-readonl
  - CodeBlockNode-boundvariables-readonly-field-in-variabl
  - CodeBlockNode-inferredvariables-readonly-field-in-vari
  - CodeBlockNode-resolvedvariablemodes-collectionid-strin
  - CodeBlockNode-clearexplicitvariablemodeforcollectionco
  - CodeBlockNode-exportsettings-readonlyarray-exportasync
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
