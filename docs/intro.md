---
sidebar_position: 1
---

> [Docusaurus](https://www.docusaurus.cn/docs) 是一个由 Facebook 开发的静态网站生成器，专门用于构建文档网站。它利用 **React** 的全部功能来构建具有快速客户端导航功能的  **单页应用程序（single-page application）** ，从而使您的网站具有交互性。它提供了开箱即用的  **文档功能** ，也可用于创建  **任何类型的网站** （例如 个人网站、产品展示、博客、营销落地页面等）。

---

# 1. 什么是 Docusaurus？

Docusaurus 是一个现代的文档网站构建工具，提供了一整套用于创建文档站点的功能，支持 **Markdown** 格式的文档、内置搜索、版本控制、网站定制等。它的目标是帮助开发者快速搭建文档网站，减少配置和开发工作量。

**Docusaurus 主要特点包括** ：

* **Markdown 支持** ：通过 Markdown 格式轻松撰写文档。
* **主题定制** ：提供默认的主题样式，也支持自定义主题。
* **版本控制** ：支持文档的版本管理，适合多版本的文档站点。
* **搜索功能** ：内置搜索功能，支持多种搜索插件。
* **扩展性强** ：通过插件可以扩展功能，满足不同需求。

---

# 2. 安装 Docusaurus
## 环境要求

* **Node.js** ：Docusaurus 是基于 Node.js 的，因此需要安装 Node.js。建议使用 Node.js 16 或更高版本。
* **npm **  **、** **yarn、pnpm**

### 安装 Docusaurus

使用命令快速插件一个 Docusaurus 项目：

```JavaScript
npx create-docusaurus@latest my-website classic
```

这将会执行以下操作：

1. 创建一个名为 `my-website` 的新目录。
2. 下载并安装 Docusaurus 及其默认模板 `classic`。
3. 初始化一个基础的文档网站。

![](https://q40a16v8l9.feishu.cn/space/api/box/stream/download/asynccode/?code=ZjQ5ZDQ0MjUwMzQ5ODJiMTk0NmY3Y2E4N2YwYTgzNmJfVnhoUWt2VVBMRWMzS1dURGF5QkhCbE1QeHVUTmFORmpfVG9rZW46QnJZemJFMUY4bzFQQnp4a3ltSWN0QVlJbkRiXzE3MzM2NTg5MjY6MTczMzY2MjUyNl9WNA)

```JavaScript
cd my-website
pnpm start
```

这时，Docusaurus 会启动一个开发服务器，默认访问地址是 `http://localhost:3000`

---

# 3. 配置 Docusaurus
## 目录结构

Docusaurus 项目的目录结构如下：

```Bash
my-website/
├── blog/                   博客文章目录
├── docs/                   文档目录
├── src/                    源代码
│   ├── components/         自定义组件
│   ├── pages/              自定义页面
├── static/                 静态资源（图片、字体等）
├── docusaurus.config.js    项目配置文件
├── sidebars.js             侧边栏配置文件
└── package.json            项目依赖和脚本
```

## 配置 `docusaurus.config.js`

`docusaurus.config.js` 是 Docusaurus 项目的核心配置文件，所有站点的全局配置都在此文件中进行。常见配置项如下：

```Bash
const config: Config = {
  title: "流程平台2.0", // 网站标题
  tagline: "yunyi are cool", // 网站标语
  favicon: "img/favicon_igw.svg", // 网站图标

  // 设置生产环境下站点的 URL
  url: "https://your-docusaurus-site.example.com",
  // 设置站点的基础路径，GitHub 页面部署时，通常为 '/<项目名>/'
  baseUrl: "/",

  // GitHub 页面部署配置，如果你不使用 GitHub Pages，可以不需要这些配置
  organizationName: "cloudeasy", // 通常是 GitHub 组织名或用户名
  projectName: "cloudeasy-docs", // 通常是你的仓库名称

  onBrokenLinks: "throw", // 如果链接断开，抛出错误
  onBrokenMarkdownLinks: "warn", // 如果 Markdown 链接断开，发出警告

  // 即使你不使用国际化，也可以设置这个字段来定义 HTML 的语言（如中文可以设置为 zh-Hans）
  i18n: {
    defaultLocale: "zh-Hans", // 默认语言为简体中文
    locales: ["zh-Hans"], // 支持的语言列表
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts", // 侧边栏配置文件路径
          // 如果需要，可以取消注释并配置以下链接，显示“编辑此页面”的链接
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true, // 启用阅读时间显示
          feedOptions: {
            type: ["rss", "atom"], // 启用 RSS 和 Atom 格式的博客订阅
            xslt: true, // 启用 XSLT
          },
          // 如果需要，可以取消注释并配置以下链接，显示“编辑此博客”的链接
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 以下选项可以确保符合最佳的博客实践
          onInlineTags: "warn", // 如果博客中包含内联标签，发出警告
          onInlineAuthors: "warn", // 如果博客中包含内联作者信息，发出警告
          onUntruncatedBlogPosts: "warn", // 如果博客文章未截断，发出警告
        },
        theme: {
          customCss: "./src/css/custom.css", // 自定义 CSS 文件路径
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 用于替换项目的社交卡片图像
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "", // 不需要填
      logo: {
        alt: "流程平台2.0 Logo", // Logo 描述
        src: "img/favicon_with_title_igw.svg", // Logo 图片路径
      },
      items: [
        {
          type: "docSidebar", // 侧边栏文档链接
          sidebarId: "tutorialSidebar", // 侧边栏 ID
          position: "left", // 位置：左侧
          label: "帮助文档", // 标签：帮助文档
        },
        {
          type: "docSidebar", // 侧边栏文档链接
          sidebarId: "tutorialSidebar", // 侧边栏 ID
          position: "left", // 位置：左侧
          label: "场景方案", // 标签：场景方案
        },
        {
          href: "http://localhost:3000/workbench", // 链接到平台
          label: "进入平台", // 标签：进入平台
          position: "right", // 位置：右侧
        },
      ],
    },
    footer: {
      style: "dark", // 页脚样式
      links: [
        {
          title: "Docs", // Docs 部分
          items: [
            {
              label: "Tutorial", // 标签：教程
              to: "/docs/intro", // 链接到文档首页
            },
          ],
        },
        {
          title: "Community", // Community 部分
          items: [
            {
              label: "Stack Overflow", // Stack Overflow 链接
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord", // Discord 链接
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X", // X（原 Twitter）链接
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More", // More 部分
          items: [
            {
              label: "Blog", // 标签：博客
              to: "/blog", // 链接到博客页面
            },
            {
              label: "GitHub", // GitHub 链接
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 流程平台2.0,智网信通旗下产品`, // 页脚版权信息
    },
    prism: {
      theme: prismThemes.github, // 代码高亮主题（白天模式）
      darkTheme: prismThemes.dracula, // 代码高亮主题（黑暗模式）
    },
  } satisfies Preset.ThemeConfig,

  // 引入 Docusaurus 本地搜索插件
  // 该插件基于静态文件构建，会在打包过程中生成索引文件
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} 配置搜索插件的选项 */
      {
        hashed: true, // 启用哈希 URL，以提高缓存性能并加速查找
        docsRouteBasePath: ["docs", "community"], // 搜索功能应用的路径（包括 'docs' 和 'community'）
        docsDir: ["docs", "community"], // 需要被索引的文档目录
        hideSearchBarWithNoSearchContext: true, // 如果没有搜索上下文，则隐藏搜索栏
        searchBarPosition: "auto", // 自动调整搜索栏位置
      }
    ]
  ]
}
```

## 配置侧边栏 `sidebars.js`

`sidebars.js` 文件用于定义文档的侧边栏。Docusaurus 提供了两种侧边栏配置方式：自动生成侧边栏和手动配置侧边栏。

自动生成侧边栏：

```Bash
{
        docs: {
          sidebarPath: "./sidebars.ts", // 侧边栏配置文件路径
          // 如果需要，可以取消注释并配置以下链接，显示“编辑此页面”的链接
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true, // 启用阅读时间显示
          feedOptions: {
            type: ["rss", "atom"], // 启用 RSS 和 Atom 格式的博客订阅
            xslt: true, // 启用 XSLT
          },
          // 如果需要，可以取消注释并配置以下链接，显示“编辑此博客”的链接
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 以下选项可以确保符合最佳的博客实践
          onInlineTags: "warn", // 如果博客中包含内联标签，发出警告
          onInlineAuthors: "warn", // 如果博客中包含内联作者信息，发出警告
          onUntruncatedBlogPosts: "warn", // 如果博客文章未截断，发出警告
        },
        theme: {
          customCss: "./src/css/custom.css", // 自定义 CSS 文件路径
        },
      } satisfies Preset.Options
