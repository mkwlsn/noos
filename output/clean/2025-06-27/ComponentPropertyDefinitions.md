---
title: ComponentPropertyDefinitions
slug: ComponentPropertyDefinitions
source_file: plugin-api-ComponentPropertyDefinitions.html
source_url: https://www.figma.com/plugin-docs/api/ComponentPropertyDefinitions/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: e44dbcd7705e8f41
token_count: 306
---
# ComponentPropertyDefinitions

```
type ComponentPropertyDefinitions = { [propertyName: string]: { type: ComponentPropertyType defaultValue: string | boolean variantOptions?: string[] preferredValues?: InstanceSwapPreferredValue[] readonly boundVariables?: { [field in VariableBindableComponentPropertyDefinitionField]?: VariableAlias } }}type VariableBindableComponentPropertyDefinitionField = "defaultValue"
```A map of component property definitions that exist on a component or component set node. Each definition in the map must have a type matching [`ComponentPropertyType`](/plugin-docs/api/ComponentPropertyType/)
. `defaultValue` represents the value that instances will initially have for that property. `'VARIANT'` properties also have `variantOptions`, a list of possible values for that variant property. `'INSTANCE_SWAP'` properties may optionally have a list of [`InstanceSwapPreferredValue`](/plugin-docs/api/InstanceSwapPreferredValue/)
s. A component property can optionally be bound to a [`Variable`](/plugin-docs/api/Variable/)
, in which case the `boundVariables` structure will be populated with a [`VariableAlias`](/plugin-docs/api/VariableAlias/)
 describing the variable controlling this property.