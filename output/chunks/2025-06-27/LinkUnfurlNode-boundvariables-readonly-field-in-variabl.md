---
title: >-
  boundVariables?: { readonly [field in VariableBindableNodeField]?:
  VariableAlias} & { readonly [field in VariableBindableTextField]?:
  VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[];
  effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: {
  [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] }
  [readonly] + setBoundVariable(field: VariableBindableNodeField |
  VariableBindableTextField, variable: Variable | null): void
slug: LinkUnfurlNode-boundvariables-readonly-field-in-variabl
source_file: plugin-api-LinkUnfurlNode.html
source_url: 'https://www.figma.com/plugin-docs/api/LinkUnfurlNode/'
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
chunk_slug: LinkUnfurlNode-boundvariables-readonly-field-in-variabl
chunk_index: 24
chunk_of_total: 29
parent_file: LinkUnfurlNode.md
parent_slug: LinkUnfurlNode
char_count: 535
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - LinkUnfurlNode-introduction
  - LinkUnfurlNode-clone-linkunfurlnode-id-string-readonly
  - LinkUnfurlNode-parent-basenode-childrenmixin-null-reado
  - LinkUnfurlNode-name-string-removed-boolean-readonly
  - LinkUnfurlNode-tostring-string
  - LinkUnfurlNode-remove-void-setrelaunchdatadata-command-
  - LinkUnfurlNode-getrelaunchdata-command-string-string-is
  - LinkUnfurlNode-getcssasync-promise-key-string-string-
  - LinkUnfurlNode-gettoplevelframe-framenode-undefined
  - LinkUnfurlNode-getplugindatakey-string-string
  - LinkUnfurlNode-setplugindatakey-string-value-string-voi
  - LinkUnfurlNode-getplugindatakeys-string
  - LinkUnfurlNode-getsharedplugindatanamespace-string-key-
  - LinkUnfurlNode-setsharedplugindatanamespace-string-key-
  - LinkUnfurlNode-getsharedplugindatakeysnamespace-string-
  - LinkUnfurlNode-getdevresourcesasyncoptions-includechild
  - LinkUnfurlNode-editdevresourceasynccurrenturl-string-ne
  - LinkUnfurlNode-setdevresourcepreviewasyncurl-string-pre
  - LinkUnfurlNode-maxwidth-number-null-minheight-number-nu
  - LinkUnfurlNode-maxheight-number-null-relativetransform-
  - LinkUnfurlNode-absolutetransform-transform-readonly-abs
  - LinkUnfurlNode-visible-boolean-locked-boolean
  - LinkUnfurlNode-stucknodes-scenenode-readonly
  - LinkUnfurlNode-attachedconnectors-connectornode-readonl
  - LinkUnfurlNode-inferredvariables-readonly-field-in-vari
  - LinkUnfurlNode-resolvedvariablemodes-collectionid-strin
  - LinkUnfurlNode-clearexplicitvariablemodeforcollectionco
  - LinkUnfurlNode-exportsettings-readonlyarray-exportasync
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
