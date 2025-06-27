---
title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
slug: SliceNode-getrelaunchdata-command-string-string-is
source_file: plugin-api-SliceNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SliceNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 645deeef9953ea32
token_count: 156
chunk_title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
chunk_slug: SliceNode-getrelaunchdata-command-string-string-is
chunk_index: 6
chunk_of_total: 41
parent_file: SliceNode.md
parent_slug: SliceNode
char_count: 544
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - SliceNode-introduction
  - SliceNode-id-string-readonly
  - SliceNode-parent-basenode-childrenmixin-null-reado
  - SliceNode-name-string-removed-boolean-readonly
  - SliceNode-tostring-string
  - SliceNode-remove-void-setrelaunchdatadata-command-
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
merged_titles:
  - 'getRelaunchData(): { [command: string]: string }'
  - 'isAsset: boolean [readonly]'
compiler: noos-figma
---

Retreives the reluanch data stored on this node using [`setRelaunchData`](/plugin-docs/api/properties/nodes-setrelaunchdata/)

Returns true if Figma detects that a node is an asset, otherwise returns false. An asset is is either an icon or a raster image.

This property is useful if you’re building a [plugin for code generation](/plugin-docs/codegen-plugins/)
.

##### info

This property uses a set of heuristics to determine if a node is an asset. At a high level an icon is a small vector graphic and an image is a node with an image fill.
