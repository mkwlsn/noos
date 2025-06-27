---
title: 'getPluginData(key: string): string'
slug: TextStyle-getplugindatakey-string-string
source_file: plugin-api-TextStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/TextStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f88ccb271d0ec997
token_count: 63
chunk_title: 'getPluginData(key: string): string'
chunk_slug: TextStyle-getplugindatakey-string-string
chunk_index: 3
chunk_of_total: 13
parent_file: TextStyle.md
parent_slug: TextStyle
char_count: 220
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - TextStyle-boundvariables-field-in-variablebindable
  - TextStyle-id-string-readonly
  - TextStyle-getstyleconsumersasync-promise-consumers
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

Retrieves custom information that was stored on this node or style using [`setPluginData`](/plugin-docs/api/properties/nodes-setplugindata/)
. If there is no data stored for the provided key, an empty string is returned.
