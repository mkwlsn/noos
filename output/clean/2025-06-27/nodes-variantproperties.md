---
title: variantProperties
slug: nodes-variantproperties
source_file: plugin-api-nodes-variantproperties.html
source_url: https://www.figma.com/plugin-docs/api/nodes-variantproperties/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: fbbcf5054f2af5e1
token_count: 362
---
# variantProperties

DEPRECATED: Use [`componentProperties`](/plugin-docs/api/InstanceNode/#componentproperties)
 instead.

Variant properties and values for this node. Is `null` for nodes that are not variants.

 Supported on:

- ComponentNode
- InstanceNode

## Signature

### variantProperties: { [property: string]: string } | null [readonly]

## Remarks

[Variant properties](https://help.figma.com/hc/en-us/articles/5579474826519#h_01G2Q5GF4407ZTN7K8FHM2JREZ)
 define attributes of variants in a component set. For example, a component set for a button might have variant properties such as `size` and `state`, with different possible values for each property (e.g. `default`, `hover`, `pressed`, and `disabled` for the `state` property).

Variant-related properties and methods for component sets, components, and instances```
componentSet.variantGroupProperties// Output{ Size: { values: ['Small', 'Medium', 'Large'] }, State: { values: ['Default', 'Hover', 'Pressed', 'Disabled'] }}// One of the variants / component nodes in the component setcomponentSet.children[1].variantProperties// Output{ Size: 'Small', State: 'Hover' }// variantProperties also works on an instances of variantsinstance.variantProperties// Output{ Size: 'Medium', State: 'Default' }// Use setProperties on an instance of a variant to configure itinstance.setProperties({ Size: 'Large' })instance.variantProperties// Output{ Size: 'Large', State: 'Default' }
```