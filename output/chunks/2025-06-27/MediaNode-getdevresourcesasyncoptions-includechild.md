---
title: >-
  getDevResourcesAsync(options?: { includeChildren: boolean }): Promise +
  addDevResourceAsync(url: string, name?: string): Promise
slug: MediaNode-getdevresourcesasyncoptions-includechild
source_file: plugin-api-MediaNode.html
source_url: 'https://www.figma.com/plugin-docs/api/MediaNode/'
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
chunk_slug: MediaNode-getdevresourcesasyncoptions-includechild
chunk_index: 16
chunk_of_total: 30
parent_file: MediaNode.md
parent_slug: MediaNode
char_count: 366
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - MediaNode-introduction
  - MediaNode-resizewidth-number-height-number-void-re
  - MediaNode-clone-medianode-id-string-readonly
  - MediaNode-parent-basenode-childrenmixin-null-reado
  - MediaNode-name-string-removed-boolean-readonly
  - MediaNode-tostring-string
  - MediaNode-remove-void-setrelaunchdatadata-command-
  - MediaNode-getrelaunchdata-command-string-string-is
  - MediaNode-getcssasync-promise-key-string-string-
  - MediaNode-gettoplevelframe-framenode-undefined
  - MediaNode-getplugindatakey-string-string
  - MediaNode-setplugindatakey-string-value-string-voi
  - MediaNode-getplugindatakeys-string
  - MediaNode-getsharedplugindatanamespace-string-key-
  - MediaNode-setsharedplugindatanamespace-string-key-
  - MediaNode-getsharedplugindatakeysnamespace-string-
  - MediaNode-editdevresourceasynccurrenturl-string-ne
  - MediaNode-setdevresourcepreviewasyncurl-string-pre
  - MediaNode-maxwidth-number-null-minheight-number-nu
  - MediaNode-maxheight-number-null-relativetransform-
  - MediaNode-absolutetransform-transform-readonly-abs
  - MediaNode-visible-boolean-locked-boolean
  - MediaNode-stucknodes-scenenode-readonly
  - MediaNode-attachedconnectors-connectornode-readonl
  - MediaNode-boundvariables-readonly-field-in-variabl
  - MediaNode-inferredvariables-readonly-field-in-vari
  - MediaNode-resolvedvariablemodes-collectionid-strin
  - MediaNode-clearexplicitvariablemodeforcollectionco
  - MediaNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'getDevResourcesAsync(options?: { includeChildren: boolean }): Promise'
  - 'addDevResourceAsync(url: string, name?: string): Promise'
compiler: noos-figma
---

Gets all of the dev resources on a node. This includes any inherited dev resources from components and component sets.

[View more →](/plugin-docs/api/properties/nodes-getdevresourcesasync/)

Adds a dev resource to a node. This will fail if the node already has a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-adddevresourceasync/)
