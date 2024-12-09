---
sidebar_position: 6
title: 主题定制
description: 详细介绍 Docusaurus 的主题定制方法
---

# 主题定制


ocusaurus 支持主题定制。你可以通过 `src/theme` 文件夹创建自定义组件或覆盖默认组件。

## 主题定制和组件自定义

Docusaurus 提供了丰富的定制能力，允许你自定义站点的各个方面。你可以通过修改 `src/theme` 文件夹中的组件来定制默认的布局、样式和行为。

## 1. 自定义 Navbar 组件

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

## 2. 自定义页脚

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

## 3. 自定义 CSS

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