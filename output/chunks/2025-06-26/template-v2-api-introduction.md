---
title: Introduction
slug: template-v2-api-introduction
source_file: code-connect-template-v2-api.html
source_url: 'https://www.figma.com/code-connect-docs/template-v2-api/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: eb3a0f7fa6278887
token_count: 770
chunk_title: Introduction
chunk_slug: template-v2-api-introduction
chunk_index: 0
chunk_of_total: 4
parent_file: template-v2-api.md
parent_slug: template-v2-api
char_count: 2695
heading_level: h4
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - template-v2-api-findinstancelayername-string-opts-select
  - template-v2-api-findconnectedinstancesselectorfn-node-in
  - template-v2-api-textcontent-string
compiler: noos-figma
---

# Template V2 API Reference

The Template V2 API allows you to create custom Code Connect templates that control how your components are displayed in Figma's Code Connect panel. This API is primarily used in two ways:

1. Custom Parsers: When building a parser for a language or framework not supported by default. See the Custom Parsers documentation to get started with implementing your own parser.
2. Without a Parser: When you need direct control over how specific components are rendered, without writing a full parser. Check out the Documentation for a simpler way to customize component rendering.

This reference documents the complete API surface, from basic template structure to advanced features like property access and layer finding. If you're just getting started, we recommend first reading the Custom Parsers or Raw Templates guides above.

## `figma`

This is the core object that provides access to your Figma file's data. You can import it in your template file using:

```
const figma = require('figma')
```### Export Format

Templates should export an object with the following format:

```
export default { example: figma.code``, // The rendered code sections id?: string, // Your custom identifier (also known as a Code Connect ID) to connect this template with a Figma instance metadata?: { /** * Controls how nested components appear in the Code Connect panel: * - true: Component code is shown directly in its parent * Example: Small icons or labels within a button * - false: Component appears as a pill that expands on click * Example: Complex components like modals or forms */ nestable?: boolean, /** * Data that will be available to components that use this instance. * See the executeTemplate() method below for details on accessing these props. */ props?: Record, }}
```The `id` field lets you define a custom identifier, also known as a Code Connect ID, for this template. You can use any string value you choose - this ID is how other templates will find and reference this instance using methods like `findConnectedInstance(id)`. This is particularly useful when you need to:

The `metadata` field contains optional display settings:

- `nestable`: When `true`, shows nested component code inline with its parent; when `false`, shows nested components as expandable pills
- `props`: Makes data available to parent templates through `executeTemplate().metadata.props`

### `figma.selectedInstance: InstanceHandle`

The `selectedInstance` object represents the currently selected layer in the Figma document. This provides access to various properties and methods that allow you to interact with the selected layer.

## `InstanceHandle` Object

### Properties
