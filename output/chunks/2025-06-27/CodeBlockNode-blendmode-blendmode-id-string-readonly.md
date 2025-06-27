---
title: 'blendMode: BlendMode + id: string [readonly]'
slug: CodeBlockNode-blendmode-blendmode-id-string-readonly
source_file: plugin-api-CodeBlockNode.html
source_url: 'https://www.figma.com/plugin-docs/api/CodeBlockNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5fda0915e1fd17fa
token_count: 149
chunk_title: 'blendMode: BlendMode + id: string [readonly]'
chunk_slug: CodeBlockNode-blendmode-blendmode-id-string-readonly
chunk_index: 2
chunk_of_total: 30
parent_file: CodeBlockNode.md
parent_slug: CodeBlockNode
char_count: 519
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - CodeBlockNode-introduction-type-codeblock-readonly
  - CodeBlockNode-code-string-codelanguage-typescript-cpp-
  - CodeBlockNode-parent-basenode-childrenmixin-null-reado
  - CodeBlockNode-name-string-removed-boolean-readonly
  - CodeBlockNode-tostring-string
  - CodeBlockNode-remove-void-setrelaunchdatadata-command-
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
  - 'blendMode: BlendMode'
  - 'id: string [readonly]'
compiler: noos-figma
---

Blend mode of this node, as shown in the Layer panel. In addition to the blend modes that paints & effects support, the layer blend mode can also have the value PASS_THROUGH.

## Base node properties

The unique identifier of a node. For example, `1:3`. The node id can be used with methods such as [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync)
, but plugins typically don't need to use this since you can usually just access a node directly.

[View more →](/plugin-docs/api/properties/nodes-id/)
