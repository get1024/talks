# talks

[English](README.md)

这是一个使用 pnpm 的 monorepo，用于统一管理我的所有 Slidev 项目。

## 结构

- `packages/*` 存放各个 Slidev 幻灯片工程（一个目录对应一个 deck）。
- 每个 deck 都是标准的 Slidev 项目，包含自己的 `slides.md` 与主题资源。

## 前置条件

- Node.js（建议 LTS 版本）
- `pnpm`（本仓库使用 workspace）

## 安装

```bash
pnpm install
```

## 常用命令

在仓库根目录执行：

- 安装全部 workspace 依赖：

```bash
pnpm install
```

- 构建所有 deck：

```bash
pnpm packages:build
```

- 构建所有 deck 并设置 `--base`（用于静态部署）：

```bash
pnpm packages:build-base
```

在某个 deck 目录内执行（示例：`packages/2025-12-03-reaserch-on-design-methods`）：

- 启动本地开发服务：

```bash
pnpm dev
```

- 构建当前 deck：

```bash
pnpm build
```

- 构建并设置 base 路径（用于静态部署）：

```bash
pnpm build-base
```

- 导出 PDF/图片：

```bash
pnpm export
```

## 新增一个 Slidev Deck

1. 在 `packages/` 下创建一个新目录（例如：`packages/2026-02-10-my-talk`）。
2. 在该目录初始化 Slidev 项目。
3. 确保目录匹配 workspace 规则（`packages/*`）。

完成后，根目录的构建脚本会自动包含该 deck。
