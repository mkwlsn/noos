---
title: Strings
slug: react-strings
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f7f46b67261e1dc6
token_count: 71
chunk_title: Strings
chunk_slug: react-strings
chunk_index: 2
chunk_of_total: 14
parent_file: react.md
parent_slug: react
char_count: 247
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - react-introduction
  - react-figmaconnect
  - react-booleans
  - react-enums
  - react-instances
  - react-instance-children
  - react-nested-properties
  - react-text-content
  - react-classname
  - react-icons-as-jsx-elements
  - react-icons-as-react-components
  - react-icons-as-strings
  - react-accessing-icon-props-in-parent-component
compiler: noos-figma
---

Strings are the simplest value to map from Figma to code. Call `figma.string` with the Figma prop name you want to reference as a parameter. This is useful for things like button labels, header titles, tooltips, etc.

```
figma.string('Title')
```
