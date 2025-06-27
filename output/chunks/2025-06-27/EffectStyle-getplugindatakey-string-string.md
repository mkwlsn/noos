---
title: 'getPluginData(key: string): string'
slug: EffectStyle-getplugindatakey-string-string
source_file: plugin-api-EffectStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/EffectStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f88ccb271d0ec997
token_count: 63
chunk_title: 'getPluginData(key: string): string'
chunk_slug: EffectStyle-getplugindatakey-string-string
chunk_index: 2
chunk_of_total: 12
parent_file: EffectStyle.md
parent_slug: EffectStyle
char_count: 220
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - EffectStyle-id-string-readonly
  - EffectStyle-getstyleconsumersasync-promise-consumers
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

Retrieves custom information that was stored on this node or style using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. If there is no data stored for the provided key, an empty string is returned.