```

## 4. 插件（ **plugins** ）
### 官方插件
#### **内容插件（Content plugins）**
   
   用于加载和渲染站点的内容的基础核心插件
   
   > **[@docusaurus/plugin-content-docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs)**
   > 该插件用于加载和显示站点的文档内容，是 Docusaurus 中文档部分的核心插件。
   
   ```TypeScript
   presets: [
     [
       'classic',
       {
         docs: {
           path: './docs', // 文档目录
           routeBasePath: 'docs', // 访问文档的基础路径
           sidebarPath: require.resolve('./sidebars.js'), // 侧边栏配置
         },
       },
     ],
   ]
   ```
   
   > **[@docusaurus/plugin-content-blog](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog)**
   > 
   > 该插件用于加载和显示站点的博客内容。
   
   ```TypeScript
   presets: [
     [
       'classic',
       {
         blog: {
           path: './blog', // 博客目录
           routeBasePath: 'blog', // 博客访问路径
           showReadingTime: true, // 启用阅读时间显示
         },
       },
     ],
   ]
   ```
   
   > **[@docusaurus/plugin-content-pages](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages)**
   > 
   > 该插件用于加载和显示静态页面（如 `HTML` 页面）。
   
   ```TypeScript
   presets: [
     [
       'classic',
       {
         pages: {
           path: './pages', // 静态页面目录
           routeBasePath: '', // 访问路径
         },
       },
     ],
   ],
   ```
7. #### **行为插件（Behavior plugins）**
   
   这些插件提供额外的功能和行为，增强站点的可用性和性能。
   
   > **[@docusaurus/plugin-debug](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-debug)**
   > 
   > 用于调试 Docusaurus 配置，帮助排查配置问题。
   > 在 `docusaurus.config.js` 中启用：
   
   ```TypeScript
   plugins: ['@docusaurus/plugin-debug']
   ```
   
   > **[@docusaurus/plugin-sitemap](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-sitemap)**
   > 
   > 自动生成站点的 XML sitemap，有助于搜索引擎抓取。
   
   ```TypeScript
   plugins: [
     [
       '@docusaurus/plugin-sitemap',
       {
         // 可选配置项
         changefreq: 'weekly', // 更新频率
         priority: 0.5, // 优先级
       },
     ],
   ]
   ```
   
   > **[@docusaurus/plugin-pwa](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa)**
   > 
   > 添加渐进式 Web 应用（PWA）功能，使站点支持离线访问和安装功能。
   
   ```TypeScript
   plugins: [
     [
       '@docusaurus/plugin-pwa',
       {
         // 配置离线功能
         offlineMode: true, // 启用离线模式
       },
     ],
   ]
   ```
   
   > **[@docusaurus/plugin-client-redirects](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects)**
   > 
   > 用于管理客户端重定向，帮助将旧 URL 重定向到新 URL。
   
   ```TypeScript
   plugins: [
     [
       '@docusaurus/plugin-client-redirects',
       {
         redirects: [
           {
             from: '/old-path',
             to: '/new-path',
           },
         ],
       },
     ],
   ]
   ```
   
   > **[@docusaurus/plugin-ideal-image](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image)**
   > 
   > 该插件自动优化和转换图片，改进页面加载速度和图片质量。
   
   ```TypeScript
   plugins: [
     [
       '@docusaurus/plugin-ideal-image',
       {
         quality: 80, // 图片压缩质量
         max: 1200, // 最大宽度
       },
     ],
   ]
   ```
   
   > **[@docusaurus/plugin-google-analytics](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-analytics)**
   > 
   > 集成 Google Analytics，跟踪站点访问数据。
   
   ```TypeScript
   themeConfig: {
     googleAnalytics: {
       trackingID: 'UA-XXXXXXX-X', // 你的 Google Analytics ID
     },
   }
   ```
   
   > **[@docusaurus/plugin-google-gtag](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag)**
   > 
   > 集成 Google Global Site Tag (gtag.js)，用于跟踪站点访问。

```JavaScript
themeConfig: {
  googleTagManager: {
    containerID: 'GTM-XXXXXX', // 你的 Google Tag Manager 容器 ID
  },
}
```

### 第三方插件

除了官方插件，Docusaurus 还支持许多第三方插件，这些插件通常由社区开发，并且可以通过 npm 安装使用。可以在 Docusaurus 的官网和 GitHub 中找到大量第三方插件。

**一些常见的第三方插件：**

* **@docusaurus/plugin-remote-search** ：为 Docusaurus 添加远程搜索功能。
* **@docusaurus/plugin-search-algolia** : 集成 Algolia 搜索引擎，可以为 Docusaurus 网站提供强大的搜索功能。
* @easyops-cn/docusaurus-search-local ：为 Docusaurus 添加本地 JavaScript 搜索功能。
* **@docusaurus/plugin-remark-code-titles** ：为 Markdown 代码块添加标题。
* **@docusaurus/plugin-mdx-mermaid** ：集成 Mermaid 图表生成。

使用**本地搜索功能**通常需要在生产环境下运行才会生效。Docusaurus 本地搜索插件（`@easyops-cn/docusaurus-search-local`）是基于静态文件构建的，它会在打包过程中生成索引文件，而这些文件通常只会在生产环境下通过 `docusaurus build` 和 `docusaurus serve` 的运行来生效。

在开发环境下，搜索功能可能不会按预期工作，因为开发环境使用的是动态加载的方式，且没有生成完整的静态资源。因此，如果要确保搜索功能正常工作，需要打包并在生产环境中运行。

**如何使用第三方插件：**

1. **安装插件** ： 在项目中通过 npm 或 yarn 安装插件。例如，安装 `@docusaurus/plugin-remote-search`：

```JavaScript
pnpm add @docusaurus/plugin-remote-search
```

2. **在 ****`docusaurus.config.js`** ** 配置插件** ：

```JavaScript
plugins: [
  ['@docusaurus/plugin-remote-search',
    {searchUrl: 'https://your-search-server.com/api', // 配置你的搜索服务 URL
    },
  ],
],
```

项目中该如何选型搜索插件功能？

1. #### **docusaurus-search-local **与 **plugin-search-algolia的区别**

`@docusaurus/plugin-search-algolia` 和 `@easyops-cn/docusaurus-search-local` 都是Docusaurus 的搜索插件，但它们有显著的区别，主要体现在搜索引擎的实现方式、使用的技术栈、性能和适用场景上。下面是它们的主要区别：

##### **使用区别**

**@docusaurus/plugin-search-algolia**

> **部署到生产环境**
> 
> 一旦插件配置完毕并且文档已经推送到 Algolia，你可以通过以下命令生成并部署站点：
> 
> `npm run build ``npm run serve`
> 
> 生成的站点将自动包含 Algolia 搜索功能，你的用户可以通过搜索框来快速查找文档或博客文章。

```TypeScript
plugins: [
    [
      '@docusaurus/plugin-search-algolia',
      {
        apiKey: 'YOUR_ALGOLIA_API_KEY',  // 填写你的 Algolia API 密钥
        appId: 'YOUR_ALGOLIA_APP_ID',  // 填写你的 Algolia 应用 ID
        indexName: 'YOUR_ALGOLIA_INDEX_NAME',  // 填写你的 Algolia 索引名称
        contextualSearch: true,  // 启用上下文搜索（可选）
        debug: false,  // 是否启用调试（可选）
      }
    ]
  ]
