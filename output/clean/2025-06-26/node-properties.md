---
title: Shared Node Properties
slug: node-properties
source_file: plugin-api-node-properties.html
source_url: https://www.figma.com/plugin-docs/api/node-properties/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: d750ed433984df28
token_count: 26381
---
# Shared Node Properties

Nodes support a range of properties. Some properties are universal, some are shared between node types, and some are unique to specific node types.

On this page, you can explore properties which are available on multiple nodes. Properties appear in alphabetical order, and you can see which nodes each property is supported on.

### absoluteBoundingBox: Rect | null [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The bounds of the node that does not include rendered properties like drop shadows or strokes. The `x` and `y` inside this property represent the absolute position of the node on the page.

### absoluteRenderBounds: Rect | null [readonly]

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.

### absoluteTransform: Transform [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The position of a node relative to its containing page as a [`Transform`](/plugin-docs/api/Transform/) matrix.

### addComponentProperty(propertyName: string, type: ComponentPropertyType, defaultValue: string | boolean | VariableAlias, options?: ComponentPropertyOptions): string

 Supported on:

- ComponentNode
- ComponentSetNode

Adds a new component property to this node and returns the property name with its unique identifier suffixed. This function supports properties with type `'BOOLEAN'`, `'TEXT'`, `'INSTANCE_SWAP'` or `'VARIANT'`.

### addDevResourceAsync(url: string, name?: string): Promise

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Adds a dev resource to a node. This will fail if the node already has a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-adddevresourceasync/)### addMeasurement(start: { node: SceneNode; side: MeasurementSide }, end: { node: SceneNode; side: MeasurementSide }, options?: { offset: MeasurementOffset; freeText: string }): Measurement

 Supported on:

- PageNode

Adds a measurement between two nodes in the current page.

Measurements are always between a start and end node. The side indicates which edge of the node to draw the measurement from.

Measurements can only go on the same axis, i.e. from side `"LEFT"` -> `"LEFT"`, `"LEFT"` -> `"RIGHT"`, `"TOP"` -> `"BOTTOM"` etc. But not `"LEFT"` -> `"TOP"`.

See the [Measurement type](/plugin-docs/api/Measurement/) for usage examples.

##### info

This method is only available in Dev Mode. You can check the editor type of your plugin to know if the user is in Dev Mode or not:

```
if (figma.editorType === 'dev') { // In Figma's Dev Mode}
```### annotations: ReadonlyArray

 Supported on:

- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StarNode
- TextNode
- TextPathNode
- VectorNode

Annotations on the node.

Learn more about annotations in the [Help Center](https://help.figma.com/hc/en-us/articles/20774752502935) or see the [Annotation type](/plugin-docs/api/Annotation/) for usage examples.

### appendChild(child: SceneNode): void

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- PageNode
- SectionNode
- SlideGridNode
- SlideNode
- SlideRowNode
- TransformGroupNode

Adds a new child to the end of the [`children`](/plugin-docs/api/properties/nodes-children/) array. That is, visually on top of all other children.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

[View more →](/plugin-docs/api/properties/nodes-appendchild/)### attachedConnectors: ConnectorNode[] [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

An array of `ConnectorNode`s that are attached to a node.

### backgroundStyleId: string

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- SlideNode
- TransformGroupNode

DEPRECATED: Use `fillStyleId` instead. This property is read-only if the manifest contains `"documentAccess": "dynamic-page"`.

### backgrounds: ReadonlyArray

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- SlideNode
- TransformGroupNode

DEPRECATED: Use `fills` instead.

### blendMode: BlendMode

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Blend mode of this node, as shown in the Layer panel. In addition to the blend modes that paints & effects support, the layer blend mode can also have the value PASS_THROUGH.

### bottomLeftRadius: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- RectangleNode
- SlideNode

### bottomRightRadius: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- RectangleNode
- SlideNode

### boundVariables?: { readonly [field in VariableBindableNodeField]?: VariableAlias} & { readonly [field in VariableBindableTextField]?: VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[]; effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: { [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] } [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The variables bound to a particular field on this node. Please see the [Working with Variables](/plugin-docs/working-with-variables/) guide for how to get and set variable bindings.

### characters: string

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

The raw characters in the text node. Setting this property requires the font the be loaded.

[View more →](/plugin-docs/api/properties/TextNode-characters/)### children: ReadonlyArray [readonly]

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- PageNode
- SectionNode
- SlideGridNode
- SlideNode
- SlideRowNode
- TransformGroupNode

The list of children, sorted back-to-front. That is, the first child in the array is the bottommost layer on the screen, and the last child in the array is the topmost layer.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this property.

[View more →](/plugin-docs/api/properties/nodes-children/)### clearExplicitVariableModeForCollection(collection: VariableCollection): void

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Clears an explicit mode for the given collection on this node

[View more →](/plugin-docs/api/properties/ExplicitVariableModesMixin-clearexplicitvariablemodeforcollection/)### clipsContent: boolean

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- SlideNode

Whether the frame clips its contents. That is, whether layers inside the frame are visible outside the bounds of the frame.

### componentPropertyDefinitions: ComponentPropertyDefinitions [readonly]

 Supported on:

- ComponentNode
- ComponentSetNode

All component properties and their default values that exist on this component set. `'VARIANT'` properties will also have a list of all variant options. `'BOOLEAN'`, `'TEXT'`, and `'INSTANCE_SWAP'` properties will have their names suffixed by a unique identifier starting with `'#'`, which is helpful for quickly distinguishing multiple component properties that have the same name in the Figma UI. The entire property name should be used for all Component property-related API methods and properties.

[View more →](/plugin-docs/api/properties/ComponentPropertiesMixin-componentpropertydefinitions/)### componentPropertyReferences: { [nodeProperty in 'visible' | 'characters' | 'mainComponent']?: string} | null

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

All component properties that are attached on this node. A node can only have `componentPropertyReferences` if it is a component sublayer or an instance sublayer. It will be `null` otherwise. The value in the key-value pair refers to the component property name as returned by `componentPropertyDefinitions` on the containing component, component set or main component (for instances).

### constrainProportions: boolean

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

DEPRECATED: Use `targetAspectRatio`, `lockAspectRatio`, and `unlockAspectRatio` instead.

When toggled, causes the layer to keep its proportions when the user resizes it via the properties panel.

### constraints: Constraints

 Supported on:

- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode

Constraints of this node relative to its containing [`FrameNode`](/plugin-docs/api/FrameNode/), if any.

[View more →](/plugin-docs/api/properties/nodes-constraints/)### cornerRadius: number | figma.mixed

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- PolygonNode
- RectangleNode
- SlideNode
- StarNode
- VectorNode

The number of pixels to round the corners of the object by.

[View more →](/plugin-docs/api/properties/nodes-cornerradius/)### cornerSmoothing: number

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- PolygonNode
- RectangleNode
- SlideNode
- StarNode
- VectorNode

A value that lets you control how "smooth" the corners are. Ranges from 0 to 1.

[View more →](/plugin-docs/api/properties/nodes-cornersmoothing/)### counterAxisAlignContent: 'AUTO' | 'SPACE_BETWEEN'

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames with [`layoutWrap`](/plugin-docs/api/properties/nodes-layoutwrap/) set to `"WRAP"`. Determines how the wrapped tracks are spaced out inside of the auto-layout frame.

[View more →](/plugin-docs/api/properties/nodes-counteraxisaligncontent/)### counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'BASELINE'

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames. Determines how the auto-layout frame’s children should be aligned in the counter axis direction.

[View more →](/plugin-docs/api/properties/nodes-counteraxisalignitems/)### counterAxisSizingMode: 'FIXED' | 'AUTO'

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames. Determines whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine).

