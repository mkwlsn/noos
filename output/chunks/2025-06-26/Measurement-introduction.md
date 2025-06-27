---
title: Introduction
slug: Measurement-introduction
source_file: plugin-api-Measurement.html
source_url: 'https://www.figma.com/plugin-docs/api/Measurement/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 50093a22b098f7d4
token_count: 357
chunk_title: Introduction
chunk_slug: Measurement-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: Measurement.md
parent_slug: Measurement
char_count: 1247
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - Measurement-getmeasurements-measurement-getmeasureme
  - Measurement-addmeasurementstart-node-scenenode-side-
compiler: noos-figma
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
