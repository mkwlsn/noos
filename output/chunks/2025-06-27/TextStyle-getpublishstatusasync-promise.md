---
title: 'getPublishStatusAsync(): Promise'
slug: TextStyle-getpublishstatusasync-promise
source_file: plugin-api-TextStyle.html
source_url: 'https://www.figma.com/plugin-docs/api/TextStyle/'
doc_type: plugin-api
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: bb3a4b82805cb1e4
token_count: 300
chunk_title: 'getPublishStatusAsync(): Promise'
chunk_slug: TextStyle-getpublishstatusasync-promise
chunk_index: 12
chunk_of_total: 13
parent_file: TextStyle.md
parent_slug: TextStyle
char_count: 1049
heading_level: h3
chunk_type: method
merge_type: atomic
tags: []
sibling_chunks:
  - TextStyle-boundvariables-field-in-variablebindable
  - TextStyle-id-string-readonly
  - TextStyle-getstyleconsumersasync-promise-consumers
  - TextStyle-getplugindatakey-string-string
  - TextStyle-setplugindatakey-string-value-string-voi
  - TextStyle-getplugindatakeys-string
  - TextStyle-getsharedplugindatanamespace-string-key-
  - TextStyle-setsharedplugindatanamespace-string-key-
  - TextStyle-getsharedplugindatakeysnamespace-string-
  - TextStyle-description-string-descriptionmarkdown-s
  - TextStyle-documentationlinks-readonlyarray-remote-
  - TextStyle-key-string-readonly
compiler: noos-figma
---

Gets the status of this style/component in the team library.

## Folders

Styles can be put inside folders (including nested folders) by setting the name of the style to be a delimited path name.
For example, the following code would move a paint style named `Style 1` into a nested folder named `b`. Folder `b` resides in folder `a`. 

```
const style = figma.createPaintStyle() style.name = "a/b/Style 1"
```Folder names cannot be empty strings and they are unique within the same hierarchy. Since two nested folders can have the same name when residing in
different parent folders, we refer to folders by their absolute delimited folder name. The following function `getNamePrefix` can be used
to get the absolute folder name given a style name. 

```
const getNameParts = (name: string) => { const nameParts = name.split('/').filter((part: string) => !!part) return nameParts.map((part: string) => part.trim())}const getNamePrefix = (name: string): string => { const pathParts = getNameParts(name) pathParts.pop() return pathParts.join('/')}
```
