---
sidebar_position: 2
---

# 快速入门

本指南帮助你在15分钟内完成第一篇文档。

## 1. 环境准备

1. **获取编辑权限**
   - 联系技术团队获取代码仓库访问权限
   - 安装 Visual Studio Code 编辑器

2. **熟悉工作目录**
   ```bash
   docs/                # 文档主目录
   ├── writing-docs/    # 写作指南
   ├── tutorial-basics/ # 基础教程
   └── static/         # 静态资源目录（图片等）
   ```

## 2. 创建第一篇文档

1. **选择合适的目录**
   - 在 `docs` 目录下选择合适的子目录
   - 或创建新的目录存放相关文档

2. **创建文档文件**
   ```markdown
   ---
   sidebar_position: 1
   title: 我的第一篇文档
   description: 这是一个示例文档
   ---

   # 欢迎使用

   这是我的第一篇文档。
   ```

3. **预览文档**
   - 运行本地预览服务器
   - 访问 http://localhost:3000 查看效果

## 3. 常用操作

### 3.1 添加文本格式

```markdown
**粗体文本**
*斜体文本*
> 引用文本
```

### 3.2 插入图片

```markdown
![图片描述](/img/example.png)
```

### 3.3 创建列表

```markdown
- 项目一
- 项目二
  - 子项目
```

## 4. 下一步

- 阅读 [文档创建与组织](./document-organization.md)
- 查看 [内容编写规范](./writing-guidelines.md)
- 了解 [多媒体内容管理](./media-management.md) 