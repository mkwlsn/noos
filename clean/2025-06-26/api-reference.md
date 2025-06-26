---
title: API Reference
slug: api-reference
source_file: plugin-api-api-reference.html
source_url: https://www.figma.com/plugin-docs/api/api-reference/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: a0ae3c0cb968bf97
token_count: 972
---
# API Reference

The API reference includes the resources and materials to navigate the Plugin API. You can explore the Plugin API using any of the entry points in the sidebar.

If you’re new to Figma or plugins, we’ve outlined some of the key resources involved below. Make sure to read through our development guides for tips and best practices!

## Global objects and variables

You can access most of the Plugin API through the [`figma`](/plugin-docs/api/figma/) global object and its sub-objects. You’ll find properties and functions that allow you to view, create, and update the contents of files.

There are also global variables available across the Plugin API: [`__html__`](/plugin-docs/api/global-objects/#html) and [`__uiFiles__`](/plugin-docs/api/global-objects/#uifiles). You can use these variable to access the contents of your ui files.

[Explore global objects and variables →](/plugin-docs/api/global-objects/)

## Node types

In Figma, nodes are the way we represent the contents of a file. Every layer in a Figma design or FigJam file corresponds to a node.

Each node supports a range of properties. Some properties are universal, some are shared between nodes and some are unique to specific node types.

Select a [Node type](/plugin-docs/api/nodes/) to see which properties are supported on that node.

## Node properties

Some node properties are supported across node types. You can use the [Shared Node Properties](/plugin-docs/api/node-properties/) section to explore these shared properties. We show which node types a property is supported on.

## Data types

To assist you with writing your plugin code, we provide a TypeScript [typings file](/plugin-docs/api/typings/) for the entire Plugin API. The typings file is a collection of type and interface declarations you can use for type checking.

These declarations represent groups of related properties, parameters, and other data you’ll interact with in Figma. You’ll see types and interfaces in a few places in the API reference.

- To get and set properties on nodes or global objects
- Passed as parameters in a function
- Returned by a method

You can access types and interfaces from any properties and methods that use them. Or, you can explore types and interfaces in the [Data Types](/plugin-docs/api/data-types/) section of the sidebar.

## Other resources

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