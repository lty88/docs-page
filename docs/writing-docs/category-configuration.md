---
sidebar_position: 8
title: 分类配置指南
description: 了解如何使用 _category_.json 配置文件组织文档结构
---

# 分类配置指南

## 1. 什么是 _category_.json

`_category_.json` 是 Docusaurus 用于配置文档分类的特殊文件，它允许你定义文档分类的元数据和行为。通过这个文件，你可以更好地组织和展示文档结构。

## 2. 文件位置

```plaintext
docs/
├── category1/
│   ├── _category_.json    # 分类1的配置
│   ├── doc1.md
│   └── doc2.md
└── category2/
    ├── _category_.json    # 分类2的配置
    └── subcategory/
        ├── _category_.json # 子分类的配置
        └── doc3.md
```

## 3. 配置项说明

### 3.1 基础配置

```json
{
  "label": "分类名称",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "分类描述"
  }
}
```

| 配置项 | 说明 | 示例值 |
|--------|------|---------|
| label | 显示在侧边栏的分类名称 | "运营指南" |
| position | 分类在同级目录中的排序位置 | 2 |
| collapsed | 侧边栏是否默认折叠 | true/false |

### 3.2 链接配置

```json
{
  "link": {
    "type": "generated-index",
    "description": "分类描述文本",
    "slug": "/custom-url",
    "keywords": ["关键词1", "关键词2"]
  }
}
```

#### type 类型说明
1. **generated-index**：自动生成索引页
   ```json
   {
     "link": {
       "type": "generated-index",
       "description": "自动生成的索引页面"
     }
   }
   ```

2. **doc**：使用指定文档作为索引
   ```json
   {
     "link": {
       "type": "doc",
       "id": "intro"
     }
   }
   ```

### 3.3 样式配置

```json
{
  "className": "custom-category",
  "customProps": {
    "description": "自定义描述",
    "icon": "icon-name"
  }
}
```

## 4. 使用示例

### 4.1 基础分类

```json
{
  "label": "快速入门",
  "position": 1,
  "link": {
    "type": "generated-index",
    "description": "快速了解产品的基本使用方法"
  }
}
```

### 4.2 带自定义URL的分类

```json
{
  "label": "高级教程",
  "position": 2,
  "link": {
    "type": "generated-index",
    "description": "深入了解高级特性",
    "slug": "/advanced-tutorials"
  }
}
```

### 4.3 使用现有文档作为索引

```json
{
  "label": "API文档",
  "position": 3,
  "link": {
    "type": "doc",
    "id": "api/overview"
  }
}
```

## 5. 最佳实践

### 5.1 命名建议
- 使用清晰的分类名称
- 保持命名的一致性
- 避免过长的名称

### 5.2 结构建议
- 控制分类层级（建议不超过3层）
- 相关内容放在同一分类
- 适当使用子分类

### 5.3 描述建议
- 简明扼要
- 包含关键信息
- 说明分类用途

## 6. 常见问题

### 6.1 分类不显示
检查：
- 文件名是否正确（`_category_.json`）
- JSON 格式是否正确
- position 值是否合理

### 6.2 索引页面不生成
检查：
- link.type 配置是否正确
- 引用的文档 ID 是否存在
- slug 是否有冲突

### 6.3 排序问题
- 确保所有分类都有 position 值
- position 值不重复
- 数值越小越靠前

## 7. 进阶技巧

### 7.1 自定义样式
```json
{
  "className": "custom-category",
  "customProps": {
    "background": "light",
    "icon": "puzzle-piece"
  }
}
```

### 7.2 条件显示
```json
{
  "label": "Beta 功能",
  "className": "beta-features",
  "customProps": {
    "displayMode": "beta"
  }
}
```

### 7.3 多语言支持
```json
{
  "label": {
    "en": "Getting Started",
    "zh-CN": "快速入门"
  }
}