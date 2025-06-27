---
title: Remarks
slug: figma-createlinkpreviewasync-remarks
source_file: plugin-api-figma-createlinkpreviewasync.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createlinkpreviewasync/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: fd4f8364e60a8c72
token_count: 102
chunk_title: Remarks
chunk_slug: figma-createlinkpreviewasync-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: figma-createlinkpreviewasync.md
parent_slug: figma-createlinkpreviewasync
char_count: 355
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-createlinkpreviewasync-introduction
compiler: noos-figma
---

This API is only available in FigJam

Creating embeds and link unfurl nodes```
(async () => { // Creates an EmbedNode const youtubeEmbed = await figma.createLinkPreviewAsync('https://www.youtube.com/watch?v=4G9RHt2OyuY') // Creates a LinkUnfurlNode const unfurledLink = await figma.createLinkPreviewAsync('https://www.figma.com/community/plugins')})()
```
