---
title: >-
  setBoundVariableForPaint(paint: SolidPaint, field: VariableBindablePaintField,
  variable: Variable | null): SolidPaint + setBoundVariableForEffect(effect:
  Effect, field: VariableBindableEffectField, variable: Variable | null): Effect
slug: figma-variables-setboundvariableforpaintpaint-solidpaint
source_file: plugin-api-figma-variables.html
source_url: 'https://www.figma.com/plugin-docs/api/figma-variables/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 4bc2ee3b67a87a9b
token_count: 102
chunk_title: >-
  setBoundVariableForPaint(paint: SolidPaint, field: VariableBindablePaintField,
  variable: Variable | null): SolidPaint + setBoundVariableForEffect(effect:
  Effect, field: VariableBindableEffectField, variable: Variable | null): Effect
chunk_slug: figma-variables-setboundvariableforpaintpaint-solidpaint
chunk_index: 8
chunk_of_total: 10
parent_file: figma-variables.md
parent_slug: figma-variables
char_count: 354
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - figma-variables-introduction
  - figma-variables-getvariablebyidasyncid-string-promise-ge
  - figma-variables-getvariablecollectionbyidasyncid-string-
  - figma-variables-getvariablecollectionbyidid-string-varia
  - figma-variables-getlocalvariablesasynctype-variableresol
  - figma-variables-getlocalvariablecollectionsasync-promise
  - figma-variables-createvariablename-string-collection-var
  - figma-variables-createvariablealiasvariable-variable-var
  - figma-variables-setboundvariableforlayoutgridlayoutgrid-
merged_titles:
  - >-
    setBoundVariableForPaint(paint: SolidPaint, field:
    VariableBindablePaintField, variable: Variable | null): SolidPaint
  - >-
    setBoundVariableForEffect(effect: Effect, field:
    VariableBindableEffectField, variable: Variable | null): Effect
compiler: noos-figma
---

Helper function to bind a variable to a [`SolidPaint`](/plugin-docs/api/Paint/)
.

If `null` is provided as the `variable`, the given `field` will be unbound from any variables.

Helper function to bind a variable to an [`Effect`](/plugin-docs/api/Effect/)
.

If `null` is provided as the `variable`, the given `field` will be unbound from any variables.
