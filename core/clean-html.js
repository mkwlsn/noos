const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const crypto = require("crypto");

// Configuration
const BASE_MAP = {
  'rest-api': 'https://www.figma.com/developers/api#',
  'plugin-api': 'https://www.figma.com/plugin-docs/api/',
  'code-connect': 'https://www.figma.com/code-connect-docs/'
};

// Generate run timestamp
const runDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
const outDir = "output/raw";
const cleanDir = `output/clean/${runDate}`;
const manifestPath = `${cleanDir}/manifest.json`;

console.log("╔══════════════════════════════════════════════════════════════╗");
console.log("║                    FIGMA DOCS CLEANER                       ║");
console.log("║              HTML → Clean Markdown Processor                ║");
console.log("╚══════════════════════════════════════════════════════════════╝");
console.log("");

// Ensure clean directory exists
if (!fs.existsSync(cleanDir)) {
  fs.mkdirSync(cleanDir, { recursive: true });
  console.log(`📁 Created clean directory: ${cleanDir}/`);
}

// Initialize manifest for diff-friendly tracking
const manifest = {
  run_date: runDate,
  run_timestamp: new Date().toISOString(),
  source_directory: outDir,
  files_processed: 0,
  files_failed: 0,
  chunks: []
};

function detectDocType(filename) {
  if (filename.startsWith('rest-api-')) return 'rest-api';
  if (filename.startsWith('plugin-api-')) return 'plugin-api';
  if (filename.startsWith('code-connect-')) return 'code-connect';
  return 'unknown';
}

function extractSlug(filename) {
  // Remove extension and doc-type prefix
  return filename
    .replace(/\.(html|htm)$/i, '')
    .replace(/^(rest-api-|plugin-api-|code-connect-)/, '');
}

function generateSourceUrl(docType, slug) {
  const base = BASE_MAP[docType];
  if (!base) return null;
  
  // Special handling for different doc types
  switch (docType) {
    case 'rest-api':
      return `${base}${slug}`;
    case 'plugin-api':
      return `${base}${slug}/`;
    case 'code-connect':
      return `${base}${slug}/`;
    default:
      return `${base}${slug}`;
  }
}

function cleanHtml(html, docType) {
  const $ = cheerio.load(html);
  
  // Remove garbage elements and attributes
  $('*').removeAttr('class id style data-theme data-original-title aria-label aria-describedby');
  $('.hash-link, .anchor, .edit-page-link').remove();
  $('script, style, nav, .breadcrumbs').remove();
  
  // Convert hr elements to line breaks to preserve spacing
  $('hr').replaceWith('\n\n');
  
  // Clean up code blocks and inline code
  $('code').each((i, el) => {
    const $el = $(el);
    if ($el.parent().is('pre')) {
      // Block code - wrap in triple backticks
      const lang = $el.attr('class')?.match(/language-(\w+)/)?.[1] || '';
      $el.replaceWith(`\`\`\`${lang}\n${$el.text()}\n\`\`\``);
    } else {
      // Inline code - wrap in single backticks
      $el.replaceWith(`\`${$el.text()}\``);
    }
  });
  
  // Convert headers to markdown with proper spacing
  $('h1, h2, h3, h4, h5, h6').each((i, el) => {
    const $el = $(el);
    const level = el.tagName.toLowerCase();
    const hashes = '#'.repeat(parseInt(level.charAt(1)));
    $el.replaceWith(`\n\n${hashes} ${$el.text()}\n\n`);
  });
  
  // Convert lists
  $('ul').each((i, el) => {
    const $el = $(el);
    let markdown = '';
    $el.find('li').each((j, li) => {
      markdown += `- ${$(li).text()}\n`;
    });
    $el.replaceWith(markdown + '\n');
  });
  
  $('ol').each((i, el) => {
    const $el = $(el);
    let markdown = '';
    $el.find('li').each((j, li) => {
      markdown += `${j + 1}. ${$(li).text()}\n`;
    });
    $el.replaceWith(markdown + '\n');
  });
  
  // Convert links with proper spacing
  $('a').each((i, el) => {
    const $el = $(el);
    const href = $el.attr('href');
    const text = $el.text();
    if (href && text) {
      // Add line break after links to prevent concatenation with following elements
      $el.replaceWith(`[${text}](${href})\n`);
    } else {
      $el.replaceWith(text);
    }
  });
  
  // Convert paragraphs and clean up spacing
  $('p').each((i, el) => {
    const $el = $(el);
    $el.replaceWith($el.text() + '\n\n');
  });
  
  // Extract clean text and normalize whitespace
  let cleanText = $.text()
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Collapse multiple newlines
    .replace(/[ \t]+/g, ' ') // Normalize spaces
    .trim();
  
  return cleanText;
}

