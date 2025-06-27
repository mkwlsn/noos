---
title: Parameters
slug: figma-notify-parameters
source_file: plugin-api-figma-notify.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-notify/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 44d2b8262111d663
token_count: 512
chunk_title: Parameters
chunk_slug: figma-notify-parameters
chunk_index: 0
chunk_of_total: 2
parent_file: figma-notify.md
parent_slug: figma-notify
char_count: 1791
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-notify-remarks
compiler: noos-figma
---

### message

The message to show. It is limited to 100 characters. Longer messages will be truncated.

### options

An optional argument with the following optional parameters:

```
interface NotificationOptions { timeout?: number; error?: boolean; onDequeue?: (reason: NotifyDequeueReason) => void button?: { text: string action: () => boolean | void }}
```- `timeout`: How long the notification stays up in milliseconds before closing. Defaults to 3 seconds when not specified. Set the timeout to `Infinity` to make the notification show indefinitely until the plugin is closed.
- `error`: If true, display the notification as an error message, with a different color.
- `onDequeue`: A function that will run when the notification is dequeued. This can happen due to the timeout being reached, the notification being dismissed by the user or Figma, or the user clicking the notification's `button`.The function is passed a `NotifyDequeueReason`, which is defined as the following:
- The function is passed a `NotifyDequeueReason`, which is defined as the following:

```
 type NotifyDequeueReason = 'timeout' | 'dismiss' | 'action_button_click'
```- `button`: An object representing an action button that will be added to the notification.`text`: The message to display on the action button.`action`: The function to execute when the user clicks the button. If this function returns `false`, the message will remain when the button is clicked. Otherwise, clicking the action button dismisses the notify message.
- `text`: The message to display on the action button.
- `action`: The function to execute when the user clicks the button. If this function returns `false`, the message will remain when the button is clicked. Otherwise, clicking the action button dismisses the notify message.
