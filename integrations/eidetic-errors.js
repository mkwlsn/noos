#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Native Node.js colors (no dependencies)
const colors = {
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  reset: '\x1b[0m'
};

// Icons for visual scanning
const icons = {
  error: '❌',
  warning: '⚠️',
  success: '✅',
  info: '🔍',
  health: '📊',
  fix: '💡'
};

class EideticErrorAnalyzer {
  constructor() {
    this.outputDir = path.join(process.cwd(), 'output');
    this.args = process.argv.slice(2);
    this.filters = this.parseArgs();
  }

  parseArgs() {
    const filters = {
      chunks: this.args.includes('--chunks'),
      title: this.getArgValue('--title'),
      type: this.getArgValue('--type'),
      fixYaml: this.args.includes('--fix-yaml'),
      fixTypes: this.args.includes('--fix-types'),
      trace: this.args.includes('--trace')
    };
    return filters;
  }

  getArgValue(arg) {
    const index = this.args.indexOf(arg);
    return index !== -1 && index + 1 < this.args.length ? this.args[index + 1] : null;
  }

  async findLatestRun() {
    const chunksDir = path.join(this.outputDir, 'chunks');
    if (!fs.existsSync(chunksDir)) {
      throw new Error('No chunks directory found. Run the pipeline first.');
    }

    const runs = fs.readdirSync(chunksDir)
      .filter(dir => /^\d{4}-\d{2}-\d{2}$/.test(dir))
      .sort()
      .reverse();

    if (runs.length === 0) {
      throw new Error('No dated run directories found in chunks/');
    }

    return runs[0];
  }

  async readLogs(runDate) {
    const runDir = path.join(this.outputDir, 'chunks', runDate);
    const logs = {
      chunkErrors: [],
      eideticPrep: [],
      healingSummary: ''
    };

    // Read chunk-errors.log
    const chunkErrorsPath = path.join(runDir, 'chunk-errors.log');
    if (fs.existsSync(chunkErrorsPath)) {
      const content = fs.readFileSync(chunkErrorsPath, 'utf8');
      logs.chunkErrors = content.split('\n').filter(line => line.trim());
    }

    // Read eidetic-prep.log
    const eideticPrepPath = path.join(runDir, 'eidetic-prep.log');
    if (fs.existsSync(eideticPrepPath)) {
      const content = fs.readFileSync(eideticPrepPath, 'utf8');
      logs.eideticPrep = content.split('\n').filter(line => line.trim());
    }

    // Read healing-summary.txt
    const healingSummaryPath = path.join(runDir, 'healing-summary.txt');
    if (fs.existsSync(healingSummaryPath)) {
      logs.healingSummary = fs.readFileSync(healingSummaryPath, 'utf8');
    }

    return logs;
  }

  parseChunkErrors(errorLines) {
    const errors = [];
    const warnings = [];

    errorLines.forEach(line => {
      if (line.includes('[ERROR]')) {
        errors.push(this.parseErrorLine(line));
      } else if (line.includes('[WARN]')) {
        warnings.push(this.parseErrorLine(line));
      }
    });

    return { errors, warnings };
  }

  parseErrorLine(line) {
    // Extract common patterns from error lines
    const patterns = {
      yamlError: /YAML.*syntax.*error/i,
      missingType: /missing.*chunk_type/i,
      invalidFrontmatter: /frontmatter.*invalid/i,
      tokenLimit: /token.*limit/i
    };

    let type = 'unknown';
    let file = 'unknown';

    // Try to extract filename
    const fileMatch = line.match(/([^\/\s]+\.md)/);
    if (fileMatch) {
      file = fileMatch[1];
    }

    // Classify error type
    for (const [key, pattern] of Object.entries(patterns)) {
      if (pattern.test(line)) {
        type = key;
        break;
      }
    }

    return { type, file, message: line.trim() };
  }

  calculateCorpusHealth(logs, runDir) {
    const chunkFiles = fs.readdirSync(runDir)
      .filter(file => file.endsWith('.md'))
      .length;

    const errorCount = logs.chunkErrors.filter(line => line.includes('[ERROR]')).length;
    const validChunks = chunkFiles - errorCount;
    const healthPercentage = chunkFiles > 0 ? ((validChunks / chunkFiles) * 100).toFixed(1) : 0;

    return {
      total: chunkFiles,
      valid: validChunks,
      errors: errorCount,
      percentage: healthPercentage
    };
  }

