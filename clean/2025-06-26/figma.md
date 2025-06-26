---
title: figma
slug: figma
source_file: plugin-api-figma.html
source_url: https://www.figma.com/plugin-docs/api/figma/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 772da8f1a65fc0d1
token_count: 8213
---
# figma

These are methods and properties available on the `figma` global object.

## General

### apiVersion: '1.0.0' [readonly]

The version of the Figma API this plugin is running on, as defined in your `manifest.json` in the `"api"` field.

### fileKey: string | undefined [readonly]

The file key of the current file this plugin is running on.
Only [private plugins](https://help.figma.com/hc/en-us/articles/4404228629655-Create-private-organization-plugins) and Figma-owned resources (such as the Jira and Asana widgets) have access to this.
To enable this behavior, you need to specify `enablePrivatePluginApi` in your `manifest.json`.

### command: string [readonly]

The currently executing command from the `manifest.json` file. It is the command string in the `ManifestMenuItem` (more details in the [manifest guide](/plugin-docs/manifest/)). If the plugin does not have any menu item, this property is undefined.

### pluginId?: string [readonly]

The value specified in the `manifest.json` "id" field. This only exists for Plugins.

### widgetId?: string [readonly]

Similar to `figma.pluginId` but for widgets. The value specified in the `manifest.json` "id" field. This only exists for Widgets.

### editorType: 'figma' | 'figjam' | 'dev' | 'slides' [readonly]

The current editor type this plugin is running in. See also [Setting editor type](/plugin-docs/setting-editor-type/).

### mode: 'default' | 'textreview' | 'inspect' | 'codegen' | 'linkpreview' | 'auth' [readonly]

Return the context the plugin is current running in.

- `default` - The plugin is running as a normal plugin.
- `textreview` - The plugin is running to provide text review functionality.
- `inspect` - The plugin is running in the Inspect panel in Dev Mode.
- `codegen` - The plugin is running in the Code section of the Inspect panel in Dev Mode.
- `linkpreview` - The plugin is generating a link preview for a Dev resource in Dev Mode.
- `auth` - The plugin is running to authenticate a user in Dev Mode.

##### caution

The `linkpreview` and `auth` modes are only available to partner and Figma-owned plugins.

[View more →](/plugin-docs/api/properties/figma-mode/)### skipInvisibleInstanceChildren: boolean

When enabled, causes all node properties and methods to skip over invisible nodes (and their descendants) inside [`instances`](/plugin-docs/api/InstanceNode/).
This makes operations like document traversal much faster.

##### info

Defaults to true in Figma Dev Mode and false in Figma and FigJam

[View more →](/plugin-docs/api/properties/figma-skipinvisibleinstancechildren/)### currentPage: PageNode

The page that the user currently viewing. You can set this value to a [`PageNode`](/plugin-docs/api/PageNode/) to switch pages.

- If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `figma.setCurrentPageAsync` to update the value.

### setCurrentPageAsync(page: PageNode): Promise

Switch the active page to the specified [`PageNode`](/plugin-docs/api/PageNode/).

### root: DocumentNode [readonly]

The root of the entire Figma document. This node is used to access other pages. Each child is a [`PageNode`](/plugin-docs/api/PageNode/).

### showUI(html: string, options?: ShowUIOptions): void

Enables you to render UI to interact with the user, or simply to access browser APIs. This function creates a modal dialog with an `` containing the HTML markup in the `html` argument.

[View more →](/plugin-docs/api/properties/figma-showui/)### ui: UIAPI [readonly]

This property contains methods used to modify and communicate with the UI created via `figma.showUI(...)`.

Read more in the [UI section](/plugin-docs/api/figma-ui/).

### util: UtilAPI [readonly]

This property contains convenience functions for common operations.

Read more in the [util section](/plugin-docs/api/figma-util/).

### constants: ConstantsAPI [readonly]

This property contains constants that can be accessed by the plugin API.

Read more in the [constants section](/plugin-docs/api/figma-constants/).

### timer?: TimerAPI [readonly]

##### info

This API is only available in FigJam

This property contains methods used to read, set, and modify the built in FigJam timer.

Read more in the [timer section](/plugin-docs/api/figma-timer/).

### viewport: ViewportAPI [readonly]

This property contains methods used to read and set the viewport, the user-visible area of the current page.

Read more in the [viewport section](/plugin-docs/api/figma-viewport/).

### clientStorage: ClientStorageAPI [readonly]

This property contains methods to store persistent data on the user's local machine.

Read more in the [client storage section](/plugin-docs/api/figma-clientStorage/).

### parameters: ParametersAPI [readonly]

This property contains methods to handle user inputs when a plugin is launched in query mode. See [Accepting Parameters as Input](/plugin-docs/plugin-parameters/) for more details.

### payments?: PaymentsAPI [readonly]

##### info

`payments` must be specified in the permissions array in `manifest.json` to access this property.

This property contains methods for plugins that require payment.

### currentUser: User | null [readonly]

##### info

`currentuser` must be specified in the permissions array in `manifest.json` to access this property.

This property contains details about the current user.

### activeUsers: ActiveUser[] [readonly]

##### info

This API is only available in FigJam.

`activeusers` must be specified in the permissions array in `manifest.json` to access this property.

This property contains details about the active users in the file. `figma.activeUsers[0]` will match `figma.currentUser` for the `id`, `name`, `photoUrl`, `color`, and `sessionId` properties.

### textreview?: TextReviewAPI [readonly]

##### info

`textreview` must be specified in the capabilities array in `manifest.json` to access this property.

This property contains methods that enable text review features in your plugin.

### variables: VariablesAPI [readonly]

This property contains methods to work with Variables and Variable Collections within Figma.

### teamLibrary: TeamLibraryAPI [readonly]

This property contains methods to work with assets residing in a team library.

### annotations: AnnotationsAPI [readonly]

This property contains methods to work with annotations.

### closePlugin(message?: string): void

Closes the plugin. You should always call this function once your plugin is done running. When called, any UI that's open will be closed and any `setTimeout` or `setInterval` timers will be cancelled.

[View more →](/plugin-docs/api/properties/figma-closeplugin/)### on(type: ArgFreeEventType, callback: () => void): void

### on(type: 'run', callback: (event: RunEvent) => void): void

### on(type: 'drop', callback: (event: DropEvent) => boolean): void

### on(type: 'documentchange', callback: (event: DocumentChangeEvent) => void): void

### on(type: 'slidesviewchange', callback: (event: SlidesViewChangeEvent) => void): void

### on(type: 'textreview', callback: (event: TextReviewEvent) => Promise | TextReviewRange[]): void

### on(type: 'stylechange', callback: (event: StyleChangeEvent) => void): void

Registers an callback that will be called when an event happens in the editor. Current supported events are:

- The selection on the current page changed.
- The current page changed.
- The document has changed.
- An object from outside Figma is dropped onto the canvas
- The plugin has started running.
- The plugin closed.
- The plugin has started running.
- The timer has started running.
- The timer has paused.
- The timer has stopped.
- The timer is done.
- The timer has resumed.

[View more →](/plugin-docs/api/properties/figma-on/)### once(type: ArgFreeEventType, callback: () => void): void

### once(type: 'run', callback: (event: RunEvent) => void): void

### once(type: 'drop', callback: (event: DropEvent) => boolean): void

### once(type: 'documentchange', callback: (event: DocumentChangeEvent) => void): void

### once(type: 'slidesviewchange', callback: (event: SlidesViewChangeEvent) => void): void

### once(type: 'textreview', callback: (event: TextReviewEvent) => Promise | TextReviewRange[]): void

### once(type: 'stylechange', callback: (event: StyleChangeEvent) => void): void

Same as `figma.on`, but the callback will only be called once, the first time the specified event happens.

### off(type: ArgFreeEventType, callback: () => void): void

### off(type: 'run', callback: (event: RunEvent) => void): void

### off(type: 'drop', callback: (event: DropEvent) => boolean): void

### off(type: 'documentchange', callback: (event: DocumentChangeEvent) => void): void

### off(type: 'slidesviewchange', callback: (event: SlidesViewChangeEvent) => void): void

### off(type: 'textreview', callback: (event: TextReviewEvent) => Promise | TextReviewRange[]): void

### off(type: 'stylechange', callback: (event: StyleChangeEvent) => void): void

Removes a callback added with `figma.on` or `figma.once`.

[View more →](/plugin-docs/api/properties/figma-off/)### notify(message: string, options?: NotificationOptions): NotificationHandler

Shows a notification on the bottom of the screen.

[View more →](/plugin-docs/api/properties/figma-notify/)### commitUndo(): void

Commits actions to undo history. This does not trigger an undo.

[View more →](/plugin-docs/api/properties/figma-commitundo/)### triggerUndo(): void

Triggers an undo action. Reverts to the last `commitUndo()` state.

### saveVersionHistoryAsync(title: string, description?: string): Promise

Saves a new version of the file and adds it to the version history of the file. Returns the new version id.

[View more →](/plugin-docs/api/properties/figma-saveversionhistoryasync/)### openExternal(url: string): void

Open a url in a new tab.

[View more →](/plugin-docs/api/properties/figma-openexternal/)## Nodes

This section contains to get or create new nodes.

### getNodeByIdAsync(id: string): Promise

Finds a node by its id in the current document. Every node has an `id` property, which is unique within the document. If the id is invalid, or the node cannot be found (e.g. removed), returns a promise containing null.

### getNodeById(id: string): BaseNode | null

DEPRECATED: Use [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Finds a node by its id in the current document. Every node has an `id` property, which is unique within the document. If the id is invalid, or the node cannot be found (e.g. removed), returns null.

### createRectangle(): RectangleNode

Creates a new rectangle. The behavior is similar to using the `R` shortcut followed by a click.

[View more →](/plugin-docs/api/properties/figma-createrectangle/)### createLine(): LineNode

Creates a new line.

[View more →](/plugin-docs/api/properties/figma-createline/)### createEllipse(): EllipseNode

Creates a new ellipse. The behavior is similar to using the `O` shortcut followed by a click.

[View more →](/plugin-docs/api/properties/figma-createellipse/)### createPolygon(): PolygonNode

Creates a new polygon (defaults to a triangle).

[View more →](/plugin-docs/api/properties/figma-createpolygon/)### createStar(): StarNode

Creates a new star.

[View more →](/plugin-docs/api/properties/figma-createstar/)### createVector(): VectorNode

Creates a new, empty vector network with no vertices.

[View more →](/plugin-docs/api/properties/figma-createvector/)### createText(): TextNode

Creates a new, empty text node.

[View more →](/plugin-docs/api/properties/figma-createtext/)### createFrame(): FrameNode

Creates a new frame. The behavior is similar to using the `F` shortcut followed by a click.

[View more →](/plugin-docs/api/properties/figma-createframe/)### createComponent(): ComponentNode

##### info

This API is only available in Figma Design

Creates a new, empty component.

[View more →](/plugin-docs/api/properties/figma-createcomponent/)### createComponentFromNode(node: SceneNode): ComponentNode

##### info

This API is only available in Figma Design

Creates a component from an existing node, preserving all of its properties and children. The behavior is similar to using the Create component button in the toolbar.

[View more →](/plugin-docs/api/properties/figma-createcomponentfromnode/)### createBooleanOperation(): BooleanOperationNode

DEPRECATED: Use [`figma.union`](/plugin-docs/api/figma/#union), [`figma.subtract`](/plugin-docs/api/figma/#subtract), [`figma.intersect`](/plugin-docs/api/figma/#intersect), [`figma.exclude`](/plugin-docs/api/figma/#exclude) instead.

[View more →](/plugin-docs/api/properties/figma-createbooleanoperation/)### createPage(): PageNode

##### info

This API is only available in Figma Design

Creates a new page, appended to the document's list of children.

[View more →](/plugin-docs/api/properties/figma-createpage/)### createPageDivider(dividerName?: string): PageNode

Creates a new page divider, appended to the document's list of children. A page divider is a [`PageNode`](/plugin-docs/api/PageNode/) with `isPageDivider` true.

[View more →](/plugin-docs/api/properties/figma-createpagedivider/)### createSlice(): SliceNode

Creates a new slice object.

[View more →](/plugin-docs/api/properties/figma-createslice/)### createSlide(row?: number, col?: number): SlideNode

##### info

This API is only available in Figma Slides

[View more →](/plugin-docs/api/properties/figma-createslide/)### createSlideRow(row?: number): SlideRowNode

##### info

This API is only available in Figma Slides

Creates a new Slide Row, which automatically gets appended to the Slide Grid.

[View more →](/plugin-docs/api/properties/figma-createsliderow/)### createSticky(): StickyNode

##### info

This API is only available in FigJam

Creates a new sticky. The behavior is similar to using the `S` shortcut followed by a click.

[View more →](/plugin-docs/api/properties/figma-createsticky/)### createShapeWithText(): ShapeWithTextNode

##### info

This API is only available in FigJam

Creates a new shape with text.

[View more →](/plugin-docs/api/properties/figma-createshapewithtext/)### createConnector(): ConnectorNode

##### info

This API is only available in FigJam

Creates a new connector. The behavior is similar to using the `Shift-C` shortcut followed by a click.

[View more →](/plugin-docs/api/properties/figma-createconnector/)### createCodeBlock(): CodeBlockNode

##### info

This API is only available in FigJam

Creates a new code block.

### createSection(): SectionNode

Creates a new section

### createTable(numRows?: number, numColumns?: number): TableNode

##### info

This API is only available in FigJam

Creates a new table.

[View more →](/plugin-docs/api/properties/figma-createtable/)### createLinkPreviewAsync(url: string): Promise

##### info

This API is only available in FigJam.

Resolves link metadata from a URL, and inserts either an embed or a unfurled preview of the link into the document
An embed will be inserted if the URL is a valid OEmbed provider (has a `` tag). The returned `` source will be converted into an EmbedNode.

Otherwise, the title, description, thumbnail, and favicon will be parsed from the HTML markup of the URL using standard `og` or `twitter` meta tags. This information will be converted into a LinkUnfurlNode.

[View more →](/plugin-docs/api/properties/figma-createlinkpreviewasync/)### createGif(hash: string): MediaNode

##### info

This API is only available in FigJam

Creates a new GIF with the given `Image` hash.

[View more →](/plugin-docs/api/properties/figma-creategif/)### createNodeFromSvg(svg: string): FrameNode

Creates a new node from an SVG string. This is equivalent to the SVG import feature in the editor. See the [official documentation on SVG paths](https://www.w3.org/TR/SVG/paths.html) for more details.

### createNodeFromJSXAsync(jsx: any): Promise

This API creates a new node using the JSX API used by widgets.

[View more →](/plugin-docs/api/properties/figma-createnodefromjsxasync/)### combineAsVariants(nodes: ReadonlyArray, parent: BaseNode & ChildrenMixin, index?: number): ComponentSetNode

##### info

This API is only available in Figma Design

Creates a new [`ComponentSetNode`](/plugin-docs/api/ComponentSetNode/) by combining all the nodes in `nodes`, which should all have type [`ComponentNode`](/plugin-docs/api/ComponentNode/).

[View more →](/plugin-docs/api/properties/figma-combineasvariants/)### group(nodes: ReadonlyArray, parent: BaseNode & ChildrenMixin, index?: number): GroupNode

Creates new group containing all the nodes in `nodes`. There is no `createGroup` function -- use this instead. Group nodes have many quirks, like auto-resizing, that you can read about in the [`FrameNode`](/plugin-docs/api/FrameNode/) section.

[View more →](/plugin-docs/api/properties/figma-group/)### union(nodes: ReadonlyArray, parent: BaseNode & ChildrenMixin, index?: number): BooleanOperationNode

Creates a new [`BooleanOperationNode`](/plugin-docs/api/BooleanOperationNode/) using the UNION operation using the contents of `nodes`. The arguments to `union` are the same as in [`figma.group`](/plugin-docs/api/properties/figma-group/).

### subtract(nodes: ReadonlyArray, parent: BaseNode & ChildrenMixin, index?: number): BooleanOperationNode

Creates a new [`BooleanOperationNode`](/plugin-docs/api/BooleanOperationNode/) using the SUBTRACT operation using the contents of `nodes`. The arguments to `union` are the same as in [`figma.subtract`](/plugin-docs/api/figma/#subtract).

### intersect(nodes: ReadonlyArray, parent: BaseNode & ChildrenMixin, index?: number): BooleanOperationNode

Creates a new [`BooleanOperationNode`](/plugin-docs/api/BooleanOperationNode/) using the INTERSECT operation using the contents of `nodes`. The arguments to `union` are the same as in [`figma.intersect`](/plugin-docs/api/figma/#intersect).

### exclude(nodes: ReadonlyArray, parent: BaseNode & ChildrenMixin, index?: number): BooleanOperationNode

Creates a new [`BooleanOperationNode`](/plugin-docs/api/BooleanOperationNode/) using the EXCLUDE operation using the contents of `nodes`. The arguments to `union` are the same as in [`figma.exclude`](/plugin-docs/api/figma/#exclude).

### flatten(nodes: ReadonlyArray, parent?: BaseNode & ChildrenMixin, index?: number): VectorNode

Flattens every node in nodes into a new vector network.

[View more →](/plugin-docs/api/properties/figma-flatten/)### ungroup(node: SceneNode & ChildrenMixin): Array

Ungroups the given `node`, moving all of `node`'s children into `node`'s parent and removing `node`. Returns an array of nodes that were children of `node`.

[View more →](/plugin-docs/api/properties/figma-ungroup/)## Dev Mode

These APIs integrate your plugin with Figma's Dev Mode. Use the APIs to generate code and interfaces in Dev Mode.

### codegen: CodegenAPI [readonly]

This property contains methods used to integrate with the Dev Mode codegen functionality.

Read more in the [codegen section](/plugin-docs/api/figma-codegen/).

### vscode?: VSCodeAPI [readonly]

This property contains methods used to integrate with the Figma for VS Code extension. If `undefined`, the plugin is not running in VS Code.

Read more in [Dev Mode plugins in Visual Studio Code](/plugin-docs/working-in-dev-mode/#dev-mode-plugins-in-visual-studio-code)

### devResources?: DevResourcesAPI [readonly]

##### caution

This is a private API only available to [Figma partners](https://www.figma.com/partners/)

### getSelectionColors(): null | { paints: Paint[]; styles: PaintStyle[] }

Returns all of the colors in a user’s current selection. This
returns the same values that are shown in Figma's native selection
colors feature. This can be useful for getting a list of colors and
styles in the current selection and converting them into a different
code format (like CSS variables for a user’s codebase).

If there are colors in a selection it will return an object with a
`paints` property, which is an array of `Paint[]`, and a `styles`
property, which is an array of `PaintStyle[]`.

##### info

`getSelectionColors()` returns `null` if there is no selection, or
if there are too many colors in the selection (>1000).

## Slides

### getSlideGrid(): Array>

##### info

This API is only available in Figma Slides

[View more →](/plugin-docs/api/properties/figma-getslidegrid/)### setSlideGrid(slideGrid: Array>): void

##### info

This API is only available in Figma Slides

[View more →](/plugin-docs/api/properties/figma-setslidegrid/)## Styles

These are APIs available to create new styles and retrieve existing ones in the current document. The newly created styles are local to the current document and do not contain default properties (except for TextStyle).

### getStyleByIdAsync(id: string): Promise

Finds a style by its id in the current document. If not found, returns a promise containing null.

### getStyleById(id: string): BaseStyle | null

DEPRECATED: Use [`figma.getStyleByIdAsync`](/plugin-docs/api/figma/#getstylebyidasync) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Finds a style by its id in the current document. If not found, returns null.

### createPaintStyle(): PaintStyle

##### info

This API is only available in Figma Design

Creates a new Paint style. This might be referred to as a Color style, or Fill style more colloquially. However, since this type of style may contain images, and may be used for backgrounds, strokes, and fills, it is called a Paint.

### createTextStyle(): TextStyle

##### info

This API is only available in Figma Design

Creates a new Text style. By default, the text style has the Figma default text properties (font family Inter Regular, font size 12).

### createEffectStyle(): EffectStyle

##### info

This API is only available in Figma Design

Creates a new Effect style.

### createGridStyle(): GridStyle

##### info

This API is only available in Figma Design

Creates a new Grid style.

The APIs below allow access to local styles, which are returned in the same order as displayed in the UI. Only local styles are returned, not the ones from the team library.

### getLocalPaintStylesAsync(): Promise

Returns the list of local paint styles.

### getLocalPaintStyles(): PaintStyle[]

DEPRECATED: Use [`figma.getLocalPaintStylesAsync`](/plugin-docs/api/figma/#getlocalpaintstylesasync) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Returns the list of local paint styles.

### getLocalTextStylesAsync(): Promise

Returns the list of local text styles.

### getLocalTextStyles(): TextStyle[]

DEPRECATED: Use [`figma.getLocalTextStylesAsync`](/plugin-docs/api/figma/#getlocaltextstylesasync) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Returns the list of local text styles.

### getLocalEffectStylesAsync(): Promise

Returns the list of local effect styles.

### getLocalEffectStyles(): EffectStyle[]

DEPRECATED: Use [`figma.getLocalEffectStylesAsync`](/plugin-docs/api/figma/#getlocaleffectstylesasync) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Returns the list of local effect styles.

### getLocalGridStylesAsync(): Promise

Returns the list of local grid styles.

### getLocalGridStyles(): GridStyle[]

DEPRECATED: Use [`figma.getLocalGridStylesAsync`](/plugin-docs/api/figma/#getlocalgridstylesasync) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Returns the list of local grid styles.

### moveLocalPaintStyleAfter(targetNode: PaintStyle, reference: PaintStyle | null): void

##### info

This API is only available in Figma Design

Reorders a target node after the specified reference node (if provided) or to be first if reference is null. The target and reference nodes must live in the same folder. The target and reference nodes must be local paint styles.

### moveLocalTextStyleAfter(targetNode: TextStyle, reference: TextStyle | null): void

##### info

This API is only available in Figma Design

Reorders a target node after the specified reference node (if provided) or to be first if reference is null. The target and reference nodes must live in the same folder. The target and reference nodes must be local text styles.

### moveLocalEffectStyleAfter(targetNode: EffectStyle, reference: EffectStyle | null): void

##### info

This API is only available in Figma Design

Reorders a target node after the specified reference node (if provided) or to be first if reference is null. The target and reference nodes must live in the same folder. The target and reference nodes must be local effect styles.

### moveLocalGridStyleAfter(targetNode: GridStyle, reference: GridStyle | null): void

##### info

This API is only available in Figma Design

Reorders a target node after the specified reference node (if provided) or to be first if reference is null. The target and reference nodes must live in the same folder. The target and reference nodes must be local grid styles.

### moveLocalPaintFolderAfter(targetFolder: string, reference: string | null): void

##### info

This API is only available in Figma Design

Reorders a target folder after the specified reference folder (if provided) or to be first in the parent folder if reference is null. The target and reference folders must have the same parent folder. The target and reference folders must contain paint styles. When referring to nested folders, the full delimited folder name must be used. See the [`BaseStyle`](/plugin-docs/api/BaseStyle/) section for more info.

### moveLocalTextFolderAfter(targetFolder: string, reference: string | null): void

##### info

This API is only available in Figma Design

Reorders a target folder after the specified reference folder (if provided) or to be first in the parent folder if reference is null. The target and reference folders must have the same parent folder. The target and reference folders must contain text styles. When referring to nested folders, the full delimited folder name must be used. See the [`BaseStyle`](/plugin-docs/api/BaseStyle/) section for more info.

### moveLocalEffectFolderAfter(targetFolder: string, reference: string | null): void

##### info

This API is only available in Figma Design

Reorders a target folder after the specified reference folder (if provided) or to be first in the parent folder if reference is null. The target and reference folders must have the same parent folder. The target and reference folders must contain effect styles. When referring to nested folders, the full delimited folder name must be used. See the [`BaseStyle`](/plugin-docs/api/BaseStyle/) section for more info.

### moveLocalGridFolderAfter(targetFolder: string, reference: string | null): void

##### info

This API is only available in Figma Design

Reorders a target folder after the specified reference folder (if provided) or to be first in the parent folder if reference is null. The target and reference folders must have the same parent folder. The target and reference folders must contain grid styles. When referring to nested folders, the full delimited folder name must be used. See the [`BaseStyle`](/plugin-docs/api/BaseStyle/) section for more info.

## Team Library

These APIs allow you to get a component, style, or variable from the team library. This requires you to have a key. You can get a key by calling `component.key` or `style.key` while a plugin is running.

### importComponentByKeyAsync(key: string): Promise

Loads a component node from the team library. Promise is rejected if there is no published component with that key or if the request fails.

### importComponentSetByKeyAsync(key: string): Promise

Loads a component set node from the team library. Promise is rejected if there is no published component set with that key or if the request fails.

### importStyleByKeyAsync(key: string): Promise

Loads a style from the team library. Promise is rejected if there is no style with that key or if the request fails.

### importVariableByKeyAsync(key: string): Promise

Loads a variable from the team library. Promise is rejected if there is
no published variable with that key or if the request fails.

[View more →](/plugin-docs/api/properties/figma-variables-importvariablebykeyasync/)## Other

### listAvailableFontsAsync(): Promise

Returns the lists of currently available fonts. This should be the same list as the one you'd see if you manually used the font picker.

### loadFontAsync(fontName: FontName): Promise

Makes a font available in the plugin for use when creating and modifying text. Calling this function is necessary to modify any property of a text node that may cause the rendered text to change, including `.characters`, `.fontSize`, `.fontName`, etc.

You can either pass in a hardcoded font, a font loaded via `listAvailableFontsAsync`, or the font stored on an existing text node.

Read more about how to work with fonts, when to load them, and how to load them in the [Working with Text](/plugin-docs/working-with-text/) page.

[View more →](/plugin-docs/api/properties/figma-loadfontasync/)### hasMissingFont: boolean [readonly]

Returns true if the document contains text with missing fonts.

### createImage(data: Uint8Array): Image

Creates an `Image` object from the raw bytes of a file content. Note that `Image` objects are not nodes. They are handles to images stored by Figma. Frame backgrounds, or fills of shapes (e.g. a rectangle) may contain images.
[Example: how to work with images](/plugin-docs/working-with-images/).

[View more →](/plugin-docs/api/properties/figma-createimage/)### createImageAsync(src: string): Promise

Creates an `Image` object from a src URL. Note that `Image` objects are not nodes. They are handles to images stored by Figma. Frame backgrounds, or fills of shapes (e.g. a rectangle) may contain images.

[View more →](/plugin-docs/api/properties/figma-createimageasync/)### getImageByHash(hash: string): Image | null

This gets the corresponding `Image` object for a given image hash, which can then be used to obtain the bytes of the image. This hash is found in a node's fill property as part of the ImagePaint object. If there is no image with this hash, returns null.

### createVideoAsync(data: Uint8Array): Promise

Creates a `Video` object from the raw bytes of a file content. Like `Image` objects, `Video` objects are not nodes. They are handles to images stored by Figma. Frame backgrounds, or fills of shapes (e.g. a rectangle) may contain videos.

[View more →](/plugin-docs/api/properties/figma-createvideoasync/)### mixed: unique symbol [readonly]

This a constant value that some node properties return when they are a mix of multiple values. An example might be font size: a single text node can use multiple different font sizes for different character ranges. For those properties, you should always compare against `figma.mixed`.

[View more →](/plugin-docs/api/properties/figma-mixed/)### base64Encode(data: Uint8Array): string

Returns a base64-encoded string from the Uint8Array `data`.

### base64Decode(data: string): Uint8Array

Decodes and returns a Uint8Array from the base64-encoded string `data`.

### getFileThumbnailNodeAsync(): Promise

Gets the node that is currently being used for file thumbnail, or null if the default thumbnail is used.

### getFileThumbnailNode(): FrameNode | ComponentNode | ComponentSetNode | SectionNode | null

DEPRECATED: Use [`figma.getFileThumbnailNodeAsync`](/plugin-docs/api/figma/#getfilethumbnailnodeasync) instead. This function will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

Gets the node that is currently being used for file thumbnail, or null if the default thumbnail is used.

### setFileThumbnailNodeAsync(node: FrameNode | ComponentNode | ComponentSetNode | SectionNode | null): Promise

Set `node` to be the thumbnail for the file. If `node` is null, then use the default thumbnail.

### loadAllPagesAsync(): Promise

Loads all pages of the document into memory. This enables the use of the following features:

- The `documentchange` event for `figma.on`
- `findAll`
- `findOne`
- `findAllWithCriteria`
- `findWidgetNodesByWidgetId`

Calling this method may be slow for large documents, and should be avoided unless absolutely necessary.

This method is only necessary if the plugin manifest contains `"documentAccess": "dynamic-page"`. Without this manifest setting, the full document is loaded automatically when the plugin or widget runs.