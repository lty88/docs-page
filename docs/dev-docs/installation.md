---
sidebar_position: 1
---

# 安装 Docusaurus

## 环境要求

* **Node.js** ：Docusaurus 是基于 Node.js 的，因此需要安装 Node.js。建议使用 Node.js 16 或更高版本。
* **npm **  **、** **yarn、pnpm**

## 安装步骤

使用命令快速创建一个 Docusaurus 项目：

```bash
npx create-docusaurus@latest my-website classic
```

这将会执行以下操作：

1. 创建一个名为 `my-website` 的新目录。
2. 下载并安装 Docusaurus 及其默认模板 `classic`。
3. 初始化一个基础的文档网站。

![](https://q40a16v8l9.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjQ5ZDQ0MjUwMzQ5ODJiMTk0NmY3Y2E4N2YwYTgzNmJfVnhoUWt2VVBMRWMzS1dURGF5QkhCbE1QeHVUTmFORmpfVG9rZW46QnJZemJFMUY4bzFQQnp4a3ltSWN0QVlJbkRiXzE3MzM2NTg5MjY6MTczMzY2MjUyNl9WNA)

启动开发服务器:

```bash
cd my-website
pnpm start
```

这时，Docusaurus 会启动一个开发服务器，默认访问地址是 `http://localhost:3000` 