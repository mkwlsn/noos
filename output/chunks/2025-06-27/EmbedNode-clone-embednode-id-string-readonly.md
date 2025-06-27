---
title: 'clone(): EmbedNode + id: string [readonly]'
slug: EmbedNode-clone-embednode-id-string-readonly
source_file: plugin-api-EmbedNode.html
source_url: 'https://www.figma.com/plugin-docs/api/EmbedNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 94893efc9ee45959
token_count: 106
chunk_title: 'clone(): EmbedNode + id: string [readonly]'
chunk_slug: EmbedNode-clone-embednode-id-string-readonly
chunk_index: 1
chunk_of_total: 29
parent_file: EmbedNode.md
parent_slug: EmbedNode
char_count: 371
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - EmbedNode-introduction
  - EmbedNode-parent-basenode-childrenmixin-null-reado
  - EmbedNode-name-string-removed-boolean-readonly
  - EmbedNode-tostring-string
  - EmbedNode-remove-void-setrelaunchdatadata-command-
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
  - 'clone(): EmbedNode'
  - 'id: string [readonly]'
compiler: noos-figma
---

Create a copy of this node

## Base node properties

The unique identifier of a node. For example, `1:3`. The node id can be used with methods such as [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync)
, but plugins typically don't need to use this since you can usually just access a node directly.

[View more →](/plugin-docs/api/properties/nodes-id/)
