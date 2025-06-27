---
title: `"documentchange"`
slug: figma-on-documentchange
source_file: plugin-api-figma-on.html
source_url: https://www.figma.com/plugin-docs/api/figma-on/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: c0970ff6043601b8
token_count: 1083
chunk_title: `"documentchange"`
chunk_slug: figma-on-documentchange
chunk_index: 4
chunk_of_total: 11
parent_file: figma-on.md
parent_slug: figma-on
char_count: 3789
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: ["figma-on-introduction", "figma-on-ontype-stylechange-callback-event-stylec", "figma-on-callback", "figma-on-currentpagechange-selectionchange", "figma-on-textreview", "figma-on-drop", "figma-on-close", "figma-on-run", "figma-on-stylechange", "figma-on-timerstart"]
---

If the plugin manifest contains `"documentAccess": "dynamic-page"`, you must first call [`figma.loadAllPagesAsync`](/plugin-docs/api/figma/#loadallpagesasync)
 to access this event. Because this may introduce a loading delay, consider using more granular alternatives, such as the `"stylechange"` event, or using [`PageNode.on`](/plugin-docs/api/properties/PageNode-on/)
 with the `"nodechange"` event.

This event will trigger when a change is made to the currently open file. The event will be called when nodes/styles are either added, removed, or changed in a document.

The callback will be passed with a DocumentChangeEvent with the below interface:

```
interface DocumentChangeEvent { documentChanges: DocumentChange[]}
```

##### info

Note that `DocumentChangeEvent` has a `documentChanges` property with an array of `DocumentChange`s. Figma will not call the 'documentchange' callback synchronously and will instead batch the updates and send them to the callback periodically.

There are 6 different [`DocumentChange`](/plugin-docs/api/DocumentChange/)
 types that we currently notify on and we might add more in the future. Each of these changes has a `type` property to distinguish them:

Change`type` propertyDescription[`CreateChange`](/plugin-docs/api/DocumentChange/#createchange)
`'CREATE'`A node has been created in the document. If a node with nested children is being added to the document a `CreateChange` will only be made for the highest level parent that was added to the document.[`DeleteChange`](/plugin-docs/api/DocumentChange/#deletechange)
`'DELETE'`A node has been removed from the document. If a node with nested children is being removed from the document a `DeleteChange` will only be made for the highest level parent that was removed from the document.[`PropertyChange`](/plugin-docs/api/DocumentChange/#propertychange)
`'PROPERTY_CHANGE'`A property of a node has changed.[`StyleCreateChange`](/plugin-docs/api/DocumentChange/#stylecreatechange)
`'STYLE_CREATE'`A style has been added to the document.[`StyleDeleteChange`](/plugin-docs/api/DocumentChange/#styledeletechange)
`'STYLE_DELETE'`A style has been removed from the document.[`StylePropertyChange`](/plugin-docs/api/DocumentChange/#stylepropertychange)
`'STYLE_PROPERTY_CHANGE'`A style has had a property changed.

#### Special cases

We currently never notify a `'documentchange'` listener in the following scenarios:

- if the change was caused directly by your plugin in a `documentchange` callback
- if an instance sublayer was updated by a change to a main component
- if a node was updated as a result of a style changing

#### Example

Here is an example of exhaustively checking changes to the document and logging them to the console.

```
figma.on("documentchange", (event) => {for (const change of event.documentChanges) { switch (change.type) { case "CREATE": console.log( `Node ${change.id} created by a ${change.origin.toLowerCase()} user` ); break; case "DELETE": console.log( `Node ${change.id} deleted by a ${change.origin.toLowerCase()} user` ); break; case "PROPERTY_CHANGE": for (const prop of change.properties) { console.log( `Node ${ change.id } had ${prop} changed by a ${change.origin.toLowerCase()} user` ); } break; case "STYLE_CREATE": console.log( `Style ${change.id} created by a ${change.origin.toLowerCase()} user` ); break; case "STYLE_DELETE": console.log( `Style ${change.id} deleted by a ${change.origin.toLowerCase()} user` ); break; case "STYLE_PROPERTY_CHANGE": for (const prop of change.properties) { console.log( `Style ${ change.id } had ${prop} changed by a ${change.origin.toLowerCase()} user` ); } break; } }});
```For a more involved example see our [plugin samples on GitHub](https://github.com/figma/plugin-samples/tree/master/document-change)
.