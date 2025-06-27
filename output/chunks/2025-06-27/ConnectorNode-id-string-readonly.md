---
title: 'id: string [readonly]'
slug: ConnectorNode-id-string-readonly
source_file: plugin-api-ConnectorNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ConnectorNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 801f95da108f339e
token_count: 91
chunk_title: 'id: string [readonly]'
chunk_slug: ConnectorNode-id-string-readonly
chunk_index: 7
chunk_of_total: 35
parent_file: ConnectorNode.md
parent_slug: ConnectorNode
char_count: 318
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - ConnectorNode-introduction
  - ConnectorNode-connectorendstrokecap-connectorstrokecap
  - ConnectorNode-blendmode-blendmode
  - ConnectorNode-strokes-readonlyarray-strokestyleid-stri
  - ConnectorNode-setstrokestyleidasyncstyleid-string-prom
  - ConnectorNode-strokejoin-strokejoin-figmamixed-strokea
  - ConnectorNode-dashpattern-readonlyarray-strokegeometry
  - ConnectorNode-parent-basenode-childrenmixin-null-reado
  - ConnectorNode-name-string-removed-boolean-readonly
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
compiler: noos-figma
---

The unique identifier of a node. For example, `1:3`. The node id can be used with methods such as [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync)
, but plugins typically don't need to use this since you can usually just access a node directly.

[View more →](/plugin-docs/api/properties/nodes-id/)
