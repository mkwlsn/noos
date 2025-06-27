---
title: Instances
slug: react-instances
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d9c8a057feb9af6f
token_count: 407
chunk_title: Instances
chunk_slug: react-instances
chunk_index: 5
chunk_of_total: 14
parent_file: react.md
parent_slug: react
char_count: 1423
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

"Instances" is Figma's term for nested component references. For example, in the case of a `Button` containing an `Icon` as a nested component, we would call the `Icon` an instance. In Figma, instances can be properties, such as inputs to the component (similar to render props in code). Similarly to how we can map booleans, enums, and strings from Figma to code, we can also map these to instance properties.

To ensure instance properties are as useful as possible with Code Connect, we recommend you implement Code Connect for all common components that you would expect to be used as values for a given property. Dev Mode automatically populates the referenced component's connected code snippet example with the instance code that matches the properties.

Consider the following example:

```
// maps an instance-swap property from Figmafigma.instance('PropName')
```The return value of `figma.instance` is a JSX component and can be used in your example like a typical JSX component prop would be in your codebase.

```
figma.connect(Button, 'https://...', { props: { icon: figma.instance('Icon'), }, example: ({ icon }) => { return Instance prop Example },})
```You should then have a separate `figma.connect` call that connects the Icon component with the nested Figma component. Make sure to connect the backing component of that instance, not the instance itself.

```
figma.connect(Icon32Add, 'https://...')
```
