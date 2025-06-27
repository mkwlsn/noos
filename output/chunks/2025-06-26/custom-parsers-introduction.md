---
title: Introduction
slug: custom-parsers-introduction
source_file: code-connect-custom-parsers.html
source_url: 'https://www.figma.com/code-connect-docs/custom-parsers/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 9cf85cda8b61ae54
token_count: 208
chunk_title: Introduction
chunk_slug: custom-parsers-introduction
chunk_index: 0
chunk_of_total: 3
parent_file: custom-parsers.md
parent_slug: custom-parsers
char_count: 727
heading_level: h4
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - custom-parsers-publish-and-parse-commands
  - custom-parsers-example-figmaconfigjson-file
compiler: noos-figma
---

# Custom parsers

##### important

Important: Custom parser support for Code Connect is in preview, and the API is likely to change during this period. Please share your feedback by creating a [GitHub issue](https://github.com/figma/code-connect/issues/new/choose).

## Overview

Custom parsers allow users to add support for languages that aren't natively supported by Code Connect.

### Commands

Please refer to the general [documentation](/code-connect-docs/) for more information on the available CLI commands. When using a custom parser, the CLI commands communicate with the supplied parser command to request the appropriate Code Connect docs (for `publish` and `parse`), or to create Code Connect files (for `create`).
