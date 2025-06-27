---
title: 'getPluginData(key: string): string'
slug: SlideRowNode-getplugindatakey-string-string
source_file: plugin-api-SlideRowNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideRowNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f88ccb271d0ec997
token_count: 63
chunk_title: 'getPluginData(key: string): string'
chunk_slug: SlideRowNode-getplugindatakey-string-string
chunk_index: 9
chunk_of_total: 38
parent_file: SlideRowNode.md
parent_slug: SlideRowNode
char_count: 220
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

Retrieves custom information that was stored on this node or style using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. If there is no data stored for the provided key, an empty string is returned.
