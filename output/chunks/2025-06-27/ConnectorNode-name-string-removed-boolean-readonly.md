---
title: 'name: string + removed: boolean [readonly]'
slug: ConnectorNode-name-string-removed-boolean-readonly
source_file: plugin-api-ConnectorNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ConnectorNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c4baeb2f9c019773
token_count: 141
chunk_title: 'name: string + removed: boolean [readonly]'
chunk_slug: ConnectorNode-name-string-removed-boolean-readonly
chunk_index: 9
chunk_of_total: 35
parent_file: ConnectorNode.md
parent_slug: ConnectorNode
char_count: 491
heading_level: h3
chunk_type: guide
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
  - ConnectorNode-tostring-string
  - ConnectorNode-remove-void-setrelaunchdatadata-command-
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
  - 'name: string'
  - 'removed: boolean [readonly]'
compiler: noos-figma
---

The name of the layer that appears in the layers panel. Calling `figma.root.name` will return the name, read-only, of the current file.

[View more →](/plugin-docs/api/properties/nodes-name/)

Returns true if this node has been removed since it was first accessed. If your plugin stays open for a while and stores references to nodes, you should write your code defensively and check that the nodes haven't been removed by the user.

[View more →](/plugin-docs/api/properties/nodes-removed/)
