---
sidebar_position: 4
title: 文档增强功能
description: 学习如何使用各种增强功能来丰富文档内容
---

# 文档增强功能

## 1. 图片管理

### 1.1 图片存放位置

图片文件建议存放在以下位置：
```plaintext
static/
└── img/
    ├── guides/      # 指南相关图片
    ├── features/    # 功能特性图片
    └── tutorials/   # 教程相关图片
```

### 1.2 插入图片

#### 方式一：使用相对路径
```markdown
![图片描述](./images/example.png)
```

#### 方式二：使用绝对路径
```markdown
![图片描述](/img/guides/example.png)
```

### 1.3 图片优化建议

- 图片格式：
  - 照片使用 `.jpg`
  - 图标和简单图形使用 `.png`
  - 动态图片使用 `.gif`
- 图片大小：建议不超过 500KB
- 图片尺寸：根据显示需求适当调整

:::tip 图片命名规范
- 使用有意义的名称
- 包含尺寸信息，如 `banner-1920x1080.jpg`
- 使用小写字母和连字符
:::

## 2. 附件管理

### 2.1 附件存放位置
```plaintext
static/
└── files/
    ├── docs/       # 文档类附件
    ├── templates/  # 模板文件
    └── tools/      # 工具类文件
```

### 2.2 插入附件下载链接

```markdown
[下载用户手册](/files/docs/user-manual.pdf)
[下载模板文件](/files/templates/report-template.docx)
```

### 2.3 附件类型建议

- 文档类：PDF、DOCX、XLSX
- 压缩包：ZIP、RAR
- 源文件：JSON、XML、YML

## 3. 表格使用

### 3.1 基础表格

```markdown
| 功能 | 描述 | 支持版本 |
|------|------|----------|
| 图片上传 | 支持本地图片上传 | v1.0+ |
| 文件下载 | 支持各类文档下载 | v1.2+ |
```

效果如下：

| 功能 | 描述 | 支持版本 |
|------|------|----------|
| 图片上传 | 支持本地图片上传 | v1.0+ |
| 文件下载 | 支持各类文档下载 | v1.2+ |

### 3.2 表格对齐

```markdown
| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:--------:|--------:|
| 内容 | 内容 | 内容 |
```

### 3.3 复杂表格示例

```markdown
<table>
  <tr>
    <th rowspan="2">功能模块</th>
    <th colspan="2">支持情况</th>
  </tr>
  <tr>
    <th>PC端</th>
    <th>移动端</th>
  </tr>
  <tr>
    <td>图片上传</td>
    <td>✅</td>
    <td>✅</td>
  </tr>
</table>
```

## 4. 代码块

### 4.1 基础代码块

````markdown
```javascript
function example() {
  console.log('Hello World');
}
```
````

### 4.2 带标题的代码块

````markdown
```javascript title="example.js"
function example() {
  console.log('Hello World');
}
```
````

### 4.3 代码高亮

````markdown
```javascript highlight={2}
function example() {
  console.log('Hello World'); // 这行会被高亮
}
```
````

## 5. 特殊内容

### 5.1 提示框

```markdown
:::tip 提示
这是一个提示信息
:::

:::warning 注意
这是一个警告信息
:::

:::danger 警告
这是一个危险警告
:::
```

### 5.2 折叠面板

```markdown
<details>
  <summary>点击展开</summary>
  这里是折叠的内容
</details>
```

### 5.3 标签页

```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows">
    Windows 相关内容
  </TabItem>
  <TabItem value="mac" label="macOS">
    macOS 相关内容
  </TabItem>
</Tabs>
```

## 6. 最佳实践

### 6.1 图片使用建议

1. **添加替代文本**
   ```markdown
   ![清晰的图片描述](/img/example.png "图片标题")
   ```

2. **控制图片大小**
   ```markdown
   <img src="/img/example.png" width="300" alt="图片描述" />
   ```

3. **使用图片说明**
   ```markdown
   ![图片描述](/img/example.png)
   *图片说明：这是一个示例图片*
   ```

### 6.2 表格使用建议

1. **保持简洁**
   - 避免表格过宽
   - 内容简明扼要
   - 适当使用换行

2. **表格标题**
   ```markdown
   **表格 1：功能支持情况**
   | 功能 | 状态 |
   |------|------|
   ```

3. **大表格处理**
   - 考虑分拆成多个小表格
   - 使用折叠面板包装
   - 添加适当的说明

### 6.3 文件管理建议

1. **文件命名**
   - 使用有意义的名称
   - 包含版本信息
   - 遵循命名规范

2. **目录组织**
   - 按类型分类
   - 控制目录层级
   - 及时清理旧文件

3. **版本控制**
   - 重要文件保留历史版本
   - 添加更新日期
   - 记录变更说明 