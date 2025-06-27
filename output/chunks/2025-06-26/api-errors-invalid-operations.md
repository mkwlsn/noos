---
title: Invalid Operations
slug: api-errors-invalid-operations
source_file: plugin-api-api-errors.html
source_url: 'https://www.figma.com/plugin-docs/api/api-errors/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: d3bfeb8187494188
token_count: 842
chunk_title: Invalid Operations
chunk_slug: api-errors-invalid-operations
chunk_index: 1
chunk_of_total: 2
parent_file: api-errors.md
parent_slug: api-errors
char_count: 2944
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - api-errors-introduction
compiler: noos-figma
---

Functions that take arguments and property setters always have restrictions on what kind of values you can give them. For example, `opacity` can only be set to a number, and it must also be a number between 0 and 1. So, if your plugin includes the below sample code, the following error will be returned: `Error: in set_opacity: Expected "opacity" to have type number but got string instead`.

```
figma.currentPage.selection[0].opacity = "test"
```### General Patterns of Errors

In general, errors returned by the plugin API will follow this pattern: Error: in : Expected to have type but got instead. Please refer to the signature of each method or property you're using to know what kind of values are accepted.

Here are some additional patterns of errors and invalid operations to be aware of:

- Writing to Node Properties: Plugins in Dev Mode cannot edit the layers in a file (otherwise referred to as "nodes"), with the exception of certain metadata. And across other editor types, some nodes are read-only. Therefore, attempting to edit properties that are not editable will result in this error: `Cannot write to internal and read-only nodes`. Learn more in the reference, as well as the Working in Dev Mode → and Working in FigJam → guides.
- Overriding Properties on Instance Nodes: Some properties on the InstanceNode type can be overridden, while others cannot be. For example, you can't change the order of children in an instance, or their position. Therefore, attempting to override a property that can't be overridden will result in this error: `This property cannot be overriden on an instance`. Learn more about applying overrides to instances →.
- Writing to Text Properties: Many text properties require the font of that TextNode to be loaded before they can be set. Therefore, attempting to write to text properties before the required font is loaded will result in the following error: `Cannot write to node with unloaded font "[font]"`. Learn more in the Working with Text → guide.
- Using properties and methods that aren't compatible with dynamic page loading: some synchronous operations in the Plugin API aren't compatible with dynamic page loading. If a plugin has the `"documentAccess": "dynamic-page"` manifest field, using these operations will trigger an error of type `Cannot call with documentAccess: dynamic-page. Use figma.getNodeByIdAsync() instead`. Learn more in the Migrating Plugins to Dynamically Load Pages → guide.
- Calling a method on an unloaded page: If the plugin manifest contains the `"documentAccess": "dynamic-page"` field, the plugin must explicitly load pages as needed. Using a method on a page has not been loaded will result in the following type of error: `Cannot access children on a page that has not been explicitly loaded. Remember to call `await page.loadAsync()`or`await figma.loadAllPagesAsync()` first`. Learn more in the Migrating Plugins to Dynamically Load Pages → guide.
