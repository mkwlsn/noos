---
title: Introduction
slug: react-introduction
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: b269d019e00b9b81
token_count: 706
chunk_title: Introduction
chunk_slug: react-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: react.md
parent_slug: react
char_count: 2469
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - react-figmaconnect
  - react-icons-as-jsx-elements
compiler: noos-figma
---

# Connecting React components

This guide helps you connect your React (or React Native) components with Figma components using Code Connect. Code Connect for React works as both a standalone implementation and as an integration with existing [Storybook](/code-connect-docs/storybook/) files to enable easily maintaining both systems in parallel.

##### important

Important: Code Connect files are not executed. While they're written using real components from your codebase, the Figma CLI essentially treats code snippets as strings. This means you can, for example, use hooks without needing to mock data.

However, this also means that logical operators such as ternaries or conditionals will be output verbatim in your example code rather than executed to show the result. You aren't able to dynamically construct `figma.connect` calls in a for-loop, as another example.

If something you're trying to do is not possible because of this restriction in the API, we'd love to [hear your feedback](https://github.com/figma/code-connect/issues).

## Dynamic code snippets

If you completed [Getting Started with Code Connect](/code-connect-docs/quickstart-guide/), you should have a connected code snippet visible in Dev Mode when inspecting instances of that component. However, the code snippet doesn't yet reflect the entirety of the design.

To ensure the connected code snippet accurately reflects the design, you need to make use of property mappings. This enables you to link specific props in the design to props in code. In most cases, design and code props don't match 1:1, so it's necessary for us to configure this to ensure the correct code is shown in Dev Mode.

Here is a simple example for a button with a `label`, `disabled`, and `type` property.

```
import figma from '@figma/code-connect/react'figma.connect(Button, 'https://...', { props: { label: figma.string('Text Content'), disabled: figma.boolean('Disabled'), type: figma.enum('Type', { Primary: 'primary', Secondary: 'secondary', }), }, example: ({ disabled, label, type }) => { return ( {label} ) },})
```## The `figma` import

The `figma` import contains helpers for mapping all sorts of properties from design to code. They work for simple mappings where only the naming differs between Figma and code, as well as more complex mappings where the type differs. See the following reference for all the Code Connect helpers that exist and the ways you can use them to connect Figma and code.
