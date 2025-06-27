---
title: 'getSharedPluginData(namespace: string, key: string): string'
slug: EffectStyle-getsharedplugindatanamespace-string-key-
source_file: plugin-api-EffectStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/EffectStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b68efdfbc36a3c6e
token_count: 71
chunk_title: 'getSharedPluginData(namespace: string, key: string): string'
chunk_slug: EffectStyle-getsharedplugindatanamespace-string-key-
chunk_index: 5
chunk_of_total: 12
parent_file: EffectStyle.md
parent_slug: EffectStyle
char_count: 246
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - EffectStyle-id-string-readonly
  - EffectStyle-getstyleconsumersasync-promise-consumers
  - EffectStyle-getplugindatakey-string-string
  - EffectStyle-setplugindatakey-string-value-string-voi
  - EffectStyle-getplugindatakeys-string
  - EffectStyle-setsharedplugindatanamespace-string-key-
  - EffectStyle-getsharedplugindatakeysnamespace-string-
  - EffectStyle-description-string-descriptionmarkdown-s
  - EffectStyle-documentationlinks-readonlyarray-remote-
  - EffectStyle-key-string-readonly
  - EffectStyle-getpublishstatusasync-promise
compiler: noos-figma
---

Retrieves custom information that was stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/)
. If there is no data stored for the provided namespace and key, an empty string is returned.
