export interface AuditOptions {
  /** 要分析的网站 */
  url: string;

  /** 输出目录 */
  outputDir?: string;

  /** 是否使用无头浏览器 */
  headless?: boolean;
}

export interface AuditResult {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;

  reportPath: string;
}