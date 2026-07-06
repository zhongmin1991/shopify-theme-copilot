import { program } from "commander";
import { audit } from "./commands/audit.js";

// 设置 CLI 基本信息
program
    .name("theme-copilot")
    .description("AI-powered Shopify Theme Performance Copilot")
    .version("0.1.0");

// 注册命令
program.command("audit").action(() => {
  audit();
});

// 开始解析命令
program.parse();