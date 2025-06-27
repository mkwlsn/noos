---
title: Introduction + Signature
slug: figma-createpagedivider-introduction-signature
source_file: plugin-api-figma-createpagedivider.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-createpagedivider/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 6540cdc0b9095dc9
token_count: 68
chunk_title: Introduction + Signature
chunk_slug: figma-createpagedivider-introduction-signature
chunk_index: 0
chunk_of_total: 2
parent_file: figma-createpagedivider.md
parent_slug: figma-createpagedivider
char_count: 236
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-createpagedivider-parameters
merged_titles:
  - Introduction
  - Signature
compiler: noos-figma
---

# createPageDivider

Creates a new page divider, appended to the document's list of children. A page divider is a [`PageNode`](/plugin-docs/api/PageNode/) with `isPageDivider` true.

### createPageDivider(dividerName?: string): PageNode
