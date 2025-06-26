---
title: Transition
slug: Transition
source_file: plugin-api-Transition.html
source_url: https://www.figma.com/plugin-docs/api/Transition/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: df5ec6195c346d52
token_count: 404
---
# Transition

```
interface SimpleTransition { readonly type: "DISSOLVE" | "SMART_ANIMATE" | "SCROLL_ANIMATE" readonly easing: Easing readonly duration: number}interface DirectionalTransition { readonly type: "MOVE_IN" | "MOVE_OUT" | "PUSH" | "SLIDE_IN" | "SLIDE_OUT" readonly direction: "LEFT" | "RIGHT" | "TOP" | "BOTTOM" readonly matchLayers: boolean readonly easing: Easing readonly duration: number}type Transition = SimpleTransition | DirectionalTransitioninterface Easing { readonly type: "EASE_IN" | "EASE_OUT" | "EASE_IN_AND_OUT" | "LINEAR" | "EASE_IN_BACK" | "EASE_OUT_BACK" | "EASE_IN_AND_OUT_BACK" | "CUSTOM_CUBIC_BEZIER" | "GENTLE" | "QUICK" | "BOUNCY" | "SLOW" | "CUSTOM_SPRING" readonly easingFunctionCubicBezier?: { x1: number, y1: number, x2: number, y2: number } readonly easingFunctionSpring?: { mass: number, stiffness: number, damping: number, initialVelocity: number }}
```A prototyping `Transition` describes an animation used when navigating in a prototype.

When the transition `type` is `"SMART_ANIMATE"` or when `matchLayers` is `true`, then the transition will be performed using smart animate, which attempts to match corresponding layers an interpolate other properties during the animation.

When the easing `type` is `"CUSTOM_CUBIC_BEZIER"`, then `easingFunctionCubicBezier` will describe the points that define the cubic bezier easing curve. The values `x1, y1, x2, y2` are the same as shown in the UI.

When the easing `type` is `"CUSTOM_SPRING"`, then `easingFunctionSpring` will describe parameters for the spring formula. These parameters are `mass`, `stiffness` and `damping`.