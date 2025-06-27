---
title: >-
  boundVariables?: { readonly [field in VariableBindableNodeField]?:
  VariableAlias} & { readonly [field in VariableBindableTextField]?:
  VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[];
  effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: {
  [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] }
  [readonly] + setBoundVariable(field: VariableBindableNodeField |
  VariableBindableTextField, variable: Variable | null): void
slug: ShapeWithTextNode-boundvariables-readonly-field-in-variabl
source_file: plugin-api-ShapeWithTextNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ShapeWithTextNode/'
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
chunk_slug: ShapeWithTextNode-boundvariables-readonly-field-in-variabl
chunk_index: 34
chunk_of_total: 39
parent_file: ShapeWithTextNode.md
parent_slug: ShapeWithTextNode
char_count: 535
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ShapeWithTextNode-introduction
  - ShapeWithTextNode-type-shapewithtext-readonly-shapetype-sq
  - ShapeWithTextNode-rotation-number
  - ShapeWithTextNode-clone-shapewithtextnode-fills-readonlyar
  - ShapeWithTextNode-fillstyleid-string-figmamixed
  - ShapeWithTextNode-setfillstyleidasyncstyleid-string-promis
  - ShapeWithTextNode-strokestyleid-string
  - ShapeWithTextNode-setstrokestyleidasyncstyleid-string-prom
  - ShapeWithTextNode-strokejoin-strokejoin-figmamixed-strokea
  - ShapeWithTextNode-dashpattern-readonlyarray-strokegeometry
  - ShapeWithTextNode-opacity-number-blendmode-blendmode
  - ShapeWithTextNode-id-string-readonly
  - ShapeWithTextNode-parent-basenode-childrenmixin-null-reado
  - ShapeWithTextNode-name-string-removed-boolean-readonly
  - ShapeWithTextNode-tostring-string
  - ShapeWithTextNode-remove-void-setrelaunchdatadata-command-
  - ShapeWithTextNode-getrelaunchdata-command-string-string-is
  - ShapeWithTextNode-getcssasync-promise-key-string-string-
  - ShapeWithTextNode-gettoplevelframe-framenode-undefined
  - ShapeWithTextNode-getplugindatakey-string-string
  - ShapeWithTextNode-setplugindatakey-string-value-string-voi
  - ShapeWithTextNode-getplugindatakeys-string
  - ShapeWithTextNode-getsharedplugindatanamespace-string-key-
  - ShapeWithTextNode-setsharedplugindatanamespace-string-key-
  - ShapeWithTextNode-getsharedplugindatakeysnamespace-string-
  - ShapeWithTextNode-getdevresourcesasyncoptions-includechild
  - ShapeWithTextNode-editdevresourceasynccurrenturl-string-ne
  - ShapeWithTextNode-setdevresourcepreviewasyncurl-string-pre
  - ShapeWithTextNode-maxwidth-number-null-minheight-number-nu
  - ShapeWithTextNode-maxheight-number-null-relativetransform-
  - ShapeWithTextNode-absolutetransform-transform-readonly-abs
  - ShapeWithTextNode-visible-boolean-locked-boolean
  - ShapeWithTextNode-stucknodes-scenenode-readonly
  - ShapeWithTextNode-attachedconnectors-connectornode-readonl
  - ShapeWithTextNode-inferredvariables-readonly-field-in-vari
  - ShapeWithTextNode-resolvedvariablemodes-collectionid-strin
  - ShapeWithTextNode-clearexplicitvariablemodeforcollectionco
  - ShapeWithTextNode-exportsettings-readonlyarray-exportasync
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
