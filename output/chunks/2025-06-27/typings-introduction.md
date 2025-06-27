---
title: Introduction
slug: typings-introduction
source_file: plugin-api-typings.html
source_url: 'https://www.figma.com/plugin-docs/api/typings/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 0f39baa29a23408f
token_count: 280
chunk_title: Introduction
chunk_slug: typings-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: typings.md
parent_slug: typings
char_count: 977
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - typings-linting-for-typings
compiler: noos-figma
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
