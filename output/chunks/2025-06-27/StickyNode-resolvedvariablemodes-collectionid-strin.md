---
title: >-
  resolvedVariableModes: { [collectionId: string]: string } +
  explicitVariableModes: { [collectionId: string]: string }
slug: StickyNode-resolvedvariablemodes-collectionid-strin
source_file: plugin-api-StickyNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StickyNode/'
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
chunk_slug: StickyNode-resolvedvariablemodes-collectionid-strin
chunk_index: 30
chunk_of_total: 33
parent_file: StickyNode.md
parent_slug: StickyNode
char_count: 441
heading_level: h3
chunk_type: guide
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
  - StickyNode-remove-void-setrelaunchdatadata-command-
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
  - StickyNode-clearexplicitvariablemodeforcollectionco
  - StickyNode-exportsettings-readonlyarray-exportasync
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
