---
title: notify
slug: figma-notify
source_file: plugin-api-figma-notify.html
source_url: https://www.figma.com/plugin-docs/api/figma-notify/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: db6e99703cc80102
token_count: 664
---
# notify

Shows a notification on the bottom of the screen.

## Signature

### notify(message: string, options?: NotificationOptions): NotificationHandler

## Parameters

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

## Remarks

The `notify` API is a convenient way to show a message to the user. These messages can be queued.

If the message includes a custom action button, it will be closed automatically when the plugin closes.

Calling `figma.notify` returns a `NotificationHandler` object. This object contains a single `handler.cancel()` method that can be used to remove the notification before it times out by itself. This is useful if the notification becomes no longer relevant.

```
interface NotificationHandler { cancel: () => void}
```An alternative way to show a message to the user is to pass a message to the [`figma.closePlugin`](/plugin-docs/api/properties/figma-closeplugin/)
 function.