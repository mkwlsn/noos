---
title: Other resources
slug: api-reference-other-resources
source_file: plugin-api-api-reference.html
source_url: 'https://www.figma.com/plugin-docs/api/api-reference/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: d0b394223bd1af5a
token_count: 439
chunk_title: Other resources
chunk_slug: api-reference-other-resources
chunk_index: 5
chunk_of_total: 6
parent_file: api-reference.md
parent_slug: api-reference
char_count: 1536
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - api-reference-introduction
  - api-reference-global-objects-and-variables
  - api-reference-node-types
  - api-reference-node-properties
  - api-reference-data-types
compiler: noos-figma
---

### Plugin manifest

Every plugin must define a `manifest.json` file that describes the plugin. Figma creates a simple manifest when you register a plugin for development.

You can extend this manifest to take advantage of optional functionality. For example: accept plugin parameters, or create private plugins in an organization.

[View plugin manifest properties →](/plugin-docs/manifest/)

### Typings file

The API reference and documentation explain the structure of the the API and how it works. This is great when exploring the API or understanding supported features and functions.

We provide a [typings file](/plugin-docs/api/typings/) with type annotations for the entire Plugin API. When used with an editor, like [VSCode](https://code.visualstudio.com/), this provides you with suggestions as you code. This helps to reduce errors and catch edge cases.

We also provide a set of [typescript-eslint rules](https://github.com/figma/eslint-plugin-figma-plugins?tab=readme-ov-file#eslint-plugin-figma-plugins) that ensure you're correctly using the Plugin API. The GitHub repository includes detailed instructions for installing and using the rules to test your plugin code.

You don’t have to use TypeScript when developing plugins, but we strongly recommend you do! The API reference and all associated guides use it.

[Set up TypeScript →](/plugin-docs/typescript/)

##### tip

💡 We update the typings file any time we make changes to the API. To get the latest typings, run `npm install --save-dev @figma/plugin-typings`.
