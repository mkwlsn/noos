---
title: showUI
slug: figma-showui
source_file: plugin-api-figma-showui.html
source_url: https://www.figma.com/plugin-docs/api/figma-showui/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 45891212ceeca97e
token_count: 543
---
# showUI

Enables you to render UI to interact with the user, or simply to access browser APIs. This function creates a modal dialog with an `` containing the HTML markup in the `html` argument.

## Signature

### showUI(html: string, options?: ShowUIOptions): void

## Parameters

### html

The HTML to insert into the iframe. You can pass in the HTML code as a string here, but this will often be the global value [`__html__`](/plugin-docs/api/global-objects/#html)
.

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

## Remarks

The easiest way to use this API is to load the HTML file defined in the manifest. This enables writing a separate HTML file which can be accessed through the [`__html__`](/plugin-docs/api/global-objects/#html)
 global variable.

If the `` UI is already showing when this function is called, the previous UI will be closed before the new one is displayed.

## Usage Examples

Example usage```
figma.showUI( "Hello from Figma", { width: 400, height: 200, title: "My title" })figma.showUI( "Hello from Figma", { width: 400, height: 200, title: "My title", position: { x: 100, y: 100 } })figma.showUI(__html__)
```