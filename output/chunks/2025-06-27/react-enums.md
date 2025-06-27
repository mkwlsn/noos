---
title: Enums
slug: react-enums
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 097113f2847e686f
token_count: 523
chunk_title: Enums
chunk_slug: react-enums
chunk_index: 4
chunk_of_total: 14
parent_file: react.md
parent_slug: react
char_count: 1828
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - react-introduction
  - react-figmaconnect
  - react-strings
  - react-booleans
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

Variants (or enums) in Figma are commonly used to control the look and feel of components that require more complex options than a simple boolean toggle. Variant properties are always strings in Figma, but they can be mapped to any type in code. The first parameter is the name of the Variant in Figma, and the second parameter is a value mapping. The keys in this object should match the different options of that Variant in Figma, and the value is whatever you want to output instead.

```
// maps the 'Options' variant in Figma to enum values in codefigma.enum('Options', { 'Option 1': Option.first, 'Option 2': Option.second,})// maps the 'Options' variant in Figma to sub-component values in codefigma.enum('Options', { 'Option 1': , 'Option 2': ,})// result is true for disabled variants otherwise undefinedfigma.enum('Variant', { Disabled: true })// enums mappings can be used to show a component based on a Figma variantfigma.connect(Modal, 'https://...', { props: { cancelButton: figma.enum('Type', { Cancellable: , }), // ... }, example: ({ cancelButton }) => { return ( Title Some content {cancelButton} ) },})
```Mapping objects for `figma.enum` as well as `figma.boolean` allow nested references, which is useful if you want to conditionally render a [nested instance](#instances)
, for example.

```
// maps the 'Options' variant in Figma to enum values in codefigma.enum('Type', { WithIcon: figma.instance('Icon'), WithoutIcon: undefined,})
```In contrast to `figma.boolean`, values are not normalized for `figma.enum`. You always need to pass the exact literal values to the mapping object.

```
// These two are equivalent for a variant with the options "Yes" and "No"disabled: figma.enum("Boolean Variant", { Yes: // ... No: // ...})disabled: figma.boolean("Boolean Variant", { true: // ... false: // ...})
```
