---
title: `figma.connect`
slug: react-figmaconnect
source_file: code-connect-react.html
source_url: https://www.figma.com/code-connect-docs/react/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 2a48a3a80ae5e029
token_count: 178
chunk_title: `figma.connect`
chunk_slug: react-figmaconnect
chunk_index: 1
chunk_of_total: 14
parent_file: react.md
parent_slug: react
char_count: 623
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks: ["react-introduction", "react-strings", "react-booleans", "react-enums", "react-instances", "react-instance-children", "react-nested-properties", "react-text-content", "react-classname", "react-icons-as-jsx-elements", "react-icons-as-react-components", "react-icons-as-strings", "react-accessing-icon-props-in-parent-component"]
---

`figma.connect()` has two signatures for connecting components.

```
// connect a component in code to a Figma componentfigma.connect(Button, "https://...")// connect a Figma component to a native elementfigma.connect("https://...")
```The second option is useful if you want to just render a HTML tag instead of a React component.

The first argument is used to determine where your component lives in code, in order to generate an import statement for the component. This isn't needed if you just want to render something like a `button` tag. For example:

```
figma.connect("https://...", { example: () => click me})
```