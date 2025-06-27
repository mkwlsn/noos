---
title: Introduction
slug: figma-codegen-introduction
source_file: plugin-api-figma-codegen.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-codegen/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 5e263a3ddc53edb2
token_count: 301
chunk_title: Introduction
chunk_slug: figma-codegen-introduction
chunk_index: 0
chunk_of_total: 4
parent_file: figma-codegen.md
parent_slug: figma-codegen
char_count: 1052
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-codegen-ontype-preferenceschange-callback-event-
  - figma-codegen-oncetype-preferenceschange-callback-even
  - figma-codegen-preferences-codegenpreferences-readonly
compiler: noos-figma
---

# figma.codegen

##### info

This API is only available in Figma Dev Mode

Plugins in Dev Mode can extend Figma's native [code snippets](https://help.figma.com/hc/en-us/articles/15023124644247#Build_faster_with_customizable_code_snippets) to generate code for languages or frameworks that Figma doesn’t support, or to surface metadata that a front-end developer might find useful when implementing a design in code (e.g. where to import icons in a codebase or internationalization string extraction).

Plugins in Dev Mode specifically built for code generation ("codegen") appear in the Figma's native language dropdown. Once selected from this menu, the `figma.codegen.on("generate")` callback will get called any time the user's selection changes.

If you are building a plugin specifically for code generation, then you need to add the following to your manifest.

Add the following properties to your manifest.json```
{ "editorType": ["dev"], "capabilities": ["codegen"]}
```These are methods and properties available on the `figma.codegen` object:
