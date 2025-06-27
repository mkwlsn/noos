---
title: >-
  boundVariables?: { readonly [field in VariableBindableNodeField]?:
  VariableAlias} & { readonly [field in VariableBindableTextField]?:
  VariableAlias[]} & { fills: VariableAlias[]; strokes: VariableAlias[];
  effects: VariableAlias[]; layoutGrids: VariableAlias[]; componentProperties: {
  [propertyName: string]: VariableAlias }; textRangeFills: VariableAlias[] }
  [readonly] + setBoundVariable(field: VariableBindableNodeField |
  VariableBindableTextField, variable: Variable | null): void
slug: SliceNode-boundvariables-readonly-field-in-variabl
source_file: plugin-api-SliceNode.html
source_url: 'https://www.figma.com/plugin-docs/api/SliceNode/'
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
chunk_slug: SliceNode-boundvariables-readonly-field-in-variabl
chunk_index: 21
chunk_of_total: 41
parent_file: SliceNode.md
parent_slug: SliceNode
char_count: 535
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - SliceNode-introduction
  - SliceNode-id-string-readonly
  - SliceNode-parent-basenode-childrenmixin-null-reado
  - SliceNode-name-string-removed-boolean-readonly
  - SliceNode-tostring-string
  - SliceNode-remove-void-setrelaunchdatadata-command-
  - SliceNode-getrelaunchdata-command-string-string-is
  - SliceNode-getcssasync-promise-key-string-string-
  - SliceNode-gettoplevelframe-framenode-undefined
  - SliceNode-getplugindatakey-string-string
  - SliceNode-setplugindatakey-string-value-string-voi
  - SliceNode-getplugindatakeys-string
  - SliceNode-getsharedplugindatanamespace-string-key-
  - SliceNode-setsharedplugindatanamespace-string-key-
  - SliceNode-getsharedplugindatakeysnamespace-string-
  - SliceNode-getdevresourcesasyncoptions-includechild
  - SliceNode-editdevresourceasynccurrenturl-string-ne
  - SliceNode-setdevresourcepreviewasyncurl-string-pre
  - SliceNode-locked-boolean
  - SliceNode-stucknodes-scenenode-readonly
  - SliceNode-attachedconnectors-connectornode-readonl
  - SliceNode-inferredvariables-readonly-field-in-vari
  - SliceNode-resolvedvariablemodes-collectionid-strin
  - SliceNode-clearexplicitvariablemodeforcollectionco
  - SliceNode-x-number-y-number
  - SliceNode-minwidth-number-null-maxwidth-number-nul
  - SliceNode-minheight-number-null-maxheight-number-n
  - SliceNode-relativetransform-transform
  - SliceNode-absolutetransform-transform-readonly-abs
  - SliceNode-layoutalign-min-center-max-stretch-inher
  - SliceNode-layoutgrow-number
  - SliceNode-layoutpositioning-auto-absolute
  - SliceNode-absoluterenderbounds-rect-null-readonly
  - SliceNode-constrainproportions-boolean-rotation-nu
  - SliceNode-layoutsizinghorizontal-fixed-hug-fill
  - SliceNode-layoutsizingvertical-fixed-hug-fill
  - SliceNode-resizewidth-number-height-number-void
  - SliceNode-resizewithoutconstraintswidth-number-hei
  - SliceNode-rescalescale-number-void-exportsettings-
  - SliceNode-exportasyncsettings-exportsettingsrest-p
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
