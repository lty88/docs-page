---
sidebar_position: 4
---

# 撰写文档

Docusaurus 支持使用 Markdown 格式编写文档。所有文档文件默认存放在 `docs` 目录下。

## Markdown 基础

创建一个新的文档文件，例如 `docs/getting-started.md`:

```markdown
---
sidebar_position: 1
---

# 开始使用

这是一个新的文档页面。

## 二级标题

### 三级标题

- 列表项 1
- 列表项 2

1. 有序列表 1
2. 有序列表 2

> 引用文本

**粗体文本**
*斜体文本*

[链接文本](https://example.com)

![图片描述](./path/to/image.png)
```

## Front Matter

每个文档文件开头可以包含 Front Matter 配置：

```markdown
---
id: document-id
title: 文档标题
description: 文档描述
sidebar_position: 1
---
```

## 代码块

支持语法高亮的代码块：

````markdown
```javascript
function hello() {
  console.log('Hello, Docusaurus!');
}
```
````

## 提示框

特殊提示框语法：

```markdown
:::tip 提示
这是一个提示信息
:::

:::warning 警告
这是一个警告信息
:::

:::danger 危险
这是一个危险警告
:::
```

## 文档引用

可以引用其他文档页面：

```markdown
[参考安装指南](./installation.md)
```