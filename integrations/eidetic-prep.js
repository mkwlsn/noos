#!/usr/bin/env node

/**
 * eidetic-prep.js
 * 
 * Memory substrate healing ritual for ghostOS symbolic memory.
 * Performs surgical repair with measurement and ritual lineage tracking.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const matter = require('gray-matter');

const NOOS_OUTPUT_DIR = path.join(__dirname, '..', 'output', 'chunks');
const CLEAN_CHUNKS_DIR = path.join(__dirname, '..', 'clean', 'chunks');

// Memory healing configuration
const FIGMA_API_PATTERNS = {
  property: /^### \w+: .+ \[readonly\]$/,
  method: /^### \w+\([^)]*\): \w+$/,
  type_literal: /^### type: '[^']+' \[readonly\]$/,
  event: /^### on\w+: EventHandler$/
};

const REQUIRED_SCHEMA_FIELDS = {
  title: 'string',
  slug: 'string', 
  chunk_type: 'string',
  content_hash: 'string',
  compiler: 'string',
  created: 'string',
  version: 'string'
};

// Memory event logging
const memoryEventStream = [];
const healingLog = [];

/**
 * Shared error interface for ritual memory events
 */
function eideticError({ stage, code, message, file, context, data = {} }) {
  const memoryEvent = {
    timestamp: new Date().toISOString(),
    stage,
    level: 'INTERVENTION',
    code,
    message,
    file,
    context,
    ritual_source: 'eidetic-prep',
    data
  };
  
  console.log(`--[${stage.toUpperCase()}] ${code}: ${message}`);
  memoryEventStream.push(memoryEvent);
  healingLog.push(`--[${new Date().toISOString()}] ${stage}/${code}: ${message}`);
}

/**
 * Generate content hash for chunk identity
 */
function generateContentHash(content) {
  return crypto.createHash('sha256').update(content).digest('hex').substring(0, 16);
}

/**
 * Check if chunk matches Figma API patterns and should be preserved
 */
function shouldPreserveAPIChunk(chunk) {
  for (const [type, pattern] of Object.entries(FIGMA_API_PATTERNS)) {
    if (pattern.test(chunk.title || '')) {
      return { preserve: true, api_type: type, min_size_override: true };
    }
  }
  return { preserve: false };
}

/**
 * Diagnose memory corruption in chunk corpus
 */
function diagnoseMemoryCorruption(chunks) {
  const corruption = {
    malformed_headings: 0,
    missing_schema_fields: 0,
    api_chunks_at_risk: 0,
    field_drift: 0,
    total_chunks: chunks.length,
    timestamp: new Date().toISOString()
  };
  
  chunks.forEach(chunk => {
    // Check for malformed headings in content
    if (chunk.content && chunk.content.includes(')###')) {
      corruption.malformed_headings++;
    }
    
    // Check for missing required schema fields
    for (const field of Object.keys(REQUIRED_SCHEMA_FIELDS)) {
      if (!chunk.frontmatter || !chunk.frontmatter[field]) {
        corruption.missing_schema_fields++;
        break;
      }
    }
    
    // Check for API chunks that might need preservation
    const preservation = shouldPreserveAPIChunk({ title: chunk.frontmatter?.title });
    if (preservation.preserve) {
      corruption.api_chunks_at_risk++;
    }
    
    // Check for field drift
    if (chunk.frontmatter?.on || (chunk.frontmatter?.merged_titles && !chunk.frontmatter?.merge_type)) {
      corruption.field_drift++;
    }
  });
  
  return corruption;
}

/**
 * Repair malformed headings in content
 */
function repairMalformedHeadings(content, filename) {
  if (!content || typeof content !== 'string') return content;
  
  const malformedPattern = /\)\s*###/g;
  const matches = content.match(malformedPattern);
  
  if (matches) {
    eideticError({
      stage: 'repair',
      code: 'MALFORMED_HEADING_REPAIRED',
      message: `Fixed ${matches.length} malformed heading(s)`,
      file: filename,
      context: 'heading_format_correction'
    });
    
    return content.replace(malformedPattern, ')\n\n###');
  }
  
  return content;
}

