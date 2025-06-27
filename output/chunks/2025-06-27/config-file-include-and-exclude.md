---
title: `include` and `exclude`
slug: config-file-include-and-exclude
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 11b6ef81649328b6
token_count: 116
chunk_title: `include` and `exclude`
chunk_slug: config-file-include-and-exclude
chunk_index: 1
chunk_of_total: 10
parent_file: config-file.md
parent_slug: config-file
char_count: 405
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-parser", "config-file-label", "config-file-interactivesetupfigmafileurl", "config-file-documenturlsubstitutions", "config-file-importpaths", "config-file-paths", "config-file-imports", "config-file-xcodeprojpath"]
---

`include` and `exclude` are lists of globs for where to parse Code Connect files, and for where to search for your component code when using the [interactive setup](/code-connect-docs/quickstart-guide/#use-the-interactive-setup)
. `include` and `exclude` paths must be relative to the location of the config file.

```
{ "codeConnect": { "include": [], "exclude": ["test/**", "docs/**", "build/**"] }}
```