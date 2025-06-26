---
title: BlendMode
slug: BlendMode
source_file: plugin-api-BlendMode.html
source_url: https://www.figma.com/plugin-docs/api/BlendMode/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 1c9f70114b997a9c
token_count: 172
---
# BlendMode

```
type BlendMode = "PASS_THROUGH" | "NORMAL" | "DARKEN" | "MULTIPLY" | "LINEAR_BURN" | // "Plus darker" in Figma "COLOR_BURN" | "LIGHTEN" | "SCREEN" | "LINEAR_DODGE" | // "Plus lighter" in Figma "COLOR_DODGE" | "OVERLAY" | "SOFT_LIGHT" | "HARD_LIGHT" | "DIFFERENCE" | "EXCLUSION" | "HUE" | "SATURATION" | "COLOR" | "LUMINOSITY"
```Blend mode describes how a color blends with what's underneath it. This property is typically set on a layer, fill or effect (e.g. blend mode of the shadow).

These blend modes are fairly standard and should match what you would find in other image processing tools. [[Examples]](https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode)