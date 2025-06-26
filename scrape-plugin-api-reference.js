const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const baseUrl = "https://www.figma.com/plugin-docs/api/global-objects/";
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });

  // Grab all sidebar API reference links
  const links = await page.$$eval(".menu__link", (els) =>
    els
      .map((a) => a.href)
      .filter(
        (href) =>
          href.includes("/plugin-docs/api/") &&
          !href.includes("/global-objects") &&
          !href.includes("https://github.com")
      )
  );

  const visited = new Set();
  const outDir = "out";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  for (const link of links) {
    const url = new URL(link);
    const slug = url.pathname.split("/").filter(Boolean).pop() || "index";
    if (visited.has(slug)) continue;

    try {
      await page.goto(link, { waitUntil: "domcontentloaded" });
      await page.waitForSelector(".theme-doc-markdown.markdown", {
        timeout: 10000,
      });
      const content = await page.$eval(
        ".theme-doc-markdown.markdown",
        (el) => el.innerHTML
      );
      const filename = `${outDir}/plugin-api-${slug}.html`;
      fs.writeFileSync(filename, content);
      console.log(`✅ Saved page: ${slug}`);
      visited.add(slug);
    } catch (err) {
      console.warn(`⚠️ Failed to process ${slug}: ${err.message}`);
    }
  }

  const total = links.length;
  const saved = visited.size;
  const percent = ((saved / total) * 100).toFixed(1);
  console.log(`\n📊 Plugin API Reference Scrape Complete`);
  console.log(`   Pages found: ${total}`);
  console.log(`   Pages saved: ${saved}`);
  console.log(`   Coverage:    ${percent}%\n`);
  await browser.close();
})();
