---
title: Signature + Remarks
slug: nodes-counteraxisaligncontent-signature-remarks
source_file: plugin-api-nodes-counteraxisaligncontent.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-counteraxisaligncontent/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6eaee9a15b406994
token_count: 254
chunk_title: Signature + Remarks
chunk_slug: nodes-counteraxisaligncontent-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-counteraxisaligncontent.md
parent_slug: nodes-counteraxisaligncontent
char_count: 887
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-counteraxisaligncontent-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### counterAxisAlignContent: 'AUTO' | 'SPACE_BETWEEN'

Changing this property on a non-wrapping auto-layout frame will throw an error.

- `"AUTO"`: If all children of this auto-layout frame have `layoutAlign` set to `"STRETCH"`, the tracks will stretch to fill the auto-layout frame. This is like flexbox `align-content: stretch`. Otherwise, each track will be as tall as the tallest child of the track, and will align based on the value of `counterAxisAlignItems`. This is like flexbox `align-content: start | center | end`. `counterAxisSpacing` is respected when `counterAxisAlignContent` is set to `"AUTO"`.
- `"SPACE_BETWEEN"`: Tracks are all sized based on the tallest child in the track. The free space within the auto-layout frame is divided up evenly between each track. If the total height of all tracks is taller than the height of the auto-layout frame, the spacing will be 0.