  applyFilters(errors, warnings, runDir) {
    let filteredErrors = [...errors];
    let filteredWarnings = [...warnings];

    // Filter by title (filename or chunk title)
    if (this.filters.title) {
      const titleFilter = this.filters.title.toLowerCase();
      filteredErrors = filteredErrors.filter(error => 
        error.file.toLowerCase().includes(titleFilter) ||
        this.getChunkTitle(error.file, runDir)?.toLowerCase().includes(titleFilter)
      );
      filteredWarnings = filteredWarnings.filter(warning => 
        warning.file.toLowerCase().includes(titleFilter) ||
        this.getChunkTitle(warning.file, runDir)?.toLowerCase().includes(titleFilter)
      );
    }

    // Filter by chunk type
    if (this.filters.type) {
      filteredErrors = filteredErrors.filter(error => 
        this.getChunkType(error.file, runDir) === this.filters.type
      );
      filteredWarnings = filteredWarnings.filter(warning => 
        this.getChunkType(warning.file, runDir) === this.filters.type
      );
    }

    return { errors: filteredErrors, warnings: filteredWarnings };
  }

  getChunkTitle(filename, runDir) {
    try {
      const filePath = path.join(runDir, filename);
      if (!fs.existsSync(filePath)) return null;
      
      const content = fs.readFileSync(filePath, 'utf8');
      const titleMatch = content.match(/^title:\s*(.+)$/m);
      return titleMatch ? titleMatch[1].trim() : null;
    } catch {
      return null;
    }
  }

  getChunkType(filename, runDir) {
    try {
      const filePath = path.join(runDir, filename);
      if (!fs.existsSync(filePath)) return null;
      
      const content = fs.readFileSync(filePath, 'utf8');
      const typeMatch = content.match(/^chunk_type:\s*(.+)$/m);
      return typeMatch ? typeMatch[1].trim() : null;
    } catch {
      return null;
    }
  }

  generateSummary(runDate, logs, health, runDir) {
    const { errors, warnings } = this.parseChunkErrors(logs.chunkErrors);
    const { errors: filteredErrors, warnings: filteredWarnings } = this.applyFilters(errors, warnings, runDir);
    
    // If trace mode, show detailed output
    if (this.filters.trace) {
      this.generateTraceOutput(runDate, logs, health, filteredErrors, filteredWarnings);
      return;
    }

    console.log(`${colors.blue}${icons.info} Latest Run Analysis${colors.reset} ${colors.dim}(${runDate})${colors.reset}`);
    console.log('━'.repeat(50));
    console.log();

    // Show stage status unless --chunks filter is active
    if (!this.filters.chunks) {
      console.log(`${colors.green}${icons.success} SCRAPE${colors.reset}    Status unknown (check raw/ logs)`);
      console.log(`${colors.green}${icons.success} CLEAN${colors.reset}     Status unknown (check clean/ logs)`);
    }
    
    if (filteredErrors.length > 0) {
      console.log(`${colors.red}${icons.error} CHUNKS${colors.reset}    ${filteredErrors.length} errors${filteredWarnings.length > 0 ? `, ${filteredWarnings.length} warnings` : ''}`);
    } else if (filteredWarnings.length > 0) {
      console.log(`${colors.yellow}${icons.warning} CHUNKS${colors.reset}    ${filteredWarnings.length} warnings`);
    } else {
      console.log(`${colors.green}${icons.success} CHUNKS${colors.reset}    No issues found`);
    }

    console.log();
    
    // Show filtered health info if filters are active
    if (this.filters.title || this.filters.type) {
      const totalFiltered = filteredErrors.length + filteredWarnings.length;
      const originalTotal = errors.length + warnings.length;
      console.log(`${colors.bold}${icons.health} FILTERED:${colors.reset} ${totalFiltered} issues match criteria (${originalTotal} total)`);
    } else {
      console.log(`${colors.bold}${icons.health} HEALTH:${colors.reset} ${health.valid}/${health.total} chunks valid (${health.percentage}%)`);
    }
    console.log();

    // Show specific issues
    if (filteredErrors.length > 0 || filteredWarnings.length > 0) {
      console.log('Issues found:');
      
      // Group errors by type for better presentation
      const errorsByType = {};
      filteredErrors.forEach(error => {
        if (!errorsByType[error.type]) errorsByType[error.type] = [];
        errorsByType[error.type].push(error);
      });

      Object.entries(errorsByType).forEach(([type, typeErrors]) => {
        typeErrors.forEach(error => {
          console.log(`  ${colors.red}•${colors.reset} ${error.file} - ${this.formatErrorType(type)}`);
        });
      });

      filteredWarnings.forEach(warning => {
        console.log(`  ${colors.yellow}•${colors.reset} ${warning.file} - ${this.formatErrorType(warning.type)}`);
      });

      console.log();
      this.suggestFixes(errorsByType);
    }
  }

