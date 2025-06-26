---
title: Effect
slug: Effect
source_file: plugin-api-Effect.html
source_url: https://www.figma.com/plugin-docs/api/Effect/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 0726428a8e5aa044
token_count: 1685
---
# Effect

Effects can be grouped into five categories of properties: `DropShadowEffect`, `InnerShadowEffect`, `BlurEffect`, `NoiseEffect`, and `TextureEffect`. The `Effect` type is then one of the five:

```
type Effect = | DropShadowEffect | InnerShadowEffect | BlurEffect | NoiseEffect | TextureEffect
```## DropShadowEffect

### type: 'DROP_SHADOW' [readonly]

The string literal representing the type of effect this is. Always check the `type` before reading other properties.

### color: RGBA [readonly]

The color of the shadow, including its opacity.

### offset: Vector [readonly]

The offset of the shadow relative to its object. Use this property to simulate the direction of the light.

### radius: number [readonly]

The blur radius of the shadow. Must be >= 0. A lower radius creates a sharper shadow.

### spread?: number [readonly]

The distance by which to expand (or contract) the shadow. For drop shadows, a positive spread value creates a shadow larger than the node, whereas a negative value creates a shadow smaller than the node. For inner shadows, a positive `spread` value contracts the shadow. `spread` values are only accepted on rectangles and ellipses, or on frames, components, and instances with visible fill paints and `clipsContent` enabled. When left unspecified, the default value is 0.

### visible: boolean [readonly]

Whether this shadow is visible.

### blendMode: BlendMode [readonly]

Determines how the color of this shadow blends with the colors underneath it. The typical default value is "NORMAL".

### showShadowBehindNode?: boolean [readonly]

Whether the drop shadow should show behind translucent or transparent pixels within the node's geometry. Defaults to `false`.

### boundVariables?: { [field in VariableBindableEffectField]?: VariableAlias} [readonly]

The variables bound to a particular field on this shadow effect

## InnerShadowEffect

### type: 'INNER_SHADOW' [readonly]

The string literal representing the type of effect this is. Always check the `type` before reading other properties.

### color: RGBA [readonly]

The color of the shadow, including its opacity.

### offset: Vector [readonly]

The offset of the shadow relative to its object. Use this property to simulate the direction of the light.

### radius: number [readonly]

The blur radius of the shadow. Must be >= 0. A lower radius creates a sharper shadow.

### spread?: number [readonly]

The distance by which to expand (or contract) the shadow. For drop shadows, a positive spread value creates a shadow larger than the node, whereas a negative value creates a shadow smaller than the node. For inner shadows, a positive `spread` value contracts the shadow. `spread` values are only accepted on rectangles and ellipses, or on frames, components, and instances with visible fill paints and `clipsContent` enabled. When left unspecified, the default value is 0.

### visible: boolean [readonly]

Whether this shadow is visible.

### blendMode: BlendMode [readonly]

Determines how the color of this shadow blends with the colors underneath it. The typical default value is "NORMAL".

### boundVariables?: { [field in VariableBindableEffectField]?: VariableAlias} [readonly]

The variables bound to a particular field on this shadow effect

## BlurEffect

A blur effect can either normal or progressive (in beta, API is subject to change):

```
type BlurEffect = BlurEffectNormal | BlurEffectProgressive
```### Common properties

### type: 'LAYER_BLUR' | 'BACKGROUND_BLUR' [readonly]

The string literal representing the type of effect this is. Always check the `type` before reading other properties.

### radius: number [readonly]

The radius of the blur. Must be >= 0. A lower radius creates a sharper blur. For progressive blurs, this is the end radius of the blur.

### visible: boolean [readonly]

Whether this blur is visible.

### boundVariables?: { ['radius']: VariableAlias } [readonly]

The variable bound to the radius field on this blur effect

### BlurEffectNormal

### blurType: 'NORMAL' [readonly]

The string literal representing the blur type. Always check the `blurType` before reading other properties.

### BlurEffectProgressive

Progressive blur is in beta, and the API is subject to change.

### blurType: 'PROGRESSIVE' [readonly]

The string literal representing the blur type. Always check the `blurType` before reading other properties.

### startRadius: number [readonly]

Radius of the starting point of the progressive blur.

### startOffset: Vector [readonly]

Position of the starting point of the progressive blur. The position is in normalized object space (top left corner of the bounding box of the object is (0, 0) and the bottom right is (1,1)).

### endOffset: Vector [readonly]

Position of the ending point of the progressive blur. The position is in normalized object space (top left corner of the bounding box of the object is (0, 0) and the bottom right is (1,1)).

## NoiseEffect

Noise effect is available in beta, and the API is subject to change.

There are three types of noise effects:

```
type NoiseEffect = | NoiseEffectMonotone | NoiseEffectDuotone | NoiseEffectMultitone
```### Common properties

### type: 'NOISE' [readonly]

The string literal representing the type of effect this is. Always check the `type` before reading other properties.

### color: RGBA [readonly]

The color of the noise effect.

### blendMode: BlendMode [readonly]

The blend mode of the noise.

### noiseSize: number [readonly]

The size of the noise effect.

### density: number [readonly]

The density of the noise effect.

### NoiseEffectMonotone

### noiseType: 'MONOTONE' [readonly]

The string literal representing the type of noise this is. Always check the `noiseType` before reading
other properties.

### NoiseEffectDuotone

### noiseType: 'DUOTONE' [readonly]

The string literal representing the type of noise this is. Always check the `noiseType` before reading
other properties.

### secondaryColor: RGBA [readonly]

The secondary color of the noise effect.

### NoiseEffectMultitone

### noiseType: 'MULTITONE' [readonly]

The string literal representing the type of noise this is. Always check the `noiseType` before reading
other properties.

### opacity: number [readonly]

The opacity of the noise effect.

## TextureEffect

Texture effect is available in beta, and the API is subject to change.

### type: 'TEXTURE' [readonly]

The string literal representing the type of effect this is. Always check the `type` before reading other properties.

### noiseSize: number [readonly]

The size of the texture effect.

### radius: number [readonly]

The radius of the texture effect.

### clipToShape: boolean [readonly]

Whether the texture is clipped to the shape.