---
title: 'getSharedPluginData(namespace: string, key: string): string'
slug: BaseStyle-getsharedplugindatanamespace-string-key-
source_file: plugin-api-BaseStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/BaseStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b68efdfbc36a3c6e
token_count: 71
chunk_title: 'getSharedPluginData(namespace: string, key: string): string'
chunk_slug: BaseStyle-getsharedplugindatanamespace-string-key-
chunk_index: 6
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
  - BaseStyle-id-string-readonly
  - BaseStyle-getstyleconsumersasync-promise-consumers
  - BaseStyle-getplugindatakey-string-string
  - BaseStyle-setplugindatakey-string-value-string-voi
  - BaseStyle-getplugindatakeys-string
  - BaseStyle-setsharedplugindatanamespace-string-key-
  - BaseStyle-getsharedplugindatakeysnamespace-string-
  - BaseStyle-description-string-descriptionmarkdown-s
  - BaseStyle-documentationlinks-readonlyarray-remote-
  - BaseStyle-key-string-readonly
  - BaseStyle-getpublishstatusasync-promise
compiler: noos-figma
---

Retrieves custom information that was stored on this node or style using [`setSharedPluginData`](/plugin-docs/api/properties/nodes-setsharedplugindata/)
. If there is no data stored for the provided namespace and key, an empty string is returned.
