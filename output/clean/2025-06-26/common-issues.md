---
title: Common issues
slug: common-issues
source_file: code-connect-common-issues.html
source_url: https://www.figma.com/code-connect-docs/common-issues/
doc_type: code-connect
created: 2025-06-26
updated: 2025-06-26
owner: figma
version: 1.0
content_hash: 7ed2795613cf8945
token_count: 175
---
# Common issues

## Common issues

### Connectivity issues due to proxies or network security software

Some proxies or network security software can prevent Code Connect from communicating with Figma's servers. If you encounter issues, you may need to explicitly allow connections to `https://api.figma.com/`. If you have any feedback, please createa a [GitHub issue](https://github.com/figma/code-connect/issues/new/choose).

### 413 errors due to too large uploads

Please rerun with the `--batch-size` parameter. This will upload the Code Connect in batches of documents of batch_size length. We suggest starting with 50 and decreasing until converging on a size that works for your Code Connect.