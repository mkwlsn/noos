---
title: findAllWithCriteria
slug: nodes-findallwithcriteria
source_file: plugin-api-nodes-findallwithcriteria.html
source_url: https://www.figma.com/plugin-docs/api/nodes-findallwithcriteria/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: e1ad21eda7e442b8
token_count: 998
---
# findAllWithCriteria

Searches this entire subtree (this node's children, its children's children, etc). Returns all nodes that satisfy all of specified criteria.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

 Supported on:

- BooleanOperationNode
- ComponentNode
- ComponentSetNode
- FrameNode
- GroupNode
- InstanceNode
- PageNode
- SectionNode
- SlideGridNode
- SlideNode
- SlideRowNode
- TransformGroupNode

## Signature

### findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } & SceneNode>

## Parameters

### criteria

An object of type [`FindAllCriteria`](/plugin-docs/api/FindAllCriteria/)
 that specifies the search criteria. The following criterias are currently supported:

- Nodes with specific `types`
- Nodes with `SharedPluginData` by their namespace and keys.
- Nodes with `PluginData` by their keys.
- A combination of any of the above.

## Remarks

This is a faster but more limited search compared to [`findAll`](/plugin-docs/api/properties/nodes-findall/)
, which lets you search nodes based on any logic you can include in a callback.

When paired with [`figma.skipInvisibleInstanceChildren = true`](/plugin-docs/api/properties/figma-skipinvisibleinstancechildren/)
, this method can be hundreds of times faster in large documents with tens of thousands of nodes.

The return value is narrowly typed to match the provided `types`, which makes it much easier to use node-type-specific properties. For example, `node.findAllWithCriteria({ types: ['TEXT'] })` will return `TextNode[]` instead of the more generic `SceneNode[]` from [`findAll`](/plugin-docs/api/properties/nodes-findall/)
.

Nodes are included in back-to-front order, which is the same order as in [`findAll`](/plugin-docs/api/properties/nodes-findall/)
. Parents always appear before their children, and children appear in same relative order before their children, and children appear in same relative order as in the [`children`](/plugin-docs/api/properties/nodes-children/)
 array.

This traversal method is known as ["pre-order traversal"](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR))
.

##### info

The node this method is called on is not included.

## Example Usages

### Find by node type

```
// Find all component and component set nodes in the current// pageconst nodes = figma.currentPage.findAllWithCriteria({ types: ['COMPONENT', 'COMPONENT_SET']})// Find all text nodes in the current pageconst nodes = figma.currentPage.findAllWithCriteria({ types: ['TEXT']})
```

### Find by plugin data

```
// Find all nodes in the current page with plugin data// for the current plugin.const nodes = figma.currentPage.findAllWithCriteria({ pluginData: {}})// Find all nodes in the current page with plugin data// for the current plugin with keys "a" or "b"const nodes = figma.currentPage.findAllWithCriteria({ pluginData: { keys: ["a", "b"] }})
```

### Find by shared plugin data

```
// Find all nodes in the current page with shared plugin data// stored on the "bar" namespaceconst nodes = figma.currentPage.findAllWithCriteria({ sharedPluginData: { namespace: "bar" }})// Find all nodes in the current page with shared plugin data// stored on the "bar" namespace and keys "a" or "b"const nodes = figma.currentPage.findAllWithCriteria({ sharedPluginData: { namespace: "bar", keys: ["a", "b"] }})
```

### Combining criterias

You can combine multiple criterias for further narrow your search.

```
// Find all text nodes in the current page with plugin data// for the current pluginconst nodes = figma.currentPage.findAllWithCriteria({ types: ["TEXT"], pluginData: {}})// Find all text nodes in the current page with shared plugin data// stored on the "bar" namespaceconst nodes = figma.currentPage.findAllWithCriteria({ types: ["TEXT"], sharedPluginData: { namespace: "bar" }})
```