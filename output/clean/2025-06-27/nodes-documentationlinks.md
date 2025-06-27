---
title: documentationLinks
slug: nodes-documentationlinks
source_file: plugin-api-nodes-documentationlinks.html
source_url: https://www.figma.com/plugin-docs/api/nodes-documentationlinks/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 7757c5708a70fbb7
token_count: 126
---
# documentationLinks

The documentation links for this style/component.

 Supported on:

- ComponentNode
- ComponentSetNode
- EffectStyle
- GridStyle
- PaintStyle
- TextStyle

## Signature

### documentationLinks: ReadonlyArray

## Remarks

This API currently only supports setting a single documentation link. To clear the documentation links, set to the empty list [].

Example:

```
node.documentationLinks = [{uri: "https://www.figma.com"}]// clear documentation linksnode.documentationLinks = []
```