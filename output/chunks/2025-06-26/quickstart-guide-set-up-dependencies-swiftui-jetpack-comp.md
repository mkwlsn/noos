---
title: 'Set up dependencies (SwiftUI, Jetpack Compose)'
slug: quickstart-guide-set-up-dependencies-swiftui-jetpack-comp
source_file: code-connect-quickstart-guide.html
source_url: 'https://www.figma.com/code-connect-docs/quickstart-guide/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 0a5810902b1a9c07
token_count: 654
chunk_title: 'Set up dependencies (SwiftUI, Jetpack Compose)'
chunk_slug: quickstart-guide-set-up-dependencies-swiftui-jetpack-comp
chunk_index: 2
chunk_of_total: 8
parent_file: quickstart-guide.md
parent_slug: quickstart-guide
char_count: 2286
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - quickstart-guide-introduction
  - quickstart-guide-before-you-begin
  - quickstart-guide-use-the-interactive-setup
  - quickstart-guide-publish-code-connect-files
  - quickstart-guide-unpublish-code-connect-files
  - quickstart-guide-imports
  - quickstart-guide-figmaconnect
compiler: noos-figma
---

To use Code Connect with SwiftUI and Jetpack Compose, you must also add Code Connect to your list of dependencies.

##### important

Important: These dependency steps are only for SwiftUI and Jetpack Compose. If you're getting started with other frameworks, you can [skip to the next section](#install-the-code-connect-command-line-tool).

SwiftUI

For SwiftUI, add Code Connect as a dependency in the initializer for your package, both for the project itself and for any relevant targets.

```
let package = Package( name: "ExampleProject", platforms: [...], products: [...], dependencies: [ .package(url: "https://github.com/figma/code-connect", from: "1.0.0"), ], targets: [ .target( name: "ExampleTarget", dependencies: [ .product(name: "Figma", package: "code-connect") ] ) ])
```Jetpack Compose

For Jetpack Compose, update your `build.gradle.kts` file to include the Code Connect plugin, and add Code Connect as a dependency.

```
plugins { ..., id("com.figma.code.connect") version "1.+"}...dependencies { ..., implementation("com.figma.code.connect:code-connect-lib:1.+")}
```### Install the Code Connect command line tool

To use Code Connect, you first need to install the Code Connect command line tool. The command line tool lets you connect, publish, and unpublish your components. It also provides a setup wizard to ease getting started, and an AI mapping tool if your plan includes Figma’s AI tools.

The easiest way to install the command line tool is with Node Package Manager (`npm`). To install the command line tool, use:

```
npm install --global @figma/code-connect@latest
```### Privacy and Code Connect

Figma only collects the minimum data needed to enable Code Connect in the interface. When you run `figma connect` using the Code Connect command-line interface, Figma gets the following data:

- The paths for components that are added
- The repository URL where the Code Connect components are implemented
- The properties and code in the .figma files

Figma logs only basic events for understanding Code Connect usage: when components are published or unpublished, and calls to get Figma data when using the command-line interface.

For more information about Figma's approach to privacy, see Figma's [Privacy Policy](https://www.figma.com/legal/privacy/).
