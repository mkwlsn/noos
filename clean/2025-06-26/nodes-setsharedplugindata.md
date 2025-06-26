---
title: setSharedPluginData
slug: nodes-setsharedplugindata
source_file: plugin-api-nodes-setsharedplugindata.html
source_url: https://www.figma.com/plugin-docs/api/nodes-setsharedplugindata/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 5b77e387f0294ff3
token_count: 631
---
# setSharedPluginData

Lets you store custom information on any node or style, public to all plugins. The total size of your entry (`namespace`, `key`, `value`) cannot exceed 100 kB.

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

### setSharedPluginData(namespace: string, key: string, value: string): void

## Parameters

### namespace

A unique string to identify your plugin and avoid key collisions with other plugins. The namespace must be at least 3 alphanumeric characters.

### key

The key under which to store the data. This is similar to writing to a plain object via `obj[key] = value`.

### value

The data you want to store. If you want to store a value type other than a string, encode it as a JSON string first via `JSON.stringify` and `JSON.parse`. If you set the value to the empty string (""), the key/value pair is removed.

## Remarks

This lets you store custom information on any node or style. You can retrieve it later by calling [`getSharedPluginData`](/plugin-docs/api/node-properties/#getsharedplugindata) with the same namespace and key. To find all data stored on a node or style in a particular namespace, use [`getSharedPluginDataKeys`](/plugin-docs/api/node-properties/#getsharedplugindatakeys).

Any data you write using this API will be readable by any plugin. The intent is to allow plugins to interoperate with each other. Use [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/) instead if you don't want other plugins to be able to read your data.

You must also provide a `namespace` argument to avoid key collisions with other plugins. This argument is mandatory to prevent multiple plugins from using generic key names like `data` and overwriting one another. We recommend passing a value that identifies your plugin. This namespace can be given to authors of other plugins so that they can read data from your plugin.

##### caution

⚠ Total entry size cannot exceed 100 kB.