---
title: ComponentNode
slug: ComponentNode
source_file: plugin-api-ComponentNode.html
source_url: https://www.figma.com/plugin-docs/api/ComponentNode/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: e9d9c71ff41f636e
token_count: 10674
---
# ComponentNode

Components are UI elements that can be reused across your designs. They are like frames, with the additional ability to have auto-updating copies called instances (see [`InstanceNode`](/plugin-docs/api/InstanceNode/)
).

The file may already contain instances of this frame, or you might create them via [`createInstance`](/plugin-docs/api/ComponentNode/#createinstance)
. When you set a property on a component (or change its content), all instances of that component will update.

Be aware that some component nodes reflect components in the team library that are used within this file. Those components are read-only, though you may create new instances of them.

## Component properties

### type: 'COMPONENT' [readonly]

The type of this node, represented by the string literal "COMPONENT"

### clone(): ComponentNode

Duplicates the component node as a new component with no instances of it. By default, the duplicate will be parented under `figma.currentPage`.

### createInstance(): InstanceNode

Creates an instance of this component. By default, the instance will be parented under `figma.currentPage`.

### getInstancesAsync(): Promise

Returns an array of all of the instances of this component in the document.

### instances: InstanceNode[] [readonly]

DEPRECATED: Use [`getInstancesAsync`](/plugin-docs/api/ComponentNode/#getinstancesasync)
 instead. Accessing this property will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Returns an array of all of the instances of this component in the document.

## Publishable properties

### description: string

The plain-text annotation entered by the user for this style/component.

[View more →](/plugin-docs/api/properties/nodes-description/)

### descriptionMarkdown: string

The rich-text annotation entered by the user for this style/component.

[View more →](/plugin-docs/api/properties/nodes-descriptionmarkdown/)

### documentationLinks: ReadonlyArray

The documentation links for this style/component.

[View more →](/plugin-docs/api/properties/nodes-documentationlinks/)

### remote: boolean [readonly]

Whether this style/component is a remote style/component that doesn't live in the file (i.e. is from the team library). Remote components are read-only: attempts to change their properties will throw.

### key: string [readonly]

The key to use with [`figma.importComponentByKeyAsync`](/plugin-docs/api/figma/#importcomponentbykeyasync)
, [`figma.importComponentSetByKeyAsync`](/plugin-docs/api/figma/#importcomponentsetbykeyasync)
 and [`figma.importStyleByKeyAsync`](/plugin-docs/api/figma/#importstylebykeyasync)
. Note that while this key is present on local and published components, you can only import components that are already published.

### getPublishStatusAsync(): Promise

Gets the status of this style/component in the team library.

## Base node properties

### id: string [readonly]

The unique identifier of a node. For example, `1:3`. The node id can be used with methods such as [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync)
, but plugins typically don't need to use this since you can usually just access a node directly.

[View more →](/plugin-docs/api/properties/nodes-id/)

### parent: (BaseNode & ChildrenMixin) | null [readonly]

Returns the parent of this node, if any. This property is not meant to be directly edited. To reparent, see [`appendChild`](/plugin-docs/api/properties/nodes-appendchild/)
.

[View more →](/plugin-docs/api/properties/nodes-parent/)

### name: string

The name of the layer that appears in the layers panel. Calling `figma.root.name` will return the name, read-only, of the current file.

[View more →](/plugin-docs/api/properties/nodes-name/)

### removed: boolean [readonly]

Returns true if this node has been removed since it was first accessed. If your plugin stays open for a while and stores references to nodes, you should write your code defensively and check that the nodes haven't been removed by the user.

[View more →](/plugin-docs/api/properties/nodes-removed/)

### toString(): string

Returns a string representation of the node. For debugging purposes only, do not rely on the exact output of this string in production code.

[View more →](/plugin-docs/api/properties/nodes-tostring/)

### remove(): void

Removes this node and all of its children from the document.

[View more →](/plugin-docs/api/properties/nodes-remove/)

### setRelaunchData(data: { [command: string]: string }): void

Sets state on the node to show a button and description when the node is selected. Clears the button and description when `relaunchData` is `{}`.

##### info

In Figma and Dev Mode, this shows up in the properties panel. In FigJam, this shows up in the property menu. See [here](/plugin-docs/api/properties/nodes-setrelaunchdata/#example-figma-design-ui)
 for examples.

[View more →](/plugin-docs/api/properties/nodes-setrelaunchdata/)

### getRelaunchData(): { [command: string]: string }

Retreives the reluanch data stored on this node using [`setRelaunchData`](/plugin-docs/api/properties/nodes-setrelaunchdata/)

### isAsset: boolean [readonly]

Returns true if Figma detects that a node is an asset, otherwise returns false. An asset is is either an icon or a raster image.

This property is useful if you’re building a [plugin for code generation](/plugin-docs/codegen-plugins/)
.

##### info

This property uses a set of heuristics to determine if a node is an asset. At a high level an icon is a small vector graphic and an image is a node with an image fill.

### getCSSAsync(): Promise<{ [key: string]: string }>

Resolves to a JSON object of CSS properties of the node. This is the same CSS that Figma shows in the inspect panel and is helpful if you are building a [plugin for code generation](/plugin-docs/codegen-plugins/)
.

### getTopLevelFrame(): FrameNode | undefined

Returns the top-most frame that contains this node. If the node is not inside a frame, this will return undefined.

##### info

This function will only work in Figma Design and will throw an error if called in FigJam or Slides.

## Plugin data properties

### getPluginData(key: string): string

Retrieves custom information that was stored on this node or style using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. If there is no data stored for the provided key, an empty string is returned.

### setPluginData(key: string, value: string): void

Lets you store custom information on any node or style, private to your plugin. The total size of your entry (`pluginId`, `key`, `value`) cannot exceed 100 kB.

[View more →](/plugin-docs/api/properties/nodes-setplugindata/)

### getPluginDataKeys(): string[]

Retrieves a list of all keys stored on this node or style using using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. This enables iterating through all data stored privately on a node or style by your plugin.

### getSharedPluginData(namespace: string, key: string): string

Retrieves custom information that was stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/)
. If there is no data stored for the provided namespace and key, an empty string is returned.

### setSharedPluginData(namespace: string, key: string, value: string): void

Lets you store custom information on any node or style, public to all plugins. The total size of your entry (`namespace`, `key`, `value`) cannot exceed 100 kB.

[View more →](/plugin-docs/api/properties/nodes-setsharedplugindata/)

### getSharedPluginDataKeys(namespace: string): string[]

Retrieves a list of all keys stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/)
. This enables iterating through all data stored in a given namespace.

## Dev resource properties

### getDevResourcesAsync(options?: { includeChildren: boolean }): Promise

Gets all of the dev resources on a node. This includes any inherited dev resources from components and component sets.

[View more →](/plugin-docs/api/properties/nodes-getdevresourcesasync/)

### addDevResourceAsync(url: string, name?: string): Promise

Adds a dev resource to a node. This will fail if the node already has a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-adddevresourceasync/)

### editDevResourceAsync(currentUrl: string, newValue: { name: string; url: string }): Promise

Edits a dev resource on a node. This will fail if the node does not have a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-editdevresourceasync/)

### deleteDevResourceAsync(url: string): Promise

Deletes a dev resource on a node. This will fail if the node does not have a dev resource with the same url.

[View more →](/plugin-docs/api/properties/nodes-deletedevresourceasync/)

### setDevResourcePreviewAsync(url: string, preview: PlainTextElement): Promise

##### caution

This is a private API only available to [Figma partners](https://www.figma.com/partners/)

## Scene node properties

### visible: boolean

Whether the node is visible or not. Does not affect a plugin's ability to access the node.

[View more →](/plugin-docs/api/properties/nodes-visible/)

### locked: boolean

Whether the node is locked or not, preventing certain user interactions on the canvas such as selecting and dragging. Does not affect a plugin's ability to write to those properties.

[View more →](/plugin-docs/api/properties/nodes-locked/)

### stuckNodes: SceneNode[] [readonly]

An array of nodes that are "stuck" to this node. In FigJam, stamps, highlights, and some widgets can "stick"
to other nodes if they are dragged on top of another node.

[View more →](/plugin-docs/api/properties/nodes-stucknodes/)

### attachedConnectors: ConnectorNode[] [readonly]

An array of `ConnectorNode`s that are attached to a node.

### componentPropertyReferences: { [nodeProperty in 'visible' | 'characters' | 'mainComponent']?: string} | null

All component properties that are attached on this node. A node can only have `componentPropertyReferences` if it is a component sublayer or an instance sublayer. It will be `null` otherwise. The value in the key-value pair refers to the component property name as returned by `componentPropertyDefinitions` on the containing component, component set or main component (for instances).

### boundVariables?: { readonly [field in VariableBindableNodeField]?: VariableAlias} & { readonly [field in VariableBindableTextField]?: VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[]; effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: { [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] } [readonly]

The variables bound to a particular field on this node. Please see the [Working with Variables](/plugin-docs/working-with-variables/)
 guide for how to get and set variable bindings.

### setBoundVariable(field: VariableBindableNodeField | VariableBindableTextField, variable: Variable | null): void

Binds the provided `field` on this node to the given variable. Please see the [Working with Variables](/plugin-docs/working-with-variables/)
 guide for how to get and set variable bindings.

If `null` is provided as the variable, the given `field` will be unbound from any variables.

[View more →](/plugin-docs/api/properties/nodes-setboundvariable/)

### inferredVariables?: { readonly [field in VariableBindableNodeField]?: VariableAlias[]} & { fills: VariableAlias[][]; strokes: VariableAlias[][] } [readonly]

An object, keyed by field, returning any variables that match the raw value of that field for the mode of the node (or the default variable value if no mode is set)

[View more →](/plugin-docs/api/properties/nodes-inferredvariables/)

### resolvedVariableModes: { [collectionId: string]: string }

The resolved mode for this node for each variable collection in this file.

[View more →](/plugin-docs/api/properties/nodes-resolvedvariablemodes/)

### explicitVariableModes: { [collectionId: string]: string }

The explicitly set modes for this node.
For `SceneNodes`, represents a subset of [`resolvedVariableModes`](/plugin-docs/api/properties/nodes-resolvedvariablemodes/)
.
Note that this does not include [workspace and team-default modes](https://help.figma.com/hc/en-us/articles/12611253730071)
.

### clearExplicitVariableModeForCollection(collection: VariableCollection): void

Clears an explicit mode for the given collection on this node

[View more →](/plugin-docs/api/properties/ExplicitVariableModesMixin-clearexplicitvariablemodeforcollection/)

### setExplicitVariableModeForCollection(collection: VariableCollection, modeId: string): void

Sets an explicit mode for the given collection on this node

[View more →](/plugin-docs/api/properties/ExplicitVariableModesMixin-setexplicitvariablemodeforcollection/)

## Children-related properties

### children: ReadonlyArray [readonly]

The list of children, sorted back-to-front. That is, the first child in the array is the bottommost layer on the screen, and the last child in the array is the topmost layer.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this property.

[View more →](/plugin-docs/api/properties/nodes-children/)

### appendChild(child: SceneNode): void

Adds a new child to the end of the [`children`](/plugin-docs/api/properties/nodes-children/)
 array. That is, visually on top of all other children.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-appendchild/)

### insertChild(index: number, child: SceneNode): void

Adds a new child at the specified index in the [`children`](/plugin-docs/api/properties/nodes-children/)
 array.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-insertchild/)

### findChildren(callback?: (node: SceneNode) => boolean): SceneNode[]

Searches the immediate children of this node (i.e. not including the children's children). Returns all nodes for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-findchildren/)

### findChild(callback: (node: SceneNode) => boolean): SceneNode | null

Searches the immediate children of this node (i.e. not including the children's children). Returns the first node for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-findchild/)

### findAll(callback?: (node: SceneNode) => boolean): SceneNode[]

Searches this entire subtree (this node's children, its children's children, etc). Returns all nodes for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-findall/)

### findOne(callback: (node: SceneNode) => boolean): SceneNode | null

Searches this entire subtree (this node's children, its children's children, etc). Returns the first node for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-findone/)

### findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } & SceneNode>

Searches this entire subtree (this node's children, its children's children, etc). Returns all nodes that satisfy all of specified criteria.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-findallwithcriteria/)

### findWidgetNodesByWidgetId(widgetId: string): Array

Searches this entire subtree (this node's children, its children's children, etc). Returns all widget nodes that match the provided `widgetId`.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-findwidgetnodesbywidgetid/)

