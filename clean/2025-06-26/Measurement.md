---
title: Measurement
slug: Measurement
source_file: plugin-api-Measurement.html
source_url: https://www.figma.com/plugin-docs/api/Measurement/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 83f150948f4551da
token_count: 1032
---
# Measurement

Measurements can be added between nodes in Dev Mode to highlight distances.

Measurements can only be added between the following node types: [ComponentNode](/plugin-docs/api/ComponentNode/), [ComponentSetNode](/plugin-docs/api/ComponentSetNode/), [EllipseNode](/plugin-docs/api/EllipseNode/), [FrameNode](/plugin-docs/api/FrameNode/), [InstanceNode](/plugin-docs/api/InstanceNode/), [LineNode](/plugin-docs/api/LineNode/), [PolygonNode](/plugin-docs/api/PolygonNode/), [RectangleNode](/plugin-docs/api/RectangleNode/), [StarNode](/plugin-docs/api/StarNode/), [TextNode](/plugin-docs/api/TextNode/), [VectorNode](/plugin-docs/api/VectorNode/).

You can read, add, edit and remove measurements by using the measurement methods on a [PageNode](/plugin-docs/api/PageNode/).

The value of the measurement displayed can be overridden with the `freeText` field.

## Measurement properties

```
interface Measurement { id: string start: { node: SceneNode; side: MeasurementSide } end: { node: SceneNode; side: MeasurementSide } offset: MeasurementOffset freeText: string}
```See [MeasurementSide](/plugin-docs/api/MeasurementSide/) and [MeasurementOffset](/plugin-docs/api/MeasurementOffset/) for supported values.

## Page node properties

### getMeasurements(): Measurement[]

Get all measurements in the current page.

Learn more about measurements in the [Help Center](https://help.figma.com/hc/en-us/articles/20774752502935).

### getMeasurementsForNode(node: SceneNode): Measurement[]

Get all measurements pointing to a node in the current page. This includes all measurements whose start or end node is the node passed in.

### addMeasurement(start: { node: SceneNode; side: MeasurementSide }, end: { node: SceneNode; side: MeasurementSide }, options?: { offset: MeasurementOffset; freeText: string }): Measurement

Adds a measurement between two nodes in the current page.

Measurements are always between a start and end node. The side indicates which edge of the node to draw the measurement from.

Measurements can only go on the same axis, i.e. from side `"LEFT"` -> `"LEFT"`, `"LEFT"` -> `"RIGHT"`, `"TOP"` -> `"BOTTOM"` etc. But not `"LEFT"` -> `"TOP"`.

See the [Measurement type](/plugin-docs/api/Measurement/) for usage examples.

##### info

This method is only available in Dev Mode. You can check the editor type of your plugin to know if the user is in Dev Mode or not:

```
if (figma.editorType === 'dev') { // In Figma's Dev Mode}
```### editMeasurement(id: string, newValue: { offset: MeasurementOffset; freeText: string }): Measurement

Edit a measurement’s offset.

See the [Measurement type](/plugin-docs/api/Measurement/) for usage examples.

##### info

This method is only available in Dev Mode. You can check the editor type of your plugin to know if the user is in Dev Mode or not:

```
if (figma.editorType === 'dev') { // In Figma's Dev Mode}
```### deleteMeasurement(id: string): void

Delete a measurement.

See the [Measurement type](/plugin-docs/api/Measurement/) for usage examples.

##### info

This method is only available in Dev Mode. You can check the editor type of your plugin to know if the user is in Dev Mode or not:

```
if (figma.editorType === 'dev') { // In Figma's Dev Mode}
```## Example usage

```
const [frame1, frame2] = figma.currentPage.children// Add a measurementconst measurement1 = figma.currentPage.addMeasurement( { node: frame1, side: 'RIGHT' }, { node: frame2, side: 'LEFT' } )// Edit the measurement's offset to be at the bottom of frame1 on the canvasconst editedMeasurement1 = figma.currentPage.editMeasurement( measurement1.id, { offset: { type: 'INNER', relative: 1 } } )// Add a measurement with an offset of 10 above frame2 on the canvasconst measurement2 = figma.currentPage.addMeasurement( { node: frame2, side: 'LEFT' }, { node: frame1, side: 'RIGHT' }, { offset: { type: 'OUTER', fixed: -10 } } )// Override the value shown in the measurement to show '100%'const editedMeasurement2 = figma.currentPage.editMeasurement( measurement2.id, { freeText: '100%' } )// Delete a measurementfigma.currentPage.deleteMeasurement(measurement2.id)
```