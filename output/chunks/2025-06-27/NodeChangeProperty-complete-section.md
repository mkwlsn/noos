---
title: Complete Section
slug: NodeChangeProperty-complete-section
source_file: plugin-api-NodeChangeProperty.html
source_url: 'https://www.figma.com/plugin-docs/api/NodeChangeProperty/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 29917f2529ddec1b
token_count: 681
chunk_title: Complete Section
chunk_slug: NodeChangeProperty-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: NodeChangeProperty.md
parent_slug: NodeChangeProperty
char_count: 2383
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# NodeChangeProperty

```
type NodeChangeProperty = | 'pointCount' | 'name' | 'width' | 'height' | 'parent' | 'pluginData' | 'constraints' | 'locked' | 'visible' | 'opacity' | 'blendMode' | 'layoutGrids' | 'guides' | 'characters' | 'openTypeFeatures' | 'styledTextSegments' | 'vectorNetwork' | 'effects' | 'exportSettings' | 'arcData' | 'autoRename' | 'fontName' | 'innerRadius' | 'fontSize' | 'lineHeight' | 'leadingTrim' | 'paragraphIndent' | 'paragraphSpacing' | 'listSpacing' | 'hangingPunctuation' | 'hangingList' | 'letterSpacing' | 'textAlignHorizontal' | 'textAlignVertical' | 'textCase' | 'textDecoration' | 'textAutoResize' | 'fills' | 'topLeftRadius' | 'topRightRadius' | 'bottomLeftRadius' | 'bottomRightRadius' | 'constrainProportions' | 'strokes' | 'strokeWeight' | 'strokeAlign' | 'strokeCap' | 'strokeJoin' | 'strokeMiterLimit' | 'booleanOperation' | 'overflowDirection' | 'dashPattern' | 'backgrounds' | 'handleMirroring' | 'cornerRadius' | 'cornerSmoothing' | 'relativeTransform' | 'x' | 'y' | 'rotation' | 'isMask' | 'clipsContent' | 'type' | 'overlayPositionType' | 'overlayBackgroundInteraction' | 'overlayBackground' | 'prototypeStartNode' | 'prototypeBackgrounds' | 'expanded' | 'fillStyleId' | 'strokeStyleId' | 'backgroundStyleId' | 'textStyleId' | 'effectStyleId' | 'gridStyleId' | 'description' | 'layoutMode' | 'paddingLeft' | 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'itemSpacing' | 'layoutAlign' | 'counterAxisSizingMode' | 'primaryAxisSizingMode' | 'primaryAxisAlignItems' | 'counterAxisAlignItems' | 'layoutGrow' | 'layoutPositioning' | 'itemReverseZIndex' | 'hyperlink' | 'mediaData' | 'stokeTopWeight' | 'strokeBottomWeight' | 'strokeLeftWeight' | 'strokeRightWeight' | 'reactions' | 'flowStartingPoints' | 'shapeType' | 'connectorStart' | 'connectorEnd' | 'connectorLineType' | 'connectorStartStrokeCap' | 'connectorEndStrokeCap' | 'codeLanguage' | 'widgetSyncedState' | 'componentPropertyDefinitions' | 'componentPropertyReferences' | 'componentProperties' | 'embedData' | 'linkUnfurlData' | 'text' | 'authorVisible' | 'authorName' | 'code' | 'textBackground'
```Different properties that can be reported by a [PropertyChange](/plugin-docs/api/DocumentChange/#propertychange)
.

Note that `stokeTopWeight` not spelled correctly. We've kept the misspelling for backward compatibility, but may fix this quirk in a future version of the API.
