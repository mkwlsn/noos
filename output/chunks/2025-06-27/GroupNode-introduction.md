---
title: Introduction
slug: GroupNode-introduction
source_file: plugin-api-GroupNode.html
source_url: 'https://www.figma.com/plugin-docs/api/GroupNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7997fbd7e55b5de7
token_count: 506
chunk_title: Introduction
chunk_slug: GroupNode-introduction
chunk_index: 0
chunk_of_total: 55
parent_file: GroupNode.md
parent_slug: GroupNode
char_count: 1771
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - GroupNode-type-group-readonly-clone-groupnode
  - GroupNode-id-string-readonly
  - GroupNode-parent-basenode-childrenmixin-null-reado
  - GroupNode-name-string-removed-boolean-readonly
  - GroupNode-tostring-string
  - GroupNode-remove-void-setrelaunchdatadata-command-
  - GroupNode-getrelaunchdata-command-string-string-is
  - GroupNode-getcssasync-promise-key-string-string-
  - GroupNode-gettoplevelframe-framenode-undefined
  - GroupNode-getplugindatakey-string-string
  - GroupNode-setplugindatakey-string-value-string-voi
  - GroupNode-getplugindatakeys-string
  - GroupNode-getsharedplugindatanamespace-string-key-
  - GroupNode-setsharedplugindatanamespace-string-key-
  - GroupNode-getsharedplugindatakeysnamespace-string-
  - GroupNode-getdevresourcesasyncoptions-includechild
  - GroupNode-editdevresourceasynccurrenturl-string-ne
  - GroupNode-setdevresourcepreviewasyncurl-string-pre
  - GroupNode-appendchildchild-scenenode-void
  - GroupNode-insertchildindex-number-child-scenenode-
  - GroupNode-findchildrencallback-node-scenenode-bool
  - GroupNode-findchildcallback-node-scenenode-boolean
  - GroupNode-findallcallback-node-scenenode-boolean-s
  - GroupNode-findonecallback-node-scenenode-boolean-s
  - GroupNode-findallwithcriteriacriteria-findallcrite
  - GroupNode-findwidgetnodesbywidgetidwidgetid-string
  - GroupNode-backgroundstyleid-string-opacity-number
  - GroupNode-blendmode-blendmode-ismask-boolean
  - GroupNode-masktype-masktype
  - GroupNode-effects-readonlyarray-effectstyleid-stri
  - GroupNode-seteffectstyleidasyncstyleid-string-prom
  - GroupNode-maxwidth-number-null-minheight-number-nu
  - GroupNode-maxheight-number-null-relativetransform-
  - GroupNode-absolutetransform-transform-readonly-abs
  - GroupNode-layoutalign-min-center-max-stretch-inher
  - GroupNode-layoutgrow-number
  - GroupNode-layoutpositioning-auto-absolute
  - GroupNode-absoluterenderbounds-rect-null-readonly
  - GroupNode-constrainproportions-boolean-rotation-nu
  - GroupNode-layoutsizinghorizontal-fixed-hug-fill
  - GroupNode-layoutsizingvertical-fixed-hug-fill
  - GroupNode-resizewidth-number-height-number-void
  - GroupNode-resizewithoutconstraintswidth-number-hei
  - GroupNode-rescalescale-number-void-targetaspectrat
  - GroupNode-exportsettings-readonlyarray-exportasync
  - GroupNode-reactions-readonlyarray
  - GroupNode-setreactionsasyncreactions-array-promise
  - GroupNode-locked-boolean
  - GroupNode-stucknodes-scenenode-readonly
  - GroupNode-attachedconnectors-connectornode-readonl
  - GroupNode-boundvariables-readonly-field-in-variabl
  - GroupNode-inferredvariables-readonly-field-in-vari
  - GroupNode-resolvedvariablemodes-collectionid-strin
  - GroupNode-clearexplicitvariablemodeforcollectionco
compiler: noos-figma
---

# GroupNode

The group node is a container used to semantically group related nodes. You can think of them as a folder in the layers panel. It is different from [`FrameNode`](/plugin-docs/api/FrameNode/)
, which defines layout and is closer to a `` in HTML. Groups can be created by grouping existing nodes using [`figma.group`](/plugin-docs/api/properties/figma-group/)
.

Groups in Figma are always positioned and sized to fit their content. As such, while you can move or resize a group, you should also expect that a group's position and size will change if you change its content. See the [`relativeTransform`](/plugin-docs/api/properties/nodes-relativetransform/)
 page for more details.

In Figma, groups must always have children. A group with no children will delete itself.

⚠️ It is possible for a user to convert a frame into a group via the UI, and vice-versa. If you hold onto a node in a long-running plugin, you can't assume its `type` never changes.

## Applying constraints to groups

When using the Figma UI, you can [change the constraints](https://help.figma.com/hc/en-us/articles/360039957734-Apply-Constraints-to-define-how-layers-resize)
 of a group to control how the group and its children respond when the user resizes them. Under the hood, Figma applies the provided constraints to each child of the group.

To change the constraints of a group via the API, you must iterate through the group's children and apply [`Constraints`](/plugin-docs/api/Constraints/)
 to each child's `constraints` property:

Applying STRETCH constraints to all children of a group```
const groupNode = figma.currentPage.selection[0]groupNode.children.forEach((child) => { child.constraints = { horizontal: 'STRETCH', vertical: 'STRETCH' }})
```

## Group properties
