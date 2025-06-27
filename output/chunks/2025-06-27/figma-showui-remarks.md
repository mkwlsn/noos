---
title: Remarks
slug: figma-showui-remarks
source_file: plugin-api-figma-showui.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-showui/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: fd5f37174e2e12ca
token_count: 102
chunk_title: Remarks
chunk_slug: figma-showui-remarks
chunk_index: 2
chunk_of_total: 4
parent_file: figma-showui.md
parent_slug: figma-showui
char_count: 354
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-showui-introduction-signature
  - figma-showui-parameters
  - figma-showui-usage-examples
compiler: noos-figma
---

The easiest way to use this API is to load the HTML file defined in the manifest. This enables writing a separate HTML file which can be accessed through the [`__html__`](/plugin-docs/api/global-objects/#html)
 global variable.

If the `` UI is already showing when this function is called, the previous UI will be closed before the new one is displayed.
