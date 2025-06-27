---
title: Remarks
slug: figma-ui-on-remarks
source_file: plugin-api-figma-ui-on.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-ui-on/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 1dc02c87c3b74542
token_count: 79
chunk_title: Remarks
chunk_slug: figma-ui-on-remarks
chunk_index: 0
chunk_of_total: 1
parent_file: figma-ui-on.md
parent_slug: figma-ui-on
char_count: 274
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

The `pluginMessage` argument contains the message passed by the call to `postMessage` on the UI side.

The `props` argument contains a `origin` property contains the origin of the document that sent the message. It is an advanced feature, mainly used for implementing OAuth.
