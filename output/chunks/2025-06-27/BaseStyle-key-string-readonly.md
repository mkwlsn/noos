---
title: 'key: string [readonly]'
slug: BaseStyle-key-string-readonly
source_file: plugin-api-BaseStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/BaseStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 516f772343a1a44c
token_count: 120
chunk_title: 'key: string [readonly]'
chunk_slug: BaseStyle-key-string-readonly
chunk_index: 11
chunk_of_total: 13
parent_file: BaseStyle.md
parent_slug: BaseStyle
char_count: 417
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
  - BaseStyle-getsharedplugindatanamespace-string-key-
  - BaseStyle-setsharedplugindatanamespace-string-key-
  - BaseStyle-getsharedplugindatakeysnamespace-string-
  - BaseStyle-description-string-descriptionmarkdown-s
  - BaseStyle-documentationlinks-readonlyarray-remote-
  - BaseStyle-getpublishstatusasync-promise
compiler: noos-figma
---

The key to use with [`figma.importComponentByKeyAsync`](/plugin-docs/api/figma/#importcomponentbykeyasync)
, [`figma.importComponentSetByKeyAsync`](/plugin-docs/api/figma/#importcomponentsetbykeyasync)
 and [`figma.importStyleByKeyAsync`](/plugin-docs/api/figma/#importstylebykeyasync)
. Note that while this key is present on local and published components, you can only import components that are already published.
