---
title: Introduction + Signature
slug: figma-showui-introduction-signature
source_file: plugin-api-figma-showui.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-showui/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2509ebfe84c76539
token_count: 72
chunk_title: Introduction + Signature
chunk_slug: figma-showui-introduction-signature
chunk_index: 0
chunk_of_total: 4
parent_file: figma-showui.md
parent_slug: figma-showui
char_count: 251
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-showui-parameters
  - figma-showui-remarks
  - figma-showui-usage-examples
merged_titles:
  - Introduction
  - Signature
compiler: noos-figma
---

# showUI

Enables you to render UI to interact with the user, or simply to access browser APIs. This function creates a modal dialog with an `` containing the HTML markup in the `html` argument.

### showUI(html: string, options?: ShowUIOptions): void
