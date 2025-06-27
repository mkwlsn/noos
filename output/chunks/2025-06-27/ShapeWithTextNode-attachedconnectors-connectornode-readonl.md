---
title: >-
  attachedConnectors: ConnectorNode[] [readonly] + componentPropertyReferences:
  { [nodeProperty in 'visible' | 'characters' | 'mainComponent']?: string} |
  null
slug: ShapeWithTextNode-attachedconnectors-connectornode-readonl
source_file: plugin-api-ShapeWithTextNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ShapeWithTextNode/'
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
chunk_slug: ShapeWithTextNode-attachedconnectors-connectornode-readonl
chunk_index: 33
chunk_of_total: 39
parent_file: ShapeWithTextNode.md
parent_slug: ShapeWithTextNode
char_count: 444
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - ShapeWithTextNode-introduction
  - ShapeWithTextNode-type-shapewithtext-readonly-shapetype-sq
  - ShapeWithTextNode-rotation-number
  - ShapeWithTextNode-clone-shapewithtextnode-fills-readonlyar
  - ShapeWithTextNode-fillstyleid-string-figmamixed
  - ShapeWithTextNode-setfillstyleidasyncstyleid-string-promis
  - ShapeWithTextNode-strokestyleid-string
  - ShapeWithTextNode-setstrokestyleidasyncstyleid-string-prom
  - ShapeWithTextNode-strokejoin-strokejoin-figmamixed-strokea
  - ShapeWithTextNode-dashpattern-readonlyarray-strokegeometry
  - ShapeWithTextNode-opacity-number-blendmode-blendmode
  - ShapeWithTextNode-id-string-readonly
  - ShapeWithTextNode-parent-basenode-childrenmixin-null-reado
  - ShapeWithTextNode-name-string-removed-boolean-readonly
  - ShapeWithTextNode-tostring-string
  - ShapeWithTextNode-remove-void-setrelaunchdatadata-command-
  - ShapeWithTextNode-getrelaunchdata-command-string-string-is
  - ShapeWithTextNode-getcssasync-promise-key-string-string-
  - ShapeWithTextNode-gettoplevelframe-framenode-undefined
  - ShapeWithTextNode-getplugindatakey-string-string
  - ShapeWithTextNode-setplugindatakey-string-value-string-voi
  - ShapeWithTextNode-getplugindatakeys-string
  - ShapeWithTextNode-getsharedplugindatanamespace-string-key-
  - ShapeWithTextNode-setsharedplugindatanamespace-string-key-
  - ShapeWithTextNode-getsharedplugindatakeysnamespace-string-
  - ShapeWithTextNode-getdevresourcesasyncoptions-includechild
  - ShapeWithTextNode-editdevresourceasynccurrenturl-string-ne
  - ShapeWithTextNode-setdevresourcepreviewasyncurl-string-pre
  - ShapeWithTextNode-maxwidth-number-null-minheight-number-nu
  - ShapeWithTextNode-maxheight-number-null-relativetransform-
  - ShapeWithTextNode-absolutetransform-transform-readonly-abs
  - ShapeWithTextNode-visible-boolean-locked-boolean
  - ShapeWithTextNode-stucknodes-scenenode-readonly
  - ShapeWithTextNode-boundvariables-readonly-field-in-variabl
  - ShapeWithTextNode-inferredvariables-readonly-field-in-vari
  - ShapeWithTextNode-resolvedvariablemodes-collectionid-strin
  - ShapeWithTextNode-clearexplicitvariablemodeforcollectionco
  - ShapeWithTextNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'attachedConnectors: ConnectorNode[] [readonly]'
  - >-
    componentPropertyReferences: { [nodeProperty in 'visible' | 'characters' |
    'mainComponent']?: string} | null
compiler: noos-figma
---

An array of `ConnectorNode`s that are attached to a node.

All component properties that are attached on this node. A node can only have `componentPropertyReferences` if it is a component sublayer or an instance sublayer. It will be `null` otherwise. The value in the key-value pair refers to the component property name as returned by `componentPropertyDefinitions` on the containing component, component set or main component (for instances).
