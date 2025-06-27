---
title: 'id: string [readonly]'
slug: PaintStyle-id-string-readonly
source_file: plugin-api-PaintStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/PaintStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: db594556c2f8d69e
token_count: 71
chunk_title: 'id: string [readonly]'
chunk_slug: PaintStyle-id-string-readonly
chunk_index: 1
chunk_of_total: 13
parent_file: PaintStyle.md
parent_slug: PaintStyle
char_count: 246
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - PaintStyle-paints-readonlyarray-boundvariables-read
  - PaintStyle-getstyleconsumersasync-promise-consumers
  - PaintStyle-getplugindatakey-string-string
  - PaintStyle-setplugindatakey-string-value-string-voi
  - PaintStyle-getplugindatakeys-string
  - PaintStyle-getsharedplugindatanamespace-string-key-
  - PaintStyle-setsharedplugindatanamespace-string-key-
  - PaintStyle-getsharedplugindatakeysnamespace-string-
  - PaintStyle-description-string-descriptionmarkdown-s
  - PaintStyle-documentationlinks-readonlyarray-remote-
  - PaintStyle-key-string-readonly
  - PaintStyle-getpublishstatusasync-promise
compiler: noos-figma
---

The unique identifier of the style in the document the plugin is executing from. You can assign this value via `setFillStyleIdAsync`, `setStrokeStyleIdAsync`, `setTextStyleIdAsync`, etc. to make the node properties reflect that of the style node.
