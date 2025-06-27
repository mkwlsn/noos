---
title: 'getCSSAsync(): Promise<{ [key: string]: string }>'
slug: InteractiveSlideElementNode-getcssasync-promise-key-string-string-
source_file: plugin-api-InteractiveSlideElementNode.html
source_url: 'https://www.figma.com/plugin-docs/api/InteractiveSlideElementNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6f328d3ce7af20a4
token_count: 62
chunk_title: 'getCSSAsync(): Promise<{ [key: string]: string }>'
chunk_slug: InteractiveSlideElementNode-getcssasync-promise-key-string-string-
chunk_index: 7
chunk_of_total: 29
parent_file: InteractiveSlideElementNode.md
parent_slug: InteractiveSlideElementNode
char_count: 214
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - InteractiveSlideElementNode-introduction
  - InteractiveSlideElementNode-clone-interactiveslideelementnode-id-str
  - InteractiveSlideElementNode-parent-basenode-childrenmixin-null-reado
  - InteractiveSlideElementNode-name-string-removed-boolean-readonly
  - InteractiveSlideElementNode-tostring-string
  - InteractiveSlideElementNode-remove-void-setrelaunchdatadata-command-
  - InteractiveSlideElementNode-getrelaunchdata-command-string-string-is
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

Resolves to a JSON object of CSS properties of the node. This is the same CSS that Figma shows in the inspect panel and is helpful if you are building a [plugin for code generation](/plugin-docs/codegen-plugins/)
.
