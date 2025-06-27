---
title: 'effects: ReadonlyArray + effectStyleId: string'
slug: TextPathNode-effects-readonlyarray-effectstyleid-stri
source_file: plugin-api-TextPathNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TextPathNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 464a7cac99262d51
token_count: 120
chunk_title: 'effects: ReadonlyArray + effectStyleId: string'
chunk_slug: TextPathNode-effects-readonlyarray-effectstyleid-stri
chunk_index: 46
chunk_of_total: 74
parent_file: TextPathNode.md
parent_slug: TextPathNode
char_count: 420
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - TextPathNode-introduction
  - TextPathNode-textalignvertical-top-center-bottom-auto
  - TextPathNode-handlemirroring-handlemirroring-figmamix
  - TextPathNode-insertcharactersstart-number-characters-
  - TextPathNode-opentypefeatures-readonly-feature-in-ope
  - TextPathNode-textstyleid-string-figmamixed
  - TextPathNode-settextstyleidasyncstyleid-string-promis
  - TextPathNode-getstyledtextsegmentsfields-styledtextse
  - TextPathNode-setrangefontsizestart-number-end-number-
  - TextPathNode-setrangefontnamestart-number-end-number-
  - TextPathNode-setrangetextcasestart-number-end-number-
  - TextPathNode-getrangeletterspacingstart-number-end-nu
  - TextPathNode-getrangehyperlinkstart-number-end-number
  - TextPathNode-setrangehyperlinkstart-number-end-number
  - TextPathNode-setrangefillsstart-number-end-number-val
  - TextPathNode-getrangetextstyleidstart-number-end-numb
  - TextPathNode-setrangetextstyleidstart-number-end-numb
  - TextPathNode-getrangefillstyleidstart-number-end-numb
  - TextPathNode-setrangefillstyleidstart-number-end-numb
  - TextPathNode-getrangeboundvariablestart-number-end-nu
  - TextPathNode-id-string-readonly
  - TextPathNode-parent-basenode-childrenmixin-null-reado
  - TextPathNode-name-string-removed-boolean-readonly
  - TextPathNode-tostring-string
  - TextPathNode-remove-void-setrelaunchdatadata-command-
  - TextPathNode-getrelaunchdata-command-string-string-is
  - TextPathNode-getcssasync-promise-key-string-string-
  - TextPathNode-gettoplevelframe-framenode-undefined
  - TextPathNode-getplugindatakey-string-string
  - TextPathNode-setplugindatakey-string-value-string-voi
  - TextPathNode-getplugindatakeys-string
  - TextPathNode-getsharedplugindatanamespace-string-key-
  - TextPathNode-setsharedplugindatanamespace-string-key-
  - TextPathNode-getsharedplugindatakeysnamespace-string-
  - TextPathNode-getdevresourcesasyncoptions-includechild
  - TextPathNode-editdevresourceasynccurrenturl-string-ne
  - TextPathNode-setdevresourcepreviewasyncurl-string-pre
  - TextPathNode-locked-boolean
  - TextPathNode-stucknodes-scenenode-readonly
  - TextPathNode-attachedconnectors-connectornode-readonl
  - TextPathNode-boundvariables-readonly-field-in-variabl
  - TextPathNode-inferredvariables-readonly-field-in-vari
  - TextPathNode-resolvedvariablemodes-collectionid-strin
  - TextPathNode-clearexplicitvariablemodeforcollectionco
  - TextPathNode-opacity-number-blendmode-blendmode
  - TextPathNode-ismask-boolean-masktype-masktype
  - TextPathNode-seteffectstyleidasyncstyleid-string-prom
  - TextPathNode-fillstyleid-string-figmamixed
  - TextPathNode-setfillstyleidasyncstyleid-string-promis
  - TextPathNode-strokestyleid-string
  - TextPathNode-setstrokestyleidasyncstyleid-string-prom
  - TextPathNode-strokejoin-strokejoin-figmamixed-strokea
  - TextPathNode-dashpattern-readonlyarray-strokegeometry
  - TextPathNode-strokecap-strokecap-figmamixed-strokemit
  - TextPathNode-outlinestroke-vectornode-null
  - TextPathNode-fillgeometry-vectorpaths-readonly-x-numb
  - TextPathNode-maxwidth-number-null-minheight-number-nu
  - TextPathNode-maxheight-number-null-relativetransform-
  - TextPathNode-absolutetransform-transform-readonly-abs
  - TextPathNode-layoutalign-min-center-max-stretch-inher
  - TextPathNode-layoutgrow-number
  - TextPathNode-layoutpositioning-auto-absolute
  - TextPathNode-absoluterenderbounds-rect-null-readonly
  - TextPathNode-constrainproportions-boolean-rotation-nu
  - TextPathNode-layoutsizinghorizontal-fixed-hug-fill
  - TextPathNode-layoutsizingvertical-fixed-hug-fill
  - TextPathNode-resizewidth-number-height-number-void
  - TextPathNode-resizewithoutconstraintswidth-number-hei
  - TextPathNode-rescalescale-number-void-constraints-con
  - TextPathNode-targetaspectratio-vector-null-readonly
  - TextPathNode-exportsettings-readonlyarray-exportasync
  - TextPathNode-reactions-readonlyarray
  - TextPathNode-setreactionsasyncreactions-array-promise
merged_titles:
  - 'effects: ReadonlyArray'
  - 'effectStyleId: string'
compiler: noos-figma
---

Array of effects. See [`Effect`](/plugin-docs/api/Effect/)
 type. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/)
.

The id of the [`EffectStyle`](/plugin-docs/api/EffectStyle/)
 object that the properties of this node are linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setEffectStyleIdAsync` to update the style.
