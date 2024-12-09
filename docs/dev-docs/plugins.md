---
sidebar_position: 3
---

# 插件系统

## 1. 官方插件类型

### 1.1 内容插件（Content Plugins）

内容插件用于加载和渲染站点的核心内容。

#### 1.1.1 文档插件 (@docusaurus/plugin-content-docs)

用于管理和显示文档内容：

```typescript
presets: [
  [
    'classic',
    {
      docs: {
        path: './docs',              // 文档源文件目录
        routeBasePath: 'docs',       // 访问路径前缀
        sidebarPath: './sidebars.js',// 侧边栏配置文件
        // 编辑链接配置
        editUrl: 'https://github.com/your-repo/edit/main/',
      },
    },
  ],
]
```

#### 1.1.2 博客插件 (@docusaurus/plugin-content-blog)

用于管理博客文章：

```typescript
presets: [
  [
    'classic',
    {
      blog: {
        path: './blog',              // 博客文章目录
        routeBasePath: 'blog',       // 访问路径前缀
        showReadingTime: true,       // 显示阅读时间
        postsPerPage: 5,            // 每页文章数
        // 博客功能配置
        blogSidebarTitle: '最近文章',
        blogSidebarCount: 10,
      },
    },
  ],
]
```

#### 1.1.3 页面插件 (@docusaurus/plugin-content-pages)

用于管理独立页面：

```typescript
presets: [
  [
    'classic',
    {
      pages: {
        path: './src/pages',         // 页面文件目录
        routeBasePath: '',           // 根路径
        // 支持的页面格式
        include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
      },
    },
  ],
]
```

### 1.2 功能插件（Feature Plugins）

#### 1.2.1 调试插件 (@docusaurus/plugin-debug)

用于开发调试：

```typescript
module.exports = {
  plugins: ['@docusaurus/plugin-debug'],
  // 开发环境配置
  debug: true,
}
```

#### 1.2.2 站点地图插件 (@docusaurus/plugin-sitemap)

生成网站的站点地图：

```typescript
module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',        // 更新频率
        priority: 0.5,               // 优先级
        ignorePatterns: ['/tags/**'],// 忽略的路径
        filename: 'sitemap.xml',     // 输出文件名
      },
    ],
  ],
}
```

## 2. 搜索插件对比

### 2.1 主要搜索插件比较

| 功能特性 | Algolia搜索 | 本地搜索 |
|---------|------------|----------|
| 插件名称 | @docusaurus/plugin-search-algolia | @easyops-cn/docusaurus-search-local |
| 搜索引擎 | 云端搜索（Algolia） | 本地浏览器搜索 |
| 索引方式 | 云端索引 | 客户端实时索引 |
| 搜索性能 | 极快（CDN加速） | 一般（取决于文档量） |
| 高级功能 | 支持分面搜索、搜索建议 | 基础全文搜索 |
| 离线支持 | 不支持 | 完全支持 |
| 配置难度 | 较复杂（需要Algolia账号） | 简单 |
| 使用成本 | 免费版有限制 | 完全免费 |

### 2.2 Algolia搜索配置

```typescript
module.exports = {
  themeConfig: {
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      contextualSearch: true,
      searchParameters: {
        facetFilters: ['language:zh-CN'],
      },
    },
  },
}
```

### 2.3 本地搜索配置

```typescript
module.exports = {
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,                // 启用URL哈希
        language: ['zh', 'en'],      // 支持的语言
        docsRouteBasePath: ['docs'], // 搜索范围
        docsDir: ['docs'],           // 文档目录
        searchBarPosition: 'auto',    // 搜索框位置
        searchBarShortcutHint: true, // 显示快捷键提示
      },
    ],
  ],
}
```

## 3. 插件开发最佳实践

### 3.1 插件命名规范

- 官方插件: `@docusaurus/plugin-[name]`
- 社区插件: `docusaurus-plugin-[name]`
- 主题插件: `@docusaurus/theme-[name]`

### 3.2 插件加载顺序

1. 预设（Presets）中的插件
2. 配置文件中的插件
3. 主题插件

### 3.3 插件配置优先级

```typescript
module.exports = {
  // 1. 预设配置
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // 预设中的插件配置
      },
    ],
  ],
  // 2. 独立插件配置（优先级更高）
  plugins: [
    // 插件配置会覆盖预设中的相同配置
  ],
  // 3. 主题配置
  themes: [
    // 主题相关配置
  ],
}
``` 