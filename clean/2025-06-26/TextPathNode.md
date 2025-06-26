---
title: TextPathNode
slug: TextPathNode
source_file: plugin-api-TextPathNode.html
source_url: https://www.figma.com/plugin-docs/api/TextPathNode/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: ebd14accb5aceb9d
token_count: 8294
---
# TextPathNode

##### caution

Text on a path is available in beta. The API is subject to change.

A text path node allows text to follow along a vector path while maintaining text styling capabilities. Like regular [text nodes](/plugin-docs/api/TextNode/), text paths have styling properties such as color (fills), font size, and font name that can be applied to either the entire node or individual character ranges.

Text paths have a subset of the properties from [Text Nodes](/plugin-docs/api/TextNode/), as well as a few path-specific properties that define the underlying vector geometry. When working with text, there are a lot of things to consider, including mixed styles, loading fonts, and missing fonts. Please refer to the [Working with Text](/plugin-docs/working-with-text/) page for more information.

## Text path node properties

### type: 'TEXT_PATH' [readonly]

The type of this node, represented by the string literal "TEXT_PATH"

### clone(): TextPathNode

Duplicates the text path node. By default, the duplicate will be parented under `figma.currentPage`.

### hasMissingFont: boolean [readonly]

Returns whether the text uses a font currently not available to the document.

### textAlignHorizontal: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED'

The horizontal alignment of the text with respect to the textbox. Setting this property requires the font the be loaded.

### textAlignVertical: 'TOP' | 'CENTER' | 'BOTTOM'

The vertical alignment of the text with respect to the textbox. Setting this property requires the font the be loaded.

### autoRename: boolean

Whether updating the characters in the text node should update the name of the node. If this is set to true, `name` will be auto-derived from `characters`.

[View more →](/plugin-docs/api/properties/TextPathNode-autorename/)## Path-related properties

### vectorPaths: VectorPaths [readonly]

The vector paths of the text path node.

### vectorNetwork: VectorNetwork [readonly]

The vector network of the text path node.

### handleMirroring: HandleMirroring | figma.mixed [readonly]

Whether the vector handles are mirrored or independent.

## Text content

### characters: string

The raw characters in the text node. Setting this property requires the font the be loaded.

[View more →](/plugin-docs/api/properties/TextNode-characters/)### insertCharacters(start: number, characters: string, useStyle?: 'BEFORE' | 'AFTER'): void

Insert `characters` at index `start` in the text.

[View more →](/plugin-docs/api/properties/TextNode-insertcharacters/)### deleteCharacters(start: number, end: number): void

Remove characters in the text from `start` (inclusive) to `end` (exclusive).

[View more →](/plugin-docs/api/properties/TextNode-deletecharacters/)## Text and text range properties

These properties can be applied to the whole text node, or parts of the text on specific character ranges.

### fontSize: number | figma.mixed

The size of the font. Has minimum value of 1.

### fontName: FontName | figma.mixed

The font family (e.g. "Inter"), and font style (e.g. "Regular"). Setting this property to a different value requires the new font to be loaded.

### fontWeight: number | figma.mixed [readonly]

The weight of the font (e.g. 400 for "Regular", 700 for "Bold").

### textCase: TextCase | figma.mixed

Overrides the case of the raw characters in the text node. Requires the font to be loaded.

### openTypeFeatures: { readonly [feature in OpenTypeFeature]: boolean} | figma.mixed [readonly]

