const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Set reasonable viewport size
  await page.setViewportSize({ width: 1920, height: 1080 });

  const baseUrl = "https://www.figma.com/plugin-docs/api/api-reference/";
  console.log(`📡 Starting Plugin API Guide scrape from: ${baseUrl}`);
  
  await page.goto(baseUrl, { waitUntil: "networkidle" });

  const visited = new Set();
  const failedUrls = new Set();
  const outDir = "out";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  let pageCount = 0;
  let maxPages = 100; // Safety limit to prevent infinite loops
  let consecutiveFailures = 0;
  const maxConsecutiveFailures = 3;

  // Track URLs for breadcrumb validation
  const visitedUrls = new Set();
  
  while (pageCount < maxPages) {
    const currentUrl = page.url();
    
    // Enhanced validation for staying within the correct documentation path
    const urlObj = new URL(currentUrl);
    const validPaths = [
      '/plugin-docs/api/api-reference',
      '/plugin-docs/api/global-objects',
      '/plugin-docs/api/nodes',
      '/plugin-docs/api/node-properties',
      '/plugin-docs/api/data-types',
      '/plugin-docs/api/manifest',
      '/plugin-docs/api/typings'
    ];
    
    const isValidPath = validPaths.some(path => urlObj.pathname.startsWith(path));
    
    if (!isValidPath || urlObj.hostname !== "www.figma.com") {
      console.log(`⚠️ Reached invalid path: ${currentUrl} — stopping crawl.`);
      break;
    }

    // Check for circular navigation
    if (visitedUrls.has(currentUrl)) {
      console.log(`🔄 Circular navigation detected at: ${currentUrl} — stopping crawl.`);
      break;
    }
    visitedUrls.add(currentUrl);

    try {
      // Wait for content with multiple selectors as fallback
      await Promise.race([
        page.waitForSelector(".theme-doc-markdown.markdown", { timeout: 15000 }),
        page.waitForSelector(".markdown", { timeout: 15000 }),
        page.waitForSelector("main", { timeout: 15000 })
      ]);

      // Extract content with fallback selectors
      const content = await page.evaluate(() => {
        const selectors = [
          ".theme-doc-markdown.markdown",
          ".markdown", 
          "main .theme-doc-markdown",
          "article"
        ];
        
        for (const selector of selectors) {
          const element = document.querySelector(selector);
          if (element && element.innerHTML.trim().length > 50) {
            return element.innerHTML;
          }
        }
        
        // Last resort - grab main content area
        const main = document.querySelector("main");
        return main ? main.innerHTML : "";
      });

      if (!content || content.trim().length < 50) {
        console.log(`⚠️ No substantial content found on: ${currentUrl}`);
        consecutiveFailures++;
      } else {
        const slug = urlObj.pathname.split("/").filter(Boolean).pop() || "index";
        const filename = `${outDir}/plugin-api-${slug}.html`;

        if (!visited.has(slug)) {
          // Validate content quality
          const textContent = content.replace(/<[^>]*>/g, '').trim();
          if (textContent.length > 100) {
            fs.writeFileSync(filename, content);
            visited.add(slug);
            console.log(`✅ Saved page: ${slug} (${textContent.length} chars)`);
            consecutiveFailures = 0;
          } else {
            console.log(`⚠️ Insufficient content in: ${slug}`);
            consecutiveFailures++;
          }
        } else {
          console.log(`📝 Already saved: ${slug}`);
        }
      }

    } catch (error) {
      console.log(`❌ Error processing ${currentUrl}: ${error.message}`);
      failedUrls.add(currentUrl);
      consecutiveFailures++;
    }

    // Stop if too many consecutive failures
    if (consecutiveFailures >= maxConsecutiveFailures) {
      console.log(`🛑 Stopping due to ${maxConsecutiveFailures} consecutive failures`);
      break;
    }

    // Enhanced "Next" link detection with multiple strategies
    let nextLink = null;
    let nextUrl = null;

    try {
      // Strategy 1: Standard next link
      nextLink = await page.$("a.pagination-nav__link:has-text('Next')");
      
      // Strategy 2: Alternative next selectors
      if (!nextLink) {
        const nextSelectors = [
          'a[aria-label*="Next"]',
          'a.pagination-nav__link[rel="next"]',
          '.pagination-nav__link--next',
          'a:has-text("Next")'
        ];
        
        for (const selector of nextSelectors) {
          try {
            nextLink = await page.$(selector);
            if (nextLink) break;
          } catch (e) {
            // Continue trying other selectors
          }
        }
      }

      if (!nextLink) {
        console.log(`🏁 No "Next" link found on: ${currentUrl} — end of pagination`);
        break;
      }

      nextUrl = await nextLink.getAttribute("href");
      if (!nextUrl) {
        console.log(`🏁 "Next" link has no href — end of pagination`);
        break;
      }

      // Construct full URL
      const fullNextUrl = nextUrl.startsWith("http") 
        ? new URL(nextUrl) 
        : new URL(`https://www.figma.com${nextUrl}`);

      console.log(`➡️  Following next link: ${fullNextUrl.pathname}`);
      
      await page.goto(fullNextUrl.toString(), { waitUntil: "networkidle" });
      
      pageCount++;

    } catch (error) {
      console.log(`❌ Error following next link: ${error.message}`);
      break;
    }

    // Small delay to be respectful
    await page.waitForTimeout(500);
  }

  // Summary report with enhanced metrics
  const saved = visited.size;
  const failed = failedUrls.size;
  console.log(`\n📊 Plugin API Guide Scrape Complete`);
  console.log(`   Pages processed: ${pageCount}`);
  console.log(`   Pages saved: ${saved}`);
  console.log(`   Failed URLs: ${failed}`);
  console.log(`   Success rate: ${((saved / (saved + failed)) * 100).toFixed(1)}%`);
  
  if (saved > 0) {
    console.log(`   Files written:`);
    for (const slug of visited) {
      console.log(`     - plugin-api-${slug}.html`);
    }
  }

  if (failedUrls.size > 0) {
    console.log(`   ⚠️ Failed URLs:`);
    for (const url of failedUrls) {
      console.log(`     - ${url}`);
    }
  }

  await browser.close();
})();
