---
title: >-
  editMeasurement(id: string, newValue: { offset: MeasurementOffset; freeText:
  string }): Measurement
slug: Measurement-editmeasurementid-string-newvalue-offset
source_file: plugin-api-Measurement.html
source_url: 'https://www.figma.com/plugin-docs/api/Measurement/'
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
chunk_slug: Measurement-editmeasurementid-string-newvalue-offset
chunk_index: 3
chunk_of_total: 5
parent_file: Measurement.md
parent_slug: Measurement
char_count: 319
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - Measurement-introduction
  - Measurement-getmeasurements-measurement-getmeasureme
  - Measurement-addmeasurementstart-node-scenenode-side-
  - Measurement-deletemeasurementid-string-void
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
