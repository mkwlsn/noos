---
title: ConnectorStrokeCap
slug: ConnectorStrokeCap
source_file: plugin-api-ConnectorStrokeCap.html
source_url: https://www.figma.com/plugin-docs/api/ConnectorStrokeCap/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 2e4155d794ac0555
token_count: 165
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