[View more →](/plugin-docs/api/properties/nodes-counteraxissizingmode/)### counterAxisSpacing: number | null

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames with [`layoutWrap`](/plugin-docs/api/properties/nodes-layoutwrap/) set to `"WRAP"`. Determines the distance between wrapped tracks. The value must be positive.

[View more →](/plugin-docs/api/properties/nodes-counteraxisspacing/)### dashPattern: ReadonlyArray

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

A list of numbers specifying alternating dash and gap lengths, in pixels.

### deleteCharacters(start: number, end: number): void

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Remove characters in the text from `start` (inclusive) to `end` (exclusive).

[View more →](/plugin-docs/api/properties/TextNode-deletecharacters/)### deleteComponentProperty(propertyName: string): void

 Supported on:

- ComponentNode
- ComponentSetNode

Deletes an existing component property on this node. This function only supports properties with type `'BOOLEAN'`, `'TEXT'`, or `'INSTANCE_SWAP'`.

### deleteDevResourceAsync(url: string): Promise

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Deletes a dev resource on a node. This will fail if the node does not have a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-deletedevresourceasync/)### deleteMeasurement(id: string): void

 Supported on:

- PageNode

Delete a measurement.

See the [Measurement type](/plugin-docs/api/Measurement/) for usage examples.

##### info

This method is only available in Dev Mode. You can check the editor type of your plugin to know if the user is in Dev Mode or not:

```
if (figma.editorType === 'dev') { // In Figma's Dev Mode}
```### description: string

 Supported on:

- ComponentNode
- ComponentSetNode
- EffectStyle
- GridStyle
- PaintStyle
- TextStyle

The plain-text annotation entered by the user for this style/component.

[View more →](/plugin-docs/api/properties/nodes-description/)### descriptionMarkdown: string

 Supported on:

- ComponentNode
- ComponentSetNode
- EffectStyle
- GridStyle
- PaintStyle
- TextStyle

The rich-text annotation entered by the user for this style/component.

[View more →](/plugin-docs/api/properties/nodes-descriptionmarkdown/)### detachedInfo: DetachedInfo | null [readonly]

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- SlideNode

Includes the id (for local components) or key (for library components) of the component the given node was detached from, if any. If the node isn't a detached instance, it will be null. If the node is a component or instance, it will be null.

### devStatus: DevStatus

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- SectionNode
- SlideNode

Whether the node is marked [ready for development](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode#01H8CR3K6V9S02RK503QCX0367) or [completed](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode#01H8CR3K6V9S02RK503QCX0367).

There are some restrictions on how `devStatus` can be set:

- Can only be set on a node directly under a page or section
- Cannot be set on a node that is inside another node that already has a `devStatus`

### documentationLinks: ReadonlyArray

 Supported on:

- ComponentNode
- ComponentSetNode
- EffectStyle
- GridStyle
- PaintStyle
- TextStyle

The documentation links for this style/component.

[View more →](/plugin-docs/api/properties/nodes-documentationlinks/)### editComponentProperty(propertyName: string, newValue: { name: string; defaultValue: string | boolean | VariableAlias; preferredValues: InstanceSwapPreferredValue[] }): string

 Supported on:

- ComponentNode
- ComponentSetNode

Modifies the name, default value, or preferred values of an existing component property on this node and returns the property name with its unique identifier suffixed.

This function supports properties with type `'BOOLEAN'`, `'TEXT'`, `'INSTANCE_SWAP'`, or `'VARIANT'` with the following restrictions:

- `name` is supported for all properties
- `defaultValue` is supported for `'BOOLEAN'`, `'TEXT'`, and `'INSTANCE_SWAP'` properties, but not for `'VARIANT'` properties
- `preferredValues` is only supported for `'INSTANCE_SWAP'` properties

### editDevResourceAsync(currentUrl: string, newValue: { name: string; url: string }): Promise

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Edits a dev resource on a node. This will fail if the node does not have a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-editdevresourceasync/)### editMeasurement(id: string, newValue: { offset: MeasurementOffset; freeText: string }): Measurement

 Supported on:

- PageNode

Edit a measurement’s offset.

See the [Measurement type](/plugin-docs/api/Measurement/) for usage examples.

##### info

This method is only available in Dev Mode. You can check the editor type of your plugin to know if the user is in Dev Mode or not:

```
if (figma.editorType === 'dev') { // In Figma's Dev Mode}
```### effectStyleId: string

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

The id of the [`EffectStyle`](/plugin-docs/api/EffectStyle/) object that the properties of this node are linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setEffectStyleIdAsync` to update the style.

### effects: ReadonlyArray

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Array of effects. See [`Effect`](/plugin-docs/api/Effect/) type. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

### expanded: boolean

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- SlideNode
- TransformGroupNode

Whether this container is shown as expanded in the layers panel.

### explicitVariableModes: { [collectionId: string]: string }

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The explicitly set modes for this node.
For `SceneNodes`, represents a subset of [`resolvedVariableModes`](/plugin-docs/api/properties/nodes-resolvedvariablemodes/).
Note that this does not include [workspace and team-default modes](https://help.figma.com/hc/en-us/articles/12611253730071).

### exportAsync(settings?: ExportSettings): Promise

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

### exportAsync(settings: ExportSettingsSVGString): Promise

### exportAsync(settings: ExportSettingsREST): Promise

Exports the node as an encoded image.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

[View more →](/plugin-docs/api/properties/nodes-exportasync/)### exportSettings: ReadonlyArray

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

List of export settings stored on the node. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

### fillGeometry: VectorPaths [readonly]

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

An array of paths representing the object fills relative to the node.

### fillStyleId: string | figma.mixed

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- StickyNode
- TableCellNode
- TableNode
- TextNode
- TextPathNode
- TextSublayerNode
- VectorNode
- WashiTapeNode

The id of the [`PaintStyle`](/plugin-docs/api/PaintStyle/) object that the [`fills`](/plugin-docs/api/properties/nodes-fills/) property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setFillStyleIdAsync` to update the style.

