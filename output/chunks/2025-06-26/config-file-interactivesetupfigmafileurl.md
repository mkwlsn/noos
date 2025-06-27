---
compiler: noos-figma
created: '2025-06-27T06:12:59.184Z'
version: 1.0.0
content_hash: 35d9d183e99cddf8
---
---
title: `interactiveSetupFigmaFileUrl`
slug: config-file-interactivesetupfigmafileurl
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: d62ef0a6c95e1442
token_count: 977
chunk_title: `interactiveSetupFigmaFileUrl`
chunk_slug: config-file-interactivesetupfigmafileurl
chunk_index: 2
chunk_of_total: 4
parent_file: config-file.md
parent_slug: config-file
char_count: 3417
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-include-and-exclude", "config-file-imports"]
---

`interactiveSetupFigmaFileUrl` allows you to specify the Figma file to use during the [interactive setup](/code-connect-docs/quickstart-guide/#use-the-interactive-setup). When present in your `figma.config.json` file, this URL will automatically be used as the Figma file URL for connecting components.

If you already have a `figma.config.json` file, you can add this option to the existing file.

```
{ "codeConnect": { "interactiveSetupFigmaFileUrl": "https://www.figma.com/design/abc123/my-design-system" }}
```### `documentUrlSubstitutions`

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
```### `importPaths`

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
```### `paths`

If you're using path aliases in your TypeScript project configuration, you must set `paths` in `figma.config.json` so Code Connect knows how to resolve your imports. The `paths` object in your Code Connect config file should match the `paths` object used in your project's tsconfig.json.
