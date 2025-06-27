---
title: >-
  insertCharacters(start: number, characters: string, useStyle?: 'BEFORE' |
  'AFTER'): void + deleteCharacters(start: number, end: number): void
slug: TextPathNode-insertcharactersstart-number-characters-
source_file: plugin-api-TextPathNode.html
source_url: 'https://www.figma.com/plugin-docs/api/TextPathNode/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: cc7e7358cbc757ea
token_count: 118
chunk_title: >-
  insertCharacters(start: number, characters: string, useStyle?: 'BEFORE' |
  'AFTER'): void + deleteCharacters(start: number, end: number): void
chunk_slug: TextPathNode-insertcharactersstart-number-characters-
chunk_index: 3
chunk_of_total: 74
parent_file: TextPathNode.md
parent_slug: TextPathNode
char_count: 412
heading_level: h3
chunk_type: guide
merge_type: merged
tags: []
sibling_chunks:
  - TextPathNode-introduction
  - TextPathNode-textalignvertical-top-center-bottom-auto
  - TextPathNode-handlemirroring-handlemirroring-figmamix
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
  - TextPathNode-effects-readonlyarray-effectstyleid-stri
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
  - >-
    insertCharacters(start: number, characters: string, useStyle?: 'BEFORE' |
    'AFTER'): void
  - 'deleteCharacters(start: number, end: number): void'
compiler: noos-figma
---

Insert `characters` at index `start` in the text.

[View more →](/plugin-docs/api/properties/TextNode-insertcharacters/)

Remove characters in the text from `start` (inclusive) to `end` (exclusive).

[View more →](/plugin-docs/api/properties/TextNode-deletecharacters/)

## Text and text range properties

These properties can be applied to the whole text node, or parts of the text on specific character ranges.
