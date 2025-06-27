---
title: Icons as React Components
slug: react-icons-as-react-components
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: a797dd94ca5be79a
token_count: 102
chunk_title: Icons as React Components
chunk_slug: react-icons-as-react-components
chunk_index: 11
chunk_of_total: 14
parent_file: react.md
parent_slug: react
char_count: 356
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
  - react-icons-as-strings
  - react-accessing-icon-props-in-parent-component
compiler: noos-figma
---

If your icons are passed as React components, you can return a React component instead of a JSX element in your icon's Code Connect file.

```
// iconfigma.connect("my-icon-url", { example: () => IconHeart})// parentfigma.connect("my-button-url, { props: { Icon: figma.instance("InstanceSwapPropName") }, example: ({ Icon }) => })// renders in Dev Mode
```
