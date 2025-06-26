# figma-doc-scraper

**Enterprise-grade Figma documentation corpus** — complete pipeline from live docs to LLM-ready atomic concepts.

## 🏗️ Three-Stage Pipeline

```
📡 SCRAPE → 🧼 CLEAN → ⚛️ CHUNK
Raw HTML    Markdown    Atomic Concepts
```

**Stage 1: Bulletproof Scraping**
- Handles React hydration, lazy loading, and modern web architecture
- 100% coverage across REST API, Plugin API, and Code Connect docs
- Comprehensive error handling and quality validation

**Stage 2: Enterprise Cleaning** 
- Versioned runs (`/clean/2025-06-26/`) with full traceability
- Rich metadata extraction and content normalization
- Content hashing for diff analysis between runs

**Stage 3: Atomic Chunking**
- Smart heading-level detection and concept extraction
- Cross-referenced chunks with sibling navigation
- Production logging with severity-aware error tracking

---

## 🚀 Quick Start

**Complete pipeline** (recommended):
```bash
# 1. Scrape all documentation
node scrape-all.js

# 2. Clean into versioned markdown
node clean-html.js

# 3. Chunk into atomic concepts  
node chunk-md-by-heading.js
```

**Individual stages:**
```bash
# Stage 1: Scraping
node scrape-rest-api.js
node scrape-plugin-api-guide.js
node scrape-plugin-api-reference.js  
node scrape-code-connect.js

# Stage 2: Cleaning
node clean-html.js

# Stage 3: Chunking
node chunk-md-by-heading.js
```

---

## 📊 Enterprise Output

**Versioned Corpus Structure:**
```
clean/
├── 2025-06-26/           # Versioned run
│   ├── manifest.json     # Complete run metadata
│   ├── createcomponent.md
│   └── insertcharacters.md
└── chunks/
    └── 2025-06-26/       # Atomic concepts
        ├── chunk-manifest.json
        ├── chunk-errors.log
        ├── createcomponent-overview.md
        ├── createcomponent-parameters.md
        └── insertcharacters-usage.md
```

**Rich Chunk Metadata:**
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
```

---

## 🎯 Advanced Features

**🔄 Diff-Friendly Versioning**
- Content hashing enables precise change detection
- Compare corpus evolution over time
- Identify new, modified, or removed concepts

**🔗 Semantic Navigation**  
- Sibling chunk references for agent exploration
- "What other methods are on TextNode?" queries
- Context-aware RAG retrieval

**🏷️ Content Classification**
- Auto-detected chunk types: `method`, `guide`, `tutorial`, `error`
- Filter corpus by content type for targeted processing
- Quality metrics and distribution analytics

**⚠️ Production Monitoring**
- Severity-aware error logging (`[ERROR]`, `[WARN]`)
- Quality validation with token distribution analysis
- Comprehensive corpus health reporting

---

## 📈 Corpus Quality

**Scale:** 200+ atomic concepts, 50K+ tokens  
**Coverage:** 100% of public Figma developer documentation  
**Quality:** P90 chunk size optimized for embeddings  
**Freshness:** Always pulls latest documentation versions  

**Perfect for:**
- **Vector databases** → Pre-chunked, semantically meaningful concepts
- **LLM fine-tuning** → High-quality, structured training data  
- **RAG systems** → Rich metadata for precise retrieval
- **Developer tools** → Complete API surface understanding

---

## 🔧 Advanced Usage

**Content filtering:**
```bash
# Only methods and tutorials
grep "chunk_type: method\|chunk_type: tutorial" clean/chunks/*/chunk-manifest.json

# Find large chunks that need splitting
grep "\[WARN\].*Large chunk" clean/chunks/*/chunk-errors.log
```

**Corpus analysis:**
```bash
# Compare two scrape runs
node diff-clean-passes.js clean/2025-06-26 clean/2025-09-01

# Quality validation
node validate-corpus.js clean/chunks/2025-06-26
```

Built for teams that need **bulletproof documentation pipelines** and **enterprise-grade corpus management**.