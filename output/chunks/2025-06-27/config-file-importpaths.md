---
title: `importPaths`
slug: config-file-importpaths
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 1d6309f512de71dc
token_count: 393
chunk_title: `importPaths`
chunk_slug: config-file-importpaths
chunk_index: 6
chunk_of_total: 10
parent_file: config-file.md
parent_slug: config-file
char_count: 1374
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-include-and-exclude", "config-file-parser", "config-file-label", "config-file-interactivesetupfigmafileurl", "config-file-documenturlsubstitutions", "config-file-paths", "config-file-imports", "config-file-xcodeprojpath"]
---

`importPaths` lets you override the relative paths that are used to import code components in your Code Connect files. Specifying an import path is useful when you want users of your design system to import components from a specific package, rather than from a directory relative to your Code Connect files. The paths must be local.

Paths are specified in the `importPaths` object, where the key is the path you want to match and override, and the value is the path to use instead.

For example, assume you have a code component, `Button.tsx` in `./src/components/` (relative to your project root). In the same directory is a corresponding Code Connect file, `Button.figma.tsx`, which looks like this:

```
import { Button } from './'figma.connect(Button, 'https://...')
```For the `Button` import, you want to override the relative path (`./`) and specify a different path to import from. In your `figma.config.json` file, you add the following:

```
{ "codeConnect": { "importPaths": { "src/components/*": "@ui/components" } }}
```In `importPaths`, the `src/components/*` key uses the `*` wildcard to include all code components in that directory along with `Button.tsx`. The value is set to `@ui/components`. The next time you use the Code Connect CLI to manage your files, the Code Connect file for `Button` is updated:

```
import { Button } from '@ui/components'
```