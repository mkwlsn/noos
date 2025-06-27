---
title: callback
slug: figma-codegen-on-callback
source_file: plugin-api-figma-codegen-on.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-codegen-on/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 1bd5242f552a56fb
token_count: 470
chunk_title: callback
chunk_slug: figma-codegen-on-callback
chunk_index: 1
chunk_of_total: 2
parent_file: figma-codegen-on.md
parent_slug: figma-codegen-on
char_count: 1645
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - figma-codegen-on-introduction
compiler: noos-figma
---

The callback that is called when the event is triggered.

## Remarks

This callback can be async if your plugin needs to do some data fetching or other async
operation to generate code.

##### info

`figma.showUI` is not allowed within the generate callback. Instead, if [`figma.showUI`](/plugin-docs/api/properties/figma-showui/)
 is required in the generate callback, the `showUI` call should be moved outside of the callback and [`figma.ui.postMessage`](/plugin-docs/api/properties/figma-ui-postmessage/)
 should be used within the callback instead. This ensures that the plugin is able to handle concurrent "generate" events.

A plugin can also register a callback to handle events when codegen preferences are modified.
This is useful for codegenPreferences that need to open an iframe to get more user input.

##### info

Only preferences with `itemType: "action"` will trigger the `"preferenceschange"`` callback.

The callback has a 15 second timeout. If the callback registered by `figma.codegen.on('generate')`
doesn't return a value within 15 seconds (for example, if the array of JSON objects takes too long to
construct), the operation ends and an error message is sent to the console:

Callback timeout error```
code generation timed out after 15 seconds
```Additionally, a notification appears in the Code section of the Inspect panel to alert the
plugin's user of the error:

Inspect panel timeout error```
 ran into an issueThis plugin is created by a third party and notmaintained by Figma, so to give feedback pleasereach out to the developer.
```The error in the Inspect panel includes a link to your plugin's community page.
