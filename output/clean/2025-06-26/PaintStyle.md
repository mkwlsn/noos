---
title: PaintStyle
slug: PaintStyle
source_file: plugin-api-PaintStyle.html
source_url: https://www.figma.com/plugin-docs/api/PaintStyle/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 3b906169c819eb05
token_count: 1404
---
# PaintStyle

## PaintStyle

### type: 'PAINT'

The string literal "PAINT" representing the style type. Always check the `type` before reading other properties.

### paints: ReadonlyArray

List of [`Paint`](/plugin-docs/api/Paint/) to replace the `fills`, `strokes`, or `backgrounds` property with.

### boundVariables?: { readonly [field in VariableBindablePaintStyleField]?: VariableAlias[]} [readonly]

The variables bound to a particular field on this paint style.

## Base style properties

### id: string [readonly]

The unique identifier of the style in the document the plugin is executing from. You can assign this value via `setFillStyleIdAsync`, `setStrokeStyleIdAsync`, `setTextStyleIdAsync`, etc. to make the node properties reflect that of the style node.

### getStyleConsumersAsync(): Promise

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).

### consumers: StyleConsumers[] [readonly]

DEPRECATED: Use `getStyleConsumersAsync` instead. Accessing this property will throw an exception if the plugin manifest contains `"documentAccess": "dynamic-page"`.

The consumers of this style. The `fields` in `StyleConsumers` refers to the field where the style is applied (e.g. a PaintStyle can be applied in `setFillStyleIdAsync` or `setStrokeStyleIdAsync`).

### name: string

The name of the style node. Note that setting this also sets "autoRename" to false on [`TextNode`](/plugin-docs/api/TextNode/).

### remove(): void

Deletes a local style.

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

## Publishable properties

### description: string

The plain-text annotation entered by the user for this style/component.

[View more →](/plugin-docs/api/properties/nodes-description/)### descriptionMarkdown: string

The rich-text annotation entered by the user for this style/component.

[View more →](/plugin-docs/api/properties/nodes-descriptionmarkdown/)### documentationLinks: ReadonlyArray

The documentation links for this style/component.

[View more →](/plugin-docs/api/properties/nodes-documentationlinks/)### remote: boolean [readonly]

Whether this style/component is a remote style/component that doesn't live in the file (i.e. is from the team library). Remote components are read-only: attempts to change their properties will throw.

### key: string [readonly]

The key to use with [`figma.importComponentByKeyAsync`](/plugin-docs/api/figma/#importcomponentbykeyasync), [`figma.importComponentSetByKeyAsync`](/plugin-docs/api/figma/#importcomponentsetbykeyasync) and [`figma.importStyleByKeyAsync`](/plugin-docs/api/figma/#importstylebykeyasync). Note that while this key is present on local and published components, you can only import components that are already published.

### getPublishStatusAsync(): Promise

Gets the status of this style/component in the team library.

## Folders

Styles can be put inside folders (including nested folders) by setting the name of the style to be a delimited path name.
For example, the following code would move a paint style named `Style 1` into a nested folder named `b`. Folder `b` resides in folder `a`. 

```
const style = figma.createPaintStyle() style.name = "a/b/Style 1"
```Folder names cannot be empty strings and they are unique within the same hierarchy. Since two nested folders can have the same name when residing in
different parent folders, we refer to folders by their absolute delimited folder name. The following function `getNamePrefix` can be used
to get the absolute folder name given a style name. 

```
const getNameParts = (name: string) => { const nameParts = name.split('/').filter((part: string) => !!part) return nameParts.map((part: string) => part.trim())}const getNamePrefix = (name: string): string => { const pathParts = getNameParts(name) pathParts.pop() return pathParts.join('/')}
```