```

**@easyops-cn/docusaurus-search-local**

```TypeScript
// 插件配置
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      {
        hashed: true, // 启用哈希 URL，以提高缓存性能并加速查找
        docsRouteBasePath: ['docs', 'community'],  // 搜索的路径
        docsDir: ['docs', 'community'],  // 需要索引的目录
        hideSearchBarWithNoSearchContext: true, // 如果没有搜索上下文，则隐藏搜索栏
        searchContextByPaths: [
          {
            label: '文档', // 自定义标签名称
            path: 'docs', // 自定义文档路径
          },
          {
            label: '社区',
            path: 'community',
          },
        ],
        searchBarPosition: 'auto', // 搜索栏位置配置
      }
    ]
  ]
```

##### **区别总结**

| 特性           | @docusaurus/plugin-search-algolia    | @easyops-cn/docusaurus-search-local |
| ---------------- | -------------------------------------- | ------------------------------------- |
| 搜索引擎类型   | 云端搜索引擎（Algolia）              | 本地搜索（客户端索引）              |
| 索引方式       | 数据上传到 Algolia 进行索引          | 数据在客户端（浏览器）进行索引      |
| 适用场景       | 大规模文档站点、需要高性能搜索的站点 | 小型站点、无需依赖外部服务的站点    |
| 搜索性能       | 高性能，支持复杂的搜索和模糊匹配     | 适用于小型站点，性能受限于客户端    |
| 高级功能       | 支持分面搜索、搜索建议、模糊匹配等   | 简单全文搜索，缺少高级功能          |
| 离线支持       | 不支持离线搜索                       | 支持离线搜索                        |
| 设置和集成难度 | 需要注册并配置 Algolia，较为复杂     | 配置简单，易于上手                  |
| 定价           | 免费计划有限，超出后需要付费         | 完全免费                            |

##### 选择建议

* 如果你的站点是  **小型文档站点** ，或者你不希望依赖外部服务，并且对搜索功能要求不高，选择 `@easyops-cn/docusaurus-search-local` 会更简单实用。
* 如果你的站点是  **大型文档站点** ，需要  **高性能搜索** 、 **模糊匹配** 、**搜索建议** 等高级功能，并且愿意使用外部服务，`@docusaurus/plugin-search-algolia` 会提供更强大的搜索体验。

> `@easyops-cn/docusaurus-search-local` 插件配置在 `themes` 部分，而不是在 `plugins` 部分，主要是因为它是一个 **主题插件**，而非传统的 **行为插件** 或 **内容插件**。

### 理解 `themes` 与 `plugins` 的区别

在 Docusaurus 中，`themes` 和 `plugins` 都是扩展 Docusaurus 功能的方式，但它们的作用和使用场景有所不同：

#### 1. **`themes`** ** 配置** ：

* **主题插件** （如 `@easyops-cn/docusaurus-search-local`）通常用于定制 Docusaurus 站点的前端显示和用户交互体验。
* 它们通常影响的是页面的渲染、UI 组件、样式、交互逻辑等。例如，Docusaurus 默认的搜索功能就是作为主题插件来配置的，`@easyops-cn/docusaurus-search-local` 插件就是对默认搜索功能的扩展。
* 主题插件会与页面的样式、布局等密切集成，通常会影响全局的 UI 和功能（例如，搜索栏的显示、代码高亮等）。

#### 2. **`plugins`** ** 配置** ：

* **内容插件** （如 `@docusaurus/plugin-content-docs`、`@docusaurus/plugin-content-blog`）主要用于加载和渲染网站的内容，负责文档、博客、页面等的组织和显示。
* **行为插件** （如 `@docusaurus/plugin-google-analytics`、`@docusaurus/plugin-sitemap`）则提供站点的附加功能，如分析、SEO、PWA 等。

### 为什么将 `@easyops-cn/docusaurus-search-local` 放在 `themes` 配置中？

`@easyops-cn/docusaurus-search-local` 插件本质上是一个提供搜索框和搜索功能的 **UI 组件** 插件，它会直接影响前端的显示和交互行为。所以它被归类为主题插件。

* **搜索栏是 UI 组件** ：它属于网站的前端部分，负责呈现给用户的界面和用户交互。因此，它需要配置到 `theme` 部分。Docusaurus 站点的主题通常包括了与 UI 渲染、用户交互相关的功能，如导航栏、侧边栏、搜索框等。
* **与 Docusaurus 样式集成** ：`@easyops-cn/docusaurus-search-local` 插件不仅负责索引文档，还直接影响页面上搜索栏的显示与样式。因此它被视为与页面布局、主题样式紧密结合的功能插件。

### 示例

* **主题相关插件** （例如，搜索功能、代码高亮、布局组件等）：
  * `@easyops-cn/docusaurus-search-local`
  * `@docusaurus/theme-classic`
  * `@docusaurus/theme-common`
  * `@docusaurus/theme-search-algolia`

这些插件的目标是影响前端页面的展示和交互方式。

* **行为相关插件** （例如，SEO、分析、站点地图等）：
  * `@docusaurus/plugin-google-analytics`
  * `@docusaurus/plugin-pwa`
  * `@docusaurus/plugin-sitemap`
  * `@docusaurus/plugin-client-redirects`

这些插件主要是提供额外的功能，不会直接影响页面的布局或样式。

### 总结

将 `@easyops-cn/docusaurus-search-local` 插件放在 `themes` 配置中的原因是，它直接影响前端 UI 的呈现，包括搜索栏、搜索结果等内容。这类插件更关注与页面主题和样式的集成，而非仅仅作为一个行为插件。

---

## 5. 撰写文档

Docusaurus 支持使用 Markdown 格式编写文档。所有文档文件默认存放在 `docs` 目录下。你可以通过创建 `.md` 文件来编写文档。

例如，创建一个 `docs/intro.md` 文件：

```Markdown
欢迎使用 Docusaurus
Docusaurus 是一个用于构建文档网站的工具，具有简单的配置和易用的界面。

