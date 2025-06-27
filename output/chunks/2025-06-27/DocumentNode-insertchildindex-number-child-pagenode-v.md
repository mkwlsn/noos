---
title: >-
  insertChild(index: number, child: PageNode): void + findChildren(callback?:
  (node: PageNode) => boolean): Array
slug: DocumentNode-insertchildindex-number-child-pagenode-v
source_file: plugin-api-DocumentNode.html
source_url: 'https://www.figma.com/plugin-docs/api/DocumentNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2fc62d3e38c4f99b
token_count: 82
chunk_title: >-
  insertChild(index: number, child: PageNode): void + findChildren(callback?:
  (node: PageNode) => boolean): Array
chunk_slug: DocumentNode-insertchildindex-number-child-pagenode-v
chunk_index: 1
chunk_of_total: 23
parent_file: DocumentNode.md
parent_slug: DocumentNode
char_count: 286
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - DocumentNode-introduction
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
  - DocumentNode-getsharedplugindatakeysnamespace-string-
  - DocumentNode-getdevresourcesasyncoptions-includechild
  - DocumentNode-editdevresourceasynccurrenturl-string-ne
merged_titles:
  - 'insertChild(index: number, child: PageNode): void'
  - 'findChildren(callback?: (node: PageNode) => boolean): Array'
compiler: noos-figma
---

Adds a new page at the specified index in the `children` array.

Searches the immediate children of this node (i.e. all page nodes, not including their children). Returns all pages for which `callback` returns true.

[View more →](/plugin-docs/api/properties/DocumentNode-findchildren/)