[View more →](/plugin-docs/api/properties/nodes-fillstyleid/)### fills: ReadonlyArray | figma.mixed

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- StickyNode
- TableCellNode
- TableNode
- TextNode
- TextPathNode
- TextSublayerNode
- VectorNode
- WashiTapeNode

The paints used to fill the area of the shape. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

[View more →](/plugin-docs/api/properties/nodes-fills/)### findAll(callback?: (node: SceneNode) => boolean): SceneNode[]

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- PageNode
- SectionNode
- SlideGridNode
- SlideNode
- SlideRowNode
- TransformGroupNode

Searches this entire subtree (this node's children, its children's children, etc). Returns all nodes for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

[View more →](/plugin-docs/api/properties/nodes-findall/)### findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } & SceneNode>

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- PageNode
- SectionNode
- SlideGridNode
- SlideNode
- SlideRowNode
- TransformGroupNode

Searches this entire subtree (this node's children, its children's children, etc). Returns all nodes that satisfy all of specified criteria.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

[View more →](/plugin-docs/api/properties/nodes-findallwithcriteria/)### findChild(callback: (node: SceneNode) => boolean): SceneNode | null

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- PageNode
- SectionNode
- SlideGridNode
- SlideNode
- SlideRowNode
- TransformGroupNode

Searches the immediate children of this node (i.e. not including the children's children). Returns the first node for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

[View more →](/plugin-docs/api/properties/nodes-findchild/)### findChildren(callback?: (node: SceneNode) => boolean): SceneNode[]

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- PageNode
- SectionNode
- SlideGridNode
- SlideNode
- SlideRowNode
- TransformGroupNode

Searches the immediate children of this node (i.e. not including the children's children). Returns all nodes for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

[View more →](/plugin-docs/api/properties/nodes-findchildren/)### findOne(callback: (node: SceneNode) => boolean): SceneNode | null

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- PageNode
- SectionNode
- SlideGridNode
- SlideNode
- SlideRowNode
- TransformGroupNode

Searches this entire subtree (this node's children, its children's children, etc). Returns the first node for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

[View more →](/plugin-docs/api/properties/nodes-findone/)### findWidgetNodesByWidgetId(widgetId: string): Array

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- PageNode
- SectionNode
- SlideGridNode
- SlideNode
- SlideRowNode
- TransformGroupNode

Searches this entire subtree (this node's children, its children's children, etc). Returns all widget nodes that match the provided `widgetId`.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

[View more →](/plugin-docs/api/properties/nodes-findwidgetnodesbywidgetid/)### fontName: FontName | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

The font family (e.g. "Inter"), and font style (e.g. "Regular"). Setting this property to a different value requires the new font to be loaded.

### fontSize: number | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

The size of the font. Has minimum value of 1.

### fontWeight: number | figma.mixed [readonly]

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

The weight of the font (e.g. 400 for "Regular", 700 for "Bold").

### getCSSAsync(): Promise<{ [key: string]: string }>

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Resolves to a JSON object of CSS properties of the node. This is the same CSS that Figma shows in the inspect panel and is helpful if you are building a [plugin for code generation](/plugin-docs/codegen-plugins/).

### getDevResourcesAsync(options?: { includeChildren: boolean }): Promise

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Gets all of the dev resources on a node. This includes any inherited dev resources from components and component sets.

[View more →](/plugin-docs/api/properties/nodes-getdevresourcesasync/)### getMeasurements(): Measurement[]

 Supported on:

- PageNode

Get all measurements in the current page.

Learn more about measurements in the [Help Center](https://help.figma.com/hc/en-us/articles/20774752502935).

### getMeasurementsForNode(node: SceneNode): Measurement[]

 Supported on:

- PageNode

Get all measurements pointing to a node in the current page. This includes all measurements whose start or end node is the node passed in.

### getPluginData(key: string): string

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EffectStyle
- EllipseNode
- EmbedNode
- FrameNode
- GridStyle
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PaintStyle
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TextStyle
- TransformGroupNode
- Variable
- VariableCollection
- VectorNode
- WashiTapeNode
- WidgetNode

Retrieves custom information that was stored on this node or style using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/). If there is no data stored for the provided key, an empty string is returned.

### getPluginDataKeys(): string[]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EffectStyle
- EllipseNode
- EmbedNode
- FrameNode
- GridStyle
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PaintStyle
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TextStyle
- TransformGroupNode
- Variable
- VariableCollection
- VectorNode
- WashiTapeNode
- WidgetNode

Retrieves a list of all keys stored on this node or style using using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/). This enables iterating through all data stored privately on a node or style by your plugin.

### getPublishStatusAsync(): Promise

 Supported on:

- ComponentNode
- ComponentSetNode
- EffectStyle
- GridStyle
- PaintStyle
- TextStyle

Gets the status of this style/component in the team library.

### getRangeAllFontNames(start: number, end: number): FontName[]

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the `fontName`s from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeBoundVariable(start: number, end: number, field: VariableBindableTextField): VariableAlias | null | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the `boundVariable` for a given field from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeFillStyleId(start: number, end: number): string | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the `fillStyleId` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeFills(start: number, end: number): Paint[] | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the `fills` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeFontName(start: number, end: number): FontName | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the `fontName` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeFontSize(start: number, end: number): number | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the `fontSize` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeFontWeight(start: number, end: number): number | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the `fontWeight` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeHyperlink(start: number, end: number): HyperlinkTarget | null | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the `hyperlink` from characters in range `start` (inclusive) to `end` (exclusive). Returns a [`HyperlinkTarget`](/plugin-docs/api/HyperlinkTarget/) if the range contains exactly one hyperlink, or `null` if the range contains none.

### getRangeIndentation(start: number, end: number): number | figma.mixed

 Supported on:

- TextNode
- TextSublayerNode

Get the `indentation` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeLetterSpacing(start: number, end: number): LetterSpacing | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the `letterSpacing` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeLineHeight(start: number, end: number): LineHeight | figma.mixed

 Supported on:

- TextNode
- TextSublayerNode

Get the `lineHeight` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeListOptions(start: number, end: number): TextListOptions | figma.mixed

 Supported on:

- TextNode
- TextSublayerNode

Get the `textListOptions` from characters in range `start` (inclusive) to `end` (exclusive). Returns a [`TextListOptions`](/plugin-docs/api/TextListOptions/)

### getRangeListSpacing(start: number, end: number): number | figma.mixed

 Supported on:

- TextNode
- TextSublayerNode

Get the `listSpacing` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeOpenTypeFeatures(start: number, end: number): { readonly [feature in OpenTypeFeature]: boolean} | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the [`openTypeFeatures`](/plugin-docs/api/properties/TextNode-opentypefeatures/) from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeParagraphIndent(start: number, end: number): number | figma.mixed

 Supported on:

- TextNode
- TextSublayerNode

Get the `paragraphIndent` for a paragraph containing characters in range `start` (inclusive) to `end` (exclusive).

### getRangeParagraphSpacing(start: number, end: number): number | figma.mixed

 Supported on:

- TextNode
- TextSublayerNode

Get the `paragraphSpacing` for a paragraph containing characters in range `start` (inclusive) to `end` (exclusive).

### getRangeTextCase(start: number, end: number): TextCase | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the `textCase` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeTextDecoration(start: number, end: number): TextDecoration | figma.mixed

 Supported on:

- TextNode
- TextSublayerNode

Get the `textDecoration` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeTextDecorationColor(start: number, end: number): TextDecorationColor | figma.mixed | null

 Supported on:

- TextNode
- TextSublayerNode

Get the `textDecorationColor` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeTextDecorationOffset(start: number, end: number): TextDecorationOffset | figma.mixed | null

 Supported on:

- TextNode
- TextSublayerNode

Get the `textDecorationOffset` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeTextDecorationSkipInk(start: number, end: number): boolean | figma.mixed | null

 Supported on:

- TextNode
- TextSublayerNode

Get the `textDecorationSkipInk` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeTextDecorationStyle(start: number, end: number): TextDecorationStyle | figma.mixed | null

 Supported on:

- TextNode
- TextSublayerNode

Get the `textDecorationStyle` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeTextDecorationThickness(start: number, end: number): TextDecorationThickness | figma.mixed | null

 Supported on:

- TextNode
- TextSublayerNode

Get the `textDecorationThickness` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeTextStyleId(start: number, end: number): string | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get the `textStyleId` from characters in range `start` (inclusive) to `end` (exclusive).

### getRelaunchData(): { [command: string]: string }

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Retreives the reluanch data stored on this node using [`setRelaunchData`](/plugin-docs/api/properties/nodes-setrelaunchdata/)

### getSharedPluginData(namespace: string, key: string): string

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EffectStyle
- EllipseNode
- EmbedNode
- FrameNode
- GridStyle
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PaintStyle
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TextStyle
- TransformGroupNode
- Variable
- VariableCollection
- VectorNode
- WashiTapeNode
- WidgetNode

Retrieves custom information that was stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/). If there is no data stored for the provided namespace and key, an empty string is returned.

