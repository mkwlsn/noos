---
title: 'getSharedPluginDataKeys(namespace: string): string[]'
slug: DocumentNode-getsharedplugindatakeysnamespace-string-
source_file: plugin-api-DocumentNode.html
source_url: 'https://www.figma.com/plugin-docs/api/DocumentNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 3fd0ffde5160545a
token_count: 70
chunk_title: 'getSharedPluginDataKeys(namespace: string): string[]'
chunk_slug: DocumentNode-getsharedplugindatakeysnamespace-string-
chunk_index: 20
chunk_of_total: 23
parent_file: DocumentNode.md
parent_slug: DocumentNode
char_count: 242
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - DocumentNode-introduction
  - DocumentNode-insertchildindex-number-child-pagenode-v
  - DocumentNode-findchildcallback-node-pagenode-boolean-
  - DocumentNode-findallcallback-node-pagenode-scenenode-
  - DocumentNode-findonecallback-node-pagenode-scenenode-
  - DocumentNode-findallwithcriteriacriteria-findallcrite
  - DocumentNode-findwidgetnodesbywidgetidwidgetid-string
  - DocumentNode-id-string-readonly
  - DocumentNode-parent-basenode-childrenmixin-null-reado
  - DocumentNode-name-string-removed-boolean-readonly
  - DocumentNode-tostring-string
  - DocumentNode-remove-void-setrelaunchdatadata-command-
  - DocumentNode-getrelaunchdata-command-string-string-is
  - DocumentNode-getcssasync-promise-key-string-string-
  - DocumentNode-gettoplevelframe-framenode-undefined
  - DocumentNode-getplugindatakey-string-string
  - DocumentNode-setplugindatakey-string-value-string-voi
  - DocumentNode-getplugindatakeys-string
  - DocumentNode-getsharedplugindatanamespace-string-key-
  - DocumentNode-setsharedplugindatanamespace-string-key-
  - DocumentNode-getdevresourcesasyncoptions-includechild
  - DocumentNode-editdevresourceasynccurrenturl-string-ne
compiler: noos-figma
---

Retrieves a list of all keys stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/)
. This enables iterating through all data stored in a given namespace.

## Dev resource properties
