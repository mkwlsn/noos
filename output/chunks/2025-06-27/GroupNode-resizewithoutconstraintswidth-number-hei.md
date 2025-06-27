---
title: 'resizeWithoutConstraints(width: number, height: number): void'
slug: GroupNode-resizewithoutconstraintswidth-number-hei
source_file: plugin-api-GroupNode.html
source_url: 'https://www.figma.com/plugin-docs/api/GroupNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 7521565a0ba8cda3
token_count: 79
chunk_title: 'resizeWithoutConstraints(width: number, height: number): void'
chunk_slug: GroupNode-resizewithoutconstraintswidth-number-hei
chunk_index: 43
chunk_of_total: 55
parent_file: GroupNode.md
parent_slug: GroupNode
char_count: 274
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

Resizes the node. Children of the node are never resized, even if those children have constraints. If the parent has auto-layout, causes the parent to be resized (this constraint cannot be ignored).

[View more →](/plugin-docs/api/properties/nodes-resizewithoutconstraints/)
