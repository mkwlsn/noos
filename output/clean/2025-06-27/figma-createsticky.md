---
title: createSticky
slug: figma-createsticky
source_file: plugin-api-figma-createsticky.html
source_url: https://www.figma.com/plugin-docs/api/figma-createsticky/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 36746312ed4216f2
token_count: 137
---
# createSticky

##### info

This API is only available in FigJam

Creates a new sticky. The behavior is similar to using the `S` shortcut followed by a click.

## Signature

### createSticky(): StickyNode

## Remarks

By default, the new node has constant width and height both at 240, and is parented under `figma.currentPage`.

Create a sticky with text```
(async () => { const sticky = figma.createSticky() // Load the font before setting characters await figma.loadFontAsync(sticky.text.fontName) sticky.text.characters = 'Hello world!'})()
```