import { runLighthouse } from "../services/lighthouse/index.js";


export async function audit(url: string) {

  console.log(
    "🚀 Theme Performance Audit"
  );


  const result = await runLighthouse({
    url,
  });


  console.log("");

  console.log(
    `Performance: ${result.performance}`
  );

  console.log(
    `Accessibility: ${result.accessibility}`
  );

  console.log(
    `Best Practices: ${result.bestPractices}`
  );

  console.log(
    `SEO: ${result.seo}`
  );


  console.log("");

  console.log(
    `Report: ${result.reportPath}`
  );
}