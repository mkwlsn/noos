---
title: CodegenPreference
slug: CodegenPreference
source_file: plugin-api-CodegenPreference.html
source_url: https://www.figma.com/plugin-docs/api/CodegenPreference/
doc_type: plugin-api
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: a8f9e71e6434cd48
token_count: 317
---
# CodegenPreference

```
type CodegenPreference = | { itemType: 'unit' defaultScaleFactor: number scaledUnit: string default?: boolean // The languages that this preference applies to. // If omitted, will default to all languages. includedLanguages?: string[] } | { itemType: 'select' propertyName: string label: string options: { label: string; value: string; isDefault?: boolean }[] includedLanguages?: string[] } | { itemType: 'action' propertyName: string label: string includedLanguages?: string[] }
```Codegen preferences let you define custom commands for your plugin that show up in Figma's UI. These commands can run plugin code, including the ability to open an iframe, and they allow users of the plugin to customize the codegen output.

## "unit" preference

This configures whether the plugin supports a scaled unit (in addition to a pixel unit). This should only be defined once. This option will always appear at the top of the menu.

## "select" preference

This is useful to provide a simple multiple-choice option for the user. This is useful for something like custom formatting options.

## "action" preference

This is useful to open an iframe. When a user clicks on this item, the `figma.codegen.on('preferenceschange')` callback will get called.