---
title: 'getSharedPluginData(namespace: string, key: string): string'
slug: LinkUnfurlNode-getsharedplugindatanamespace-string-key-
source_file: plugin-api-LinkUnfurlNode.html
source_url: 'https://www.figma.com/plugin-docs/api/LinkUnfurlNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b68efdfbc36a3c6e
token_count: 71
chunk_title: 'getSharedPluginData(namespace: string, key: string): string'
chunk_slug: LinkUnfurlNode-getsharedplugindatanamespace-string-key-
chunk_index: 12
chunk_of_total: 29
parent_file: LinkUnfurlNode.md
parent_slug: LinkUnfurlNode
char_count: 246
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - LinkUnfurlNode-introduction
  - LinkUnfurlNode-clone-linkunfurlnode-id-string-readonly
  - LinkUnfurlNode-parent-basenode-childrenmixin-null-reado
  - LinkUnfurlNode-name-string-removed-boolean-readonly
  - LinkUnfurlNode-tostring-string
  - LinkUnfurlNode-remove-void-setrelaunchdatadata-command-
  - LinkUnfurlNode-getrelaunchdata-command-string-string-is
  - LinkUnfurlNode-getcssasync-promise-key-string-string-
  - LinkUnfurlNode-gettoplevelframe-framenode-undefined
  - LinkUnfurlNode-getplugindatakey-string-string
  - LinkUnfurlNode-setplugindatakey-string-value-string-voi
  - LinkUnfurlNode-getplugindatakeys-string
  - LinkUnfurlNode-setsharedplugindatanamespace-string-key-
  - LinkUnfurlNode-getsharedplugindatakeysnamespace-string-
  - LinkUnfurlNode-getdevresourcesasyncoptions-includechild
  - LinkUnfurlNode-editdevresourceasynccurrenturl-string-ne
  - LinkUnfurlNode-setdevresourcepreviewasyncurl-string-pre
  - LinkUnfurlNode-maxwidth-number-null-minheight-number-nu
  - LinkUnfurlNode-maxheight-number-null-relativetransform-
  - LinkUnfurlNode-absolutetransform-transform-readonly-abs
  - LinkUnfurlNode-visible-boolean-locked-boolean
  - LinkUnfurlNode-stucknodes-scenenode-readonly
  - LinkUnfurlNode-attachedconnectors-connectornode-readonl
  - LinkUnfurlNode-boundvariables-readonly-field-in-variabl
  - LinkUnfurlNode-inferredvariables-readonly-field-in-vari
  - LinkUnfurlNode-resolvedvariablemodes-collectionid-strin
  - LinkUnfurlNode-clearexplicitvariablemodeforcollectionco
  - LinkUnfurlNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

Retrieves custom information that was stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/)
. If there is no data stored for the provided namespace and key, an empty string is returned.
