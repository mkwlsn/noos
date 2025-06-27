---
title: Remarks
slug: figma-commitundo-remarks
source_file: plugin-api-figma-commitundo.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-commitundo/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 38103e57dcb3ae53
token_count: 157
chunk_title: Remarks
chunk_slug: figma-commitundo-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-commitundo.md
parent_slug: figma-commitundo
char_count: 548
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

By default, plugin actions are not committed to undo history. Call `figma.commitUndo()` so that triggered
undos can revert a subset of plugin actions.

For example, after running the following plugin code, the first triggered undo will undo both the rectangle and the ellipse:

```
figma.createRectangle();figma.createEllipse();figma.closePlugin();
```Whereas if we call `commitUndo()` in our plugin, the first triggered undo will only undo the ellipse:

```
figma.createRectangle();figma.commitUndo();figma.createEllipse();figma.closePlugin();
```
