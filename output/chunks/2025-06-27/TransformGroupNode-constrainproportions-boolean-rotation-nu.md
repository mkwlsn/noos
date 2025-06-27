---
title: 'constrainProportions: boolean + rotation: number'
slug: TransformGroupNode-constrainproportions-boolean-rotation-nu
source_file: plugin-api-TransformGroupNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TransformGroupNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 99815c6503f5ed0b
token_count: 150
chunk_title: 'constrainProportions: boolean + rotation: number'
chunk_slug: TransformGroupNode-constrainproportions-boolean-rotation-nu
chunk_index: 39
chunk_of_total: 55
parent_file: TransformGroupNode.md
parent_slug: TransformGroupNode
char_count: 525
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - TransformGroupNode-introduction
  - TransformGroupNode-type-transformgroup-readonly-clone-trans
  - TransformGroupNode-id-string-readonly
  - TransformGroupNode-parent-basenode-childrenmixin-null-reado
  - TransformGroupNode-name-string-removed-boolean-readonly
  - TransformGroupNode-tostring-string
  - TransformGroupNode-remove-void-setrelaunchdatadata-command-
  - TransformGroupNode-getrelaunchdata-command-string-string-is
  - TransformGroupNode-getcssasync-promise-key-string-string-
  - TransformGroupNode-gettoplevelframe-framenode-undefined
  - TransformGroupNode-getplugindatakey-string-string
  - TransformGroupNode-setplugindatakey-string-value-string-voi
  - TransformGroupNode-getplugindatakeys-string
  - TransformGroupNode-getsharedplugindatanamespace-string-key-
  - TransformGroupNode-setsharedplugindatanamespace-string-key-
  - TransformGroupNode-getsharedplugindatakeysnamespace-string-
  - TransformGroupNode-getdevresourcesasyncoptions-includechild
  - TransformGroupNode-editdevresourceasynccurrenturl-string-ne
  - TransformGroupNode-setdevresourcepreviewasyncurl-string-pre
  - TransformGroupNode-appendchildchild-scenenode-void
  - TransformGroupNode-insertchildindex-number-child-scenenode-
  - TransformGroupNode-findchildrencallback-node-scenenode-bool
  - TransformGroupNode-findchildcallback-node-scenenode-boolean
  - TransformGroupNode-findallcallback-node-scenenode-boolean-s
  - TransformGroupNode-findonecallback-node-scenenode-boolean-s
  - TransformGroupNode-findallwithcriteriacriteria-findallcrite
  - TransformGroupNode-findwidgetnodesbywidgetidwidgetid-string
  - TransformGroupNode-backgroundstyleid-string-opacity-number
  - TransformGroupNode-blendmode-blendmode-ismask-boolean
  - TransformGroupNode-masktype-masktype
  - TransformGroupNode-effects-readonlyarray-effectstyleid-stri
  - TransformGroupNode-seteffectstyleidasyncstyleid-string-prom
  - TransformGroupNode-maxwidth-number-null-minheight-number-nu
  - TransformGroupNode-maxheight-number-null-relativetransform-
  - TransformGroupNode-absolutetransform-transform-readonly-abs
  - TransformGroupNode-layoutalign-min-center-max-stretch-inher
  - TransformGroupNode-layoutgrow-number
  - TransformGroupNode-layoutpositioning-auto-absolute
  - TransformGroupNode-absoluterenderbounds-rect-null-readonly
  - TransformGroupNode-layoutsizinghorizontal-fixed-hug-fill
  - TransformGroupNode-layoutsizingvertical-fixed-hug-fill
  - TransformGroupNode-resizewidth-number-height-number-void
  - TransformGroupNode-resizewithoutconstraintswidth-number-hei
  - TransformGroupNode-rescalescale-number-void-targetaspectrat
  - TransformGroupNode-exportsettings-readonlyarray-exportasync
  - TransformGroupNode-reactions-readonlyarray
  - TransformGroupNode-setreactionsasyncreactions-array-promise
  - TransformGroupNode-locked-boolean
  - TransformGroupNode-stucknodes-scenenode-readonly
  - TransformGroupNode-attachedconnectors-connectornode-readonl
  - TransformGroupNode-boundvariables-readonly-field-in-variabl
  - TransformGroupNode-inferredvariables-readonly-field-in-vari
  - TransformGroupNode-resolvedvariablemodes-collectionid-strin
  - TransformGroupNode-clearexplicitvariablemodeforcollectionco
merged_titles:
  - 'constrainProportions: boolean'
  - 'rotation: number'
compiler: noos-figma
---

DEPRECATED: Use `targetAspectRatio`, `lockAspectRatio`, and `unlockAspectRatio` instead.

When toggled, causes the layer to keep its proportions when the user resizes it via the properties panel.

The rotation of the node in degrees. Returns values from -180 to 180. Identical to `Math.atan2(-m10, m00)` in the [`relativeTransform`](/plugin-docs/api/properties/nodes-relativetransform/)
 matrix. When setting `rotation`, it will also set `m00`, `m01`, `m10`, `m11`.

[View more →](/plugin-docs/api/properties/nodes-rotation/)
