---
title: Introduction
slug: InteractiveSlideElementNode-introduction
source_file: plugin-api-InteractiveSlideElementNode.html
source_url: 'https://www.figma.com/plugin-docs/api/InteractiveSlideElementNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 85c8aa4c1bf0d686
token_count: 120
chunk_title: Introduction
chunk_slug: InteractiveSlideElementNode-introduction
chunk_index: 0
chunk_of_total: 29
parent_file: InteractiveSlideElementNode.md
parent_slug: InteractiveSlideElementNode
char_count: 420
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - InteractiveSlideElementNode-clone-interactiveslideelementnode-id-str
  - InteractiveSlideElementNode-parent-basenode-childrenmixin-null-reado
  - InteractiveSlideElementNode-name-string-removed-boolean-readonly
  - InteractiveSlideElementNode-tostring-string
  - InteractiveSlideElementNode-remove-void-setrelaunchdatadata-command-
  - InteractiveSlideElementNode-getrelaunchdata-command-string-string-is
  - InteractiveSlideElementNode-getcssasync-promise-key-string-string-
  - InteractiveSlideElementNode-gettoplevelframe-framenode-undefined
  - InteractiveSlideElementNode-getplugindatakey-string-string
  - InteractiveSlideElementNode-setplugindatakey-string-value-string-voi
  - InteractiveSlideElementNode-getplugindatakeys-string
  - InteractiveSlideElementNode-getsharedplugindatanamespace-string-key-
  - InteractiveSlideElementNode-setsharedplugindatanamespace-string-key-
  - InteractiveSlideElementNode-getsharedplugindatakeysnamespace-string-
  - InteractiveSlideElementNode-getdevresourcesasyncoptions-includechild
  - InteractiveSlideElementNode-editdevresourceasynccurrenturl-string-ne
  - InteractiveSlideElementNode-setdevresourcepreviewasyncurl-string-pre
  - InteractiveSlideElementNode-maxwidth-number-null-minheight-number-nu
  - InteractiveSlideElementNode-maxheight-number-null-relativetransform-
  - InteractiveSlideElementNode-absolutetransform-transform-readonly-abs
  - InteractiveSlideElementNode-visible-boolean-locked-boolean
  - InteractiveSlideElementNode-stucknodes-scenenode-readonly
  - InteractiveSlideElementNode-attachedconnectors-connectornode-readonl
  - InteractiveSlideElementNode-boundvariables-readonly-field-in-variabl
  - InteractiveSlideElementNode-inferredvariables-readonly-field-in-vari
  - InteractiveSlideElementNode-resolvedvariablemodes-collectionid-strin
  - InteractiveSlideElementNode-clearexplicitvariablemodeforcollectionco
  - InteractiveSlideElementNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

# InteractiveSlideElementNode

Interactive Slide Elements are interactive elements supported in Slides.
Currently, we have five types of interactivity: `POLL`, `EMBED`, `FACEPILE`, `ALIGNMENT`, and `YOUTUBE`.
These cannot be created by the Plugin API.
Their position can be read and manipulated, but nothing about the data that powers them can be modified through the Plugin API.

## Interactive Slide Element properties
