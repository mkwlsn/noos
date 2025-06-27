---
title: Example Template Implementation
slug: custom-parsers-example-template-implementation
source_file: code-connect-custom-parsers.html
source_url: 'https://www.figma.com/code-connect-docs/custom-parsers/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5798767973c963a3
token_count: 256
chunk_title: Example Template Implementation
chunk_slug: custom-parsers-example-template-implementation
chunk_index: 5
chunk_of_total: 6
parent_file: custom-parsers.md
parent_slug: custom-parsers
char_count: 893
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - custom-parsers-introduction
  - custom-parsers-commands
  - custom-parsers-config
  - custom-parsers-input
  - custom-parsers-output
compiler: noos-figma
---

Here's a comprehensive example showing how to implement a template using the Template API:

```
const figma = require('figma')const instance = figma.selectedInstance// Getting property valuesconst stringProp = instance.getString('String Prop')const booleanProp = instance.getBoolean('Boolean Prop')const enumProp = instance.getEnum('Enum Prop', { 'Option1': 'value1', 'Option2': 'value2'})// Finding layersconst textLayer = instance.findText('Label')const childInstance = instance.findInstance('Icon')const connectedInstance = instance.findConnectedInstance('button-123')// Using selector optionsconst nestedText = instance.findText('Description', { path: ['Container', 'Content'], traverseInstances: true})// Using selector functionsconst allButtons = instance.findConnectedInstances( node => node.properties['type'] === 'button')export default { example: figma.code``, id: 'example-id' }
```
