---
title: `documentUrlSubstitutions`
slug: config-file-documenturlsubstitutions
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 7f093bf979b6f279
token_count: 337
chunk_title: `documentUrlSubstitutions`
chunk_slug: config-file-documenturlsubstitutions
chunk_index: 5
chunk_of_total: 10
parent_file: config-file.md
parent_slug: config-file
char_count: 1177
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-include-and-exclude", "config-file-parser", "config-file-label", "config-file-interactivesetupfigmafileurl", "config-file-importpaths", "config-file-paths", "config-file-imports", "config-file-xcodeprojpath"]
---

`documentUrlSubstitutions` allows you to specify a set of substitutions that are run on the `figmaNode` URLs when parsing or publishing documents.

This lets you use multiple `figma.config.json` files to publish Code Connect snippets for different Figma files without having to modify every Code Connect file. For example, you could use substitutions to set up a testing version of your Code Connect components.

Substitutions are specified as an object, where the key is the string to be replaced, and the value is the string to replace that with.

Consider this example:

```
{ "codeConnect": { "documentUrlSubstitutions": { "https://figma.com/design/1234abcd/File-1": "https://figma.com/design/5678dcba/File-2" } }}
```The substitution in the previous example changes Figma node URLs like `https://figma.com/design/1234abcd/File-1/?node-id=12:345` to `https://figma.com/design/5678dbca/File-2/?node-id=12:345`.

## React-specific project configuration

```
{ "codeConnect": { "parser": "react", "include": [], "exclude": ["test/**", "docs/**", "build/**"], "importPaths": { "src/components/*": "@ui/components" }, "paths": { "@ui/components/*": ["src/components/*"] } }}
```