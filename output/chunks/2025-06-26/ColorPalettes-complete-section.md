---
title: Complete Section
slug: ColorPalettes-complete-section
source_file: plugin-api-ColorPalettes.html
source_url: 'https://www.figma.com/plugin-docs/api/ColorPalettes/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: d0e5abc0f2df9ea9
token_count: 318
chunk_title: Complete Section
chunk_slug: ColorPalettes-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: ColorPalettes.md
parent_slug: ColorPalettes
char_count: 1110
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# ColorPalettes

```
type ColorPalettes { figJamBase: ColorPalette figJamBaseLight: ColorPalette}
```There are currently two accessible properties on the `colors` object of type `ColorPalettes`: `figJamBase` and `figJamBaseLight`, both of type [ColorPalette](/plugin-docs/api/ColorPalette/).

These are official FigJam colors that can be found on [this Figma Learn webpage](https://help.figma.com/hc/en-us/articles/1500004291341-Apply-colors-in-FigJam).

`figJamBase`:

- Black `#1E1E1E` 
- Gray `#B3B3B3` 
- Red `#F24822` 
- Orange `#FFA629` 
- Yellow `#FFCD29` 
- Green `#14AE5C` 
- Blue `#0D99FF` 
- Violet `#9747FF` 
- White `#FFFFFF` 

`figJamBaseLight`:

- Dark Gray `#757575` 
- Light Gray `#E6E6E6` 
- Light Red `#FFC7C2` 
- Light Orange `#FCD19C` 
- Light Yellow `#FFE8A3` 
- Light Green `#AFF4C6` 
- Light Blue `#BDE3FF` 
- Light Violet `#E4CCFF` 

Example of accessing colors on the palettes```
const [color, setTextColor] = useSyncedState("theme", figma.constants.colors.figJamBase.gray)const [colorOne, setColorOne] = useSyncedState("themeOne", figma.constants.colors.figJamBaseLight.lightRed)
```
