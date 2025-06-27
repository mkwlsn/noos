---
title: Enums
slug: html-enums
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5ac2609b0d1bc043
token_count: 524
chunk_title: Enums
chunk_slug: html-enums
chunk_index: 3
chunk_of_total: 15
parent_file: html.md
parent_slug: html
char_count: 1834
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - html-introduction
  - html-strings
  - html-booleans
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

Variants (or enums) in Figma are commonly used to control the look and feel of components that require more complex options than a simple boolean toggle. Variant properties are always strings in Figma, but they can be mapped to any type in code. The first parameter is the name of the Variant in Figma, and the second parameter is a value mapping. The keys in this object should match the different options of that Variant in Figma, and the value is whatever you want to output instead.

```
// maps the 'Options' variant in Figma to enum values in codefigma.enum('Options', { 'Option 1': Option.first, 'Option 2': Option.second,})// maps the 'Options' variant in Figma to sub-component values in codefigma.enum('Options', { 'Option 1': html``, 'Option 2': html``,})// result is true for disabled variants otherwise undefinedfigma.enum('Variant', { Disabled: true })// enums mappings can be used to show a component based on a Figma variantfigma.connect('https://...', { props: { cancelButton: figma.enum('Type', { Cancellable: html`` }), // ... }, example: ({ cancelButton }) => html`\ Title Some content ${cancelButton}` },})
```Mapping objects for `figma.enum` as well as `figma.boolean` allow nested references, which is useful if you want to conditionally render a [nested instance](#instances)
, for example.

```
// maps the 'Options' variant in Figma to enum values in codefigma.enum('Type', { WithIcon: figma.instance('Icon'), WithoutIcon: undefined,})
```In contrast to `figma.boolean`, values are not normalized for `figma.enum`. You always need to pass the exact literal values to the mapping object.

```
// These two are equivalent for a variant with the options "Yes" and "No"disabled: figma.enum("Boolean Variant", { Yes: // ... No: // ...})disabled: figma.boolean("Boolean Variant", { true: // ... false: // ...})
```
