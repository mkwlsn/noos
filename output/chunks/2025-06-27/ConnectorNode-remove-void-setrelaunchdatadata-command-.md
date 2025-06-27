---
title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
slug: ConnectorNode-remove-void-setrelaunchdatadata-command-
source_file: plugin-api-ConnectorNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ConnectorNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5e25d3c8878fcc0e
token_count: 159
chunk_title: 'remove(): void + setRelaunchData(data: { [command: string]: string }): void'
chunk_slug: ConnectorNode-remove-void-setrelaunchdatadata-command-
chunk_index: 11
chunk_of_total: 35
parent_file: ConnectorNode.md
parent_slug: ConnectorNode
char_count: 556
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - ConnectorNode-introduction
  - ConnectorNode-connectorendstrokecap-connectorstrokecap
  - ConnectorNode-blendmode-blendmode
  - ConnectorNode-strokes-readonlyarray-strokestyleid-stri
  - ConnectorNode-setstrokestyleidasyncstyleid-string-prom
  - ConnectorNode-strokejoin-strokejoin-figmamixed-strokea
  - ConnectorNode-dashpattern-readonlyarray-strokegeometry
  - ConnectorNode-id-string-readonly
  - ConnectorNode-parent-basenode-childrenmixin-null-reado
  - ConnectorNode-name-string-removed-boolean-readonly
  - ConnectorNode-tostring-string
  - ConnectorNode-getrelaunchdata-command-string-string-is
  - ConnectorNode-getcssasync-promise-key-string-string-
  - ConnectorNode-gettoplevelframe-framenode-undefined
  - ConnectorNode-getplugindatakey-string-string
  - ConnectorNode-setplugindatakey-string-value-string-voi
  - ConnectorNode-getplugindatakeys-string
  - ConnectorNode-getsharedplugindatanamespace-string-key-
  - ConnectorNode-setsharedplugindatanamespace-string-key-
  - ConnectorNode-getsharedplugindatakeysnamespace-string-
  - ConnectorNode-getdevresourcesasyncoptions-includechild
  - ConnectorNode-editdevresourceasynccurrenturl-string-ne
  - ConnectorNode-setdevresourcepreviewasyncurl-string-pre
  - ConnectorNode-maxwidth-number-null-minheight-number-nu
  - ConnectorNode-maxheight-number-null-relativetransform-
  - ConnectorNode-absolutetransform-transform-readonly-abs
  - ConnectorNode-visible-boolean-locked-boolean
  - ConnectorNode-stucknodes-scenenode-readonly
  - ConnectorNode-attachedconnectors-connectornode-readonl
  - ConnectorNode-boundvariables-readonly-field-in-variabl
  - ConnectorNode-inferredvariables-readonly-field-in-vari
  - ConnectorNode-resolvedvariablemodes-collectionid-strin
  - ConnectorNode-clearexplicitvariablemodeforcollectionco
  - ConnectorNode-exportsettings-readonlyarray-exportasync
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
