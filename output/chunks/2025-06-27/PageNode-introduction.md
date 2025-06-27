---
title: Introduction
slug: PageNode-introduction
source_file: plugin-api-PageNode.html
source_url: 'https://www.figma.com/plugin-docs/api/PageNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5ec5f33e7ba6acec
token_count: 72
chunk_title: Introduction
chunk_slug: PageNode-introduction
chunk_index: 0
chunk_of_total: 41
parent_file: PageNode.md
parent_slug: PageNode
char_count: 250
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - PageNode-type-page-readonly-clone-pagenode
  - PageNode-guides-readonlyarray-selection-readonlya
  - PageNode-selectedtextrange-node-textnode-start-nu
  - PageNode-prototypestartnode-framenode-groupnode-c
  - PageNode-ispagedivider-boolean
  - PageNode-loadasync-promise-ontype-nodechange-call
  - PageNode-oncetype-nodechange-callback-event-nodec
  - PageNode-focusedslide-slidenode-null
  - PageNode-getmeasurements-measurement-getmeasureme
  - PageNode-addmeasurementstart-node-scenenode-side-
  - PageNode-editmeasurementid-string-newvalue-offset
  - PageNode-deletemeasurementid-string-void
  - PageNode-id-string-readonly
  - PageNode-parent-basenode-childrenmixin-null-reado
  - PageNode-name-string-removed-boolean-readonly
  - PageNode-tostring-string
  - PageNode-remove-void-setrelaunchdatadata-command-
  - PageNode-getrelaunchdata-command-string-string-is
  - PageNode-getcssasync-promise-key-string-string-
  - PageNode-gettoplevelframe-framenode-undefined
  - PageNode-getplugindatakey-string-string
  - PageNode-setplugindatakey-string-value-string-voi
  - PageNode-getplugindatakeys-string
  - PageNode-getsharedplugindatanamespace-string-key-
  - PageNode-setsharedplugindatanamespace-string-key-
  - PageNode-getsharedplugindatakeysnamespace-string-
  - PageNode-getdevresourcesasyncoptions-includechild
  - PageNode-editdevresourceasynccurrenturl-string-ne
  - PageNode-setdevresourcepreviewasyncurl-string-pre
  - PageNode-clearexplicitvariablemodeforcollectionco
  - PageNode-children-readonlyarray-readonly
  - PageNode-appendchildchild-scenenode-void
  - PageNode-insertchildindex-number-child-scenenode-
  - PageNode-findchildrencallback-node-scenenode-bool
  - PageNode-findchildcallback-node-scenenode-boolean
  - PageNode-findallcallback-node-scenenode-boolean-s
  - PageNode-findonecallback-node-scenenode-boolean-s
  - PageNode-findallwithcriteriacriteria-findallcrite
  - PageNode-findwidgetnodesbywidgetidwidgetid-string
  - PageNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

# PageNode

The page node is always a descendent of the [`DocumentNode`](/plugin-docs/api/DocumentNode/)
. Most plugins only need to access the current page accessed via [`figma.currentPage`](/plugin-docs/api/figma/#currentpage)
.

## Page properties
