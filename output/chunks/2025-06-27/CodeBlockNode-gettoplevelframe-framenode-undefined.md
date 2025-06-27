---
title: 'getTopLevelFrame(): FrameNode | undefined'
slug: CodeBlockNode-gettoplevelframe-framenode-undefined
source_file: plugin-api-CodeBlockNode.html
source_url: 'https://www.figma.com/plugin-docs/api/CodeBlockNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 870bdd57b99cfd2b
token_count: 73
chunk_title: 'getTopLevelFrame(): FrameNode | undefined'
chunk_slug: CodeBlockNode-gettoplevelframe-framenode-undefined
chunk_index: 9
chunk_of_total: 30
parent_file: CodeBlockNode.md
parent_slug: CodeBlockNode
char_count: 254
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - CodeBlockNode-introduction-type-codeblock-readonly
  - CodeBlockNode-code-string-codelanguage-typescript-cpp-
  - CodeBlockNode-blendmode-blendmode-id-string-readonly
  - CodeBlockNode-parent-basenode-childrenmixin-null-reado
  - CodeBlockNode-name-string-removed-boolean-readonly
  - CodeBlockNode-tostring-string
  - CodeBlockNode-remove-void-setrelaunchdatadata-command-
  - CodeBlockNode-getrelaunchdata-command-string-string-is
  - CodeBlockNode-getcssasync-promise-key-string-string-
  - CodeBlockNode-getplugindatakey-string-string
  - CodeBlockNode-setplugindatakey-string-value-string-voi
  - CodeBlockNode-getplugindatakeys-string
  - CodeBlockNode-getsharedplugindatanamespace-string-key-
  - CodeBlockNode-setsharedplugindatanamespace-string-key-
  - CodeBlockNode-getsharedplugindatakeysnamespace-string-
  - CodeBlockNode-getdevresourcesasyncoptions-includechild
  - CodeBlockNode-editdevresourceasynccurrenturl-string-ne
  - CodeBlockNode-setdevresourcepreviewasyncurl-string-pre
  - CodeBlockNode-maxwidth-number-null-minheight-number-nu
  - CodeBlockNode-maxheight-number-null-relativetransform-
  - CodeBlockNode-absolutetransform-transform-readonly-abs
  - CodeBlockNode-visible-boolean-locked-boolean
  - CodeBlockNode-stucknodes-scenenode-readonly
  - CodeBlockNode-attachedconnectors-connectornode-readonl
  - CodeBlockNode-boundvariables-readonly-field-in-variabl
  - CodeBlockNode-inferredvariables-readonly-field-in-vari
  - CodeBlockNode-resolvedvariablemodes-collectionid-strin
  - CodeBlockNode-clearexplicitvariablemodeforcollectionco
  - CodeBlockNode-exportsettings-readonlyarray-exportasync
compiler: noos-figma
---

Returns the top-most frame that contains this node. If the node is not inside a frame, this will return undefined.

##### info

This function will only work in Figma Design and will throw an error if called in FigJam or Slides.

## Plugin data properties
