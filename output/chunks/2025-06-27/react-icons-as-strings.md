---
title: Icons as strings
slug: react-icons-as-strings
source_file: code-connect-react.html
source_url: 'https://www.figma.com/code-connect-docs/react/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9d9e2dcbdbe2c5ec
token_count: 136
chunk_title: Icons as strings
chunk_slug: react-icons-as-strings
chunk_index: 12
chunk_of_total: 14
parent_file: react.md
parent_slug: react
char_count: 476
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
  - react-accessing-icon-props-in-parent-component
compiler: noos-figma
---

It's common to use IDs instead of passing around components for icons. In this case, you'll want your icon Code Connect files to just return that string. `figma.instance` takes a `type` parameter that's used to match what the nested template returns.

```
// iconfigma.connect("my-icon-url", { example: () => "icon-heart"})// parentfigma.connect("my-button-url, { props: { iconId: figma.instance("InstanceSwapPropName") }, example: ({ iconId }) => })// renders in Dev Mode
```
