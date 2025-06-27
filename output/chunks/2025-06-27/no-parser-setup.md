---
title: Setup
slug: no-parser-setup
source_file: code-connect-no-parser.html
source_url: 'https://www.figma.com/code-connect-docs/no-parser/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2117970ea012c099
token_count: 154
chunk_title: Setup
chunk_slug: no-parser-setup
chunk_index: 1
chunk_of_total: 3
parent_file: no-parser.md
parent_slug: no-parser
char_count: 539
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - no-parser-introduction
  - no-parser-connecting-to-figma-nodes
compiler: noos-figma
---

To use:

1. Add the `--include-template-files` flag to your Code Connect command:

```
figma connect publish --include-template-files
```1. Make sure your `figma.config.json` also includes `.figma.template.js` files:

```
{ "include": [ "**/*.figma.template.js" ]}
```1. Write your `.figma.template.js` file. It should follow the below format:

```
// url=https://www.figma.com/file/your-file-id/Component?node-id=123const figma = require('figma')const instance = figma.selectedInstance// code using [Template V2 API](/template-v2-api)
```
