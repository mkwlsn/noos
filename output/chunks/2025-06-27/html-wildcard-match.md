---
title: Wildcard match
slug: html-wildcard-match
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 24b4fc3a80c5852f
token_count: 96
chunk_title: Wildcard match
chunk_slug: html-wildcard-match
chunk_index: 6
chunk_of_total: 15
parent_file: html.md
parent_slug: html
char_count: 336
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - html-introduction
  - html-strings
  - html-booleans
  - html-enums
  - html-instances
  - html-instance-children
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

`figma.children()` can be used with a single wildcard '*' character, to partially match names or to render any nested child. Wildcards cannot be used with the array argument. Matches are case sensitive.

```
// map any (all) child instancesfigma.children('*')// map any child instances that starts with "Icon"figma.children('Icon*')
```
