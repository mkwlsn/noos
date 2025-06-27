---
title: >-
  listAvailableFontsAsync(): Promise + loadFontAsync(fontName: FontName):
  Promise
slug: figma-listavailablefontsasync-promise-loadfont
source_file: plugin-api-figma.html
source_url: 'https://www.figma.com/plugin-docs/api/figma/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 918e380a2d6d3f56
token_count: 210
chunk_title: >-
  listAvailableFontsAsync(): Promise + loadFontAsync(fontName: FontName):
  Promise
chunk_slug: figma-listavailablefontsasync-promise-loadfont
chunk_index: 62
chunk_of_total: 70
parent_file: figma.md
parent_slug: figma
char_count: 733
heading_level: h3
chunk_type: method
merge_type: merged
tags: []
sibling_chunks:
  - figma-introduction-apiversion-100-readonly
  - figma-filekey-string-undefined-readonly
  - figma-command-string-readonly
  - figma-pluginid-string-readonly-widgetid-string
  - figma-editortype-figma-figjam-dev-slides-reado
  - figma-skipinvisibleinstancechildren-boolean
  - figma-currentpage-pagenode
  - figma-setcurrentpageasyncpage-pagenode-promise
  - figma-showuihtml-string-options-showuioptions-
  - figma-ui-uiapi-readonly-util-utilapi-readonly
  - figma-constants-constantsapi-readonly-timer-ti
  - figma-viewport-viewportapi-readonly-clientstor
  - figma-parameters-parametersapi-readonly-paymen
  - figma-currentuser-user-null-readonly-activeuse
  - figma-textreview-textreviewapi-readonly-variab
  - figma-closepluginmessage-string-void
  - figma-ontype-stylechange-callback-event-stylec
  - figma-oncetype-stylechange-callback-event-styl
  - figma-notifymessage-string-options-notificatio
  - figma-triggerundo-void-saveversionhistoryasync
  - figma-openexternalurl-string-void-getnodebyida
  - figma-getnodebyidid-string-basenode-null
  - figma-createrectangle-rectanglenode-createline
  - figma-createellipse-ellipsenode-createpolygon-
  - figma-createstar-starnode-createvector-vectorn
  - figma-createtext-textnode-createframe-framenod
  - figma-createcomponent-componentnode-createcomp
  - figma-createbooleanoperation-booleanoperationn
  - figma-createpage-pagenode-createpagedividerdiv
  - figma-createslice-slicenode-createsliderow-num
  - figma-createsliderowrow-number-sliderownode-cr
  - figma-createshapewithtext-shapewithtextnode-cr
  - figma-createtablenumrows-number-numcolumns-num
  - figma-creategifhash-string-medianode-createnod
  - figma-createnodefromjsxasyncjsx-any-promise-co
  - figma-groupnodes-readonlyarray-parent-basenode
  - figma-unionnodes-readonlyarray-parent-basenode
  - figma-subtractnodes-readonlyarray-parent-basen
  - figma-intersectnodes-readonlyarray-parent-base
  - figma-excludenodes-readonlyarray-parent-baseno
  - figma-flattennodes-readonlyarray-parent-baseno
  - figma-codegen-codegenapi-readonly-vscode-vscod
  - figma-devresources-devresourcesapi-readonly-ge
  - figma-getslidegrid-array-setslidegridslidegrid
  - figma-getstylebyidasyncid-string-promise-getst
  - figma-createpaintstyle-paintstyle
  - figma-createtextstyle-textstyle-createeffectst
  - figma-creategridstyle-gridstyle
  - figma-getlocalpaintstylesasync-promise-getloca
  - figma-getlocaltextstylesasync-promise-getlocal
  - figma-getlocaleffectstylesasync-promise-getloc
  - figma-getlocalgridstylesasync-promise-getlocal
  - figma-movelocalpaintstyleaftertargetnode-paint
  - figma-movelocaltextstyleaftertargetnode-textst
  - figma-movelocaleffectstyleaftertargetnode-effe
  - figma-movelocalgridstyleaftertargetnode-gridst
  - figma-movelocalpaintfolderaftertargetfolder-st
  - figma-movelocaltextfolderaftertargetfolder-str
  - figma-movelocaleffectfolderaftertargetfolder-s
  - figma-movelocalgridfolderaftertargetfolder-str
  - figma-importcomponentbykeyasynckey-string-prom
  - figma-importstylebykeyasynckey-string-promise-
  - figma-hasmissingfont-boolean-readonly-createim
  - figma-createimageasyncsrc-string-promise
  - figma-getimagebyhashhash-string-image-null
  - figma-createvideoasyncdata-uint8array-promise
  - figma-mixed-unique-symbol-readonly
  - figma-getfilethumbnailnodeasync-promise-getfil
  - figma-setfilethumbnailnodeasyncnode-framenode-
merged_titles:
  - 'listAvailableFontsAsync(): Promise'
  - 'loadFontAsync(fontName: FontName): Promise'
compiler: noos-figma
---

Returns the lists of currently available fonts. This should be the same list as the one you'd see if you manually used the font picker.

Makes a font available in the plugin for use when creating and modifying text. Calling this function is necessary to modify any property of a text node that may cause the rendered text to change, including `.characters`, `.fontSize`, `.fontName`, etc.

You can either pass in a hardcoded font, a font loaded via `listAvailableFontsAsync`, or the font stored on an existing text node.

Read more about how to work with fonts, when to load them, and how to load them in the [Working with Text](/plugin-docs/working-with-text/)
 page.

[View more →](/plugin-docs/api/properties/figma-loadfontasync/)
