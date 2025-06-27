---
title: 'blendMode: BlendMode + id: string [readonly]'
slug: StickyNode-blendmode-blendmode-id-string-readonly
source_file: plugin-api-StickyNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StickyNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5fda0915e1fd17fa
token_count: 149
chunk_title: 'blendMode: BlendMode + id: string [readonly]'
chunk_slug: StickyNode-blendmode-blendmode-id-string-readonly
chunk_index: 5
chunk_of_total: 33
parent_file: StickyNode.md
parent_slug: StickyNode
char_count: 519
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
  - StickyNode-resolvedvariablemodes-collectionid-strin
  - StickyNode-clearexplicitvariablemodeforcollectionco
  - StickyNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'blendMode: BlendMode'
  - 'id: string [readonly]'
compiler: noos-figma
---

Blend mode of this node, as shown in the Layer panel. In addition to the blend modes that paints & effects support, the layer blend mode can also have the value PASS_THROUGH.

## Base node properties

The unique identifier of a node. For example, `1:3`. The node id can be used with methods such as [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync)
, but plugins typically don't need to use this since you can usually just access a node directly.

[View more →](/plugin-docs/api/properties/nodes-id/)
