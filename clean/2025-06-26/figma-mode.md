---
title: mode
slug: figma-mode
source_file: plugin-api-figma-mode.html
source_url: https://www.figma.com/plugin-docs/api/figma-mode/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: f452fe4d8bacb845
token_count: 380
---
# mode

Return the context the plugin is current running in.

- `default` - The plugin is running as a normal plugin.
- `textreview` - The plugin is running to provide text review functionality.
- `inspect` - The plugin is running in the Inspect panel in Dev Mode.
- `codegen` - The plugin is running in the Code section of the Inspect panel in Dev Mode.
- `linkpreview` - The plugin is generating a link preview for a Dev resource in Dev Mode.
- `auth` - The plugin is running to authenticate a user in Dev Mode.

##### caution

The `linkpreview` and `auth` modes are only available to partner and Figma-owned plugins.

## Signature

### mode: 'default' | 'textreview' | 'inspect' | 'codegen' | 'linkpreview' | 'auth' [readonly]

## Remarks

Here’s a simplified example where you can create an if statement in a plugin that has one set of functionality when it is run in `Dev Mode`, and another set of functionality when run in Figma design:

Code sample to determine editorType and mode```
if (figma.editorType === "dev") { // Read the document and listen to API events if (figma.mode === "inspect") { // Running in inspect panel mode } else if (figma.mode === "codegen") { // Running in codegen mode }} else if (figma.editorType === "figma") { // If the plugin is run in Figma design, edit the document if (figma.mode === 'textreview') { // Running in text review mode }} else if (figma.editorType === "figjam") { // Do FigJam only operations if (figma.mode === 'textreview') { // Running in text review mode }}
```