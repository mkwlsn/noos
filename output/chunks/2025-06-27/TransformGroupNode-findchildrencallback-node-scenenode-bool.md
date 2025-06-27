---
title: 'findChildren(callback?: (node: SceneNode) => boolean): SceneNode[]'
slug: TransformGroupNode-findchildrencallback-node-scenenode-bool
source_file: plugin-api-TransformGroupNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TransformGroupNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 2989c886ef218233
token_count: 123
chunk_title: 'findChildren(callback?: (node: SceneNode) => boolean): SceneNode[]'
chunk_slug: TransformGroupNode-findchildrencallback-node-scenenode-bool
chunk_index: 21
chunk_of_total: 55
parent_file: TransformGroupNode.md
parent_slug: TransformGroupNode
char_count: 428
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - TransformGroupNode-introduction
  - TransformGroupNode-type-transformgroup-readonly-clone-trans
  - TransformGroupNode-id-string-readonly
  - TransformGroupNode-parent-basenode-childrenmixin-null-reado
  - TransformGroupNode-name-string-removed-boolean-readonly
  - TransformGroupNode-tostring-string
  - TransformGroupNode-remove-void-setrelaunchdatadata-command-
  - TransformGroupNode-getrelaunchdata-command-string-string-is
  - TransformGroupNode-getcssasync-promise-key-string-string-
  - TransformGroupNode-gettoplevelframe-framenode-undefined
  - TransformGroupNode-getplugindatakey-string-string
  - TransformGroupNode-setplugindatakey-string-value-string-voi
  - TransformGroupNode-getplugindatakeys-string
  - TransformGroupNode-getsharedplugindatanamespace-string-key-
  - TransformGroupNode-setsharedplugindatanamespace-string-key-
  - TransformGroupNode-getsharedplugindatakeysnamespace-string-
  - TransformGroupNode-getdevresourcesasyncoptions-includechild
  - TransformGroupNode-editdevresourceasynccurrenturl-string-ne
  - TransformGroupNode-setdevresourcepreviewasyncurl-string-pre
  - TransformGroupNode-appendchildchild-scenenode-void
  - TransformGroupNode-insertchildindex-number-child-scenenode-
  - TransformGroupNode-findchildcallback-node-scenenode-boolean
  - TransformGroupNode-findallcallback-node-scenenode-boolean-s
  - TransformGroupNode-findonecallback-node-scenenode-boolean-s
  - TransformGroupNode-findallwithcriteriacriteria-findallcrite
  - TransformGroupNode-findwidgetnodesbywidgetidwidgetid-string
  - TransformGroupNode-backgroundstyleid-string-opacity-number
  - TransformGroupNode-blendmode-blendmode-ismask-boolean
  - TransformGroupNode-masktype-masktype
  - TransformGroupNode-effects-readonlyarray-effectstyleid-stri
  - TransformGroupNode-seteffectstyleidasyncstyleid-string-prom
  - TransformGroupNode-maxwidth-number-null-minheight-number-nu
  - TransformGroupNode-maxheight-number-null-relativetransform-
  - TransformGroupNode-absolutetransform-transform-readonly-abs
  - TransformGroupNode-layoutalign-min-center-max-stretch-inher
  - TransformGroupNode-layoutgrow-number
  - TransformGroupNode-layoutpositioning-auto-absolute
  - TransformGroupNode-absoluterenderbounds-rect-null-readonly
  - TransformGroupNode-constrainproportions-boolean-rotation-nu
  - TransformGroupNode-layoutsizinghorizontal-fixed-hug-fill
  - TransformGroupNode-layoutsizingvertical-fixed-hug-fill
  - TransformGroupNode-resizewidth-number-height-number-void
  - TransformGroupNode-resizewithoutconstraintswidth-number-hei
  - TransformGroupNode-rescalescale-number-void-targetaspectrat
  - TransformGroupNode-exportsettings-readonlyarray-exportasync
  - TransformGroupNode-reactions-readonlyarray
  - TransformGroupNode-setreactionsasyncreactions-array-promise
  - TransformGroupNode-locked-boolean
  - TransformGroupNode-stucknodes-scenenode-readonly
  - TransformGroupNode-attachedconnectors-connectornode-readonl
  - TransformGroupNode-boundvariables-readonly-field-in-variabl
  - TransformGroupNode-inferredvariables-readonly-field-in-vari
  - TransformGroupNode-resolvedvariablemodes-collectionid-strin
  - TransformGroupNode-clearexplicitvariablemodeforcollectionco
compiler: noos-figma
---

Searches the immediate children of this node (i.e. not including the children's children). Returns all nodes for which `callback` returns true.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-findchildren/)
