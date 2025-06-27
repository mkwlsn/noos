---
title: Signature + Remarks
slug: nodes-resolvedvariablemodes-signature-remarks
source_file: plugin-api-nodes-resolvedvariablemodes.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-resolvedvariablemodes/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 522a401d6eb374f3
token_count: 405
chunk_title: Signature + Remarks
chunk_slug: nodes-resolvedvariablemodes-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-resolvedvariablemodes.md
parent_slug: nodes-resolvedvariablemodes
char_count: 1416
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - nodes-resolvedvariablemodes-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### resolvedVariableModes: { [collectionId: string]: string }

The set of resolved modes on a node includes the explicitly set modes on the node, as well as the explicitly set modes on ancestors of the node. By default, nodes [automatically inherit](https://help.figma.com/hc/en-us/articles/15343816063383-Modes-for-variables#Auto_mode) the modes of their parents.

explicitVariableModes vs resolvedVariableModes```
// Create two collections with two modes eachconst collection1 = figma.variables.createVariableCollection("Collection 1")const collection1Mode1Id = collection1.modes[0].modeIdconst collection1Mode2Id = collection1.addMode('Mode 2')const collection2 = figma.variables.createVariableCollection("Collection 2")const collection2Mode1Id = collection2.modes[0].modeIdconst collection2Mode2Id = collection2.addMode('Mode 2')const parentFrame = figma.createFrame()const childFrame = figma.createFrame()parentFrame.appendChild(childFrame)parentFrame.setExplicitVariableModeForCollection( collection1, collection1Mode2Id)childFrame.setExplicitVariableModeForCollection( collection2, collection2Mode1Id)// Example output (only collection2 is present):// { 'VariableCollectionId:1:3': '1:2' }console.log(childFrame.explicitVariableModes);// Example output (both collections are present):// { 'VariableCollectionId:1:2': '1:1', 'VariableCollectionId:1:3': '1:2' }console.log(childFrame.resolvedVariableModes);
```
