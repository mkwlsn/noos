---
title: 'maxHeight: number | null + relativeTransform: Transform'
slug: ShapeWithTextNode-maxheight-number-null-relativetransform-
source_file: plugin-api-ShapeWithTextNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ShapeWithTextNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2b9db03002c915e2
token_count: 124
chunk_title: 'maxHeight: number | null + relativeTransform: Transform'
chunk_slug: ShapeWithTextNode-maxheight-number-null-relativetransform-
chunk_index: 29
chunk_of_total: 39
parent_file: ShapeWithTextNode.md
parent_slug: ShapeWithTextNode
char_count: 431
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ShapeWithTextNode-introduction
  - ShapeWithTextNode-type-shapewithtext-readonly-shapetype-sq
  - ShapeWithTextNode-rotation-number
  - ShapeWithTextNode-clone-shapewithtextnode-fills-readonlyar
  - ShapeWithTextNode-fillstyleid-string-figmamixed
  - ShapeWithTextNode-setfillstyleidasyncstyleid-string-promis
  - ShapeWithTextNode-strokestyleid-string
  - ShapeWithTextNode-setstrokestyleidasyncstyleid-string-prom
  - ShapeWithTextNode-strokejoin-strokejoin-figmamixed-strokea
  - ShapeWithTextNode-dashpattern-readonlyarray-strokegeometry
  - ShapeWithTextNode-opacity-number-blendmode-blendmode
  - ShapeWithTextNode-id-string-readonly
  - ShapeWithTextNode-parent-basenode-childrenmixin-null-reado
  - ShapeWithTextNode-name-string-removed-boolean-readonly
  - ShapeWithTextNode-tostring-string
  - ShapeWithTextNode-remove-void-setrelaunchdatadata-command-
  - ShapeWithTextNode-getrelaunchdata-command-string-string-is
  - ShapeWithTextNode-getcssasync-promise-key-string-string-
  - ShapeWithTextNode-gettoplevelframe-framenode-undefined
  - ShapeWithTextNode-getplugindatakey-string-string
  - ShapeWithTextNode-setplugindatakey-string-value-string-voi
  - ShapeWithTextNode-getplugindatakeys-string
  - ShapeWithTextNode-getsharedplugindatanamespace-string-key-
  - ShapeWithTextNode-setsharedplugindatanamespace-string-key-
  - ShapeWithTextNode-getsharedplugindatakeysnamespace-string-
  - ShapeWithTextNode-getdevresourcesasyncoptions-includechild
  - ShapeWithTextNode-editdevresourceasynccurrenturl-string-ne
  - ShapeWithTextNode-setdevresourcepreviewasyncurl-string-pre
  - ShapeWithTextNode-maxwidth-number-null-minheight-number-nu
  - ShapeWithTextNode-absolutetransform-transform-readonly-abs
  - ShapeWithTextNode-visible-boolean-locked-boolean
  - ShapeWithTextNode-stucknodes-scenenode-readonly
  - ShapeWithTextNode-attachedconnectors-connectornode-readonl
  - ShapeWithTextNode-boundvariables-readonly-field-in-variabl
  - ShapeWithTextNode-inferredvariables-readonly-field-in-vari
  - ShapeWithTextNode-resolvedvariablemodes-collectionid-strin
  - ShapeWithTextNode-clearexplicitvariablemodeforcollectionco
  - ShapeWithTextNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'maxHeight: number | null'
  - 'relativeTransform: Transform'
compiler: noos-figma
---

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `maxHeight`.

The position of a node relative to its containing parent as a [`Transform`](/plugin-docs/api/Transform/)
 matrix. Not used for scaling, see `width` and `height` instead. Read the details page to understand the nuances of this property.

[View more →](/plugin-docs/api/properties/nodes-relativetransform/)
