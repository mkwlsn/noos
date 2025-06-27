---
title: EmbedNode
slug: EmbedNode
source_file: plugin-api-EmbedNode.html
source_url: https://www.figma.com/plugin-docs/api/EmbedNode/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: fb75393ee0ba4098
token_count: 3292
---
# EmbedNode

Represents an embed node in FigJam. A embed node is one that can be activated to host an iframe of another website inside the FigJam canvas. Embeds can be created using [`figma.createLinkPreviewAsync`](/plugin-docs/api/properties/figma-createlinkpreviewasync/)
.

## Embed properties

### type: 'EMBED' [readonly]

The type of this node, represented by the string literal "EMBED"

### embedData: EmbedData [readonly]

Readonly metadata about this particular embed

### clone(): EmbedNode

Create a copy of this node

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