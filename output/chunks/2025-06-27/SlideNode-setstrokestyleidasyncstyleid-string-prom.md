---
title: >-
  setStrokeStyleIdAsync(styleId: string): Promise + strokeWeight: number |
  figma.mixed
slug: SlideNode-setstrokestyleidasyncstyleid-string-prom
source_file: plugin-api-SlideNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SlideNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b2237b49b7a6109a
token_count: 189
chunk_title: >-
  setStrokeStyleIdAsync(styleId: string): Promise + strokeWeight: number |
  figma.mixed
chunk_slug: SlideNode-setstrokestyleidasyncstyleid-string-prom
chunk_index: 56
chunk_of_total: 84
parent_file: SlideNode.md
parent_slug: SlideNode
char_count: 659
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - SlideNode-introduction
  - SlideNode-isskippedslide-boolean-id-string-readonl
  - SlideNode-parent-basenode-childrenmixin-null-reado
  - SlideNode-name-string-removed-boolean-readonly
  - SlideNode-tostring-string
  - SlideNode-remove-void-setrelaunchdatadata-command-
  - SlideNode-getrelaunchdata-command-string-string-is
  - SlideNode-getcssasync-promise-key-string-string-
  - SlideNode-gettoplevelframe-framenode-undefined
  - SlideNode-getplugindatakey-string-string
  - SlideNode-setplugindatakey-string-value-string-voi
  - SlideNode-getplugindatakeys-string
  - SlideNode-getsharedplugindatanamespace-string-key-
  - SlideNode-setsharedplugindatanamespace-string-key-
  - SlideNode-getsharedplugindatakeysnamespace-string-
  - SlideNode-getdevresourcesasyncoptions-includechild
  - SlideNode-editdevresourceasynccurrenturl-string-ne
  - SlideNode-setdevresourcepreviewasyncurl-string-pre
  - SlideNode-locked-boolean
  - SlideNode-stucknodes-scenenode-readonly
  - SlideNode-attachedconnectors-connectornode-readonl
  - SlideNode-boundvariables-readonly-field-in-variabl
  - SlideNode-inferredvariables-readonly-field-in-vari
  - SlideNode-resolvedvariablemodes-collectionid-strin
  - SlideNode-clearexplicitvariablemodeforcollectionco
  - SlideNode-children-readonlyarray-readonly
  - SlideNode-appendchildchild-scenenode-void
  - SlideNode-insertchildindex-number-child-scenenode-
  - SlideNode-findchildrencallback-node-scenenode-bool
  - SlideNode-findchildcallback-node-scenenode-boolean
  - SlideNode-findallcallback-node-scenenode-boolean-s
  - SlideNode-findonecallback-node-scenenode-boolean-s
  - SlideNode-findallwithcriteriacriteria-findallcrite
  - SlideNode-findwidgetnodesbywidgetidwidgetid-string
  - SlideNode-detachedinfo-detachedinfo-null-readonly
  - SlideNode-layoutgrids-readonlyarray-gridstyleid-st
  - SlideNode-setgridstyleidasyncstyleid-string-promis
  - SlideNode-guides-readonlyarray
  - SlideNode-inferredautolayout-inferredautolayoutres
  - SlideNode-layoutmode-none-horizontal-vertical-layo
  - SlideNode-paddingleft-number-paddingright-number
  - SlideNode-paddingtop-number-paddingbottom-number
  - SlideNode-primaryaxissizingmode-fixed-auto
  - SlideNode-counteraxissizingmode-fixed-auto
  - SlideNode-primaryaxisalignitems-min-max-center-spa
  - SlideNode-counteraxisalignitems-min-max-center-bas
  - SlideNode-counteraxisaligncontent-auto-spacebetwee
  - SlideNode-itemspacing-number-counteraxisspacing-nu
  - SlideNode-itemreversezindex-boolean
  - SlideNode-strokesincludedinlayout-boolean
  - SlideNode-devstatus-devstatus
  - SlideNode-annotations-readonlyarray
  - SlideNode-backgroundstyleid-string-fills-readonlya
  - SlideNode-fillstyleid-string-figmamixed
  - SlideNode-setfillstyleidasyncstyleid-string-promis
  - SlideNode-strokestyleid-string
  - SlideNode-strokejoin-strokejoin-figmamixed-strokea
  - SlideNode-dashpattern-readonlyarray-strokegeometry
  - SlideNode-strokecap-strokecap-figmamixed-strokemit
  - SlideNode-outlinestroke-vectornode-null
  - SlideNode-fillgeometry-vectorpaths-readonly-corner
  - SlideNode-cornersmoothing-number-bottomrightradius
  - SlideNode-stroketopweight-number-strokebottomweigh
  - SlideNode-strokeleftweight-number-strokerightweigh
  - SlideNode-opacity-number-blendmode-blendmode
  - SlideNode-ismask-boolean-masktype-masktype
  - SlideNode-effects-readonlyarray-effectstyleid-stri
  - SlideNode-seteffectstyleidasyncstyleid-string-prom
  - SlideNode-maxwidth-number-null-minheight-number-nu
  - SlideNode-maxheight-number-null-relativetransform-
  - SlideNode-absolutetransform-transform-readonly-abs
  - SlideNode-layoutalign-min-center-max-stretch-inher
  - SlideNode-layoutgrow-number
  - SlideNode-layoutpositioning-auto-absolute
  - SlideNode-absoluterenderbounds-rect-null-readonly
  - SlideNode-constrainproportions-boolean-rotation-nu
  - SlideNode-layoutsizinghorizontal-fixed-hug-fill
  - SlideNode-layoutsizingvertical-fixed-hug-fill
  - SlideNode-resizewidth-number-height-number-void
  - SlideNode-resizewithoutconstraintswidth-number-hei
  - SlideNode-rescalescale-number-void-constraints-con
  - SlideNode-targetaspectratio-vector-null-readonly
  - SlideNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'setStrokeStyleIdAsync(styleId: string): Promise'
  - 'strokeWeight: number | figma.mixed'
compiler: noos-figma
---

Set the [`PaintStyle`](/plugin-docs/api/PaintStyle/)
 that the [`strokes`](/plugin-docs/api/node-properties/#strokes)
 property of this node is linked to.

The thickness of the stroke, in pixels. This value must be non-negative and can be fractional.

##### caution

For rectangle nodes or frame-like nodes using different individual stroke weights, this property will return [`figma.mixed`](/plugin-docs/api/properties/figma-mixed/)
.

##### info

For rectangle nodes or frame-like nodes, individual stroke weights can be set for each side using the following properties:

- `strokeTopWeight`
- `strokeBottomWeight`
- `strokeLeftWeight`
- `strokeRightWeight`
