---
title: Instance children
slug: react-instance-children
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9bf46af402209d94
token_count: 507
chunk_title: Instance children
chunk_slug: react-instance-children
chunk_index: 6
chunk_of_total: 14
parent_file: react.md
parent_slug: react
char_count: 1772
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
  - react-nested-properties
  - react-text-content
  - react-classname
  - react-icons-as-jsx-elements
  - react-icons-as-react-components
  - react-icons-as-strings
  - react-accessing-icon-props-in-parent-component
compiler: noos-figma
---

It's common for components in Figma to have child instances that aren't bound to an instance-swap prop. Similarly to `figma.instance`, we can render the code snippets for these nested instances with `figma.children`. This helper takes the name of the instance layer within the parent component as its parameter, rather than a Figma prop name.

To illustrate this, consider the layer hierarchy in a component vs. an instance of that component:

```
Button (Component) Icon (Instance)
```In the previous example, "Icon" is the original name of the layer and the value you should pass to `figma.children()`.

```
Button (Instance) RenamedIcon (Instance)
```In the previous example, the instance layer was renamed. Renaming the layer won't break the mapping since, in this case, we're not using the layer's name.

##### note

Note: The nested instance also must be connected separately.

Layer names may differ between variants in a component set. To ensure the component (Button) can render a nested instance (Icon) for any of those variants, you must either use the wildcard option `figma.children("*")` or ensure that the layer name representing the instance (Icon) is the same across all variants of your component set (Button).

```
// map one child instance with the layer name "Tab"figma.children('Tab')// map multiple child instances by their layer names to a single propfigma.children(['Tab 1', 'Tab 2'])
```

#### Wildcard match

`figma.children()` can be used with a single wildcard '*' character, to partially match names or to render any nested child. Wildcards cannot be used with the array argument. Matches are case sensitive.

```
// map any (all) child instancesfigma.children('*')// map any child instances that starts with "Icon"figma.children('Icon*')
```
