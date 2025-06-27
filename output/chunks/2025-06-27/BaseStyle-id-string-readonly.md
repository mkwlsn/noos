---
title: 'id: string [readonly]'
slug: BaseStyle-id-string-readonly
source_file: plugin-api-BaseStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/BaseStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: db594556c2f8d69e
token_count: 71
chunk_title: 'id: string [readonly]'
chunk_slug: BaseStyle-id-string-readonly
chunk_index: 1
chunk_of_total: 13
parent_file: BaseStyle.md
parent_slug: BaseStyle
char_count: 246
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - BaseStyle-introduction
  - BaseStyle-getstyleconsumersasync-promise-consumers
  - BaseStyle-getplugindatakey-string-string
  - BaseStyle-setplugindatakey-string-value-string-voi
  - BaseStyle-getplugindatakeys-string
  - BaseStyle-getsharedplugindatanamespace-string-key-
  - BaseStyle-setsharedplugindatanamespace-string-key-
  - BaseStyle-getsharedplugindatakeysnamespace-string-
  - BaseStyle-description-string-descriptionmarkdown-s
  - BaseStyle-documentationlinks-readonlyarray-remote-
  - BaseStyle-key-string-readonly
  - BaseStyle-getpublishstatusasync-promise
compiler: noos-figma
---

The unique identifier of the style in the document the plugin is executing from. You can assign this value via `setFillStyleIdAsync`, `setStrokeStyleIdAsync`, `setTextStyleIdAsync`, etc. to make the node properties reflect that of the style node.
