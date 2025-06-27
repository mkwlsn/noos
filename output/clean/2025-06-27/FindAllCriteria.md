---
title: FindAllCriteria
slug: FindAllCriteria
source_file: plugin-api-FindAllCriteria.html
source_url: https://www.figma.com/plugin-docs/api/FindAllCriteria/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: b2a9e98f47e0e86d
token_count: 417
---
# FindAllCriteria

The `FindAllCriteria` defines an object that specifies the search criteria for the [`node.findAllWithCriteria`](/plugin-docs/api/properties/nodes-findallwithcriteria/)
 method.

##### info

At least one of the following search criterias must be specified. If multiple are specified, only nodes that satisfy all criterias will be returned.

For more examples, see the documentation for [`node.findAllWithCriteria`](/plugin-docs/api/properties/nodes-findallwithcriteria/#example-usages)
.

### types?: T

If specified, the search will match nodes that have one of the given types.

```
// Find children of type text or frame.node.findAllWithCriteria({ types: ["TEXT", "FRAME"] })
```

### pluginData?: { keys: string[] }

If specified, the search will match nodes that have [`PluginData`](/plugin-docs/api/node-properties/#getplugindata)
 stored for your plugin.

```
// Find children that have plugin data stored.node.findAllWithCriteria({ pluginData: {} })// Find children that have plugin data stored with keys// "a" or "b"node.findAllWithCriteria({ pluginData: { keys: ["a", "b"] }})
```

### sharedPluginData?: { namespace: string; keys: string[] }

If specified, the search will match nodes that have [`SharedPluginData`](/plugin-docs/api/node-properties/#getsharedplugindata)
 stored on the given `namespace` and `keys`.

```
// Find children that have shared plugin data// on the "foo" namespace.node.findAllWithCriteria({ sharedPluginData: { namespace: "foo" }})// Find children that have shared plugin data// on the "foo" namespace with keys "a" or "b"node.findAllWithCriteria({ sharedPluginData: { namespace: "foo", keys: ["a", "b"] }})
```