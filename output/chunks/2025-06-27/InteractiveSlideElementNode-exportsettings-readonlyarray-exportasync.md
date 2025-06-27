---
title: >-
  exportSettings: ReadonlyArray + exportAsync(settings: ExportSettingsREST):
  Promise
slug: InteractiveSlideElementNode-exportsettings-readonlyarray-exportasync
source_file: plugin-api-InteractiveSlideElementNode.html
source_url: 'https://www.figma.com/plugin-docs/api/InteractiveSlideElementNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: f9c0bb9aa40cb7f1
token_count: 133
chunk_title: >-
  exportSettings: ReadonlyArray + exportAsync(settings: ExportSettingsREST):
  Promise
chunk_slug: InteractiveSlideElementNode-exportsettings-readonlyarray-exportasync
chunk_index: 28
chunk_of_total: 29
parent_file: InteractiveSlideElementNode.md
parent_slug: InteractiveSlideElementNode
char_count: 465
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
  - InteractiveSlideElementNode-resolvedvariablemodes-collectionid-strin
  - InteractiveSlideElementNode-clearexplicitvariablemodeforcollectionco
merged_titles:
  - 'exportSettings: ReadonlyArray'
  - 'exportAsync(settings: ExportSettingsREST): Promise'
compiler: noos-figma
---

List of export settings stored on the node. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

Exports the node as an encoded image.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-exportasync/)
