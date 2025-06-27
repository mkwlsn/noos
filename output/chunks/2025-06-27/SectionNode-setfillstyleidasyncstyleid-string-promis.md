---
title: >-
  setFillStyleIdAsync(styleId: string): Promise + targetAspectRatio: Vector |
  null [readonly]
slug: SectionNode-setfillstyleidasyncstyleid-string-promis
source_file: plugin-api-SectionNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SectionNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 92142d8fd82547d9
token_count: 136
chunk_title: >-
  setFillStyleIdAsync(styleId: string): Promise + targetAspectRatio: Vector |
  null [readonly]
chunk_slug: SectionNode-setfillstyleidasyncstyleid-string-promis
chunk_index: 43
chunk_of_total: 45
parent_file: SectionNode.md
parent_slug: SectionNode
char_count: 475
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
  - SectionNode-maxheight-number-null-relativetransform-
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
  - SectionNode-resizewithoutconstraintswidth-number-hei
merged_titles:
  - 'setFillStyleIdAsync(styleId: string): Promise'
  - 'targetAspectRatio: Vector | null [readonly]'
compiler: noos-figma
---

Sets the [`PaintStyle`](/plugin-docs/api/PaintStyle/)
 that the [`fills`](/plugin-docs/api/properties/nodes-fills/)
 property of this node is linked to.

## Lock aspect ratio properties

When toggled, causes the layer to keep its proportions when the user resizes it via auto layout, constraints, the properties panel, or on-canvas.
If not set, the node does NOT resize toward a specific targetAspectRatio.

[View more →](/plugin-docs/api/properties/nodes-targetaspectratio/)
