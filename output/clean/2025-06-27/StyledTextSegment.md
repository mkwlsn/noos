---
title: StyledTextSegment
slug: StyledTextSegment
source_file: plugin-api-StyledTextSegment.html
source_url: https://www.figma.com/plugin-docs/api/StyledTextSegment/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: bbf916b4d1d4b198
token_count: 662
---
# StyledTextSegment

Represents a range of characters in a text node and its styles.

### characters: string

The characters in the range of text with the same styles.

### start: number

Start index (inclusive) of the range of characters.

### end: number

End index (exclusive) of the range of characters.

### fontSize: number

The size of the font. Has minimum value of 1.

### fontName: FontName

The font family (e.g. "Inter"), and font style (e.g. "Regular").

### fontWeight: number

The weight of the font (e.g. 400 for "Regular", 700 for "Bold").

### textDecoration: TextDecoration

Whether the text is underlined or has a strikethrough.

### textDecorationStyle: TextDecorationStyle | null

The text decoration style (e.g. "SOLID"). If the text is not underlined, this value will be null.

### textDecorationOffset: TextDecorationOffset | null

The text decoration offset. If the text is not underlined, this value will be null.

### textDecorationThickness: TextDecorationThickness | null

The text decoration thickness. If the text is not underlined, this value will be null.

### textDecorationColor: TextDecorationColor | null

The text decoration color. If the text is not underlined, this value will be null.

### textDecorationSkipInk: boolean | null

Whether the text decoration skips descenders. If the text is not underlined, this value will be null.

### textCase: TextCase

Overrides the case of the raw characters in the text node.

### lineHeight: LineHeight

The spacing between the lines in a paragraph of text.

### letterSpacing: LetterSpacing

The spacing between the individual characters.

### fills: Paint[]

The paints used to fill the area of the shape.

### textStyleId: string

The id of the TextStyle object that the text properties of this node are linked to

### fillStyleId: string

The id of the PaintStyle object that the fills property of this node is linked to.

### listOptions: TextListOptions

The list settings.

### listSpacing: number

The spacing between list items.

### indentation: number

The indentation.

### paragraphIndent: number

The paragraph indent.

### paragraphSpacing: number

The paragraph spacing.

### hyperlink: HyperlinkTarget | null

A HyperlinkTarget if the text node has exactly one hyperlink, or null if the node has none.

### openTypeFeatures: { readonly [feature in OpenTypeFeature]: boolean}

OpenType features that have been explicitly enabled or disabled.

### boundVariables?: { [field in VariableBindableTextField]?: VariableAlias}

The variables bound to a particular field.

### textStyleOverrides: TextStyleOverrideType[]

Overrides applied over a text style.