---
title: Introduction
slug: ComponentSetNode-introduction
source_file: plugin-api-ComponentSetNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ComponentSetNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 7baa3e06d8e8803a
token_count: 173
chunk_title: Introduction
chunk_slug: ComponentSetNode-introduction
chunk_index: 0
chunk_of_total: 51
parent_file: ComponentSetNode.md
parent_slug: ComponentSetNode
char_count: 605
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - ComponentSetNode-type-componentset-readonly-clone-compone
  - ComponentSetNode-defaultvariant-componentnode-readonly
  - ComponentSetNode-variantgroupproperties-property-string-v
  - ComponentSetNode-key-string-readonly
  - ComponentSetNode-getpublishstatusasync-promise-id-string-
  - ComponentSetNode-isasset-boolean-readonly
  - ComponentSetNode-getcssasync-promise-key-string-string-
  - ComponentSetNode-gettoplevelframe-framenode-undefined
  - ComponentSetNode-getplugindatakey-string-string
  - ComponentSetNode-setplugindatakey-string-value-string-voi
  - ComponentSetNode-getsharedplugindatanamespace-string-key-
  - ComponentSetNode-setsharedplugindatanamespace-string-key-
  - ComponentSetNode-getdevresourcesasyncoptions-includechild
  - ComponentSetNode-visible-boolean
  - ComponentSetNode-componentpropertyreferences-nodeproperty
  - ComponentSetNode-boundvariables-readonly-field-in-variabl
  - ComponentSetNode-clearexplicitvariablemodeforcollectionco
  - ComponentSetNode-children-readonlyarray-readonly
  - ComponentSetNode-detachedinfo-detachedinfo-null-readonly
  - ComponentSetNode-layoutgrids-readonlyarray-gridstyleid-st
  - ComponentSetNode-setgridstyleidasyncstyleid-string-promis
  - ComponentSetNode-guides-readonlyarray
  - ComponentSetNode-inferredautolayout-inferredautolayoutres
  - ComponentSetNode-layoutmode-none-horizontal-vertical
  - ComponentSetNode-paddingright-number-paddingtop-number
  - ComponentSetNode-verticalpadding-number-primaryaxissizing
  - ComponentSetNode-annotations-readonlyarray
  - ComponentSetNode-backgroundstyleid-string-fills-readonlya
  - ComponentSetNode-strokes-readonlyarray-strokestyleid-stri
  - ComponentSetNode-setstrokestyleidasyncstyleid-string-prom
  - ComponentSetNode-strokejoin-strokejoin-figmamixed
  - ComponentSetNode-strokegeometry-vectorpaths-readonly-stro
  - ComponentSetNode-outlinestroke-vectornode-null
  - ComponentSetNode-fillgeometry-vectorpaths-readonly-corner
  - ComponentSetNode-bottomrightradius-number
  - ComponentSetNode-stroketopweight-number-strokebottomweigh
  - ComponentSetNode-strokeleftweight-number-strokerightweigh
  - ComponentSetNode-opacity-number-blendmode-blendmode
  - ComponentSetNode-ismask-boolean
  - ComponentSetNode-effects-readonlyarray-effectstyleid-stri
  - ComponentSetNode-seteffectstyleidasyncstyleid-string-prom
  - ComponentSetNode-maxwidth-number-null-minheight-number-nu
  - ComponentSetNode-maxheight-number-null-relativetransform-
  - ComponentSetNode-absoluteboundingbox-rect-null-readonly-l
  - ComponentSetNode-constrainproportions-boolean-rotation-nu
  - ComponentSetNode-targetaspectratio-vector-null-readonly
  - ComponentSetNode-unlockaspectratio-void-exportsettings-re
  - ComponentSetNode-exportasyncsettings-exportsettingsrest-p
  - ComponentSetNode-componentpropertydefinitions-componentpr
  - ComponentSetNode-editcomponentpropertypropertyname-string
compiler: noos-figma
---

# ComponentSetNode

A component set contains the variants of a component. It behaves much like a normal frame would, but all of its children are [`ComponentNode`](/plugin-docs/api/ComponentNode/)s.

Be aware that some component sets reflect items in the team library that are used within this file. Those component sets and their children are read-only, though you may create new instances of the [`ComponentNode`](/plugin-docs/api/ComponentNode/)s that are inside them.

In Figma, component sets must always have children. A component set with no children will delete itself.

## Component set properties
