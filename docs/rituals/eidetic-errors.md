---
ritual: eidetic-errors
status: draft
type: diagnostic
used_by: assistant, engineer
invokes: chunk-errors.log, eidetic-prep.log, healing-summary.txt
summary: Scan symbolic memory logs for chunks that failed validation or require inspection.
---

## Purpose

`eidetic-errors` wraps log inspection rituals for debugging broken, malformed, or ambiguous memory chunks. It is used to trace failures in the `figdocs` pipeline, especially when a chunk appears incomplete, unvalidated, or hallucinated.

## Inputs

- `chunk-errors.log`
- `eidetic-prep.log`
- `healing-summary.txt`

## CLI usage (TBD)

```
npm run eidetic-errors [--title "figma.showUI"] [--grep "missing chunk_type"]
```

## Outputs

- Console trace of matching chunks
- (Future) Annotated symbolic summary
