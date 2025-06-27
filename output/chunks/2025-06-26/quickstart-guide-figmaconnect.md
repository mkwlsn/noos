---
title: figma.connect
slug: quickstart-guide-figmaconnect
source_file: code-connect-quickstart-guide.html
source_url: 'https://www.figma.com/code-connect-docs/quickstart-guide/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 5a2c5c7545ec9938
token_count: 456
chunk_title: figma.connect
chunk_slug: quickstart-guide-figmaconnect
chunk_index: 7
chunk_of_total: 8
parent_file: quickstart-guide.md
parent_slug: quickstart-guide
char_count: 1593
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - quickstart-guide-introduction
  - quickstart-guide-before-you-begin
  - quickstart-guide-set-up-dependencies-swiftui-jetpack-comp
  - quickstart-guide-use-the-interactive-setup
  - quickstart-guide-publish-code-connect-files
  - quickstart-guide-unpublish-code-connect-files
  - quickstart-guide-imports
compiler: noos-figma
---

The component in a Code Connect file is described using the `figma.connect` method. The method takes three arguments: the component imported from your codebase, the URL to the corresponding node in your design system file, and an object that defines the component’s properties and a usage example.

- `props` is an object that maps properties in your Figma file to properties of the component in your codebase. When you use the interactive setup, if there’s a property in your Figma file that isn’t included in your code component, Code Connect adds comments that describe the missing property. The mappings also describe the value types, such as `figma.string` and `figma.boolean`.##### note

Note: Typically, when you see missing properties, it means that your code is either structured slightly differently or the properties have different names. Either way, it’s good to review these unmapped properties to see if they should be accounted for.
- `example` defines how the corresponding code snippet is shown in Dev Mode. By default, the Code Connect files created by the interactive setup use your code component and the mapped props as the example.

## Next Steps

Now that you’ve created your Code Connect files and you’re showing code snippets in Dev Mode, you’re ready for the next steps. Here are some things to try:

- Connect additional frameworks to your Design System Libraries (e.g. React for web and iOS for mobile)
- Build more complex property mappings (e.g. Create nested or shared properties)
- Install the VS Code extension to retrieve code connected components in your IDE
