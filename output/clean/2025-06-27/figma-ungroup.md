---
title: ungroup
slug: figma-ungroup
source_file: plugin-api-figma-ungroup.html
source_url: https://www.figma.com/plugin-docs/api/figma-ungroup/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: e13099c343ae0e21
token_count: 196
---
# ungroup

Ungroups the given `node`, moving all of `node`'s children into `node`'s parent and removing `node`. Returns an array of nodes that were children of `node`.

## Signature

### ungroup(node: SceneNode & ChildrenMixin): Array

## Parameters

### node

The node to ungroup.

## Remarks

This API is roughly the equivalent of pressing Ctrl-Shift-G/⌘⇧G in the editor, but ungroups the given node rather than all nodes in the current selection.

If the ungrouped node is part of the current selection, the ungrouped node's children will become part of the selection. Otherwise the selection is unchanged.

## Possible error cases

`Instances cannot be ungrouped`

`Components cannot be ungrouped`

`Only group-like nodes can be ungrouped`

`The given node cannot be ungrouped`