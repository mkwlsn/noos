---
title: >-
  exportSettings: ReadonlyArray + exportAsync(settings: ExportSettingsREST):
  Promise
slug: PageNode-exportsettings-readonlyarray-exportasync
source_file: plugin-api-PageNode.html
source_url: 'https://www.figma.com/plugin-docs/api/PageNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f9c0bb9aa40cb7f1
token_count: 133
chunk_title: >-
  exportSettings: ReadonlyArray + exportAsync(settings: ExportSettingsREST):
  Promise
chunk_slug: PageNode-exportsettings-readonlyarray-exportasync
chunk_index: 40
chunk_of_total: 41
parent_file: PageNode.md
parent_slug: PageNode
char_count: 465
heading_level: h3
chunk_type: guide
merge_type: merged
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
  - PageNode-children-readonlyarray-readonly
  - PageNode-appendchildchild-scenenode-void
  - PageNode-insertchildindex-number-child-scenenode-
  - PageNode-findchildrencallback-node-scenenode-bool
  - PageNode-findchildcallback-node-scenenode-boolean
  - PageNode-findallcallback-node-scenenode-boolean-s
  - PageNode-findonecallback-node-scenenode-boolean-s
  - PageNode-findallwithcriteriacriteria-findallcrite
  - PageNode-findwidgetnodesbywidgetidwidgetid-string
merged_titles:
  - 'exportSettings: ReadonlyArray'
  - 'exportAsync(settings: ExportSettingsREST): Promise'
compiler: noos-figma
---

List of export settings stored on the node. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

Exports the node as an encoded image.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-exportasync/)
