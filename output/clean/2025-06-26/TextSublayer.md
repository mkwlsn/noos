---
title: TextSublayer
slug: TextSublayer
source_file: plugin-api-TextSublayer.html
source_url: https://www.figma.com/plugin-docs/api/TextSublayer/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 5aad964d6892a794
token_count: 2212
---
# TextSublayer

Text sublayer nodes are pared-back versions of text nodes: they have most text properties (except `textAlignVertical` and `textAutoResize`, which are not editable on these nodes' text sublayers), as well as `fills`. They aren't resizable or repositionable.

You set text content as you would for any other text node (e.g. `sticky.text.characters = 'some text'`). As with all other text operations in Figma, you'll need to ensure [fonts are loaded](/plugin-docs/working-with-text/#loading-fonts).

## Basic traits

### toString(): string

Returns a string representation of the node. For debugging purposes only, do not rely on the exact output of this string in production code.

[View more →](/plugin-docs/api/properties/nodes-tostring/)### parent: (BaseNode & ChildrenMixin) | null [readonly]

Returns the parent of this node, if any. This property is not meant to be directly edited. To reparent, see [`appendChild`](/plugin-docs/api/properties/nodes-appendchild/).

[View more →](/plugin-docs/api/properties/nodes-parent/)##### tip

Tip: `parent` will always return a [ConnectorNode](/plugin-docs/api/ConnectorNode/), [ShapeWithTextNode](/plugin-docs/api/ShapeWithTextNode/), [StickyNode](/plugin-docs/api/StickyNode/), or [TableCellNode](/plugin-docs/api/TableCellNode/)

## Text node traits

### paragraphIndent: number

The indentation of paragraphs (offset of the first line from the left). Setting this property requires the font the be loaded.

### paragraphSpacing: number

The vertical distance between paragraphs. Setting this property requires the font to be loaded.

### listSpacing: number

The vertical distance between lines of a list.

### hangingPunctuation: boolean

Whether punctuation, like quotation marks, hangs outside the text box.

### hangingList: boolean

Whether numbered list counters or unordered list bullets hang outside the text box.

### textDecoration: TextDecoration | figma.mixed

Whether the text is underlined or has a strikethrough. Requires the font to be loaded.

### textDecorationStyle: TextDecorationStyle | figma.mixed | null

The text decoration style (e.g. "SOLID"). If the text is not underlined, this value will be null. Requires the font to be loaded.

### textDecorationOffset: TextDecorationOffset | figma.mixed | null

The text decoration offset. If the text is not underlined, this value will be null. Requires the font to be loaded.

### textDecorationThickness: TextDecorationThickness | figma.mixed | null

The text decoration thickness. If the text is not underlined, this value will be null. Requires the font to be loaded.

### textDecorationColor: TextDecorationColor | figma.mixed | null

The text decoration color. If the text is not underlined, this value will be null. Requires the font to be loaded.

### textDecorationSkipInk: boolean | figma.mixed | null

Whether the text decoration skips descenders. If the text is not underlined, this value will be null. Requires the font to be loaded.

### lineHeight: LineHeight | figma.mixed

The spacing between the lines in a paragraph of text. Requires the font to be loaded.

### leadingTrim: LeadingTrim | figma.mixed

The removal of the vertical space above and below text glyphs. Requires the font to be loaded.

### getRangeTextDecoration(start: number, end: number): TextDecoration | figma.mixed

Get the `textDecoration` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeTextDecoration(start: number, end: number, value: TextDecoration): void

Set the `textDecoration` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeTextDecorationStyle(start: number, end: number): TextDecorationStyle | figma.mixed | null

Get the `textDecorationStyle` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeTextDecorationStyle(start: number, end: number, value: TextDecorationStyle): void

Set the `textDecorationStyle` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeTextDecorationOffset(start: number, end: number): TextDecorationOffset | figma.mixed | null

Get the `textDecorationOffset` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeTextDecorationOffset(start: number, end: number, value: TextDecorationOffset): void

Set the `textDecorationOffset` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeTextDecorationThickness(start: number, end: number): TextDecorationThickness | figma.mixed | null

Get the `textDecorationThickness` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeTextDecorationThickness(start: number, end: number, value: TextDecorationThickness): void

Set the `textDecorationThickness` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeTextDecorationColor(start: number, end: number): TextDecorationColor | figma.mixed | null

Get the `textDecorationColor` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeTextDecorationColor(start: number, end: number, value: TextDecorationColor): void

Set the `textDecorationColor` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeTextDecorationSkipInk(start: number, end: number): boolean | figma.mixed | null

Get the `textDecorationSkipInk` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeTextDecorationSkipInk(start: number, end: number, value: boolean): void

Set the `textDecorationSkipInk` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeLineHeight(start: number, end: number): LineHeight | figma.mixed

Get the `lineHeight` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeLineHeight(start: number, end: number, value: LineHeight): void

Set the `lineHeight` from characters in range `start` (inclusive) to `end` (exclusive). Requires the font to be loaded.

### getRangeListOptions(start: number, end: number): TextListOptions | figma.mixed

Get the `textListOptions` from characters in range `start` (inclusive) to `end` (exclusive). Returns a [`TextListOptions`](/plugin-docs/api/TextListOptions/)

### setRangeListOptions(start: number, end: number, value: TextListOptions): void

Set the `textListOptions` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeListSpacing(start: number, end: number): number | figma.mixed

Get the `listSpacing` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeListSpacing(start: number, end: number, value: number): void

Set the `listSpacing` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeIndentation(start: number, end: number): number | figma.mixed

Get the `indentation` from characters in range `start` (inclusive) to `end` (exclusive).

### setRangeIndentation(start: number, end: number, value: number): void

Set the `indentation` from characters in range `start` (inclusive) to `end` (exclusive).

### getRangeParagraphIndent(start: number, end: number): number | figma.mixed

Get the `paragraphIndent` for a paragraph containing characters in range `start` (inclusive) to `end` (exclusive).

### setRangeParagraphIndent(start: number, end: number, value: number): void

Set the `paragraphIndent` for a paragraph containing characters in range `start` (inclusive) to `end` (exclusive).

### getRangeParagraphSpacing(start: number, end: number): number | figma.mixed

Get the `paragraphSpacing` for a paragraph containing characters in range `start` (inclusive) to `end` (exclusive).

### setRangeParagraphSpacing(start: number, end: number, value: number): void

Set the `paragraphSpacing` for a paragraph containing characters in range `start` (inclusive) to `end` (exclusive).

### fills: ReadonlyArray | figma.mixed

The paints used to fill the area of the shape. For help on how to change this value, see [Editing Properties](/plugin-docs/editing-properties/).

[View more →](/plugin-docs/api/properties/nodes-fills/)### fillStyleId: string | figma.mixed

The id of the [`PaintStyle`](/plugin-docs/api/PaintStyle/) object that the [`fills`](/plugin-docs/api/properties/nodes-fills/) property of this node is linked to.

If the manifest contains`"documentAccess": "dynamic-page"`, this property is read-only. Use `setFillStyleIdAsync` to update the style.

[View more →](/plugin-docs/api/properties/nodes-fillstyleid/)### setFillStyleIdAsync(styleId: string): Promise

Sets the [`PaintStyle`](/plugin-docs/api/PaintStyle/) that the [`fills`](/plugin-docs/api/properties/nodes-fills/) property of this node is linked to.