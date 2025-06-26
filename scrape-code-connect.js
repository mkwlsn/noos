const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Set viewport for better rendering
  await page.setViewportSize({ width: 1920, height: 1080 });

  const baseUrl = "https://www.figma.com/code-connect-docs/";
  console.log(`📡 Starting Code Connect scrape...`);

  // Expected sections based on Code Connect documentation structure
  const expectedSections = [
    "quickstart-guide", "react", "html", "swiftui", "compose", "storybook",
    "template-api", "template-v2-api", "no-parser", "custom-parsers", 
    "config-file", "ci-cd", "common-issues", "code-connect-docs"
  ];

  // Comprehensive root URLs for maximum coverage
  const roots = [
    "https://www.figma.com/code-connect-docs/",
    "https://www.figma.com/code-connect-docs/quickstart-guide/",
    "https://www.figma.com/code-connect-docs/react/",
    "https://www.figma.com/code-connect-docs/html/",
    "https://www.figma.com/code-connect-docs/swiftui/",
    "https://www.figma.com/code-connect-docs/compose/",
    "https://www.figma.com/code-connect-docs/storybook/",
    "https://www.figma.com/code-connect-docs/template-api/",
    "https://www.figma.com/code-connect-docs/template-v2-api/",
    "https://www.figma.com/code-connect-docs/no-parser/",
    "https://www.figma.com/code-connect-docs/ci-cd/",
    "https://www.figma.com/code-connect-docs/common-issues/",
    "https://www.figma.com/code-connect-docs/custom-parsers/",
    "https://www.figma.com/code-connect-docs/config-file/",
  ];

  console.log(`🔍 Discovering links from ${roots.length} root URLs...`);

  const linkSet = new Set();
  const failedRoots = new Set();

  for (const root of roots) {
    try {
      console.log(`📋 Scanning: ${root}`);
      await page.goto(root, { waitUntil: "networkidle", timeout: 30000 });

      // Enhanced sidebar expansion with multiple strategies
      try {
        // Strategy 1: Expand aria-expanded buttons
        let expandButtons;
        let attempts = 0;
        do {
          expandButtons = await page.$$('button[aria-expanded="false"]');
          for (const btn of expandButtons) {
            await btn.click();
            await page.waitForTimeout(150);
          }
          attempts++;
        } while (expandButtons.length > 0 && attempts < 5);

        // Strategy 2: Click any collapsible menu items
        await page.evaluate(() => {
          const collapsibles = document.querySelectorAll('.menu__list-item-collapsible');
          collapsibles.forEach(item => {
            const button = item.querySelector('button');
            if (button) button.click();
          });
        });

        // Wait for sidebar to populate
        await page.waitForTimeout(2000);
      } catch (e) {
        console.log(`⚠️ Could not fully expand sidebar for ${root}`);
      }

      // Enhanced link discovery with multiple selectors
      const pageLinks = await page.evaluate(() => {
        const selectors = [
          ".menu__link",
          ".toc a",
          "nav a",
          ".sidebar a", 
          ".theme-doc-sidebar a",
          "aside a"
        ];
        
        const foundLinks = new Set();
        
        for (const selector of selectors) {
          const elements = document.querySelectorAll(selector);
          elements.forEach(a => {
            const href = a.getAttribute("href") || a.href;
            if (href) foundLinks.add(href);
          });
        }
        
        return Array.from(foundLinks);
      });

      // Enhanced filtering with validation
      const validLinks = pageLinks
        .filter(href => {
          if (!href) return false;
          
          // Handle both absolute and relative URLs
          const fullUrl = href.startsWith('http') ? href : `https://www.figma.com${href}`;
          
          try {
            const url = new URL(fullUrl);
            
            // Must be figma.com
            if (url.hostname !== 'www.figma.com') return false;
            
            // Must be code-connect-docs path
            if (!url.pathname.includes('/code-connect-docs/')) return false;
            
            // Exclude external links and fragments
            if (href.includes('github.com') || href.includes('npm') || href.includes('#')) return false;
            
            return true;
          } catch (e) {
            return false;
          }
        })
        .map(href => href.startsWith('http') ? href : `https://www.figma.com${href}`);

      validLinks.forEach(link => linkSet.add(link));
      console.log(`   Found ${validLinks.length} valid links`);

    } catch (error) {
      console.log(`❌ Failed to scan ${root}: ${error.message}`);
      failedRoots.add(root);
    }
  }

  const links = Array.from(linkSet);
  console.log(`📋 Total unique links discovered: ${links.length}`);

  const visited = new Set();
  const failedPages = new Set();
  const outDir = "out";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  // Process each link with comprehensive error handling
  for (const link of links) {
    const url = new URL(link);
    const slug = url.pathname.split("/").filter(Boolean).pop() || "code-connect-docs";
    
    if (visited.has(slug)) {
      console.log(`📝 Already processed: ${slug}`);
      continue;
    }

    try {
      console.log(`🔄 Processing: ${slug}`);
      await page.goto(link, { waitUntil: "networkidle", timeout: 30000 });
      
      // Multiple content extraction strategies
      const result = await page.evaluate(() => {
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
              selector: selector,
              title: document.title || ""
            };
          }
        }
        
        return { html: "", selector: "none", title: "" };
      });

      if (!result.html || result.html.trim().length < 50) {
        console.log(`⚠️ No substantial content found for: ${slug}`);
        failedPages.add(link);
        continue;
      }

      // Content quality validation
      const textContent = result.html.replace(/<[^>]*>/g, '').trim();
      if (textContent.length < 100) {
        console.log(`⚠️ Insufficient content for: ${slug} (${textContent.length} chars)`);
        failedPages.add(link);
        continue;
      }

      const filename = `${outDir}/code-connect-${slug}.html`;
      fs.writeFileSync(filename, result.html);
      console.log(`✅ Saved: ${slug} (${textContent.length} chars, ${result.selector})`);
      visited.add(slug);

    } catch (error) {
      console.log(`❌ Failed to process ${slug}: ${error.message}`);
      failedPages.add(link);
    }

    // Small delay to be respectful
    await page.waitForTimeout(200);
  }

  // Comprehensive coverage analysis
  const foundSections = Array.from(visited);
  const missingSections = expectedSections.filter(section => !foundSections.includes(section));
  
  // Enhanced reporting
  const saved = visited.size;
  const failed = failedPages.size;
  const total = links.length;
  const coverage = expectedSections.length > 0 ? 
    ((expectedSections.length - missingSections.length) / expectedSections.length * 100).toFixed(1) : "100";

  console.log(`\n📊 Code Connect Scrape Complete`);
  console.log(`   Root URLs scanned: ${roots.length}`);
  console.log(`   Root URLs failed: ${failedRoots.size}`);
  console.log(`   Total links found: ${total}`);
  console.log(`   Pages saved: ${saved}`);
  console.log(`   Pages failed: ${failed}`);
  console.log(`   Expected sections: ${expectedSections.length}`);
  console.log(`   Expected coverage: ${coverage}%`);

  if (saved > 0) {
    console.log(`\n   ✅ Successfully saved:`);
    const sortedSlugs = Array.from(visited).sort();
    sortedSlugs.forEach(slug => console.log(`     - code-connect-${slug}.html`));
  }

  if (missingSections.length > 0) {
    console.log(`\n   ⚠️ Missing expected sections:`);
    missingSections.forEach(section => console.log(`     - ${section}`));
  }

  if (failedPages.size > 0) {
    console.log(`\n   ❌ Failed pages:`);
    const failedArray = Array.from(failedPages);
    failedArray.slice(0, 5).forEach(url => console.log(`     - ${url}`));
    if (failedArray.length > 5) {
      console.log(`     ... and ${failedArray.length - 5} more`);
    }
  }

  await browser.close();
})();
