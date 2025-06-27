---
title: Variant mapping
slug: swiftui-variant-mapping
source_file: code-connect-swiftui.html
source_url: 'https://www.figma.com/code-connect-docs/swiftui/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: a91808256f54147f
token_count: 500
chunk_title: Variant mapping
chunk_slug: swiftui-variant-mapping
chunk_index: 3
chunk_of_total: 6
parent_file: swiftui.md
parent_slug: swiftui
char_count: 1750
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - swiftui-introduction
  - swiftui-dynamic-code-snippets
  - swiftui-instance-children
  - swiftui-conditionally-applying-modifiers
  - swiftui-xcode-previews
compiler: noos-figma
---

Sometimes a component in Figma is represented by more than one component in code. For example you may have a single `Button` in your Figma design system with a `type` property to switch between primary, secondary, and danger variants. However, in code this may be represented by three different components, such as `PrimaryButton`, `SecondaryButton` and `DangerButton`.

To model this behaviour with Code Connect we can make use of something called variant mappings. Variant mappings allow you to provide entierly different code samples for different variants of a single Figma components.

```
struct PrimaryButton_connection : FigmaConnect { let component = PrimaryButton.self let variant = ["Type": "Primary"] let figmaNodeUrl: String = "https://..." var body: some View { PrimaryButton(title: "Text") }}struct SecondaryButton_connection : FigmaConnect { let component = SecondaryButton.self let variant = ["Type": "Secondary"] let figmaNodeUrl: String = "https://..." var body: some View { SecondaryButton(title: "Text") }}struct DangerButton_connection : FigmaConnect { let component = DangerButton.self let variant = ["Type": "Danger"] let figmaNodeUrl: String = "https://..." var body: some View { DangerButton(title: "Text") }}
```In some complex cases you may also want to map a code component to a combination of variants in Figma.

```
// Default casestruct Button_connection : FigmaConnect { let component = Button.self let figmaNodeUrl: String = "https://..." var body: some View { Button(title: "Text") }}struct DangerButton_connection : FigmaConnect { let component = DangerButton.self let variant = ["Type": "Danger", "Disabled": false] let figmaNodeUrl: String = "https://..." var body: some View { DangerButton(title: "Text") }}
```
