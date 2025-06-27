---
title: >-
  findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } &
  (PageNode | SceneNode)>
slug: DocumentNode-findallwithcriteriacriteria-findallcrite
source_file: plugin-api-DocumentNode.html
source_url: 'https://www.figma.com/plugin-docs/api/DocumentNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 917bc2cfe97fd124
token_count: 148
chunk_title: >-
  findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } &
  (PageNode | SceneNode)>
chunk_slug: DocumentNode-findallwithcriteriacriteria-findallcrite
chunk_index: 5
chunk_of_total: 23
parent_file: DocumentNode.md
parent_slug: DocumentNode
char_count: 516
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

Searches the entire document tree. Returns all nodes that satisfy all of specified criteria.

If the manifest contains `"documentAccess": "dynamic-page"`, you must first call [`figma.loadAllPagesAsync`](/plugin-docs/api/figma/#loadallpagesasync)
 to access this function.

Similar to [`findAllWithCriteria`](/plugin-docs/api/properties/nodes-findallwithcriteria/)
 with the main difference being that this searches all the nodes in the document, which also includes [`PageNode`](/plugin-docs/api/PageNode/)
 objects.
