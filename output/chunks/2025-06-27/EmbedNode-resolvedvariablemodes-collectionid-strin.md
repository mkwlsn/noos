---
title: >-
  resolvedVariableModes: { [collectionId: string]: string } +
  explicitVariableModes: { [collectionId: string]: string }
slug: EmbedNode-resolvedvariablemodes-collectionid-strin
source_file: plugin-api-EmbedNode.html
source_url: 'https://www.figma.com/plugin-docs/api/EmbedNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9750894e0b5ad9d5
token_count: 126
chunk_title: >-
  resolvedVariableModes: { [collectionId: string]: string } +
  explicitVariableModes: { [collectionId: string]: string }
chunk_slug: EmbedNode-resolvedvariablemodes-collectionid-strin
chunk_index: 26
chunk_of_total: 29
parent_file: EmbedNode.md
parent_slug: EmbedNode
char_count: 441
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
  - EmbedNode-attachedconnectors-connectornode-readonl
  - EmbedNode-boundvariables-readonly-field-in-variabl
  - EmbedNode-inferredvariables-readonly-field-in-vari
  - EmbedNode-clearexplicitvariablemodeforcollectionco
  - EmbedNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'resolvedVariableModes: { [collectionId: string]: string }'
  - 'explicitVariableModes: { [collectionId: string]: string }'
compiler: noos-figma
---

The resolved mode for this node for each variable collection in this file.

[View more →](/plugin-docs/api/properties/nodes-resolvedvariablemodes/)

The explicitly set modes for this node.
For `SceneNodes`, represents a subset of [`resolvedVariableModes`](/plugin-docs/api/properties/nodes-resolvedvariablemodes/)
.
Note that this does not include [workspace and team-default modes](https://help.figma.com/hc/en-us/articles/12611253730071)
.
