---
title: "CONDITIONAL" action
slug: Action-conditional-action
source_file: plugin-api-Action.html
source_url: https://www.figma.com/plugin-docs/api/Action/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: 6166ddbc05bcf6ac
token_count: 522
chunk_title: "CONDITIONAL" action
chunk_slug: Action-conditional-action
chunk_index: 4
chunk_of_total: 6
parent_file: Action.md
parent_slug: Action
char_count: 1825
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: ["Action-introduction", "Action-url-action-updatemediaruntime-action", "Action-setvariable-action", "Action-setvariablemode-action", "Action-node-action"]
---

This action checks if a condition is met before performing certain actions by using an if/else conditional statement.

- `conditionalBlocks`: `ConditionalBlock[]`: Either the if or else conditional blocks. The if block contains a condition to check. If that condition is met then it will run those list of actions, else it will run the actions in the else block.

Important data type:

```
type ConditionalBlock = { condition?: VariableData actions: Action[]}
```Example of creating a condition with multiple expressions```
// $NumberVariable > 10const numberEvaluationExpression = { expressionArguments: [ { resolvedType: "FLOAT", type: "VARIABLE_ALIAS", value: { type: 'VARIABLE_ALIAS', id: "$NumberVariableID", }, }, { resolvedType: "FLOAT", type: "FLOAT", value: 10 } ], expressionFunction: "GREATER_THAN"}// $NumberVariable > 10 && $BooleanVariableconst conditionData = { resolvedType: "BOOLEAN", type: "EXPRESSION", value: { expressionArguments: [ { resolvedType: "BOOLEAN", type: "EXPRESSION", value: numberEvaluationExpression }, { resolvedType: "BOOLEAN", type: "VARIABLE_ALIAS", value: { type: 'VARIABLE_ALIAS', id: "$BooleanVariableID", }, } ], expressionFunction: "AND", },}
```Example of creating ConditionalBlocks with the condition from above```
const navigateAction1 = { type: 'NODE', navigation: 'NAVIGATE', transition: null, destinationId: "$Frame1ID",}const navigateAction2 = { type: 'NODE', navigation: 'NAVIGATE', transition: null, destinationId: "$Frame2ID",}const conditionalIfBlock = { condition: conditionData, actions: [navigateAction1],}const conditionalElseBlock = { actions: [navigateAction2],}
```Example of creating a Conditional action with the ConditionalBlocks from above```
const conditionalAction = { type: 'CONDITIONAL', conditionalBlocks: [conditionalIfBlock, conditionalElseBlock],}
```