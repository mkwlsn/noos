---
title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
slug: SlideGridNode-getrelaunchdata-command-string-string-is
source_file: plugin-api-SlideGridNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideGridNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 645deeef9953ea32
token_count: 156
chunk_title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
chunk_slug: SlideGridNode-getrelaunchdata-command-string-string-is
chunk_index: 6
chunk_of_total: 38
parent_file: SlideGridNode.md
parent_slug: SlideGridNode
char_count: 544
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - SlideGridNode-introduction
  - SlideGridNode-id-string-readonly
  - SlideGridNode-parent-basenode-childrenmixin-null-reado
  - SlideGridNode-name-string-removed-boolean-readonly
  - SlideGridNode-tostring-string
  - SlideGridNode-remove-void-setrelaunchdatadata-command-
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
  - SlideGridNode-absolutetransform-transform-readonly-abs
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
