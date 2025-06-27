---
title: 'clone(): LinkUnfurlNode + id: string [readonly]'
slug: LinkUnfurlNode-clone-linkunfurlnode-id-string-readonly
source_file: plugin-api-LinkUnfurlNode.html
source_url: 'https://www.figma.com/plugin-docs/api/LinkUnfurlNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 94893efc9ee45959
token_count: 106
chunk_title: 'clone(): LinkUnfurlNode + id: string [readonly]'
chunk_slug: LinkUnfurlNode-clone-linkunfurlnode-id-string-readonly
chunk_index: 1
chunk_of_total: 29
parent_file: LinkUnfurlNode.md
parent_slug: LinkUnfurlNode
char_count: 371
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - LinkUnfurlNode-introduction
  - LinkUnfurlNode-parent-basenode-childrenmixin-null-reado
  - LinkUnfurlNode-name-string-removed-boolean-readonly
  - LinkUnfurlNode-tostring-string
  - LinkUnfurlNode-remove-void-setrelaunchdatadata-command-
  - LinkUnfurlNode-getrelaunchdata-command-string-string-is
  - LinkUnfurlNode-getcssasync-promise-key-string-string-
  - LinkUnfurlNode-gettoplevelframe-framenode-undefined
  - LinkUnfurlNode-getplugindatakey-string-string
  - LinkUnfurlNode-setplugindatakey-string-value-string-voi
  - LinkUnfurlNode-getplugindatakeys-string
  - LinkUnfurlNode-getsharedplugindatanamespace-string-key-
  - LinkUnfurlNode-setsharedplugindatanamespace-string-key-
  - LinkUnfurlNode-getsharedplugindatakeysnamespace-string-
  - LinkUnfurlNode-getdevresourcesasyncoptions-includechild
  - LinkUnfurlNode-editdevresourceasynccurrenturl-string-ne
  - LinkUnfurlNode-setdevresourcepreviewasyncurl-string-pre
  - LinkUnfurlNode-maxwidth-number-null-minheight-number-nu
  - LinkUnfurlNode-maxheight-number-null-relativetransform-
  - LinkUnfurlNode-absolutetransform-transform-readonly-abs
  - LinkUnfurlNode-visible-boolean-locked-boolean
  - LinkUnfurlNode-stucknodes-scenenode-readonly
  - LinkUnfurlNode-attachedconnectors-connectornode-readonl
  - LinkUnfurlNode-boundvariables-readonly-field-in-variabl
  - LinkUnfurlNode-inferredvariables-readonly-field-in-vari
  - LinkUnfurlNode-resolvedvariablemodes-collectionid-strin
  - LinkUnfurlNode-clearexplicitvariablemodeforcollectionco
  - LinkUnfurlNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'clone(): LinkUnfurlNode'
  - 'id: string [readonly]'
compiler: noos-figma
---

Create a copy of this node

## Base node properties

The unique identifier of a node. For example, `1:3`. The node id can be used with methods such as [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync)
, but plugins typically don't need to use this since you can usually just access a node directly.

[View more →](/plugin-docs/api/properties/nodes-id/)
