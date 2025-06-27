---
title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
slug: SlideRowNode-getrelaunchdata-command-string-string-is
source_file: plugin-api-SlideRowNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideRowNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 645deeef9953ea32
token_count: 156
chunk_title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
chunk_slug: SlideRowNode-getrelaunchdata-command-string-string-is
chunk_index: 6
chunk_of_total: 38
parent_file: SlideRowNode.md
parent_slug: SlideRowNode
char_count: 544
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - SlideRowNode-introduction
  - SlideRowNode-id-string-readonly
  - SlideRowNode-parent-basenode-childrenmixin-null-reado
  - SlideRowNode-name-string-removed-boolean-readonly
  - SlideRowNode-tostring-string
  - SlideRowNode-remove-void-setrelaunchdatadata-command-
  - SlideRowNode-getcssasync-promise-key-string-string-
  - SlideRowNode-gettoplevelframe-framenode-undefined
  - SlideRowNode-getplugindatakey-string-string
  - SlideRowNode-setplugindatakey-string-value-string-voi
  - SlideRowNode-getplugindatakeys-string
  - SlideRowNode-getsharedplugindatanamespace-string-key-
  - SlideRowNode-setsharedplugindatanamespace-string-key-
  - SlideRowNode-getsharedplugindatakeysnamespace-string-
  - SlideRowNode-getdevresourcesasyncoptions-includechild
  - SlideRowNode-editdevresourceasynccurrenturl-string-ne
  - SlideRowNode-setdevresourcepreviewasyncurl-string-pre
  - SlideRowNode-maxwidth-number-null-minheight-number-nu
  - SlideRowNode-maxheight-number-null-relativetransform-
  - SlideRowNode-absolutetransform-transform-readonly-abs
  - SlideRowNode-visible-boolean-locked-boolean
  - SlideRowNode-stucknodes-scenenode-readonly
  - SlideRowNode-attachedconnectors-connectornode-readonl
  - SlideRowNode-boundvariables-readonly-field-in-variabl
  - SlideRowNode-inferredvariables-readonly-field-in-vari
  - SlideRowNode-resolvedvariablemodes-collectionid-strin
  - SlideRowNode-clearexplicitvariablemodeforcollectionco
  - SlideRowNode-exportsettings-readonlyarray-exportasync
  - SlideRowNode-children-readonlyarray-readonly
  - SlideRowNode-appendchildchild-scenenode-void
  - SlideRowNode-insertchildindex-number-child-scenenode-
  - SlideRowNode-findchildrencallback-node-scenenode-bool
  - SlideRowNode-findchildcallback-node-scenenode-boolean
  - SlideRowNode-findallcallback-node-scenenode-boolean-s
  - SlideRowNode-findonecallback-node-scenenode-boolean-s
  - SlideRowNode-findallwithcriteriacriteria-findallcrite
  - SlideRowNode-findwidgetnodesbywidgetidwidgetid-string
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
