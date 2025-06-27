---
title: "SET_VARIABLE_MODE" action
slug: Action-setvariablemode-action
source_file: plugin-api-Action.html
source_url: https://www.figma.com/plugin-docs/api/Action/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: dbccabf07a6d0e6c
token_count: 418
chunk_title: "SET_VARIABLE_MODE" action
chunk_slug: Action-setvariablemode-action
chunk_index: 3
chunk_of_total: 6
parent_file: Action.md
parent_slug: Action
char_count: 1461
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["Action-introduction", "Action-url-action-updatemediaruntime-action", "Action-setvariable-action", "Action-conditional-action", "Action-node-action"]
---

Variable modes represent the different contexts of our designs. If a variable collection has multiple modes, then we can switch modes on layers and elements to quickly change designs for different contexts.

This action can switch the selected mode for a given collection at a page level.

- `variableCollectionId`: string: The variable collection ID of an existing variable collection.
- `variableModeId`: string: The variable mode ID of a mode that exists in the corresponding variable collection, which the action will switch to.

Example of creating a set variable mode reaction on a frame```
const collection = figma.variables.createVariableCollection("collection")const newModeId = collection.addMode("mode 2")const setModeAction = { type: 'SET_VARIABLE_MODE', variableCollectionId: collection.id, variableModeId: newModeId,}const reactions = [];reactions.push({ "actions": [setModeAction], "trigger": { "type": "ON_CLICK" }});// Add an "on click" interaction, with a "set variable mode" action// with the just-created collection and second mode.const hotspot = figma.createFrame()await hotspot.setReactionsAsync(reactions);console.log(hotspot.reactions)/* Output:[ { "action": { "type": "SET_VARIABLE_MODE", "variableCollectionId": "VariableCollectionId:0:1", "variableModeId": "1:1" }, "actions": [ { "type": "SET_VARIABLE_MODE", "variableCollectionId": "VariableCollectionId:0:1", "variableModeId": "1:1" } ], "trigger": { "type": "ON_CLICK" } }]*/
```