快速开始
通过以下命令可以启动 Docusaurus 项目：

npx create-docusaurus@latest my-website classic
```

---

# 部署 Docusaurus 网站

Docusaurus 提供了多种简单的方式来部署网站，其中最常见的两种是通过 **GitHub Pages** 和 **Netlify** 部署。这里我们将详细讲解这两种方法。

1. ## 使用 GitHub Pages 部署

**GitHub Pages** 是一个免费的静态页面托管服务，可以轻松将 Docusaurus 网站部署到 GitHub 上。部署的过程可以分为以下几个步骤：

1. ### 配置 `docusaurus.config.js`

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

2. ### 构建网站

在项目根目录下运行 `npm run build` 或 `pnpm run build`，此命令会生成一个 `build` 文件夹，里面包含了网站的所有静态资源。

```TypeScript
npm run build
```

3. ### 配置 GitHub Actions 自动部署

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

4. ### 部署网站

推送代码到 GitHub 仓库的 `main` 分支后，GitHub Actions 会自动触发部署流程，将网站推送到 `gh-pages` 分支。

确保你已经在 GitHub 仓库的 **Settings** > **Pages** 中，选择了 `gh-pages` 分支作为 GitHub Pages 的发布源。

2. ## 使用 Netlify 部署

Netlify 是一个非常方便且快速的部署工具，支持持续集成和自动化部署。以下是使用 Netlify 部署 Docusaurus 网站的步骤：

1. ### 创建 Netlify 账户并连接 GitHub

首先，确保你在 [Netlify](https://www.netlify.com/) 上注册了账户，并通过 GitHub 登录。然后，选择  **New site from Git** ，选择你的 GitHub 仓库进行连接。

2. ### 配置构建设置

在 **Deploy settings** 中，Netlify 会要求你配置构建命令和发布目录：

* **Build Command** ：`npm run build` 或 `pnpm run build`（取决于你使用的包管理工具）
* **Publish Directory** ：`build`（这是 Docusaurus 默认的输出目录）

可以使用以下命令：

```TypeScript
pnpm run build
```

Netlify 会自动使用 `build` 目录中的静态资源进行发布。

3. ### 配置域名和发布

部署完成后，Netlify 会为你提供一个临时域名，你可以通过这个域名访问你的网站。如果你希望使用自定义域名，可以在 **Domain settings** 中配置。

Netlify 还支持 HTTPS 和自定义重定向等功能，可以根据需要进一步配置。

4. ### 配置自动部署

Netlify 会监听你的 GitHub 仓库中的变化，每当你推送代码到仓库时，它会自动触发构建和部署流程，确保你的最新更改被及时发布。

---
# 主题定制

ocusaurus 支持主题定制。你可以通过 `src/theme` 文件夹创建自定义组件或覆盖默认组件。

## 主题定制和组件自定义

Docusaurus 提供了丰富的定制能力，允许你自定义站点的各个方面。你可以通过修改 `src/theme` 文件夹中的组件来定制默认的布局、样式和行为。

1. ## 自定义 Navbar 组件

假设你想要自定义站点的导航栏组件，可以在 `src/theme/Navbar` 文件夹中创建一个新的文件，或者修改默认组件。

```TypeScript
// src/theme/Navbar/CustomNavbar.jsimport React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

