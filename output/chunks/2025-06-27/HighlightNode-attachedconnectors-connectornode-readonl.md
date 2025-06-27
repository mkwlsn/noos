---
title: >-
  attachedConnectors: ConnectorNode[] [readonly] + componentPropertyReferences:
  { [nodeProperty in 'visible' | 'characters' | 'mainComponent']?: string} |
  null
slug: HighlightNode-attachedconnectors-connectornode-readonl
source_file: plugin-api-HighlightNode.html
source_url: 'https://www.figma.com/plugin-docs/api/HighlightNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: b4338580c95f8b65
token_count: 127
chunk_title: >-
  attachedConnectors: ConnectorNode[] [readonly] + componentPropertyReferences:
  { [nodeProperty in 'visible' | 'characters' | 'mainComponent']?: string} |
  null
chunk_slug: HighlightNode-attachedconnectors-connectornode-readonl
chunk_index: 21
chunk_of_total: 57
parent_file: HighlightNode.md
parent_slug: HighlightNode
char_count: 444
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - HighlightNode-introduction
  - HighlightNode-vectornetwork-vectornetwork
  - HighlightNode-handlemirroring-handlemirroring-figmamix
  - HighlightNode-parent-basenode-childrenmixin-null-reado
  - HighlightNode-name-string-removed-boolean-readonly
  - HighlightNode-tostring-string
  - HighlightNode-remove-void-setrelaunchdatadata-command-
  - HighlightNode-getrelaunchdata-command-string-string-is
  - HighlightNode-getcssasync-promise-key-string-string-
  - HighlightNode-gettoplevelframe-framenode-undefined
  - HighlightNode-getplugindatakey-string-string
  - HighlightNode-setplugindatakey-string-value-string-voi
  - HighlightNode-getplugindatakeys-string
  - HighlightNode-getsharedplugindatanamespace-string-key-
  - HighlightNode-setsharedplugindatanamespace-string-key-
  - HighlightNode-getsharedplugindatakeysnamespace-string-
  - HighlightNode-getdevresourcesasyncoptions-includechild
  - HighlightNode-editdevresourceasynccurrenturl-string-ne
  - HighlightNode-setdevresourcepreviewasyncurl-string-pre
  - HighlightNode-locked-boolean
  - HighlightNode-stucknodes-scenenode-readonly
  - HighlightNode-boundvariables-readonly-field-in-variabl
  - HighlightNode-inferredvariables-readonly-field-in-vari
  - HighlightNode-resolvedvariablemodes-collectionid-strin
  - HighlightNode-clearexplicitvariablemodeforcollectionco
  - HighlightNode-opacity-number-blendmode-blendmode
  - HighlightNode-ismask-boolean-masktype-masktype
  - HighlightNode-effects-readonlyarray-effectstyleid-stri
  - HighlightNode-seteffectstyleidasyncstyleid-string-prom
  - HighlightNode-cornersmoothing-number-fills-readonlyarr
  - HighlightNode-fillstyleid-string-figmamixed
  - HighlightNode-setfillstyleidasyncstyleid-string-promis
  - HighlightNode-strokestyleid-string
  - HighlightNode-setstrokestyleidasyncstyleid-string-prom
  - HighlightNode-strokejoin-strokejoin-figmamixed-strokea
  - HighlightNode-dashpattern-readonlyarray-strokegeometry
  - HighlightNode-strokecap-strokecap-figmamixed-strokemit
  - HighlightNode-outlinestroke-vectornode-null
  - HighlightNode-fillgeometry-vectorpaths-readonly-x-numb
  - HighlightNode-maxwidth-number-null-minheight-number-nu
  - HighlightNode-maxheight-number-null-relativetransform-
  - HighlightNode-absolutetransform-transform-readonly-abs
  - HighlightNode-layoutalign-min-center-max-stretch-inher
  - HighlightNode-layoutgrow-number
  - HighlightNode-layoutpositioning-auto-absolute
  - HighlightNode-absoluterenderbounds-rect-null-readonly
  - HighlightNode-constrainproportions-boolean-rotation-nu
  - HighlightNode-layoutsizinghorizontal-fixed-hug-fill
  - HighlightNode-layoutsizingvertical-fixed-hug-fill
  - HighlightNode-resizewidth-number-height-number-void
  - HighlightNode-resizewithoutconstraintswidth-number-hei
  - HighlightNode-rescalescale-number-void-constraints-con
  - HighlightNode-targetaspectratio-vector-null-readonly
  - HighlightNode-exportsettings-readonlyarray-exportasync
  - HighlightNode-reactions-readonlyarray
  - HighlightNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'attachedConnectors: ConnectorNode[] [readonly]'
  - >-
    componentPropertyReferences: { [nodeProperty in 'visible' | 'characters' |
    'mainComponent']?: string} | null
compiler: noos-figma
---

An array of `ConnectorNode`s that are attached to a node.

All component properties that are attached on this node. A node can only have `componentPropertyReferences` if it is a component sublayer or an instance sublayer. It will be `null` otherwise. The value in the key-value pair refers to the component property name as returned by `componentPropertyDefinitions` on the containing component, component set or main component (for instances).
