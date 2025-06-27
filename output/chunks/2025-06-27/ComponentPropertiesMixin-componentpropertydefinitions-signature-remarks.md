---
title: Signature + Remarks
slug: ComponentPropertiesMixin-componentpropertydefinitions-signature-remarks
source_file: plugin-api-ComponentPropertiesMixin-componentpropertydefinitions.html
source_url: >-
  https://www.figma.com/plugin-docs/api/ComponentPropertiesMixin-componentpropertydefinitions/
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 71d4f9f3ba21a687
token_count: 861
chunk_title: Signature + Remarks
chunk_slug: ComponentPropertiesMixin-componentpropertydefinitions-signature-remarks
chunk_index: 1
chunk_of_total: 2
parent_file: ComponentPropertiesMixin-componentpropertydefinitions.md
parent_slug: ComponentPropertiesMixin-componentpropertydefinitions
char_count: 3012
heading_level: h2
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ComponentPropertiesMixin-componentpropertydefinitions-introduction
merged_titles:
  - Signature
  - Remarks
compiler: noos-figma
---

### componentPropertyDefinitions: ComponentPropertyDefinitions [readonly]

[Component properties-related properties](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-component-properties)
 define parts of the component people can change by tying them to specific design properties. You can create component properties for any main component or component set, and apply them to nested layers of the component or variant.

Component properties-related properties and methods for component sets, components, and instances```
componentSet.componentPropertyDefinitions// Output{ Size: { type: 'VARIANT', defaultValue: 'Small', variantOptions: ['Small', 'Medium', 'Large'], }, IconVisible#0:0: { type: 'BOOLEAN', defaultValue: false, }, ButtonText#0:1: { type: 'TEXT', defaultValue: 'submit', }, IconInstance#0:2: { type: 'INSTANCE_SWAP', defaultValue: '1:1', preferredValues: [ {type: 'COMPONENT', key: 'ckey1'}, {type: 'COMPONENT_SET', key: 'sgkey1'} ], },}// componentProperties on an instanceinstance.componentProperties// Output{ Size: { type: 'VARIANT', value: 'Medium', }, IconVisible#0:0: { type: 'BOOLEAN', value: false, }, ButtonText#0:1: { type: 'TEXT', value: 'cancel', }, IconInstance#0:2: { type: 'INSTANCE_SWAP', defaultValue: '1:1', preferredValues: [ {type: 'COMPONENT', key: 'ckey1'}, {type: 'COMPONENT_SET', key: 'sgkey1'} ], },}// component property definitions can be created, edited, and deletedcomponent.addComponentProperty("ButtonIcon", "INSTANCE_SWAP", "2:22")// returns "ButtonIcon#4:3"component.editComponentProperty( "ButtonIcon#4:3", {name: "PrimaryButtonIcon", defaultValue: "1:100"})// returns "PrimaryButtonIcon#5:5"component.deleteComponentProperty("PrimaryButtonIcon#5:5")// componentPropertyDefinitions and componentProperties work similarly for// main components and their instances but will never have 'VARIANT'// properties.component.componentPropertyDefinitions// Output{ ImageVisible#0:0: { type: 'BOOLEAN', defaultValue: true, }, Icon#0:1: { type: 'INSTANCE_SWAP', defaultValue: '7:23', },}instance.componentProperties// Output{ ImageVisible#0:0: { type: 'BOOLEAN', value: true, }, Icon#0:1: { type: 'INSTANCE_SWAP', value: '1:24', },}// component properties can be applied to node properties of nested layerscomponent.children[0].children[0].componentPropertyReferences = { 'visible': 'IconVisible#0:0'}component.children[0].children[0].visible// Outputfalse // gets value from component property definition// Use setProperties on an instance to configure itinstance.setProperties({ Size: 'Large', 'ButtonText#0:1': 'login' })instance.componentProperties// Output{ Size: { type: 'VARIANT', value: 'Large', }, IconVisible#0:0: { type: 'BOOLEAN', value: false, }, ButtonText#0:1: { type: 'TEXT', value: 'login', },}instance.setProperties({ 'IconVisible#0:0': true })instance.componentProperties// Output{ Size: { type: 'VARIANT', value: 'Large', }, IconVisible#0:0: { type: 'BOOLEAN', value: true, }, ButtonText#0:1: { type: 'TEXT', value: 'login', },}
```
