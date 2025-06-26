---
title: closePlugin
slug: figma-closeplugin
source_file: plugin-api-figma-closeplugin.html
source_url: https://www.figma.com/plugin-docs/api/figma-closeplugin/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: bac18a5a658b9d63
token_count: 607
---
# closePlugin

Closes the plugin. You should always call this function once your plugin is done running. When called, any UI that's open will be closed and any `setTimeout` or `setInterval` timers will be cancelled.

## Signature

### closePlugin(message?: string): void

## Parameters

### message

Optional -- display a visual bell toast with the message after the plugin closes.

## Remarks

Calling `figma.closePlugin()` disables callbacks and Figma APIs. It does not, however, abort the plugin. Any lines of Javascript after this call will also run. For example, consider the following plugin that expects the user to have one layer selected:

Simple closePlugin```
if (figma.currentPage.selection.length !== 1) { figma.closePlugin()}figma.currentPage.selection[0].opacity = 0.5
```This will not work. The last line will still run, but will throw an exception because access to `figma.currentPage` has been disabled. As such, it is not recommended to run any code after calling `figma.closePlugin()`.

A simple way to easily exit your plugin is to wrap your plugin in a function, instead of running code at the top-level, and always follow `figma.closePlugin()` with a `return` statement:

Early return```
function main() { if (figma.currentPage.selection.length !== 1) { figma.closePlugin() return } figma.currentPage.selection[0].opacity = 0.5}main()
```It's good practice to have all input validation done at the start of the plugin. However, there may be cases where the plugin may need to close after a chain of multiple function calls. If you expect to have to close the plugin deep within your code, but don't want to necessarily want the user to see an error, the example above will not be sufficient.

One alternative is to use a top-level try-catch statement. However, you will need to be responsible for making sure that there are no usages of try-catch between the top-level try-catch and the call to `figma.closePlugin()`, or to pass along the close command if necessary. Example:

Top-level try-catch```
const CLOSE_PLUGIN_MSG = "_CLOSE_PLUGIN_"function someNestedFunctionCallThatClosesThePlugin() { throw CLOSE_PLUGIN_MSG}function main() { someNestedFunctionCallThatClosesThePlugin()}try { main()} catch (e) { if (e === CLOSE_PLUGIN_MSG) { figma.closePlugin() } else { // >> DO NOT LEAVE THIS OUT << // If we caught any other kind of exception, // it's a real error and should be passed along. throw e }}
```