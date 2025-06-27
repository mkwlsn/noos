---
title: Introduction
slug: InstanceNode-introduction
source_file: plugin-api-InstanceNode.html
source_url: 'https://www.figma.com/plugin-docs/api/InstanceNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: c242b7f3081c595c
token_count: 170
chunk_title: Introduction
chunk_slug: InstanceNode-introduction
chunk_index: 0
chunk_of_total: 55
parent_file: InstanceNode.md
parent_slug: InstanceNode
char_count: 595
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - InstanceNode-type-instance-readonly-clone-instancenod
  - InstanceNode-getmaincomponentasync-promise
  - InstanceNode-maincomponent-componentnode-null
  - InstanceNode-swapcomponentcomponentnode-componentnode
  - InstanceNode-componentproperties-componentproperties-
  - InstanceNode-scalefactor-number
  - InstanceNode-isexposedinstance-boolean
  - InstanceNode-id-string-readonly
  - InstanceNode-isasset-boolean-readonly
  - InstanceNode-getcssasync-promise-key-string-string-
  - InstanceNode-gettoplevelframe-framenode-undefined
  - InstanceNode-getplugindatakey-string-string
  - InstanceNode-setplugindatakey-string-value-string-voi
  - InstanceNode-getsharedplugindatanamespace-string-key-
  - InstanceNode-setsharedplugindatanamespace-string-key-
  - InstanceNode-getdevresourcesasyncoptions-includechild
  - InstanceNode-visible-boolean
  - InstanceNode-componentpropertyreferences-nodeproperty
  - InstanceNode-boundvariables-readonly-field-in-variabl
  - InstanceNode-clearexplicitvariablemodeforcollectionco
  - InstanceNode-children-readonlyarray-readonly
  - InstanceNode-detachedinfo-detachedinfo-null-readonly
  - InstanceNode-layoutgrids-readonlyarray-gridstyleid-st
  - InstanceNode-setgridstyleidasyncstyleid-string-promis
  - InstanceNode-guides-readonlyarray
  - InstanceNode-inferredautolayout-inferredautolayoutres
  - InstanceNode-layoutmode-none-horizontal-vertical
  - InstanceNode-paddingright-number-paddingtop-number
  - InstanceNode-verticalpadding-number-primaryaxissizing
  - InstanceNode-annotations-readonlyarray
  - InstanceNode-backgroundstyleid-string-fills-readonlya
  - InstanceNode-strokes-readonlyarray-strokestyleid-stri
  - InstanceNode-setstrokestyleidasyncstyleid-string-prom
  - InstanceNode-strokejoin-strokejoin-figmamixed
  - InstanceNode-strokegeometry-vectorpaths-readonly-stro
  - InstanceNode-outlinestroke-vectornode-null
  - InstanceNode-fillgeometry-vectorpaths-readonly-corner
  - InstanceNode-bottomrightradius-number
  - InstanceNode-stroketopweight-number-strokebottomweigh
  - InstanceNode-strokeleftweight-number-strokerightweigh
  - InstanceNode-opacity-number-blendmode-blendmode
  - InstanceNode-ismask-boolean
  - InstanceNode-effects-readonlyarray-effectstyleid-stri
  - InstanceNode-seteffectstyleidasyncstyleid-string-prom
  - InstanceNode-maxwidth-number-null-minheight-number-nu
  - InstanceNode-maxheight-number-null-relativetransform-
  - InstanceNode-absoluteboundingbox-rect-null-readonly-l
  - InstanceNode-constrainproportions-boolean-rotation-nu
  - InstanceNode-targetaspectratio-vector-null-readonly
  - InstanceNode-unlockaspectratio-void-exportsettings-re
  - InstanceNode-exportasyncsettings-exportsettingsrest-p
  - InstanceNode-reactions-readonlyarray
  - InstanceNode-overflowdirection-overflowdirection
  - InstanceNode-variantproperties-property-string-string
compiler: noos-figma
---

# InstanceNode

Instances are a copy of a component (see [`ComponentNode`](/plugin-docs/api/ComponentNode/)). They will always be automatically updated if a component is modified. Instances can be created using the [`createInstance`](/plugin-docs/api/ComponentNode/#createinstance) method on any component node.

##### caution

Updating an `InstanceNode` when a `ComponentNode` changes has the potential to be slow. Try to avoid access patterns that involve alternating between writing to a `ComponentNode` and then reading from an `InstanceNode` of that `ComponentNode`.

## Instance properties
