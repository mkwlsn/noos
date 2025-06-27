---
title: 'deleteMeasurement(id: string): void'
slug: Measurement-deletemeasurementid-string-void
source_file: plugin-api-Measurement.html
source_url: 'https://www.figma.com/plugin-docs/api/Measurement/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: dfb386928caa329a
token_count: 343
chunk_title: 'deleteMeasurement(id: string): void'
chunk_slug: Measurement-deletemeasurementid-string-void
chunk_index: 4
chunk_of_total: 5
parent_file: Measurement.md
parent_slug: Measurement
char_count: 1198
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - Measurement-introduction
  - Measurement-getmeasurements-measurement-getmeasureme
  - Measurement-addmeasurementstart-node-scenenode-side-
  - Measurement-editmeasurementid-string-newvalue-offset
compiler: noos-figma
---

Delete a measurement.

See the [Measurement type](/plugin-docs/api/Measurement/)
 for usage examples.

##### info

This method is only available in Dev Mode. You can check the editor type of your plugin to know if the user is in Dev Mode or not:

```
if (figma.editorType === 'dev') { // In Figma's Dev Mode}
```

## Example usage

```
const [frame1, frame2] = figma.currentPage.children// Add a measurementconst measurement1 = figma.currentPage.addMeasurement( { node: frame1, side: 'RIGHT' }, { node: frame2, side: 'LEFT' } )// Edit the measurement's offset to be at the bottom of frame1 on the canvasconst editedMeasurement1 = figma.currentPage.editMeasurement( measurement1.id, { offset: { type: 'INNER', relative: 1 } } )// Add a measurement with an offset of 10 above frame2 on the canvasconst measurement2 = figma.currentPage.addMeasurement( { node: frame2, side: 'LEFT' }, { node: frame1, side: 'RIGHT' }, { offset: { type: 'OUTER', fixed: -10 } } )// Override the value shown in the measurement to show '100%'const editedMeasurement2 = figma.currentPage.editMeasurement( measurement2.id, { freeText: '100%' } )// Delete a measurementfigma.currentPage.deleteMeasurement(measurement2.id)
```
