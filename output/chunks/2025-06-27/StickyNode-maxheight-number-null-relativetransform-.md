---
title: 'maxHeight: number | null + relativeTransform: Transform'
slug: StickyNode-maxheight-number-null-relativetransform-
source_file: plugin-api-StickyNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StickyNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2b9db03002c915e2
token_count: 124
chunk_title: 'maxHeight: number | null + relativeTransform: Transform'
chunk_slug: StickyNode-maxheight-number-null-relativetransform-
chunk_index: 23
chunk_of_total: 33
parent_file: StickyNode.md
parent_slug: StickyNode
char_count: 431
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
  - 'maxHeight: number | null'
  - 'relativeTransform: Transform'
compiler: noos-figma
---

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `maxHeight`.

The position of a node relative to its containing parent as a [`Transform`](/plugin-docs/api/Transform/)
 matrix. Not used for scaling, see `width` and `height` instead. Read the details page to understand the nuances of this property.

[View more →](/plugin-docs/api/properties/nodes-relativetransform/)
