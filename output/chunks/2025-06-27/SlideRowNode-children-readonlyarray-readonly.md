---
title: 'children: ReadonlyArray [readonly]'
slug: SlideRowNode-children-readonlyarray-readonly
source_file: plugin-api-SlideRowNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideRowNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 51f0f03153326af7
token_count: 130
chunk_title: 'children: ReadonlyArray [readonly]'
chunk_slug: SlideRowNode-children-readonlyarray-readonly
chunk_index: 29
chunk_of_total: 38
parent_file: SlideRowNode.md
parent_slug: SlideRowNode
char_count: 455
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - SlideRowNode-introduction
  - SlideRowNode-id-string-readonly
  - SlideRowNode-parent-basenode-childrenmixin-null-reado
  - SlideRowNode-name-string-removed-boolean-readonly
  - SlideRowNode-tostring-string
  - SlideRowNode-remove-void-setrelaunchdatadata-command-
  - SlideRowNode-getrelaunchdata-command-string-string-is
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
  - SlideRowNode-appendchildchild-scenenode-void
  - SlideRowNode-insertchildindex-number-child-scenenode-
  - SlideRowNode-findchildrencallback-node-scenenode-bool
  - SlideRowNode-findchildcallback-node-scenenode-boolean
  - SlideRowNode-findallcallback-node-scenenode-boolean-s
  - SlideRowNode-findonecallback-node-scenenode-boolean-s
  - SlideRowNode-findallwithcriteriacriteria-findallcrite
  - SlideRowNode-findwidgetnodesbywidgetidwidgetid-string
compiler: noos-figma
---

The list of children, sorted back-to-front. That is, the first child in the array is the bottommost layer on the screen, and the last child in the array is the topmost layer.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this property.

[View more →](/plugin-docs/api/properties/nodes-children/)
