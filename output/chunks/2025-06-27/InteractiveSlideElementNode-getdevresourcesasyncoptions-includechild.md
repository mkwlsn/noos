---
title: >-
  getDevResourcesAsync(options?: { includeChildren: boolean }): Promise +
  addDevResourceAsync(url: string, name?: string): Promise
slug: InteractiveSlideElementNode-getdevresourcesasyncoptions-includechild
source_file: plugin-api-InteractiveSlideElementNode.html
source_url: 'https://www.figma.com/plugin-docs/api/InteractiveSlideElementNode/'
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
chunk_slug: InteractiveSlideElementNode-getdevresourcesasyncoptions-includechild
chunk_index: 15
chunk_of_total: 29
parent_file: InteractiveSlideElementNode.md
parent_slug: InteractiveSlideElementNode
char_count: 366
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - InteractiveSlideElementNode-introduction
  - InteractiveSlideElementNode-clone-interactiveslideelementnode-id-str
  - InteractiveSlideElementNode-parent-basenode-childrenmixin-null-reado
  - InteractiveSlideElementNode-name-string-removed-boolean-readonly
  - InteractiveSlideElementNode-tostring-string
  - InteractiveSlideElementNode-remove-void-setrelaunchdatadata-command-
  - InteractiveSlideElementNode-getrelaunchdata-command-string-string-is
  - InteractiveSlideElementNode-getcssasync-promise-key-string-string-
  - InteractiveSlideElementNode-gettoplevelframe-framenode-undefined
  - InteractiveSlideElementNode-getplugindatakey-string-string
  - InteractiveSlideElementNode-setplugindatakey-string-value-string-voi
  - InteractiveSlideElementNode-getplugindatakeys-string
  - InteractiveSlideElementNode-getsharedplugindatanamespace-string-key-
  - InteractiveSlideElementNode-setsharedplugindatanamespace-string-key-
  - InteractiveSlideElementNode-getsharedplugindatakeysnamespace-string-
  - InteractiveSlideElementNode-editdevresourceasynccurrenturl-string-ne
  - InteractiveSlideElementNode-setdevresourcepreviewasyncurl-string-pre
  - InteractiveSlideElementNode-maxwidth-number-null-minheight-number-nu
  - InteractiveSlideElementNode-maxheight-number-null-relativetransform-
  - InteractiveSlideElementNode-absolutetransform-transform-readonly-abs
  - InteractiveSlideElementNode-visible-boolean-locked-boolean
  - InteractiveSlideElementNode-stucknodes-scenenode-readonly
  - InteractiveSlideElementNode-attachedconnectors-connectornode-readonl
  - InteractiveSlideElementNode-boundvariables-readonly-field-in-variabl
  - InteractiveSlideElementNode-inferredvariables-readonly-field-in-vari
  - InteractiveSlideElementNode-resolvedvariablemodes-collectionid-strin
  - InteractiveSlideElementNode-clearexplicitvariablemodeforcollectionco
  - InteractiveSlideElementNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'getDevResourcesAsync(options?: { includeChildren: boolean }): Promise'
  - 'addDevResourceAsync(url: string, name?: string): Promise'
compiler: noos-figma
---

Gets all of the dev resources on a node. This includes any inherited dev resources from components and component sets.

[View more →](/plugin-docs/api/properties/nodes-getdevresourcesasync/)

Adds a dev resource to a node. This will fail if the node already has a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-adddevresourceasync/)
