---
title: Booleans
slug: html-booleans
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 70aedd8c0a167c34
token_count: 298
chunk_title: Booleans
chunk_slug: html-booleans
chunk_index: 2
chunk_of_total: 15
parent_file: html.md
parent_slug: html
char_count: 1043
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - html-introduction
  - html-strings
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

Booleans work similar to strings. However, Code Connect also provides helpers for mapping booleans in Figma to more complex types in code. For example you may want to map a Figma boolean to the existence of a specific sublayer in code. In addition to mapping boolean props, `figma.boolean` can be used to map boolean Variants in Figma. A boolean Variant is a Variant with only two options that are either "Yes"/"No", "True"/"False" or "On"/Off". For `figma.boolean` these values are normalized to `true` and `false`.

```
// simple mapping of boolean from figma to codefigma.boolean('Has Icon')// map a boolean value to one of two options of any typefigma.boolean('Has Icon', { true: html``, false: html``,})
```In some cases, you only want to render a certain prop if it matches some value in Figma. You can do this either by passing a partial mapping object, or setting the value to `undefined`.

```
// Don't render the prop if 'Has label' in figma is `false`figma.boolean('Has label', { true: figma.string('Label'), false: undefined,})
```
