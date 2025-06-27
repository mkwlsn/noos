---
title: Remarks
slug: figma-notify-remarks
source_file: plugin-api-figma-notify.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-notify/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 0fb3660453427711
token_count: 194
chunk_title: Remarks
chunk_slug: figma-notify-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-notify.md
parent_slug: figma-notify
char_count: 678
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-notify-parameters
compiler: noos-figma
---

The `notify` API is a convenient way to show a message to the user. These messages can be queued.

If the message includes a custom action button, it will be closed automatically when the plugin closes.

Calling `figma.notify` returns a `NotificationHandler` object. This object contains a single `handler.cancel()` method that can be used to remove the notification before it times out by itself. This is useful if the notification becomes no longer relevant.

```
interface NotificationHandler { cancel: () => void}
```An alternative way to show a message to the user is to pass a message to the [`figma.closePlugin`](/plugin-docs/api/properties/figma-closeplugin/)
 function.
