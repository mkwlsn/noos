---
title: Signature + Remarks
slug: figma-skipinvisibleinstancechildren-signature-remarks
source_file: plugin-api-figma-skipinvisibleinstancechildren.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-skipinvisibleinstancechildren/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: e85318e0e7ce775b
token_count: 472
chunk_title: Signature + Remarks
chunk_slug: figma-skipinvisibleinstancechildren-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-skipinvisibleinstancechildren.md
parent_slug: figma-skipinvisibleinstancechildren
char_count: 1650
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-skipinvisibleinstancechildren-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### skipInvisibleInstanceChildren: boolean

Accessing and modifying invisible nodes and their descendants inside instances can be slow with the plugin API.
This is especially true in large documents with tens of thousands of nodes where a call to [`findAll`](/plugin-docs/api/properties/nodes-findall/)
 might come across many of these invisible instance children.

If your plugin does not need access to these nodes, we recommend setting `figma.skipInvisibleInstanceChildren = true` as that often makes document traversal significantly faster.

When this flag is enabled, it will not be possible to access invisible nodes (and their descendants) inside instances. This has the following effects:

- `children` and methods such as `findAll` will exclude these nodes.
- `figma.getNodeByIdAsync` will return a promise containing null.
- `figma.getNodeById` will return null.
- Accessing a property on an existing node object for an invisible node will throw an error.

For example, suppose that a portion of the document tree looks like this:

Frame (visible) → Instance (visible) → Frame (invisible) → Text (visible)

The last two frame and text nodes cannot be accessed after setting `figma.skipInvisibleInstanceChildren = true`.

The benefit of enabling this flag is that document traversal methods, [`findAll`](/plugin-docs/api/properties/nodes-findall/)
 and [`findOne`](/plugin-docs/api/properties/nodes-findone/)
, can be up to several times faster in large documents that have invisible instance children.
[`findAllWithCriteria`](/plugin-docs/api/properties/nodes-findallwithcriteria/)
 can be up to hundreds of times faster in large documents.
