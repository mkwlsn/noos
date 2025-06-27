---
title: Configuring your project
slug: config-file
source_file: code-connect-config-file.html
source_url: https://www.figma.com/code-connect-docs/config-file/
doc_type: code-connect
created: 2025-06-27
updated: 2025-06-27
owner: figma
version: 1.0
content_hash: a055a7d8f783c4dc
token_count: 1760
---
# Configuring your project

Code Connect can be configured with a `figma.config.json` file, which must be located in your project root (e.g. alongside the `package.json` or `.xcodeproj` file).

Every platform supports some common configuration options, in addition to any platform-specific options.

## Common configuration options

### `include` and `exclude`

`include` and `exclude` are lists of globs for where to parse Code Connect files, and for where to search for your component code when using the [interactive setup](/code-connect-docs/quickstart-guide/#use-the-interactive-setup)
. `include` and `exclude` paths must be relative to the location of the config file.

```
{ "codeConnect": { "include": [], "exclude": ["test/**", "docs/**", "build/**"] }}
```

### `parser`

Code Connect tries to determine your project type by looking at the root of your project directory:

- If a `package.json` containing `react` is found, your project is detected as React
- If a `package.json` is found and doesn't contain `react`, your project is detected as HTML
- If a file matching `Package.swift` or `*.xcodeproj` is found, your project is detected as Swift
- If a file matching `build.gradle.kts` is found, your project is detected as Jetpack Compose

If your project framework isn't detected correctly, you can override the project type by using the `parser` key in your `figma.config.json` file. Valid values are `react`, `html`, `swift` and `compose`.

```
{ "codeConnect": { "parser": "react" }}
```

### `label`

`label` lets you specify the label that appears in Figma for your Code Connect snippets. The label defaults to your project type, such as `React`. Setting a different label for the snippets in Dev Mode can be useful, such as for showing different versions of the code.

For [HTML projects](/code-connect-docs/html/)
, Code Connect sets the default label based on HTML-based frameworks detected in the first ancestor `package.json` of the working directory which matches one of the following:

- If a `package.json` containing `angular` is found, the label is set to `Angular`
- If a `package.json` containing `vue` is found, the label is set to `Vue`
- Otherwise, the label is set to `Web Components`

### `interactiveSetupFigmaFileUrl`

`interactiveSetupFigmaFileUrl` allows you to specify the Figma file to use during the [interactive setup](/code-connect-docs/quickstart-guide/#use-the-interactive-setup)
. When present in your `figma.config.json` file, this URL will automatically be used as the Figma file URL for connecting components.

If you already have a `figma.config.json` file, you can add this option to the existing file.

```
{ "codeConnect": { "interactiveSetupFigmaFileUrl": "https://www.figma.com/design/abc123/my-design-system" }}
```

### `documentUrlSubstitutions`

`documentUrlSubstitutions` allows you to specify a set of substitutions that are run on the `figmaNode` URLs when parsing or publishing documents.

This lets you use multiple `figma.config.json` files to publish Code Connect snippets for different Figma files without having to modify every Code Connect file. For example, you could use substitutions to set up a testing version of your Code Connect components.

Substitutions are specified as an object, where the key is the string to be replaced, and the value is the string to replace that with.

Consider this example:

```
{ "codeConnect": { "documentUrlSubstitutions": { "https://figma.com/design/1234abcd/File-1": "https://figma.com/design/5678dcba/File-2" } }}
```The substitution in the previous example changes Figma node URLs like `https://figma.com/design/1234abcd/File-1/?node-id=12:345` to `https://figma.com/design/5678dbca/File-2/?node-id=12:345`.

## React-specific project configuration

```
{ "codeConnect": { "parser": "react", "include": [], "exclude": ["test/**", "docs/**", "build/**"], "importPaths": { "src/components/*": "@ui/components" }, "paths": { "@ui/components/*": ["src/components/*"] } }}
```

### `importPaths`

`importPaths` lets you override the relative paths that are used to import code components in your Code Connect files. Specifying an import path is useful when you want users of your design system to import components from a specific package, rather than from a directory relative to your Code Connect files. The paths must be local.

Paths are specified in the `importPaths` object, where the key is the path you want to match and override, and the value is the path to use instead.

For example, assume you have a code component, `Button.tsx` in `./src/components/` (relative to your project root). In the same directory is a corresponding Code Connect file, `Button.figma.tsx`, which looks like this:

```
import { Button } from './'figma.connect(Button, 'https://...')
```For the `Button` import, you want to override the relative path (`./`) and specify a different path to import from. In your `figma.config.json` file, you add the following:

```
{ "codeConnect": { "importPaths": { "src/components/*": "@ui/components" } }}
```In `importPaths`, the `src/components/*` key uses the `*` wildcard to include all code components in that directory along with `Button.tsx`. The value is set to `@ui/components`. The next time you use the Code Connect CLI to manage your files, the Code Connect file for `Button` is updated:

```
import { Button } from '@ui/components'
```

### `paths`

If you're using path aliases in your TypeScript project configuration, you must set `paths` in `figma.config.json` so Code Connect knows how to resolve your imports. The `paths` object in your Code Connect config file should match the `paths` object used in your project's tsconfig.json.

### `imports`

You can override the generated import statements for a connected component by passing an array of `imports`. This might be useful if the automatic resolution does not work well for your use case.

```
figma.connect(Button, "https://...", { imports: ["import { Button } from '@lib'"]})
```

## SwiftUI-specific project configuration

```
"codeConnect": { "include": [...], "exclude": [...], "xcodeprojPath": "MyProject.xcodeproj", "swiftPackagePath": "../path/to/my/Package.swift", "importMapping": { "packages/design-system/*": "DesignSystem" }}
```

### `xcodeprojPath`

The `xcodeprojPath` configuration option allows you to specify the `.xcodeproj` file associated with your project. Alternatively, if using `Package.swift` file, you can also specify the `swiftPackagePath`. Code Connect requires this file (or `Package.swift`) in order to locate the Code Connect package and build the language support binary. Code Connect defaults to using the first `.xcodeproj` file it finds, which should work for most projects, but if you encounter errors and have more than one `.xcodeproj` file, you can use this option to point Code Connect to the correct one.

### `importMapping`

The `importMapping` configuration option is used to ensure Code Connect can correctly locate your imports as well as display the correct imports within Dev Mode.