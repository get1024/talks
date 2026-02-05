# talks

[English](README.md)

这是一个使用 pnpm 的 monorepo，用于统一管理我的所有 Slidev 项目。

## 快速开始（运行已有 Deck）

在仓库根目录执行一次依赖安装：

```bash
pnpm install
```

运行指定的 deck：

```bash
cd path/to/specific/slidev-deck
pnpm dev
```

然后打开：

- http://localhost:3030/

## 结构

- `packages/*` 存放各个 Slidev 幻灯片工程（一个目录对应一个 deck）。
- 每个 deck 都是标准的 Slidev 项目，包含自己的 `slides.md` 与主题资源。

## 基础概念（写给 monorepo 新手）

- 这是一个 pnpm workspace（见 `pnpm-workspace.yaml`），可以在一个仓库里管理多个 deck。
- `packages/*` 下的每个目录都是一个独立的 Node.js 项目，拥有自己的 `package.json`。
- 通常只需要在仓库根目录执行一次 `pnpm install` 来安装/更新依赖。
- 运行命令可以在 deck 目录内执行，也可以在仓库根目录通过“指定某个 deck”来执行。

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

- 不进入目录，直接运行某个 deck：

```bash
pnpm -C packages/<deck-folder> dev
```

```bash
pnpm --filter <deck-package-name> dev
```

- 进入目录，运行某个指定的 deck：

```bash
cd path/to/specific/slidev-deck
pnpm dev
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

下面是一套适合新手的、一步一步的新增流程。

1. 在 `packages/` 下创建一个新目录（例如：`packages/2026-02-10-my-talk`）。
2. 在该目录初始化 Slidev 项目。
3. 回到仓库根目录安装依赖。
4. 启动这个 deck。

示例：

```bash
cd packages
mkdir 2026-02-10-my-talk
cd 2026-02-10-my-talk
pnpm create slidev@latest .
```

回到仓库根目录：

```bash
cd ../..
pnpm install
```

启动它：

```bash
pnpm -C packages/2026-02-10-my-talk dev
```

补充说明：

- workspace 已经匹配了 `packages/*`，所以只要新目录放在 `packages/` 下，就会自动被纳入管理。
- 如果你用 `pnpm --filter`，这里的值是该 deck 的 `package.json` 里的 `name`（通常与目录名一致）。

完成后，根目录的构建脚本会自动包含该 deck。

## 常见问题

- 端口被占用：结束已运行的 dev 服务进程，或在 deck 目录内使用不同端口启动 Slidev。
- 找不到 `pnpm`：先安装 pnpm，再回到根目录执行 `pnpm install`。
