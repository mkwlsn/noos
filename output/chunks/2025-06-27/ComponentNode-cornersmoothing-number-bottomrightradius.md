---
title: 'cornerSmoothing: number + bottomRightRadius: number'
slug: ComponentNode-cornersmoothing-number-bottomrightradius
source_file: plugin-api-ComponentNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ComponentNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 4a8e31e959620665
token_count: 301
chunk_title: 'cornerSmoothing: number + bottomRightRadius: number'
chunk_slug: ComponentNode-cornersmoothing-number-bottomrightradius
chunk_index: 67
chunk_of_total: 96
parent_file: ComponentNode.md
parent_slug: ComponentNode
char_count: 1051
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ComponentNode-introduction
  - ComponentNode-type-component-readonly-clone-componentn
  - ComponentNode-instances-instancenode-readonly
  - ComponentNode-description-string-descriptionmarkdown-s
  - ComponentNode-documentationlinks-readonlyarray-remote-
  - ComponentNode-key-string-readonly
  - ComponentNode-getpublishstatusasync-promise-id-string-
  - ComponentNode-parent-basenode-childrenmixin-null-reado
  - ComponentNode-name-string-removed-boolean-readonly
  - ComponentNode-tostring-string
  - ComponentNode-remove-void-setrelaunchdatadata-command-
  - ComponentNode-getrelaunchdata-command-string-string-is
  - ComponentNode-getcssasync-promise-key-string-string-
  - ComponentNode-gettoplevelframe-framenode-undefined
  - ComponentNode-getplugindatakey-string-string
  - ComponentNode-setplugindatakey-string-value-string-voi
  - ComponentNode-getplugindatakeys-string
  - ComponentNode-getsharedplugindatanamespace-string-key-
  - ComponentNode-setsharedplugindatanamespace-string-key-
  - ComponentNode-getsharedplugindatakeysnamespace-string-
  - ComponentNode-getdevresourcesasyncoptions-includechild
  - ComponentNode-editdevresourceasynccurrenturl-string-ne
  - ComponentNode-setdevresourcepreviewasyncurl-string-pre
  - ComponentNode-locked-boolean
  - ComponentNode-stucknodes-scenenode-readonly
  - ComponentNode-attachedconnectors-connectornode-readonl
  - ComponentNode-boundvariables-readonly-field-in-variabl
  - ComponentNode-inferredvariables-readonly-field-in-vari
  - ComponentNode-resolvedvariablemodes-collectionid-strin
  - ComponentNode-clearexplicitvariablemodeforcollectionco
  - ComponentNode-children-readonlyarray-readonly
  - ComponentNode-appendchildchild-scenenode-void
  - ComponentNode-insertchildindex-number-child-scenenode-
  - ComponentNode-findchildrencallback-node-scenenode-bool
  - ComponentNode-findchildcallback-node-scenenode-boolean
  - ComponentNode-findallcallback-node-scenenode-boolean-s
  - ComponentNode-findonecallback-node-scenenode-boolean-s
  - ComponentNode-findallwithcriteriacriteria-findallcrite
  - ComponentNode-findwidgetnodesbywidgetidwidgetid-string
  - ComponentNode-detachedinfo-detachedinfo-null-readonly
  - ComponentNode-layoutgrids-readonlyarray-gridstyleid-st
  - ComponentNode-setgridstyleidasyncstyleid-string-promis
  - ComponentNode-guides-readonlyarray
  - ComponentNode-inferredautolayout-inferredautolayoutres
  - ComponentNode-layoutmode-none-horizontal-vertical-layo
  - ComponentNode-paddingleft-number-paddingright-number
  - ComponentNode-paddingtop-number-paddingbottom-number
  - ComponentNode-primaryaxissizingmode-fixed-auto
  - ComponentNode-counteraxissizingmode-fixed-auto
  - ComponentNode-primaryaxisalignitems-min-max-center-spa
  - ComponentNode-counteraxisalignitems-min-max-center-bas
  - ComponentNode-counteraxisaligncontent-auto-spacebetwee
  - ComponentNode-itemspacing-number-counteraxisspacing-nu
  - ComponentNode-itemreversezindex-boolean
  - ComponentNode-strokesincludedinlayout-boolean
  - ComponentNode-devstatus-devstatus
  - ComponentNode-annotations-readonlyarray
  - ComponentNode-backgroundstyleid-string-fills-readonlya
  - ComponentNode-fillstyleid-string-figmamixed
  - ComponentNode-setfillstyleidasyncstyleid-string-promis
  - ComponentNode-strokestyleid-string
  - ComponentNode-setstrokestyleidasyncstyleid-string-prom
  - ComponentNode-strokejoin-strokejoin-figmamixed-strokea
  - ComponentNode-dashpattern-readonlyarray-strokegeometry
  - ComponentNode-strokecap-strokecap-figmamixed-strokemit
  - ComponentNode-outlinestroke-vectornode-null
  - ComponentNode-fillgeometry-vectorpaths-readonly-corner
  - ComponentNode-stroketopweight-number-strokebottomweigh
  - ComponentNode-strokeleftweight-number-strokerightweigh
  - ComponentNode-opacity-number-blendmode-blendmode
  - ComponentNode-ismask-boolean-masktype-masktype
  - ComponentNode-effects-readonlyarray-effectstyleid-stri
  - ComponentNode-seteffectstyleidasyncstyleid-string-prom
  - ComponentNode-maxwidth-number-null-minheight-number-nu
  - ComponentNode-maxheight-number-null-relativetransform-
  - ComponentNode-absolutetransform-transform-readonly-abs
  - ComponentNode-layoutalign-min-center-max-stretch-inher
  - ComponentNode-layoutgrow-number
  - ComponentNode-layoutpositioning-auto-absolute
  - ComponentNode-absoluterenderbounds-rect-null-readonly
  - ComponentNode-constrainproportions-boolean-rotation-nu
  - ComponentNode-layoutsizinghorizontal-fixed-hug-fill
  - ComponentNode-layoutsizingvertical-fixed-hug-fill
  - ComponentNode-resizewidth-number-height-number-void
  - ComponentNode-resizewithoutconstraintswidth-number-hei
  - ComponentNode-rescalescale-number-void-constraints-con
  - ComponentNode-targetaspectratio-vector-null-readonly
  - ComponentNode-exportsettings-readonlyarray-exportasync
  - ComponentNode-reactions-readonlyarray
  - ComponentNode-setreactionsasyncreactions-array-promise
  - ComponentNode-numberoffixedchildren-number-overlayposi
  - ComponentNode-variantproperties-property-string-string
  - ComponentNode-componentpropertydefinitions-componentpr
  - ComponentNode-addcomponentpropertypropertyname-string-
  - ComponentNode-editcomponentpropertypropertyname-string
merged_titles:
  - 'cornerSmoothing: number'
  - 'bottomRightRadius: number'
compiler: noos-figma
---

A value that lets you control how "smooth" the corners are. Ranges from 0 to 1.

[View more →](/plugin-docs/api/properties/nodes-cornersmoothing/)

You can set individual corner radius of each of the four corners of a rectangle node or frame-like node. Similar to `cornerRadius`, these value must be non-negative and can be fractional. If an edge length is less than twice the corner radius, the corner radius for each vertex of the edge will be clamped to half the edge length.

Setting `cornerRadius` sets the property for all four corners. Setting these corners to different values makes `cornerRadius` return `mixed`.

## Individual strokes-related properties

You can set individual stroke weights for each of the four sides of a rectangle node or frame-like node. Similar to [strokeWeight](/plugin-docs/api/node-properties/#strokeweight)
, these values must be non-negative and can be fractional. To hide a side, set the value to 0.

Setting [strokeWeight](/plugin-docs/api/node-properties/#strokeweight)
 sets the same value for all four sides.
