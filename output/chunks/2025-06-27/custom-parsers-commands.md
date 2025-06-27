---
title: Commands
slug: custom-parsers-commands
source_file: code-connect-custom-parsers.html
source_url: 'https://www.figma.com/code-connect-docs/custom-parsers/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: a3e6d219ebad3cee
token_count: 443
chunk_title: Commands
chunk_slug: custom-parsers-commands
chunk_index: 1
chunk_of_total: 6
parent_file: custom-parsers.md
parent_slug: custom-parsers
char_count: 1548
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - custom-parsers-introduction
  - custom-parsers-config
  - custom-parsers-input
  - custom-parsers-output
  - custom-parsers-example-template-implementation
compiler: noos-figma
---

Please refer to the general [documentation](/code-connect-docs/)
 for more information on the available CLI commands. When using a custom parser, the CLI commands communicate with the supplied parser command to request the appropriate Code Connect docs (for `publish` and `parse`), or to create Code Connect files (for `create`).

#### Publish and Parse commands

When using a custom parser, the `publish` and `parse` commands operate on all the files specified in the `includes` field and excluding those in the `excludes` field of the [`figma.config.json`](/code-connect-docs/api/config-file/)
. It then runs the `parserCommand` supplied in the config, passing an object of type `ParseRequestPayload` by stdin. The `parserCommand` then parses the files and generates Code Connect documents, including template code using the [Template API](/code-connect-docs/template-api/)
, then outputs a return object of type `ParseResponsePayload` via stdout. If the `publish` command was chosen, then these are published to Figma.

```
npx figma connect publish --config figma.config.json --token 
```

#### Create

The `create` command fetches the specified component's definition from Figma, then invokes the `parserCommand` in the `figma.config.json` with an object of type `CreateRequestPayload` passed by stdin, which contains details about the components. The parser then creates any relevant Code Connect file(s), and returns an object of type `CreateResponsePayload` to stdout.

```
npx figma connect create "" -config figma.config.json --token 
```
