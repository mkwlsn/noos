---
title: Constraints
slug: Constraints
source_file: plugin-api-Constraints.html
source_url: https://www.figma.com/plugin-docs/api/Constraints/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: dfff068ccaf15ee8
token_count: 130
---
# Constraints

```
interface Constraints { readonly horizontal: ConstraintType readonly vertical: ConstraintType}
```The resizing behavior of a layer when its containing frame is resized.

```
type ConstraintType = "MIN" | "CENTER" | "MAX" | "STRETCH" | "SCALE"
```The possible values of the resizing behavior of a layer when its containing frame is resized. In the UI, these are referred to as:

- "MIN": Left or Top
- "MAX": Right or Bottom
- "CENTER": Center
- "STRETCH": Left & Right or Top & Bottom
- "SCALE": Scale