---
title: Instance children
slug: swiftui-instance-children
source_file: code-connect-swiftui.html
source_url: 'https://www.figma.com/code-connect-docs/swiftui/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: bff4883b65da9c61
token_count: 176
chunk_title: Instance children
chunk_slug: swiftui-instance-children
chunk_index: 2
chunk_of_total: 6
parent_file: swiftui.md
parent_slug: swiftui
char_count: 616
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - swiftui-introduction
  - swiftui-dynamic-code-snippets
  - swiftui-variant-mapping
  - swiftui-conditionally-applying-modifiers
  - swiftui-xcode-previews
compiler: noos-figma
---

While `@FigmaInstance` can be used to map child instances that are instance-swap properties in Figma, it's common for components in Figma to have child instances that aren't bound to an instance-swap prop. We can render the code snippets for these nested instances with the `@FigmaChildren` property wrapper. This helper takes the name of the instance layer as its parameter, rather than a Figma prop name. It's important to note that the nested instance also must be connected separately.

```
@FigmaChildren(layers: ["Header", "Row"])var contents = AnyView? = nilvar body: some View { VStack { self.contents }}
```
