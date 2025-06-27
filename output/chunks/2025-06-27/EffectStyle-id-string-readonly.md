---
title: 'id: string [readonly]'
slug: EffectStyle-id-string-readonly
source_file: plugin-api-EffectStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/EffectStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: db594556c2f8d69e
token_count: 71
chunk_title: 'id: string [readonly]'
chunk_slug: EffectStyle-id-string-readonly
chunk_index: 0
chunk_of_total: 12
parent_file: EffectStyle.md
parent_slug: EffectStyle
char_count: 246
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - EffectStyle-getstyleconsumersasync-promise-consumers
  - EffectStyle-getplugindatakey-string-string
  - EffectStyle-setplugindatakey-string-value-string-voi
  - EffectStyle-getplugindatakeys-string
  - EffectStyle-getsharedplugindatanamespace-string-key-
  - EffectStyle-setsharedplugindatanamespace-string-key-
  - EffectStyle-getsharedplugindatakeysnamespace-string-
  - EffectStyle-description-string-descriptionmarkdown-s
  - EffectStyle-documentationlinks-readonlyarray-remote-
  - EffectStyle-key-string-readonly
  - EffectStyle-getpublishstatusasync-promise
compiler: noos-figma
---

The unique identifier of the style in the document the plugin is executing from. You can assign this value via `setFillStyleIdAsync`, `setStrokeStyleIdAsync`, `setTextStyleIdAsync`, etc. to make the node properties reflect that of the style node.
