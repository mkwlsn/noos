---
title: Introduction
slug: SliceNode-introduction
source_file: plugin-api-SliceNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SliceNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 912717a73c60cfb9
token_count: 148
chunk_title: Introduction
chunk_slug: SliceNode-introduction
chunk_index: 0
chunk_of_total: 41
parent_file: SliceNode.md
parent_slug: SliceNode
char_count: 518
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
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
compiler: noos-figma
---

# SliceNode

A slice is an invisible object with a bounding box, represented as dashed lines in the editor. Its purpose is to allow you to export a specific part of a document. Generally, the only thing you will do with a slice is to add an [`exportSettings`](/plugin-docs/api/SliceNode/#exportsettings)
 and export its content via [`exportAsync`](/plugin-docs/api/properties/nodes-exportasync/)
. Slices can be created using [`figma.createSlice`](/plugin-docs/api/properties/figma-createslice/)
.

## Slice properties
