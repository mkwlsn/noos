---
title: Config
slug: custom-parsers-config
source_file: code-connect-custom-parsers.html
source_url: 'https://www.figma.com/code-connect-docs/custom-parsers/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 4be624bf9fb94552
token_count: 194
chunk_title: Config
chunk_slug: custom-parsers-config
chunk_index: 2
chunk_of_total: 6
parent_file: custom-parsers.md
parent_slug: custom-parsers
char_count: 678
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - custom-parsers-introduction
  - custom-parsers-commands
  - custom-parsers-input
  - custom-parsers-output
  - custom-parsers-example-template-implementation
compiler: noos-figma
---

Custom parsers must be configured in the `figma.config.json`. In addition to [general configuration](/code-connect-docs/api/config-file/)
, custom parsers require the following fields:

- `parser`: This must be set to `"custom"`
- `parserCommand`: This is the full path or command to invoke the parser, such as `./tools/parser` or `node parser.js`
- `includes`: This field is required for custom parsers and specifies what files are passed to the binary when running `parse` or `publish`

#### Example figma.config.json file

```
{ "codeConnect": { "parser": "custom", "parserCommand": "node ../parserDirectory/parser.js", "include": [ "**/*.figma.test" ], "exclude": [ ] }}
```
