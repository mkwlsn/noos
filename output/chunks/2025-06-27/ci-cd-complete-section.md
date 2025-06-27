---
title: Complete Section
slug: ci-cd-complete-section
source_file: code-connect-ci-cd.html
source_url: 'https://www.figma.com/code-connect-docs/ci-cd/'
doc_type: code-connect
created: 2025-06-27T00:00:00.000Z
updated: 2025-06-27T00:00:00.000Z
owner: figma
version: 1
content_hash: ceac5830b488c57d
token_count: 215
chunk_title: Complete Section
chunk_slug: ci-cd-complete-section
chunk_index: 0
chunk_of_total: 1
parent_file: ci-cd.md
parent_slug: ci-cd
char_count: 752
heading_level: h2
chunk_type: guide
merge_type: atomic
tags: []
sibling_chunks: []
compiler: noos-figma
---

# Continuous Integration

The easiest way to get started using Code Connect is by using the CLI locally. However, once you have set up your first connected components, you can integrate Code Connect with your CI/CD environment to simplify maintenance and to ensure component connections are always up to date. Using GitHub actions, you can specify that you want to publish new files when any PR is merged to the main branch. We recommend only running this on pull requests that are relevant to Code Connect to minimize impact on other pull requests.

```
on: push: paths: - src/components/**/*.figma.tsx branches: - mainjobs: code-connect: name: Code Connect runs-on: ubuntu-latest steps: - run: npx figma connect publish --exit-on-unreadable-files
```
