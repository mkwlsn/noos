---
title: DetachedInfo
slug: DetachedInfo
source_file: plugin-api-DetachedInfo.html
source_url: https://www.figma.com/plugin-docs/api/DetachedInfo/
doc_type: plugin-api
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 80060d213725b808
token_count: 166
---
# DetachedInfo

```
type DetachedInfo = { type: 'local' componentId: string} | { type: 'library' componentKey: string}
```Information about detached instances. If the node is detached from a local component (a component in the same file), `type` will show `local` and `componentId` will contain the ID of this component. If the node is detached from a library component, `type` will show `library` and `componentKey` will contain the key of this component. 

`detachedInfo` will be present even if the component from which the node was detached has been deleted. It will also be present even if the user doesn't have access to the file containing that component.