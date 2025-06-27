---
title: Introduction
slug: ComponentNode-introduction
source_file: plugin-api-ComponentNode.html
source_url: 'https://www.figma.com/plugin-docs/api/ComponentNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: e857986568e8e1bf
token_count: 202
chunk_title: Introduction
chunk_slug: ComponentNode-introduction
chunk_index: 0
chunk_of_total: 54
parent_file: ComponentNode.md
parent_slug: ComponentNode
char_count: 705
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - ComponentNode-type-component-readonly-clone-componentn
  - ComponentNode-instances-instancenode-readonly
  - ComponentNode-description-string
  - ComponentNode-key-string-readonly
  - ComponentNode-getpublishstatusasync-promise-id-string-
  - ComponentNode-isasset-boolean-readonly
  - ComponentNode-getcssasync-promise-key-string-string-
  - ComponentNode-gettoplevelframe-framenode-undefined
  - ComponentNode-getplugindatakey-string-string
  - ComponentNode-setplugindatakey-string-value-string-voi
  - ComponentNode-getsharedplugindatanamespace-string-key-
  - ComponentNode-setsharedplugindatanamespace-string-key-
  - ComponentNode-getdevresourcesasyncoptions-includechild
  - ComponentNode-visible-boolean
  - ComponentNode-componentpropertyreferences-nodeproperty
  - ComponentNode-boundvariables-readonly-field-in-variabl
  - ComponentNode-clearexplicitvariablemodeforcollectionco
  - ComponentNode-children-readonlyarray-readonly
  - ComponentNode-detachedinfo-detachedinfo-null-readonly
  - ComponentNode-layoutgrids-readonlyarray-gridstyleid-st
  - ComponentNode-setgridstyleidasyncstyleid-string-promis
  - ComponentNode-guides-readonlyarray
  - ComponentNode-inferredautolayout-inferredautolayoutres
  - ComponentNode-layoutmode-none-horizontal-vertical
  - ComponentNode-paddingright-number-paddingtop-number
  - ComponentNode-verticalpadding-number-primaryaxissizing
  - ComponentNode-annotations-readonlyarray
  - ComponentNode-backgroundstyleid-string-fills-readonlya
  - ComponentNode-strokes-readonlyarray-strokestyleid-stri
  - ComponentNode-setstrokestyleidasyncstyleid-string-prom
  - ComponentNode-strokejoin-strokejoin-figmamixed
  - ComponentNode-strokegeometry-vectorpaths-readonly-stro
  - ComponentNode-outlinestroke-vectornode-null
  - ComponentNode-fillgeometry-vectorpaths-readonly-corner
  - ComponentNode-bottomrightradius-number
  - ComponentNode-stroketopweight-number-strokebottomweigh
  - ComponentNode-strokeleftweight-number-strokerightweigh
  - ComponentNode-opacity-number-blendmode-blendmode
  - ComponentNode-ismask-boolean
  - ComponentNode-effects-readonlyarray-effectstyleid-stri
  - ComponentNode-seteffectstyleidasyncstyleid-string-prom
  - ComponentNode-maxwidth-number-null-minheight-number-nu
  - ComponentNode-maxheight-number-null-relativetransform-
  - ComponentNode-absoluteboundingbox-rect-null-readonly-l
  - ComponentNode-constrainproportions-boolean-rotation-nu
  - ComponentNode-targetaspectratio-vector-null-readonly
  - ComponentNode-unlockaspectratio-void-exportsettings-re
  - ComponentNode-exportasyncsettings-exportsettingsrest-p
  - ComponentNode-reactions-readonlyarray
  - ComponentNode-overflowdirection-overflowdirection
  - ComponentNode-variantproperties-property-string-string
  - ComponentNode-componentpropertydefinitions-componentpr
  - ComponentNode-editcomponentpropertypropertyname-string
compiler: noos-figma
---

# ComponentNode

Components are UI elements that can be reused across your designs. They are like frames, with the additional ability to have auto-updating copies called instances (see [`InstanceNode`](/plugin-docs/api/InstanceNode/)).

The file may already contain instances of this frame, or you might create them via [`createInstance`](/plugin-docs/api/ComponentNode/#createinstance). When you set a property on a component (or change its content), all instances of that component will update.

Be aware that some component nodes reflect components in the team library that are used within this file. Those components are read-only, though you may create new instances of them.

## Component properties
