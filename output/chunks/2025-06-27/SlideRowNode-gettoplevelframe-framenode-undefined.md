---
title: 'getTopLevelFrame(): FrameNode | undefined'
slug: SlideRowNode-gettoplevelframe-framenode-undefined
source_file: plugin-api-SlideRowNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideRowNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 870bdd57b99cfd2b
token_count: 73
chunk_title: 'getTopLevelFrame(): FrameNode | undefined'
chunk_slug: SlideRowNode-gettoplevelframe-framenode-undefined
chunk_index: 8
chunk_of_total: 38
parent_file: SlideRowNode.md
parent_slug: SlideRowNode
char_count: 254
heading_level: h3
chunk_type: method
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
compiler: noos-figma
---

Returns the top-most frame that contains this node. If the node is not inside a frame, this will return undefined.

##### info

This function will only work in Figma Design and will throw an error if called in FigJam or Slides.

## Plugin data properties
