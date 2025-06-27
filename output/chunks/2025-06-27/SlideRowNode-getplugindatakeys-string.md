---
title: 'getPluginDataKeys(): string[]'
slug: SlideRowNode-getplugindatakeys-string
source_file: plugin-api-SlideRowNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideRowNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7e44c85c4733e960
token_count: 66
chunk_title: 'getPluginDataKeys(): string[]'
chunk_slug: SlideRowNode-getplugindatakeys-string
chunk_index: 11
chunk_of_total: 38
parent_file: SlideRowNode.md
parent_slug: SlideRowNode
char_count: 231
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
  - SlideRowNode-gettoplevelframe-framenode-undefined
  - SlideRowNode-getplugindatakey-string-string
  - SlideRowNode-setplugindatakey-string-value-string-voi
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

Retrieves a list of all keys stored on this node or style using using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. This enables iterating through all data stored privately on a node or style by your plugin.
