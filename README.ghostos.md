# noos

**Universal symbolic memory compiler for ghostOS** — transforms any source into semantic chunks with rich frontmatter for the symbolic memory stack.

## 🧠 ghostOS Memory Stack

```
🔍 Sources → 🧠 noos → 🧼 eidetic-reduce → 👻 mneme → 🏛️ ghostvault
Raw Content  Compiler   Validation       Retrieval    Storage
```

**noos** is the foundational chunking engine that transforms raw content into symbolic memory units that ghostOS rituals can query, validate, and retrieve.

## 🏗️ Architecture

**4-Stage Pipeline:**

```
📡 SCRAPE → 🧼 CLEAN → ⚛️ CHUNK → 🩹 HEAL
Raw HTML    Markdown    Atomic     Memory
                       Concepts   Substrate
```

**Compiler Pattern:**

```
noos/
├── compilers/          # Source-specific compilers
│   ├── figma/         # Figma documentation compiler
│   └── [web/, docs/]  # Future: any source
├── core/              # Universal processing engine
│   ├── clean-html.js # HTML → versioned markdown
│   └── chunk-md-by-heading.js # Symbolic chunking
├── integrations/      # ghostOS memory substrate healing
│   └── eidetic-prep.js # YAML repair & schema normalization
└── schemas/           # Memory schemas
```

**Universal Output:**

- ✅ **Semantic chunks** with heading-based boundaries
- ✅ **Rich frontmatter** (chunk_type, tags, sibling_chunks)
- ✅ **Symbolic metadata** (source, content_hash, token_count)
- ✅ **eidetic-reduce ready** for validation rituals
- ✅ **mneme compatible** for retrieval queries

---

## 🚀 Quick Start

### Full Pipeline (Recommended)

```bash
npm run figdocs  # Complete end-to-end: scrape → clean → chunk
```

### Fresh Ingest Workflow

```bash
# Clean slate (delete all previous outputs)
rm -rf output/raw output/clean output/chunks

# Full fresh compilation
npm run figdocs

# Memory substrate healing
npm run eidetic-prep  # Run this after a successful pull and chunk pass
```

### Individual Stages (Development/Debugging)

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

# Stage 4: Memory substrate healing
node integrations/eidetic-prep.js
# → YAML frontmatter repair and schema normalization
# → Fixes syntax errors and ensures ghostOS compatibility
```

### Quality Monitoring

```bash
# Check processing status
grep "[ERROR]" output/chunks/*/chunk-errors.log
grep "SUCCESS" output/chunks/*/chunk-manifest.json

# Memory integrity analysis
wc -l output/chunks/*/chunk-manifest.json  # Total chunks processed
ls output/chunks/*/ | grep ".md$" | wc -l   # Successful chunks created
```

### ghostOS Integration

```bash
npm run deploy-vault    # Sync chunks to ghostvault
npm run eidetic-prep    # Memory substrate healing ritual
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

**Figma Compiler:** ✅ Complete (2,819 chunks, 99.96% integrity)  
**Core Engine:** ✅ Production-ready with comprehensive error handling  
**Memory Substrate Healing:** ✅ YAML repair & schema normalization  
**ghostOS Integration:** ✅ eidetic-reduce ready, mneme compatible  
**Future Compilers:** 📋 Web, docs, notes, conversations

**Performance Metrics:**

- **2,819 functional chunks** from comprehensive Figma documentation
- **99.96% memory integrity** (2,819/2,820 successful)
- **Comprehensive healing**: 5,595 YAML repair interventions
- **Versioned corpus**: Full diff capability between runs

Built as the **symbolic memory foundation** for the ghostOS cognition system.

---

## 📄 License

This repository is not currently open source. All rights reserved.  
For licensing inquiries, contact [mkwlsn@github.com].
