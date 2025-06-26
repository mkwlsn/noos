---
title: DocumentNode
slug: DocumentNode
source_file: plugin-api-DocumentNode.html
source_url: https://www.figma.com/plugin-docs/api/DocumentNode/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 29c791939d592ac0
token_count: 2447
---
# DocumentNode

The document node is the root node. There can only be one document node per browser tab, and each of its children must be a [`PageNode`](/plugin-docs/api/PageNode/).

Most plugins will not need to use this node unless they are creating new pages or performing a document-wide operation. In the latter case, it's recommended to only read and not write, as the user may not see the modifications made on a different page.

## Document properties

### type: 'DOCUMENT' [readonly]

The type of this node, represented by the string literal "DOCUMENT"

### children: ReadonlyArray [readonly]

The list of children. For `DocumentNode`s, children are always [`PageNode`](/plugin-docs/api/PageNode/)s.

### documentColorProfile: 'LEGACY' | 'SRGB' | 'DISPLAY_P3' [readonly]

The color profile of this document. This will be "LEGACY" for documents created before color management was launched.

### appendChild(child: PageNode): void

Adds a new page to the end of the `children` array.

### insertChild(index: number, child: PageNode): void

Adds a new page at the specified index in the `children` array.

### findChildren(callback?: (node: PageNode) => boolean): Array

Searches the immediate children of this node (i.e. all page nodes, not including their children). Returns all pages for which `callback` returns true.

[View more →](/plugin-docs/api/properties/DocumentNode-findchildren/)### findChild(callback: (node: PageNode) => boolean): PageNode | null

Searches the immediate children of this node (i.e. all page nodes, not including their children). Returns the first page for which `callback` returns true.

[View more →](/plugin-docs/api/properties/DocumentNode-findchild/)### findAll(callback?: (node: PageNode | SceneNode) => boolean): Array

Searches the entire document tree. Returns all nodes for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, you must first call [`figma.loadAllPagesAsync`](/plugin-docs/api/figma/#loadallpagesasync) to access this function.

[View more →](/plugin-docs/api/properties/DocumentNode-findall/)### findOne(callback: (node: PageNode | SceneNode) => boolean): PageNode | SceneNode | null

Searches this entire page (this node's children, its children's children, etc.). Returns the first node for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, you must first call [`figma.loadAllPagesAsync`](/plugin-docs/api/figma/#loadallpagesasync) to access this function.

[View more →](/plugin-docs/api/properties/DocumentNode-findone/)### findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } & (PageNode | SceneNode)>

Searches the entire document tree. Returns all nodes that satisfy all of specified criteria.

If the manifest contains `"documentAccess": "dynamic-page"`, you must first call [`figma.loadAllPagesAsync`](/plugin-docs/api/figma/#loadallpagesasync) to access this function.

Similar to [`findAllWithCriteria`](/plugin-docs/api/properties/nodes-findallwithcriteria/) with the main difference being that this searches all the nodes in the document, which also includes [`PageNode`](/plugin-docs/api/PageNode/) objects.

### findWidgetNodesByWidgetId(widgetId: string): Array

Searches the entire document tree. Returns all widget nodes that match the provided `widgetId`.

If the manifest contains `"documentAccess": "dynamic-page"`, you must first call [`figma.loadAllPagesAsync`](/plugin-docs/api/figma/#loadallpagesasync) to access this function.

[View more →](/plugin-docs/api/properties/DocumentNode-findwidgetnodesbywidgetid/)## Base node properties

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