/**
 * Add missing required schema fields
 */
function normalizeSchemaFields(frontmatter, filename, content) {
  const normalized = { ...frontmatter };
  let changes = 0;
  
  // Add missing required fields with safe defaults
  if (!normalized.compiler) {
    normalized.compiler = 'noos-figma';
    changes++;
  }
  
  if (!normalized.created) {
    normalized.created = new Date().toISOString();
    changes++;
  }
  
  if (!normalized.version) {
    normalized.version = '1.0.0';
    changes++;
  }
  
  if (!normalized.content_hash && content) {
    normalized.content_hash = generateContentHash(content);
    changes++;
  }
  
  // Remove field drift
  if (normalized.on) {
    delete normalized.on;
    changes++;
    eideticError({
      stage: 'repair',
      code: 'FIELD_DRIFT_REMOVED',
      message: 'Removed erroneous "on" field',
      file: filename,
      context: 'schema_normalization'
    });
  }
  
  if (changes > 0) {
    eideticError({
      stage: 'repair',
      code: 'SCHEMA_FIELDS_NORMALIZED',
      message: `Added ${changes} missing required field(s)`,
      file: filename,
      context: 'schema_compliance'
    });
  }
  
  return normalized;
}

/**
 * Repair corrupted YAML frontmatter
 */
