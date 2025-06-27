---
title: 'inferredAutoLayout: InferredAutoLayoutResult | null'
slug: FrameNode-inferredautolayout-inferredautolayoutres
source_file: plugin-api-FrameNode.html
source_url: 'https://www.figma.com/plugin-docs/api/FrameNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: dc14364f16ca996a
token_count: 124
chunk_title: 'inferredAutoLayout: InferredAutoLayoutResult | null'
chunk_slug: FrameNode-inferredautolayout-inferredautolayoutres
chunk_index: 39
chunk_of_total: 88
parent_file: FrameNode.md
parent_slug: FrameNode
char_count: 434
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - FrameNode-introduction
  - FrameNode-type-frame-readonly-clone-framenode
  - FrameNode-id-string-readonly
  - FrameNode-parent-basenode-childrenmixin-null-reado
  - FrameNode-name-string-removed-boolean-readonly
  - FrameNode-tostring-string
  - FrameNode-remove-void-setrelaunchdatadata-command-
  - FrameNode-getrelaunchdata-command-string-string-is
  - FrameNode-getcssasync-promise-key-string-string-
  - FrameNode-gettoplevelframe-framenode-undefined
  - FrameNode-getplugindatakey-string-string
  - FrameNode-setplugindatakey-string-value-string-voi
  - FrameNode-getplugindatakeys-string
  - FrameNode-getsharedplugindatanamespace-string-key-
  - FrameNode-setsharedplugindatanamespace-string-key-
  - FrameNode-getsharedplugindatakeysnamespace-string-
  - FrameNode-getdevresourcesasyncoptions-includechild
  - FrameNode-editdevresourceasynccurrenturl-string-ne
  - FrameNode-setdevresourcepreviewasyncurl-string-pre
  - FrameNode-locked-boolean
  - FrameNode-stucknodes-scenenode-readonly
  - FrameNode-attachedconnectors-connectornode-readonl
  - FrameNode-boundvariables-readonly-field-in-variabl
  - FrameNode-inferredvariables-readonly-field-in-vari
  - FrameNode-resolvedvariablemodes-collectionid-strin
  - FrameNode-clearexplicitvariablemodeforcollectionco
  - FrameNode-children-readonlyarray-readonly
  - FrameNode-appendchildchild-scenenode-void
  - FrameNode-insertchildindex-number-child-scenenode-
  - FrameNode-findchildrencallback-node-scenenode-bool
  - FrameNode-findchildcallback-node-scenenode-boolean
  - FrameNode-findallcallback-node-scenenode-boolean-s
  - FrameNode-findonecallback-node-scenenode-boolean-s
  - FrameNode-findallwithcriteriacriteria-findallcrite
  - FrameNode-findwidgetnodesbywidgetidwidgetid-string
  - FrameNode-detachedinfo-detachedinfo-null-readonly
  - FrameNode-layoutgrids-readonlyarray-gridstyleid-st
  - FrameNode-setgridstyleidasyncstyleid-string-promis
  - FrameNode-guides-readonlyarray
  - FrameNode-layoutmode-none-horizontal-vertical-layo
  - FrameNode-paddingleft-number-paddingright-number
  - FrameNode-paddingtop-number-paddingbottom-number
  - FrameNode-primaryaxissizingmode-fixed-auto
  - FrameNode-counteraxissizingmode-fixed-auto
  - FrameNode-primaryaxisalignitems-min-max-center-spa
  - FrameNode-counteraxisalignitems-min-max-center-bas
  - FrameNode-counteraxisaligncontent-auto-spacebetwee
  - FrameNode-itemspacing-number-counteraxisspacing-nu
  - FrameNode-itemreversezindex-boolean
  - FrameNode-strokesincludedinlayout-boolean
  - FrameNode-devstatus-devstatus
  - FrameNode-annotations-readonlyarray
  - FrameNode-backgroundstyleid-string-fills-readonlya
  - FrameNode-fillstyleid-string-figmamixed
  - FrameNode-setfillstyleidasyncstyleid-string-promis
  - FrameNode-strokestyleid-string
  - FrameNode-setstrokestyleidasyncstyleid-string-prom
  - FrameNode-strokejoin-strokejoin-figmamixed-strokea
  - FrameNode-dashpattern-readonlyarray-strokegeometry
  - FrameNode-strokecap-strokecap-figmamixed-strokemit
  - FrameNode-outlinestroke-vectornode-null
  - FrameNode-fillgeometry-vectorpaths-readonly-corner
  - FrameNode-cornersmoothing-number-bottomrightradius
  - FrameNode-stroketopweight-number-strokebottomweigh
  - FrameNode-strokeleftweight-number-strokerightweigh
  - FrameNode-opacity-number-blendmode-blendmode
  - FrameNode-ismask-boolean-masktype-masktype
  - FrameNode-effects-readonlyarray-effectstyleid-stri
  - FrameNode-seteffectstyleidasyncstyleid-string-prom
  - FrameNode-maxwidth-number-null-minheight-number-nu
  - FrameNode-maxheight-number-null-relativetransform-
  - FrameNode-absolutetransform-transform-readonly-abs
  - FrameNode-layoutalign-min-center-max-stretch-inher
  - FrameNode-layoutgrow-number
  - FrameNode-layoutpositioning-auto-absolute
  - FrameNode-absoluterenderbounds-rect-null-readonly
  - FrameNode-constrainproportions-boolean-rotation-nu
  - FrameNode-layoutsizinghorizontal-fixed-hug-fill
  - FrameNode-layoutsizingvertical-fixed-hug-fill
  - FrameNode-resizewidth-number-height-number-void
  - FrameNode-resizewithoutconstraintswidth-number-hei
  - FrameNode-rescalescale-number-void-constraints-con
  - FrameNode-targetaspectratio-vector-null-readonly
  - FrameNode-exportsettings-readonlyarray-exportasync
  - FrameNode-reactions-readonlyarray
  - FrameNode-setreactionsasyncreactions-array-promise
  - FrameNode-numberoffixedchildren-number-overlayposi
compiler: noos-figma
---

Returns inferred auto layout properties of a [`FrameNode`](/plugin-docs/api/FrameNode/)
 if applicable. Otherwise, returns `null`.

This is what Figma uses to power Dev Mode’s [code snippets](https://help.figma.com/hc/en-us/articles/15023124644247#Build_faster_with_customizable_code_snippets)
 feature, as it makes sure the generated code is more useful.

##### info

This method uses a heuristic to infer the auto layout properties.
