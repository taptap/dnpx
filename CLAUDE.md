# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是 `dnpx` - Deno 版本的 `npx` 工具，允许直接运行 npm 包而无需安装。

## 架构

该项目采用极简架构：

- `src/mod.ts`: 核心功能模块，导出 `run()` 函数，接收命令行参数并通过 `Deno.Command` 执行 `npm:` 包
- `src/cli.ts`: CLI 入口点，简单调用 `mod.ts` 中的 `run()` 函数

核心逻辑是将 `dnpx <package>` 命令转换为 `deno run -A npm:<package>` 执行。

## 常用命令

### 开发

```bash
# 运行 lint
deno lint

# 测试 CLI（示例）
deno run -A src/cli.ts prettier@latest --version
```

### 发布

```bash
# 发布到 JSR
deno publish
```

## 使用方式

1. **命令行安装**: `deno install -A -n dnpx jsr:@taptap/dnpx/cli`
2. **项目任务**: 在 `deno.json` 中配置 `"x": "deno run -A jsr:@taptap/dnpx/cli $*"`
3. **程序调用**: `import { run } from "@taptap/dnpx"`