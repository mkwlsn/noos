---
title: Input
slug: custom-parsers-input
source_file: code-connect-custom-parsers.html
source_url: 'https://www.figma.com/code-connect-docs/custom-parsers/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 200fbe8aaa677588
token_count: 750
chunk_title: Input
chunk_slug: custom-parsers-input
chunk_index: 3
chunk_of_total: 6
parent_file: custom-parsers.md
parent_slug: custom-parsers
char_count: 2623
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - custom-parsers-introduction
  - custom-parsers-commands
  - custom-parsers-config
  - custom-parsers-output
  - custom-parsers-example-template-implementation
compiler: noos-figma
---

The input type for a `parse` request has the following structure:

```
export type ParseRequestPayload = { mode: 'PARSE' // An array of absolute paths for the parser to process, representing all // files matched by the include/exclude globs for this parser. paths: string[] // Config options passed into this parser (not all parsers) from the config. // Each parser's configuration is separate and can take any shape, though we // will recommend using the same naming for common concepts like "importPaths". config: Record}
```The input type for a `create` request has the following structure:

```
export type CreateRequestPayload = { mode: 'CREATE' // Absolute destination directory for the created file. The parser is free to // write to a different directory if appropriate (e.g. it analyses your codebase // to identify where this component should go), but usually it should respect this. destinationDir: string // Optional destination file name. If omitted, the parser can determine the // file name itself. destinationFile?: string // The filepath of the code to be connected. If present, this is used instead of // component.normalizedName sourceFilepath?: string // The export to use from sourceFilepath (TypeScript only) sourceExport?: string // A mapping of how Figma props should map to code properties propMapping?: PropMapping // Information about the Figma component. This matches the REST API (except the // figmaNodeUrl and normalizedName fields), which should make it easier to // implement and maintain as we can just pass it through component: { // The URL of the Figma component. This field is not in the REST API but // is added for convenience. figmaNodeUrl: string // The ID of the Figma component id: string // The name of the Figma component name: string // The name of the Figma component, nomalized for use in code. // This field is not in the REST API but is added for convenience. normalizedName: string // The type of the Figma component type: 'COMPONENT' | 'COMPONENT_SET' // Map of the Figma component's properties, keyed by property name componentPropertyDefinitions: Record } // The configuration object for this parser. // Each parser's configuration is separate and can take any shape, though we // will recommend using the same naming for common concepts like "importPaths". config: Record}export type ComponentPropertyDefinition = { // The property type type: 'BOOLEAN' | 'INSTANCE_SWAP' | 'TEXT' | 'VARIANT' // The default value of this property defaultValue: boolean | string // All possible values for this property. Only exists on VARIANT properties variantOptions?: string[]}
```
