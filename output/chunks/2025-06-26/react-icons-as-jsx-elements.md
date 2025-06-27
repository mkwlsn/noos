---
title: Icons as JSX elements
slug: react-icons-as-jsx-elements
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 2be97d218d44f9ec
token_count: 857
chunk_title: Icons as JSX elements
chunk_slug: react-icons-as-jsx-elements
chunk_index: 2
chunk_of_total: 3
parent_file: react.md
parent_slug: react
char_count: 2999
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - react-introduction
  - react-figmaconnect
compiler: noos-figma
---

If your icons are passed as JSX elements in code, you can use Code Connect in the same way you create components.

```
// iconfigma.connect("my-icon-url", { example: () => })// parentfigma.connect("my-button-url, { props: { icon: figma.instance("InstanceSwapPropName") }, example: ({ icon }) => {icon}})// renders in Dev Mode
```### Icons as React Components

If your icons are passed as React components, you can return a React component instead of a JSX element in your icon's Code Connect file.

```
// iconfigma.connect("my-icon-url", { example: () => IconHeart})// parentfigma.connect("my-button-url, { props: { Icon: figma.instance("InstanceSwapPropName") }, example: ({ Icon }) => })// renders in Dev Mode
```### Icons as strings

It's common to use IDs instead of passing around components for icons. In this case, you'll want your icon Code Connect files to just return that string. `figma.instance` takes a `type` parameter that's used to match what the nested template returns.

```
// iconfigma.connect("my-icon-url", { example: () => "icon-heart"})// parentfigma.connect("my-button-url, { props: { iconId: figma.instance("InstanceSwapPropName") }, example: ({ iconId }) => })// renders in Dev Mode
```### Accessing icon props in parent component

If you have different ways of rendering icons depending on parent, or, if you want to use icon strings but still be able to map properties of the icon components, you'll want to use `getProps` or `render` which are exposed on the return value of `figma.instance()`. The `example` function of the icon itself determines how that icon renders when clicked in Figma, but can be "overriden" via these additional helpers.

`getProps` gives access to the props of the child (e.g. the icon) from the parent, so you can use those props in your parent component. Note the static prop `iconId: "my-icon"` - any custom/static props like this one will be included in the object returned from `getProps`.

```
// iconfigma.connect("my-icon-url", { props: { iconId: "my-icon", size: figma.enum("Size", { 'large': 'large', 'small': 'small' }) } example: ({ size }) => })// parentfigma.connect("icon-button-url", { props: { iconProps: figma.instance("InstanceSwapPropName").getProps<{iconId: string, size: "small" | "large"}>() }, example: ({ iconProps }) => })// renders in Dev Mode
````render` allows you to conditionally render nested connected components. The argument is passed the resolved props of the nested component.
This is useful if you need to dynamically render different JSX elements based on a boolean prop, for example.

```
// iconfigma.connect("my-icon-url", { props: { iconId: "my-icon", size: figma.enum("Size", { 'large': 'large', 'small': 'small' }) } example: ({ size }) => })// parentfigma.connect("icon-button-url", { props: { icon: figma.boolean("Show icon", { true: figma.instance("InstanceSwapPropName").render<{iconId: string, size: "small" | "large"}>(props => ), } }, example: ({ icon }) => })// renders in Dev Mode} />
```
