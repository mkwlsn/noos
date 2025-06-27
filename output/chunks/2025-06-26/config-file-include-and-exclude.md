---
compiler: noos-figma
created: '2025-06-27T06:12:59.184Z'
version: 1.0.0
content_hash: 1e18b11f365e82c7
---
---
title: `include` and `exclude`
slug: config-file-include-and-exclude
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 0f196ea959f7981b
token_count: 530
chunk_title: `include` and `exclude`
chunk_slug: config-file-include-and-exclude
chunk_index: 1
chunk_of_total: 4
parent_file: config-file.md
parent_slug: config-file
char_count: 1853
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-interactivesetupfigmafileurl", "config-file-imports"]
---

`include` and `exclude` are lists of globs for where to parse Code Connect files, and for where to search for your component code when using the [interactive setup](/code-connect-docs/quickstart-guide/#use-the-interactive-setup). `include` and `exclude` paths must be relative to the location of the config file.

```
{ "codeConnect": { "include": [], "exclude": ["test/**", "docs/**", "build/**"] }}
```### `parser`

Code Connect tries to determine your project type by looking at the root of your project directory:

- If a `package.json` containing `react` is found, your project is detected as React
- If a `package.json` is found and doesn't contain `react`, your project is detected as HTML
- If a file matching `Package.swift` or `*.xcodeproj` is found, your project is detected as Swift
- If a file matching `build.gradle.kts` is found, your project is detected as Jetpack Compose

If your project framework isn't detected correctly, you can override the project type by using the `parser` key in your `figma.config.json` file. Valid values are `react`, `html`, `swift` and `compose`.

```
{ "codeConnect": { "parser": "react" }}
```### `label`

`label` lets you specify the label that appears in Figma for your Code Connect snippets. The label defaults to your project type, such as `React`. Setting a different label for the snippets in Dev Mode can be useful, such as for showing different versions of the code.

For [HTML projects](/code-connect-docs/html/), Code Connect sets the default label based on HTML-based frameworks detected in the first ancestor `package.json` of the working directory which matches one of the following:

- If a `package.json` containing `angular` is found, the label is set to `Angular`
- If a `package.json` containing `vue` is found, the label is set to `Vue`
- Otherwise, the label is set to `Web Components`
