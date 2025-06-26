---
title: reactions
slug: nodes-reactions
source_file: plugin-api-nodes-reactions.html
source_url: https://www.figma.com/plugin-docs/api/nodes-reactions/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 17bd6730cdc6b37c
token_count: 1111
---
# reactions

List of [Reactions](/plugin-docs/api/Reaction/) on this node, which includes both the method of interaction with this node in a prototype, and the behavior of that interaction. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setReactionsAsync` to update the value.

 Supported on:

- BooleanOperationNode
- ComponentNode
- EllipseNode
- FrameNode
- GroupNode
- HighlightNode
- InstanceNode
- LineNode
- PolygonNode
- RectangleNode
- StampNode
- StarNode
- TextNode
- TextPathNode
- TransformGroupNode
- VectorNode
- WashiTapeNode

## Signature

### reactions: ReadonlyArray

## Remarks

[Prototyping](https://help.figma.com/hc/en-us/articles/360040314193-Guide-to-prototyping-in-Figma) in Figma lets users create connections between nodes that consist of a trigger (click, hover, etc...) and a corresponding list of actions, such as navigating to another frame or setting a variable. The `reactions` property lets you read and modify prototyping reactions on the node.

Changing the transition duration in a prototyping action```
const node = figma.currentPage.selection[0]console.log(node.reactions)/*Output:[{ action: { type: 'NODE', destinationId: '4:1539', navigation: 'NAVIGATE', transition: { type:'SMART_ANIMATE', easing: { type: 'EASE_OUT' }, duration: 0.20000000298023224 }, preserveScrollPosition: false }, actions: [{ type: 'NODE', destinationId: '4:1539', navigation: 'NAVIGATE', transition: { type:'SMART_ANIMATE', easing: { type: 'EASE_OUT' }, duration: 0.20000000298023224 }, preserveScrollPosition: false }], trigger: { type: 'ON_CLICK' }}]*/// See clone() implementation from the Editing Properties pageconst newReactions = clone(node.reactions)newReactions[0].actions[0].transition.duration = 0.5await node.setReactionsAsync(newReactions)
```It is also possible to add Advanced Prototyping action types through the Plugin API: [Set Variable](https://help.figma.com/hc/en-us/articles/14506587589399-Use-variables-in-prototypes) and [Conditional](https://help.figma.com/hc/en-us/articles/15253220891799-Multiple-actions-and-conditionals).
Moreover, Reactions now include the ability to execute multiple actions by updating the `actions` field on a `Reaction`.

Create a button with a Reaction object that updates the visibility of another Frame.```
(async () => { // Create collection with "show" variable inside const collection = figma.variables.createVariableCollection('prototyping') const modeId = collection.modes[0].modeId const showVariable = figma.variables.createVariable( 'show', collection, 'BOOLEAN' ) // Initialize "show" variable to true showVariable.setValueForMode(modeId, true) const parentFrame = figma.createFrame() parentFrame.resize(350, 200) // Green "Click me" button const toggleButton = figma.createFrame() parentFrame.appendChild(toggleButton) toggleButton.x = 50 toggleButton.y = 50 toggleButton.layoutMode = 'HORIZONTAL' toggleButton.layoutSizingHorizontal = 'HUG' toggleButton.layoutSizingVertical = 'HUG' toggleButton.fills = [{ type: 'SOLID', color: { r: 0, g: 1, b: 0 } }] const text = figma.createText() await figma.loadFontAsync(text.fontName) text.characters = 'Click me' toggleButton.appendChild(text) // Red square const frame = figma.createFrame() parentFrame.appendChild(frame) frame.x = 200 frame.y = 50 frame.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }] // The "show" variable will now control the visibility of the frame frame.setBoundVariable('visible', showVariable) await toggleButton.setReactionsAsync([ { trigger: { type: 'ON_CLICK' }, actions: [ { type: 'CONDITIONAL', conditionalBlocks: [ { condition: { // Conditional: if "show" variable == true type: 'EXPRESSION', resolvedType: 'BOOLEAN', value: { expressionArguments: [ { type: 'VARIABLE_ALIAS', resolvedType: 'BOOLEAN', value: { type: 'VARIABLE_ALIAS', id: showVariable.id } }, { type: 'BOOLEAN', resolvedType: 'BOOLEAN', value: true } ], expressionFunction: 'EQUALS' } }, actions: [ // then set "show" variable to false { type: 'SET_VARIABLE', variableId: showVariable.id, variableValue: { resolvedType: 'BOOLEAN', type: 'BOOLEAN', value: false } } ] }, { actions: [ // else set "show" variable to true { type: 'SET_VARIABLE', variableId: showVariable.id, variableValue: { resolvedType: 'BOOLEAN', type: 'BOOLEAN', value: true } } ] }] }] }])})()
```