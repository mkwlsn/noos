---
title: Conditionally applying modifiers
slug: swiftui-conditionally-applying-modifiers
source_file: code-connect-swiftui.html
source_url: 'https://www.figma.com/code-connect-docs/swiftui/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 0f68cdf9c2e78e25
token_count: 194
chunk_title: Conditionally applying modifiers
chunk_slug: swiftui-conditionally-applying-modifiers
chunk_index: 4
chunk_of_total: 6
parent_file: swiftui.md
parent_slug: swiftui
char_count: 678
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - swiftui-introduction
  - swiftui-dynamic-code-snippets
  - swiftui-instance-children
  - swiftui-variant-mapping
  - swiftui-xcode-previews
compiler: noos-figma
---

Certain properties in Figma may map to specific modifiers rather than a function parameter. You can use the `figmaApply` helper to represent these cases. For example:

```
struct MyComponent_doc: FigmaConnect { ... @FigmaEnum("Type", mapping: ["Primary": true]) var isPrimary: Bool = false var body: some View { MyComponent() .figmaApply(isPrimary) { $0.tint(.blue) } elseApply { $0.backgroundColor(.clear) } }}
```In the previous example, if the value of `State = Primary` in Figma, then the code is:

```
MyComponent() .tint(.blue)
```Otherwise, it will be:

```
MyComponent() .backgroundColor(.clear)
```The `elseApply` parameter can be omitted in order to not show anything.
