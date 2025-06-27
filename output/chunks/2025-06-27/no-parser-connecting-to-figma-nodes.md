---
title: Connecting to Figma Nodes
slug: no-parser-connecting-to-figma-nodes
source_file: code-connect-no-parser.html
source_url: 'https://www.figma.com/code-connect-docs/no-parser/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2279483d6b09090b
token_count: 473
chunk_title: Connecting to Figma Nodes
chunk_slug: no-parser-connecting-to-figma-nodes
chunk_index: 2
chunk_of_total: 3
parent_file: no-parser.md
parent_slug: no-parser
char_count: 1653
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - no-parser-introduction
  - no-parser-setup
compiler: noos-figma
---

Each file is connected to a specific Figma component through a URL comment at the top of the file. This URL must point to the exact component node you want to template.

Here's how it works:

1. In Figma, right-click on your component and select "Copy link to selection" or copy the URL from the browser
2. Create a new `.figma.template.js` file
3. Add the URL as a comment at the top of the file (this is required for Code Connect to know which component to apply to)

When Code Connect processes your files:

1. It reads the URL comment to find the corresponding Figma component
2. The component's instance is made available via `figma.selectedInstance`
3. You can then access the component's properties, find child layers, and generate code using the Template V2 API

Here's a complete example showing how to use these concepts:

```
// url=https://www.figma.com/file/your-file-id/Component?node-id=123const figma = require('figma')const instance = figma.selectedInstance// Access component properties using the Template V2 APIconst labelText = instance.getString('Label') // Gets the value of a text propertyconst isDisabled = instance.getBoolean('Disabled') // Gets the value of a boolean property// Find and access child layersconst iconInstance = instance.findInstance('Icon') // Find a nested icon componentconst helperText = instance.findText('HelperText') // Find a text layer// Export the rendered code and optional metadataexport default { example: figma.code` `, id: 'my-component', // Optional: Custom identifier for referencing this component metadata: { nestable: false // Controls how this appears when nested in other components }}
```
