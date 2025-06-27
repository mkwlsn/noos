---
title: 'maxHeight: number | null + relativeTransform: Transform'
slug: SectionNode-maxheight-number-null-relativetransform-
source_file: plugin-api-SectionNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SectionNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2b9db03002c915e2
token_count: 124
chunk_title: 'maxHeight: number | null + relativeTransform: Transform'
chunk_slug: SectionNode-maxheight-number-null-relativetransform-
chunk_index: 22
chunk_of_total: 45
parent_file: SectionNode.md
parent_slug: SectionNode
char_count: 431
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - SectionNode-introduction
  - SectionNode-type-section-readonly-sectioncontentshid
  - SectionNode-clone-sectionnode-resizewithoutconstrain
  - SectionNode-devstatus-devstatus
  - SectionNode-id-string-readonly
  - SectionNode-parent-basenode-childrenmixin-null-reado
  - SectionNode-name-string-removed-boolean-readonly
  - SectionNode-tostring-string
  - SectionNode-remove-void-setrelaunchdatadata-command-
  - SectionNode-getrelaunchdata-command-string-string-is
  - SectionNode-getcssasync-promise-key-string-string-
  - SectionNode-gettoplevelframe-framenode-undefined
  - SectionNode-getplugindatakey-string-string
  - SectionNode-setplugindatakey-string-value-string-voi
  - SectionNode-getplugindatakeys-string
  - SectionNode-getsharedplugindatanamespace-string-key-
  - SectionNode-setsharedplugindatanamespace-string-key-
  - SectionNode-getsharedplugindatakeysnamespace-string-
  - SectionNode-getdevresourcesasyncoptions-includechild
  - SectionNode-editdevresourceasynccurrenturl-string-ne
  - SectionNode-setdevresourcepreviewasyncurl-string-pre
  - SectionNode-maxwidth-number-null-minheight-number-nu
  - SectionNode-absolutetransform-transform-readonly-abs
  - SectionNode-visible-boolean-locked-boolean
  - SectionNode-stucknodes-scenenode-readonly
  - SectionNode-attachedconnectors-connectornode-readonl
  - SectionNode-boundvariables-readonly-field-in-variabl
  - SectionNode-inferredvariables-readonly-field-in-vari
  - SectionNode-resolvedvariablemodes-collectionid-strin
  - SectionNode-clearexplicitvariablemodeforcollectionco
  - SectionNode-exportsettings-readonlyarray-exportasync
  - SectionNode-children-readonlyarray-readonly
  - SectionNode-appendchildchild-scenenode-void
  - SectionNode-insertchildindex-number-child-scenenode-
  - SectionNode-findchildrencallback-node-scenenode-bool
  - SectionNode-findchildcallback-node-scenenode-boolean
  - SectionNode-findallcallback-node-scenenode-boolean-s
  - SectionNode-findonecallback-node-scenenode-boolean-s
  - SectionNode-findallwithcriteriacriteria-findallcrite
  - SectionNode-findwidgetnodesbywidgetidwidgetid-string
  - SectionNode-fills-readonlyarray-figmamixed
  - SectionNode-fillstyleid-string-figmamixed
  - SectionNode-setfillstyleidasyncstyleid-string-promis
  - SectionNode-resizewithoutconstraintswidth-number-hei
merged_titles:
  - 'maxHeight: number | null'
  - 'relativeTransform: Transform'
compiler: noos-figma
---

Applicable only to auto-layout frames and their direct children. Value must be positive. Set to `null` to remove `maxHeight`.

The position of a node relative to its containing parent as a [`Transform`](/plugin-docs/api/Transform/)
 matrix. Not used for scaling, see `width` and `height` instead. Read the details page to understand the nuances of this property.

[View more →](/plugin-docs/api/properties/nodes-relativetransform/)
