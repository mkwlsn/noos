---
title: >-
  absoluteTransform: Transform [readonly] + absoluteBoundingBox: Rect | null
  [readonly]
slug: SliceNode-absolutetransform-transform-readonly-abs
source_file: plugin-api-SliceNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SliceNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 1e13bf9baffba8b1
token_count: 86
chunk_title: >-
  absoluteTransform: Transform [readonly] + absoluteBoundingBox: Rect | null
  [readonly]
chunk_slug: SliceNode-absolutetransform-transform-readonly-abs
chunk_index: 29
chunk_of_total: 41
parent_file: SliceNode.md
parent_slug: SliceNode
char_count: 301
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
  - SliceNode-getdevresourcesasyncoptions-includechild
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
  - 'absoluteTransform: Transform [readonly]'
  - 'absoluteBoundingBox: Rect | null [readonly]'
compiler: noos-figma
---

The position of a node relative to its containing page as a [`Transform`](/plugin-docs/api/Transform/)
 matrix.

The bounds of the node that does not include rendered properties like drop shadows or strokes. The `x` and `y` inside this property represent the absolute position of the node on the page.
