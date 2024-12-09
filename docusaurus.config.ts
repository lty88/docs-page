import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// 这个配置文件在 Node.js 环境下运行，避免在这里使用客户端代码（浏览器 API、JSX 等）

const config: Config = {
  title: "my-website", // 网站标题
  tagline: "website are cool", // 网站标语
  favicon: "img/logo.svg", // 网站图标

  // 设置生产环境下站点的 URL
  url: "https://lty88.github.io",
  // 设置站点的基础路径，GitHub 页面部署时，通常为 '/<项目名>/'
  baseUrl: "/docs-page/",

  // GitHub 页面部署配置，如果你不使用 GitHub Pages，可以不需要这些配置
  organizationName: "lty88", // 通常是 GitHub 组织名或用户名
  projectName: "docs-page", // 通常是你的仓库名称

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
          // 如果需要，可以取消注释并配置以下链接，显示"编辑此页面"的链接
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true, // 启用阅读时间显示
          feedOptions: {
            type: ["rss", "atom"], // 启用 RSS 和 Atom 格式的博客订阅
            xslt: true, // 启用 XSLT
          },
          // 如果需要，可以取消注释并配置以下链接，显示"编辑此博客"的链接
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
        alt: "my-website Logo", // Logo 描述
        src: "img/logo.svg", // Logo 图片路径
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "devDocsSidebar",
          position: "left",
          label: "开发文档",
        },
        {
          type: "docSidebar",
          sidebarId: "writingDocsSidebar",
          position: "left",
          label: "运营文档",
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
      copyright: `Copyright © ${new Date().getFullYear()} xxxxx,页脚版权信息`, // 页脚版权信息
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
      },
    ],
  ],
};

export default config;
