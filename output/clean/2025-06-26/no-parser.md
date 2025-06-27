---
title: Writing Code Connect without a parser
slug: no-parser
source_file: code-connect-no-parser.html
source_url: https://www.figma.com/code-connect-docs/no-parser/
doc_type: code-connect
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 1943b937ace3957c
token_count: 758
---
# Writing Code Connect without a parser

This is a supplementary feature for handling complex use cases that aren't fully covered by the existing Code Connect APIs (React, HTML, Compose, SwiftUI). While most use cases can be handled by the standard APIs, you may have use cases when you need:

- Custom Property Transformations: When you need complex logic to transform component properties beyond simple mapping, like combining multiple properties into a single prop or applying conditional logic
- Cross-Component Communication: When components need to share data or state that isn't represented in the Figma hierarchy
- Custom Code Organization: When you need to control exactly how nested components are rendered, like flattening a deep component tree or reorganizing the component hierarchy

## Setup

To use:

1. Add the `--include-template-files` flag to your Code Connect command:

```
figma connect publish --include-template-files
```1. Make sure your `figma.config.json` also includes `.figma.template.js` files:

```
{ "include": [ "**/*.figma.template.js" ]}
```1. Write your `.figma.template.js` file. It should follow the below format:

```
// url=https://www.figma.com/file/your-file-id/Component?node-id=123const figma = require('figma')const instance = figma.selectedInstance// code using [Template V2 API](/template-v2-api)
```## Connecting to Figma Nodes

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