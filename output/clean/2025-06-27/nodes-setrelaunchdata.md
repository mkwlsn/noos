---
title: setRelaunchData
slug: nodes-setrelaunchdata
source_file: plugin-api-nodes-setrelaunchdata.html
source_url: https://www.figma.com/plugin-docs/api/nodes-setrelaunchdata/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 87c86922e6bab511
token_count: 1025
---
# setRelaunchData

Sets state on the node to show a button and description when the node is selected. Clears the button and description when `relaunchData` is `{}`.

##### info

In Figma and Dev Mode, this shows up in the properties panel. In FigJam, this shows up in the property menu. See [here](/plugin-docs/api/properties/nodes-setrelaunchdata/#example-figma-design-ui)
 for examples.

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

## Signature

### setRelaunchData(data: { [command: string]: string }): void

## Parameters

### data

```
{ [command: string]: string // description}
```e.g. `data = { myCommand: 'Short description' }`

### command

The string that will be passed as `figma.command` when the plugin is run after the button is clicked. This command must be present in the [manifest](/plugin-docs/manifest/#relaunchbuttons)
 under one of the `relaunchButtons`, which is used to look up the name to display for the button.

### description

Up to three lines of text that will be displayed under the button to provide plugin specific information about the node or any clarification about the action the button will perform. This method will throw if description exceeds 1000 characters, but the UI will display even less (only 3 lines).

## Remarks

Each call to this method sets entirely new relaunch data, removing any relaunch data and associated buttons/descriptions from before. To maintain buttons from a previous call one can store the button information using [setPluginData](/plugin-docs/api/properties/nodes-setplugindata/)
 and later fetch it with [getPluginData](/plugin-docs/api/PageNode/#getplugindata)
 before passing it on to `setRelaunchData`.

To use this API, the plugin manifest must include a `relaunchButtons` section: see the [manifest guide](/plugin-docs/manifest/#relaunchbuttons)
 for more information.

##### info

Note that if the `command` passed to this method does not match a command in the manifest, nothing will be displayed. Similarly if the name of a command in the manifest changes or is removed, then all buttons with that command will disappear. This behavior can be used to remove buttons when a particular action is no longer supported by the plugin.

In Figma design, the relaunch data can also be placed on the [`PageNode`](/plugin-docs/api/PageNode/)
 or [`DocumentNode`](/plugin-docs/api/DocumentNode/)
, to show a button and description when nothing is selected. Relaunch buttons added to the [`PageNode`](/plugin-docs/api/PageNode/)
 will be displayed on that page, combined with buttons from the [`DocumentNode`](/plugin-docs/api/DocumentNode/)
 that show on every page. This is not supported in FigJam.

## Examples

manifest.json```
// With the following in the manifest:"relaunchButtons": [ {"command": "edit", "name": "Edit shape"}, {"command": "open", "name": "Open Shaper", "multipleSelection": true}]
```code.ts```
// Add two buttons (ordered by the above array from the manifest):// * an "Edit shape" button with a description of "Edit this trapezoid// with Shaper" that runs the plugin with `figma.command === 'edit'`.// * an "Open Shaper" button with no description that runs the plugin with// `figma.command === 'open'`.node.setRelaunchData({ edit: 'Edit this trapezoid with Shaper', open: '' })// With the following in the manifest:"relaunchButtons": [ {"command": "relaunch", "name": "Run again", "multipleSelection": true}]// Pass an empty description to show only a buttonnode.setRelaunchData({ relaunch: '' })// Remove the button and descriptionnode.setRelaunchData({})
```

### Example Figma Design UI

### Example FigJam UI