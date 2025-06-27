---
title: Before you begin
slug: quickstart-guide-before-you-begin
source_file: code-connect-quickstart-guide.html
source_url: 'https://www.figma.com/code-connect-docs/quickstart-guide/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 1abd039ea1a4cd32
token_count: 434
chunk_title: Before you begin
chunk_slug: quickstart-guide-before-you-begin
chunk_index: 1
chunk_of_total: 10
parent_file: quickstart-guide.md
parent_slug: quickstart-guide
char_count: 1516
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - quickstart-guide-introduction
  - quickstart-guide-set-up-dependencies-swiftui-jetpack-comp
  - quickstart-guide-install-the-code-connect-command-line-to
  - quickstart-guide-privacy-and-code-connect
  - quickstart-guide-use-the-interactive-setup
  - quickstart-guide-publish-code-connect-files
  - quickstart-guide-unpublish-code-connect-files
  - quickstart-guide-imports
  - quickstart-guide-figmaconnect
compiler: noos-figma
---

Code Connect is a design system tool and this guide is intended to help Design System engineers get started using Code Connect. To use this guide, you need a design system codebase that contains components, and a Figma design library (a Figma file that contains your root design system components).

To follow along with the guide, you can optionally use the Simple Design System (SDS) provided by Figma. If you’d like to use the SDS:

1. Open the Simple Design System community file in Figma and, when prompted, select Make a copy. The SDS community file contains the design system components.
2. Clone the sds repository. The repository contains the code components that you’ll connect to your copy of the SDS file.
3. After cloning, update the URLs in in the `documentUrlSubstitutions` section of `figma.config.json` to point to your Figma file. You only need to change the the file key (e.g. `J0KLPKXiONDRssXD1AX9Oi`) in the URLs.

Requirements

To install and use Code Connect, you must do the following:

- Install Node.js 18 or newer
- Generate a personal access token with the Code Connect scope set to Write and the File content scope set to Read-only.

Code Connect Platform Versions

- Web (including React and HTML)Code Connect: v1.3.2
- Code Connect: v1.3.2
- iOSCode Connect for SwiftUI: v1.3.2
- Code Connect for SwiftUI: v1.3.2
- Jetpack Compose`com.figma.code.connect`: v1.2.1`code-connect-lib`: v1.1.3Kotlin: v2.0.21
- `com.figma.code.connect`: v1.2.1
- `code-connect-lib`: v1.1.3
- Kotlin: v2.0.21
