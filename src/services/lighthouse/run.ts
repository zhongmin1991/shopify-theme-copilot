import type { AuditOptions, AuditResult } from "./types.js";

export async function runLighthouse(
  options: AuditOptions
): Promise<AuditResult> {
  console.log(`Running Lighthouse for: ${options.url}`);

  return {
    performance: 0,
    accessibility: 0,
    bestPractices: 0,
    seo: 0,
    reportPath: "",
  };
}