---
title: >-
  boundVariables?: { readonly [field in VariableBindableNodeField]?:
  VariableAlias} & { readonly [field in VariableBindableTextField]?:
  VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[];
  effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: {
  [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] }
  [readonly] + setBoundVariable(field: VariableBindableNodeField |
  VariableBindableTextField, variable: Variable | null): void
slug: MediaNode-boundvariables-readonly-field-in-variabl
source_file: plugin-api-MediaNode.html
source_url: 'https://www.figma.com/plugin-docs/api/MediaNode/'
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
chunk_slug: MediaNode-boundvariables-readonly-field-in-variabl
chunk_index: 25
chunk_of_total: 30
parent_file: MediaNode.md
parent_slug: MediaNode
char_count: 535
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - MediaNode-introduction
  - MediaNode-resizewidth-number-height-number-void-re
  - MediaNode-clone-medianode-id-string-readonly
  - MediaNode-parent-basenode-childrenmixin-null-reado
  - MediaNode-name-string-removed-boolean-readonly
  - MediaNode-tostring-string
  - MediaNode-remove-void-setrelaunchdatadata-command-
  - MediaNode-getrelaunchdata-command-string-string-is
  - MediaNode-getcssasync-promise-key-string-string-
  - MediaNode-gettoplevelframe-framenode-undefined
  - MediaNode-getplugindatakey-string-string
  - MediaNode-setplugindatakey-string-value-string-voi
  - MediaNode-getplugindatakeys-string
  - MediaNode-getsharedplugindatanamespace-string-key-
  - MediaNode-setsharedplugindatanamespace-string-key-
  - MediaNode-getsharedplugindatakeysnamespace-string-
  - MediaNode-getdevresourcesasyncoptions-includechild
  - MediaNode-editdevresourceasynccurrenturl-string-ne
  - MediaNode-setdevresourcepreviewasyncurl-string-pre
  - MediaNode-maxwidth-number-null-minheight-number-nu
  - MediaNode-maxheight-number-null-relativetransform-
  - MediaNode-absolutetransform-transform-readonly-abs
  - MediaNode-visible-boolean-locked-boolean
  - MediaNode-stucknodes-scenenode-readonly
  - MediaNode-attachedconnectors-connectornode-readonl
  - MediaNode-inferredvariables-readonly-field-in-vari
  - MediaNode-resolvedvariablemodes-collectionid-strin
  - MediaNode-clearexplicitvariablemodeforcollectionco
  - MediaNode-exportsettings-readonlyarray-exportasync
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
