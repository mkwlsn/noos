---
title: NodeChange
slug: NodeChange
source_file: plugin-api-NodeChange.html
source_url: https://www.figma.com/plugin-docs/api/NodeChange/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 6529367838a26890
token_count: 511
---
# NodeChange

Figma has three types of page node changes that we currently notify on.

```
type NodeChange = | CreateChange | DeleteChange | PropertyChange
```## NodeChange (common properties)

### node: SceneNode | RemovedNode

The node that changed in the document. If the node has been removed since the event happened this will be a [`RemovedNode`](/plugin-docs/api/RemovedNode/)

## CreateChange

Emitted when a node has been created in the page. If a node with nested children is being added to the page a `CreateChange` will only be made for the highest level parent that was added to the page.

### type: 'CREATE'

The string literal "CREATE" representing the type of document change this is. Always check the type before reading other properties.

### node: SceneNode | RemovedNode

The node that changed in the document. If the node has been removed since the event happened this will be a [`RemovedNode`](/plugin-docs/api/RemovedNode/)

## DeleteChange

Emitted when a node has been removed from the page. If a node with nested children is being removed from the page a `DeleteChange` will only be made for the highest level parent that was removed from the page.

### type: 'DELETE'

The string literal "DELETE" representing the type of document change this is. Always check the type before reading other properties.

### node: SceneNode | RemovedNode

The node that changed in the document. If the node has been removed since the event happened this will be a [`RemovedNode`](/plugin-docs/api/RemovedNode/)

## PropertyChange

Emitted when a property of a node has changed.

### type: 'PROPERTY_CHANGE'

The string literal "PROPERTY_CHANGE" representing the type of document change this is. Always check the type before reading other properties.

### properties: NodeChangeProperty[]

Array of properties that have been changed on the node.

### node: SceneNode | RemovedNode

The node that changed in the document. If the node has been removed since the event happened this will be a [`RemovedNode`](/plugin-docs/api/RemovedNode/)