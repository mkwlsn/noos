---
title: >-
  boundVariables?: { [field in VariableBindableTextField]?: VariableAlias} +
  setBoundVariable(field: VariableBindableTextField, variable: Variable | null):
  void
slug: TextStyle-boundvariables-field-in-variablebindable
source_file: plugin-api-TextStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/TextStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 5728ced5298d6757
token_count: 127
chunk_title: >-
  boundVariables?: { [field in VariableBindableTextField]?: VariableAlias} +
  setBoundVariable(field: VariableBindableTextField, variable: Variable | null):
  void
chunk_slug: TextStyle-boundvariables-field-in-variablebindable
chunk_index: 0
chunk_of_total: 13
parent_file: TextStyle.md
parent_slug: TextStyle
char_count: 444
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - TextStyle-id-string-readonly
  - TextStyle-getstyleconsumersasync-promise-consumers
  - TextStyle-getplugindatakey-string-string
  - TextStyle-setplugindatakey-string-value-string-voi
  - TextStyle-getplugindatakeys-string
  - TextStyle-getsharedplugindatanamespace-string-key-
  - TextStyle-setsharedplugindatanamespace-string-key-
  - TextStyle-getsharedplugindatakeysnamespace-string-
  - TextStyle-description-string-descriptionmarkdown-s
  - TextStyle-documentationlinks-readonlyarray-remote-
  - TextStyle-key-string-readonly
  - TextStyle-getpublishstatusasync-promise
merged_titles:
  - 'boundVariables?: { [field in VariableBindableTextField]?: VariableAlias}'
  - >-
    setBoundVariable(field: VariableBindableTextField, variable: Variable |
    null): void
compiler: noos-figma
---

The variables bound to a particular field on this text style.

Binds the provided `field` on this node to the given variable. Please see the [Working with Variables](/plugin-docs/working-with-variables/)
 guide for how to get and set variable bindings.

If `null` is provided as the variable, the given `field` will be unbound from any variables.

[View more →](/plugin-docs/api/properties/TextStyle-setboundvariable/)

## Base style properties
