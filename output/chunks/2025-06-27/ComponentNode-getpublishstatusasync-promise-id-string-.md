---
title: 'getPublishStatusAsync(): Promise + id: string [readonly]'
slug: ComponentNode-getpublishstatusasync-promise-id-string-
source_file: plugin-api-ComponentNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ComponentNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 1e992f8b5a56e691
token_count: 116
chunk_title: 'getPublishStatusAsync(): Promise + id: string [readonly]'
chunk_slug: ComponentNode-getpublishstatusasync-promise-id-string-
chunk_index: 6
chunk_of_total: 96
parent_file: ComponentNode.md
parent_slug: ComponentNode
char_count: 405
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - ComponentNode-introduction
  - ComponentNode-type-component-readonly-clone-componentn
  - ComponentNode-instances-instancenode-readonly
  - ComponentNode-description-string-descriptionmarkdown-s
  - ComponentNode-documentationlinks-readonlyarray-remote-
  - ComponentNode-key-string-readonly
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
  - ComponentNode-cornersmoothing-number-bottomrightradius
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
  - 'getPublishStatusAsync(): Promise'
  - 'id: string [readonly]'
compiler: noos-figma
---

Gets the status of this style/component in the team library.

## Base node properties

The unique identifier of a node. For example, `1:3`. The node id can be used with methods such as [`figma.getNodeByIdAsync`](/plugin-docs/api/figma/#getnodebyidasync)
, but plugins typically don't need to use this since you can usually just access a node directly.

[View more →](/plugin-docs/api/properties/nodes-id/)
