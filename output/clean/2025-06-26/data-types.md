---
title: Data Types
slug: data-types
source_file: plugin-api-data-types.html
source_url: https://www.figma.com/plugin-docs/api/data-types/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: e35f5c5387aa1e8e
token_count: 228
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