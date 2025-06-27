---
title: 'getTopLevelFrame(): FrameNode | undefined'
slug: LinkUnfurlNode-gettoplevelframe-framenode-undefined
source_file: plugin-api-LinkUnfurlNode.html
source_url: 'https://www.figma.com/plugin-docs/api/LinkUnfurlNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 870bdd57b99cfd2b
token_count: 73
chunk_title: 'getTopLevelFrame(): FrameNode | undefined'
chunk_slug: LinkUnfurlNode-gettoplevelframe-framenode-undefined
chunk_index: 8
chunk_of_total: 29
parent_file: LinkUnfurlNode.md
parent_slug: LinkUnfurlNode
char_count: 254
heading_level: h3
chunk_type: method
merge_type: atomic
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
  - LinkUnfurlNode-absolutetransform-transform-readonly-abs
  - LinkUnfurlNode-visible-boolean-locked-boolean
  - LinkUnfurlNode-stucknodes-scenenode-readonly
  - LinkUnfurlNode-attachedconnectors-connectornode-readonl
  - LinkUnfurlNode-boundvariables-readonly-field-in-variabl
  - LinkUnfurlNode-inferredvariables-readonly-field-in-vari
  - LinkUnfurlNode-resolvedvariablemodes-collectionid-strin
  - LinkUnfurlNode-clearexplicitvariablemodeforcollectionco
  - LinkUnfurlNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

Returns the top-most frame that contains this node. If the node is not inside a frame, this will return undefined.

##### info

This function will only work in Figma Design and will throw an error if called in FigJam or Slides.

## Plugin data properties
