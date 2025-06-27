---
title: InferredAutoLayoutResult
slug: InferredAutoLayoutResult
source_file: plugin-api-InferredAutoLayoutResult.html
source_url: https://www.figma.com/plugin-docs/api/InferredAutoLayoutResult/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 6e2ab4b293deb535
token_count: 1191
---
# InferredAutoLayoutResult

### layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL'

Determines whether this layer uses auto-layout to position its children. Defaults to "NONE".

[View more →](/plugin-docs/api/properties/nodes-layoutmode/)### layoutWrap: 'NO_WRAP' | 'WRAP'

Determines whether this layer should use wrapping auto-layout. Defaults to "NO_WRAP".

[View more →](/plugin-docs/api/properties/nodes-layoutwrap/)### paddingLeft: number

Applicable only on auto-layout frames. Determines the left padding between the border of the frame and its children.

### paddingRight: number

Applicable only on auto-layout frames. Determines the right padding between the border of the frame and its children.

### paddingTop: number

Applicable only on auto-layout frames. Determines the top padding between the border of the frame and its children.

### paddingBottom: number

Applicable only on auto-layout frames. Determines the bottom padding between the border of the frame and its children.

### horizontalPadding: number

DEPRECATED: Use `paddingLeft` and `paddingRight` instead.

### verticalPadding: number

DEPRECATED: Use `paddingTop` and `paddingBottom` instead.

### primaryAxisSizingMode: 'FIXED' | 'AUTO'

Applicable only on auto-layout frames. Determines whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine).

[View more →](/plugin-docs/api/properties/nodes-primaryaxissizingmode/)### counterAxisSizingMode: 'FIXED' | 'AUTO'

Applicable only on auto-layout frames. Determines whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine).

[View more →](/plugin-docs/api/properties/nodes-counteraxissizingmode/)### primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN'

Applicable only on auto-layout frames. Determines how the auto-layout frame’s children should be aligned in the primary axis direction.

[View more →](/plugin-docs/api/properties/nodes-primaryaxisalignitems/)### counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'BASELINE'

Applicable only on auto-layout frames. Determines how the auto-layout frame’s children should be aligned in the counter axis direction.

[View more →](/plugin-docs/api/properties/nodes-counteraxisalignitems/)### counterAxisAlignContent: 'AUTO' | 'SPACE_BETWEEN'

Applicable only on auto-layout frames with [`layoutWrap`](/plugin-docs/api/properties/nodes-layoutwrap/) set to `"WRAP"`. Determines how the wrapped tracks are spaced out inside of the auto-layout frame.

[View more →](/plugin-docs/api/properties/nodes-counteraxisaligncontent/)### itemSpacing: number

Applicable only on auto-layout frames. Determines distance between children of the frame.

[View more →](/plugin-docs/api/properties/nodes-itemspacing/)### counterAxisSpacing: number | null

Applicable only on auto-layout frames with [`layoutWrap`](/plugin-docs/api/properties/nodes-layoutwrap/) set to `"WRAP"`. Determines the distance between wrapped tracks. The value must be positive.

[View more →](/plugin-docs/api/properties/nodes-counteraxisspacing/)### itemReverseZIndex: boolean

Applicable only on auto-layout frames. Determines the [canvas stacking order](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties#Canvas_stacking_order) of layers in this frame. When true, the first layer will be draw on top.

[View more →](/plugin-docs/api/properties/nodes-itemreversezindex/)### strokesIncludedInLayout: boolean

Applicable only on auto-layout frames. Determines whether strokes are included in [layout calculations](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties#strokes-in-layout). When true, auto-layout frames behave like css `box-sizing: border-box`.

[View more →](/plugin-docs/api/properties/nodes-strokesincludedinlayout/)### layoutAlign: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT'

Applicable only on direct children of auto-layout frames. Determines if the layer should stretch along the parent’s counter axis. Defaults to `“INHERIT”`.

[View more →](/plugin-docs/api/properties/nodes-layoutalign/)### layoutGrow: number

This property is applicable only for direct children of auto-layout frames. Determines whether a layer should stretch along the parent’s primary axis. 0 corresponds to a fixed size and 1 corresponds to stretch.

[View more →](/plugin-docs/api/properties/nodes-layoutgrow/)### layoutPositioning: 'AUTO' | 'ABSOLUTE'

This property is applicable only for direct children of auto-layout frames. Determines whether a layer's size and position should be dermined by auto-layout settings or manually adjustable.

[View more →](/plugin-docs/api/properties/nodes-layoutpositioning/)