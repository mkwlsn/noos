---
title: "SET_VARIABLE" action
slug: Action-setvariable-action
source_file: plugin-api-Action.html
source_url: https://www.figma.com/plugin-docs/api/Action/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 5159277729292d96
token_count: 709
chunk_title: "SET_VARIABLE" action
chunk_slug: Action-setvariable-action
chunk_index: 2
chunk_of_total: 6
parent_file: Action.md
parent_slug: Action
char_count: 2481
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["Action-introduction", "Action-url-action-updatemediaruntime-action", "Action-setvariablemode-action", "Action-conditional-action", "Action-node-action"]
---

Variables are stored values that represent design attributes or saved states. They can be string, number, color, or boolean value types. This action can set and modify the values of variables in prototypes.

- `variableId`: string: The variable ID of an existing variable that an action will modify.
- `variableValue`: `VariableData`: The value we want to set variableId during the prototyping. The value can be a boolean, float, string, color, variable or expression.

Important data types:

- `VariableDataType`: Defines the types of data a VariableData object can hold

```
type VariableDataType = 'BOOLEAN' | 'FLOAT' | 'STRING' | 'VARIABLE_ALIAS' | 'COLOR' | 'EXPRESSION'
```- `VariableResolvedDataType`: Defines the types of data a VariableData object can eventually equal

```
type VariableResolvedDataType = 'BOOLEAN' | 'COLOR' | 'FLOAT' | 'STRING'
```- `ExpressionFunction`: Defines the list of operators available to use in an Expression

```
type ExpressionFunction = | 'ADDITION' | 'SUBTRACTION' | 'MULTIPLICATION' | 'DIVISION' | 'EQUALS' | 'NOT_EQUAL' | 'LESS_THAN' | 'LESS_THAN_OR_EQUAL' | 'GREATER_THAN' | 'GREATER_THAN_OR_EQUAL' | 'AND' | 'OR' | 'VAR_MODE_LOOKUP' | 'NEGATE' | 'NOT'
```- `VariableData`: Defines an object which contains a value, VariableDataType and VariableResolvedDataType.

```
interface VariableData = { type?: VariableDataType resolvedType?: VariableResolvedDataType value?: number | boolean | string | RGB | RGBA | VariableAlias | Expression}
```- `Expression`: Defines the Expression object, which contains a list of `VariableData` objects strung together by operators (`ExpressionFunction`). This is essentially just a mathematical statement.

```
interface Expression { expressionFunction: ExpressionFunction expressionArguments: VariableData[]}
```Note that the `Expression` and `VariableData` objects can be recursive

Example of creating an expression with strings```
// $StringVariable + " Figma"const stringExpression = { expressionArguments: [ { resolvedType: 'STRING', type: 'VARIABLE_ALIAS', value: { type: 'VARIABLE_ALIAS', id: "$StringVariableID", }, }, { resolvedType: 'STRING', type: 'STRING', value: " Figma", } ], expressionFunction: 'ADDITION',}
```Example of creating a Set Variable action using the expression from above```
const value = { resolvedType: 'STRING', type: 'EXPRESSION', value: stringExpression}const setStringVariableAction = { type: 'SET_VARIABLE', variableId: "$StringVariableID", variableValue: value,}
```