---
title: Continuous Integration
slug: ci-cd
source_file: code-connect-ci-cd.html
source_url: https://www.figma.com/code-connect-docs/ci-cd/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: ceac5830b488c57d
token_count: 188
---
# Continuous Integration

The easiest way to get started using Code Connect is by using the CLI locally. However, once you have set up your first connected components, you can integrate Code Connect with your CI/CD environment to simplify maintenance and to ensure component connections are always up to date. Using GitHub actions, you can specify that you want to publish new files when any PR is merged to the main branch. We recommend only running this on pull requests that are relevant to Code Connect to minimize impact on other pull requests.

```
on: push: paths: - src/components/**/*.figma.tsx branches: - mainjobs: code-connect: name: Code Connect runs-on: ubuntu-latest steps: - run: npx figma connect publish --exit-on-unreadable-files
```