---
title: Xcode previews
slug: swiftui-xcode-previews
source_file: code-connect-swiftui.html
source_url: 'https://www.figma.com/code-connect-docs/swiftui/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 8f608049a5d9a4b6
token_count: 86
chunk_title: Xcode previews
chunk_slug: swiftui-xcode-previews
chunk_index: 3
chunk_of_total: 4
parent_file: swiftui.md
parent_slug: swiftui
char_count: 300
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - swiftui-introduction
  - swiftui-dynamic-code-snippets
  - swiftui-instance-children
compiler: noos-figma
---

Code Connect integrates seamlessly with Xcode preview so you don't need to write multiple examples for how to use your component. Simply use the connection struct as a preview itself:

```
struct Button : View { ... }struct Button_connection : FigmaConnect { ... }#Preview { Button_connection() }
```
