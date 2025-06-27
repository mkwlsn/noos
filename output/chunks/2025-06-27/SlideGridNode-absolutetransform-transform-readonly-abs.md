---
title: >-
  absoluteTransform: Transform [readonly] + absoluteBoundingBox: Rect | null
  [readonly]
slug: SlideGridNode-absolutetransform-transform-readonly-abs
source_file: plugin-api-SlideGridNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideGridNode/'
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
chunk_slug: SlideGridNode-absolutetransform-transform-readonly-abs
chunk_index: 20
chunk_of_total: 38
parent_file: SlideGridNode.md
parent_slug: SlideGridNode
char_count: 327
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - SlideGridNode-introduction
  - SlideGridNode-id-string-readonly
  - SlideGridNode-parent-basenode-childrenmixin-null-reado
  - SlideGridNode-name-string-removed-boolean-readonly
  - SlideGridNode-tostring-string
  - SlideGridNode-remove-void-setrelaunchdatadata-command-
  - SlideGridNode-getrelaunchdata-command-string-string-is
  - SlideGridNode-getcssasync-promise-key-string-string-
  - SlideGridNode-gettoplevelframe-framenode-undefined
  - SlideGridNode-getplugindatakey-string-string
  - SlideGridNode-setplugindatakey-string-value-string-voi
  - SlideGridNode-getplugindatakeys-string
  - SlideGridNode-getsharedplugindatanamespace-string-key-
  - SlideGridNode-setsharedplugindatanamespace-string-key-
  - SlideGridNode-getsharedplugindatakeysnamespace-string-
  - SlideGridNode-getdevresourcesasyncoptions-includechild
  - SlideGridNode-editdevresourceasynccurrenturl-string-ne
  - SlideGridNode-setdevresourcepreviewasyncurl-string-pre
  - SlideGridNode-maxwidth-number-null-minheight-number-nu
  - SlideGridNode-maxheight-number-null-relativetransform-
  - SlideGridNode-visible-boolean-locked-boolean
  - SlideGridNode-stucknodes-scenenode-readonly
  - SlideGridNode-attachedconnectors-connectornode-readonl
  - SlideGridNode-boundvariables-readonly-field-in-variabl
  - SlideGridNode-inferredvariables-readonly-field-in-vari
  - SlideGridNode-resolvedvariablemodes-collectionid-strin
  - SlideGridNode-clearexplicitvariablemodeforcollectionco
  - SlideGridNode-exportsettings-readonlyarray-exportasync
  - SlideGridNode-children-readonlyarray-readonly
  - SlideGridNode-appendchildchild-scenenode-void
  - SlideGridNode-insertchildindex-number-child-scenenode-
  - SlideGridNode-findchildrencallback-node-scenenode-bool
  - SlideGridNode-findchildcallback-node-scenenode-boolean
  - SlideGridNode-findallcallback-node-scenenode-boolean-s
  - SlideGridNode-findonecallback-node-scenenode-boolean-s
  - SlideGridNode-findallwithcriteriacriteria-findallcrite
  - SlideGridNode-findwidgetnodesbywidgetidwidgetid-string
merged_titles:
  - 'absoluteTransform: Transform [readonly]'
  - 'absoluteBoundingBox: Rect | null [readonly]'
compiler: noos-figma
---

The position of a node relative to its containing page as a [`Transform`](/plugin-docs/api/Transform/)
 matrix.

The bounds of the node that does not include rendered properties like drop shadows or strokes. The `x` and `y` inside this property represent the absolute position of the node on the page.

## Scene node properties
