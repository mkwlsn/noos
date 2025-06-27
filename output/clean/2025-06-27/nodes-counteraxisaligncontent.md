---
title: counterAxisAlignContent
slug: nodes-counteraxisaligncontent
source_file: plugin-api-nodes-counteraxisaligncontent.html
source_url: https://www.figma.com/plugin-docs/api/nodes-counteraxisaligncontent/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: d311972b04855ed2
token_count: 316
---
# counterAxisAlignContent

Applicable only on auto-layout frames with [`layoutWrap`](/plugin-docs/api/properties/nodes-layoutwrap/)
 set to `"WRAP"`. Determines how the wrapped tracks are spaced out inside of the auto-layout frame.

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

## Signature

### counterAxisAlignContent: 'AUTO' | 'SPACE_BETWEEN'

## Remarks

Changing this property on a non-wrapping auto-layout frame will throw an error.

- `"AUTO"`: If all children of this auto-layout frame have `layoutAlign` set to `"STRETCH"`, the tracks will stretch to fill the auto-layout frame. This is like flexbox `align-content: stretch`. Otherwise, each track will be as tall as the tallest child of the track, and will align based on the value of `counterAxisAlignItems`. This is like flexbox `align-content: start | center | end`. `counterAxisSpacing` is respected when `counterAxisAlignContent` is set to `"AUTO"`.
- `"SPACE_BETWEEN"`: Tracks are all sized based on the tallest child in the track. The free space within the auto-layout frame is divided up evenly between each track. If the total height of all tracks is taller than the height of the auto-layout frame, the spacing will be 0.