---
title: Dynamic code snippets
slug: compose-dynamic-code-snippets
source_file: code-connect-compose.html
source_url: 'https://www.figma.com/code-connect-docs/compose/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: a1b323df0b091ad6
token_count: 851
chunk_title: Dynamic code snippets
chunk_slug: compose-dynamic-code-snippets
chunk_index: 1
chunk_of_total: 4
parent_file: compose.md
parent_slug: compose
char_count: 2978
heading_level: h2
chunk_type: tutorial
merge_type: atomic
tags: []
sibling_chunks:
  - compose-introduction
  - compose-instance-children
  - compose-variant-mapping
compiler: noos-figma
---

If you completed [Getting Started with Code Connect](/code-connect-docs/quickstart-guide/)
, you should have a connected code snippet visible in Dev Mode when inspecting instances of that component. However, the code snippet doesn't yet reflect the entirety of the design.

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
```
