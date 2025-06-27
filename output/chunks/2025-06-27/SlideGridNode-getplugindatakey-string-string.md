---
title: 'getPluginData(key: string): string'
slug: SlideGridNode-getplugindatakey-string-string
source_file: plugin-api-SlideGridNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideGridNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f88ccb271d0ec997
token_count: 63
chunk_title: 'getPluginData(key: string): string'
chunk_slug: SlideGridNode-getplugindatakey-string-string
chunk_index: 9
chunk_of_total: 38
parent_file: SlideGridNode.md
parent_slug: SlideGridNode
char_count: 220
heading_level: h3
chunk_type: guide
merge_type: atomic
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
compiler: noos-figma
---

Retrieves custom information that was stored on this node or style using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. If there is no data stored for the provided key, an empty string is returned.
