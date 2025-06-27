---
title: Introduction
slug: TextNode-introduction
source_file: plugin-api-TextNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TextNode/'
doc_type: plugin-api
created: 2025-06-26T00:00:00.000Z
updated: 2025-06-26T00:00:00.000Z
owner: figma
version: 1
content_hash: 6bda6f83e6feb6d4
token_count: 121
chunk_title: Introduction
chunk_slug: TextNode-introduction
chunk_index: 0
chunk_of_total: 65
parent_file: TextNode.md
parent_slug: TextNode
char_count: 421
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - TextNode-textalignvertical-top-center-bottom-text
  - TextNode-autorename-boolean
  - TextNode-characters-string
  - TextNode-opentypefeatures-readonly-feature-in-ope
  - TextNode-textdecorationstyle-textdecorationstyle-
  - TextNode-textdecorationthickness-textdecorationth
  - TextNode-textdecorationskipink-boolean-figmamixed
  - TextNode-textstyleid-string-figmamixed
  - TextNode-settextstyleidasyncstyleid-string-promis
  - TextNode-getstyledtextsegmentsfields-styledtextse
  - TextNode-setrangefontsizestart-number-end-number-
  - TextNode-setrangefontnamestart-number-end-number-
  - TextNode-setrangetextcasestart-number-end-number-
  - TextNode-getrangetextdecorationstart-number-end-n
  - TextNode-getrangetextdecorationstylestart-number-
  - TextNode-getrangetextdecorationoffsetstart-number
  - TextNode-getrangetextdecorationthicknessstart-num
  - TextNode-getrangetextdecorationcolorstart-number-
  - TextNode-getrangetextdecorationskipinkstart-numbe
  - TextNode-getrangeletterspacingstart-number-end-nu
  - TextNode-getrangelineheightstart-number-end-numbe
  - TextNode-getrangehyperlinkstart-number-end-number
  - TextNode-setrangehyperlinkstart-number-end-number
  - TextNode-setrangefillsstart-number-end-number-val
  - TextNode-getrangetextstyleidstart-number-end-numb
  - TextNode-setrangetextstyleidstart-number-end-numb
  - TextNode-getrangefillstyleidstart-number-end-numb
  - TextNode-setrangefillstyleidstart-number-end-numb
  - TextNode-getrangelistoptionsstart-number-end-numb
  - TextNode-getrangeparagraphindentstart-number-end-
  - TextNode-getrangeparagraphspacingstart-number-end
  - TextNode-getrangeboundvariablestart-number-end-nu
  - TextNode-id-string-readonly
  - TextNode-isasset-boolean-readonly
  - TextNode-getcssasync-promise-key-string-string-
  - TextNode-gettoplevelframe-framenode-undefined
  - TextNode-getplugindatakey-string-string
  - TextNode-setplugindatakey-string-value-string-voi
  - TextNode-getsharedplugindatanamespace-string-key-
  - TextNode-setsharedplugindatanamespace-string-key-
  - TextNode-getdevresourcesasyncoptions-includechild
  - TextNode-visible-boolean
  - TextNode-componentpropertyreferences-nodeproperty
  - TextNode-boundvariables-readonly-field-in-variabl
  - TextNode-clearexplicitvariablemodeforcollectionco
  - TextNode-opacity-number-blendmode-blendmode
  - TextNode-ismask-boolean
  - TextNode-effects-readonlyarray-effectstyleid-stri
  - TextNode-seteffectstyleidasyncstyleid-string-prom
  - TextNode-strokes-readonlyarray-strokestyleid-stri
  - TextNode-setstrokestyleidasyncstyleid-string-prom
  - TextNode-strokejoin-strokejoin-figmamixed
  - TextNode-strokegeometry-vectorpaths-readonly-stro
  - TextNode-outlinestroke-vectornode-null
  - TextNode-fillgeometry-vectorpaths-readonly-x-numb
  - TextNode-maxwidth-number-null-minheight-number-nu
  - TextNode-maxheight-number-null-relativetransform-
  - TextNode-absoluteboundingbox-rect-null-readonly-l
  - TextNode-constrainproportions-boolean-rotation-nu
  - TextNode-targetaspectratio-vector-null-readonly
  - TextNode-unlockaspectratio-void-exportsettings-re
  - TextNode-exportasyncsettings-exportsettingsrest-p
  - TextNode-reactions-readonlyarray
  - TextNode-annotations-readonlyarray
compiler: noos-figma
---

# TextNode

The text node represents text where both the whole node or individual character ranges can have properties such as color (fills), font size, font name, etc.

When working with text nodes, there are a lot of things to consider, including mixed styles, loading fonts, and missing fonts. Please refer to the [Working with Text](/plugin-docs/working-with-text/) page for more information.

## Text node properties
