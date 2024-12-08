import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro", // 对应 docs/intro.md
      label: "简介", // 自定义侧边栏标签
    },
    {
      type: "category",
      label: "基础教程", // 自定义分类名称
      collapsible: true,
      collapsed: true,
      items: [
        "tutorial-basics/create-a-document", // 对应 docs/tutorial-basics/create-a-document.md
        "tutorial-basics/create-a-page", // 对应 docs/tutorial-basics/create-a-page.md
        "tutorial-basics/deploy-your-site", // 对应 docs/tutorial-basics/deploy-your-site.md
        "tutorial-basics/markdown-features", // 对应 docs/tutorial-basics/markdown-features.md
      ],
    },
  ],
  secondSidebar: [
    {
      type: "category",
      label: "高级教程",
      collapsible: true,
      collapsed: true,
      items: [
        "tutorial-extras/manage-docs-versions", // 对应 docs/tutorial-extras/manage-docs-versions.md
        "tutorial-extras/translate-your-site", // 对应 docs/tutorial-extras/translate-your-site.md
      ],
    },
  ],
};

export default sidebars;
