---
title: Complete Section
slug: data-types-complete-section
source_file: plugin-api-data-types.html
source_url: 'https://www.figma.com/plugin-docs/api/data-types/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: e35f5c5387aa1e8e
token_count: 261
chunk_title: Complete Section
chunk_slug: data-types-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: data-types.md
parent_slug: data-types
char_count: 911
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# Data Types

To assist you with writing your plugin code, we provide a TypeScript typings file for the entire Plugin API.

The typings file is a collection of type and interface declarations you can use for type checking. These declarations represent groups of related properties, parameters, and other data sets you’ll interact with.

You’ll see types and interfaces in a few places:

- To get and set properties on nodes or global objects
- Passed as parameters in a function
- Returned by a method

Types and interfaces come in varying levels of complexity.

- Choose one option from a list of values, like `BlendMode`.
- Support a mixture of required and optional properties. You’ll see a “?” at the end of any optional properties.
- Offer different properties based on the outcome you want to achieve, like `ConnectorEndpoint`.
- Support or reference other types and interfaces, like `Paint` and `Effect`.
