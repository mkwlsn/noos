const fs = require("fs");
const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const baseUrl = "https://www.figma.com/code-connect-docs/";
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });

  // Gather all relevant links by visiting each root and expanding the sidebar
  const roots = [
    "https://www.figma.com/code-connect-docs/",
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
    "https://www.figma.com/code-connect-docs/quickstart-guide/",
    "https://www.figma.com/code-connect-docs/config-file/",
  ];

  const linkSet = new Set();
  for (const root of roots) {
    await page.goto(root, { waitUntil: "domcontentloaded" });

    // Expand all sidebar sections by clicking any button with aria-expanded="false"
    let expandButtons;
    do {
      expandButtons = await page.$$('button[aria-expanded="false"]');
      for (const btn of expandButtons) {
        await btn.click();
        // Wait a little for DOM to update after expanding
        await page.waitForTimeout(100);
      }
    } while (expandButtons.length > 0);

    // Collect all href values from .menu__link, filter only /code-connect-docs/ links, exclude GitHub links
    const pageLinks = await page.$$eval(".menu__link", (els) =>
      els
        .map((a) => a.getAttribute("href"))
        .filter(
          (href) =>
            href &&
            href.startsWith("/code-connect-docs/") &&
            !href.includes("github.com")
        )
        .map((href) => `https://www.figma.com${href}`)
    );
    for (const link of pageLinks) linkSet.add(link);
  }

  const links = [...linkSet];

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
      const filename = `${outDir}/code-connect-${slug}.html`;
      fs.writeFileSync(filename, content);
      console.log(`✅ Saved page: ${slug}`);
      visited.add(slug);
    } catch (err) {
      console.warn(`⚠️ Failed to process ${slug}: ${err.message}`);
    }
  }

  const saved = visited.size;
  console.log(`\n📊 Code Connect Scrape Complete`);
  console.log(`   Pages saved: ${saved}`);
  console.log(`   Files written:`);
  for (const slug of visited) {
    console.log(`   - code-connect-${slug}.html`);
  }

  await browser.close();
})();