function repairYAMLFrontmatter(fileContent, filename) {
  const lines = fileContent.split('\n');
  let fixed = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Fix fields that contain special characters and break YAML parsing
    const fieldPatterns = [
      { prefix: 'title: ', prefixLen: 7 },
      { prefix: 'slug: ', prefixLen: 6 },
      { prefix: 'chunk_title: ', prefixLen: 13 },
      { prefix: 'chunk_slug: ', prefixLen: 12 },
      { prefix: 'parent_file: ', prefixLen: 13 },
      { prefix: 'parent_slug: ', prefixLen: 13 }
    ];
    
    for (const { prefix, prefixLen } of fieldPatterns) {
      if (line.startsWith(prefix) && !line.match(new RegExp(`^${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`)) && line.includes(': ') && line.length > prefixLen) {
        const fieldValue = line.substring(prefixLen);
        
        // If field contains special chars and isn't already quoted, quote it
        if ((fieldValue.includes(':') || fieldValue.includes('(') || fieldValue.includes('[') || fieldValue.includes('+')) && !fieldValue.match(/^["'].*["']$/)) {
          lines[i] = `${prefix}"${fieldValue.replace(/"/g, '\\"')}"`;
          fixed = true;
          break;
        }
      }
    }
    
    // Fix malformed YAML arrays (like sibling_chunks with trailing commas or wrong format)
    if (line.trim().startsWith('- ') && line.includes(',')) {
      // Remove trailing commas from YAML array items
      const cleanedLine = line.replace(/,\s*$/, '');
      if (cleanedLine !== line) {
        lines[i] = cleanedLine;
        fixed = true;
      }
    }
    
    // Fix inline arrays that should be proper YAML arrays
    if (line.includes(': [') && line.includes(']')) {
      const colonIndex = line.indexOf(':');
      const fieldName = line.substring(0, colonIndex + 1);
      const arrayContent = line.substring(colonIndex + 1).trim();
      
      // Extract array items from inline format [\"item1\", \"item2\"]
      if (arrayContent.match(/^\s*\[.*\]\s*$/)) {
        try {
          const arrayItems = JSON.parse(arrayContent);
          if (Array.isArray(arrayItems) && arrayItems.length > 0) {
            // Convert to proper YAML array format
            lines[i] = fieldName;
            const yamlArrayLines = arrayItems.map(item => `  - "${item}"`);
            lines.splice(i + 1, 0, ...yamlArrayLines);
            fixed = true;
            i += yamlArrayLines.length; // Skip the newly inserted lines
          }
        } catch (e) {
          // If JSON parsing fails, leave as is
        }
      }
    }
    
    // Fix improperly formatted arrays that span multiple lines incorrectly
    if (line.match(/^\s*\[\s*"/) && !line.includes(']')) {
      // Multi-line array starting with [ but not ending with ]
      let j = i + 1;
      let arrayLines = [line];
      
      // Collect all lines until we find the closing ]
      while (j < lines.length && !lines[j].includes(']')) {
        arrayLines.push(lines[j]);
        j++;
      }
      
      if (j < lines.length && lines[j].includes(']')) {
        arrayLines.push(lines[j]);
        
        // Try to parse the combined array
        const combinedArray = arrayLines.join('').trim();
        try {
          const parsed = JSON.parse(combinedArray);
          if (Array.isArray(parsed)) {
            // Find the field name from the previous line
            let fieldLine = i - 1;
            while (fieldLine >= 0 && !lines[fieldLine].includes(':')) {
              fieldLine--;
            }
            
            if (fieldLine >= 0) {
              // Convert to proper YAML array
              const yamlArrayLines = parsed.map(item => `  - "${item}"`);
              lines.splice(i, j - i + 1, ...yamlArrayLines);
              fixed = true;
              i += yamlArrayLines.length - 1;
            }
          }
        } catch (e) {
          // If parsing fails, leave as is
        }
      }
    }
  }
  
  if (fixed) {
    eideticError({
      stage: 'load',
      code: 'YAML_FRONTMATTER_REPAIRED',
      message: 'Fixed YAML frontmatter syntax errors',
      file: filename,
      context: 'yaml_parsing'
    });
  }
  
  return lines.join('\n');
}

/**
 * Load and parse all chunk files from directory
 */
function loadChunkCorpus(sourceDir) {
  const chunks = [];
  const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.md'));
  
  console.log(`--📖 Loading ${files.length} chunk files...`);
  
  files.forEach(filename => {
    try {
      const filepath = path.join(sourceDir, filename);
      let fileContent = fs.readFileSync(filepath, 'utf8');
      
      // Attempt to repair YAML frontmatter before parsing
      fileContent = repairYAMLFrontmatter(fileContent, filename);
      
      const parsed = matter(fileContent);
      
      chunks.push({
        filename,
        filepath,
        frontmatter: parsed.data,
        content: parsed.content,
        originalRaw: fileContent,
        yamlRepaired: fileContent !== fs.readFileSync(filepath, 'utf8')
      });
    } catch (error) {
      eideticError({
        stage: 'load',
        code: 'CHUNK_LOAD_FAILED',
        message: `Failed to load chunk: ${error.message}`,
        file: filename,
        context: 'corpus_loading'
      });
      
      // Try to salvage what we can from corrupted chunks
      try {
        const filepath = path.join(sourceDir, filename);
        const rawContent = fs.readFileSync(filepath, 'utf8');
        
        chunks.push({
          filename,
          filepath,
          frontmatter: {},
          content: rawContent,
          originalRaw: rawContent,
          corrupted: true
        });
      } catch (salvageError) {
        // File completely unreadable
      }
    }
  });
  
  return chunks;
}

/**
 * Perform healing ritual on chunk corpus
 */
function performHealingRitual(chunks) {
  const healed = [];
  
  console.log(`--🩺 Performing healing ritual on ${chunks.length} chunks...`);
  
  chunks.forEach(chunk => {
    try {
      // Repair malformed headings
      const repairedContent = repairMalformedHeadings(chunk.content, chunk.filename);
      
      // Normalize schema fields
      const normalizedFrontmatter = normalizeSchemaFields(
        chunk.frontmatter, 
        chunk.filename, 
        repairedContent
      );
      
      // Check API preservation
      const preservation = shouldPreserveAPIChunk({ title: normalizedFrontmatter.title });
      if (preservation.preserve) {
        normalizedFrontmatter.api_type = preservation.api_type;
        normalizedFrontmatter.preserve_small_chunk = true;
      }
      
      healed.push({
        ...chunk,
        frontmatter: normalizedFrontmatter,
        content: repairedContent,
        healed: true
      });
      
    } catch (error) {
      eideticError({
        stage: 'heal',
        code: 'HEALING_FAILED',
        message: `Healing failed: ${error.message}`,
        file: chunk.filename,
        context: 'ritual_intervention'
      });
      
      healed.push({ ...chunk, healed: false });
    }
  });
  
  return healed;
}

/**
 * Write healed chunks to output directory
 */
function writeHealedChunks(healedChunks, outputDir) {
  console.log(`--💾 Writing ${healedChunks.length} healed chunks to ${outputDir}...`);
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    eideticError({
      stage: 'write',
      code: 'OUTPUT_DIR_CREATED',
      message: `Created output directory: ${outputDir}`,
      file: null,
      context: 'directory_structure'
    });
  }
  
  let written = 0;
  
  healedChunks.forEach(chunk => {
    try {
      const outputPath = path.join(outputDir, chunk.filename);
      const healedContent = matter.stringify(chunk.content, chunk.frontmatter);
      
      fs.writeFileSync(outputPath, healedContent, 'utf8');
      written++;
      
    } catch (error) {
      eideticError({
        stage: 'write',
        code: 'CHUNK_WRITE_FAILED',
        message: `Failed to write chunk: ${error.message}`,
        file: chunk.filename,
        context: 'file_output'
      });
    }
  });
  
  console.log(`--✅ Successfully wrote ${written}/${healedChunks.length} healed chunks`);
  return written;
}

/**
 * Generate comprehensive healing report
 */
function generateHealingReport(baseline, postHealing, outputDir) {
  const report = {
    ritual: 'eidetic-prep',
    timestamp: new Date().toISOString(),
    baseline_corruption: baseline,
    post_healing_status: postHealing,
    healing_interventions: memoryEventStream.length,
    memory_events: memoryEventStream,
    healing_log: healingLog,
    
    summary: {
      malformed_headings_fixed: baseline.malformed_headings - (postHealing.malformed_headings || 0),
      schema_fields_normalized: memoryEventStream.filter(e => e.code === 'SCHEMA_FIELDS_NORMALIZED').length,
      api_chunks_preserved: memoryEventStream.filter(e => e.code === 'API_CHUNK_PRESERVED').length,
      total_interventions: memoryEventStream.length
    }
  };
  
  // Write healing report
  const reportPath = path.join(outputDir, 'eidetic-prep.log');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  
  // Write simplified log for console
  const logPath = path.join(outputDir, 'healing-summary.txt');
  const logContent = healingLog.join('\n');
  fs.writeFileSync(logPath, logContent, 'utf8');
  
  return report;
}

/**
 * Main memory substrate healing ritual
 */
async function ritualMemoryRepair() {
  const args = process.argv.slice(2);
  const validateOnly = args.includes('--validate-only');
  const inPlace = args.includes('--in-place');
  const strict = args.includes('--strict');
  
  console.log('🧠 Memory Substrate Healing Ritual');
  console.log('===================================');
  console.log(`Mode: ${validateOnly ? 'Validation Only' : inPlace ? 'In-Place Repair' : 'Safe Repair'}`);
  console.log('');
  
  try {
    // Find source chunks (check both clean and output directories)
    let sourceDir;
    const outputDirs = fs.existsSync(NOOS_OUTPUT_DIR) ? 
      fs.readdirSync(NOOS_OUTPUT_DIR).filter(dir => dir.match(/\d{4}-\d{2}-\d{2}/)).sort().reverse() : [];
    const cleanDirs = fs.existsSync(CLEAN_CHUNKS_DIR) ?
      fs.readdirSync(CLEAN_CHUNKS_DIR).filter(dir => dir.match(/\d{4}-\d{2}-\d{2}/)).sort().reverse() : [];
    
    if (outputDirs.length > 0) {
      sourceDir = path.join(NOOS_OUTPUT_DIR, outputDirs[0]);
      console.log(`📂 Found chunks in output directory: ${sourceDir}`);
    } else if (cleanDirs.length > 0) {
      sourceDir = path.join(CLEAN_CHUNKS_DIR, cleanDirs[0]);
      console.log(`📂 Found chunks in clean directory: ${sourceDir}`);
      console.log(`⚠️  Warning: Using clean directory - chunks should be in output/chunks/`);
    } else {
      console.log('❌ No chunk directories found in output/chunks/ or clean/chunks/');
      process.exit(1);
    }
    
    // Phase 1: Load corpus and diagnose corruption
    console.log('');
    console.log('🔍 Phase 1: Memory Corruption Diagnosis');
    console.log('---------------------------------------');
    
    const chunks = loadChunkCorpus(sourceDir);
    const baseline = diagnoseMemoryCorruption(chunks);
    
    console.log(`📊 Baseline corruption analysis:`);
    console.log(`   • Total chunks: ${baseline.total_chunks}`);
    console.log(`   • Malformed headings: ${baseline.malformed_headings}`);
    console.log(`   • Missing schema fields: ${baseline.missing_schema_fields}`);
    console.log(`   • API chunks at risk: ${baseline.api_chunks_at_risk}`);
    console.log(`   • Field drift issues: ${baseline.field_drift}`);
    
    if (validateOnly) {
      console.log('');
      console.log('🧐 Validation-only mode: No repairs performed');
      
      if (strict && (baseline.malformed_headings > 0 || baseline.missing_schema_fields > 0)) {
        console.log('❌ Strict mode: Validation failed due to corruption');
        process.exit(1);
      }
      
      console.log('✅ Validation complete');
      return;
    }
    
    // Phase 2: Perform healing ritual
    console.log('');
    console.log('🩺 Phase 2: Surgical Memory Repair');
    console.log('----------------------------------');
    
    const healedChunks = performHealingRitual(chunks);
    
    // Phase 3: Validate healing results
    console.log('');
    console.log('🔬 Phase 3: Post-Healing Validation');
    console.log('-----------------------------------');
    
    const postHealing = diagnoseMemoryCorruption(healedChunks);
    
    console.log(`📈 Healing results:`);
    console.log(`   • Malformed headings: ${baseline.malformed_headings} → ${postHealing.malformed_headings}`);
    console.log(`   • Missing schema fields: ${baseline.missing_schema_fields} → ${postHealing.missing_schema_fields}`);
    console.log(`   • Memory interventions: ${memoryEventStream.length}`);
    
    // Phase 4: Write healed chunks
    console.log('');
    console.log('💾 Phase 4: Memory Substrate Reconstruction');
    console.log('-------------------------------------------');
    
    const latestDir = sourceDir.split('/').pop();
    const outputDir = inPlace ? sourceDir : path.join(NOOS_OUTPUT_DIR, latestDir);
    
    const written = writeHealedChunks(healedChunks, outputDir);
    
    // Phase 5: Generate comprehensive report
    const report = generateHealingReport(baseline, postHealing, outputDir);
    
    console.log('');
    console.log('📋 Memory Healing Ritual Complete');
    console.log('=================================');
    console.log(`✅ Healed ${written} chunks with ${memoryEventStream.length} interventions`);
    console.log(`📊 Report saved: ${path.join(outputDir, 'eidetic-prep.log')}`);
    console.log(`📝 Summary: ${path.join(outputDir, 'healing-summary.txt')}`);
    
    if (report.summary.malformed_headings_fixed > 0) {
      console.log(`🔧 Fixed ${report.summary.malformed_headings_fixed} malformed headings`);
    }
    
    if (report.summary.schema_fields_normalized > 0) {
      console.log(`📋 Normalized schema fields in ${report.summary.schema_fields_normalized} chunks`);
    }
    
    console.log('');
    console.log('🧠 Memory substrate is now ready for eidetic-reduce validation');
    
  } catch (error) {
    console.error('❌ Memory healing ritual failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Backward compatibility alias
async function prepareForEidetic() {
  return ritualMemoryRepair();
}

if (require.main === module) {
  ritualMemoryRepair();
}

module.exports = { prepareForEidetic, ritualMemoryRepair };