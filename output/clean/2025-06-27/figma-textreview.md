---
title: figma.textreview
slug: figma-textreview
source_file: plugin-api-figma-textreview.html
source_url: https://www.figma.com/plugin-docs/api/figma-textreview/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 00238f5f38ebdb4f
token_count: 315
---
# figma.textreview

These are methods and properties available on the `figma.textreview` global object. They are responsible for interacting with features relating to text review plugins. For a more information read our in depth guide on [text review plugins](/plugin-docs/textreview-plugins/)
.

### requestToBeEnabledAsync(): Promise

This method will request your plugin to be enabled as a text review plugin for the user.
A modal will pop up that will ask the user if they want to enable the plugin for text review.
The promise returned by the function will be resolved if the user accepts in the dialog and will be rejected if the user cancels.
Note that to prevent spam the promise will be auto rejected if the user cancels the request multiple times in a given plugin run.

### requestToBeDisabledAsync(): Promise

This method will disable the plugin as a text review plugin if it is enabled. The promise will resolve if it has been successfully been disabled and reject if it wasn’t enabled in the first place.

### isEnabled: boolean [readonly]

This property is a readonly boolean that can be used to check if your plugin is enabled as a text review plugin for the user. It will be true if the plugin is enabled, and false if the plugin is disabled.