---
title: >-
  boundVariables?: { readonly [field in VariableBindableNodeField]?:
  VariableAlias} & { readonly [field in VariableBindableTextField]?:
  VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[];
  effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: {
  [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] }
  [readonly] + setBoundVariable(field: VariableBindableNodeField |
  VariableBindableTextField, variable: Variable | null): void
slug: EmbedNode-boundvariables-readonly-field-in-variabl
source_file: plugin-api-EmbedNode.html
source_url: 'https://www.figma.com/plugin-docs/api/EmbedNode/'
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
chunk_slug: EmbedNode-boundvariables-readonly-field-in-variabl
chunk_index: 24
chunk_of_total: 29
parent_file: EmbedNode.md
parent_slug: EmbedNode
char_count: 535
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - EmbedNode-introduction
  - EmbedNode-clone-embednode-id-string-readonly
  - EmbedNode-parent-basenode-childrenmixin-null-reado
  - EmbedNode-name-string-removed-boolean-readonly
  - EmbedNode-tostring-string
  - EmbedNode-remove-void-setrelaunchdatadata-command-
  - EmbedNode-getrelaunchdata-command-string-string-is
  - EmbedNode-getcssasync-promise-key-string-string-
  - EmbedNode-gettoplevelframe-framenode-undefined
  - EmbedNode-getplugindatakey-string-string
  - EmbedNode-setplugindatakey-string-value-string-voi
  - EmbedNode-getplugindatakeys-string
  - EmbedNode-getsharedplugindatanamespace-string-key-
  - EmbedNode-setsharedplugindatanamespace-string-key-
  - EmbedNode-getsharedplugindatakeysnamespace-string-
  - EmbedNode-getdevresourcesasyncoptions-includechild
  - EmbedNode-editdevresourceasynccurrenturl-string-ne
  - EmbedNode-setdevresourcepreviewasyncurl-string-pre
  - EmbedNode-maxwidth-number-null-minheight-number-nu
  - EmbedNode-maxheight-number-null-relativetransform-
  - EmbedNode-absolutetransform-transform-readonly-abs
  - EmbedNode-visible-boolean-locked-boolean
  - EmbedNode-stucknodes-scenenode-readonly
  - EmbedNode-attachedconnectors-connectornode-readonl
  - EmbedNode-inferredvariables-readonly-field-in-vari
  - EmbedNode-resolvedvariablemodes-collectionid-strin
  - EmbedNode-clearexplicitvariablemodeforcollectionco
  - EmbedNode-exportsettings-readonlyarray-exportasync
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
