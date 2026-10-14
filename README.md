# Chenyang Li - Personal Portfolio Website

<div align="center">

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=for-the-badge&logo=github)](https://chenyangli-phd.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**🎓 Ph.D. Student in Computational Mathematics | 📷 Photography Enthusiast**

[在线预览](https://chenyangli-phd.github.io) • [博客](https://chenyangli-phd.github.io/assets/blogs/index.html) • [摄影作品](https://chenyangli-phd.github.io/assets/photography-blog/index.html)

</div>

---

## 📖 项目简介

这是 **Chenyang Li (李晨阳)** 的个人学术主页与作品集网站，用于展示：

- 🔬 **学术研究** - 计算数学领域的研究方向与成果
- 💻 **技术技能** - 编程语言与科学计算工具
- 📚 **教育背景** - 学术履历与访学经历
- ✍️ **博客文章** - 70+ 篇技术分享与生活随笔
- 📷 **摄影作品** - 旅行与风景摄影集

---

## 🌐 在线预览

| 页面 | 链接 |
|------|------|
| 🏠 主页 | [https://chenyangli-phd.github.io](https://chenyangli-phd.github.io) |
| 📄 出版物 | [html/publication.html](https://chenyangli-phd.github.io/html/publication.html) |
| 📚 教学 | [html/teaching.html](https://chenyangli-phd.github.io/html/teaching.html) |
| 📝 博客列表 | [/assets/blogs/index.html](https://chenyangli-phd.github.io/assets/blogs/index.html) |
| 🎬 视频 | [html/video.html](https://chenyangli-phd.github.io/html/video.html) |
| 📷 摄影作品 | [/assets/photography-blog/index.html](https://chenyangli-phd.github.io/assets/photography-blog/index.html) |
| 🧭 导航页 | [html/navigation.html](https://chenyangli-phd.github.io/html/navigation.html) |

---

## ✨ 功能特性

### 🎨 界面设计
- **响应式布局** - 完美适配桌面端、平板和移动设备
- **玻璃拟态设计 (Glassmorphism)** - 现代化的毛玻璃卡片效果（部分页面）
- **深色/浅色主题** - 支持一键切换，状态自动保存到 localStorage
- **渐变色彩** - 紫色、粉色、绿色、黄色的渐变点缀
- **背景图片** - 导航页使用新疆雪山背景图，营造沉浸式体验
- **透明卡片设计** - 导航页采用透明卡片，背景图清晰可见

### ⚡ 交互动效
- **滚动进度条** - 页面顶部显示阅读进度
- **滚动动画** - 基于 Intersection Observer 的元素入场动画
- **导航指示器** - 自动追踪当前所在板块
- **技能条动画** - 进入视口时触发的百分比填充动画
- **悬停效果** - 卡片悬浮、阴影、位移等微交互

### 🎵 音乐播放器
- 内置浮动音乐播放器
- 支持播放/暂停、上一首/下一首
- 自动播放下一首
- 显示歌曲封面、标题和艺术家

### 📝 博客系统
- **Markdown 支持** - 使用 Markdown 格式撰写博客
- **分类筛选** - 按类别筛选文章
- **搜索功能** - 关键词搜索文章
- **70+ 篇文章** - 涵盖技术教程、工具推荐、生活感悟
- **美化样式** - 优化的代码块、引用块、表格、链接等样式
- **阅读体验** - 改进的排版、间距和动画效果

### 📷 摄影作品集
- 相册式展示
- 按地点/时间分类
- 支持图片预览

### 🧭 导航页 (html/navigation.html)
- **多搜索引擎** - 支持 Google、Bing、Google Scholar 搜索，一键切换
- **分类导航** - 三大分类：
  - 🤖 **AI助手** - ChatGPT、DeepSeek、Grok、Gemini、Kimi、Claude
  - 🔬 **科研** - GitHub、Google Scholar、MathSciNet、ResearchGate、大小写转换工具
  - ☕ **摸鱼** - YouTube、哔哩哔哩、知乎、小红书、Pinterest
- **快速访问** - 16+ 个常用网站快速链接，图标化展示
- **背景动画** - 动态渐变背景、浮动装饰元素和光晕效果
- **默认夜间模式** - 页面默认以暗色主题显示，支持一键切换
- **透明卡片设计** - 使用新疆雪山背景图，透明卡片让背景清晰可见
- **实时时间显示** - 顶部显示当前时间和日期（已移除）

### 📊 访客统计
- **MapMyVisitors 集成** - 3D 地球展示访客分布
- **全站统计** - 统计所有页面的访问数据（主页、Publication、Teaching、Blog、Video、Photography、导航页）
- **实时数据** - 显示全球访客来源和访问量

---

## 🏗️ 项目架构

### 整体结构

```
chenyangli-phd.github.io/
├── 📄 index.html                    # GitHub Pages 首页入口
├── 📁 html/                         # 独立 HTML 页面目录
│   ├── 📄 publication.html
│   ├── 📄 teaching.html
│   ├── 📄 video.html
│   ├── 📄 navigation.html
│   ├── 📄 navigation260625.html
│   ├── 📄 journal.html
│   └── 📄 dailynote.html
├── 📄 README.md                     # 项目说明文档
│
├── 📁 css/                          # 样式文件目录
│   ├── 📄 style.css                 # 主样式文件
│   └── 📁 components/               # 组件化 CSS（模块化设计）
│       ├── 📄 base.css              # 基础样式、CSS 变量、重置样式
│       ├── 📄 header.css            # 头部导航栏样式
│       ├── 📄 hero.css              # 首屏 Hero 区域样式
│       ├── 📄 music-player.css      # 音乐播放器样式
│       ├── 📄 sections.css          # 通用板块样式
│       ├── 📄 about.css             # About Me 板块样式
│       ├── 📄 skills.css            # Skills 技能板块样式
│       ├── 📄 projects.css          # 项目展示样式
│       ├── 📄 blog.css              # 博客卡片样式
│       ├── 📄 experience.css        # 教育/经历时间线样式
│       ├── 📄 contact.css           # 联系方式样式
│       ├── 📄 animations.css        # 动画效果定义
│       ├── 📄 awards.css            # 奖项展示样式
│       ├── 📄 footer.css            # 页脚样式
│       ├── 📄 wakatime.css          # WakaTime 统计样式
│       ├── 📄 featured-projects.css # 精选项目样式
│       ├── 📄 interactive-skills.css# 交互式技能展示
│       ├── 📄 theme.css             # 主题切换相关样式
│       ├── 📄 share.css             # 分享功能样式
│       ├── 📄 visitor-stats.css     # 访客统计样式
│       ├── 📄 i18n.css              # 国际化样式
│       └── 📄 sidebar.css           # 侧边栏样式
│
├── 📁 js/                           # JavaScript 文件目录
│   ├── 📄 scripts.js                # 主脚本（所有交互逻辑）
│   ├── 📄 playlist.js               # 音乐播放列表数据
│   └── 📄 i18n.js                   # 国际化脚本
│
└── 📁 assets/                       # 静态资源目录
    ├── 📁 blogs/                    # 博客文章
    │   ├── 📄 index.html            # 博客列表页
    │   ├── 📄 post.html             # 博客详情页模板（美化样式）
    │   └── 📄 *.md                  # Markdown 格式的博客文章 (70+)
    │
    ├── 📁 photography/              # 摄影作品原图
    │   ├── 📁 20251001 圣安德鲁斯 St Andrews/
    │   ├── 📁 20251023 爱丁堡 Edinburgh/
    │   ├── 📁 20251116 Loch Brandy/
    │   └── 📁 20251203 格拉斯哥 Glasgow/
    │
    ├── 📁 photography-blog/         # 摄影博客
    │   ├── 📄 index.html            # 摄影作品列表页
    │   └── 📄 post.html             # 摄影详情页模板
    │
    ├── 📁 music/                    # 音乐文件 (MP3)
    ├── 📁 pic/                      # 网站图片资源（包含背景图）
    └── 📁 resume/                   # 简历文件 (PDF)
```

### CSS 架构说明

采用 **组件化 CSS 架构**，每个组件独立管理样式：

| 文件 | 用途 |
|------|------|
| `base.css` | CSS 变量定义、全局重置、基础样式、玻璃卡片效果 |
| `header.css` | 固定导航栏、Logo、导航链接、主题切换按钮 |
| `hero.css` | 首屏大图、个人资料卡片、社交链接、滚动提示 |
| `sections.css` | 通用板块标题、徽章、下划线样式 |
| `animations.css` | 入场动画、过渡效果、关键帧定义 |
| `theme.css` | 深色/浅色主题的变量覆盖 |

### JavaScript 功能模块

`scripts.js` 包含以下功能模块：

```javascript
// 1. Header & Progress Bar - 滚动显示/隐藏导航栏，更新进度条
// 2. Scroll Animations - Intersection Observer 实现滚动动画
// 3. Skills Bar - 动态生成技能条，进入视口时触发动画
// 4. Music Player - 播放控制、切歌、自动播放
// 5. Nav Indicator - 导航指示器跟踪当前板块
// 6. Theme Toggle - 深色/浅色主题切换与持久化
```

---

## 🛠️ 技术栈

### 前端技术

| 技术 | 用途 | 版本/来源 |
|------|------|----------|
| **HTML5** | 语义化标记、结构搭建 | - |
| **CSS3** | 样式设计、Flexbox/Grid 布局、动画 | - |
| **JavaScript (ES6+)** | 交互逻辑、DOM 操作 | Vanilla JS |
| **CSS Variables** | 主题切换、颜色管理 | - |
| **Intersection Observer API** | 滚动动画触发 | - |
| **LocalStorage API** | 主题偏好持久化 | - |

### 外部依赖

| 资源 | 用途 | CDN |
|------|------|-----|
| **Google Fonts - Sora** | 主字体 | fonts.googleapis.com |
| **Font Awesome 6.5.1** | 图标库 | cdnjs.cloudflare.com |
| **Marked.js** | Markdown 解析器 | cdn.jsdelivr.net |
| **Google Analytics** | 网站分析 | googletagmanager.com |
| **MapMyVisitors** | 访客统计 | mapmyvisitors.com |

### 设计特性

| 特性 | 说明 |
|------|------|
| **Glassmorphism** | 毛玻璃效果 (`backdrop-filter: blur()`) |
| **CSS Grid** | 博客/作品网格布局 |
| **CSS Flexbox** | 弹性盒子布局 |
| **CSS Transitions** | 平滑过渡动画 |
| **CSS Keyframes** | 自定义动画 |
| **Responsive Design** | 媒体查询适配多端 |

---

## 📄 页面板块详解

### 🏠 主页 (index.html)

| 板块 | ID | 描述 |
|------|-----|------|
| **Hero** | `#hero` | 首屏展示区，包含个人卡片、简介、社交链接 |
| **About Me** | `#about` | 研究方向介绍、个人信息、简历下载 |
| **Technical Stack** | `#skills` | 技术栈展示（FreeFem++、Matlab、FEniCS、Python 等） |
| **Education** | `#experience` | 教育背景时间线（博士、硕士、本科） |
| **Experiences** | `#experiences` | 访学与学术经历 |
| **Projects** | `#projects` | 研究项目列表 |
| **Honors and Awards** | `#awards` | 荣誉和奖项展示 |
| **Publications** | `#publications` | 已发表论文（当前隐藏） |
| **Blog** | `#blog` | 精选博客文章展示 |
| **Photography** | `#photography` | 精选摄影作品展示 |
| **Visitor Statistics** | `#visitor-stats` | 访客统计（3D 地球展示） |
| **Footer** | - | 页脚信息、快速链接、版权声明 |

### 📄 其他页面

| 页面 | 描述 |
|------|------|
| **Publication** | 详细的出版物列表页面 |
| **Teaching** | 教学相关内容和课程信息 |
| **Video** | 视频内容展示 |
| **Navigation** | 个性化导航页，包含常用网站快速访问 |

### 📝 博客系统

**文章分类涵盖：**
- 🔧 **工具推荐** - 各类效率工具、下载神器
- 💻 **技术教程** - LaTeX、Python、FEniCS、VS Code 配置
- 📖 **读书笔记** - 认知觉醒、成长感悟
- 🎬 **影视资源** - 影视解析、音乐下载
- 📚 **学术相关** - 文献管理、论文写作
- 🌍 **生活记录** - 旅行、摄影、随笔

**热门文章：**
- 单篇文章阅读量破 45 万！
- 在 FEniCS 上利用 Chorin 投影求解 Navier-Stokes 方程
- 认知觉醒：开始自我改变的原动力

### 📷 摄影作品集

按旅行地点与时间分类：
- 🏴󠁧󠁢󠁳󠁣󠁴󠁿 **圣安德鲁斯 St Andrews** (2025.10.01)
- 🏴󠁧󠁢󠁳󠁣󠁴󠁿 **爱丁堡 Edinburgh** (2025.10.23)
- 🏴󠁧󠁢󠁳󠁣󠁴󠁿 **Loch Brandy** (2025.11.16)
- 🏴󠁧󠁢󠁳󠁣󠁴󠁿 **格拉斯哥 Glasgow** (2025.12.03)

---

## 🎵 音乐播放列表

内置以下歌曲：

| 歌曲 | 艺术家 |
|------|--------|
| On & On | Cartoon, Jéja |
| All Falls Down | Alan Walker |
| Faded | Alan Walker |
| The Spectre | Alan Walker |
| Lily | Alan Walker, K-391 & Emelie Hollow |
| Way Back Home | Conor Maynard |
| That Girl | Olly Murs |

---

## 🚀 本地运行

### 方式一：Python HTTP Server

```bash
# 克隆仓库
git clone https://github.com/chenyangli-phd/chenyangli1004.git
cd chenyangli1004

# 启动本地服务器
python -m http.server 8000
```

### 方式二：Node.js (npx serve)

```bash
# 克隆仓库
git clone https://github.com/chenyangli-phd/chenyangli1004.git
cd chenyangli1004

# 使用 npx serve
npx serve
```

### 方式三：VS Code Live Server

1. 安装 VS Code 扩展：**Live Server**
2. 右键点击 `index.html`
3. 选择 **Open with Live Server**

访问地址：`http://localhost:8000` 或 `http://localhost:5500`

---

## 🎨 主题配置

### 颜色变量 (CSS Variables)

```css
/* 深色主题 (默认) */
:root {
    --bg-dark: #121212;
    --bg-card: rgba(28, 28, 31, 0.6);
    --border-color: rgba(255, 255, 255, 0.1);
    --text-primary: #f4f4f5;
    --text-secondary: #a1a1aa;
    --gradient-purple: #c084fc;
    --gradient-pink: #f472b6;
    --gradient-green: #4ade80;
    --gradient-yellow: #facc15;
}

/* 浅色主题 */
body.light-mode {
    --bg-dark: #f5f5f5;
    --bg-card: rgba(255, 255, 255, 0.8);
    --border-color: rgba(0, 0, 0, 0.1);
    --text-primary: #212121;
    --text-secondary: #5f5f5f;
}
```

---

## 📊 技能展示

| 技能 | 熟练度 | 图标 |
|------|--------|------|
| FreeFem++ | 80% | 🧮 |
| LaTeX | 70% | 📄 |
| Matlab | 50% | 📈 |
| FEniCS | 50% | 🧊 |
| Python | 40% | 🐍 |
| C++ | 40% | 💻 |
| HTML | 30% | 🌐 |
| CSS | 30% | 🎨 |
| Jupyter Notebook | 20% | 📓 |

---

## 👨‍🎓 关于作者

**Chenyang Li (李晨阳)**

- 🎓 华东师范大学数学科学学院 计算数学博士在读
- 🔬 研究方向：偏微分方程数值方法、有限元方法、多物理场耦合问题
- 📷 摄影爱好者
- 🌍 目前在英国邓迪大学访学 (2025.09 - 2026.09)

### 研究领域

- **计算流体力学** - Computational Fluid Dynamics
- **偏微分方程数值解** - Numerical Solution of PDEs
- **有限元方法** - Finite Element Methods
- **稳定化混合有限元** - Stabilized Mixed FEM
- **变密度耦合模型** - Variable Density Coupling Models

### 研究课题

- Navier-Stokes 方程
- Stokes-Darcy 系统
- 自然对流模型
- 磁流体动力学 (MHD) 系统
- 趋化-Navier-Stokes 系统
- Ericksen-Leslie 液晶系统

---

## 📬 联系方式

<div align="center">

| 平台 | 链接 |
|------|------|
| 📧 Email | [chenyangli1004@gmail.com](mailto:chenyangli1004@gmail.com) |
| 🎓 Google Scholar | [Chenyang Li](https://scholar.google.com/citations?user=EdKat8YAAAAJ&hl=zh-CN) |
| 📖 知乎 | [@li-chen-yang-59-57](https://www.zhihu.com/people/li-chen-yang-59-57) |
| 📺 Bilibili | [Space](https://space.bilibili.com/85644653) |
| 💬 微信公众号 | [文章链接](https://mp.weixin.qq.com/s/ij2IJCCA_LOGfJffvB2-1w) |

</div>

---

## 📝 更新日志

| 日期 | 更新内容 |
|------|----------|
| 2025.12 | 添加格拉斯哥摄影作品 |
| 2025.12 | 新增导航页（navigation.html），包含多搜索引擎和快速访问链接 |
| 2025.12 | 美化博客文章页面样式（代码块、引用块、表格、链接等） |
| 2025.12 | 添加全站访客统计功能（MapMyVisitors） |
| 2025.12 | 导航页默认夜间模式，添加背景图片和动画效果 |
| 2025.11 | 添加 Loch Brandy 摄影作品 |
| 2025.10 | 添加爱丁堡、圣安德鲁斯摄影作品 |
| 2025.10.14 | 网站最近一次大更新 |

---

## 📜 License

本项目采用 **MIT 许可证** - 详见 [LICENSE](LICENSE) 文件

```
MIT License

Copyright (c) 2025 Chenyang Li

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
```

---

<div align="center">

**⭐ 如果你喜欢这个项目，欢迎 Star！**

Made with ❤️ by [Chenyang Li](https://chenyangli-phd.github.io)

</div>
