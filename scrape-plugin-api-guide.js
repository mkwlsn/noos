const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const baseUrl = "https://www.figma.com/plugin-docs/api/api-reference/";
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });

  const visited = new Set();
  const outDir = "out";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  while (true) {
    await page.waitForSelector(".theme-doc-markdown.markdown", {
      timeout: 10000,
    });
    const content = await page.$eval(
      ".theme-doc-markdown.markdown",
      (el) => el.innerHTML
    );
    const slug =
      new URL(page.url()).pathname.split("/").filter(Boolean).pop() || "index";
    const filename = `${outDir}/plugin-api-${slug}.html`;

    if (!visited.has(slug)) {
      fs.writeFileSync(filename, content);
      visited.add(slug);
      console.log(`✅ Saved page: ${slug}`);
    }

    // Try to find "Next" pagination link
    const nextLink = await page.$("a.pagination-nav__link:has-text('Next')");
    if (!nextLink) break;

    const nextUrl = await nextLink.getAttribute("href");
    if (!nextUrl) break;

    const fullNextUrl = new URL(`https://www.figma.com${nextUrl}`);
    if (fullNextUrl.hostname !== "www.figma.com") {
      console.log(
        `⚠️ Reached external page: ${fullNextUrl.hostname} — stopping crawl.`
      );
      break;
    }

    await page.goto(fullNextUrl.toString(), { waitUntil: "domcontentloaded" });
  }

  const saved = visited.size;
  console.log(`\n📊 Plugin API Guide Scrape Complete`);
  console.log(`   Pages saved: ${saved}`);
  console.log(`   Files written:`);
  for (const slug of visited) {
    console.log(`   - plugin-api-${slug}.html`);
  }

  await browser.close();
})();