  formatErrorType(type) {
    const typeNames = {
      yamlError: 'YAML syntax error',
      missingType: 'missing chunk_type',
      invalidFrontmatter: 'invalid frontmatter',
      tokenLimit: 'token limit exceeded',
      unknown: 'validation issue'
    };
    return typeNames[type] || type;
  }

  suggestFixes(errorsByType) {
    const suggestions = [];

    if (errorsByType.yamlError?.length > 0) {
      suggestions.push(`${icons.fix} Fix YAML syntax: npm run eidetic-errors --fix-yaml`);
    }
    if (errorsByType.missingType?.length > 0) {
      suggestions.push(`${icons.fix} Infer chunk types: npm run eidetic-errors --fix-types`);
    }
    if (Object.keys(errorsByType).length > 0) {
      suggestions.push(`${icons.fix} Re-run healing: npm run eidetic-prep`);
    }

    if (suggestions.length > 0) {
      console.log(`${colors.blue}Quick fixes available:${colors.reset}`);
      suggestions.forEach(suggestion => console.log(`   ${suggestion}`));
      console.log();
    }
  }

  generateTraceOutput(runDate, logs, health, errors, warnings) {
    console.log(`${colors.blue}${icons.info} Detailed Trace Analysis${colors.reset} ${colors.dim}(${runDate})${colors.reset}`);
    console.log('━'.repeat(50));
    console.log();

    console.log(`${colors.bold}Pipeline Status:${colors.reset}`);
    console.log(`  Raw logs: ${fs.existsSync(path.join(this.outputDir, 'raw')) ? 'Available' : 'Not found'}`);
    console.log(`  Clean logs: ${fs.existsSync(path.join(this.outputDir, 'clean', runDate)) ? 'Available' : 'Not found'}`);
    console.log(`  Chunk logs: ${logs.chunkErrors.length} error lines, ${logs.eideticPrep.length} prep lines`);
    console.log();

    console.log(`${colors.bold}Health Summary:${colors.reset}`);
    console.log(`  Total chunks: ${health.total}`);
    console.log(`  Valid chunks: ${health.valid} (${health.percentage}%)`);
    console.log(`  Errors: ${errors.length}`);
    console.log(`  Warnings: ${warnings.length}`);
    console.log();

    if (errors.length > 0) {
      console.log(`${colors.red}${colors.bold}Detailed Errors:${colors.reset}`);
      errors.forEach(error => {
        console.log(`  ${colors.red}❌ ${error.file}${colors.reset}`);
        console.log(`     Type: ${this.formatErrorType(error.type)}`);
        console.log(`     Message: ${colors.dim}${error.message}${colors.reset}`);
        console.log();
      });
    }

    if (warnings.length > 0) {
      console.log(`${colors.yellow}${colors.bold}Detailed Warnings:${colors.reset}`);
      warnings.forEach(warning => {
        console.log(`  ${colors.yellow}⚠️  ${warning.file}${colors.reset}`);
        console.log(`     Type: ${this.formatErrorType(warning.type)}`);
        console.log(`     Message: ${colors.dim}${warning.message}${colors.reset}`);
        console.log();
      });
    }

    if (logs.healingSummary) {
      console.log(`${colors.blue}${colors.bold}Healing Summary:${colors.reset}`);
      console.log(colors.dim + logs.healingSummary.slice(0, 300) + (logs.healingSummary.length > 300 ? '...' : '') + colors.reset);
    }
  }

  async run() {
    try {
      const runDate = await this.findLatestRun();
      const runDir = path.join(this.outputDir, 'chunks', runDate);
      const logs = await this.readLogs(runDate);
      const health = this.calculateCorpusHealth(logs, runDir);

      if (this.filters.fixYaml || this.filters.fixTypes) {
        console.log(`${colors.yellow}Auto-fix functionality not yet implemented.${colors.reset}`);
        console.log('This would show preview of fixes and require confirmation.');
        return;
      }

      this.generateSummary(runDate, logs, health, runDir);

    } catch (error) {
      console.error(`${colors.red}${icons.error} Error:${colors.reset} ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the analyzer
const analyzer = new EideticErrorAnalyzer();
analyzer.run();