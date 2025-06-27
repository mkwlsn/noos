---
title: MeasurementOffset
slug: MeasurementOffset
source_file: plugin-api-MeasurementOffset.html
source_url: https://www.figma.com/plugin-docs/api/MeasurementOffset/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 1f5fd7a348874184
token_count: 160
---
# MeasurementOffset

```
type MeasurementOffset = | { type: 'INNER'; relative: number } | { type: 'OUTER'; fixed: number }
```The offset of a [Measurement](/plugin-docs/api/Measurement/)
. The offset field is relative to the start node’s center. It can either be:

- type `'INNER'` where the field `relative` is between -1 and 1, indicating where along the node’s edge the measurement starts.
- type `'OUTER'` where the node field `fixed` is the space between the measurement and the edge of the start node. The sign of the number determines which side it sticks out of. Its value must be non-zero (use type `'INNER'` for an offset of `0`).