---
title: Introduction
slug: html-introduction
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: dfe159d3e4e010fe
token_count: 812
chunk_title: Introduction
chunk_slug: html-introduction
chunk_index: 0
chunk_of_total: 15
parent_file: html.md
parent_slug: html
char_count: 2841
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - html-strings
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

# Connecting Web components

This guide helps you connect your HTML components to Figma components using Code Connect. This lets you document Web Components, Angular, Vue, and any other framework that uses HTML syntax. See the [examples](#examples)
 section for examples of using Code Connect with various HTML-based frameworks.

##### important

Important: Code Connect files are not executed. While they're written using real components from your codebase, the Figma CLI essentially treats code snippets as strings. This means you can, for example, use hooks without needing to mock data.

However, this also means that logical operators such as ternaries or conditionals will be output verbatim in your example code rather than executed to show the result. You aren't able to dynamically construct `figma.connect` calls in a for-loop, as another example.

If something you're trying to do is not possible because of this restriction in the API, we'd love to [hear your feedback](https://github.com/figma/code-connect/issues)
.

## Dynamic code snippets

If you completed [Getting Started with Code Connect](/code-connect-docs/quickstart-guide/)
, you should have a connected code snippet visible in Dev Mode when inspecting instances of that component. However, the code snippet doesn't yet reflect the entirety of the design.

To ensure the connected code snippet accurately reflects the design, you need to make use of property mappings. This enables you to link specific props in the design to props in code. In most cases, design and code props don't match 1:1, so it's necessary for us to configure this to ensure the correct code is shown in Dev Mode.

Here is a simple example for a button with a `label`, `disabled`, and `type` property.

```
import figma, { html } from '@figma/code-connect/html'figma.connect('https://...', { props: { label: figma.string('Text Content'), disabled: figma.boolean('Disabled'), type: figma.enum('Type', { Primary: 'primary', Secondary: 'secondary', }), }, example: ({ disabled, label, type }) => html`\ ${label}`})
```Figma properties can be inserted in the Code Connect example using template string interpolation, e.g. `${disabled}`. For HTML element attributes, Code Connect uses the type of the Figma property to render it correctly, so `disabled=${disabled}` will either render `disabled` or nothing, as it is a boolean; whereas `type=${type}` will render `type="primary"`, as it is a string.

## The `figma` import

The `figma` import contains helpers for mapping all sorts of properties from design to code. They work for simple mappings where only the naming differs between Figma and code, as well as more complex mappings where the type differs. See the below reference for all the helpers that exist and the ways you can use them to connect Figma and code components using Code Connect.
