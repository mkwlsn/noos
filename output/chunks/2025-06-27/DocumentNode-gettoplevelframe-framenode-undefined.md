---
title: 'getTopLevelFrame(): FrameNode | undefined'
slug: DocumentNode-gettoplevelframe-framenode-undefined
source_file: plugin-api-DocumentNode.html
source_url: 'https://www.figma.com/plugin-docs/api/DocumentNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 870bdd57b99cfd2b
token_count: 73
chunk_title: 'getTopLevelFrame(): FrameNode | undefined'
chunk_slug: DocumentNode-gettoplevelframe-framenode-undefined
chunk_index: 14
chunk_of_total: 23
parent_file: DocumentNode.md
parent_slug: DocumentNode
char_count: 254
heading_level: h3
chunk_type: method
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

Returns the top-most frame that contains this node. If the node is not inside a frame, this will return undefined.

##### info

This function will only work in Figma Design and will throw an error if called in FigJam or Slides.

## Plugin data properties
