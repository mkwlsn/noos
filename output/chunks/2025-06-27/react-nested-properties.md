---
title: Nested properties
slug: react-nested-properties
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 0cbafb01ad729b0c
token_count: 310
chunk_title: Nested properties
chunk_slug: react-nested-properties
chunk_index: 7
chunk_of_total: 14
parent_file: react.md
parent_slug: react
char_count: 1083
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - react-introduction
  - react-figmaconnect
  - react-strings
  - react-booleans
  - react-enums
  - react-instances
  - react-instance-children
  - react-text-content
  - react-classname
  - react-icons-as-jsx-elements
  - react-icons-as-react-components
  - react-icons-as-strings
  - react-accessing-icon-props-in-parent-component
compiler: noos-figma
---

When you don't want to connect a child component, but instead want to map its properties on the parent level, you can use `figma.nestedProps()`. This helper takes the name of the layer as the first parameter, and a mapping object as the second parameter. These props can then be referenced in the `example` function. `nestedProps` will always select a single instance, and cannot be used to map multiple children.

```
// map the properties of a nested instance named "Button Shape"figma.connect(Button, "https://...", { props: { buttonShape: figma.nestedProps('Button Shape', { size: figma.enum({ ... }), }) }, example: ({ buttonShape }) => }
```A common pattern is to use `nestedProps` to access a conditionally hidden layer. This can be achieved by using `nestedProps` in conjunction with `boolean`, and passing a fallback object in the `false` case.

```
figma.connect(Button, "https://...", { props: { childProps: figma.boolean("showChild", { true: figma.nestedProps('Child', { label: figma.string("Label") }, false: { label: undefined } }) }, example: ({ childProps }) => }
```
