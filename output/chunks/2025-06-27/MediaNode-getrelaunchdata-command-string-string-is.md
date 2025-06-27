---
title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
slug: MediaNode-getrelaunchdata-command-string-string-is
source_file: plugin-api-MediaNode.html
source_url: 'https://www.figma.com/plugin-docs/api/MediaNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 645deeef9953ea32
token_count: 156
chunk_title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
chunk_slug: MediaNode-getrelaunchdata-command-string-string-is
chunk_index: 7
chunk_of_total: 30
parent_file: MediaNode.md
parent_slug: MediaNode
char_count: 544
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - MediaNode-introduction
  - MediaNode-resizewidth-number-height-number-void-re
  - MediaNode-clone-medianode-id-string-readonly
  - MediaNode-parent-basenode-childrenmixin-null-reado
  - MediaNode-name-string-removed-boolean-readonly
  - MediaNode-tostring-string
  - MediaNode-remove-void-setrelaunchdatadata-command-
  - MediaNode-getcssasync-promise-key-string-string-
  - MediaNode-gettoplevelframe-framenode-undefined
  - MediaNode-getplugindatakey-string-string
  - MediaNode-setplugindatakey-string-value-string-voi
  - MediaNode-getplugindatakeys-string
  - MediaNode-getsharedplugindatanamespace-string-key-
  - MediaNode-setsharedplugindatanamespace-string-key-
  - MediaNode-getsharedplugindatakeysnamespace-string-
  - MediaNode-getdevresourcesasyncoptions-includechild
  - MediaNode-editdevresourceasynccurrenturl-string-ne
  - MediaNode-setdevresourcepreviewasyncurl-string-pre
  - MediaNode-maxwidth-number-null-minheight-number-nu
  - MediaNode-maxheight-number-null-relativetransform-
  - MediaNode-absolutetransform-transform-readonly-abs
  - MediaNode-visible-boolean-locked-boolean
  - MediaNode-stucknodes-scenenode-readonly
  - MediaNode-attachedconnectors-connectornode-readonl
  - MediaNode-boundvariables-readonly-field-in-variabl
  - MediaNode-inferredvariables-readonly-field-in-vari
  - MediaNode-resolvedvariablemodes-collectionid-strin
  - MediaNode-clearexplicitvariablemodeforcollectionco
  - MediaNode-exportsettings-readonlyarray-exportasync
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
