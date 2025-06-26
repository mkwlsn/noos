---
title: getStyledTextSegments
slug: TextNode-getstyledtextsegments
source_file: plugin-api-TextNode-getstyledtextsegments.html
source_url: https://www.figma.com/plugin-docs/api/TextNode-getstyledtextsegments/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: f8fde6ee93fbfc9a
token_count: 849
---
# getStyledTextSegments

Get text segments along with the desired text properties (font size, text case, etc...)

 Supported on:

- TextNode
- TextPathNode
- TextSublayerNode

## Signature

### getStyledTextSegments)[]>(fields: StyledTextSegmentFields, start?: number, end?: number): Array>

## Parameters

### fields

An array of text properties. Any text property that can apply to specific character ranges is supported:

- fontSize
- fontName
- fontWeight
- textDecoration
- textDecorationStyle
- textDecorationOffset
- textDecorationThickness
- textDecorationColor
- textDecorationSkipInk
- textCase
- lineHeight
- letterSpacing
- fills
- textStyleId
- fillStyleId
- listOptions
- listSpacing
- indentation
- paragraphIndent
- paragraphSpacing
- hyperlink
- boundVariables
- textStyleOverrides
- openTypeFeatures

### start

An optional start index for the characters to retrieve

### end

An optional end index (required if `start` is provided)

## Remarks

This function provides an easy and performant way to get multiple text properties which may have [mixed values](/plugin-docs/working-with-text/#mixed-styles), along with which characters these values apply to.
It will return an array of [`StyledTextSegment`](/plugin-docs/api/StyledTextSegment/)s containing the desired fields, along with the characters and their start and end index.

To illustrate the behavior of this function, here are a few examples:

Node containing "hello world":

```
textNode.getStyledTextSegments(['fontName'])// Output: contains 2 segments because the text is no longer bolded after "hello"[ { characters: "hello", start: 0, end: 5, fontName: { family: 'Inter', style: 'Bold' }, }, { characters: " world", start: 5, end: 11, fontName: { family: 'Inter', style: 'Regular' }, }]
```Node containing:

- Item 1Item 1.1
- Item 1.1

```
textNode.getStyledTextSegments(['fontName', 'indentation'])// Output: contains 3 segments because the font / indentation changes// before and after the second "Item"[ { characters: 'Item 1\n', start: 0, end: 7, fontName: { family: 'Inter', style: 'Regular' }, indentation: 1 }, { characters: 'Item', start: 7, end: 11, fontName: { family: 'Inter', style: 'Bold' }, indentation: 2 }, { characters: ' 1.1', start: 11, end: 15, fontName: { family: 'Inter', style: 'Regular' }, indentation: 2 }]
```Node containing "😁 😭 😅😂😳😎":

```
textNode.getStyledTextSegments(['letterSpacing'])// Output: many emoji have length 2 in Javascript[ { characters: '😁😭', start: 0, end: 4, letterSpacing: { unit: 'PERCENT', value: 50 } }, { characters: '😅😂😳😎', start: 4, end: 12, letterSpacing: { unit: 'PERCENT', value: 0 } }]textNode.getStyledTextSegments(['letterSpacing'], 1, 3)// Output: if the requested range starts or ends in the middle// of surrogate pairs, those pairs will be trimmed and you will// see raw Unicode code points[ { characters: '\uDE01\uD83D', start: 1, end: 3, letterSpacing: { unit: 'PERCENT', value: 50 } }]textNode.getStyledTextSegments(['letterSpacing'], 3, 5)// Output: similar to above, but Unicode code points span// a change in letter spacing[ { characters: '\uDE2D', start: 3, end: 4, letterSpacing: { unit: 'PERCENT', value: 50 } }, { characters: '\uD83D', start: 4, end: 5, letterSpacing: { unit: 'PERCENT', value: 0 } }]
```See [`insertCharacters`](/plugin-docs/api/properties/TextNode-insertcharacters/) for more information on surrogate pairs.