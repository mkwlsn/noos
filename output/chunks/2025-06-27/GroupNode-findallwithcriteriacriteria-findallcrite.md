---
title: >-
  findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } &
  SceneNode>
slug: GroupNode-findallwithcriteriacriteria-findallcrite
source_file: plugin-api-GroupNode.html
source_url: 'https://www.figma.com/plugin-docs/api/GroupNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ec79ab653eca34e1
token_count: 124
chunk_title: >-
  findAllWithCriteria(criteria: FindAllCriteria): Array<{ type: T[number] } &
  SceneNode>
chunk_slug: GroupNode-findallwithcriteriacriteria-findallcrite
chunk_index: 25
chunk_of_total: 55
parent_file: GroupNode.md
parent_slug: GroupNode
char_count: 432
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - GroupNode-introduction
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

Searches this entire subtree (this node's children, its children's children, etc). Returns all nodes that satisfy all of specified criteria.

If the manifest contains `"documentAccess": "dynamic-page"`, and the node is a [`PageNode`](/plugin-docs/api/PageNode/)
, you must first call [`loadAsync`](/plugin-docs/api/PageNode/#loadasync)
 to access this function.

[View more →](/plugin-docs/api/properties/nodes-findallwithcriteria/)
