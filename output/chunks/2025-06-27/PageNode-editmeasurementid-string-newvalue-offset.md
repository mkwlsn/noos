---
title: >-
  editMeasurement(id: string, newValue: { offset: MeasurementOffset; freeText:
  string }): Measurement
slug: PageNode-editmeasurementid-string-newvalue-offset
source_file: plugin-api-PageNode.html
source_url: 'https://www.figma.com/plugin-docs/api/PageNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: e79bb51e9dfbea41
token_count: 92
chunk_title: >-
  editMeasurement(id: string, newValue: { offset: MeasurementOffset; freeText:
  string }): Measurement
chunk_slug: PageNode-editmeasurementid-string-newvalue-offset
chunk_index: 11
chunk_of_total: 41
parent_file: PageNode.md
parent_slug: PageNode
char_count: 319
heading_level: h3
chunk_type: tutorial
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

Edit a measurement’s offset.

See the [Measurement type](/plugin-docs/api/Measurement/)
 for usage examples.

##### info

This method is only available in Dev Mode. You can check the editor type of your plugin to know if the user is in Dev Mode or not:

```
if (figma.editorType === 'dev') { // In Figma's Dev Mode}
```
