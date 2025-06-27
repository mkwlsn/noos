---
title: >-
  addMeasurement(start: { node: SceneNode; side: MeasurementSide }, end: { node:
  SceneNode; side: MeasurementSide }, options?: { offset: MeasurementOffset;
  freeText: string }): Measurement
slug: Measurement-addmeasurementstart-node-scenenode-side-
source_file: plugin-api-Measurement.html
source_url: 'https://www.figma.com/plugin-docs/api/Measurement/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f865a429e597d666
token_count: 182
chunk_title: >-
  addMeasurement(start: { node: SceneNode; side: MeasurementSide }, end: { node:
  SceneNode; side: MeasurementSide }, options?: { offset: MeasurementOffset;
  freeText: string }): Measurement
chunk_slug: Measurement-addmeasurementstart-node-scenenode-side-
chunk_index: 2
chunk_of_total: 5
parent_file: Measurement.md
parent_slug: Measurement
char_count: 635
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - Measurement-introduction
  - Measurement-getmeasurements-measurement-getmeasureme
  - Measurement-editmeasurementid-string-newvalue-offset
  - Measurement-deletemeasurementid-string-void
compiler: noos-figma
---

Adds a measurement between two nodes in the current page.

Measurements are always between a start and end node. The side indicates which edge of the node to draw the measurement from.

Measurements can only go on the same axis, i.e. from side `"LEFT"` -> `"LEFT"`, `"LEFT"` -> `"RIGHT"`, `"TOP"` -> `"BOTTOM"` etc. But not `"LEFT"` -> `"TOP"`.

See the [Measurement type](/plugin-docs/api/Measurement/)
 for usage examples.

##### info

This method is only available in Dev Mode. You can check the editor type of your plugin to know if the user is in Dev Mode or not:

```
if (figma.editorType === 'dev') { // In Figma's Dev Mode}
```
