---
title: Icons as strings
slug: html-icons-as-strings
source_file: code-connect-html.html
source_url: 'https://www.figma.com/code-connect-docs/html/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: bdc8e95625964025
token_count: 272
chunk_title: Icons as strings
chunk_slug: html-icons-as-strings
chunk_index: 3
chunk_of_total: 4
parent_file: html.md
parent_slug: html
char_count: 949
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - html-introduction
  - html-strings
  - html-web-components-example
compiler: noos-figma
---

It's common to use IDs instead of passing around components for icons. In this case, you'll want your icon Code Connect files to just return that string. `figma.instance` takes a `type` parameter that's used to match what the nested template returns. You can then have a generic icon component that consumes the icon ID of the inner instance.

```
// Icon IDfigma.connect("my-icon-url", { example: () => "icon-heart"})// Icon componentfigma.connect("my-icon-component-url, { props: { iconId: figma.instance("InstanceSwapPropName") }, example: ({ iconId }) => html``})// renders in Dev Mode
```Or, as in another common use case, consume the ID directly in other design system components, such as a button.

```
// Icon IDfigma.connect("my-icon-url", { example: () => "icon-heart"})// Button componentfigma.connect("my-button-url, { props: { iconId: figma.instance("InstanceSwapPropName") }, example: ({ iconId }) => html``})// renders in Dev Mode
```
