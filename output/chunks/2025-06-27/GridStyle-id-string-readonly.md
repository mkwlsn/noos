---
title: 'id: string [readonly]'
slug: GridStyle-id-string-readonly
source_file: plugin-api-GridStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/GridStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: db594556c2f8d69e
token_count: 71
chunk_title: 'id: string [readonly]'
chunk_slug: GridStyle-id-string-readonly
chunk_index: 0
chunk_of_total: 12
parent_file: GridStyle.md
parent_slug: GridStyle
char_count: 246
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - GridStyle-getstyleconsumersasync-promise-consumers
  - GridStyle-getplugindatakey-string-string
  - GridStyle-setplugindatakey-string-value-string-voi
  - GridStyle-getplugindatakeys-string
  - GridStyle-getsharedplugindatanamespace-string-key-
  - GridStyle-setsharedplugindatanamespace-string-key-
  - GridStyle-getsharedplugindatakeysnamespace-string-
  - GridStyle-description-string-descriptionmarkdown-s
  - GridStyle-documentationlinks-readonlyarray-remote-
  - GridStyle-key-string-readonly
  - GridStyle-getpublishstatusasync-promise
compiler: noos-figma
---

The unique identifier of the style in the document the plugin is executing from. You can assign this value via `setFillStyleIdAsync`, `setStrokeStyleIdAsync`, `setTextStyleIdAsync`, etc. to make the node properties reflect that of the style node.
