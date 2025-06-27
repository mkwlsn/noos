---
title: Instance children
slug: swiftui-instance-children
source_file: code-connect-swiftui.html
source_url: 'https://www.figma.com/code-connect-docs/swiftui/'
doc_type: code-connect
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: a2ba84fe6eadbdeb
token_count: 886
chunk_title: Instance children
chunk_slug: swiftui-instance-children
chunk_index: 2
chunk_of_total: 4
parent_file: swiftui.md
parent_slug: swiftui
char_count: 3101
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - swiftui-introduction
  - swiftui-dynamic-code-snippets
  - swiftui-xcode-previews
compiler: noos-figma
---

While `@FigmaInstance` can be used to map child instances that are instance-swap properties in Figma, it's common for components in Figma to have child instances that aren't bound to an instance-swap prop. We can render the code snippets for these nested instances with the `@FigmaChildren` property wrapper. This helper takes the name of the instance layer as its parameter, rather than a Figma prop name. It's important to note that the nested instance also must be connected separately.

```
@FigmaChildren(layers: ["Header", "Row"])var contents = AnyView? = nilvar body: some View { VStack { self.contents }}
```## Variant mapping

Sometimes a component in Figma is represented by more than one component in code. For example you may have a single `Button` in your Figma design system with a `type` property to switch between primary, secondary, and danger variants. However, in code this may be represented by three different components, such as `PrimaryButton`, `SecondaryButton` and `DangerButton`.

To model this behaviour with Code Connect we can make use of something called variant mappings. Variant mappings allow you to provide entierly different code samples for different variants of a single Figma components.

```
struct PrimaryButton_connection : FigmaConnect { let component = PrimaryButton.self let variant = ["Type": "Primary"] let figmaNodeUrl: String = "https://..." var body: some View { PrimaryButton(title: "Text") }}struct SecondaryButton_connection : FigmaConnect { let component = SecondaryButton.self let variant = ["Type": "Secondary"] let figmaNodeUrl: String = "https://..." var body: some View { SecondaryButton(title: "Text") }}struct DangerButton_connection : FigmaConnect { let component = DangerButton.self let variant = ["Type": "Danger"] let figmaNodeUrl: String = "https://..." var body: some View { DangerButton(title: "Text") }}
```In some complex cases you may also want to map a code component to a combination of variants in Figma.

```
// Default casestruct Button_connection : FigmaConnect { let component = Button.self let figmaNodeUrl: String = "https://..." var body: some View { Button(title: "Text") }}struct DangerButton_connection : FigmaConnect { let component = DangerButton.self let variant = ["Type": "Danger", "Disabled": false] let figmaNodeUrl: String = "https://..." var body: some View { DangerButton(title: "Text") }}
```## Conditionally applying modifiers

Certain properties in Figma may map to specific modifiers rather than a function parameter. You can use the `figmaApply` helper to represent these cases. For example:

```
struct MyComponent_doc: FigmaConnect { ... @FigmaEnum("Type", mapping: ["Primary": true]) var isPrimary: Bool = false var body: some View { MyComponent() .figmaApply(isPrimary) { $0.tint(.blue) } elseApply { $0.backgroundColor(.clear) } }}
```In the previous example, if the value of `State = Primary` in Figma, then the code is:

```
MyComponent() .tint(.blue)
```Otherwise, it will be:

```
MyComponent() .backgroundColor(.clear)
```The `elseApply` parameter can be omitted in order to not show anything.
