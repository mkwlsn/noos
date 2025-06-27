---
title: Introduction
slug: SlideTransition-introduction
source_file: plugin-api-SlideTransition.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideTransition/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6d51ecd4a93bc5e7
token_count: 259
chunk_title: Introduction
chunk_slug: SlideTransition-introduction
chunk_index: 0
chunk_of_total: 1
parent_file: SlideTransition.md
parent_slug: SlideTransition
char_count: 906
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
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
```

## Slide Transition properties
