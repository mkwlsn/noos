---
title: Use the interactive setup
slug: quickstart-guide-use-the-interactive-setup
source_file: code-connect-quickstart-guide.html
source_url: 'https://www.figma.com/code-connect-docs/quickstart-guide/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 74e1c33fdae0d315
token_count: 1187
chunk_title: Use the interactive setup
chunk_slug: quickstart-guide-use-the-interactive-setup
chunk_index: 5
chunk_of_total: 10
parent_file: quickstart-guide.md
parent_slug: quickstart-guide
char_count: 4154
heading_level: h3
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - quickstart-guide-introduction
  - quickstart-guide-before-you-begin
  - quickstart-guide-set-up-dependencies-swiftui-jetpack-comp
  - quickstart-guide-install-the-code-connect-command-line-to
  - quickstart-guide-privacy-and-code-connect
  - quickstart-guide-publish-code-connect-files
  - quickstart-guide-unpublish-code-connect-files
  - quickstart-guide-imports
  - quickstart-guide-figmaconnect
compiler: noos-figma
---

##### important

Important: The interactive setup provided by Code Connect cannot be used with HTML components. HTML code components must be manually mapped your design system components.

To help scaffold out your Code Connect files quickly, the Code Connect command line tool includes an interactive setup. The interactive setup walks you through the steps needed to connect your React components to the components in your design system.

To use the interactive setup:

1. In the root of your repository, run the following command using your personal access token:```
npx figma connect --token=PERSONAL_ACCESS_TOKEN
```Where `PERSONAL_ACCESS_TOKEN` is your Figma personal access token.

##### note

Note: Optionally, you can use the `FIGMA_ACCESS_TOKEN` environment variable to pass your personal access token to the Code Connect command line tool. When using the env variable, you do not have to include `--token`.The interactive setup appears in your terminal.
2. The interactive setup prompts you to set the top-level directory for your code components. Enter the directory that contains your components relative to the root of your codebase. For example, `./src/ui`.If you’re using the sds repository, the top-level directories are already configured in the repository’s `figma.config.json` file and the interactive setup skips this step.
3. When prompted for the URL for your design system library, type the URL for the Figma file that contains your components. You must use the file that contains the root components for your design system, rather than a file that only contains component instances. For example, `https://www.figma.com/design/Z10uUjzFkYk06z50swsGzY`.
4. When asked if you want to create a `figma.config.json` file, press Enter to create the file. We’ll discuss the function and content of the file later in this guide.If you’re using the sds repository or you’ve already created a config file, then the interactive setup skips this step.
5. The interactive setup is ready to start mapping properties between your Figma file and the components in your repository. To use the default method of prop mapping, press Enter.If your plan includes Figma’s AI features, you can optionally select Use AI for prop mapping. Using that method, Figma will intelligently build the prop mappings for you.

##### important

Important:- AI prop mapping is only available for React components
- AI must be enabled in your team or organization’s Figma settings
- We do not store or use any of the data collected for AI training purposes

Using the method you selected, the interactive setup does its best to match Figma components from the file you provided with a corresponding code component:The list in the terminal shows the Figma components and the corresponding code component that the tool identified as a match. For each match, the tool will create a separate Code Connect file.To edit the links, use the arrow keys to move up and down the list. Press enter to select a component, and then you can navigate a list of available code components to find a match. The list can be filtered by typing. You can also enter `none` to remove the component from the list.When you’re ready to continue, press esc.
6. The interactive setup prompts you to specify where you want the Code Connect files to be created. By default, the files will be created in the same directories as your code components. We recommend that you create a `figma` directory for the Code Connect files. For example, `./src/figma`.
7. The interactive setup asks you to confirm the operation. To create the Code Connect mappings, select Create files. Optionally, you can continue to edit the mappings, or exit the operation before creating any files.When the interactive setup finishes, you can view the files that were created in the directory you specified, or using the list of files returned by the interactive setup.The Code Connect files are created and the properties for your Figma components and code components are mapped. However, the matching code snippets aren't visible in Dev Mode yet. To make the code snippets visible, you need to publish the Code Connect files.
