---
sidebar_position: 5
title: 部署 Docusaurus 网站
description: 详细介绍如何使用 GitHub Pages 和 Netlify 部署 Docusaurus 网站
---

# 部署 Docusaurus 网站

Docusaurus 提供了多种简单的方式来部署网站，其中最常见的两种是通过 **GitHub Pages** 和 **Netlify** 部署。这里我们将详细讲解这两种方法。

## 1.使用 GitHub Pages 部署

**GitHub Pages** 是一个免费的静态页面托管服务，可以轻松将 Docusaurus 网站部署到 GitHub 上。部署的过程可以分为以下几个步骤：

### 配置 `docusaurus.config.js`

首先，确保你在 `docusaurus.config.js` 配置文件中设置了正确的 `baseUrl`。如果你打算将网站部署到 GitHub Pages，请设置 `baseUrl` 为你的 GitHub 仓库路径（例如，如果你的仓库名称为 `my-website`，那么 `baseUrl` 应设置为 `/my-website/`）。

```TypeScript
const config = {
  title: '我的网站', // 网站标题
  tagline: 'Docusaurus 网站',
  url: 'https://<your-github-username>.github.io', // GitHub 页面 URL
  baseUrl: '/my-website/', // 这是 GitHub Pages 的路径，确保与仓库名称匹配
  // 其他配置...
}
```

### 构建网站

在项目根目录下运行 `npm run build` 或 `pnpm run build`，此命令会生成一个 `build` 文件夹，里面包含了网站的所有静态资源。

```TypeScript
npm run build
```

### 配置 GitHub Actions 自动部署

你可以使用 **GitHub Actions** 来自动化部署过程。首先，确保你的项目已经与 GitHub 仓库连接，并且该仓库已经包含 `.github/workflows` 文件夹。

在 `.github/workflows` 文件夹下创建一个部署文件 `deploy.yml`，配置 GitHub Actions 自动构建和部署：

```TypeScript
name: Deploy Docusaurus website to GitHub Pages

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      # 1. 检出代码
      - name: Checkout repository
        uses: actions/checkout@v2

      # 2. 安装 pnpm
      - name: Setup pnpm
        run: npm install -g pnpm

      # 3. 安装依赖
      - name: Install dependencies
        run: pnpm install

      # 4. 构建网站
      - name: Build the website
        run: pnpm run build

      # 5. 强制清理 Git 缓存和工作区
      - name: Cleanup Git workspace
        run: |
          git worktree prune
          git gc --prune=now
          rm -rf github-pages-deploy-action-temp-deployment-folder || true

      # 6. 部署到 GitHub Pages
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages #构建完成会创建该分支
          folder: build
          clean: true
          debug: true
          token: ${{ secrets.GITHUB_TOKEN }}
```

这个文件将会在每次将更改推送到 `main` 分支时，自动构建并将网站部署到 `gh-pages` 分支。

## 2. 部署网站

推送代码到 GitHub 仓库的 `main` 分支后，GitHub Actions 会自动触发部署流程，将网站推送到 `gh-pages` 分支。

确保你已经在 GitHub 仓库的 **Settings** > **Pages** 中，选择了 `gh-pages` 分支作为 GitHub Pages 的发布源。

## 使用 Netlify 部署

Netlify 是一个非常方便且快速的部署工具，支持持续集成和自动化部署。以下是使用 Netlify 部署 Docusaurus 网站的步骤：

### 创建 Netlify 账户并连接 GitHub

首先，确保你在 [Netlify](https://www.netlify.com/) 上注册了账户，并通过 GitHub 登录。然后，选择  **New site from Git** ，选择你的 GitHub 仓库进行连接。

### 配置构建设置

在 **Deploy settings** 中，Netlify 会要求你配置构建命令和发布目录：

* **Build Command** ：`npm run build` 或 `pnpm run build`（取决于你使用的包管理工具）
* **Publish Directory** ：`build`（这是 Docusaurus 默认的输出目录）

可以使用以下命令：

```TypeScript
pnpm run build
```

Netlify 会自动使用 `build` 目录中的静态资源进行发布。

### 配置域名和发布

部署完成后，Netlify 会为你提供一个临时域名，你可以通过这个域名访问你的网站。如果你希望使用自定义域名，可以在 **Domain settings** 中配置。

Netlify 还支持 HTTPS 和自定义重定向等功能，可以根据需要进一步配置。

### 配置自动部署

Netlify 会监听你的 GitHub 仓库中的变化，每当你推送代码到仓库时，它会自动触发构建和部署流程，确保你的最新更改被及时发布。

---