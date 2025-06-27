---
title: Dynamic code snippets
slug: swiftui-dynamic-code-snippets
source_file: code-connect-swiftui.html
source_url: 'https://www.figma.com/code-connect-docs/swiftui/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2e8f8d6e041ff5fe
token_count: 814
chunk_title: Dynamic code snippets
chunk_slug: swiftui-dynamic-code-snippets
chunk_index: 1
chunk_of_total: 6
parent_file: swiftui.md
parent_slug: swiftui
char_count: 2846
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - swiftui-introduction
  - swiftui-instance-children
  - swiftui-variant-mapping
  - swiftui-conditionally-applying-modifiers
  - swiftui-xcode-previews
compiler: noos-figma
---

If you completed [Getting Started with Code Connect](/code-connect-docs/quickstart-guide/)
, you should have a connected code snippet visible in Dev Mode when inspecting instances of that component. However, the code snippet doesn't yet reflect the entirety of the design.

To ensure the connected code accurately reflects the design you need to make use of prop mapping. Prop mapping enables you to link specific props in the design to props in code. In most cases design and code props do not match 1:1, so it's necessary to configure this manually to ensure the correct code is shown in Dev Mode.

Here is a simple example for a button with a `label`, `disabled`, and `type` property.

```
import Figmastruct Button_connection : FigmaConnect { let component = Button.self let figmaNodeUrl: String = "https://..." @FigmaString("Text Content") var label: String = "Submit" @FigmaBoolean("Disabled") var disabled: Bool = false @FigmaEnum( "Variant", mapping: [ "Primary": ButtonVariant.primary, "Secondary": ButtonVariant.secondary, "Destructive": ButtonVariant.danger ] ) var type: ButtonType = .primary var body: some View { Button(type: self.type, disabled: self.disabled, label: { Text(self.label) }) }}
````@FigmaString` is used to map strings directly. `@FigmaBoolean` is used to map booleans. Variants in Figma can be mapped using `@FigmaEnum`. For nested instances, `@FigmaInstance` should be used.

```
@FigmaString("A string") var label: String@FigmaBoolean("A boolean") var hasLabel: Bool@FigmaInstance("An instance") var icon: Icon@FigmaEnum( "An enum", mapping: [ "Primary": .primary, "Secondary": .secondary ]) var variant: ButtonVariant
```For more advanced mapping, where properties in Figma and code do not match 1:1, Code Connect also allows you to specify your own mapping. For example, mapping a boolean from Figma to whether to display an icon or a spacer accessory.

```
@FigmaBoolean( "has icon", mapping: [ true: Icon(), false: Spacer() ]) var accessory: some View
```Or setting a boolean to true when a specific enum option is specified in Figma.

```
@FigmaEnum("Type", mapping: [ "Disabled": true ]) var isDisabled: Bool
```

### Hiding Default Values

For certain types of mapped properties, you may want to hide them if their default value is shown. For example, you may want to display a `.disabled(true)` modifier if a component has a `Disabled = True` boolean property, but not show anything otherwise. You can use the `hideDefault` parameter on `@FigmaEnum` or `@FigmaBoolean` to represent this.

```
 @FigmaBoolean("Disabled", hideDefault: true) var disabled: Bool = false var body: some View { MyView() .disabled(self.disabled) }
```If the component in Figma has `Disabled = True`, the resulting code will show

```
MyView() .disabled(true)
```If `Disabled = false` the resulting code will simply be `MyView()`.
