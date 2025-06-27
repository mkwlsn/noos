---
title: Instance children
slug: compose-instance-children
source_file: code-connect-compose.html
source_url: 'https://www.figma.com/code-connect-docs/compose/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 44bc29c11c3e6d49
token_count: 178
chunk_title: Instance children
chunk_slug: compose-instance-children
chunk_index: 2
chunk_of_total: 4
parent_file: compose.md
parent_slug: compose
char_count: 622
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - compose-introduction
  - compose-dynamic-code-snippets
  - compose-variant-mapping
compiler: noos-figma
---

While `@FigmaInstance` can be used to map child instances that are instance-swap properties in Figma, it's common for components in Figma to have child instances that aren't bound to an instance-swap prop. We can render the code snippets for these nested instances with the `@FigmaChildren` property wrapper. This helper takes the name of the instance layer as its parameter, rather than a Figma prop name. It's important to note that the nested instance also must be connected separately.

```
@FigmaChildren("Header", "Row")val contents : @Composable () -> Unit = { }@Composablefun ListExample() { List { contents }}
```
