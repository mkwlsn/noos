---
title: Introduction
slug: no-parser-introduction
source_file: code-connect-no-parser.html
source_url: 'https://www.figma.com/code-connect-docs/no-parser/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 1d4427a42fd0aeb2
token_count: 228
chunk_title: Introduction
chunk_slug: no-parser-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: no-parser.md
parent_slug: no-parser
char_count: 795
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - no-parser-setup
  - no-parser-connecting-to-figma-nodes
compiler: noos-figma
---

# Writing Code Connect without a parser

This is a supplementary feature for handling complex use cases that aren't fully covered by the existing Code Connect APIs (React, HTML, Compose, SwiftUI). While most use cases can be handled by the standard APIs, you may have use cases when you need:

- Custom Property Transformations: When you need complex logic to transform component properties beyond simple mapping, like combining multiple properties into a single prop or applying conditional logic
- Cross-Component Communication: When components need to share data or state that isn't represented in the Figma hierarchy
- Custom Code Organization: When you need to control exactly how nested components are rendered, like flattening a deep component tree or reorganizing the component hierarchy
