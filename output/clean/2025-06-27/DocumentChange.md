---
title: DocumentChange
slug: DocumentChange
source_file: plugin-api-DocumentChange.html
source_url: https://www.figma.com/plugin-docs/api/DocumentChange/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 011db517b57165f4
token_count: 875
---
# DocumentChange

Figma has 6 types of document changes that we currently notify on.

```
type DocumentChange = | CreateChange | DeleteChange | PropertyChange | StyleCreateChange | StyleDeleteChange | StylePropertyChange
```

## DocumentChange (common properties)

### id: string

The id of the node / style that is subject to the document change. The same that is on `node.id` or `style.id`

### origin: 'LOCAL' | 'REMOTE'

Where the change originates from. If the change is 'LOCAL' it is from the user running the plugin and if it is 'REMOTE' it is from a different user in the file.

## CreateChange

Emitted when a node has been created in the document. If a node with nested children is being added to the document a `CreateChange` will only be made for the highest level parent that was added to the document.

### type: 'CREATE'

The string literal "CREATE" representing the type of document change this is. Always check the type before reading other properties.

### node: SceneNode | RemovedNode

The node that changed in the document. If the node has been removed since the event happened this will be a [`RemovedNode`](/plugin-docs/api/RemovedNode/)

## DeleteChange

Emitted when a node has been removed from the document. If a node with nested children is being removed from the document a `DeleteChange` will only be made for the highest level parent that was removed from the document.

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

## StyleCreateChange

Emitted when a style has been added to the document.

### type: 'STYLE_CREATE'

The string literal "STYLE_CREATE" representing the type of document change this is. Always check the type before reading other properties.

### style: BaseStyle | null

The style that has been updated in the document. This is null for StyleDeleteChange.

## StyleDeleteChange

Emitted when a style has been removed from the document.

### type: 'STYLE_DELETE'

The string literal "STYLE_DELETE" representing the type of document change this is. Always check the type before reading other properties. In this case, the returned style is null.

### style: BaseStyle | null

The style that has been updated in the document. This is null for StyleDeleteChange.

## StylePropertyChange

Emitted when a style has had a property changed.

### type: 'STYLE_PROPERTY_CHANGE'

The string literal "STYLE_PROPERTY_CHANGE" representing the type of document change this is. Always check the type before reading other properties.

### properties: StyleChangeProperty[]

Array of properties that have been changed on the node.

### style: BaseStyle | null

The style that has been updated in the document. This is null for StyleDeleteChange.