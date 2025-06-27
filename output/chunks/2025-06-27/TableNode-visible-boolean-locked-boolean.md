---
title: 'visible: boolean + locked: boolean'
slug: TableNode-visible-boolean-locked-boolean
source_file: plugin-api-TableNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TableNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 527d4741f710065d
token_count: 112
chunk_title: 'visible: boolean + locked: boolean'
chunk_slug: TableNode-visible-boolean-locked-boolean
chunk_index: 28
chunk_of_total: 36
parent_file: TableNode.md
parent_slug: TableNode
char_count: 391
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - TableNode-introduction-type-table-readonly
  - TableNode-insertrowrowindex-number-void-insertcolu
  - TableNode-removerowrowindex-number-void-removecolu
  - TableNode-moverowfromindex-number-toindex-number-v
  - TableNode-resizerowrowindex-number-height-number-v
  - TableNode-fills-readonlyarray-figmamixed
  - TableNode-fillstyleid-string-figmamixed
  - TableNode-setfillstyleidasyncstyleid-string-promis
  - TableNode-blendmode-blendmode-id-string-readonly
  - TableNode-parent-basenode-childrenmixin-null-reado
  - TableNode-name-string-removed-boolean-readonly
  - TableNode-tostring-string
  - TableNode-remove-void-setrelaunchdatadata-command-
  - TableNode-getrelaunchdata-command-string-string-is
  - TableNode-getcssasync-promise-key-string-string-
  - TableNode-gettoplevelframe-framenode-undefined
  - TableNode-getplugindatakey-string-string
  - TableNode-setplugindatakey-string-value-string-voi
  - TableNode-getplugindatakeys-string
  - TableNode-getsharedplugindatanamespace-string-key-
  - TableNode-setsharedplugindatanamespace-string-key-
  - TableNode-getsharedplugindatakeysnamespace-string-
  - TableNode-getdevresourcesasyncoptions-includechild
  - TableNode-editdevresourceasynccurrenturl-string-ne
  - TableNode-setdevresourcepreviewasyncurl-string-pre
  - TableNode-maxwidth-number-null-minheight-number-nu
  - TableNode-maxheight-number-null-relativetransform-
  - TableNode-absolutetransform-transform-readonly-abs
  - TableNode-stucknodes-scenenode-readonly
  - TableNode-attachedconnectors-connectornode-readonl
  - TableNode-boundvariables-readonly-field-in-variabl
  - TableNode-inferredvariables-readonly-field-in-vari
  - TableNode-resolvedvariablemodes-collectionid-strin
  - TableNode-clearexplicitvariablemodeforcollectionco
  - TableNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'visible: boolean'
  - 'locked: boolean'
compiler: noos-figma
---

Whether the node is visible or not. Does not affect a plugin's ability to access the node.

[View more →](/plugin-docs/api/properties/nodes-visible/)

Whether the node is locked or not, preventing certain user interactions on the canvas such as selecting and dragging. Does not affect a plugin's ability to write to those properties.

[View more →](/plugin-docs/api/properties/nodes-locked/)
