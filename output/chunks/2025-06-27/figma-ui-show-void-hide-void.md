---
title: 'show(): void + hide(): void'
slug: figma-ui-show-void-hide-void
source_file: plugin-api-figma-ui.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-ui/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: df29199127a0944d
token_count: 87
chunk_title: 'show(): void + hide(): void'
chunk_slug: figma-ui-show-void-hide-void
chunk_index: 1
chunk_of_total: 5
parent_file: figma-ui.md
parent_slug: figma-ui
char_count: 302
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - figma-ui-introduction
  - figma-ui-resizewidth-number-height-number-void-re
  - figma-ui-close-void-postmessagepluginmessage-any-
  - figma-ui-onmessage-messageeventhandler-undefined-
merged_titles:
  - 'show(): void'
  - 'hide(): void'
compiler: noos-figma
---

Makes the plugin's UI visible. Use this to show the UI if it was created using `figma.showUI(..., { visible: false })`, or after a call to `figma.ui.hide()`.

Hides the current UI. The UI will still continue to run code and be able to send and receive messages. However, it is not rendered to the user.
