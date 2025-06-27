---
title: getSlideGrid
slug: figma-getslidegrid
source_file: plugin-api-figma-getslidegrid.html
source_url: https://www.figma.com/plugin-docs/api/figma-getslidegrid/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 2e6f5580748171c0
token_count: 162
---
# getSlideGrid

##### info

This API is only available in Figma Slides

## Signature

### getSlideGrid(): Array>

## Remarks

The slide grid provides structure to both single slide view and grid view.
The order of Slides within a presentation is a key part of updating and editing a deck.
To visualize the slide nodes in a 2D array, you can call this function.

```
const grid = figma.getSlideGrid()
```The returned grid is a 2D array of SlideNodes. For example:

```
[ [SlideNode, SlideNode], [SlideNode, SlideNode, SlideNode, SlideNode, SlideNode], [SlideNode, SlideNode, SlideNode, SlideNode, SlideNode], [SlideNode, SlideNode, SlideNode],]
```