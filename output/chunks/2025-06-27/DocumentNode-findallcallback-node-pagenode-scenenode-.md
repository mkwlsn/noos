---
title: 'findAll(callback?: (node: PageNode | SceneNode) => boolean): Array'
slug: DocumentNode-findallcallback-node-pagenode-scenenode-
source_file: plugin-api-DocumentNode.html
source_url: 'https://www.figma.com/plugin-docs/api/DocumentNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 71625c568b726304
token_count: 95
chunk_title: 'findAll(callback?: (node: PageNode | SceneNode) => boolean): Array'
chunk_slug: DocumentNode-findallcallback-node-pagenode-scenenode-
chunk_index: 3
chunk_of_total: 23
parent_file: DocumentNode.md
parent_slug: DocumentNode
char_count: 332
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - DocumentNode-introduction
  - DocumentNode-insertchildindex-number-child-pagenode-v
  - DocumentNode-findchildcallback-node-pagenode-boolean-
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
  - DocumentNode-getsharedplugindatakeysnamespace-string-
  - DocumentNode-getdevresourcesasyncoptions-includechild
  - DocumentNode-editdevresourceasynccurrenturl-string-ne
compiler: noos-figma
---

Searches the entire document tree. Returns all nodes for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, you must first call [`figma.loadAllPagesAsync`](/plugin-docs/api/figma/#loadallpagesasync)
 to access this function.

[View more →](/plugin-docs/api/properties/DocumentNode-findall/)
