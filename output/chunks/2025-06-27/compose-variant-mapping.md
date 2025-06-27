---
title: Variant mapping
slug: compose-variant-mapping
source_file: code-connect-compose.html
source_url: 'https://www.figma.com/code-connect-docs/compose/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 08528a6e410cc96f
token_count: 425
chunk_title: Variant mapping
chunk_slug: compose-variant-mapping
chunk_index: 3
chunk_of_total: 4
parent_file: compose.md
parent_slug: compose
char_count: 1487
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - compose-introduction
  - compose-dynamic-code-snippets
  - compose-instance-children
compiler: noos-figma
---

Sometimes a component in Figma is represented by more than one component in code. For example you may have a single `Button` in your Figma design system with a `type` property to switch between primary, secondary, and danger variants. However, in code this may be represented by three different components, such as `PrimaryButton`, `SecondaryButton` and `DangerButton`.

To model this behavior with Code Connect, we can make use of variant mappings. These allow you to provide different code samples for different variants of a single Figma component.

```
@FigmaConnect("https://...")@FigmaVariant("Type", "Primary")class PrimaryButtonConnection { @Composable fun PrimaryButtonExample() { PrimaryButton(title: "Text") }}@FigmaConnect("https://...")@FigmaVariant("Type", "Secondary")class PrimaryButtonConnection { @Composable fun SecondaryButtonExample() { SecondaryButton(title: "Text") }}@FigmaConnect("https://...")@FigmaVariant("Type", "Danger")class DangerButtonConnection { @Composable fun DangerButtonExample() { DangerButton(title: "Text") }}
```In some complex cases you may also want to map a code component to a combination of variants in Figma.

```
// Default case@FigmaConnect("https://...")class ButtonConnection { @Composable fun ButtonExample() { Button(title: "Text") }}@FigmaConnect("https://...")@FigmaVariant("Type", "Danger")@FigmaVariant("Disabled", "False")class DangerButtonConnection { @Composable fun DangerButtonExample() { DangerButton(title: "Text") }}
```
