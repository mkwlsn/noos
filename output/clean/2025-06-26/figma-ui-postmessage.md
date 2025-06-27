---
title: postMessage
slug: figma-ui-postmessage
source_file: plugin-api-figma-ui-postmessage.html
source_url: https://www.figma.com/plugin-docs/api/figma-ui-postmessage/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 4aaa2460521bf9f6
token_count: 312
---
# postMessage

Sends a message to the UI's `` window.

## Signature

### postMessage(pluginMessage: any, options?: UIPostMessageOptions): void

## Parameters

### pluginMessage

This can be almost any data type or plain object, as long as it's a serializable object.

This is similar to saying that it should be possible to send the object over a network if it were necessary. You can send objects, arrays, numbers, strings, booleans, null, undefined, Date objects and Uint8Array objects. However, functions and prototype chains of objects will not be sent.

These restrictions are the same as the browser's `postMessage`: [click here](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) for more details.

### options

An object that may contain the following optional parameters:

- `origin`: An advanced option, mainly used for implementing OAuth. If the `origin` option is provided, the message will only be delivered to the iframe if the origin of the document inside the iframe matches the `origin`. This defaults to `'*'`, which allows the message to be passed to any document.

## Remarks

Read more about how to use this API in the [Creating a User Interface](/plugin-docs/creating-ui/) tutorial.