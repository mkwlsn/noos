---
title: 'getPluginDataKeys(): string[]'
slug: CodeBlockNode-getplugindatakeys-string
source_file: plugin-api-CodeBlockNode.html
source_url: 'https://www.figma.com/plugin-docs/api/CodeBlockNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7e44c85c4733e960
token_count: 66
chunk_title: 'getPluginDataKeys(): string[]'
chunk_slug: CodeBlockNode-getplugindatakeys-string
chunk_index: 12
chunk_of_total: 30
parent_file: CodeBlockNode.md
parent_slug: CodeBlockNode
char_count: 231
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - CodeBlockNode-introduction-type-codeblock-readonly
  - CodeBlockNode-code-string-codelanguage-typescript-cpp-
  - CodeBlockNode-blendmode-blendmode-id-string-readonly
  - CodeBlockNode-parent-basenode-childrenmixin-null-reado
  - CodeBlockNode-name-string-removed-boolean-readonly
  - CodeBlockNode-tostring-string
  - CodeBlockNode-remove-void-setrelaunchdatadata-command-
  - CodeBlockNode-getrelaunchdata-command-string-string-is
  - CodeBlockNode-getcssasync-promise-key-string-string-
  - CodeBlockNode-gettoplevelframe-framenode-undefined
  - CodeBlockNode-getplugindatakey-string-string
  - CodeBlockNode-setplugindatakey-string-value-string-voi
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
compiler: noos-figma
---

Retrieves a list of all keys stored on this node or style using using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. This enables iterating through all data stored privately on a node or style by your plugin.
