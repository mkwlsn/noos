---
title: Introduction
slug: global-objects-introduction
source_file: plugin-api-global-objects.html
source_url: 'https://www.figma.com/plugin-docs/api/global-objects/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 9ef7eaed5c614df9
token_count: 479
chunk_title: Introduction
chunk_slug: global-objects-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: global-objects.md
parent_slug: global-objects
char_count: 1674
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - global-objects-html
  - global-objects-uifiles
compiler: noos-figma
---

# Global Objects

You can access most of the Plugin API through the [`figma`](/plugin-docs/api/figma/) global object. You’ll find properties and functions that allow you to view, create, and update the contents of files.

- View and update file-level properties, like thumbnails, undo history, and version history
- Create, copy, or combine layers
- Adjust properties of existing layers
- Create, use, and manage local styles
- Access users in the file
- Import styles and component from external libraries

Example:

```
figma.createRectangle()figma.closePlugin()
```##### tip

Tip: The [`figma`](/plugin-docs/api/figma/) global object is available in every Figma window. This means you can open the developer console in any file and access the API. This is a great way to explore the functionality of the API without having to create a plugin. You can also use this approach to test and debug your plugin code.

There are several other global objects available. You can access these from methods on the `figma` global object:

- `figma.ui` to create a custom interface for your plugin
- `figma.codegen` to implement code generation in Dev Mode
- `figma.timer` to control the timer object in FigJam files
- `figma.viewport` to control the viewport: the area of the canvas that’s visible on screen
- `figma.clientStorage` to store data on a user’s local machine
- `figma.parameters` to accept parameters as input
- `figma.variables` to interact with variables
- `figma.teamLibrary` to interact with assets in a team library
- `figma.textreview` to interact with features only available to text review plugins

There are also global variables available across the Plugin API:
