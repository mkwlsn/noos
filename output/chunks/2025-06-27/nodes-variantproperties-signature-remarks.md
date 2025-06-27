---
title: Signature + Remarks
slug: nodes-variantproperties-signature-remarks
source_file: plugin-api-nodes-variantproperties.html
source_url: 'https://www.figma.com/plugin-docs/api/nodes-variantproperties/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: d852389f76b07c53
token_count: 331
chunk_title: Signature + Remarks
chunk_slug: nodes-variantproperties-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: nodes-variantproperties.md
parent_slug: nodes-variantproperties
char_count: 1158
heading_level: h2
chunk_type: tutorial
merge_type: merged
tags: []
sibling_chunks:
  - nodes-variantproperties-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### variantProperties: { [property: string]: string } | null [readonly]

[Variant properties](https://help.figma.com/hc/en-us/articles/5579474826519#h_01G2Q5GF4407ZTN7K8FHM2JREZ)
 define attributes of variants in a component set. For example, a component set for a button might have variant properties such as `size` and `state`, with different possible values for each property (e.g. `default`, `hover`, `pressed`, and `disabled` for the `state` property).

Variant-related properties and methods for component sets, components, and instances```
componentSet.variantGroupProperties// Output{ Size: { values: ['Small', 'Medium', 'Large'] }, State: { values: ['Default', 'Hover', 'Pressed', 'Disabled'] }}// One of the variants / component nodes in the component setcomponentSet.children[1].variantProperties// Output{ Size: 'Small', State: 'Hover' }// variantProperties also works on an instances of variantsinstance.variantProperties// Output{ Size: 'Medium', State: 'Default' }// Use setProperties on an instance of a variant to configure itinstance.setProperties({ Size: 'Large' })instance.variantProperties// Output{ Size: 'Large', State: 'Default' }
```
