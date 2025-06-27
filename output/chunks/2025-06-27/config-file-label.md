---
title: `label`
slug: config-file-label
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 996cefca621ef5db
token_count: 200
chunk_title: `label`
chunk_slug: config-file-label
chunk_index: 3
chunk_of_total: 10
parent_file: config-file.md
parent_slug: config-file
char_count: 700
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["config-file-introduction", "config-file-include-and-exclude", "config-file-parser", "config-file-interactivesetupfigmafileurl", "config-file-documenturlsubstitutions", "config-file-importpaths", "config-file-paths", "config-file-imports", "config-file-xcodeprojpath"]
---

`label` lets you specify the label that appears in Figma for your Code Connect snippets. The label defaults to your project type, such as `React`. Setting a different label for the snippets in Dev Mode can be useful, such as for showing different versions of the code.

For [HTML projects](/code-connect-docs/html/)
, Code Connect sets the default label based on HTML-based frameworks detected in the first ancestor `package.json` of the working directory which matches one of the following:

- If a `package.json` containing `angular` is found, the label is set to `Angular`
- If a `package.json` containing `vue` is found, the label is set to `Vue`
- Otherwise, the label is set to `Web Components`