---
title: 'parent: (BaseNode & ChildrenMixin) | null [readonly]'
slug: TextSublayer-parent-basenode-childrenmixin-null-reado
source_file: plugin-api-TextSublayer.html
source_url: 'https://www.figma.com/plugin-docs/api/TextSublayer/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 4c51ed3b0b15e44e
token_count: 145
chunk_title: 'parent: (BaseNode & ChildrenMixin) | null [readonly]'
chunk_slug: TextSublayer-parent-basenode-childrenmixin-null-reado
chunk_index: 2
chunk_of_total: 18
parent_file: TextSublayer.md
parent_slug: TextSublayer
char_count: 506
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - TextSublayer-introduction
  - TextSublayer-tostring-string
  - TextSublayer-paragraphindent-number-paragraphspacing-
  - TextSublayer-textdecorationstyle-textdecorationstyle-
  - TextSublayer-textdecorationthickness-textdecorationth
  - TextSublayer-textdecorationskipink-boolean-figmamixed
  - TextSublayer-setrangetextdecorationstart-number-end-n
  - TextSublayer-setrangetextdecorationstylestart-number-
  - TextSublayer-setrangetextdecorationoffsetstart-number
  - TextSublayer-setrangetextdecorationthicknessstart-num
  - TextSublayer-setrangetextdecorationcolorstart-number-
  - TextSublayer-setrangetextdecorationskipinkstart-numbe
  - TextSublayer-setrangelineheightstart-number-end-numbe
  - TextSublayer-setrangeindentationstart-number-end-numb
  - TextSublayer-setrangeparagraphindentstart-number-end-
  - TextSublayer-setrangeparagraphspacingstart-number-end
  - TextSublayer-fillstyleid-string-figmamixed
compiler: noos-figma
---

Returns the parent of this node, if any. This property is not meant to be directly edited. To reparent, see [`appendChild`](/plugin-docs/api/properties/nodes-appendchild/)
.

[View more →](/plugin-docs/api/properties/nodes-parent/)

##### tip

Tip: `parent` will always return a [ConnectorNode](/plugin-docs/api/ConnectorNode/)
, [ShapeWithTextNode](/plugin-docs/api/ShapeWithTextNode/)
, [StickyNode](/plugin-docs/api/StickyNode/)
, or [TableCellNode](/plugin-docs/api/TableCellNode/)

## Text node traits
