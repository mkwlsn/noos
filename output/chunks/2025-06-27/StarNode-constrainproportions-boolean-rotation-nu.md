---
title: 'constrainProportions: boolean + rotation: number'
slug: StarNode-constrainproportions-boolean-rotation-nu
source_file: plugin-api-StarNode.html
source_url: 'https://www.figma.com/plugin-docs/api/StarNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 99815c6503f5ed0b
token_count: 150
chunk_title: 'constrainProportions: boolean + rotation: number'
chunk_slug: StarNode-constrainproportions-boolean-rotation-nu
chunk_index: 47
chunk_of_total: 57
parent_file: StarNode.md
parent_slug: StarNode
char_count: 525
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - StarNode-introduction-type-star-readonly
  - StarNode-innerradius-number
  - StarNode-id-string-readonly
  - StarNode-parent-basenode-childrenmixin-null-reado
  - StarNode-name-string-removed-boolean-readonly
  - StarNode-tostring-string
  - StarNode-remove-void-setrelaunchdatadata-command-
  - StarNode-getrelaunchdata-command-string-string-is
  - StarNode-getcssasync-promise-key-string-string-
  - StarNode-gettoplevelframe-framenode-undefined
  - StarNode-getplugindatakey-string-string
  - StarNode-setplugindatakey-string-value-string-voi
  - StarNode-getplugindatakeys-string
  - StarNode-getsharedplugindatanamespace-string-key-
  - StarNode-setsharedplugindatanamespace-string-key-
  - StarNode-getsharedplugindatakeysnamespace-string-
  - StarNode-getdevresourcesasyncoptions-includechild
  - StarNode-editdevresourceasynccurrenturl-string-ne
  - StarNode-setdevresourcepreviewasyncurl-string-pre
  - StarNode-locked-boolean
  - StarNode-stucknodes-scenenode-readonly
  - StarNode-attachedconnectors-connectornode-readonl
  - StarNode-boundvariables-readonly-field-in-variabl
  - StarNode-inferredvariables-readonly-field-in-vari
  - StarNode-resolvedvariablemodes-collectionid-strin
  - StarNode-clearexplicitvariablemodeforcollectionco
  - StarNode-opacity-number-blendmode-blendmode
  - StarNode-ismask-boolean-masktype-masktype
  - StarNode-effects-readonlyarray-effectstyleid-stri
  - StarNode-seteffectstyleidasyncstyleid-string-prom
  - StarNode-cornersmoothing-number-fills-readonlyarr
  - StarNode-fillstyleid-string-figmamixed
  - StarNode-setfillstyleidasyncstyleid-string-promis
  - StarNode-strokestyleid-string
  - StarNode-setstrokestyleidasyncstyleid-string-prom
  - StarNode-strokejoin-strokejoin-figmamixed-strokea
  - StarNode-dashpattern-readonlyarray-strokegeometry
  - StarNode-strokecap-strokecap-figmamixed-strokemit
  - StarNode-outlinestroke-vectornode-null
  - StarNode-fillgeometry-vectorpaths-readonly-x-numb
  - StarNode-maxwidth-number-null-minheight-number-nu
  - StarNode-maxheight-number-null-relativetransform-
  - StarNode-absolutetransform-transform-readonly-abs
  - StarNode-layoutalign-min-center-max-stretch-inher
  - StarNode-layoutgrow-number
  - StarNode-layoutpositioning-auto-absolute
  - StarNode-absoluterenderbounds-rect-null-readonly
  - StarNode-layoutsizinghorizontal-fixed-hug-fill
  - StarNode-layoutsizingvertical-fixed-hug-fill
  - StarNode-resizewidth-number-height-number-void
  - StarNode-resizewithoutconstraintswidth-number-hei
  - StarNode-rescalescale-number-void-constraints-con
  - StarNode-targetaspectratio-vector-null-readonly
  - StarNode-exportsettings-readonlyarray-exportasync
  - StarNode-reactions-readonlyarray
  - StarNode-setreactionsasyncreactions-array-promise
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