function generateContentHash(content) {
  return crypto.createHash('sha256').update(content).digest('hex').substring(0, 16);
}

function extractTitle(html) {
  const $ = cheerio.load(html);
  
  // Try different title selectors
  const selectors = ['h1', '.title', '.page-title', 'title'];
  for (const selector of selectors) {
    const title = $(selector).first().text().trim();
    if (title && title.length > 0) {
      return title;
    }
  }
  
  return null;
}

// Process all HTML files
console.log(`🔍 Scanning ${outDir}/ for HTML files...`);

const htmlFiles = fs.readdirSync(outDir)
  .filter(file => file.endsWith('.html'))
  .sort();

console.log(`📋 Found ${htmlFiles.length} HTML files to process\n`);

for (const filename of htmlFiles) {
  const startTime = Date.now();
  const inputPath = path.join(outDir, filename);
  
  try {
    console.log(`🔄 Processing: ${filename}`);
    
    // Extract metadata
    const docType = detectDocType(filename);
    const slug = extractSlug(filename);
    const sourceUrl = generateSourceUrl(docType, slug);
    
    // Read and process HTML
    const rawHtml = fs.readFileSync(inputPath, 'utf8');
    const title = extractTitle(rawHtml) || slug;
    const cleanContent = cleanHtml(rawHtml, docType);
    
    if (cleanContent.length < 50) {
      console.log(`   ⚠️ Skipping: insufficient content (${cleanContent.length} chars)`);
      manifest.files_failed++;
      continue;
    }
    
    // Generate content hash for diffing
    const contentHash = generateContentHash(cleanContent);
    
    // Create frontmatter
    const frontmatter = [
      '---',
      `title: ${title}`,
      `slug: ${slug}`,
      `source_file: ${filename}`,
      `source_url: ${sourceUrl || 'unknown'}`,
      `doc_type: ${docType}`,
      `created: ${runDate}`,
      `updated: ${runDate}`,
      `owner: figma`,
      `version: 1.0`,
      `content_hash: ${contentHash}`,
      `token_count: ${Math.ceil(cleanContent.length / 4)}`, // Rough estimate
      '---',
      ''
    ].join('\n');
    
    // Combine frontmatter and content
    const finalMarkdown = frontmatter + cleanContent;
    
    // Write output file
    const outputFilename = `${slug}.md`;
    const outputPath = path.join(cleanDir, outputFilename);
    fs.writeFileSync(outputPath, finalMarkdown);
    
    const processingTime = Date.now() - startTime;
    
    console.log(`   ✅ Saved: ${outputFilename} (${cleanContent.length} chars, ${processingTime}ms)`);
    
    // Add to manifest
    manifest.chunks.push({
      slug: slug,
      title: title,
      filename: outputFilename,
      source_file: filename,
      source_url: sourceUrl,
      doc_type: docType,
      content_hash: contentHash,
      char_count: cleanContent.length,
      token_count: Math.ceil(cleanContent.length / 4),
      processing_time_ms: processingTime
    });
    
    manifest.files_processed++;
    
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`);
    manifest.files_failed++;
  }
}

// Save manifest for diffing
manifest.total_chunks = manifest.chunks.length;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

// Final summary
console.log("");
console.log("╔══════════════════════════════════════════════════════════════╗");
console.log("║                     CLEANING COMPLETE                       ║");
console.log("╚══════════════════════════════════════════════════════════════╝");
console.log("");
console.log("📊 RESULTS SUMMARY");
console.log(`   📁 Output directory: ${cleanDir}/`);
console.log(`   ✅ Files processed: ${manifest.files_processed}`);
console.log(`   ❌ Files failed: ${manifest.files_failed}`);
console.log(`   📄 Total chunks: ${manifest.total_chunks}`);
console.log(`   📋 Manifest: ${manifestPath}`);
console.log("");

// Show doc type breakdown
const docTypes = {};
manifest.chunks.forEach(chunk => {
  docTypes[chunk.doc_type] = (docTypes[chunk.doc_type] || 0) + 1;
});

console.log("📂 BY DOCUMENT TYPE");
Object.entries(docTypes).forEach(([type, count]) => {
  console.log(`   ${type}: ${count} chunks`);
});

console.log("");
console.log("🎯 NEXT STEPS");
console.log("   1. Review sample files in clean/ directory");
console.log("   2. Run chunk-md-by-heading.js to split into atomic concepts");
console.log("   3. Use manifest.json for diff analysis with future runs");
console.log("");
