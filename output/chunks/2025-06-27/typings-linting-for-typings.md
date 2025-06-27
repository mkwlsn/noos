---
title: Linting for typings
slug: typings-linting-for-typings
source_file: plugin-api-typings.html
source_url: 'https://www.figma.com/plugin-docs/api/typings/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c71c589e2744e2de
token_count: 155
chunk_title: Linting for typings
chunk_slug: typings-linting-for-typings
chunk_index: 1
chunk_of_total: 2
parent_file: typings.md
parent_slug: typings
char_count: 540
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - typings-introduction
compiler: noos-figma
---

Linting, the automated validation of source code for issues, can be very helpful for catching errors early in the development of your plugin. We provide a set of [typescript-eslint rules](https://github.com/figma/eslint-plugin-figma-plugins?tab=readme-ov-file#eslint-plugin-figma-plugins)
 on GitHub to help support plugin development. These rules can identify, and in many cases automatically fix, issues in your plugin code. The GitHub repository includes detailed instructions for installing and using the rules to test your plugin code.
