---
title: Install the widget typings + Add compiler options to your `tsconfig.json` file
slug: figma-createnodefromjsxasync-install-the-widget-typings-add-compiler-
source_file: plugin-api-figma-createnodefromjsxasync.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createnodefromjsxasync/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5656344e6b91514f
token_count: 261
chunk_title: Install the widget typings + Add compiler options to your `tsconfig.json` file
chunk_slug: figma-createnodefromjsxasync-install-the-widget-typings-add-compiler-
chunk_index: 1
chunk_of_total: 2
parent_file: figma-createnodefromjsxasync.md
parent_slug: figma-createnodefromjsxasync
char_count: 912
heading_level: h3
chunk_type: tutorial
merge_type: merged
tags: []
sibling_chunks:
  - figma-createnodefromjsxasync-introduction-createnodefromjsxasyncjsx-a
merged_titles:
  - Install the widget typings
  - Add compiler options to your `tsconfig.json` file
compiler: noos-figma
---

In the directory of your plugin run the following command to install the widget typings:

```
npm i --save-dev @figma/widget-typings
```

You need to make sure that you add the following properties to your `tsconfig.json` file.
This configures typescript to transpile any jsx that you use into a way that our plugin runtime understands.

```
"jsx": "react","jsxFactory": "figma.widget.h","jsxFragmentFactory": "figma.widget.Fragment",
```Here is an example completed `tsconfig.json` file with the appropriate properties
added.

```
{ "compilerOptions": { "jsx": "react", "jsxFactory": "figma.widget.h", "jsxFragmentFactory": "figma.widget.Fragment", "target": "es6", "lib": [ "es6" ], "strict": true, "typeRoots": [ "./node_modules/@types", "./node_modules/@figma" ] }}
```

##### info

If you are using a build system (ex babel, vite, esbuild). You might have to configure the jsx options for your build system.
