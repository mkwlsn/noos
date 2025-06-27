---
title: Global Objects
slug: global-objects
source_file: plugin-api-global-objects.html
source_url: https://www.figma.com/plugin-docs/api/global-objects/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 6c31187ab1745583
token_count: 638
---
# Global Objects

You can access most of the Plugin API through the [`figma`](/plugin-docs/api/figma/)
 global object. You’ll find properties and functions that allow you to view, create, and update the contents of files.

- View and update file-level properties, like thumbnails, undo history, and version history
- Create, copy, or combine layers
- Adjust properties of existing layers
- Create, use, and manage local styles
- Access users in the file
- Import styles and component from external libraries

Example:

```
figma.createRectangle()figma.closePlugin()
```

##### tip

Tip: The [`figma`](/plugin-docs/api/figma/)
 global object is available in every Figma window. This means you can open the developer console in any file and access the API. This is a great way to explore the functionality of the API without having to create a plugin. You can also use this approach to test and debug your plugin code.

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

### __html__

If you assigned a file name to the [`"ui"`](/plugin-docs/manifest/#ui)
 field in your `manifest.json` file, you can use this variable to access the file’s contents.

Instead of including HTML within a JavaScript string, you can call `figma.showUI(__html__)` . As the HTML is in a separate file, your text editor will render the HTML with syntax highlighting.

### __uiFiles__

If you assigned a map to the [`"ui"`](/plugin-docs/manifest/#ui)
 field in your `manifest.json` file:

manifest.json```
"ui": { "main": "main.html", "secondary": "secondary.html"}
```you can use this variable to access each file's contents. You can then call `figma.showUI(__uiFiles__.main)`.

### fetch(url: string, init?: FetchOptions): Promise

Fetch a resource from the network, and return a promise with the response.

[View more →](/plugin-docs/api/properties/global-fetch/)