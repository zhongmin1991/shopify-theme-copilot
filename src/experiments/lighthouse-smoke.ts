import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";

async function main() {
  console.log("🚀 Launching Chrome...");

  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless"],
  });

  try {
    console.log(`✅ Chrome started on port ${chrome.port}`);

    console.log("🚀 Running Lighthouse...");

    const runnerResult = await lighthouse("https://shopify.dev", {
      logLevel: "info",
      output: "html",
      onlyCategories: ["performance"],
      port: chrome.port,
    });

    if (!runnerResult) {
      throw new Error("Lighthouse returned no result.");
    }

    console.log("");
    console.log(
      "URL:",
      runnerResult.lhr.finalDisplayedUrl
    );

    const performance = runnerResult.lhr.categories.performance;

    if (!performance || performance.score == null) {
        throw new Error("Performance category is missing.");
    }

    const score = Math.round(performance.score * 100);

    console.log("Performance Score:", score);
  } finally {
    chrome.kill();
    console.log("✅ Chrome closed.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});