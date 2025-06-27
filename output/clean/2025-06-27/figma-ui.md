---
title: figma.ui
slug: figma-ui
source_file: plugin-api-figma-ui.html
source_url: https://www.figma.com/plugin-docs/api/figma-ui/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: efa667fd424beaaa
token_count: 500
---
# figma.ui

These are methods and properties available on the `figma.ui` global object. A UI is created via [`figma.showUI`](/plugin-docs/api/properties/figma-showui/)
. See the [Creating a User Interface](/plugin-docs/creating-ui/)
 tutorial on how to use this API.

### show(): void

Makes the plugin's UI visible. Use this to show the UI if it was created using `figma.showUI(..., { visible: false })`, or after a call to `figma.ui.hide()`.

### hide(): void

Hides the current UI. The UI will still continue to run code and be able to send and receive messages. However, it is not rendered to the user.

### resize(width: number, height: number): void

Changes the size of the UI, after it has been created. Note that the size can also be set in the initial options. The minimum size is 70x0.

### reposition(x: number, y: number): void

Changes the position of the UI, after it has been created. Note that the position can also be set in the initial options.

### close(): void

Destroys the UI and its containing ``. Once this has been called, the code inside the iframe will be stopped and you can no longer send messages to and from it.

### postMessage(pluginMessage: any, options?: UIPostMessageOptions): void

Sends a message to the UI's `` window.

[View more →](/plugin-docs/api/properties/figma-ui-postmessage/)

### onmessage: MessageEventHandler | undefined

Register a handler for incoming messages from the UI's `` window.

[View more →](/plugin-docs/api/properties/figma-ui-onmessage/)

### on(type: 'message', callback: MessageEventHandler): void

Register a handler for incoming messages from the UI's `` window.

[View more →](/plugin-docs/api/properties/figma-ui-on/)

### once(type: 'message', callback: MessageEventHandler): void

Register a handler for incoming messages from the UI's `` window. Same as `figma.ui.on("message")`, but only gets called the first time.

### off(type: 'message', callback: MessageEventHandler): void

Removes a handler added via `figma.ui.on`.