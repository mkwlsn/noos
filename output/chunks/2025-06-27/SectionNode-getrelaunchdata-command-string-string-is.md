---
title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
slug: SectionNode-getrelaunchdata-command-string-string-is
source_file: plugin-api-SectionNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SectionNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 645deeef9953ea32
token_count: 156
chunk_title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
chunk_slug: SectionNode-getrelaunchdata-command-string-string-is
chunk_index: 9
chunk_of_total: 45
parent_file: SectionNode.md
parent_slug: SectionNode
char_count: 544
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - SectionNode-introduction
  - SectionNode-type-section-readonly-sectioncontentshid
  - SectionNode-clone-sectionnode-resizewithoutconstrain
  - SectionNode-devstatus-devstatus
  - SectionNode-id-string-readonly
  - SectionNode-parent-basenode-childrenmixin-null-reado
  - SectionNode-name-string-removed-boolean-readonly
  - SectionNode-tostring-string
  - SectionNode-remove-void-setrelaunchdatadata-command-
  - SectionNode-getcssasync-promise-key-string-string-
  - SectionNode-gettoplevelframe-framenode-undefined
  - SectionNode-getplugindatakey-string-string
  - SectionNode-setplugindatakey-string-value-string-voi
  - SectionNode-getplugindatakeys-string
  - SectionNode-getsharedplugindatanamespace-string-key-
  - SectionNode-setsharedplugindatanamespace-string-key-
  - SectionNode-getsharedplugindatakeysnamespace-string-
  - SectionNode-getdevresourcesasyncoptions-includechild
  - SectionNode-editdevresourceasynccurrenturl-string-ne
  - SectionNode-setdevresourcepreviewasyncurl-string-pre
  - SectionNode-maxwidth-number-null-minheight-number-nu
  - SectionNode-maxheight-number-null-relativetransform-
  - SectionNode-absolutetransform-transform-readonly-abs
  - SectionNode-visible-boolean-locked-boolean
  - SectionNode-stucknodes-scenenode-readonly
  - SectionNode-attachedconnectors-connectornode-readonl
  - SectionNode-boundvariables-readonly-field-in-variabl
  - SectionNode-inferredvariables-readonly-field-in-vari
  - SectionNode-resolvedvariablemodes-collectionid-strin
  - SectionNode-clearexplicitvariablemodeforcollectionco
  - SectionNode-exportsettings-readonlyarray-exportasync
  - SectionNode-children-readonlyarray-readonly
  - SectionNode-appendchildchild-scenenode-void
  - SectionNode-insertchildindex-number-child-scenenode-
  - SectionNode-findchildrencallback-node-scenenode-bool
  - SectionNode-findchildcallback-node-scenenode-boolean
  - SectionNode-findallcallback-node-scenenode-boolean-s
  - SectionNode-findonecallback-node-scenenode-boolean-s
  - SectionNode-findallwithcriteriacriteria-findallcrite
  - SectionNode-findwidgetnodesbywidgetidwidgetid-string
  - SectionNode-fills-readonlyarray-figmamixed
  - SectionNode-fillstyleid-string-figmamixed
  - SectionNode-setfillstyleidasyncstyleid-string-promis
  - SectionNode-resizewithoutconstraintswidth-number-hei
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
