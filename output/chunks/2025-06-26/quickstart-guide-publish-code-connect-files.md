---
title: Publish Code Connect files
slug: quickstart-guide-publish-code-connect-files
source_file: code-connect-quickstart-guide.html
source_url: 'https://www.figma.com/code-connect-docs/quickstart-guide/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 844be8202a2e881d
token_count: 320
chunk_title: Publish Code Connect files
chunk_slug: quickstart-guide-publish-code-connect-files
chunk_index: 4
chunk_of_total: 8
parent_file: quickstart-guide.md
parent_slug: quickstart-guide
char_count: 1119
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - quickstart-guide-introduction
  - quickstart-guide-before-you-begin
  - quickstart-guide-set-up-dependencies-swiftui-jetpack-comp
  - quickstart-guide-use-the-interactive-setup
  - quickstart-guide-unpublish-code-connect-files
  - quickstart-guide-imports
  - quickstart-guide-figmaconnect
compiler: noos-figma
---

To view the Code Connect snippets for your components in Dev Mode, you need to publish the files first:

1. In the root of your repository, run the following command using your personal access token:```
npx figma connect publish --token=PERSONAL_ACCESS_TOKEN
```Where `PERSONAL_ACCESS_TOKEN` is the access token for the Figma API that you generated.##### note

Note: Optionally, you can use the `FIGMA_ACCESS_TOKEN` environment variable to pass your personal access token to the Code Connect command line tool. When using the env variable, you do not have to include `--token`.##### note

Note: If the commands errors with a code `403`, it's likely because you didn't update the urls in `figma.config.json`The tool publishes your Code Connect files, returning a list of component names and URLs to the corresponding nodes.
2. To view the mapped components in Figma, click the links in the list after you publish. The links bring you to the corresponding components in your design system Figma file.
3. In the toolbar, click Dev Mode. The code snippet from Code Connect appears in the Inspect panel in the right sidebar.