### getSharedPluginDataKeys(namespace: string): string[]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EffectStyle
- EllipseNode
- EmbedNode
- FrameNode
- GridStyle
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PaintStyle
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TextStyle
- TransformGroupNode
- Variable
- VariableCollection
- VectorNode
- WashiTapeNode
- WidgetNode

Retrieves a list of all keys stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/). This enables iterating through all data stored in a given namespace.

### getStyledTextSegments)[]>(fields: StyledTextSegmentFields, start?: number, end?: number): Array>

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Get text segments along with the desired text properties (font size, text case, etc...)

[View more →](/plugin-docs/api/properties/TextNode-getstyledtextsegments/)### getTopLevelFrame(): FrameNode | undefined

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Returns the top-most frame that contains this node. If the node is not inside a frame, this will return undefined.

##### info

This function will only work in Figma Design and will throw an error if called in FigJam or Slides.

### gridStyleId: string

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- SlideNode

The id of the [`GridStyle`](/plugin-docs/api/GridStyle/) object that the [`layoutGrids`](/plugin-docs/api/node-properties/#layoutgrids) property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setGridStyleIdAsync` to update the style.

### guides: ReadonlyArray

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- SlideNode

Array of [`Guide`](/plugin-docs/api/Guide/) used inside the frame. Note that each frame has its own guides, separate from the canvas-wide guides. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

### handleMirroring: HandleMirroring | figma.mixed

 Supported on:

- HighlightNode
- VectorNode

Whether the vector handles are mirrored or independent.

### hangingList: boolean

 Supported on:

- TextNode
- TextSublayerNode

Whether numbered list counters or unordered list bullets hang outside the text box.

### hangingPunctuation: boolean

 Supported on:

- TextNode
- TextSublayerNode

Whether punctuation, like quotation marks, hangs outside the text box.

### hasMissingFont: boolean [readonly]

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Returns whether the text uses a font currently not available to the document.

### height: number [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The height of the node. Use a resizing method to change this value.

### horizontalPadding: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

DEPRECATED: Use `paddingLeft` and `paddingRight` instead.

### hyperlink: HyperlinkTarget | null | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

A [`HyperlinkTarget`](/plugin-docs/api/HyperlinkTarget/) if the text node has exactly one hyperlink, or `null` if the node has none.

### id: string [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The unique identifier of a node. For example, `1:3`. The node id can be used with methods such as [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync), but plugins typically don't need to use this since you can usually just access a node directly.

[View more →](/plugin-docs/api/properties/nodes-id/)### inferredAutoLayout: InferredAutoLayoutResult | null

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- SlideNode

Returns inferred auto layout properties of a [`FrameNode`](/plugin-docs/api/FrameNode/) if applicable. Otherwise, returns `null`.

This is what Figma uses to power Dev Mode’s [code snippets](https://help.figma.com/hc/en-us/articles/15023124644247#Build_faster_with_customizable_code_snippets) feature, as it makes sure the generated code is more useful.

##### info

This method uses a heuristic to infer the auto layout properties.

### inferredVariables?: { readonly [field in VariableBindableNodeField]?: VariableAlias[]} & { fills: VariableAlias[][]; strokes: VariableAlias[][] } [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

An object, keyed by field, returning any variables that match the raw value of that field for the mode of the node (or the default variable value if no mode is set)

[View more →](/plugin-docs/api/properties/nodes-inferredvariables/)### insertCharacters(start: number, characters: string, useStyle?: 'BEFORE' | 'AFTER'): void

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Insert `characters` at index `start` in the text.

[View more →](/plugin-docs/api/properties/TextNode-insertcharacters/)### insertChild(index: number, child: SceneNode): void

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- PageNode
- SectionNode
- SlideGridNode
- SlideNode
- SlideRowNode
- TransformGroupNode

Adds a new child at the specified index in the [`children`](/plugin-docs/api/properties/nodes-children/) array.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/), you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync) to access this function.

