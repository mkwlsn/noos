---
title: 'Set up dependencies (SwiftUI, Jetpack Compose)'
slug: quickstart-guide-set-up-dependencies-swiftui-jetpack-comp
source_file: code-connect-quickstart-guide.html
source_url: 'https://www.figma.com/code-connect-docs/quickstart-guide/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6ee7036252388e43
token_count: 311
chunk_title: 'Set up dependencies (SwiftUI, Jetpack Compose)'
chunk_slug: quickstart-guide-set-up-dependencies-swiftui-jetpack-comp
chunk_index: 2
chunk_of_total: 10
parent_file: quickstart-guide.md
parent_slug: quickstart-guide
char_count: 1086
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - quickstart-guide-introduction
  - quickstart-guide-before-you-begin
  - quickstart-guide-install-the-code-connect-command-line-to
  - quickstart-guide-privacy-and-code-connect
  - quickstart-guide-use-the-interactive-setup
  - quickstart-guide-publish-code-connect-files
  - quickstart-guide-unpublish-code-connect-files
  - quickstart-guide-imports
  - quickstart-guide-figmaconnect
compiler: noos-figma
---

To use Code Connect with SwiftUI and Jetpack Compose, you must also add Code Connect to your list of dependencies.

##### important

Important: These dependency steps are only for SwiftUI and Jetpack Compose. If you're getting started with other frameworks, you can [skip to the next section](#install-the-code-connect-command-line-tool)
.

SwiftUI

For SwiftUI, add Code Connect as a dependency in the initializer for your package, both for the project itself and for any relevant targets.

```
let package = Package( name: "ExampleProject", platforms: [...], products: [...], dependencies: [ .package(url: "https://github.com/figma/code-connect", from: "1.0.0"), ], targets: [ .target( name: "ExampleTarget", dependencies: [ .product(name: "Figma", package: "code-connect") ] ) ])
```Jetpack Compose

For Jetpack Compose, update your `build.gradle.kts` file to include the Code Connect plugin, and add Code Connect as a dependency.

```
plugins { ..., id("com.figma.code.connect") version "1.+"}...dependencies { ..., implementation("com.figma.code.connect:code-connect-lib:1.+")}
```