function CustomNavbar() {const { navbar } = useThemeConfig();
return (<nav><div>{navbar.title}</div>
      {/* 自定义导航栏内容 */}</nav>
  );
}

export default CustomNavbar;
```

在这个示例中，我们使用了 `useThemeConfig` 来获取 Docusaurus 配置中的 `navbar` 配置，并在自定义的导航栏组件中显示站点的标题。

2. ## 自定义页脚

你还可以自定义网站的页脚内容，例如修改版权信息、增加社交媒体链接等。可以通过修改 `src/theme/Footer` 文件夹中的组件来实现。

```TypeScript
// src/theme/Footer/CustomFooter.js
import React from 'react';

function CustomFooter() {
  return (
    <footer>
      <div>Copyright © {new Date().getFullYear()} 流程平台2.0</div>
      <div>
        <a href="https://github.com/facebook/docusaurus">GitHub</a>
      </div>
    </footer>
  );
}

export default CustomFooter;
```

3. ## 自定义 CSS

Docusaurus 允许你覆盖默认的样式，可以在 `src/css/custom.css` 中添加自定义 CSS 以满足特定的设计需求。

```SCSS
/* src/css/custom.css */
body {
  background-color: #f0f0f0;
}

.navbar {
  background-color: #333;
}

footer {
  font-size: 14px;
  color: #666;
}
```

你可以在 `docusaurus.config.js` 文件中引用自定义的 CSS 文件：

```SCSS
themeConfig: {
  theme: {
    customCss: require.resolve('./src/css/custom.css'),
  }
}
```

---
