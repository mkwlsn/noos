---
title: Complete Section
slug: ConnectorStrokeCap-complete-section
source_file: plugin-api-ConnectorStrokeCap.html
source_url: 'https://www.figma.com/plugin-docs/api/ConnectorStrokeCap/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2e4155d794ac0555
token_count: 189
chunk_title: Complete Section
chunk_slug: ConnectorStrokeCap-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: ConnectorStrokeCap.md
parent_slug: ConnectorStrokeCap
char_count: 660
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# ConnectorStrokeCap

```
type ConnectorStrokeCap = "NONE" | "ARROW_EQUILATERAL" | "ARROW_LINES" | "TRIANGLE_FILLED" | "DIAMOND_FILLED" | "CIRCLE_FILLED";
```The possible values are:

- `"NONE"`: nothing is added to the end of the connector
- `"ARROW_EQUILATERAL"`: an arrow made up of an equilateral triangle is added to the end of the connector
- `"ARROW_LINES"`: an arrow made up of two lines is added to the end of the connector
- `"TRIANGLE_FILLED"`: a filled triangle is added to the end of the connector
- `"DIAMOND_FILLED"`: a filled diamond is added to the end of the connector
- `"CIRCLE_FILLED"`: a filled circle is added to the end of the connector