[View more →](/plugin-docs/api/properties/nodes-insertchild/)### isAsset: boolean [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Returns true if Figma detects that a node is an asset, otherwise returns false. An asset is is either an icon or a raster image.

This property is useful if you’re building a [plugin for code generation](/plugin-docs/codegen-plugins/).

##### info

This property uses a set of heuristics to determine if a node is an asset. At a high level an icon is a small vector graphic and an image is a node with an image fill.

### isMask: boolean

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Whether this node is a mask. A mask node masks its subsequent siblings.

[View more →](/plugin-docs/api/properties/nodes-ismask/)### itemReverseZIndex: boolean

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames. Determines the [canvas stacking order](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties#Canvas_stacking_order) of layers in this frame. When true, the first layer will be draw on top.

[View more →](/plugin-docs/api/properties/nodes-itemreversezindex/)### itemSpacing: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames. Determines distance between children of the frame.

[View more →](/plugin-docs/api/properties/nodes-itemspacing/)### key: string [readonly]

 Supported on:

- ComponentNode
- ComponentSetNode
- EffectStyle
- GridStyle
- PaintStyle
- TextStyle

The key to use with [`figma.importComponentByKeyAsync`](/plugin-docs/api/figma/#importcomponentbykeyasync), [`figma.importComponentSetByKeyAsync`](/plugin-docs/api/figma/#importcomponentsetbykeyasync) and [`figma.importStyleByKeyAsync`](/plugin-docs/api/figma/#importstylebykeyasync). Note that while this key is present on local and published components, you can only import components that are already published.

### layoutAlign: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT'

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InferredAutoLayoutResult
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Applicable only on direct children of auto-layout frames. Determines if the layer should stretch along the parent’s counter axis. Defaults to `“INHERIT”`.

[View more →](/plugin-docs/api/properties/nodes-layoutalign/)### layoutGrids: ReadonlyArray

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- SlideNode

Array of [`LayoutGrid`](/plugin-docs/api/LayoutGrid/) objects used as layout grids on this node. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

### layoutGrow: number

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InferredAutoLayoutResult
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

This property is applicable only for direct children of auto-layout frames. Determines whether a layer should stretch along the parent’s primary axis. 0 corresponds to a fixed size and 1 corresponds to stretch.

[View more →](/plugin-docs/api/properties/nodes-layoutgrow/)### layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL'

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Determines whether this layer uses auto-layout to position its children. Defaults to "NONE".

[View more →](/plugin-docs/api/properties/nodes-layoutmode/)### layoutPositioning: 'AUTO' | 'ABSOLUTE'

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InferredAutoLayoutResult
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

This property is applicable only for direct children of auto-layout frames. Determines whether a layer's size and position should be dermined by auto-layout settings or manually adjustable.

[View more →](/plugin-docs/api/properties/nodes-layoutpositioning/)### layoutSizingHorizontal: 'FIXED' | 'HUG' | 'FILL'

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Applicable only on auto-layout frames, their children, and text nodes. This is a shorthand for setting [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/), [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/), [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/), and [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/). This field maps directly to the "Horizontal sizing" dropdown in the Figma UI.

[View more →](/plugin-docs/api/properties/nodes-layoutsizinghorizontal/)### layoutSizingVertical: 'FIXED' | 'HUG' | 'FILL'

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Applicable only on auto-layout frames, their children, and text nodes. This is a shorthand for setting [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/), [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/), [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/), and [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/). This field maps directly to the "Vertical sizing" dropdown in the Figma UI.

[View more →](/plugin-docs/api/properties/nodes-layoutsizingvertical/)### layoutWrap: 'NO_WRAP' | 'WRAP'

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Determines whether this layer should use wrapping auto-layout. Defaults to "NO_WRAP".

[View more →](/plugin-docs/api/properties/nodes-layoutwrap/)### leadingTrim: LeadingTrim | figma.mixed

 Supported on:

- TextNode
- TextSublayerNode

The removal of the vertical space above and below text glyphs. Requires the font to be loaded.

### letterSpacing: LetterSpacing | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

The spacing between the individual characters. Requires the font to be loaded.

### lineHeight: LineHeight | figma.mixed

 Supported on:

- TextNode
- TextSublayerNode

The spacing between the lines in a paragraph of text. Requires the font to be loaded.

### listSpacing: number

 Supported on:

- TextNode
- TextSublayerNode

The vertical distance between lines of a list.

### lockAspectRatio(): void

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- PolygonNode
- RectangleNode
- SectionNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Locks the node's `targetAspectRatio` to the current ratio of its width and height.

### locked: boolean

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Whether the node is locked or not, preventing certain user interactions on the canvas such as selecting and dragging. Does not affect a plugin's ability to write to those properties.

[View more →](/plugin-docs/api/properties/nodes-locked/)### maskType: MaskType

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Type of masking to use if this node is a mask. Defaults to `"ALPHA"`. You must check `isMask` to verify that this is a mask; changing `maskType` does not automatically turn on `isMask`, and a node that is not a mask can still have a `maskType`.

### maxHeight: number | null

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `maxHeight`.

### maxWidth: number | null

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `maxWidth`.

### minHeight: number | null

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to null to remove `minHeight`.

### minWidth: number | null

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `minWidth`.

### name: string

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The name of the layer that appears in the layers panel. Calling `figma.root.name` will return the name, read-only, of the current file.

[View more →](/plugin-docs/api/properties/nodes-name/)### numberOfFixedChildren: number

 Supported on:

- ComponentNode
- FrameNode
- InstanceNode

Determines which children of the frame are fixed children in a scrolling frame.

[View more →](/plugin-docs/api/properties/nodes-numberoffixedchildren/)### opacity: number

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Opacity of the node, as shown in the Layer panel. Must be between 0 and 1.

### openTypeFeatures: { readonly [feature in OpenTypeFeature]: boolean} | figma.mixed [readonly]

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

[OpenType features](https://help.figma.com/hc/en-us/articles/4913951097367) that have been explicitly enabled or disabled.

[View more →](/plugin-docs/api/properties/TextNode-opentypefeatures/)### outlineStroke(): VectorNode | null

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

This method performs an action similar to using the "Outline Stroke" function in the editor from the right-click menu. However, this method creates and returns a new node while leaving the original intact. Returns `null` if the node has no strokes.

### overflowDirection: OverflowDirection

 Supported on:

- ComponentNode
- FrameNode
- InstanceNode

Determines whether a frame will scroll in presentation mode when the frame contains content that exceed the frame's bounds. Reflects the value shown in "Overflow Behavior" in the Prototype tab.

[View more →](/plugin-docs/api/properties/nodes-overflowdirection/)### overlayBackground: OverlayBackground [readonly]

 Supported on:

- ComponentNode
- FrameNode
- InstanceNode

How this frame obscures the content under it when opened as an overlay.

### overlayBackgroundInteraction: OverlayBackgroundInteraction [readonly]

 Supported on:

- ComponentNode
- FrameNode
- InstanceNode

How the user can interact with the content under this frame when opened as an overlay.

### overlayPositionType: OverlayPositionType [readonly]

 Supported on:

- ComponentNode
- FrameNode
- InstanceNode

How this frame is positioned when opened as an overlay.

### paddingBottom: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames. Determines the bottom padding between the border of the frame and its children.

### paddingLeft: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames. Determines the left padding between the border of the frame and its children.

### paddingRight: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames. Determines the right padding between the border of the frame and its children.

### paddingTop: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames. Determines the top padding between the border of the frame and its children.

### paragraphIndent: number

 Supported on:

- TextNode
- TextSublayerNode

The indentation of paragraphs (offset of the first line from the left). Setting this property requires the font the be loaded.

### paragraphSpacing: number

 Supported on:

- TextNode
- TextSublayerNode

The vertical distance between paragraphs. Setting this property requires the font to be loaded.

### parent: (BaseNode & ChildrenMixin) | null [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Returns the parent of this node, if any. This property is not meant to be directly edited. To reparent, see [`appendChild`](/plugin-docs/api/properties/nodes-appendchild/).

[View more →](/plugin-docs/api/properties/nodes-parent/)### primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN'

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames. Determines how the auto-layout frame’s children should be aligned in the primary axis direction.

[View more →](/plugin-docs/api/properties/nodes-primaryaxisalignitems/)### primaryAxisSizingMode: 'FIXED' | 'AUTO'

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames. Determines whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine).

[View more →](/plugin-docs/api/properties/nodes-primaryaxissizingmode/)### reactions: ReadonlyArray

 Supported on:

- BooleanOperationNode
- ComponentNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

List of [Reactions](/plugin-docs/api/Reaction/) on this node, which includes both the method of interaction with this node in a prototype, and the behavior of that interaction. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setReactionsAsync` to update the value.

[View more →](/plugin-docs/api/properties/nodes-reactions/)### relativeTransform: Transform

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The position of a node relative to its containing parent as a [`Transform`](/plugin-docs/api/Transform/) matrix. Not used for scaling, see `width` and `height` instead. Read the details page to understand the nuances of this property.

[View more →](/plugin-docs/api/properties/nodes-relativetransform/)### remote: boolean [readonly]

 Supported on:

- ComponentNode
- ComponentSetNode
- EffectStyle
- GridStyle
- PaintStyle
- TextStyle

Whether this style/component is a remote style/component that doesn't live in the file (i.e. is from the team library). Remote components are read-only: attempts to change their properties will throw.

### remove(): void

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Removes this node and all of its children from the document.

[View more →](/plugin-docs/api/properties/nodes-remove/)### removed: boolean [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Returns true if this node has been removed since it was first accessed. If your plugin stays open for a while and stores references to nodes, you should write your code defensively and check that the nodes haven't been removed by the user.

[View more →](/plugin-docs/api/properties/nodes-removed/)### rescale(scale: number): void

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Rescales the node. This API function is the equivalent of using the Scale Tool from the toolbar.

[View more →](/plugin-docs/api/properties/nodes-rescale/)### resize(width: number, height: number): void

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Resizes the node. If the node contains children with constraints, it applies those constraints during resizing. If the parent has auto-layout, causes the parent to be resized.

[View more →](/plugin-docs/api/properties/nodes-resize/)### resizeWithoutConstraints(width: number, height: number): void

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Resizes the node. Children of the node are never resized, even if those children have constraints. If the parent has auto-layout, causes the parent to be resized (this constraint cannot be ignored).

[View more →](/plugin-docs/api/properties/nodes-resizewithoutconstraints/)### resolvedVariableModes: { [collectionId: string]: string }

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The resolved mode for this node for each variable collection in this file.

[View more →](/plugin-docs/api/properties/nodes-resolvedvariablemodes/)### rotation: number

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SliceNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

The rotation of the node in degrees. Returns values from -180 to 180. Identical to `Math.atan2(-m10, m00)` in the [`relativeTransform`](/plugin-docs/api/properties/nodes-relativetransform/) matrix. When setting `rotation`, it will also set `m00`, `m01`, `m10`, `m11`.

[View more →](/plugin-docs/api/properties/nodes-rotation/)### setBoundVariable(field: VariableBindableNodeField | VariableBindableTextField, variable: Variable | null): void

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Binds the provided `field` on this node to the given variable. Please see the [Working with Variables](/plugin-docs/working-with-variables/) guide for how to get and set variable bindings.

If `null` is provided as the variable, the given `field` will be unbound from any variables.

[View more →](/plugin-docs/api/properties/nodes-setboundvariable/)### setDevResourcePreviewAsync(url: string, preview: PlainTextElement): Promise

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

##### caution

This is a private API only available to [Figma partners](https://www.figma.com/partners/)

### setEffectStyleIdAsync(styleId: string): Promise

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Set the [`EffectStyle`](/plugin-docs/api/EffectStyle/) that the properties of this node are linked to.

### setExplicitVariableModeForCollection(collection: VariableCollection, modeId: string): void

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Sets an explicit mode for the given collection on this node

[View more →](/plugin-docs/api/properties/ExplicitVariableModesMixin-setexplicitvariablemodeforcollection/)### setFillStyleIdAsync(styleId: string): Promise

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- StickyNode
- TableCellNode
- TableNode
- TextNode
- TextPathNode
- TextSublayerNode
- VectorNode
- WashiTapeNode

Sets the [`PaintStyle`](/plugin-docs/api/PaintStyle/) that the [`fills`](/plugin-docs/api/properties/nodes-fills/) property of this node is linked to.

### setGridStyleIdAsync(styleId: string): Promise

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- SlideNode

Set the [`GridStyle`](/plugin-docs/api/GridStyle/) that the [`layoutGrids`](/plugin-docs/api/node-properties/#layoutgrids) property of this node is linked to.

### setPluginData(key: string, value: string): void

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EffectStyle
- EllipseNode
- EmbedNode
- FrameNode
- GridStyle
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PaintStyle
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TextStyle
- TransformGroupNode
- Variable
- VariableCollection
- VectorNode
- WashiTapeNode
- WidgetNode

Lets you store custom information on any node or style, private to your plugin. The total size of your entry (`pluginId`, `key`, `value`) cannot exceed 100 kB.

[View more →](/plugin-docs/api/properties/nodes-setplugindata/)### setRangeBoundVariable(start: number, end: number, field: VariableBindableTextField, variable: Variable | null): void

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Set the `boundVariable` for a given field from characters in range `start` (inclusive) to `end` (exclusive). Requires any new fonts to be loaded.

### setRangeFillStyleId(start: number, end: number, value: string): void

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

DEPRECATED: Use `setRangeFillStyleIdAsync` instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Set the `fillStyleId` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeFillStyleIdAsync(start: number, end: number, styleId: string): Promise

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Set the provided [`PaintStyle`](/plugin-docs/api/PaintStyle/) as a fill to characters in range `start` (inclusive) to `end` (exclusive).

### setRangeFills(start: number, end: number, value: Paint[]): void

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Set the `fills` from characters in range `start` (inclusive) to `end` (exclusive). Requires font to be loaded.

Can be bound to color variables by using [`setBoundVariableForPaint`](/plugin-docs/api/figma-variables/#setboundvariableforpaint) on one or more of the provided `Paint`s

### setRangeFontName(start: number, end: number, value: FontName): void

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Set the `fontName` from characters in range `start` (inclusive) to `end` (exclusive). Requires the new font to be loaded.

### setRangeFontSize(start: number, end: number, value: number): void

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Set the `fontSize` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeHyperlink(start: number, end: number, value: HyperlinkTarget | null): void

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Set the `hyperlink` from characters in range `start` (inclusive) to `end` (exclusive). Removes the hyperlink in range if `value` is `null`.

### setRangeIndentation(start: number, end: number, value: number): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `indentation` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeLetterSpacing(start: number, end: number, value: LetterSpacing): void

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Set the `letterSpacing` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeLineHeight(start: number, end: number, value: LineHeight): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `lineHeight` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeListOptions(start: number, end: number, value: TextListOptions): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `textListOptions` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeListSpacing(start: number, end: number, value: number): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `listSpacing` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeParagraphIndent(start: number, end: number, value: number): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `paragraphIndent` for a paragraph containing characters in range `start` (inclusive) to `end` (exclusive).

### setRangeParagraphSpacing(start: number, end: number, value: number): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `paragraphSpacing` for a paragraph containing characters in range `start` (inclusive) to `end` (exclusive).

### setRangeTextCase(start: number, end: number, value: TextCase): void

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Set the `textCase` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeTextDecoration(start: number, end: number, value: TextDecoration): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `textDecoration` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeTextDecorationColor(start: number, end: number, value: TextDecorationColor): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `textDecorationColor` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeTextDecorationOffset(start: number, end: number, value: TextDecorationOffset): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `textDecorationOffset` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeTextDecorationSkipInk(start: number, end: number, value: boolean): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `textDecorationSkipInk` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeTextDecorationStyle(start: number, end: number, value: TextDecorationStyle): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `textDecorationStyle` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeTextDecorationThickness(start: number, end: number, value: TextDecorationThickness): void

 Supported on:

- TextNode
- TextSublayerNode

Set the `textDecorationThickness` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeTextStyleId(start: number, end: number, value: string): void

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

DEPRECATED: Use `setRangeTextStyleIdAsync` instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Set the `textStyleId` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setRangeTextStyleIdAsync(start: number, end: number, styleId: string): Promise

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Set the provided [`TextStyle`](/plugin-docs/api/TextStyle/) to characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### setReactionsAsync(reactions: Array): Promise

 Supported on:

- BooleanOperationNode
- ComponentNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Updates the reactions on this node. See [`reactions`](/plugin-docs/api/properties/nodes-reactions/) for a usage example.

### setRelaunchData(data: { [command: string]: string }): void

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Sets state on the node to show a button and description when the node is selected. Clears the button and description when `relaunchData` is `{}`.

##### info

In Figma and Dev Mode, this shows up in the properties panel. In FigJam, this shows up in the property menu. See [here](/plugin-docs/api/properties/nodes-setrelaunchdata/#example-figma-design-ui) for examples.

[View more →](/plugin-docs/api/properties/nodes-setrelaunchdata/)### setSharedPluginData(namespace: string, key: string, value: string): void

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EffectStyle
- EllipseNode
- EmbedNode
- FrameNode
- GridStyle
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PaintStyle
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TextStyle
- TransformGroupNode
- Variable
- VariableCollection
- VectorNode
- WashiTapeNode
- WidgetNode

Lets you store custom information on any node or style, public to all plugins. The total size of your entry (`namespace`, `key`, `value`) cannot exceed 100 kB.

[View more →](/plugin-docs/api/properties/nodes-setsharedplugindata/)### setStrokeStyleIdAsync(styleId: string): Promise

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

Set the [`PaintStyle`](/plugin-docs/api/PaintStyle/) that the [`strokes`](/plugin-docs/api/node-properties/#strokes) property of this node is linked to.

### setVectorNetworkAsync(vectorNetwork: VectorNetwork): Promise

 Supported on:

- HighlightNode
- VectorNode

Updates the vector network.

### strokeAlign: 'CENTER' | 'INSIDE' | 'OUTSIDE'

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

The alignment of the stroke with respect to the boundaries of the shape.

[View more →](/plugin-docs/api/properties/nodes-strokealign/)### strokeBottomWeight: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- RectangleNode
- SlideNode

Determines the bottom stroke weight on a rectangle node or frame-like node. Must be non-negative and can be fractional.

### strokeCap: StrokeCap | figma.mixed

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

The decoration applied to vertices which have only one connected segment.

[View more →](/plugin-docs/api/properties/nodes-strokecap/)### strokeGeometry: VectorPaths [readonly]

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

An array of paths representing the object strokes relative to the node.
StrokeGeometry is always from the center regardless of the nodes `strokeAlign`.

### strokeJoin: StrokeJoin | figma.mixed

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

The decoration applied to vertices which have two or more connected segments.

[View more →](/plugin-docs/api/properties/nodes-strokejoin/)### strokeLeftWeight: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- RectangleNode
- SlideNode

Determines the left stroke weight on a rectangle node or frame-like node. Must be non-negative and can be fractional.

### strokeMiterLimit: number

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

The miter limit on the stroke. This is the same as the [SVG miter limit](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit).

### strokeRightWeight: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- RectangleNode
- SlideNode

Determines the right stroke weight on a rectangle node or frame-like node. Must be non-negative and can be fractional.

### strokeStyleId: string

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

The id of the [`PaintStyle`](/plugin-docs/api/PaintStyle/) object that the [`strokes`](/plugin-docs/api/node-properties/#strokes) property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setStrokeStyleIdAsync` to update the style.

### strokeTopWeight: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- RectangleNode
- SlideNode

Determines the top stroke weight on a rectangle node or frame-like node. Must be non-negative and can be fractional.

### strokeWeight: number | figma.mixed

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

The thickness of the stroke, in pixels. This value must be non-negative and can be fractional.

##### caution

For rectangle nodes or frame-like nodes using different individual stroke weights, this property will return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/).

##### info

For rectangle nodes or frame-like nodes, individual stroke weights can be set for each side using the following properties:

- `strokeTopWeight`
- `strokeBottomWeight`
- `strokeLeftWeight`
- `strokeRightWeight`

### strokes: ReadonlyArray

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- FrameNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- ShapeWithTextNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- VectorNode
- WashiTapeNode

The paints used to fill the area of the shape's strokes. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

### strokesIncludedInLayout: boolean

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

Applicable only on auto-layout frames. Determines whether strokes are included in [layout calculations](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties#strokes-in-layout). When true, auto-layout frames behave like css `box-sizing: border-box`.

[View more →](/plugin-docs/api/properties/nodes-strokesincludedinlayout/)### stuckNodes: SceneNode[] [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

An array of nodes that are "stuck" to this node. In FigJam, stamps, highlights, and some widgets can "stick"
to other nodes if they are dragged on top of another node.

[View more →](/plugin-docs/api/properties/nodes-stucknodes/)### stuckTo: SceneNode | null

 Supported on:

- HighlightNode
- StampNode
- WashiTapeNode
- WidgetNode

If this node is stuck to another node this property returns that node or null.

[View more →](/plugin-docs/api/properties/nodes-stuckto/)### targetAspectRatio: Vector | null [readonly]

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- PolygonNode
- RectangleNode
- SectionNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

When toggled, causes the layer to keep its proportions when the user resizes it via auto layout, constraints, the properties panel, or on-canvas.
If not set, the node does NOT resize toward a specific targetAspectRatio.

[View more →](/plugin-docs/api/properties/nodes-targetaspectratio/)### textCase: TextCase | figma.mixed

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

Overrides the case of the raw characters in the text node. Requires the font to be loaded.

### textDecoration: TextDecoration | figma.mixed

 Supported on:

- TextNode
- TextSublayerNode

Whether the text is underlined or has a strikethrough. Requires the font to be loaded.

### textDecorationColor: TextDecorationColor | figma.mixed | null

 Supported on:

- TextNode
- TextSublayerNode

The text decoration color. If the text is not underlined, this value will be null. Requires the font to be loaded.

### textDecorationOffset: TextDecorationOffset | figma.mixed | null

 Supported on:

- TextNode
- TextSublayerNode

The text decoration offset. If the text is not underlined, this value will be null. Requires the font to be loaded.

### textDecorationSkipInk: boolean | figma.mixed | null

 Supported on:

- TextNode
- TextSublayerNode

Whether the text decoration skips descenders. If the text is not underlined, this value will be null. Requires the font to be loaded.

### textDecorationStyle: TextDecorationStyle | figma.mixed | null

 Supported on:

- TextNode
- TextSublayerNode

The text decoration style (e.g. "SOLID"). If the text is not underlined, this value will be null. Requires the font to be loaded.

### textDecorationThickness: TextDecorationThickness | figma.mixed | null

 Supported on:

- TextNode
- TextSublayerNode

The text decoration thickness. If the text is not underlined, this value will be null. Requires the font to be loaded.

### toString(): string

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- DocumentNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PageNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Returns a string representation of the node. For debugging purposes only, do not rely on the exact output of this string in production code.

[View more →](/plugin-docs/api/properties/nodes-tostring/)### topLeftRadius: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- RectangleNode
- SlideNode

### topRightRadius: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InstanceNode
- RectangleNode
- SlideNode

### unlockAspectRatio(): void

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- PolygonNode
- RectangleNode
- SectionNode
- SlideNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

Unlocks the node's `targetAspectRatio`.

### variantProperties: { [property: string]: string } | null [readonly]

 Supported on:

- ComponentNode
- InstanceNode

DEPRECATED: Use [`componentProperties`](/plugin-docs/api/InstanceNode/#componentproperties) instead.

Variant properties and values for this node. Is `null` for nodes that are not variants.

[View more →](/plugin-docs/api/properties/nodes-variantproperties/)### vectorNetwork: VectorNetwork

 Supported on:

- HighlightNode
- VectorNode

Exposes a complete, but more complex representation of vectors as a network of edges between vectices. See [`VectorNetwork`](/plugin-docs/api/VectorNetwork/).

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setVectorNetworkAsync` to update the value.

### vectorPaths: VectorPaths

 Supported on:

- HighlightNode
- VectorNode

Exposes a simple, but incomplete representation of vectors as path. See [`VectorPaths`](/plugin-docs/api/VectorPath/)

### verticalPadding: number

 Supported on:

- ComponentNode
- ComponentSetNode
- FrameNode
- InferredAutoLayoutResult
- InstanceNode
- SlideNode

DEPRECATED: Use `paddingTop` and `paddingBottom` instead.

### visible: boolean

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

Whether the node is visible or not. Does not affect a plugin's ability to access the node.

[View more →](/plugin-docs/api/properties/nodes-visible/)### width: number [readonly]

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The width of the node. Use a resizing method to change this value.

### x: number

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The position of the node. Identical to `relativeTransform[0][2]`.

[View more →](/plugin-docs/api/properties/nodes-x/)### y: number

 Supported on:

- BooleanOperationNode
- CodeBlockNode
- ComponentNode
- ComponentSetNode
- ConnectorNode
- EllipseNode
- EmbedNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- InteractiveSlideElementNode
- LineNode
- LinkUnfurlNode
- MediaNode
- PolygonNode
- RectangleNode
- SectionNode
- ShapeWithTextNode
- SliceNode
- SlideGridNode
- SlideNode
- SlideRowNode
- StampNode
- StarNode
- StickyNode
- TableNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode
- WidgetNode

The position of the node. Identical to `relativeTransform[1][2]`.

[View more →](/plugin-docs/api/properties/nodes-y/)