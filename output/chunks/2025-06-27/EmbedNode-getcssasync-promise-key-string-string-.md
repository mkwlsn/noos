---
title: 'getCSSAsync(): Promise<{ [key: string]: string }>'
slug: EmbedNode-getcssasync-promise-key-string-string-
source_file: plugin-api-EmbedNode.html
source_url: 'https://www.figma.com/plugin-docs/api/EmbedNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 6f328d3ce7af20a4
token_count: 62
chunk_title: 'getCSSAsync(): Promise<{ [key: string]: string }>'
chunk_slug: EmbedNode-getcssasync-promise-key-string-string-
chunk_index: 7
chunk_of_total: 29
parent_file: EmbedNode.md
parent_slug: EmbedNode
char_count: 214
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - EmbedNode-introduction
  - EmbedNode-clone-embednode-id-string-readonly
  - EmbedNode-parent-basenode-childrenmixin-null-reado
  - EmbedNode-name-string-removed-boolean-readonly
  - EmbedNode-tostring-string
  - EmbedNode-remove-void-setrelaunchdatadata-command-
  - EmbedNode-getrelaunchdata-command-string-string-is
  - EmbedNode-gettoplevelframe-framenode-undefined
  - EmbedNode-getplugindatakey-string-string
  - EmbedNode-setplugindatakey-string-value-string-voi
  - EmbedNode-getplugindatakeys-string
  - EmbedNode-getsharedplugindatanamespace-string-key-
  - EmbedNode-setsharedplugindatanamespace-string-key-
  - EmbedNode-getsharedplugindatakeysnamespace-string-
  - EmbedNode-getdevresourcesasyncoptions-includechild
  - EmbedNode-editdevresourceasynccurrenturl-string-ne
  - EmbedNode-setdevresourcepreviewasyncurl-string-pre
  - EmbedNode-maxwidth-number-null-minheight-number-nu
  - EmbedNode-maxheight-number-null-relativetransform-
  - EmbedNode-absolutetransform-transform-readonly-abs
  - EmbedNode-visible-boolean-locked-boolean
  - EmbedNode-stucknodes-scenenode-readonly
  - EmbedNode-attachedconnectors-connectornode-readonl
  - EmbedNode-boundvariables-readonly-field-in-variabl
  - EmbedNode-inferredvariables-readonly-field-in-vari
  - EmbedNode-resolvedvariablemodes-collectionid-strin
  - EmbedNode-clearexplicitvariablemodeforcollectionco
  - EmbedNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

Resolves to a JSON object of CSS properties of the node. This is the same CSS that Figma shows in the inspect panel and is helpful if you are building a [plugin for code generation](/plugin-docs/codegen-plugins/)
.
