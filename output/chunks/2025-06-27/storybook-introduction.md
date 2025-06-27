---
title: Introduction
slug: storybook-introduction
source_file: code-connect-storybook.html
source_url: 'https://www.figma.com/code-connect-docs/storybook/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: dcf82aa1e3f08cbe
token_count: 283
chunk_title: Introduction
chunk_slug: storybook-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: storybook.md
parent_slug: storybook
char_count: 990
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - storybook-dynamic-code-snippets
  - storybook-variant-restrictions
compiler: noos-figma
---

# Integrating with Storybook

##### important

Important: Storybook integration is only available for components using React.

Use the Storybook integration with Code Connect to make it easy to maintain both in parallel. The syntax for this integration is slightly different to the React one to ensure alignment with the Storybook API.

To define a Code Connect doc using Storybook simply add a `parameters` block to the story configuration object that references the Figma component.

```
export default { component: Button, parameters: { design: { type: 'figma', url: 'https://...', examples: [ButtonExample], }, },}// Existing storyexport function ButtonExample() { return }
```This syntax is an extension of the [existing Storybook integration](https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma)
 offered by Figma, so you'll automatically get all the benefits that come with that such as a Figma preview of the component embedded in your Storybook documentation.
