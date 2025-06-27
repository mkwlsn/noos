---
title: 'exportAsync(settings: ExportSettingsREST): Promise'
slug: SliceNode-exportasyncsettings-exportsettingsrest-p
source_file: plugin-api-SliceNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SliceNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 39db352a02aea77e
token_count: 92
chunk_title: 'exportAsync(settings: ExportSettingsREST): Promise'
chunk_slug: SliceNode-exportasyncsettings-exportsettingsrest-p
chunk_index: 40
chunk_of_total: 41
parent_file: SliceNode.md
parent_slug: SliceNode
char_count: 321
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - SliceNode-introduction
  - SliceNode-id-string-readonly
  - SliceNode-parent-basenode-childrenmixin-null-reado
  - SliceNode-name-string-removed-boolean-readonly
  - SliceNode-tostring-string
  - SliceNode-remove-void-setrelaunchdatadata-command-
  - SliceNode-getrelaunchdata-command-string-string-is
  - SliceNode-getcssasync-promise-key-string-string-
  - SliceNode-gettoplevelframe-framenode-undefined
  - SliceNode-getplugindatakey-string-string
  - SliceNode-setplugindatakey-string-value-string-voi
  - SliceNode-getplugindatakeys-string
  - SliceNode-getsharedplugindatanamespace-string-key-
  - SliceNode-setsharedplugindatanamespace-string-key-
  - SliceNode-getsharedplugindatakeysnamespace-string-
  - SliceNode-getdevresourcesasyncoptions-includechild
  - SliceNode-editdevresourceasynccurrenturl-string-ne
  - SliceNode-setdevresourcepreviewasyncurl-string-pre
  - SliceNode-locked-boolean
  - SliceNode-stucknodes-scenenode-readonly
  - SliceNode-attachedconnectors-connectornode-readonl
  - SliceNode-boundvariables-readonly-field-in-variabl
  - SliceNode-inferredvariables-readonly-field-in-vari
  - SliceNode-resolvedvariablemodes-collectionid-strin
  - SliceNode-clearexplicitvariablemodeforcollectionco
  - SliceNode-x-number-y-number
  - SliceNode-minwidth-number-null-maxwidth-number-nul
  - SliceNode-minheight-number-null-maxheight-number-n
  - SliceNode-relativetransform-transform
  - SliceNode-absolutetransform-transform-readonly-abs
  - SliceNode-layoutalign-min-center-max-stretch-inher
  - SliceNode-layoutgrow-number
  - SliceNode-layoutpositioning-auto-absolute
  - SliceNode-absoluterenderbounds-rect-null-readonly
  - SliceNode-constrainproportions-boolean-rotation-nu
  - SliceNode-layoutsizinghorizontal-fixed-hug-fill
  - SliceNode-layoutsizingvertical-fixed-hug-fill
  - SliceNode-resizewidth-number-height-number-void
  - SliceNode-resizewithoutconstraintswidth-number-hei
  - SliceNode-rescalescale-number-void-exportsettings-
compiler: noos-figma
---

Exports the node as an encoded image.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-exportasync/)
