# chenyangli-phd.github.io — 仓库说明（中文）

## 概要

该仓库包含一个简单的静态个人网站（纯 HTML + CSS + 原生 JS），用于展示个人信息、研究兴趣、作品以及博客文章。博客文章以 Markdown 撰写并在浏览器端渲染。

## 主要用途

- 作为个人介绍页与博客平台的静态站点。
- 便于通过 Markdown 快速撰写与发布博文（无需构建步骤）。

## 主要文件/目录说明

- `index.html` — 网站入口（首页）。
- `Setup/css/style.css` — 主样式表。
- `Setup/js/script.js` — 站点脚本（导航、博客加载器、Markdown 渲染）。
- `Files/images/` — 图片资源目录。
- `Files/pdf/` — 简历 PDF 等文档（已把 `CV_Chenyang LI.pdf` 放在此处）。
- `Files/blogs/` — 博客文章（Markdown 文件）与清单 `posts.json`。

## 如何编写并发布一篇新博文

1. 在 `Files/blogs/` 中新增 Markdown 文件，例如 `my-post.md`。
2. 编辑 `Files/blogs/posts.json`，添加一条记录：{ "title": "文章标题", "file": "my-post.md" }。
3. 打开站点（或推送到托管服务），站点会自动加载清单并在浏览器中渲染 Markdown。

## 本地预览

在仓库根目录运行静态服务器：

```bash
python3 -m http.server 8000
```

然后在浏览器打开 `http://localhost:8000/`。

## 说明与建议

- 为了保留 Git 历史，请使用 `git mv` 执行文件重命名或移动。
- 建议文件名尽量避免空格，使用短横线或下划线以提高兼容性。
- 如果需要我帮你自动规范化 blog 文件名、生成 slug 或配置 GitHub Pages，我可以继续实现。

欢迎提出更多需求或让我帮你把功能扩展成更完善的博客系统。
