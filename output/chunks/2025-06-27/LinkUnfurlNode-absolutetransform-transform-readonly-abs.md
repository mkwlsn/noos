---
title: >-
  absoluteTransform: Transform [readonly] + absoluteBoundingBox: Rect | null
  [readonly]
slug: LinkUnfurlNode-absolutetransform-transform-readonly-abs
source_file: plugin-api-LinkUnfurlNode.html
source_url: 'https://www.figma.com/plugin-docs/api/LinkUnfurlNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: c679aba7269ffa4e
token_count: 94
chunk_title: >-
  absoluteTransform: Transform [readonly] + absoluteBoundingBox: Rect | null
  [readonly]
chunk_slug: LinkUnfurlNode-absolutetransform-transform-readonly-abs
chunk_index: 20
chunk_of_total: 29
parent_file: LinkUnfurlNode.md
parent_slug: LinkUnfurlNode
char_count: 327
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - LinkUnfurlNode-introduction
  - LinkUnfurlNode-clone-linkunfurlnode-id-string-readonly
  - LinkUnfurlNode-parent-basenode-childrenmixin-null-reado
  - LinkUnfurlNode-name-string-removed-boolean-readonly
  - LinkUnfurlNode-tostring-string
  - LinkUnfurlNode-remove-void-setrelaunchdatadata-command-
  - LinkUnfurlNode-getrelaunchdata-command-string-string-is
  - LinkUnfurlNode-getcssasync-promise-key-string-string-
  - LinkUnfurlNode-gettoplevelframe-framenode-undefined
  - LinkUnfurlNode-getplugindatakey-string-string
  - LinkUnfurlNode-setplugindatakey-string-value-string-voi
  - LinkUnfurlNode-getplugindatakeys-string
  - LinkUnfurlNode-getsharedplugindatanamespace-string-key-
  - LinkUnfurlNode-setsharedplugindatanamespace-string-key-
  - LinkUnfurlNode-getsharedplugindatakeysnamespace-string-
  - LinkUnfurlNode-getdevresourcesasyncoptions-includechild
  - LinkUnfurlNode-editdevresourceasynccurrenturl-string-ne
  - LinkUnfurlNode-setdevresourcepreviewasyncurl-string-pre
  - LinkUnfurlNode-maxwidth-number-null-minheight-number-nu
  - LinkUnfurlNode-maxheight-number-null-relativetransform-
  - LinkUnfurlNode-visible-boolean-locked-boolean
  - LinkUnfurlNode-stucknodes-scenenode-readonly
  - LinkUnfurlNode-attachedconnectors-connectornode-readonl
  - LinkUnfurlNode-boundvariables-readonly-field-in-variabl
  - LinkUnfurlNode-inferredvariables-readonly-field-in-vari
  - LinkUnfurlNode-resolvedvariablemodes-collectionid-strin
  - LinkUnfurlNode-clearexplicitvariablemodeforcollectionco
  - LinkUnfurlNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'absoluteTransform: Transform [readonly]'
  - 'absoluteBoundingBox: Rect | null [readonly]'
compiler: noos-figma
---

The position of a node relative to its containing page as a [`Transform`](/plugin-docs/api/Transform/)
 matrix.

The bounds of the node that does not include rendered properties like drop shadows or strokes. The `x` and `y` inside this property represent the absolute position of the node on the page.

## Scene node properties
