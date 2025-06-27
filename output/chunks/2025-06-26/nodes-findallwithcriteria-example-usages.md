---
title: Example Usages
slug: nodes-findallwithcriteria-example-usages
source_file: plugin-api-nodes-findallwithcriteria.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-findallwithcriteria/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 342f42bdbe925788
token_count: 460
chunk_title: Example Usages
chunk_slug: nodes-findallwithcriteria-example-usages
chunk_index: 3
chunk_of_total: 4
parent_file: nodes-findallwithcriteria.md
parent_slug: nodes-findallwithcriteria
char_count: 1608
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - nodes-findallwithcriteria-introduction
  - nodes-findallwithcriteria-signature-parameters
  - nodes-findallwithcriteria-remarks
compiler: noos-figma
---

### Find by node type

```
// Find all component and component set nodes in the current// pageconst nodes = figma.currentPage.findAllWithCriteria({ types: ['COMPONENT', 'COMPONENT_SET']})// Find all text nodes in the current pageconst nodes = figma.currentPage.findAllWithCriteria({ types: ['TEXT']})
```### Find by plugin data

```
// Find all nodes in the current page with plugin data// for the current plugin.const nodes = figma.currentPage.findAllWithCriteria({ pluginData: {}})// Find all nodes in the current page with plugin data// for the current plugin with keys "a" or "b"const nodes = figma.currentPage.findAllWithCriteria({ pluginData: { keys: ["a", "b"] }})
```### Find by shared plugin data

```
// Find all nodes in the current page with shared plugin data// stored on the "bar" namespaceconst nodes = figma.currentPage.findAllWithCriteria({ sharedPluginData: { namespace: "bar" }})// Find all nodes in the current page with shared plugin data// stored on the "bar" namespace and keys "a" or "b"const nodes = figma.currentPage.findAllWithCriteria({ sharedPluginData: { namespace: "bar", keys: ["a", "b"] }})
```### Combining criterias

You can combine multiple criterias for further narrow your search.

```
// Find all text nodes in the current page with plugin data// for the current pluginconst nodes = figma.currentPage.findAllWithCriteria({ types: ["TEXT"], pluginData: {}})// Find all text nodes in the current page with shared plugin data// stored on the "bar" namespaceconst nodes = figma.currentPage.findAllWithCriteria({ types: ["TEXT"], sharedPluginData: { namespace: "bar" }})
```
