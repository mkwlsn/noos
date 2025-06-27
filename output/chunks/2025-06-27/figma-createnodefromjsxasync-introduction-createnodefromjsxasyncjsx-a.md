---
title: 'Introduction + createNodeFromJSXAsync(jsx: any): Promise'
slug: figma-createnodefromjsxasync-introduction-createnodefromjsxasyncjsx-a
source_file: plugin-api-figma-createnodefromjsxasync.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createnodefromjsxasync/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ebf7148e97401e68
token_count: 286
chunk_title: 'Introduction + createNodeFromJSXAsync(jsx: any): Promise'
chunk_slug: figma-createnodefromjsxasync-introduction-createnodefromjsxasyncjsx-a
chunk_index: 0
chunk_of_total: 2
parent_file: figma-createnodefromjsxasync.md
parent_slug: figma-createnodefromjsxasync
char_count: 1000
heading_level: h3
chunk_type: tutorial
merge_type: merged
tags: []
sibling_chunks:
  - figma-createnodefromjsxasync-install-the-widget-typings-add-compiler-
merged_titles:
  - Introduction
  - 'createNodeFromJSXAsync(jsx: any): Promise'
compiler: noos-figma
---

# createNodeFromJSXAsync

This API creates a new node using the JSX API used by widgets.

## Signature

## Remarks

This API is a convenient and ergonomic way to bulk create nodes:

```
const {Image, AutoLayout} = figma.widget;const node = await figma.createNodeFromJSXAsync( )
```

##### info

The JSX API does not support all features that exist on the equivalent SceneNode.
For example we don't support setting style ids or rendering instances via JSX.
You can always use `createNodeFromJSXAsync` to create a node and then set the properties you need on the created nodes.

Note that to use this API you must configure your build system to compile tsx.

There are 3 steps that you need to do to use this API in your plugin.

1. Install the `@figma/widget-typings` package.
2. Add the appropriate compiler options to your `tsconfig.json` file
3. Make sure that the file name for you code ends with the `.tsx` extension

##### info

If you are building a widget these should already be done for you.
