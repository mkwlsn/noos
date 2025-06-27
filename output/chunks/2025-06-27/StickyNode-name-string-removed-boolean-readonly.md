---
title: 'name: string + removed: boolean [readonly]'
slug: StickyNode-name-string-removed-boolean-readonly
source_file: plugin-api-StickyNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StickyNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c4baeb2f9c019773
token_count: 141
chunk_title: 'name: string + removed: boolean [readonly]'
chunk_slug: StickyNode-name-string-removed-boolean-readonly
chunk_index: 7
chunk_of_total: 33
parent_file: StickyNode.md
parent_slug: StickyNode
char_count: 491
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
  - 'name: string'
  - 'removed: boolean [readonly]'
compiler: noos-figma
---

The name of the layer that appears in the layers panel. Calling `figma.root.name` will return the name, read-only, of the current file.

[View more →](/plugin-docs/api/properties/nodes-name/)

Returns true if this node has been removed since it was first accessed. If your plugin stays open for a while and stores references to nodes, you should write your code defensively and check that the nodes haven't been removed by the user.

[View more →](/plugin-docs/api/properties/nodes-removed/)
