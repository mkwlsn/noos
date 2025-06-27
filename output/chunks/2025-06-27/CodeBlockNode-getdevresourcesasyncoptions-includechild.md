---
title: >-
  getDevResourcesAsync(options?: { includeChildren: boolean }): Promise +
  addDevResourceAsync(url: string, name?: string): Promise
slug: CodeBlockNode-getdevresourcesasyncoptions-includechild
source_file: plugin-api-CodeBlockNode.html
source_url: 'https://www.figma.com/plugin-docs/api/CodeBlockNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2a05de36e1edba29
token_count: 105
chunk_title: >-
  getDevResourcesAsync(options?: { includeChildren: boolean }): Promise +
  addDevResourceAsync(url: string, name?: string): Promise
chunk_slug: CodeBlockNode-getdevresourcesasyncoptions-includechild
chunk_index: 16
chunk_of_total: 30
parent_file: CodeBlockNode.md
parent_slug: CodeBlockNode
char_count: 366
heading_level: h3
chunk_type: guide
merge_type: merged
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
  - CodeBlockNode-getplugindatakeys-string
  - CodeBlockNode-getsharedplugindatanamespace-string-key-
  - CodeBlockNode-setsharedplugindatanamespace-string-key-
  - CodeBlockNode-getsharedplugindatakeysnamespace-string-
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
  - 'getDevResourcesAsync(options?: { includeChildren: boolean }): Promise'
  - 'addDevResourceAsync(url: string, name?: string): Promise'
compiler: noos-figma
---

Gets all of the dev resources on a node. This includes any inherited dev resources from components and component sets.

[View more →](/plugin-docs/api/properties/nodes-getdevresourcesasync/)

Adds a dev resource to a node. This will fail if the node already has a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-adddevresourceasync/)
