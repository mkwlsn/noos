---
title: Nested properties
slug: html-nested-properties
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 3207613caa507d03
token_count: 185
chunk_title: Nested properties
chunk_slug: html-nested-properties
chunk_index: 7
chunk_of_total: 15
parent_file: html.md
parent_slug: html
char_count: 645
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - html-introduction
  - html-strings
  - html-booleans
  - html-enums
  - html-instances
  - html-instance-children
  - html-wildcard-match
  - html-text-content
  - html-classname
  - html-web-components-example
  - html-angular-example
  - html-vue-example
  - html-lit-example
  - html-icons-as-strings
compiler: noos-figma
---

When you don't want to connect a child component, but instead want to map its properties on the parent level, you can use `figma.nestedProps()`. This helper takes the name of the layer as the first parameter, and a mapping object as the second parameter. These props can then be referenced in the `example` function. `nestedProps` will always select a single instance, and cannot be used to map multiple children.

```
// map the properties of a nested instance named "Button Shape"figma.connect("https://...", { props: { buttonShape: figma.nestedProps('Button Shape', { size: figma.enum({ ... }), }) }, example: ({ buttonShape }) => html``}
```
