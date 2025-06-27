---
title: >-
  setTextStyleIdAsync(styleId: string): Promise + hyperlink: HyperlinkTarget |
  null | figma.mixed
slug: TextNode-settextstyleidasyncstyleid-string-promis
source_file: plugin-api-TextNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TextNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 0f83fccb4b6324e6
token_count: 108
chunk_title: >-
  setTextStyleIdAsync(styleId: string): Promise + hyperlink: HyperlinkTarget |
  null | figma.mixed
chunk_slug: TextNode-settextstyleidasyncstyleid-string-promis
chunk_index: 12
chunk_of_total: 90
parent_file: TextNode.md
parent_slug: TextNode
char_count: 376
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - TextNode-introduction
  - TextNode-textalignvertical-top-center-bottom-text
  - TextNode-texttruncation-disabled-ending-maxlines-
  - TextNode-paragraphindent-number-paragraphspacing-
  - TextNode-hanginglist-boolean-autorename-boolean
  - TextNode-characters-string-insertcharactersstart-
  - TextNode-deletecharactersstart-number-end-number-
  - TextNode-opentypefeatures-readonly-feature-in-ope
  - TextNode-textdecorationstyle-textdecorationstyle-
  - TextNode-textdecorationthickness-textdecorationth
  - TextNode-textdecorationskipink-boolean-figmamixed
  - TextNode-textstyleid-string-figmamixed
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
  - TextNode-parent-basenode-childrenmixin-null-reado
  - TextNode-name-string-removed-boolean-readonly
  - TextNode-tostring-string
  - TextNode-remove-void-setrelaunchdatadata-command-
  - TextNode-getrelaunchdata-command-string-string-is
  - TextNode-getcssasync-promise-key-string-string-
  - TextNode-gettoplevelframe-framenode-undefined
  - TextNode-getplugindatakey-string-string
  - TextNode-setplugindatakey-string-value-string-voi
  - TextNode-getplugindatakeys-string
  - TextNode-getsharedplugindatanamespace-string-key-
  - TextNode-setsharedplugindatanamespace-string-key-
  - TextNode-getsharedplugindatakeysnamespace-string-
  - TextNode-getdevresourcesasyncoptions-includechild
  - TextNode-editdevresourceasynccurrenturl-string-ne
  - TextNode-setdevresourcepreviewasyncurl-string-pre
  - TextNode-locked-boolean
  - TextNode-stucknodes-scenenode-readonly
  - TextNode-attachedconnectors-connectornode-readonl
  - TextNode-boundvariables-readonly-field-in-variabl
  - TextNode-inferredvariables-readonly-field-in-vari
  - TextNode-resolvedvariablemodes-collectionid-strin
  - TextNode-clearexplicitvariablemodeforcollectionco
  - TextNode-opacity-number-blendmode-blendmode
  - TextNode-ismask-boolean-masktype-masktype
  - TextNode-effects-readonlyarray-effectstyleid-stri
  - TextNode-seteffectstyleidasyncstyleid-string-prom
  - TextNode-fillstyleid-string-figmamixed
  - TextNode-setfillstyleidasyncstyleid-string-promis
  - TextNode-strokestyleid-string
  - TextNode-setstrokestyleidasyncstyleid-string-prom
  - TextNode-strokejoin-strokejoin-figmamixed-strokea
  - TextNode-dashpattern-readonlyarray-strokegeometry
  - TextNode-strokecap-strokecap-figmamixed-strokemit
  - TextNode-outlinestroke-vectornode-null
  - TextNode-fillgeometry-vectorpaths-readonly-x-numb
  - TextNode-maxwidth-number-null-minheight-number-nu
  - TextNode-maxheight-number-null-relativetransform-
  - TextNode-absolutetransform-transform-readonly-abs
  - TextNode-layoutalign-min-center-max-stretch-inher
  - TextNode-layoutgrow-number
  - TextNode-layoutpositioning-auto-absolute
  - TextNode-absoluterenderbounds-rect-null-readonly
  - TextNode-constrainproportions-boolean-rotation-nu
  - TextNode-layoutsizinghorizontal-fixed-hug-fill
  - TextNode-layoutsizingvertical-fixed-hug-fill
  - TextNode-resizewidth-number-height-number-void
  - TextNode-resizewithoutconstraintswidth-number-hei
  - TextNode-rescalescale-number-void-constraints-con
  - TextNode-targetaspectratio-vector-null-readonly
  - TextNode-exportsettings-readonlyarray-exportasync
  - TextNode-reactions-readonlyarray
  - TextNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'setTextStyleIdAsync(styleId: string): Promise'
  - 'hyperlink: HyperlinkTarget | null | figma.mixed'
compiler: noos-figma
---

Set the [`TextStyle`](/plugin-docs/api/TextStyle/)
 that the text properties of this node are linked to. Requires the font to be loaded.

A [`HyperlinkTarget`](/plugin-docs/api/HyperlinkTarget/)
 if the text node has exactly one hyperlink, or `null` if the node has none.

## Text range functions

These functions allow you to get and set text properties on parts of the text.
