---
title: Parameters
slug: figma-showui-parameters
source_file: plugin-api-figma-showui.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-showui/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 7ee0b2036fcc6a30
token_count: 362
chunk_title: Parameters
chunk_slug: figma-showui-parameters
chunk_index: 1
chunk_of_total: 4
parent_file: figma-showui.md
parent_slug: figma-showui
char_count: 1264
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-showui-introduction-signature
  - figma-showui-remarks
  - figma-showui-usage-examples
compiler: noos-figma
---

### html

The HTML to insert into the iframe. You can pass in the HTML code as a string here, but this will often be the global value [`__html__`](/plugin-docs/api/global-objects/#html).

### options

An object that may contain the following optional parameters:

- `visible`: Whether the UI starts out displayed to the user. Defaults to `true`. You can use `figma.ui.show()` and `figma.ui.hide()` to change the visibility later.
- `width`: The width of the UI. Defaults to 300. Minimum is 70. Can be changed later using `figma.ui.resize(width, height)`
- `height`: The height of the UI. Defaults to 200. Minimum is 0. Can be changed later using `figma.ui.resize(width, height)`
- `title`: The title of the UI window. Defaults to the plugin name.
- `position`: The position of the UI window. Defaults to the last position of the iframe or the center of the viewport. If specified, expects an X/Y coordinate in the canvas space (i.e matches x/y values returned by `.x` and `.y`)
- `themeColors`: Defaults to `false`. When enabled, CSS variables will be added to the plugin iframe to allow support for light and dark themes.

##### info

If the position specified is outside of the user's viewport, the iframe will be moved so that it remains in the user's viewport.
