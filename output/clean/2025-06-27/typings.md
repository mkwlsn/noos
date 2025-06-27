---
title: The Typings File
slug: typings
source_file: plugin-api-typings.html
source_url: https://www.figma.com/plugin-docs/api/typings/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: bd3b3bb9d3ee36a9
token_count: 386
---
# The Typings File

While the written documentation can help you explore the API and explain how it works, the typings file provide TypeScript annotation that can be used to assist you directly when coding. Used with an editor like VSCode, it provides API suggestions while you're typing and lets you know when you missed an edge case.

To get the latest typings, run `npm install --save-dev @figma/plugin-typings`.

You will also need to add the typings directory to your `tsconfig.json` using the `typeRoots` option. Plugins created from the default template will already have this included:

tsconfig.json```
{ "compilerOptions": { ... "typeRoots": [ "./node_modules/@types", "./node_modules/@figma" ] }}
```We strongly recommend enabling strict mode so that TypeScript can help you catch more errors eg. when a variable might be null. You can do this by adding the following option to your `tsconfig.json`.

tsconfig.json```
{ "compilerOptions": { ... "strict": true }}
```

### Linting for typings

Linting, the automated validation of source code for issues, can be very helpful for catching errors early in the development of your plugin. We provide a set of [typescript-eslint rules](https://github.com/figma/eslint-plugin-figma-plugins?tab=readme-ov-file#eslint-plugin-figma-plugins)
 on GitHub to help support plugin development. These rules can identify, and in many cases automatically fix, issues in your plugin code. The GitHub repository includes detailed instructions for installing and using the rules to test your plugin code.