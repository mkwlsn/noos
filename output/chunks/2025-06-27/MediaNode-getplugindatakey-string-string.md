---
title: 'getPluginData(key: string): string'
slug: MediaNode-getplugindatakey-string-string
source_file: plugin-api-MediaNode.html
source_url: 'https://www.figma.com/plugin-docs/api/MediaNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f88ccb271d0ec997
token_count: 63
chunk_title: 'getPluginData(key: string): string'
chunk_slug: MediaNode-getplugindatakey-string-string
chunk_index: 10
chunk_of_total: 30
parent_file: MediaNode.md
parent_slug: MediaNode
char_count: 220
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - MediaNode-introduction
  - MediaNode-resizewidth-number-height-number-void-re
  - MediaNode-clone-medianode-id-string-readonly
  - MediaNode-parent-basenode-childrenmixin-null-reado
  - MediaNode-name-string-removed-boolean-readonly
  - MediaNode-tostring-string
  - MediaNode-remove-void-setrelaunchdatadata-command-
  - MediaNode-getrelaunchdata-command-string-string-is
  - MediaNode-getcssasync-promise-key-string-string-
  - MediaNode-gettoplevelframe-framenode-undefined
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
compiler: noos-figma
---

Retrieves custom information that was stored on this node or style using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. If there is no data stored for the provided key, an empty string is returned.