[OpenType features](https://help.figma.com/hc/en-us/articles/4913951097367) that have been explicitly enabled or disabled.

[View more →](/plugin-docs/api/properties/TextNode-opentypefeatures/)### letterSpacing: LetterSpacing | figma.mixed

The spacing between the individual characters. Requires the font to be loaded.

### textStyleId: string | figma.mixed

The id of the [`TextStyle`](/plugin-docs/api/TextStyle/) object that the text properties of this node are linked to. Requires the font to be loaded.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use [`setTextStyleIdAsync`](/plugin-docs/api/TextPathNode/#settextstyleidasync) to update the style.

### setTextStyleIdAsync(styleId: string): Promise

Set the [`TextStyle`](/plugin-docs/api/TextStyle/) that the text properties of this node are linked to. Requires the font to be loaded.

### hyperlink: HyperlinkTarget | null | figma.mixed

A [`HyperlinkTarget`](/plugin-docs/api/HyperlinkTarget/) if the text node has exactly one hyperlink, or `null` if the node has none.

## Text range functions

These functions allow you to get and set text properties on parts of the text.

### getStyledTextSegments)[]>(fields: StyledTextSegmentFields, start?: number, end?: number): Array>

Get text segments along with the desired text properties (font size, text case, etc...)

[View more →](/plugin-docs/api/properties/TextNode-getstyledtextsegments/)### getRangeFontSize(start: number, end: number): number | figma.mixed

Get the `fontSize` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeFontSize(start: number, end: number, value: number): void

Set the `fontSize` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeFontName(start: number, end: number): FontName | figma.mixed

Get the `fontName` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeFontName(start: number, end: number, value: FontName): void

Set the `fontName` from characters in range `start` (inclusive) to `end` (exclusive). Requires the new font to be loaded.

### getRangeAllFontNames(start: number, end: number): FontName[]

Get the `fontName`s from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeFontWeight(start: number, end: number): number | figma.mixed

Get the `fontWeight` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeTextCase(start: number, end: number): TextCase | figma.mixed

Get the `textCase` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeTextCase(start: number, end: number, value: TextCase): void

Set the `textCase` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeOpenTypeFeatures(start: number, end: number): { readonly [feature in OpenTypeFeature]: boolean} | figma.mixed

Get the [`openTypeFeatures`](/plugin-docs/api/properties/TextNode-opentypefeatures/) from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeLetterSpacing(start: number, end: number): LetterSpacing | figma.mixed

Get the `letterSpacing` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeLetterSpacing(start: number, end: number, value: LetterSpacing): void

Set the `letterSpacing` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeHyperlink(start: number, end: number): HyperlinkTarget | null | figma.mixed

Get the `hyperlink` from characters in range `start` (inclusive) to `end` (exclusive). Returns a [`HyperlinkTarget`](/plugin-docs/api/HyperlinkTarget/) if the range contains exactly one hyperlink, or `null` if the range contains none.

### setRangeHyperlink(start: number, end: number, value: HyperlinkTarget | null): void

Set the `hyperlink` from characters in range `start` (inclusive) to `end` (exclusive). Removes the hyperlink in range if `value` is `null`.

### getRangeFills(start: number, end: number): Paint[] | figma.mixed

Get the `fills` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeFills(start: number, end: number, value: Paint[]): void

Set the `fills` from characters in range `start` (inclusive) to `end` (exclusive). Requires font to be loaded.

Can be bound to color variables by using [`setBoundVariableForPaint`](/plugin-docs/api/figma-variables/#setboundvariableforpaint) on one or more of the provided `Paint`s

### getRangeTextStyleId(start: number, end: number): string | figma.mixed

Get the `textStyleId` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeTextStyleIdAsync(start: number, end: number, styleId: string): Promise

Set the provided [`TextStyle`](/plugin-docs/api/TextStyle/) to characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeTextStyleId(start: number, end: number, value: string): void

DEPRECATED: Use `setRangeTextStyleIdAsync` instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Set the `textStyleId` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeFillStyleId(start: number, end: number): string | figma.mixed

Get the `fillStyleId` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeFillStyleIdAsync(start: number, end: number, styleId: string): Promise

Set the provided [`PaintStyle`](/plugin-docs/api/PaintStyle/) as a fill to characters in range `start` (inclusive) to `end` (exclusive).

### setRangeFillStyleId(start: number, end: number, value: string): void

DEPRECATED: Use `setRangeFillStyleIdAsync` instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Set the `fillStyleId` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeBoundVariable(start: number, end: number, field: VariableBindableTextField): VariableAlias | null | figma.mixed

Get the `boundVariable` for a given field from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeBoundVariable(start: number, end: number, field: VariableBindableTextField, variable: Variable | null): void

Set the `boundVariable` for a given field from characters in range `start` (inclusive) to `end` (exclusive). Requires any new fonts to be loaded.

## Base node properties

### id: string [readonly]

The unique identifier of a node. For example, `1:3`. The node id can be used with methods such as [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync), but plugins typically don't need to use this since you can usually just access a node directly.

[View more →](/plugin-docs/api/properties/nodes-id/)### parent: (BaseNode & ChildrenMixin) | null [readonly]

Returns the parent of this node, if any. This property is not meant to be directly edited. To reparent, see [`appendChild`](/plugin-docs/api/properties/nodes-appendchild/).

[View more →](/plugin-docs/api/properties/nodes-parent/)### name: string

The name of the layer that appears in the layers panel. Calling `figma.root.name` will return the name, read-only, of the current file.

[View more →](/plugin-docs/api/properties/nodes-name/)### removed: boolean [readonly]

Returns true if this node has been removed since it was first accessed. If your plugin stays open for a while and stores references to nodes, you should write your code defensively and check that the nodes haven't been removed by the user.

[View more →](/plugin-docs/api/properties/nodes-removed/)### toString(): string

Returns a string representation of the node. For debugging purposes only, do not rely on the exact output of this string in production code.

[View more →](/plugin-docs/api/properties/nodes-tostring/)### remove(): void

Removes this node and all of its children from the document.

[View more →](/plugin-docs/api/properties/nodes-remove/)### setRelaunchData(data: { [command: string]: string }): void

Sets state on the node to show a button and description when the node is selected. Clears the button and description when `relaunchData` is `{}`.

##### info

In Figma and Dev Mode, this shows up in the properties panel. In FigJam, this shows up in the property menu. See [here](/plugin-docs/api/properties/nodes-setrelaunchdata/#example-figma-design-ui) for examples.

[View more →](/plugin-docs/api/properties/nodes-setrelaunchdata/)### getRelaunchData(): { [command: string]: string }

Retreives the reluanch data stored on this node using [`setRelaunchData`](/plugin-docs/api/properties/nodes-setrelaunchdata/)

### isAsset: boolean [readonly]

Returns true if Figma detects that a node is an asset, otherwise returns false. An asset is is either an icon or a raster image.

This property is useful if you’re building a [plugin for code generation](/plugin-docs/codegen-plugins/).

##### info

This property uses a set of heuristics to determine if a node is an asset. At a high level an icon is a small vector graphic and an image is a node with an image fill.

### getCSSAsync(): Promise<{ [key: string]: string }>

Resolves to a JSON object of CSS properties of the node. This is the same CSS that Figma shows in the inspect panel and is helpful if you are building a [plugin for code generation](/plugin-docs/codegen-plugins/).

### getTopLevelFrame(): FrameNode | undefined

Returns the top-most frame that contains this node. If the node is not inside a frame, this will return undefined.

##### info

This function will only work in Figma Design and will throw an error if called in FigJam or Slides.

## Plugin data properties

### getPluginData(key: string): string

Retrieves custom information that was stored on this node or style using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/). If there is no data stored for the provided key, an empty string is returned.

### setPluginData(key: string, value: string): void

Lets you store custom information on any node or style, private to your plugin. The total size of your entry (`pluginId`, `key`, `value`) cannot exceed 100 kB.

[View more →](/plugin-docs/api/properties/nodes-setplugindata/)### getPluginDataKeys(): string[]

Retrieves a list of all keys stored on this node or style using using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/). This enables iterating through all data stored privately on a node or style by your plugin.

### getSharedPluginData(namespace: string, key: string): string

Retrieves custom information that was stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/). If there is no data stored for the provided namespace and key, an empty string is returned.

### setSharedPluginData(namespace: string, key: string, value: string): void

Lets you store custom information on any node or style, public to all plugins. The total size of your entry (`namespace`, `key`, `value`) cannot exceed 100 kB.

[View more →](/plugin-docs/api/properties/nodes-setsharedplugindata/)### getSharedPluginDataKeys(namespace: string): string[]

Retrieves a list of all keys stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/). This enables iterating through all data stored in a given namespace.

