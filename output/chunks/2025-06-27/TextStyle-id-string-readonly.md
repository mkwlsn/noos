---
title: 'id: string [readonly]'
slug: TextStyle-id-string-readonly
source_file: plugin-api-TextStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/TextStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: db594556c2f8d69e
token_count: 71
chunk_title: 'id: string [readonly]'
chunk_slug: TextStyle-id-string-readonly
chunk_index: 1
chunk_of_total: 13
parent_file: TextStyle.md
parent_slug: TextStyle
char_count: 246
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - TextStyle-boundvariables-field-in-variablebindable
  - TextStyle-getstyleconsumersasync-promise-consumers
  - TextStyle-getplugindatakey-string-string
  - TextStyle-setplugindatakey-string-value-string-voi
  - TextStyle-getplugindatakeys-string
  - TextStyle-getsharedplugindatanamespace-string-key-
  - TextStyle-setsharedplugindatanamespace-string-key-
  - TextStyle-getsharedplugindatakeysnamespace-string-
  - TextStyle-description-string-descriptionmarkdown-s
  - TextStyle-documentationlinks-readonlyarray-remote-
  - TextStyle-key-string-readonly
  - TextStyle-getpublishstatusasync-promise
compiler: noos-figma
---

The unique identifier of the style in the document the plugin is executing from. You can assign this value via `setFillStyleIdAsync`, `setStrokeStyleIdAsync`, `setTextStyleIdAsync`, etc. to make the node properties reflect that of the style node.
