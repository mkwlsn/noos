---
title: >-
  attachedConnectors: ConnectorNode[] [readonly] + componentPropertyReferences:
  { [nodeProperty in 'visible' | 'characters' | 'mainComponent']?: string} |
  null
slug: EmbedNode-attachedconnectors-connectornode-readonl
source_file: plugin-api-EmbedNode.html
source_url: 'https://www.figma.com/plugin-docs/api/EmbedNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b4338580c95f8b65
token_count: 127
chunk_title: >-
  attachedConnectors: ConnectorNode[] [readonly] + componentPropertyReferences:
  { [nodeProperty in 'visible' | 'characters' | 'mainComponent']?: string} |
  null
chunk_slug: EmbedNode-attachedconnectors-connectornode-readonl
chunk_index: 23
chunk_of_total: 29
parent_file: EmbedNode.md
parent_slug: EmbedNode
char_count: 444
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - EmbedNode-introduction
  - EmbedNode-clone-embednode-id-string-readonly
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
  - EmbedNode-boundvariables-readonly-field-in-variabl
  - EmbedNode-inferredvariables-readonly-field-in-vari
  - EmbedNode-resolvedvariablemodes-collectionid-strin
  - EmbedNode-clearexplicitvariablemodeforcollectionco
  - EmbedNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'attachedConnectors: ConnectorNode[] [readonly]'
  - >-
    componentPropertyReferences: { [nodeProperty in 'visible' | 'characters' |
    'mainComponent']?: string} | null
compiler: noos-figma
---

An array of `ConnectorNode`s that are attached to a node.

All component properties that are attached on this node. A node can only have `componentPropertyReferences` if it is a component sublayer or an instance sublayer. It will be `null` otherwise. The value in the key-value pair refers to the component property name as returned by `componentPropertyDefinitions` on the containing component, component set or main component (for instances).
