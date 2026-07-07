import * as chromeLauncher from "chrome-launcher";

async function main() {
  console.log("🚀 Launching Chrome...");

  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless"],
  });

  console.log(`✅ Chrome started on port: ${chrome.port}`);

  chrome.kill();

  console.log("✅ Chrome closed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});