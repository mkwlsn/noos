---
title: createNodeFromJSXAsync
slug: figma-createnodefromjsxasync
source_file: plugin-api-figma-createnodefromjsxasync.html
source_url: https://www.figma.com/plugin-docs/api/figma-createnodefromjsxasync/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 0389f3bb70e986dd
token_count: 554
---
# createNodeFromJSXAsync

This API creates a new node using the JSX API used by widgets.

## Signature

### createNodeFromJSXAsync(jsx: any): Promise

## Remarks

This API is a convenient and ergonomic way to bulk create nodes:

```
const {Image, AutoLayout} = figma.widget;const node = await figma.createNodeFromJSXAsync( )
```##### info

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

### Install the widget typings

In the directory of your plugin run the following command to install the widget typings:

```
npm i --save-dev @figma/widget-typings
```### Add compiler options to your `tsconfig.json` file

You need to make sure that you add the following properties to your `tsconfig.json` file.
This configures typescript to transpile any jsx that you use into a way that our plugin runtime understands.

```
"jsx": "react","jsxFactory": "figma.widget.h","jsxFragmentFactory": "figma.widget.Fragment",
```Here is an example completed `tsconfig.json` file with the appropriate properties
added.

```
{ "compilerOptions": { "jsx": "react", "jsxFactory": "figma.widget.h", "jsxFragmentFactory": "figma.widget.Fragment", "target": "es6", "lib": [ "es6" ], "strict": true, "typeRoots": [ "./node_modules/@types", "./node_modules/@figma" ] }}
```##### info

If you are using a build system (ex babel, vite, esbuild). You might have to configure the jsx options for your build system.

### Change file extension

For plugins our default template puts your code in a `code.ts` file. You should rename this to `code.tsx` so that you can use jsx in your plugin.