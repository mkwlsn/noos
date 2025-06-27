---
title: >-
  boundVariables?: { readonly [field in VariableBindableNodeField]?:
  VariableAlias} & { readonly [field in VariableBindableTextField]?:
  VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[];
  effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: {
  [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] }
  [readonly] + setBoundVariable(field: VariableBindableNodeField |
  VariableBindableTextField, variable: Variable | null): void
slug: VectorNode-boundvariables-readonly-field-in-variabl
source_file: plugin-api-VectorNode.html
source_url: 'https://www.figma.com/plugin-docs/api/VectorNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d0f7de6b8af7656d
token_count: 153
chunk_title: >-
  boundVariables?: { readonly [field in VariableBindableNodeField]?:
  VariableAlias} & { readonly [field in VariableBindableTextField]?:
  VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[];
  effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: {
  [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] }
  [readonly] + setBoundVariable(field: VariableBindableNodeField |
  VariableBindableTextField, variable: Variable | null): void
chunk_slug: VectorNode-boundvariables-readonly-field-in-variabl
chunk_index: 22
chunk_of_total: 57
parent_file: VectorNode.md
parent_slug: VectorNode
char_count: 535
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - VectorNode-introduction
  - VectorNode-vectornetwork-vectornetwork
  - VectorNode-handlemirroring-handlemirroring-figmamix
  - VectorNode-parent-basenode-childrenmixin-null-reado
  - VectorNode-name-string-removed-boolean-readonly
  - VectorNode-tostring-string
  - VectorNode-remove-void-setrelaunchdatadata-command-
  - VectorNode-getrelaunchdata-command-string-string-is
  - VectorNode-getcssasync-promise-key-string-string-
  - VectorNode-gettoplevelframe-framenode-undefined
  - VectorNode-getplugindatakey-string-string
  - VectorNode-setplugindatakey-string-value-string-voi
  - VectorNode-getplugindatakeys-string
  - VectorNode-getsharedplugindatanamespace-string-key-
  - VectorNode-setsharedplugindatanamespace-string-key-
  - VectorNode-getsharedplugindatakeysnamespace-string-
  - VectorNode-getdevresourcesasyncoptions-includechild
  - VectorNode-editdevresourceasynccurrenturl-string-ne
  - VectorNode-setdevresourcepreviewasyncurl-string-pre
  - VectorNode-locked-boolean
  - VectorNode-stucknodes-scenenode-readonly
  - VectorNode-attachedconnectors-connectornode-readonl
  - VectorNode-inferredvariables-readonly-field-in-vari
  - VectorNode-resolvedvariablemodes-collectionid-strin
  - VectorNode-clearexplicitvariablemodeforcollectionco
  - VectorNode-opacity-number-blendmode-blendmode
  - VectorNode-ismask-boolean-masktype-masktype
  - VectorNode-effects-readonlyarray-effectstyleid-stri
  - VectorNode-seteffectstyleidasyncstyleid-string-prom
  - VectorNode-cornersmoothing-number-fills-readonlyarr
  - VectorNode-fillstyleid-string-figmamixed
  - VectorNode-setfillstyleidasyncstyleid-string-promis
  - VectorNode-strokestyleid-string
  - VectorNode-setstrokestyleidasyncstyleid-string-prom
  - VectorNode-strokejoin-strokejoin-figmamixed-strokea
  - VectorNode-dashpattern-readonlyarray-strokegeometry
  - VectorNode-strokecap-strokecap-figmamixed-strokemit
  - VectorNode-outlinestroke-vectornode-null
  - VectorNode-fillgeometry-vectorpaths-readonly-x-numb
  - VectorNode-maxwidth-number-null-minheight-number-nu
  - VectorNode-maxheight-number-null-relativetransform-
  - VectorNode-absolutetransform-transform-readonly-abs
  - VectorNode-layoutalign-min-center-max-stretch-inher
  - VectorNode-layoutgrow-number
  - VectorNode-layoutpositioning-auto-absolute
  - VectorNode-absoluterenderbounds-rect-null-readonly
  - VectorNode-constrainproportions-boolean-rotation-nu
  - VectorNode-layoutsizinghorizontal-fixed-hug-fill
  - VectorNode-layoutsizingvertical-fixed-hug-fill
  - VectorNode-resizewidth-number-height-number-void
  - VectorNode-resizewithoutconstraintswidth-number-hei
  - VectorNode-rescalescale-number-void-constraints-con
  - VectorNode-targetaspectratio-vector-null-readonly
  - VectorNode-exportsettings-readonlyarray-exportasync
  - VectorNode-reactions-readonlyarray
  - VectorNode-setreactionsasyncreactions-array-promise
merged_titles:
  - >-
    boundVariables?: { readonly [field in VariableBindableNodeField]?:
    VariableAlias} & { readonly [field in VariableBindableTextField]?:
    VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[];
    effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties:
    { [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] }
    [readonly]
  - >-
    setBoundVariable(field: VariableBindableNodeField |
    VariableBindableTextField, variable: Variable | null): void
compiler: noos-figma
---

The variables bound to a particular field on this node. Please see the [Working with Variables](/plugin-docs/working-with-variables/)
 guide for how to get and set variable bindings.

Binds the provided `field` on this node to the given variable. Please see the [Working with Variables](/plugin-docs/working-with-variables/)
 guide for how to get and set variable bindings.

If `null` is provided as the variable, the given `field` will be unbound from any variables.

[View more →](/plugin-docs/api/properties/nodes-setboundvariable/)
