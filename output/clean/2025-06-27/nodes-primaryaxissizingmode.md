---
title: primaryAxisSizingMode
slug: nodes-primaryaxissizingmode
source_file: plugin-api-nodes-primaryaxissizingmode.html
source_url: https://www.figma.com/plugin-docs/api/nodes-primaryaxissizingmode/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 20f4368180413ffc
token_count: 327
---
# primaryAxisSizingMode

Applicable only on auto-layout frames. Determines whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine).

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

## Signature

### primaryAxisSizingMode: 'FIXED' | 'AUTO'

## Remarks

Auto-layout frames have a primary axis, which is the axis that resizes when you add new items into the frame. For example, frames with "VERTICAL" [`layoutMode`](/plugin-docs/api/properties/nodes-layoutmode/)
 resize in the y-axis.

- `"FIXED"`: The primary axis length is determined by the user or plugins, unless the `layoutAlign` is set to “STRETCH” or `layoutGrow` is 1.
- `"AUTO"`: The primary axis length is determined by the size of the children. If set, the auto-layout frame will automatically resize along the counter axis to fit its children.

Note: `“AUTO”` should not be used in any axes where [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/)
 = “STRETCH” or [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/)
 = 1. Either use `“FIXED”` or disable [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/)
/[`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/)
.