---
title: Introduction
slug: TextSublayer-introduction
source_file: plugin-api-TextSublayer.html
source_url: 'https://www.figma.com/plugin-docs/api/TextSublayer/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: 670ceca6ecdedbb1
token_count: 152
chunk_title: Introduction
chunk_slug: TextSublayer-introduction
chunk_index: 0
chunk_of_total: 18
parent_file: TextSublayer.md
parent_slug: TextSublayer
char_count: 529
heading_level: h3
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks:
  - TextSublayer-tostring-string
  - TextSublayer-parent-basenode-childrenmixin-null-reado
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

# TextSublayer

Text sublayer nodes are pared-back versions of text nodes: they have most text properties (except `textAlignVertical` and `textAutoResize`, which are not editable on these nodes' text sublayers), as well as `fills`. They aren't resizable or repositionable.

You set text content as you would for any other text node (e.g. `sticky.text.characters = 'some text'`). As with all other text operations in Figma, you'll need to ensure [fonts are loaded](/plugin-docs/working-with-text/#loading-fonts)
.

## Basic traits
