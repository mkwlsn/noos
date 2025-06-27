---
title: Output
slug: custom-parsers-output
source_file: code-connect-custom-parsers.html
source_url: 'https://www.figma.com/code-connect-docs/custom-parsers/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 078aa47dc4ef3ec5
token_count: 893
chunk_title: Output
chunk_slug: custom-parsers-output
chunk_index: 4
chunk_of_total: 6
parent_file: custom-parsers.md
parent_slug: custom-parsers
char_count: 3125
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - custom-parsers-introduction
  - custom-parsers-commands
  - custom-parsers-config
  - custom-parsers-input
  - custom-parsers-example-template-implementation
compiler: noos-figma
---

The expected type for the output of the `parse` command is below. The `template` field is the Javascript that is used to render the snippet in the Code Connect panel. The API documentation can be found [here](/code-connect-docs/template-api/)
.

```
export const ParseResponsePayload = { // Array of Code Connect docs parsed from the input files docs: { // The Figma node URL the doc links to e.g. https://www.figma.com/design/123/MyFile?node-id=1-1 figmaNode: string, // Optional component name. This is only used for display purposes // so can be omitted if it's not relevant to the language/framework component?: string, // Variant restrictions keyed by Figma property name e.g. `{ 'With icon': true }` variant?: Record, // Source path - a relative path to the file containing the component definition source: string, // Optional source location containing line number information. sourceLocation?: { // Optional line number to link to. This is only used if type === 'PATH', // to generate a link to the correct line line: number }, // The JS template function to use for this doc template: string, templateData: { // Map of information describing the props used by the template. This is // used by the CLI to validate props before publishing. props: PropMapping, // Optional array of imports for this component. These are prepended // to the example code. imports?: string[], // Whether the example should be rendered inline if it's a nested instance nestable?: boolean, }), // The language to use for syntax highlighting // supported values can be found in the SyntaxHighlightLanguage type below language: SyntaxHighlightLanguage, // Label to be used for the example in the UI label: string, }[], // Any info, warning or error messages generated during parsing. messages: ParserExecutableMessages,}export const ParserExecutableMessages = { // DEBUG and INFO messages should be output to console by the CLI for the // user to read, according to the current log level setting. // // If any WARNING or ERROR messages are returned, the CLI can determine // whether it should proceed with publishing or not based on configuration // and the return code should be zero or non-zero as appropriate. level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR', // Optional type of message which can be displayed highlighted in the output type?: string, message: string, // Optional source location which can be displayed in a standardised form sourceLocation?: { file: string, line?: number, },}[]export type PropMapping = Recordexport type SyntaxHighlightLanguage = | 'typescript' | 'cpp' | 'ruby' | 'css' | 'javascript' | 'html' | 'json' | 'graphql' | 'python' | 'go' | 'sql' | 'swift' | 'kotlin' | 'rust' | 'bash' | 'xml' | 'plaintext' | 'jsx' | 'tsx' | 'dart'
```The expected type for the output of the `create` command has the following structure:

```
export const CreateResponsePayload = { // A list of files created, which can be output to the console createdFiles: { // The absolute path of the created file filePath: string, }[], // Any info, warning or error messages generated during creation. messages: ParserExecutableMessages,}
```
