---
title: Icons as JSX elements
slug: react-icons-as-jsx-elements
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 8e6a0dcdc162244c
token_count: 94
chunk_title: Icons as JSX elements
chunk_slug: react-icons-as-jsx-elements
chunk_index: 10
chunk_of_total: 14
parent_file: react.md
parent_slug: react
char_count: 329
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
  - react-icons-as-react-components
  - react-icons-as-strings
  - react-accessing-icon-props-in-parent-component
compiler: noos-figma
---

If your icons are passed as JSX elements in code, you can use Code Connect in the same way you create components.

```
// iconfigma.connect("my-icon-url", { example: () => })// parentfigma.connect("my-button-url, { props: { icon: figma.instance("InstanceSwapPropName") }, example: ({ icon }) => {icon}})// renders in Dev Mode
```