## Frame-related properties

### detachedInfo: DetachedInfo | null [readonly]

Includes the id (for local components) or key (for library components) of the component the given node was detached from, if any. If the node isn't a detached instance, it will be null. If the node is a component or instance, it will be null.

### layoutGrids: ReadonlyArray

Array of [`LayoutGrid`](/plugin-docs/api/LayoutGrid/)
 objects used as layout grids on this node. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

### gridStyleId: string

The id of the [`GridStyle`](/plugin-docs/api/GridStyle/)
 object that the [`layoutGrids`](/plugin-docs/api/node-properties/#layoutgrids)
 property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setGridStyleIdAsync` to update the style.

### setGridStyleIdAsync(styleId: string): Promise

Set the [`GridStyle`](/plugin-docs/api/GridStyle/)
 that the [`layoutGrids`](/plugin-docs/api/node-properties/#layoutgrids)
 property of this node is linked to.

### clipsContent: boolean

Whether the frame clips its contents. That is, whether layers inside the frame are visible outside the bounds of the frame.

### guides: ReadonlyArray

Array of [`Guide`](/plugin-docs/api/Guide/)
 used inside the frame. Note that each frame has its own guides, separate from the canvas-wide guides. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

### inferredAutoLayout: InferredAutoLayoutResult | null

Returns inferred auto layout properties of a [`FrameNode`](/plugin-docs/api/FrameNode/)
 if applicable. Otherwise, returns `null`.

This is what Figma uses to power Dev Mode’s [code snippets](https://help.figma.com/hc/en-us/articles/15023124644247#Build_faster_with_customizable_code_snippets)
 feature, as it makes sure the generated code is more useful.

##### info

This method uses a heuristic to infer the auto layout properties.

### layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL'

Determines whether this layer uses auto-layout to position its children. Defaults to "NONE".

[View more →](/plugin-docs/api/properties/nodes-layoutmode/)

### layoutWrap: 'NO_WRAP' | 'WRAP'

Determines whether this layer should use wrapping auto-layout. Defaults to "NO_WRAP".

[View more →](/plugin-docs/api/properties/nodes-layoutwrap/)

### paddingLeft: number

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

[View more →](/plugin-docs/api/properties/nodes-primaryaxissizingmode/)

### counterAxisSizingMode: 'FIXED' | 'AUTO'

Applicable only on auto-layout frames. Determines whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine).

[View more →](/plugin-docs/api/properties/nodes-counteraxissizingmode/)

### primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN'

Applicable only on auto-layout frames. Determines how the auto-layout frame’s children should be aligned in the primary axis direction.

[View more →](/plugin-docs/api/properties/nodes-primaryaxisalignitems/)

### counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'BASELINE'

Applicable only on auto-layout frames. Determines how the auto-layout frame’s children should be aligned in the counter axis direction.

[View more →](/plugin-docs/api/properties/nodes-counteraxisalignitems/)

### counterAxisAlignContent: 'AUTO' | 'SPACE_BETWEEN'

Applicable only on auto-layout frames with [`layoutWrap`](/plugin-docs/api/properties/nodes-layoutwrap/)
 set to `"WRAP"`. Determines how the wrapped tracks are spaced out inside of the auto-layout frame.

[View more →](/plugin-docs/api/properties/nodes-counteraxisaligncontent/)

### itemSpacing: number

Applicable only on auto-layout frames. Determines distance between children of the frame.

[View more →](/plugin-docs/api/properties/nodes-itemspacing/)

### counterAxisSpacing: number | null

Applicable only on auto-layout frames with [`layoutWrap`](/plugin-docs/api/properties/nodes-layoutwrap/)
 set to `"WRAP"`. Determines the distance between wrapped tracks. The value must be positive.

[View more →](/plugin-docs/api/properties/nodes-counteraxisspacing/)

### itemReverseZIndex: boolean

Applicable only on auto-layout frames. Determines the [canvas stacking order](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties#Canvas_stacking_order)
 of layers in this frame. When true, the first layer will be draw on top.

[View more →](/plugin-docs/api/properties/nodes-itemreversezindex/)

### strokesIncludedInLayout: boolean

Applicable only on auto-layout frames. Determines whether strokes are included in [layout calculations](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties#strokes-in-layout)
. When true, auto-layout frames behave like css `box-sizing: border-box`.

[View more →](/plugin-docs/api/properties/nodes-strokesincludedinlayout/)

### devStatus: DevStatus

Whether the node is marked [ready for development](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode#01H8CR3K6V9S02RK503QCX0367)
 or [completed](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode#01H8CR3K6V9S02RK503QCX0367)
.

There are some restrictions on how `devStatus` can be set:

- Can only be set on a node directly under a page or section
- Cannot be set on a node that is inside another node that already has a `devStatus`

## Annotation properties

### annotations: ReadonlyArray

Annotations on the node.

Learn more about annotations in the [Help Center](https://help.figma.com/hc/en-us/articles/20774752502935)
 or see the [Annotation type](/plugin-docs/api/Annotation/)
 for usage examples.

## Container-related properties

### expanded: boolean

Whether this container is shown as expanded in the layers panel.

### backgrounds: ReadonlyArray

DEPRECATED: Use `fills` instead.

### backgroundStyleId: string

DEPRECATED: Use `fillStyleId` instead. This property is read-only if the manifest contains `"documentAccess": "dynamic-page"`.

## Geometry-related properties

### fills: ReadonlyArray | figma.mixed

The paints used to fill the area of the shape. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

[View more →](/plugin-docs/api/properties/nodes-fills/)

### fillStyleId: string | figma.mixed

The id of the [`PaintStyle`](/plugin-docs/api/PaintStyle/)
 object that the [`fills`](/plugin-docs/api/properties/nodes-fills/)
 property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setFillStyleIdAsync` to update the style.

[View more →](/plugin-docs/api/properties/nodes-fillstyleid/)

### setFillStyleIdAsync(styleId: string): Promise

Sets the [`PaintStyle`](/plugin-docs/api/PaintStyle/)
 that the [`fills`](/plugin-docs/api/properties/nodes-fills/)
 property of this node is linked to.

### strokes: ReadonlyArray

The paints used to fill the area of the shape's strokes. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

### strokeStyleId: string

The id of the [`PaintStyle`](/plugin-docs/api/PaintStyle/)
 object that the [`strokes`](/plugin-docs/api/node-properties/#strokes)
 property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setStrokeStyleIdAsync` to update the style.

### setStrokeStyleIdAsync(styleId: string): Promise

Set the [`PaintStyle`](/plugin-docs/api/PaintStyle/)
 that the [`strokes`](/plugin-docs/api/node-properties/#strokes)
 property of this node is linked to.

### strokeWeight: number | figma.mixed

The thickness of the stroke, in pixels. This value must be non-negative and can be fractional.

##### caution

For rectangle nodes or frame-like nodes using different individual stroke weights, this property will return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/)
.

##### info

For rectangle nodes or frame-like nodes, individual stroke weights can be set for each side using the following properties:

- `strokeTopWeight`
- `strokeBottomWeight`
- `strokeLeftWeight`
- `strokeRightWeight`

### strokeJoin: StrokeJoin | figma.mixed

The decoration applied to vertices which have two or more connected segments.

[View more →](/plugin-docs/api/properties/nodes-strokejoin/)

### strokeAlign: 'CENTER' | 'INSIDE' | 'OUTSIDE'

The alignment of the stroke with respect to the boundaries of the shape.

[View more →](/plugin-docs/api/properties/nodes-strokealign/)

### dashPattern: ReadonlyArray

A list of numbers specifying alternating dash and gap lengths, in pixels.

### strokeGeometry: VectorPaths [readonly]

An array of paths representing the object strokes relative to the node.
StrokeGeometry is always from the center regardless of the nodes `strokeAlign`.

### strokeCap: StrokeCap | figma.mixed

The decoration applied to vertices which have only one connected segment.

[View more →](/plugin-docs/api/properties/nodes-strokecap/)

### strokeMiterLimit: number

The miter limit on the stroke. This is the same as the [SVG miter limit](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit)
.

### outlineStroke(): VectorNode | null

This method performs an action similar to using the "Outline Stroke" function in the editor from the right-click menu. However, this method creates and returns a new node while leaving the original intact. Returns `null` if the node has no strokes.

### fillGeometry: VectorPaths [readonly]

An array of paths representing the object fills relative to the node.

## Corner-related properties

### cornerRadius: number | figma.mixed

The number of pixels to round the corners of the object by.

[View more →](/plugin-docs/api/properties/nodes-cornerradius/)

### cornerSmoothing: number

A value that lets you control how "smooth" the corners are. Ranges from 0 to 1.

[View more →](/plugin-docs/api/properties/nodes-cornersmoothing/)

### topLeftRadius: number

### topRightRadius: number

### bottomLeftRadius: number

### bottomRightRadius: number

You can set individual corner radius of each of the four corners of a rectangle node or frame-like node. Similar to `cornerRadius`, these value must be non-negative and can be fractional. If an edge length is less than twice the corner radius, the corner radius for each vertex of the edge will be clamped to half the edge length.

Setting `cornerRadius` sets the property for all four corners. Setting these corners to different values makes `cornerRadius` return `mixed`.

## Individual strokes-related properties

You can set individual stroke weights for each of the four sides of a rectangle node or frame-like node. Similar to [strokeWeight](/plugin-docs/api/node-properties/#strokeweight)
, these values must be non-negative and can be fractional. To hide a side, set the value to 0.

Setting [strokeWeight](/plugin-docs/api/node-properties/#strokeweight)
 sets the same value for all four sides.

### strokeTopWeight: number

Determines the top stroke weight on a rectangle node or frame-like node. Must be non-negative and can be fractional.

### strokeBottomWeight: number

Determines the bottom stroke weight on a rectangle node or frame-like node. Must be non-negative and can be fractional.

### strokeLeftWeight: number

Determines the left stroke weight on a rectangle node or frame-like node. Must be non-negative and can be fractional.

### strokeRightWeight: number

Determines the right stroke weight on a rectangle node or frame-like node. Must be non-negative and can be fractional.

## Blend-related properties

### opacity: number

Opacity of the node, as shown in the Layer panel. Must be between 0 and 1.

### blendMode: BlendMode

Blend mode of this node, as shown in the Layer panel. In addition to the blend modes that paints & effects support, the layer blend mode can also have the value PASS_THROUGH.

### isMask: boolean

Whether this node is a mask. A mask node masks its subsequent siblings.

[View more →](/plugin-docs/api/properties/nodes-ismask/)

### maskType: MaskType

Type of masking to use if this node is a mask. Defaults to `"ALPHA"`. You must check `isMask` to verify that this is a mask; changing `maskType` does not automatically turn on `isMask`, and a node that is not a mask can still have a `maskType`.

### effects: ReadonlyArray

Array of effects. See [`Effect`](/plugin-docs/api/Effect/)
 type. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

### effectStyleId: string

The id of the [`EffectStyle`](/plugin-docs/api/EffectStyle/)
 object that the properties of this node are linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setEffectStyleIdAsync` to update the style.

### setEffectStyleIdAsync(styleId: string): Promise

Set the [`EffectStyle`](/plugin-docs/api/EffectStyle/)
 that the properties of this node are linked to.

## Layout-related properties

### x: number

The position of the node. Identical to `relativeTransform[0][2]`.

[View more →](/plugin-docs/api/properties/nodes-x/)

### y: number

The position of the node. Identical to `relativeTransform[1][2]`.

[View more →](/plugin-docs/api/properties/nodes-y/)

### width: number [readonly]

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

The position of a node relative to its containing parent as a [`Transform`](/plugin-docs/api/Transform/)
 matrix. Not used for scaling, see `width` and `height` instead. Read the details page to understand the nuances of this property.

[View more →](/plugin-docs/api/properties/nodes-relativetransform/)

### absoluteTransform: Transform [readonly]

The position of a node relative to its containing page as a [`Transform`](/plugin-docs/api/Transform/)
 matrix.

### absoluteBoundingBox: Rect | null [readonly]

The bounds of the node that does not include rendered properties like drop shadows or strokes. The `x` and `y` inside this property represent the absolute position of the node on the page.

### layoutAlign: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT'

Applicable only on direct children of auto-layout frames. Determines if the layer should stretch along the parent’s counter axis. Defaults to `“INHERIT”`.

[View more →](/plugin-docs/api/properties/nodes-layoutalign/)

### layoutGrow: number

This property is applicable only for direct children of auto-layout frames. Determines whether a layer should stretch along the parent’s primary axis. 0 corresponds to a fixed size and 1 corresponds to stretch.

[View more →](/plugin-docs/api/properties/nodes-layoutgrow/)

### layoutPositioning: 'AUTO' | 'ABSOLUTE'

This property is applicable only for direct children of auto-layout frames. Determines whether a layer's size and position should be dermined by auto-layout settings or manually adjustable.

[View more →](/plugin-docs/api/properties/nodes-layoutpositioning/)

### absoluteRenderBounds: Rect | null [readonly]

The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.

### constrainProportions: boolean

DEPRECATED: Use `targetAspectRatio`, `lockAspectRatio`, and `unlockAspectRatio` instead.

When toggled, causes the layer to keep its proportions when the user resizes it via the properties panel.

### rotation: number

The rotation of the node in degrees. Returns values from -180 to 180. Identical to `Math.atan2(-m10, m00)` in the [`relativeTransform`](/plugin-docs/api/properties/nodes-relativetransform/)
 matrix. When setting `rotation`, it will also set `m00`, `m01`, `m10`, `m11`.

[View more →](/plugin-docs/api/properties/nodes-rotation/)

### layoutSizingHorizontal: 'FIXED' | 'HUG' | 'FILL'

Applicable only on auto-layout frames, their children, and text nodes. This is a shorthand for setting [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/)
, [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/)
, [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/)
, and [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/)
. This field maps directly to the "Horizontal sizing" dropdown in the Figma UI.

[View more →](/plugin-docs/api/properties/nodes-layoutsizinghorizontal/)

### layoutSizingVertical: 'FIXED' | 'HUG' | 'FILL'

Applicable only on auto-layout frames, their children, and text nodes. This is a shorthand for setting [`layoutGrow`](/plugin-docs/api/properties/nodes-layoutgrow/)
, [`layoutAlign`](/plugin-docs/api/properties/nodes-layoutalign/)
, [`primaryAxisSizingMode`](/plugin-docs/api/properties/nodes-primaryaxissizingmode/)
, and [`counterAxisSizingMode`](/plugin-docs/api/properties/nodes-counteraxissizingmode/)
. This field maps directly to the "Vertical sizing" dropdown in the Figma UI.

[View more →](/plugin-docs/api/properties/nodes-layoutsizingvertical/)

### resize(width: number, height: number): void

Resizes the node. If the node contains children with constraints, it applies those constraints during resizing. If the parent has auto-layout, causes the parent to be resized.

[View more →](/plugin-docs/api/properties/nodes-resize/)

### resizeWithoutConstraints(width: number, height: number): void

Resizes the node. Children of the node are never resized, even if those children have constraints. If the parent has auto-layout, causes the parent to be resized (this constraint cannot be ignored).

[View more →](/plugin-docs/api/properties/nodes-resizewithoutconstraints/)

### rescale(scale: number): void

Rescales the node. This API function is the equivalent of using the Scale Tool from the toolbar.

[View more →](/plugin-docs/api/properties/nodes-rescale/)

### constraints: Constraints

Constraints of this node relative to its containing [`FrameNode`](/plugin-docs/api/FrameNode/)
, if any.

[View more →](/plugin-docs/api/properties/nodes-constraints/)

## Lock aspect ratio properties

### targetAspectRatio: Vector | null [readonly]

When toggled, causes the layer to keep its proportions when the user resizes it via auto layout, constraints, the properties panel, or on-canvas.
If not set, the node does NOT resize toward a specific targetAspectRatio.

[View more →](/plugin-docs/api/properties/nodes-targetaspectratio/)

### lockAspectRatio(): void

Locks the node's `targetAspectRatio` to the current ratio of its width and height.

### unlockAspectRatio(): void

Unlocks the node's `targetAspectRatio`.

## Export-related properties

### exportSettings: ReadonlyArray

List of export settings stored on the node. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

### exportAsync(settings?: ExportSettings): Promise

### exportAsync(settings: ExportSettingsSVGString): Promise

### exportAsync(settings: ExportSettingsREST): Promise

Exports the node as an encoded image.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-exportasync/)

## Reaction prototyping-related properties

### reactions: ReadonlyArray

List of [Reactions](/plugin-docs/api/Reaction/)
 on this node, which includes both the method of interaction with this node in a prototype, and the behavior of that interaction. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setReactionsAsync` to update the value.

[View more →](/plugin-docs/api/properties/nodes-reactions/)

### setReactionsAsync(reactions: Array): Promise

Updates the reactions on this node. See [`reactions`](/plugin-docs/api/properties/nodes-reactions/)
 for a usage example.

## Frame prototyping-related properties

### overflowDirection: OverflowDirection

Determines whether a frame will scroll in presentation mode when the frame contains content that exceed the frame's bounds. Reflects the value shown in "Overflow Behavior" in the Prototype tab.

[View more →](/plugin-docs/api/properties/nodes-overflowdirection/)

### numberOfFixedChildren: number

Determines which children of the frame are fixed children in a scrolling frame.

[View more →](/plugin-docs/api/properties/nodes-numberoffixedchildren/)

### overlayPositionType: OverlayPositionType [readonly]

How this frame is positioned when opened as an overlay.

### overlayBackground: OverlayBackground [readonly]

How this frame obscures the content under it when opened as an overlay.

### overlayBackgroundInteraction: OverlayBackgroundInteraction [readonly]

How the user can interact with the content under this frame when opened as an overlay.

## Variant-related properties

### variantProperties: { [property: string]: string } | null [readonly]

DEPRECATED: Use [`componentProperties`](/plugin-docs/api/InstanceNode/#componentproperties)
 instead.

Variant properties and values for this node. Is `null` for nodes that are not variants.

[View more →](/plugin-docs/api/properties/nodes-variantproperties/)

## Component properties-related properties

### componentPropertyDefinitions: ComponentPropertyDefinitions [readonly]

All component properties and their default values that exist on this component set. `'VARIANT'` properties will also have a list of all variant options. `'BOOLEAN'`, `'TEXT'`, and `'INSTANCE_SWAP'` properties will have their names suffixed by a unique identifier starting with `'#'`, which is helpful for quickly distinguishing multiple component properties that have the same name in the Figma UI. The entire property name should be used for all Component property-related API methods and properties.

[View more →](/plugin-docs/api/properties/ComponentPropertiesMixin-componentpropertydefinitions/)

### addComponentProperty(propertyName: string, type: ComponentPropertyType, defaultValue: string | boolean | VariableAlias, options?: ComponentPropertyOptions): string

Adds a new component property to this node and returns the property name with its unique identifier suffixed. This function supports properties with type `'BOOLEAN'`, `'TEXT'`, `'INSTANCE_SWAP'` or `'VARIANT'`.

### editComponentProperty(propertyName: string, newValue: { name: string; defaultValue: string | boolean | VariableAlias; preferredValues: InstanceSwapPreferredValue[] }): string

Modifies the name, default value, or preferred values of an existing component property on this node and returns the property name with its unique identifier suffixed.

This function supports properties with type `'BOOLEAN'`, `'TEXT'`, `'INSTANCE_SWAP'`, or `'VARIANT'` with the following restrictions:

- `name` is supported for all properties
- `defaultValue` is supported for `'BOOLEAN'`, `'TEXT'`, and `'INSTANCE_SWAP'` properties, but not for `'VARIANT'` properties
- `preferredValues` is only supported for `'INSTANCE_SWAP'` properties

### deleteComponentProperty(propertyName: string): void

Deletes an existing component property on this node. This function only supports properties with type `'BOOLEAN'`, `'TEXT'`, or `'INSTANCE_SWAP'`.