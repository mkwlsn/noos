# noos

**Universal symbolic memory compiler for ghostOS** — transforms any source into semantic chunks with rich frontmatter for the symbolic memory stack.

## 🧠 ghostOS Memory Stack

```
🔍 Sources → 🧠 noos → 🧼 eidetic-reduce → 👻 mneme → 🏛️ ghostvault
Raw Content  Compiler   Validation       Retrieval    Storage
```

**noos** is the foundational chunking engine that transforms raw content into symbolic memory units that ghostOS rituals can query, validate, and retrieve.

## 🏗️ Architecture

**Compiler Pattern:**

```
noos/
├── compilers/          # Source-specific compilers
│   ├── figma/         # Figma documentation compiler
│   └── [web/, docs/]  # Future: any source
├── core/              # Universal chunking engine
├── schemas/           # Memory schemas
└── integrations/      # ghostOS integration
```

**Universal Output:**

- ✅ **Semantic chunks** with heading-based boundaries
- ✅ **Rich frontmatter** (chunk_type, tags, sibling_chunks)
- ✅ **Symbolic metadata** (source, content_hash, token_count)
- ✅ **eidetic-reduce ready** for validation rituals
- ✅ **mneme compatible** for retrieval queries

---

## 🚀 Quick Start

**3-Stage Pipeline** (understand the compiler):

```bash
# Stage 1: Source compilation
node compilers/figma/scrape-all.js
# → Scrapes Figma docs handling React hydration, pagination, lazy loading
# → Outputs: Raw HTML files in output/raw/

# Stage 2: Content cleaning
node core/clean-html.js
# → Converts HTML to markdown with rich frontmatter and metadata
# → Outputs: Versioned markdown in output/clean/YYYY-MM-DD/

# Stage 3: Symbolic chunking
node core/chunk-md-by-heading.js
# → Creates semantic chunks with sibling navigation and classification
# → Outputs: noos chunks ready for ghostOS in output/chunks/YYYY-MM-DD/
```

**Convenience shortcut:**

```bash
npm run figdocs  # Runs all 3 stages for Figma documentation
```

**ghostOS integration:**

```bash
npm run deploy-vault    # Sync chunks to ghostvault
npm run eidetic-prep    # Prepare for eidetic-reduce validation
```

---

## 📊 Symbolic Output

**Chunk Structure:**

```yaml
---
title: insertCharacters
slug: textnode-insertcharacters
chunk_type: method
sibling_chunks: ["textnode-deletecharacters", "textnode-getstyledtextsegments"]
tags: []
parent_file: textnode.md
content_hash: a1b2c3d4e5f6
token_count: 340
source_url: https://www.figma.com/plugin-docs/api/TextNode/
---
# insertCharacters(start, characters, style?)

Inserts characters into the text node at the specified position...
```

**Versioned Output:**

```
output/
├── raw/               # Source material (gitignored)
├── clean/             # Cleaned markdown
│   └── 2025-06-26/   # Versioned runs
└── chunks/            # Symbolic memory chunks
    └── 2025-06-26/   # Ready for ghostOS rituals
```

---

## 🎯 ghostOS Integration

**Memory Validation:**

- Chunks formatted for `eidetic-reduce` ritual
- Deduplication and drift detection ready
- Quality metrics and error logging

**Retrieval Compatibility:**

- `mneme` daemon can query by chunk_type, tags, source
- Sibling chunk navigation for semantic exploration
- Cross-source concept linking preparation

**Ritual Support:**

- Future `ghost search`, `ghost trace`, `ghost surf` commands
- Symbolic memory operations on clean, structured chunks
- Integration with broader ghostOS memory stack

---

## 🔧 Compiler Development

**Adding New Sources:**

1. Create `compilers/[source]/` directory
2. Implement source-specific scraping/extraction
3. Output to standard format for `core/` processing
4. Universal chunking engine handles the rest

**Core Engine:**

- `core/clean-html.js` — HTML → markdown normalization
- `core/chunk-md-by-heading.js` — Semantic boundary detection
- Universal frontmatter generation and metadata extraction

---

## 📈 Current Status

**Figma Compiler:** ✅ Complete (308 chunks, 100% API coverage)  
**Core Engine:** ✅ Production-ready with enterprise logging  
**ghostOS Integration:** 🚧 Ready for ritual development  
**Future Compilers:** 📋 Web, docs, notes, conversations

Built as the **symbolic memory foundation** for the ghostOS cognition system.

---

## 📄 License

This repository is not currently open source. All rights reserved.  
For licensing inquiries, contact [mkwlsn@github.com].
