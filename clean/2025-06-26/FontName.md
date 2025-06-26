---
title: FontName
slug: FontName
source_file: plugin-api-FontName.html
source_url: https://www.figma.com/plugin-docs/api/FontName/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: c8318ec1c0f53966
token_count: 59
---
# FontName

```
interface Font { fontName: FontName}interface FontName { readonly family: string readonly style: string}
```Describes a font used by a text node. For example, the default font is `{ family: "Inter", style: "Regular" }`.