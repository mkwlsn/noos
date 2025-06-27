---
title: commitUndo
slug: figma-commitundo
source_file: plugin-api-figma-commitundo.html
source_url: https://www.figma.com/plugin-docs/api/figma-commitundo/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 3e04d512004292bc
token_count: 170
---
# commitUndo

Commits actions to undo history. This does not trigger an undo.

## Signature

### commitUndo(): void

## Remarks

By default, plugin actions are not committed to undo history. Call `figma.commitUndo()` so that triggered
undos can revert a subset of plugin actions.

For example, after running the following plugin code, the first triggered undo will undo both the rectangle and the ellipse:

```
figma.createRectangle();figma.createEllipse();figma.closePlugin();
```Whereas if we call `commitUndo()` in our plugin, the first triggered undo will only undo the ellipse:

```
figma.createRectangle();figma.commitUndo();figma.createEllipse();figma.closePlugin();
```