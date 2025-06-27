---
title: Introduction
slug: figma-createlinkpreviewasync-introduction
source_file: plugin-api-figma-createlinkpreviewasync.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createlinkpreviewasync/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 357e0b58eea8c235
token_count: 154
chunk_title: Introduction
chunk_slug: figma-createlinkpreviewasync-introduction
chunk_index: 0
chunk_of_total: 2
parent_file: figma-createlinkpreviewasync.md
parent_slug: figma-createlinkpreviewasync
char_count: 539
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - figma-createlinkpreviewasync-remarks
compiler: noos-figma
---

# createLinkPreviewAsync

##### info

This API is only available in FigJam.

Resolves link metadata from a URL, and inserts either an embed or a unfurled preview of the link into the document
An embed will be inserted if the URL is a valid OEmbed provider (has a `` tag). The returned `` source will be converted into an EmbedNode.

Otherwise, the title, description, thumbnail, and favicon will be parsed from the HTML markup of the URL using standard `og` or `twitter` meta tags. This information will be converted into a LinkUnfurlNode.
