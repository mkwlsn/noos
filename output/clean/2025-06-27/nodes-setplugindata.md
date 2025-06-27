---
title: setPluginData
slug: nodes-setplugindata
source_file: plugin-api-nodes-setplugindata.html
source_url: https://www.figma.com/plugin-docs/api/nodes-setplugindata/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 3f2f89d1406f9872
token_count: 484
---
# setPluginData

Lets you store custom information on any node or style, private to your plugin. The total size of your entry (`pluginId`, `key`, `value`) cannot exceed 100 kB.

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

## Signature

### setPluginData(key: string, value: string): void

## Parameters

### key

The key under which to store the data. This is similar to writing to a plain object via `obj[key] = value`.

### value

The data you want to store. If you want to store a value type other than a string, encode it as a JSON string first via `JSON.stringify` and `JSON.parse`. If you set the value to the empty string (""), the key/value pair is removed.

## Remarks

The data is specific to your plugin ID. Plugins with other IDs won't be able to read this data. You can retrieve it later by calling `getPluginData` with the same key. To find all data stored on a node or style by your plugin use `getPluginDataKeys`.

##### caution

⚠ The data is stored privately for stability, not security. It prevents other plugins from accessing with your data. It does not, however, prevent users from seeing the data given sufficient effort. For example, they could export the document as a .fig file and try to decode it.

##### caution

⚠ Data will become inaccessible if your plugin ID changes.

##### caution

⚠ Total entry size cannot exceed 100 kB.