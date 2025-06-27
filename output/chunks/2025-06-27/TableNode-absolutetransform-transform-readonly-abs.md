---
title: >-
  absoluteTransform: Transform [readonly] + absoluteBoundingBox: Rect | null
  [readonly]
slug: TableNode-absolutetransform-transform-readonly-abs
source_file: plugin-api-TableNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TableNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c679aba7269ffa4e
token_count: 94
chunk_title: >-
  absoluteTransform: Transform [readonly] + absoluteBoundingBox: Rect | null
  [readonly]
chunk_slug: TableNode-absolutetransform-transform-readonly-abs
chunk_index: 27
chunk_of_total: 36
parent_file: TableNode.md
parent_slug: TableNode
char_count: 327
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
  - TableNode-visible-boolean-locked-boolean
  - TableNode-stucknodes-scenenode-readonly
  - TableNode-attachedconnectors-connectornode-readonl
  - TableNode-boundvariables-readonly-field-in-variabl
  - TableNode-inferredvariables-readonly-field-in-vari
  - TableNode-resolvedvariablemodes-collectionid-strin
  - TableNode-clearexplicitvariablemodeforcollectionco
  - TableNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'absoluteTransform: Transform [readonly]'
  - 'absoluteBoundingBox: Rect | null [readonly]'
compiler: noos-figma
---

The position of a node relative to its containing page as a [`Transform`](/plugin-docs/api/Transform/)
 matrix.

The bounds of the node that does not include rendered properties like drop shadows or strokes. The `x` and `y` inside this property represent the absolute position of the node on the page.

## Scene node properties
