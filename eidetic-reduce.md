---
title: eidetic-reduce
type: ritual
status: alpha
version: 0.1
owner: ghost
created: 2025-06-26
updated: 2025-06-26
invokes: none
audience: [assistant, daemon]
stage: pre-threshold
priority: high
source: ghost/docs/rituals/eidetic-reduce.md
---

# 🧼 `eidetic-reduce` — Symbolic Memory Validation and Refinement

This ritual scans existing symbolic memory chunks (e.g. those stored in `ghostvault/`) and performs symbolic hygiene:

- Removes duplication or drift across related chunks
- Promotes or demotes chunk `status` based on quality
- Flags missing, redundant, or weak frontmatter
- Suggests merges or linkages between symbolic siblings

---

## 📂 Input

- Path to vault memory directory (e.g. `~/ghostvault/chunks/`)
- Optional filters:
  - `--origin figma-doc-scraper`
  - `--chunk_type method`
  - `--status draft`
  - `--tags tokens,theme`

---

## 📤 Output

- Updated `.md` chunks with improved frontmatter
- `eidetic-reduce.log` — detailed breakdown of changes, warnings, and suggestions
- Summary output to stdout:

```txt
eidetic reduction: 82 chunks scanned
→ 9 duplicate titles found
→ 4 chunk merges proposed
→ 17 frontmatter updates written
→ 3 ambiguous chunks flagged for review
→ total token weight reduced: 3,214
```

---

## ⚙️ CLI Invocation (proposed)

```bash
ghost eidetic reduce ~/ghostvault/chunks/
ghost eidetic reduce --origin chatgpt --status draft
```

---

## 🧠 Internal Logic

- Match by `title` and `chunk_type`
- Compare `content_hash` and token count for near-duplicate detection
- Rank chunk quality based on:
  - Presence of tags
  - Frontmatter completeness
  - Semantic depth (heuristic / LLM pass)
- Promote clean `draft` chunks to `scrubbed`
- Flag weak or untagged `scrubbed` chunks for review

---

## 🧭 Notes

This ritual can be run manually or scheduled as a daemon behavior (e.g. `eidetic-reduce --cron`).

While early-stage now, future versions may include:

- LLM-powered chunk summarization
- Auto-merge of trivial duplicates
- Recall of prior edit history via `ghost trace`
