---
title: Signature + Remarks
slug: TextNode-opentypefeatures-signature-remarks
source_file: plugin-api-TextNode-opentypefeatures.html
source_url: 'https://www.figma.com/plugin-docs/api/TextNode-opentypefeatures/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: dd4411965eaa7756
token_count: 371
chunk_title: Signature + Remarks
chunk_slug: TextNode-opentypefeatures-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: TextNode-opentypefeatures.md
parent_slug: TextNode-opentypefeatures
char_count: 1298
heading_level: h2
chunk_type: tutorial
merge_type: merged
tags: []
sibling_chunks:
  - TextNode-opentypefeatures-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### openTypeFeatures: { readonly [feature in OpenTypeFeature]: boolean} | figma.mixed [readonly]

The Details tab in the [Type settings panel](https://help.figma.com/hc/en-us/articles/360039956634-Explore-text-properties#type-settings)
 shows all the OpenType features that are available for the current font.

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
