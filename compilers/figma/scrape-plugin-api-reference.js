const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Set viewport for better rendering
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Multiple entry points to discover all API reference links
  const entryPoints = [
    "https://www.figma.com/plugin-docs/api/global-objects/",
    "https://www.figma.com/plugin-docs/api/api-reference/",
    "https://www.figma.com/plugin-docs/api/nodes/",
    "https://www.figma.com/plugin-docs/api/node-properties/",
    "https://www.figma.com/plugin-docs/api/data-types/",
    "https://www.figma.com/plugin-docs/api/manifest/",
    "https://www.figma.com/plugin-docs/api/typings/"
  ];

  console.log(`📡 Discovering Plugin API Reference links from ${entryPoints.length} entry points...`);

  const allLinks = new Set();
  const failed = new Set();

  // Discover links from multiple entry points
  for (const entryUrl of entryPoints) {
    try {
      console.log(`🔍 Scanning: ${entryUrl}`);
      await page.goto(entryUrl, { waitUntil: "networkidle" });

      // Wait for and expand sidebar sections
      try {
        // Expand all collapsible sections
        await page.evaluate(async () => {
          const expandButtons = document.querySelectorAll('button[aria-expanded="false"]');
          for (const btn of expandButtons) {
            btn.click();
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        });
        
        // Wait for sidebar to be populated
        await page.waitForTimeout(2000);
      } catch (e) {
        console.log(`⚠️ Could not expand sidebar sections for ${entryUrl}`);
      }

      // Enhanced link discovery with multiple selectors
      const pageLinks = await page.evaluate(() => {
        const selectors = [
          ".menu__link",
          ".toc a", 
          "nav a",
          ".sidebar a",
          "aside a",
          ".theme-doc-sidebar a"
        ];
        
        const foundLinks = new Set();
        
        for (const selector of selectors) {
          const elements = document.querySelectorAll(selector);
          elements.forEach(a => {
            const href = a.href || a.getAttribute('href');
            if (href) foundLinks.add(href);
          });
        }
        
        return Array.from(foundLinks);
      });

      // Filter and validate links
      const validLinks = pageLinks.filter(href => {
        if (!href) return false;
        
        const url = new URL(href, 'https://www.figma.com');
        
        // Must be figma.com plugin docs
        if (url.hostname !== 'www.figma.com') return false;
        
        // Must be API reference path
        if (!url.pathname.includes('/plugin-docs/api/')) return false;
        
        // Exclude external links
        if (href.includes('github.com') || href.includes('npm')) return false;
        
        // Exclude certain patterns
        const excludePatterns = [
          '/plugin-docs/api/#',
          '/plugin-docs/api/global-objects/#'
        ];
        
        return !excludePatterns.some(pattern => url.pathname.includes(pattern));
      });

      validLinks.forEach(link => allLinks.add(link));
      console.log(`   Found ${validLinks.length} valid links`);

    } catch (error) {
      console.log(`❌ Failed to scan ${entryUrl}: ${error.message}`);
      failed.add(entryUrl);
    }
  }

  console.log(`📋 Total unique links discovered: ${allLinks.size}`);

  const visited = new Set();
  const failedPages = new Set();
  const outDir = "output/raw";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // Process each link with enhanced error handling
  for (const link of Array.from(allLinks)) {
    const url = new URL(link);
    const slug = url.pathname.split("/").filter(Boolean).pop() || "index";
    
    if (visited.has(slug)) {
      console.log(`📝 Already processed: ${slug}`);
      continue;
    }

    try {
      console.log(`🔄 Processing: ${slug}`);
      await page.goto(link, { waitUntil: "networkidle", timeout: 30000 });
      
      // Multiple content extraction strategies
      const content = await page.evaluate(() => {
        const selectors = [
          ".theme-doc-markdown.markdown",
          ".markdown",
          "main .theme-doc-markdown", 
          "article",
          "main",
          ".content"
        ];
        
        for (const selector of selectors) {
          const element = document.querySelector(selector);
          if (element && element.innerHTML.trim().length > 50) {
            return {
              html: element.innerHTML,
              selector: selector
            };
          }
        }
        
        return { html: "", selector: "none" };
      });

      if (!content.html || content.html.trim().length < 50) {
        console.log(`⚠️ No substantial content found for: ${slug}`);
        failedPages.add(link);
        continue;
      }

      // Content quality validation
      const textContent = content.html.replace(/<[^>]*>/g, '').trim();
      if (textContent.length < 100) {
        console.log(`⚠️ Insufficient content for: ${slug} (${textContent.length} chars)`);
        failedPages.add(link);
        continue;
      }

      const filename = `${outDir}/plugin-api-${slug}.html`;
      fs.writeFileSync(filename, content.html);
      console.log(`✅ Saved: ${slug} (${textContent.length} chars, ${content.selector})`);
      visited.add(slug);

    } catch (error) {
      console.log(`❌ Failed to process ${slug}: ${error.message}`);
      failedPages.add(link);
    }

    // Small delay to be respectful
    await page.waitForTimeout(200);
  }

  // Enhanced reporting
  const total = allLinks.size;
  const saved = visited.size;
  const failedCount = failedPages.size;
  const percent = total > 0 ? ((saved / total) * 100).toFixed(1) : "0";
  
  console.log(`\n📊 Plugin API Reference Scrape Complete`);
  console.log(`   Entry points scanned: ${entryPoints.length}`);
  console.log(`   Entry points failed: ${failed.size}`);
  console.log(`   Total links found: ${total}`);
  console.log(`   Pages saved: ${saved}`);
  console.log(`   Pages failed: ${failedCount}`);
  console.log(`   Success rate: ${percent}%`);

  if (saved > 0) {
    console.log(`\n   ✅ Successfully saved:`);
    const sortedSlugs = Array.from(visited).sort();
    sortedSlugs.forEach(slug => console.log(`     - plugin-api-${slug}.html`));
  }

  if (failedPages.size > 0) {
    console.log(`\n   ⚠️ Failed pages:`);
    const failedArray = Array.from(failedPages);
    failedArray.slice(0, 10).forEach(url => console.log(`     - ${url}`));
    if (failedArray.length > 10) {
      console.log(`     ... and ${failedArray.length - 10} more`);
    }
  }

  await browser.close();
})();
