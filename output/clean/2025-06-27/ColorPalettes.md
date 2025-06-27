---
title: ColorPalettes
slug: ColorPalettes
source_file: plugin-api-ColorPalettes.html
source_url: https://www.figma.com/plugin-docs/api/ColorPalettes/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: f91d60d1da513ba9
token_count: 278
---
# ColorPalettes

```
type ColorPalettes { figJamBase: ColorPalette figJamBaseLight: ColorPalette}
```There are currently two accessible properties on the `colors` object of type `ColorPalettes`: `figJamBase` and `figJamBaseLight`, both of type [ColorPalette](/plugin-docs/api/ColorPalette/)
.

These are official FigJam colors that can be found on [this Figma Learn webpage](https://help.figma.com/hc/en-us/articles/1500004291341-Apply-colors-in-FigJam)
.

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