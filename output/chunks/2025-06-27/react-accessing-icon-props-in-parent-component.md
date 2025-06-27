---
title: Accessing icon props in parent component
slug: react-accessing-icon-props-in-parent-component
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 57adceabe700da73
token_count: 497
chunk_title: Accessing icon props in parent component
chunk_slug: react-accessing-icon-props-in-parent-component
chunk_index: 13
chunk_of_total: 14
parent_file: react.md
parent_slug: react
char_count: 1739
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
  - react-nested-properties
  - react-text-content
  - react-classname
  - react-icons-as-jsx-elements
  - react-icons-as-react-components
  - react-icons-as-strings
compiler: noos-figma
---

If you have different ways of rendering icons depending on parent, or, if you want to use icon strings but still be able to map properties of the icon components, you'll want to use `getProps` or `render` which are exposed on the return value of `figma.instance()`. The `example` function of the icon itself determines how that icon renders when clicked in Figma, but can be "overriden" via these additional helpers.

`getProps` gives access to the props of the child (e.g. the icon) from the parent, so you can use those props in your parent component. Note the static prop `iconId: "my-icon"` - any custom/static props like this one will be included in the object returned from `getProps`.

```
// iconfigma.connect("my-icon-url", { props: { iconId: "my-icon", size: figma.enum("Size", { 'large': 'large', 'small': 'small' }) } example: ({ size }) => })// parentfigma.connect("icon-button-url", { props: { iconProps: figma.instance("InstanceSwapPropName").getProps<{iconId: string, size: "small" | "large"}>() }, example: ({ iconProps }) => })// renders in Dev Mode
````render` allows you to conditionally render nested connected components. The argument is passed the resolved props of the nested component.
This is useful if you need to dynamically render different JSX elements based on a boolean prop, for example.

```
// iconfigma.connect("my-icon-url", { props: { iconId: "my-icon", size: figma.enum("Size", { 'large': 'large', 'small': 'small' }) } example: ({ size }) => })// parentfigma.connect("icon-button-url", { props: { icon: figma.boolean("Show icon", { true: figma.instance("InstanceSwapPropName").render<{iconId: string, size: "small" | "large"}>(props => ), } }, example: ({ icon }) => })// renders in Dev Mode} />
```
