---
title: MaskType
slug: MaskType
source_file: plugin-api-MaskType.html
source_url: https://www.figma.com/plugin-docs/api/MaskType/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 65b1d41bfeec3619
token_count: 175
---
# MaskType

```
type MaskType = "ALPHA" | "VECTOR" | "LUMINANCE"
```Mask type defines what type of masking a node should use if it is a mask.

The possible values are:

- `"ALPHA"`: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
- `"VECTOR"`: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
- `"LUMINANCE"`: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.