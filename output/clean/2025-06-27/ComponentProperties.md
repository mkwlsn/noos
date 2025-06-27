---
title: ComponentProperties
slug: ComponentProperties
source_file: plugin-api-ComponentProperties.html
source_url: https://www.figma.com/plugin-docs/api/ComponentProperties/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: adca7fe01aa5b74e
token_count: 196
---
# ComponentProperties

```
type ComponentProperties = { [propertyName: string]: { type: ComponentPropertyType value: string | boolean preferredValues?: InstanceSwapPreferredValue[] readonly boundVariables?: { [field in VariableBindableComponentPropertyField]?: VariableAlias } }}type VariableBindableComponentPropertyField = "value"
```A map of component properties that exist on an instance node. Each property in the map must have a type matching [`ComponentPropertyType`](/plugin-docs/api/ComponentPropertyType/)
. A component property can optionally be bound to a [`Variable`](/plugin-docs/api/Variable/)
, in which case the `boundVariables` structure will be populated with a [`VariableAlias`](/plugin-docs/api/VariableAlias/)
 describing the variable controlling this property.