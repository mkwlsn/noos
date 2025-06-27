---
title: >-
  absoluteTransform: Transform [readonly] + absoluteBoundingBox: Rect | null
  [readonly]
slug: ConnectorNode-absolutetransform-transform-readonly-abs
source_file: plugin-api-ConnectorNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ConnectorNode/'
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
chunk_slug: ConnectorNode-absolutetransform-transform-readonly-abs
chunk_index: 26
chunk_of_total: 35
parent_file: ConnectorNode.md
parent_slug: ConnectorNode
char_count: 327
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ConnectorNode-introduction
  - ConnectorNode-connectorendstrokecap-connectorstrokecap
  - ConnectorNode-blendmode-blendmode
  - ConnectorNode-strokes-readonlyarray-strokestyleid-stri
  - ConnectorNode-setstrokestyleidasyncstyleid-string-prom
  - ConnectorNode-strokejoin-strokejoin-figmamixed-strokea
  - ConnectorNode-dashpattern-readonlyarray-strokegeometry
  - ConnectorNode-id-string-readonly
  - ConnectorNode-parent-basenode-childrenmixin-null-reado
  - ConnectorNode-name-string-removed-boolean-readonly
  - ConnectorNode-tostring-string
  - ConnectorNode-remove-void-setrelaunchdatadata-command-
  - ConnectorNode-getrelaunchdata-command-string-string-is
  - ConnectorNode-getcssasync-promise-key-string-string-
  - ConnectorNode-gettoplevelframe-framenode-undefined
  - ConnectorNode-getplugindatakey-string-string
  - ConnectorNode-setplugindatakey-string-value-string-voi
  - ConnectorNode-getplugindatakeys-string
  - ConnectorNode-getsharedplugindatanamespace-string-key-
  - ConnectorNode-setsharedplugindatanamespace-string-key-
  - ConnectorNode-getsharedplugindatakeysnamespace-string-
  - ConnectorNode-getdevresourcesasyncoptions-includechild
  - ConnectorNode-editdevresourceasynccurrenturl-string-ne
  - ConnectorNode-setdevresourcepreviewasyncurl-string-pre
  - ConnectorNode-maxwidth-number-null-minheight-number-nu
  - ConnectorNode-maxheight-number-null-relativetransform-
  - ConnectorNode-visible-boolean-locked-boolean
  - ConnectorNode-stucknodes-scenenode-readonly
  - ConnectorNode-attachedconnectors-connectornode-readonl
  - ConnectorNode-boundvariables-readonly-field-in-variabl
  - ConnectorNode-inferredvariables-readonly-field-in-vari
  - ConnectorNode-resolvedvariablemodes-collectionid-strin
  - ConnectorNode-clearexplicitvariablemodeforcollectionco
  - ConnectorNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'absoluteTransform: Transform [readonly]'
  - 'absoluteBoundingBox: Rect | null [readonly]'
compiler: noos-figma
---

The position of a node relative to its containing page as a [`Transform`](/plugin-docs/api/Transform/)
 matrix.

The bounds of the node that does not include rendered properties like drop shadows or strokes. The `x` and `y` inside this property represent the absolute position of the node on the page.

## Scene node properties
