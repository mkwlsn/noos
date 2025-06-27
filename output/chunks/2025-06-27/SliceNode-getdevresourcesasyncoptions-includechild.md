---
title: >-
  getDevResourcesAsync(options?: { includeChildren: boolean }): Promise +
  addDevResourceAsync(url: string, name?: string): Promise
slug: SliceNode-getdevresourcesasyncoptions-includechild
source_file: plugin-api-SliceNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SliceNode/'
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
chunk_slug: SliceNode-getdevresourcesasyncoptions-includechild
chunk_index: 15
chunk_of_total: 41
parent_file: SliceNode.md
parent_slug: SliceNode
char_count: 366
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - SliceNode-introduction
  - SliceNode-id-string-readonly
  - SliceNode-parent-basenode-childrenmixin-null-reado
  - SliceNode-name-string-removed-boolean-readonly
  - SliceNode-tostring-string
  - SliceNode-remove-void-setrelaunchdatadata-command-
  - SliceNode-getrelaunchdata-command-string-string-is
  - SliceNode-getcssasync-promise-key-string-string-
  - SliceNode-gettoplevelframe-framenode-undefined
  - SliceNode-getplugindatakey-string-string
  - SliceNode-setplugindatakey-string-value-string-voi
  - SliceNode-getplugindatakeys-string
  - SliceNode-getsharedplugindatanamespace-string-key-
  - SliceNode-setsharedplugindatanamespace-string-key-
  - SliceNode-getsharedplugindatakeysnamespace-string-
  - SliceNode-editdevresourceasynccurrenturl-string-ne
  - SliceNode-setdevresourcepreviewasyncurl-string-pre
  - SliceNode-locked-boolean
  - SliceNode-stucknodes-scenenode-readonly
  - SliceNode-attachedconnectors-connectornode-readonl
  - SliceNode-boundvariables-readonly-field-in-variabl
  - SliceNode-inferredvariables-readonly-field-in-vari
  - SliceNode-resolvedvariablemodes-collectionid-strin
  - SliceNode-clearexplicitvariablemodeforcollectionco
  - SliceNode-x-number-y-number
  - SliceNode-minwidth-number-null-maxwidth-number-nul
  - SliceNode-minheight-number-null-maxheight-number-n
  - SliceNode-relativetransform-transform
  - SliceNode-absolutetransform-transform-readonly-abs
  - SliceNode-layoutalign-min-center-max-stretch-inher
  - SliceNode-layoutgrow-number
  - SliceNode-layoutpositioning-auto-absolute
  - SliceNode-absoluterenderbounds-rect-null-readonly
  - SliceNode-constrainproportions-boolean-rotation-nu
  - SliceNode-layoutsizinghorizontal-fixed-hug-fill
  - SliceNode-layoutsizingvertical-fixed-hug-fill
  - SliceNode-resizewidth-number-height-number-void
  - SliceNode-resizewithoutconstraintswidth-number-hei
  - SliceNode-rescalescale-number-void-exportsettings-
  - SliceNode-exportasyncsettings-exportsettingsrest-p
merged_titles:
  - 'getDevResourcesAsync(options?: { includeChildren: boolean }): Promise'
  - 'addDevResourceAsync(url: string, name?: string): Promise'
compiler: noos-figma
---

Gets all of the dev resources on a node. This includes any inherited dev resources from components and component sets.

[View more →](/plugin-docs/api/properties/nodes-getdevresourcesasync/)

Adds a dev resource to a node. This will fail if the node already has a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-adddevresourceasync/)
