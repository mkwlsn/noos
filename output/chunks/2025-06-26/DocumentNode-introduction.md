---
title: Introduction
slug: DocumentNode-introduction
source_file: plugin-api-DocumentNode.html
source_url: 'https://www.figma.com/plugin-docs/api/DocumentNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 11558a0dd8bc1637
token_count: 132
chunk_title: Introduction
chunk_slug: DocumentNode-introduction
chunk_index: 0
chunk_of_total: 12
parent_file: DocumentNode.md
parent_slug: DocumentNode
char_count: 459
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - DocumentNode-insertchildindex-number-child-pagenode-v
  - DocumentNode-findwidgetnodesbywidgetidwidgetid-string
  - DocumentNode-id-string-readonly
  - DocumentNode-isasset-boolean-readonly
  - DocumentNode-getcssasync-promise-key-string-string-
  - DocumentNode-gettoplevelframe-framenode-undefined
  - DocumentNode-getplugindatakey-string-string
  - DocumentNode-setplugindatakey-string-value-string-voi
  - DocumentNode-getsharedplugindatanamespace-string-key-
  - DocumentNode-setsharedplugindatanamespace-string-key-
  - DocumentNode-getdevresourcesasyncoptions-includechild
compiler: noos-figma
---

# DocumentNode

The document node is the root node. There can only be one document node per browser tab, and each of its children must be a [`PageNode`](/plugin-docs/api/PageNode/).

Most plugins will not need to use this node unless they are creating new pages or performing a document-wide operation. In the latter case, it's recommended to only read and not write, as the user may not see the modifications made on a different page.

## Document properties
