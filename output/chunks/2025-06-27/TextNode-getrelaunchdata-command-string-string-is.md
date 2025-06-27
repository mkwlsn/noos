---
title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
slug: TextNode-getrelaunchdata-command-string-string-is
source_file: plugin-api-TextNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TextNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 645deeef9953ea32
token_count: 156
chunk_title: 'getRelaunchData(): { [command: string]: string } + isAsset: boolean [readonly]'
chunk_slug: TextNode-getrelaunchdata-command-string-string-is
chunk_index: 41
chunk_of_total: 90
parent_file: TextNode.md
parent_slug: TextNode
char_count: 544
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
  - TextNode-parent-basenode-childrenmixin-null-reado
  - TextNode-name-string-removed-boolean-readonly
  - TextNode-tostring-string
  - TextNode-remove-void-setrelaunchdatadata-command-
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
  - 'getRelaunchData(): { [command: string]: string }'
  - 'isAsset: boolean [readonly]'
compiler: noos-figma
---

Retreives the reluanch data stored on this node using [`setRelaunchData`](/plugin-docs/api/properties/nodes-setrelaunchdata/)

Returns true if Figma detects that a node is an asset, otherwise returns false. An asset is is either an icon or a raster image.

This property is useful if you’re building a [plugin for code generation](/plugin-docs/codegen-plugins/)
.

##### info

This property uses a set of heuristics to determine if a node is an asset. At a high level an icon is a small vector graphic and an image is a node with an image fill.
