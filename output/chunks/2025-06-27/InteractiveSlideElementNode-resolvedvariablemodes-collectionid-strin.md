---
title: >-
  resolvedVariableModes: { [collectionId: string]: string } +
  explicitVariableModes: { [collectionId: string]: string }
slug: InteractiveSlideElementNode-resolvedvariablemodes-collectionid-strin
source_file: plugin-api-InteractiveSlideElementNode.html
source_url: 'https://www.figma.com/plugin-docs/api/InteractiveSlideElementNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 9750894e0b5ad9d5
token_count: 126
chunk_title: >-
  resolvedVariableModes: { [collectionId: string]: string } +
  explicitVariableModes: { [collectionId: string]: string }
chunk_slug: InteractiveSlideElementNode-resolvedvariablemodes-collectionid-strin
chunk_index: 26
chunk_of_total: 29
parent_file: InteractiveSlideElementNode.md
parent_slug: InteractiveSlideElementNode
char_count: 441
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - InteractiveSlideElementNode-introduction
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
  - InteractiveSlideElementNode-clearexplicitvariablemodeforcollectionco
  - InteractiveSlideElementNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'resolvedVariableModes: { [collectionId: string]: string }'
  - 'explicitVariableModes: { [collectionId: string]: string }'
compiler: noos-figma
---

The resolved mode for this node for each variable collection in this file.

[View more →](/plugin-docs/api/properties/nodes-resolvedvariablemodes/)

The explicitly set modes for this node.
For `SceneNodes`, represents a subset of [`resolvedVariableModes`](/plugin-docs/api/properties/nodes-resolvedvariablemodes/)
.
Note that this does not include [workspace and team-default modes](https://help.figma.com/hc/en-us/articles/12611253730071)
.
