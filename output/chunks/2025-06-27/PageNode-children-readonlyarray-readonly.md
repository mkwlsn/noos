---
title: 'children: ReadonlyArray [readonly]'
slug: PageNode-children-readonlyarray-readonly
source_file: plugin-api-PageNode.html
source_url: 'https://www.figma.com/plugin-docs/api/PageNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 51f0f03153326af7
token_count: 130
chunk_title: 'children: ReadonlyArray [readonly]'
chunk_slug: PageNode-children-readonlyarray-readonly
chunk_index: 31
chunk_of_total: 41
parent_file: PageNode.md
parent_slug: PageNode
char_count: 455
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - PageNode-introduction
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

The list of children, sorted back-to-front. That is, the first child in the array is the bottommost layer on the screen, and the last child in the array is the topmost layer.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this property.

[View more →](/plugin-docs/api/properties/nodes-children/)
