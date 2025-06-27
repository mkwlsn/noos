---
title: Strings
slug: html-strings
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: eb4d08d4563b85b0
token_count: 72
chunk_title: Strings
chunk_slug: html-strings
chunk_index: 1
chunk_of_total: 15
parent_file: html.md
parent_slug: html
char_count: 249
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - html-introduction
  - html-booleans
  - html-enums
  - html-instances
  - html-instance-children
  - html-wildcard-match
  - html-nested-properties
  - html-text-content
  - html-classname
  - html-web-components-example
  - html-angular-example
  - html-vue-example
  - html-lit-example
  - html-icons-as-strings
compiler: noos-figma
---

Strings are the simplest value to map from Figma to code. Simply call `figma.string` with the Figma prop name you want to reference as a parameter. This is useful for things like button labels, header titles, tooltips.

```
figma.string('Title')
```
