---
title: >-
  boundVariables?: { readonly [field in VariableBindableNodeField]?:
  VariableAlias} & { readonly [field in VariableBindableTextField]?:
  VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[];
  effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: {
  [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] }
  [readonly] + setBoundVariable(field: VariableBindableNodeField |
  VariableBindableTextField, variable: Variable | null): void
slug: TableNode-boundvariables-readonly-field-in-variabl
source_file: plugin-api-TableNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TableNode/'
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
chunk_slug: TableNode-boundvariables-readonly-field-in-variabl
chunk_index: 31
chunk_of_total: 36
parent_file: TableNode.md
parent_slug: TableNode
char_count: 535
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - TableNode-introduction-type-table-readonly
  - TableNode-insertrowrowindex-number-void-insertcolu
  - TableNode-removerowrowindex-number-void-removecolu
  - TableNode-moverowfromindex-number-toindex-number-v
  - TableNode-resizerowrowindex-number-height-number-v
  - TableNode-fills-readonlyarray-figmamixed
  - TableNode-fillstyleid-string-figmamixed
  - TableNode-setfillstyleidasyncstyleid-string-promis
  - TableNode-blendmode-blendmode-id-string-readonly
  - TableNode-parent-basenode-childrenmixin-null-reado
  - TableNode-name-string-removed-boolean-readonly
  - TableNode-tostring-string
  - TableNode-remove-void-setrelaunchdatadata-command-
  - TableNode-getrelaunchdata-command-string-string-is
  - TableNode-getcssasync-promise-key-string-string-
  - TableNode-gettoplevelframe-framenode-undefined
  - TableNode-getplugindatakey-string-string
  - TableNode-setplugindatakey-string-value-string-voi
  - TableNode-getplugindatakeys-string
  - TableNode-getsharedplugindatanamespace-string-key-
  - TableNode-setsharedplugindatanamespace-string-key-
  - TableNode-getsharedplugindatakeysnamespace-string-
  - TableNode-getdevresourcesasyncoptions-includechild
  - TableNode-editdevresourceasynccurrenturl-string-ne
  - TableNode-setdevresourcepreviewasyncurl-string-pre
  - TableNode-maxwidth-number-null-minheight-number-nu
  - TableNode-maxheight-number-null-relativetransform-
  - TableNode-absolutetransform-transform-readonly-abs
  - TableNode-visible-boolean-locked-boolean
  - TableNode-stucknodes-scenenode-readonly
  - TableNode-attachedconnectors-connectornode-readonl
  - TableNode-inferredvariables-readonly-field-in-vari
  - TableNode-resolvedvariablemodes-collectionid-strin
  - TableNode-clearexplicitvariablemodeforcollectionco
  - TableNode-exportsettings-readonlyarray-exportasync
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
