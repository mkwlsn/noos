---
title: Publish and Parse commands
slug: custom-parsers-publish-and-parse-commands
source_file: code-connect-custom-parsers.html
source_url: 'https://www.figma.com/code-connect-docs/custom-parsers/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 38f09a15096313d3
token_count: 480
chunk_title: Publish and Parse commands
chunk_slug: custom-parsers-publish-and-parse-commands
chunk_index: 1
chunk_of_total: 3
parent_file: custom-parsers.md
parent_slug: custom-parsers
char_count: 1678
heading_level: h4
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - custom-parsers-introduction
  - custom-parsers-example-figmaconfigjson-file
compiler: noos-figma
---

When using a custom parser, the `publish` and `parse` commands operate on all the files specified in the `includes` field and excluding those in the `excludes` field of the [`figma.config.json`](/code-connect-docs/api/config-file/). It then runs the `parserCommand` supplied in the config, passing an object of type `ParseRequestPayload` by stdin. The `parserCommand` then parses the files and generates Code Connect documents, including template code using the [Template API](/code-connect-docs/template-api/), then outputs a return object of type `ParseResponsePayload` via stdout. If the `publish` command was chosen, then these are published to Figma.

```
npx figma connect publish --config figma.config.json --token 
```#### Create

The `create` command fetches the specified component's definition from Figma, then invokes the `parserCommand` in the `figma.config.json` with an object of type `CreateRequestPayload` passed by stdin, which contains details about the components. The parser then creates any relevant Code Connect file(s), and returns an object of type `CreateResponsePayload` to stdout.

```
npx figma connect create "" -config figma.config.json --token 
```### Config

Custom parsers must be configured in the `figma.config.json`. In addition to [general configuration](/code-connect-docs/api/config-file/), custom parsers require the following fields:

- `parser`: This must be set to `"custom"`
- `parserCommand`: This is the full path or command to invoke the parser, such as `./tools/parser` or `node parser.js`
- `includes`: This field is required for custom parsers and specifies what files are passed to the binary when running `parse` or `publish`