## Dev resource properties

### getDevResourcesAsync(options?: { includeChildren: boolean }): Promise

Gets all of the dev resources on a node. This includes any inherited dev resources from components and component sets.

[View more →](/plugin-docs/api/properties/nodes-getdevresourcesasync/)### addDevResourceAsync(url: string, name?: string): Promise

Adds a dev resource to a node. This will fail if the node already has a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-adddevresourceasync/)### editDevResourceAsync(currentUrl: string, newValue: { name: string; url: string }): Promise

Edits a dev resource on a node. This will fail if the node does not have a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-editdevresourceasync/)### deleteDevResourceAsync(url: string): Promise

Deletes a dev resource on a node. This will fail if the node does not have a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-deletedevresourceasync/)### setDevResourcePreviewAsync(url: string, preview: PlainTextElement): Promise

##### caution

This is a private API only available to [Figma partners](https://www.figma.com/partners/)

## Scene node properties

### visible: boolean

Whether the node is visible or not. Does not affect a plugin's ability to access the node.

[View more →](/plugin-docs/api/properties/nodes-visible/)### locked: boolean

Whether the node is locked or not, preventing certain user interactions on the canvas such as selecting and dragging. Does not affect a plugin's ability to write to those properties.

[View more →](/plugin-docs/api/properties/nodes-locked/)### stuckNodes: SceneNode[] [readonly]

An array of nodes that are "stuck" to this node. In FigJam, stamps, highlights, and some widgets can "stick"
to other nodes if they are dragged on top of another node.

[View more →](/plugin-docs/api/properties/nodes-stucknodes/)### attachedConnectors: ConnectorNode[] [readonly]

An array of `ConnectorNode`s that are attached to a node.

### componentPropertyReferences: { [nodeProperty in 'visible' | 'characters' | 'mainComponent']?: string} | null

All component properties that are attached on this node. A node can only have `componentPropertyReferences` if it is a component sublayer or an instance sublayer. It will be `null` otherwise. The value in the key-value pair refers to the component property name as returned by `componentPropertyDefinitions` on the containing component, component set or main component (for instances).

### boundVariables?: { readonly [field in VariableBindableNodeField]?: VariableAlias} & { readonly [field in VariableBindableTextField]?: VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[]; effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: { [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] } [readonly]

The variables bound to a particular field on this node. Please see the [Working with Variables](/plugin-docs/working-with-variables/) guide for how to get and set variable bindings.

### setBoundVariable(field: VariableBindableNodeField | VariableBindableTextField, variable: Variable | null): void

Binds the provided `field` on this node to the given variable. Please see the [Working with Variables](/plugin-docs/working-with-variables/) guide for how to get and set variable bindings.

If `null` is provided as the variable, the given `field` will be unbound from any variables.

[View more →](/plugin-docs/api/properties/nodes-setboundvariable/)### inferredVariables?: { readonly [field in VariableBindableNodeField]?: VariableAlias[]} & { fills: VariableAlias[][]; strokes: VariableAlias[][] } [readonly]

An object, keyed by field, returning any variables that match the raw value of that field for the mode of the node (or the default variable value if no mode is set)

[View more →](/plugin-docs/api/properties/nodes-inferredvariables/)### resolvedVariableModes: { [collectionId: string]: string }

The resolved mode for this node for each variable collection in this file.

[View more →](/plugin-docs/api/properties/nodes-resolvedvariablemodes/)### explicitVariableModes: { [collectionId: string]: string }

The explicitly set modes for this node.
For `SceneNodes`, represents a subset of [`resolvedVariableModes`](/plugin-docs/api/properties/nodes-resolvedvariablemodes/).
Note that this does not include [workspace and team-default modes](https://help.figma.com/hc/en-us/articles/12611253730071).

### clearExplicitVariableModeForCollection(collection: VariableCollection): void

Clears an explicit mode for the given collection on this node

[View more →](/plugin-docs/api/properties/ExplicitVariableModesMixin-clearexplicitvariablemodeforcollection/)### setExplicitVariableModeForCollection(collection: VariableCollection, modeId: string): void

Sets an explicit mode for the given collection on this node

[View more →](/plugin-docs/api/properties/ExplicitVariableModesMixin-setexplicitvariablemodeforcollection/)## Blend-related properties

### opacity: number

Opacity of the node, as shown in the Layer panel. Must be between 0 and 1.

### blendMode: BlendMode

Blend mode of this node, as shown in the Layer panel. In addition to the blend modes that paints & effects support, the layer blend mode can also have the value PASS_THROUGH.

### isMask: boolean

Whether this node is a mask. A mask node masks its subsequent siblings.

[View more →](/plugin-docs/api/properties/nodes-ismask/)### maskType: MaskType

Type of masking to use if this node is a mask. Defaults to `"ALPHA"`. You must check `isMask` to verify that this is a mask; changing `maskType` does not automatically turn on `isMask`, and a node that is not a mask can still have a `maskType`.

### effects: ReadonlyArray

Array of effects. See [`Effect`](/plugin-docs/api/Effect/) type. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

### effectStyleId: string

The id of the [`EffectStyle`](/plugin-docs/api/EffectStyle/) object that the properties of this node are linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setEffectStyleIdAsync` to update the style.

### setEffectStyleIdAsync(styleId: string): Promise

Set the [`EffectStyle`](/plugin-docs/api/EffectStyle/) that the properties of this node are linked to.

## Geometry-related properties

### fills: ReadonlyArray | figma.mixed

The paints used to fill the area of the shape. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

[View more →](/plugin-docs/api/properties/nodes-fills/)### fillStyleId: string | figma.mixed

The id of the [`PaintStyle`](/plugin-docs/api/PaintStyle/) object that the [`fills`](/plugin-docs/api/properties/nodes-fills/) property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setFillStyleIdAsync` to update the style.

[View more →](/plugin-docs/api/properties/nodes-fillstyleid/)### setFillStyleIdAsync(styleId: string): Promise

Sets the [`PaintStyle`](/plugin-docs/api/PaintStyle/) that the [`fills`](/plugin-docs/api/properties/nodes-fills/) property of this node is linked to.

### strokes: ReadonlyArray

The paints used to fill the area of the shape's strokes. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

### strokeStyleId: string

The id of the [`PaintStyle`](/plugin-docs/api/PaintStyle/) object that the [`strokes`](/plugin-docs/api/node-properties/#strokes) property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setStrokeStyleIdAsync` to update the style.

### setStrokeStyleIdAsync(styleId: string): Promise

Set the [`PaintStyle`](/plugin-docs/api/PaintStyle/) that the [`strokes`](/plugin-docs/api/node-properties/#strokes) property of this node is linked to.

### strokeWeight: number | figma.mixed

The thickness of the stroke, in pixels. This value must be non-negative and can be fractional.

##### caution

For rectangle nodes or frame-like nodes using different individual stroke weights, this property will return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/).

##### info

For rectangle nodes or frame-like nodes, individual stroke weights can be set for each side using the following properties:

- `strokeTopWeight`
- `strokeBottomWeight`
- `strokeLeftWeight`
- `strokeRightWeight`

### strokeJoin: StrokeJoin | figma.mixed

The decoration applied to vertices which have two or more connected segments.

[View more →](/plugin-docs/api/properties/nodes-strokejoin/)### strokeAlign: 'CENTER' | 'INSIDE' | 'OUTSIDE'

The alignment of the stroke with respect to the boundaries of the shape.

[View more →](/plugin-docs/api/properties/nodes-strokealign/)### dashPattern: ReadonlyArray

A list of numbers specifying alternating dash and gap lengths, in pixels.

### strokeGeometry: VectorPaths [readonly]

An array of paths representing the object strokes relative to the node.
StrokeGeometry is always from the center regardless of the nodes `strokeAlign`.

### strokeCap: StrokeCap | figma.mixed

The decoration applied to vertices which have only one connected segment.

[View more →](/plugin-docs/api/properties/nodes-strokecap/)### strokeMiterLimit: number

The miter limit on the stroke. This is the same as the [SVG miter limit](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit).

### outlineStroke(): VectorNode | null

This method performs an action similar to using the "Outline Stroke" function in the editor from the right-click menu. However, this method creates and returns a new node while leaving the original intact. Returns `null` if the node has no strokes.

### fillGeometry: VectorPaths [readonly]

An array of paths representing the object fills relative to the node.

## Layout-related properties

### x: number

The position of the node. Identical to `relativeTransform[0][2]`.

[View more →](/plugin-docs/api/properties/nodes-x/)### y: number

The position of the node. Identical to `relativeTransform[1][2]`.

[View more →](/plugin-docs/api/properties/nodes-y/)### width: number [readonly]

The width of the node. Use a resizing method to change this value.

### height: number [readonly]

The height of the node. Use a resizing method to change this value.

### minWidth: number | null

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `minWidth`.

### maxWidth: number | null

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `maxWidth`.

### minHeight: number | null

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to null to remove `minHeight`.

### maxHeight: number | null

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `maxHeight`.

### relativeTransform: Transform

The position of a node relative to its containing parent as a [`Transform`](/plugin-docs/api/Transform/) matrix. Not used for scaling, see `width` and `height` instead. Read the details page to understand the nuances of this property.

[View more →](/plugin-docs/api/properties/nodes-relativetransform/)### absoluteTransform: Transform [readonly]

The position of a node relative to its containing page as a [`Transform`](/plugin-docs/api/Transform/) matrix.

### absoluteBoundingBox: Rect | null [readonly]

The bounds of the node that does not include rendered properties like drop shadows or strokes. The `x` and `y` inside this property represent the absolute position of the node on the page.

### layoutAlign: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT'

Applicable only on direct children of auto-layout frames. Determines if the layer should stretch along the parent’s counter axis. Defaults to `“INHERIT”`.

[View more →](/plugin-docs/api/properties/nodes-layoutalign/)### layoutGrow: number

This property is applicable only for direct children of auto-layout frames. Determines whether a layer should stretch along the parent’s primary axis. 0 corresponds to a fixed size and 1 corresponds to stretch.

[View more →](/plugin-docs/api/properties/nodes-layoutgrow/)### layoutPositioning: 'AUTO' | 'ABSOLUTE'

This property is applicable only for direct children of auto-layout frames. Determines whether a layer's size and position should be dermined by auto-layout settings or manually adjustable.

[View more →](/plugin-docs/api/properties/nodes-layoutpositioning/)### absoluteRenderBounds: Rect | null [readonly]

The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.

### constrainProportions: boolean

DEPRECATED: Use `targetAspectRatio`, `lockAspectRatio`, and `unlockAspectRatio` instead.

When toggled, causes the layer to keep its proportions when the user resizes it via the properties panel.

### rotation: number

The rotation of the node in degrees. Returns values from -180 to 180. Identical to `Math.atan2(-m10, m00)` in the [`relativeTransform`](/plugin-docs/api/properties/nodes-relativetransform/) matrix. When setting `rotation`, it will also set `m00`, `m01`, `m10`, `m11`.

[View more →](/plugin-docs/api/properties/nodes-rotation/)### layoutSizingHorizontal: 'FIXED' | 'HUG' | 'FILL'

Applicable only on auto-layout frames, their children, and text nodes. This is a shorthand for setting [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/), [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/), [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/), and [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/). This field maps directly to the "Horizontal sizing" dropdown in the Figma UI.

[View more →](/plugin-docs/api/properties/nodes-layoutsizinghorizontal/)### layoutSizingVertical: 'FIXED' | 'HUG' | 'FILL'

Applicable only on auto-layout frames, their children, and text nodes. This is a shorthand for setting [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/), [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/), [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/), and [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/). This field maps directly to the "Vertical sizing" dropdown in the Figma UI.

[View more →](/plugin-docs/api/properties/nodes-layoutsizingvertical/)### resize(width: number, height: number): void

Resizes the node. If the node contains children with constraints, it applies those constraints during resizing. If the parent has auto-layout, causes the parent to be resized.

[View more →](/plugin-docs/api/properties/nodes-resize/)### resizeWithoutConstraints(width: number, height: number): void

Resizes the node. Children of the node are never resized, even if those children have constraints. If the parent has auto-layout, causes the parent to be resized (this constraint cannot be ignored).

[View more →](/plugin-docs/api/properties/nodes-resizewithoutconstraints/)### rescale(scale: number): void

Rescales the node. This API function is the equivalent of using the Scale Tool from the toolbar.

[View more →](/plugin-docs/api/properties/nodes-rescale/)### constraints: Constraints

Constraints of this node relative to its containing [`FrameNode`](/plugin-docs/api/FrameNode/), if any.

[View more →](/plugin-docs/api/properties/nodes-constraints/)## Lock aspect ratio properties

### targetAspectRatio: Vector | null [readonly]

When toggled, causes the layer to keep its proportions when the user resizes it via auto layout, constraints, the properties panel, or on-canvas.
If not set, the node does NOT resize toward a specific targetAspectRatio.

[View more →](/plugin-docs/api/properties/nodes-targetaspectratio/)### lockAspectRatio(): void

Locks the node's `targetAspectRatio` to the current ratio of its width and height.

### unlockAspectRatio(): void

Unlocks the node's `targetAspectRatio`.

## Export-related properties

### exportSettings: ReadonlyArray

List of export settings stored on the node. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

### exportAsync(settings?: ExportSettings): Promise

### exportAsync(settings: ExportSettingsSVGString): Promise

### exportAsync(settings: ExportSettingsREST): Promise

Exports the node as an encoded image.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

[View more →](/plugin-docs/api/properties/nodes-exportasync/)## Reaction prototyping-related properties

### reactions: ReadonlyArray

List of [Reactions](/plugin-docs/api/Reaction/) on this node, which includes both the method of interaction with this node in a prototype, and the behavior of that interaction. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setReactionsAsync` to update the value.

[View more →](/plugin-docs/api/properties/nodes-reactions/)### setReactionsAsync(reactions: Array): Promise

Updates the reactions on this node. See [`reactions`](/plugin-docs/api/properties/nodes-reactions/) for a usage example.

## Annotation properties

### annotations: ReadonlyArray

Annotations on the node.

Learn more about annotations in the [Help Center](https://help.figma.com/hc/en-us/articles/20774752502935) or see the [Annotation type](/plugin-docs/api/Annotation/) for usage examples.