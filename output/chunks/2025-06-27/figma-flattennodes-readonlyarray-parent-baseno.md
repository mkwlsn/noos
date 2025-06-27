---
title: >-
  flatten(nodes: ReadonlyArray, parent?: BaseNode & ChildrenMixin, index?:
  number): VectorNode + ungroup(node: SceneNode & ChildrenMixin): Array
slug: figma-flattennodes-readonlyarray-parent-baseno
source_file: plugin-api-figma.html
source_url: 'https://www.figma.com/plugin-docs/api/figma/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 525301e089f5aaf9
token_count: 132
chunk_title: >-
  flatten(nodes: ReadonlyArray, parent?: BaseNode & ChildrenMixin, index?:
  number): VectorNode + ungroup(node: SceneNode & ChildrenMixin): Array
chunk_slug: figma-flattennodes-readonlyarray-parent-baseno
chunk_index: 40
chunk_of_total: 70
parent_file: figma.md
parent_slug: figma
char_count: 459
heading_level: h3
chunk_type: guide
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
  - figma-listavailablefontsasync-promise-loadfont
  - figma-hasmissingfont-boolean-readonly-createim
  - figma-createimageasyncsrc-string-promise
  - figma-getimagebyhashhash-string-image-null
  - figma-createvideoasyncdata-uint8array-promise
  - figma-mixed-unique-symbol-readonly
  - figma-getfilethumbnailnodeasync-promise-getfil
  - figma-setfilethumbnailnodeasyncnode-framenode-
merged_titles:
  - >-
    flatten(nodes: ReadonlyArray, parent?: BaseNode & ChildrenMixin, index?:
    number): VectorNode
  - 'ungroup(node: SceneNode & ChildrenMixin): Array'
compiler: noos-figma
---

Flattens every node in nodes into a new vector network.

[View more →](/plugin-docs/api/properties/figma-flatten/)

Ungroups the given `node`, moving all of `node`'s children into `node`'s parent and removing `node`. Returns an array of nodes that were children of `node`.

[View more →](/plugin-docs/api/properties/figma-ungroup/)

## Dev Mode

These APIs integrate your plugin with Figma's Dev Mode. Use the APIs to generate code and interfaces in Dev Mode.
