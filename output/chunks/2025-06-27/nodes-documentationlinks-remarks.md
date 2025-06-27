---
title: Remarks
slug: nodes-documentationlinks-remarks
source_file: plugin-api-nodes-documentationlinks.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-documentationlinks/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 750e7bbc35b1df27
token_count: 76
chunk_title: Remarks
chunk_slug: nodes-documentationlinks-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-documentationlinks.md
parent_slug: nodes-documentationlinks
char_count: 263
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-documentationlinks-introduction-signature
compiler: noos-figma
---

This API currently only supports setting a single documentation link. To clear the documentation links, set to the empty list [].

Example:

```
node.documentationLinks = [{uri: "https://www.figma.com"}]// clear documentation linksnode.documentationLinks = []
```
