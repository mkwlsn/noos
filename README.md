# figma-doc-scraper

**Complete Figma developer documentation harvester** — built for LLM training, RAG systems, and developer tooling that needs comprehensive API coverage.

## 📦 Coverage

Captures **100% of Figma's developer documentation** across four major areas:

- **🌐 REST API** — All endpoints, authentication, webhooks, and data structures
- **📚 Plugin Guides** — Complete tutorial documentation and implementation guides  
- **🔧 Plugin API Reference** — Every method, property, type, and object in the Plugin API
- **🔗 Code Connect** — Framework integrations (React, SwiftUI, HTML, etc.) and configuration

**Output:** 100+ structured HTML files ready for processing, each containing a complete documentation section.

---

## 🚀 Usage

**Full scrape** (recommended):
```bash
node scrape-all.js
```

**Individual sections:**
```bash
node scrape-rest-api.js
node scrape-plugin-api-guide.js  
node scrape-plugin-api-reference.js
node scrape-code-connect.js
```

All files save to `/out` with consistent naming:
- `rest-api-*.html`
- `plugin-api-*.html` 
- `code-connect-*.html`

---

## 🎯 Use Cases

**LLM Training & RAG**
- Pre-processed documentation chunks for vector databases
- Training data for Figma-specific coding assistants
- Context injection for developer chat interfaces

**Developer Tooling**
- Offline documentation for CLI tools
- API reference integration in IDEs
- Automated code generation from API specs

**Research & Analysis**
- Complete API surface analysis
- Documentation coverage auditing
- Integration complexity assessment

---

## ⚡ Output Quality

- **Comprehensive**: Captures dynamic content that standard crawlers miss
- **Structured**: Clean HTML with consistent formatting 
- **Complete**: Includes code examples, type definitions, and usage patterns
- **Fresh**: Always pulls latest documentation versions

Perfect for teams building Figma integrations, developer tools, or AI systems that need deep Figma API knowledge.