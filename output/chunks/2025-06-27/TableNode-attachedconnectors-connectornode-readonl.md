---
title: >-
  attachedConnectors: ConnectorNode[] [readonly] + componentPropertyReferences:
  { [nodeProperty in 'visible' | 'characters' | 'mainComponent']?: string} |
  null
slug: TableNode-attachedconnectors-connectornode-readonl
source_file: plugin-api-TableNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TableNode/'
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
chunk_slug: TableNode-attachedconnectors-connectornode-readonl
chunk_index: 30
chunk_of_total: 36
parent_file: TableNode.md
parent_slug: TableNode
char_count: 444
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - TableNode-introduction-type-table-readonly
  - TableNode-insertrowrowindex-number-void-insertcolu
  - TableNode-removerowrowindex-number-void-removecolu
  - TableNode-moverowfromindex-number-toindex-number-v
  - TableNode-resizerowrowindex-number-height-number-v
  - TableNode-fills-readonlyarray-figmamixed
  - TableNode-fillstyleid-string-figmamixed
  - TableNode-setfillstyleidasyncstyleid-string-promis
  - TableNode-blendmode-blendmode-id-string-readonly
  - TableNode-parent-basenode-childrenmixin-null-reado
  - TableNode-name-string-removed-boolean-readonly
  - TableNode-tostring-string
  - TableNode-remove-void-setrelaunchdatadata-command-
  - TableNode-getrelaunchdata-command-string-string-is
  - TableNode-getcssasync-promise-key-string-string-
  - TableNode-gettoplevelframe-framenode-undefined
  - TableNode-getplugindatakey-string-string
  - TableNode-setplugindatakey-string-value-string-voi
  - TableNode-getplugindatakeys-string
  - TableNode-getsharedplugindatanamespace-string-key-
  - TableNode-setsharedplugindatanamespace-string-key-
  - TableNode-getsharedplugindatakeysnamespace-string-
  - TableNode-getdevresourcesasyncoptions-includechild
  - TableNode-editdevresourceasynccurrenturl-string-ne
  - TableNode-setdevresourcepreviewasyncurl-string-pre
  - TableNode-maxwidth-number-null-minheight-number-nu
  - TableNode-maxheight-number-null-relativetransform-
  - TableNode-absolutetransform-transform-readonly-abs
  - TableNode-visible-boolean-locked-boolean
  - TableNode-stucknodes-scenenode-readonly
  - TableNode-boundvariables-readonly-field-in-variabl
  - TableNode-inferredvariables-readonly-field-in-vari
  - TableNode-resolvedvariablemodes-collectionid-strin
  - TableNode-clearexplicitvariablemodeforcollectionco
  - TableNode-exportsettings-readonlyarray-exportasync
merged_titles:
  - 'attachedConnectors: ConnectorNode[] [readonly]'
  - >-
    componentPropertyReferences: { [nodeProperty in 'visible' | 'characters' |
    'mainComponent']?: string} | null
compiler: noos-figma
---

An array of `ConnectorNode`s that are attached to a node.

All component properties that are attached on this node. A node can only have `componentPropertyReferences` if it is a component sublayer or an instance sublayer. It will be `null` otherwise. The value in the key-value pair refers to the component property name as returned by `componentPropertyDefinitions` on the containing component, component set or main component (for instances).
