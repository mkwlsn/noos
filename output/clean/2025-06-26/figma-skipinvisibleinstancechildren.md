---
title: skipInvisibleInstanceChildren
slug: figma-skipinvisibleinstancechildren
source_file: plugin-api-figma-skipinvisibleinstancechildren.html
source_url: https://www.figma.com/plugin-docs/api/figma-skipinvisibleinstancechildren/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 00c7911029163394
token_count: 501
---
# skipInvisibleInstanceChildren

When enabled, causes all node properties and methods to skip over invisible nodes (and their descendants) inside [`instances`](/plugin-docs/api/InstanceNode/).
This makes operations like document traversal much faster.

##### info

Defaults to true in Figma Dev Mode and false in Figma and FigJam

## Signature

### skipInvisibleInstanceChildren: boolean

## Remarks

Accessing and modifying invisible nodes and their descendants inside instances can be slow with the plugin API.
This is especially true in large documents with tens of thousands of nodes where a call to [`findAll`](/plugin-docs/api/properties/nodes-findall/) might come across many of these invisible instance children.

If your plugin does not need access to these nodes, we recommend setting `figma.skipInvisibleInstanceChildren = true` as that often makes document traversal significantly faster.

When this flag is enabled, it will not be possible to access invisible nodes (and their descendants) inside instances. This has the following effects:

- `children` and methods such as `findAll` will exclude these nodes.
- `figma.getNodeByIdAsync` will return a promise containing null.
- `figma.getNodeById` will return null.
- Accessing a property on an existing node object for an invisible node will throw an error.

For example, suppose that a portion of the document tree looks like this:

Frame (visible) → Instance (visible) → Frame (invisible) → Text (visible)

The last two frame and text nodes cannot be accessed after setting `figma.skipInvisibleInstanceChildren = true`.

The benefit of enabling this flag is that document traversal methods, [`findAll`](/plugin-docs/api/properties/nodes-findall/) and [`findOne`](/plugin-docs/api/properties/nodes-findone/), can be up to several times faster in large documents that have invisible instance children.
[`findAllWithCriteria`](/plugin-docs/api/properties/nodes-findallwithcriteria/) can be up to hundreds of times faster in large documents.