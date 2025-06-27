---
title: Connecting Jetpack Compose components
slug: compose
source_file: code-connect-compose.html
source_url: https://www.figma.com/code-connect-docs/compose/
doc_type: code-connect
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 1a63c4a18658bfa6
token_count: 1359
---
# Connecting Jetpack Compose components

This documentation guide will help you connect your Jetpack Compose components with Figma components using Code Connect. We'll cover basic setup to display your first connected component, followed by property mapping and variant mapping.

## Dynamic code snippets

If you completed [Getting Started with Code Connect](/code-connect-docs/quickstart-guide/), you should have a connected code snippet visible in Dev Mode when inspecting instances of that component. However, the code snippet doesn't yet reflect the entirety of the design.

To ensure the connected code accurately reflects the design you need to make use of prop mapping. Prop mapping enables you to link specific props in the design to props in code. In most cases, design and code props do not match exactly, so it's necessary to configure this manually to ensure the correct code is shown in Dev Mode.

Here is a simple example for a button with `label`, `disabled`, and `type` properties.

```
package com.your.app.directoryimport androidx.compose.runtime.Composableimport com.figma.code.connect.Figmaimport com.figma.code.connect.FigmaConnectimport com.figma.code.connect.FigmaPropertyimport com.figma.code.connect.FigmaTypeimport com.figma.code.connect.FigmaVariant@FigmaConnect(url="http://figma.com/component1")class ButtonDoc { @FigmaProperty(FigmaType.Text, "Text Content") val label = "Click me txt" @FigmaProperty(FigmaType.Boolean, "Disabled") val disabled = false @FigmaProperty(FigmaType.Enum, "Variant") val type: ButtonType = Figma.mapping( "Primary" to ButtonType.Primary, "Secondary" to ButtonType.Secondary ) @Composable fun Component2() { ButtonComponent( type = type, label = label, disabled = disabled ) }}
````@FigmaProperty` is used to map property types in Figma. The first parameter of the annotation takes a `FigmaType`, which corresponds to different Figma component property types.

`FigmaType.Text` is used to map text properties. `FigmaType.Boolean` is used to map booleans. For nested instances, `FigmaType.Instance` should be used.

Variants in Figma can be mapped using `FigmaType.Enum` with the `Figma.mapping` helper. `Figma.mapping` takes a list of `pair`s where the first element in the pair is the value in Figma, and the second value is what should appear in code.

```
@FigmaProperty(FigmaType.Text, "Text Content")val label: String = "Click me txt"@FigmaProperty(FigmaType.Boolean, "Disabled")val disabled: Boolean = false@FigmaProperty(FigmaType.Enum, "Variant")val type: ButtonType = Figma.mapping( "Primary" to ButtonType.Primary, "Secondary" to ButtonType.Secondary)@FigmaProperty(FigmaType.Instance, "Icon")val icon : @Composable () -> Unit = { IconComponent() }
```For more advanced mapping—where properties in Figma and code do not match exactly—Code Connect also allows you to specify your own mapping. For example, you can map a boolean from Figma for displaying either an icon or divider accessory.

```
@FigmaProperty(FigmaType.Boolean, "Has Icon")val accessory: @Composable() -> Unit = Figma.mapping( true to Icon(), false to Divider())
```Or setting a boolean to true when a specific enum option is specified in Figma.

```
@FigmaProperty(FigmaType.Enum, "Type")val isDisabled: Bool = Figma.mapping("Disabled" to true)
```## Instance children

While `@FigmaInstance` can be used to map child instances that are instance-swap properties in Figma, it's common for components in Figma to have child instances that aren't bound to an instance-swap prop. We can render the code snippets for these nested instances with the `@FigmaChildren` property wrapper. This helper takes the name of the instance layer as its parameter, rather than a Figma prop name. It's important to note that the nested instance also must be connected separately.

```
@FigmaChildren("Header", "Row")val contents : @Composable () -> Unit = { }@Composablefun ListExample() { List { contents }}
```## Variant mapping

Sometimes a component in Figma is represented by more than one component in code. For example you may have a single `Button` in your Figma design system with a `type` property to switch between primary, secondary, and danger variants. However, in code this may be represented by three different components, such as `PrimaryButton`, `SecondaryButton` and `DangerButton`.

To model this behavior with Code Connect, we can make use of variant mappings. These allow you to provide different code samples for different variants of a single Figma component.

```
@FigmaConnect("https://...")@FigmaVariant("Type", "Primary")class PrimaryButtonConnection { @Composable fun PrimaryButtonExample() { PrimaryButton(title: "Text") }}@FigmaConnect("https://...")@FigmaVariant("Type", "Secondary")class PrimaryButtonConnection { @Composable fun SecondaryButtonExample() { SecondaryButton(title: "Text") }}@FigmaConnect("https://...")@FigmaVariant("Type", "Danger")class DangerButtonConnection { @Composable fun DangerButtonExample() { DangerButton(title: "Text") }}
```In some complex cases you may also want to map a code component to a combination of variants in Figma.

```
// Default case@FigmaConnect("https://...")class ButtonConnection { @Composable fun ButtonExample() { Button(title: "Text") }}@FigmaConnect("https://...")@FigmaVariant("Type", "Danger")@FigmaVariant("Disabled", "False")class DangerButtonConnection { @Composable fun DangerButtonExample() { DangerButton(title: "Text") }}
```