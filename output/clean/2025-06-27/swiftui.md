---
title: Connecting SwiftUI components
slug: swiftui
source_file: code-connect-swiftui.html
source_url: https://www.figma.com/code-connect-docs/swiftui/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 7e5569c8c60544d8
token_count: 1644
---
# Connecting SwiftUI components

This guide helps you connect your SwiftUI components with Figma components using Code Connect. The guide covers the basic setup to get your first code snippets in Dev Mode, followed by prop mapping and variant mapping.

## Dynamic code snippets

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

## Instance children

While `@FigmaInstance` can be used to map child instances that are instance-swap properties in Figma, it's common for components in Figma to have child instances that aren't bound to an instance-swap prop. We can render the code snippets for these nested instances with the `@FigmaChildren` property wrapper. This helper takes the name of the instance layer as its parameter, rather than a Figma prop name. It's important to note that the nested instance also must be connected separately.

```
@FigmaChildren(layers: ["Header", "Row"])var contents = AnyView? = nilvar body: some View { VStack { self.contents }}
```

## Variant mapping

Sometimes a component in Figma is represented by more than one component in code. For example you may have a single `Button` in your Figma design system with a `type` property to switch between primary, secondary, and danger variants. However, in code this may be represented by three different components, such as `PrimaryButton`, `SecondaryButton` and `DangerButton`.

To model this behaviour with Code Connect we can make use of something called variant mappings. Variant mappings allow you to provide entierly different code samples for different variants of a single Figma components.

```
struct PrimaryButton_connection : FigmaConnect { let component = PrimaryButton.self let variant = ["Type": "Primary"] let figmaNodeUrl: String = "https://..." var body: some View { PrimaryButton(title: "Text") }}struct SecondaryButton_connection : FigmaConnect { let component = SecondaryButton.self let variant = ["Type": "Secondary"] let figmaNodeUrl: String = "https://..." var body: some View { SecondaryButton(title: "Text") }}struct DangerButton_connection : FigmaConnect { let component = DangerButton.self let variant = ["Type": "Danger"] let figmaNodeUrl: String = "https://..." var body: some View { DangerButton(title: "Text") }}
```In some complex cases you may also want to map a code component to a combination of variants in Figma.

```
// Default casestruct Button_connection : FigmaConnect { let component = Button.self let figmaNodeUrl: String = "https://..." var body: some View { Button(title: "Text") }}struct DangerButton_connection : FigmaConnect { let component = DangerButton.self let variant = ["Type": "Danger", "Disabled": false] let figmaNodeUrl: String = "https://..." var body: some View { DangerButton(title: "Text") }}
```

## Conditionally applying modifiers

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

## Xcode previews

Code Connect integrates seamlessly with Xcode preview so you don't need to write multiple examples for how to use your component. Simply use the connection struct as a preview itself:

```
struct Button : View { ... }struct Button_connection : FigmaConnect { ... }#Preview { Button_connection() }
```