---
title: openTypeFeatures
slug: TextNode-opentypefeatures
source_file: plugin-api-TextNode-opentypefeatures.html
source_url: https://www.figma.com/plugin-docs/api/TextNode-opentypefeatures/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: fca59deaf6c2f54a
token_count: 383
---
# openTypeFeatures

[OpenType features](https://help.figma.com/hc/en-us/articles/4913951097367) that have been explicitly enabled or disabled.

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

## Signature

### openTypeFeatures: { readonly [feature in OpenTypeFeature]: boolean} | figma.mixed [readonly]

## Remarks

The Details tab in the [Type settings panel](https://help.figma.com/hc/en-us/articles/360039956634-Explore-text-properties#type-settings) shows all the OpenType features that are available for the current font.

This property gives you a map of four-character OpenType features to booleans indicating whether the features are explicitly enabled or disabled. For example, if the map contains `{ CALT: false }`, then the "Contextual alternates" feature is disabled.

##### info

This map only contains features that diverge from their default values. Some OpenType features are enabled by default and some are disabled by default. For example `CLIG` and `LIGA` are on by default, whereas `LNUM` and `TNUM` are disabled by default.

Here are some useful resources for learning about OpenType features:

- An ode to OpenType [Figma blog]
- OpenType feature tags [Microsoft]
- OpenType font features guide [MDN]
- OpenType Features in CSS [Sparanoid]

Getting OpenType features from the currently-selected text node```
// For a node that uses the Inter font with// "Contextual alternates" disabled (shows -> instead of ➔):// { CALT: false }console.log(figma.currentPage.selection[0].openTypeFeatures)
```