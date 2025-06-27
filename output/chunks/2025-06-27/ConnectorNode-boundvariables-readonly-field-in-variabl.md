---
title: >-
  boundVariables?: { readonly [field in VariableBindableNodeField]?:
  VariableAlias} & { readonly [field in VariableBindableTextField]?:
  VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[];
  effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: {
  [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] }
  [readonly] + setBoundVariable(field: VariableBindableNodeField |
  VariableBindableTextField, variable: Variable | null): void
slug: ConnectorNode-boundvariables-readonly-field-in-variabl
source_file: plugin-api-ConnectorNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ConnectorNode/'
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
chunk_slug: ConnectorNode-boundvariables-readonly-field-in-variabl
chunk_index: 30
chunk_of_total: 35
parent_file: ConnectorNode.md
parent_slug: ConnectorNode
char_count: 535
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ConnectorNode-introduction
  - ConnectorNode-connectorendstrokecap-connectorstrokecap
  - ConnectorNode-blendmode-blendmode
  - ConnectorNode-strokes-readonlyarray-strokestyleid-stri
  - ConnectorNode-setstrokestyleidasyncstyleid-string-prom
  - ConnectorNode-strokejoin-strokejoin-figmamixed-strokea
  - ConnectorNode-dashpattern-readonlyarray-strokegeometry
  - ConnectorNode-id-string-readonly
  - ConnectorNode-parent-basenode-childrenmixin-null-reado
  - ConnectorNode-name-string-removed-boolean-readonly
  - ConnectorNode-tostring-string
  - ConnectorNode-remove-void-setrelaunchdatadata-command-
  - ConnectorNode-getrelaunchdata-command-string-string-is
  - ConnectorNode-getcssasync-promise-key-string-string-
  - ConnectorNode-gettoplevelframe-framenode-undefined
  - ConnectorNode-getplugindatakey-string-string
  - ConnectorNode-setplugindatakey-string-value-string-voi
  - ConnectorNode-getplugindatakeys-string
  - ConnectorNode-getsharedplugindatanamespace-string-key-
  - ConnectorNode-setsharedplugindatanamespace-string-key-
  - ConnectorNode-getsharedplugindatakeysnamespace-string-
  - ConnectorNode-getdevresourcesasyncoptions-includechild
  - ConnectorNode-editdevresourceasynccurrenturl-string-ne
  - ConnectorNode-setdevresourcepreviewasyncurl-string-pre
  - ConnectorNode-maxwidth-number-null-minheight-number-nu
  - ConnectorNode-maxheight-number-null-relativetransform-
  - ConnectorNode-absolutetransform-transform-readonly-abs
  - ConnectorNode-visible-boolean-locked-boolean
  - ConnectorNode-stucknodes-scenenode-readonly
  - ConnectorNode-attachedconnectors-connectornode-readonl
  - ConnectorNode-inferredvariables-readonly-field-in-vari
  - ConnectorNode-resolvedvariablemodes-collectionid-strin
  - ConnectorNode-clearexplicitvariablemodeforcollectionco
  - ConnectorNode-exportsettings-readonlyarray-exportasync
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
