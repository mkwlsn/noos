---
title: SlideTransition
slug: SlideTransition
source_file: plugin-api-SlideTransition.html
source_url: https://www.figma.com/plugin-docs/api/SlideTransition/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 358fc308cdf15699
token_count: 441
---
# SlideTransition

A `SlideTransition` is a transition, or animation, that is played when navigating between slides in a Figma Slides presentation.

To read the current slide transition:

```
const slideTransition = slideNode.getSlideTransition()
```To set the slide transition:

```
slideNode.setSlideTransition(slideTransition)
```If you use the trigger type ON_CLICK, the delay parameter will be ignored and set to 0.

To clear a slide transition, you can set its transition type to NONE:

```
slideNode.setSlideTransition({ style: 'NONE', duration: 0.3, curve: 'EASE_IN', timing: { type: 'ON_CLICK' } })
```If you want to update the slide transition for every slide in the grid, like the button in UI that says “Apply to all slides”, you can loop through each slide in the grid.

```
figma.getSlideGrid().flat().forEach(slide => slide.setSlideTransition(transition))
```## Slide Transition properties

### style: 'NONE' | 'DISSOLVE' | 'SLIDE_FROM_LEFT' | 'SLIDE_FROM_RIGHT' | 'SLIDE_FROM_BOTTOM' | 'SLIDE_FROM_TOP' | 'PUSH_FROM_LEFT' | 'PUSH_FROM_RIGHT' | 'PUSH_FROM_BOTTOM' | 'PUSH_FROM_TOP' | 'MOVE_FROM_LEFT' | 'MOVE_FROM_RIGHT' | 'MOVE_FROM_TOP' | 'MOVE_FROM_BOTTOM' | 'SLIDE_OUT_TO_LEFT' | 'SLIDE_OUT_TO_RIGHT' | 'SLIDE_OUT_TO_TOP' | 'SLIDE_OUT_TO_BOTTOM' | 'MOVE_OUT_TO_LEFT' | 'MOVE_OUT_TO_RIGHT' | 'MOVE_OUT_TO_TOP' | 'MOVE_OUT_TO_BOTTOM' | 'SMART_ANIMATE' [readonly]

The type of slide transition.

### duration: number [readonly]

The duration of the slide transition, in seconds.

### curve: 'EASE_IN' | 'EASE_OUT' | 'EASE_IN_AND_OUT' | 'LINEAR' | 'GENTLE' | 'QUICK' | 'BOUNCY' | 'SLOW' [readonly]

The easing of the slide transition.

### timing: { type: 'ON_CLICK' | 'AFTER_DELAY'; delay: number } [readonly]

The timing of the slide transition.