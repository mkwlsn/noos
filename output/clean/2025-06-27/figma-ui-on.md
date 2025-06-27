---
title: on
slug: figma-ui-on
source_file: plugin-api-figma-ui-on.html
source_url: https://www.figma.com/plugin-docs/api/figma-ui-on/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: ed02392bf569c7b5
token_count: 109
---
# on

Register a handler for incoming messages from the UI's `` window.

## Signature

### on(type: 'message', callback: MessageEventHandler): void

## Remarks

The `pluginMessage` argument contains the message passed by the call to `postMessage` on the UI side.

The `props` argument contains a `origin` property contains the origin of the document that sent the message. It is an advanced feature, mainly used for implementing OAuth.