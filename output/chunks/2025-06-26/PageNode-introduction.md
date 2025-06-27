---
title: Introduction
slug: PageNode-introduction
source_file: plugin-api-PageNode.html
source_url: 'https://www.figma.com/plugin-docs/api/PageNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 0da97a1c1a148af1
token_count: 71
chunk_title: Introduction
chunk_slug: PageNode-introduction
chunk_index: 0
chunk_of_total: 22
parent_file: PageNode.md
parent_slug: PageNode
char_count: 248
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - PageNode-type-page-readonly-clone-pagenode
  - PageNode-guides-readonlyarray
  - PageNode-prototypebackgrounds-readonlyarray-proto
  - PageNode-ispagedivider-boolean
  - PageNode-loadasync-promise-ontype-nodechange-call
  - PageNode-offtype-nodechange-callback-event-nodech
  - PageNode-getmeasurements-measurement-getmeasureme
  - PageNode-addmeasurementstart-node-scenenode-side-
  - PageNode-id-string-readonly
  - PageNode-isasset-boolean-readonly
  - PageNode-getcssasync-promise-key-string-string-
  - PageNode-gettoplevelframe-framenode-undefined
  - PageNode-getplugindatakey-string-string
  - PageNode-setplugindatakey-string-value-string-voi
  - PageNode-getsharedplugindatanamespace-string-key-
  - PageNode-setsharedplugindatanamespace-string-key-
  - PageNode-getdevresourcesasyncoptions-includechild
  - PageNode-explicitvariablemodes-collectionid-strin
  - PageNode-clearexplicitvariablemodeforcollectionco
  - PageNode-children-readonlyarray-readonly
  - PageNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

# PageNode

The page node is always a descendent of the [`DocumentNode`](/plugin-docs/api/DocumentNode/). Most plugins only need to access the current page accessed via [`figma.currentPage`](/plugin-docs/api/figma/#currentpage).

## Page properties
