import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Docusaurus 侧边栏配置
 * 支持多个侧边栏，每个侧边栏包含多个文档和分类
 */
const sidebars: SidebarsConfig = {
  // 开发文档侧边栏
  devDocsSidebar: [
    {
      type: "doc", // 文档类型
      id: "dev-docs/intro", // 文档唯一标识符
      label: "开发文档介绍", // 文档标题
    },
    {
      type: "category",
      label: "基础教程",
      collapsible: true,// 是否可折叠
      collapsed: false, // 默认展开
      items: [
        "dev-docs/installation",
        "dev-docs/configuration",
        "dev-docs/plugins",
        "dev-docs/writing-docs",
        "dev-docs/deployment",
        "dev-docs/customization",
        "dev-docs/document-config",
      ],
    },
  ],

  // 运营文档侧边栏
  writingDocsSidebar: [
    {
      type: "doc",
      id: "writing-docs/intro",
      label: "运营文档介绍",
    },
    {
      type: "category",
      label: "文档编写指南",
      collapsible: true,
      collapsed: false,
      items: [
        "writing-docs/quick-start",
        "writing-docs/document-organization",
        "writing-docs/category-configuration",
        "writing-docs/enhanced-features",
      ],
    },
  ],
};

export default sidebars;
