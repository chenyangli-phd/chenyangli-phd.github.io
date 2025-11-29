# vs code 配置latex环境保姆级配置教程（双系统）
&emsp;&emsp;众所周知，微软最近推出了自己开发的编程软件visual studio code ，这款轻量级的开源编程软件，实在是让人爱不释手，不仅可以在其上面使用python，还可以搭载各种运行环境，比如经常用的Latex、Matlab、Freefem、C++ 等软件，都可以在vs code上使用，实在是太强大了，后面会陆续更新相关软件的配置教程功能。

&emsp;&emsp;每次在使用这些第三方软件之前，都需要配置其运行环境，并且vs code更新的频率也很快，所以代码的部分语言也需要实时更新，作者是一个小白，所以要把这些好用的教程（windows版和mac版）和编程记录下来，方便以后修改哈哈哈哈。

## 一、vs code 下载安装与配置语言环境

### 1.1 vs code下载安装
&emsp;&emsp;vs code 安装很简单不再多说，搜索官方网站[1]，选择适合自己的版本安装。

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9I0wrBS4ZMOjjrOqyFicJUMhkTe4rNaxz07lYUOhTB1mZLBoFSWklN9Xp9ag6almR7QWa0ugQlc4w/0?wx_fmt=png)

### 1.2 vs code 语言环境

&emsp;&emsp;这个轻量级的软件安装以后界面如下：

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9I0wrBS4ZMOjjrOqyFicJUMBqVWRfhT9rSdRcGYMqhZd7SI3ibv5qka2pwANj5uYKs78b56GDwsicxA/0?wx_fmt=png)

&emsp;&emsp;一般的软件我们设置语言，直接就是在设置里找到语言选项，找到中文切换回来就好，但vs code的语言设置需要这样子操作：

- 快捷键 【control + shift + p】 会弹出以下搜索框
  ![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9I0wrBS4ZMOjjrOqyFicJUM5TKOx7lWrjNIg6pfy2zmH4RavW54AoN5ib1pMu5lqGozVV0Yqy0jUvg/0?wx_fmt=png)

- 在搜索框内输入【language】会出现这个选项【Configure Display Language】，点击确定。

  ![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9I0wrBS4ZMOjjrOqyFicJUMkibksHuE5naEdCwu17kTK7JRTD6iatTyI1HA76nuWiampfW4JjLkQG51A/0?wx_fmt=png)
  
- 接着选择【zh-cn】，按照提示重启，就切换成了中文界面。

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9I0wrBS4ZMOjjrOqyFicJUMT50YhnZIcFhBnz0XZMpuvkXiacdgHw1uO0XV2DqrM9DjrLyNKmicXxwQ/0?wx_fmt=png)

- 中文界面如下：

  ![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9I0wrBS4ZMOjjrOqyFicJUMX1WmR5wX4uOJYg09bUyibXnWHtcdn1uxKWD3gSicsCSeEibtV6Tw87QCw/0?wx_fmt=png)

&emsp;&emsp;到这里，我们就把vs code安装并且配置完毕。
### 1.3 安装Sumatra PDF

&emsp;&emsp;找到Sumatra PDF官方网站[4]，这个软件安装是最简单的，很大部分的软件安装过程相似，但是一定要记住安装路径，因为下面会需要安装路径，我们要配置到vs code 上。

### 1.4 下载并安装textlive编译器

&emsp;&emsp;如果要安装textive编译器（windows），有两个镜像网站阿里云开源镜像网站[2]、华为开源[3]可以下载。界面分别如下：

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWS316fKxZIeWswbc5c0YePknUZw3vFVvWiamkBsPKhiaWOqB91wP25iaMQ/0?wx_fmt=png)

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWXcvv2z2NbhXgjJDXg0TJHFiabr2X8zSuyMnMib4BtAdCRqGiaaBvQMgcA/0?wx_fmt=png)

&emsp;&emsp;找到【textlive2021】下载，下载时长约十分钟左右。

&emsp;&emsp;等待下载完成后就是安装过程。

- 打开【textlive2021】镜像文件，找到【install-tl-windows】，右键【以管理员身份打开】。

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWBzkVK4KUZR7MiatGJ4n3wbFoWq9e5L5Cic0ktNRcjvFGNHgTsTQMhy3g/0?wx_fmt=png)

- 等几秒后出现一下界面：点击左下角的【advanced】；

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWTIdadvUEX4zDSDqKScvQickExhAgdnzVSNRwXAhAib0UWRJJ0nduDb8Q/0?wx_fmt=png)

- 点击左下角的【customize】；

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWxgCIIzOhnUabRd7AzjdZWyHwDdOhGRT272dHN0dso5LoublkBBsENA/0?wx_fmt=png)

- 左边一列是语言一列，只选取我们需要的【中文】和【英文】即可，其他的语言包可以去掉，这样可以节省1G的文件内存。之后点击【确定】。

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfW8dQcnTXuUvM3vBibQ2HMpHNf931nZQxFFc2fxAACy5ibszDudBmmicvjw/0?wx_fmt=png)

- 找到右下角的【安装texworks前端】，这个选项可以取消，也可以保留，不过既然都已经选择使用vs code编辑latex了，我想也不会使用【texworks】编辑。

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWUfbAYiaKRsjWzBL5iceyiasx4OUUocbQSbemD7omWAGTZicaV1lmA7ENHQ/0?wx_fmt=png)

- 之后就是漫长的安装时间，安装时间大约半个小时左右，安装好以后关掉软件即可。

### 1.5 在vs code上配置latex环境

&emsp;&emsp;接下来进入关键的一步，在vs code 上配置latex环境，第一步已经将latex调整为中文界面，接下来打开你的vscode。

- 首先我们需要先安装插件【latex workshop】，找到界面左边一列的【拓展】；

  ![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWFoXgvr9wAMZ58jDClW2JRI0Enz3GXPZpvlEnbicKHNGxmdqpLNltcPA/0?wx_fmt=png)


- 搜索【latex workshop】并安装；

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWnPaWQ4lunev0r5xibTJiavxgmFaW8Tb9VrZ9taPpkS0bKwfHypWBiaYdw/0?wx_fmt=png)


- 下一步，点击左下角的齿轮⚙️ 打开【设置】
  ![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWxO2icIBa2vTtqxx7ne8Z8TcL1vmwvkKUXUlgeqcLoXbibV0dlbhY8UfA/0?wx_fmt=png)
- 在【设置】中的【拓展】找到【JSON】,点击【在setting.json中编辑】。

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWujFAuVVKDibJibBLZzdicD4ZyESOIeKDYwz0aAz80DZtHhxbxlUljbetg/0?wx_fmt=png)

- 将下列的代码复制到输入框；保存并关闭。那么配置过程就配置完毕！

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWfBdBkuicYZXQRjh06YZ7Ou8WKPaVP5JEVhZXeaenV1RUxL1LwSJDKZA/0?wx_fmt=png)

&emsp;&emsp;配置代码如下：

&emsp;&emsp;代码每一行的命令都有注释，不清楚的也可以在vs code上将光标放到程序上，vs code也会解释代码的含义，注意，代码需要更改的地方是你的软件的位置，这个很重要，一定要修改成你电脑上的软件所在路径。

```
{
    //使用 SumatraPDF 预览编译好的PDF文件
    // 设置VScode内部查看生成的pdf文件
    // PDF查看器用于在\ref上的[View on PDF]链接
    "latex-workshop.view.pdf.ref.viewer":"auto",
    // 使用外部查看器时要执行的命令。此功能不受官方支持。
    "latex-workshop.view.pdf.external.viewer.command": "C:/SumatraPDF/SumatraPDF.exe", // 注意修改路径
    // 使用外部查看器时，latex-workshop.view.pdf.external.view .command的参数。此功能不受官方支持。%PDF%是用于生成PDF文件的绝对路径的占位符。
    "latex-workshop.view.pdf.external.viewer.args": [
        "%PDF%"
    ],
    // 将synctex转发到外部查看器时要执行的命令。此功能不受官方支持。
    "latex-workshop.view.pdf.external.synctex.command": "C:/SumatraPDF/SumatraPDF.exe", // 注意修改路径
    // latex-workshop.view.pdf.external.synctex的参数。当同步到外部查看器时。%LINE%是行号，%PDF%是生成PDF文件的绝对路径的占位符，%TEX%是触发syncTeX的扩展名为.tex的LaTeX文件路径。
    "latex-workshop.view.pdf.external.synctex.args": [
        "-forward-search",
        "%TEX%",
        "%LINE%",
        "-reuse-instance",
        "-inverse-search",
        "\"C:/Microsoft VS Code/Code.exe\"\" \"C:/Microsoft VS Code/resources/app/out/cli.js\" -r -g \"%f:%l\"", // 注意修改路径
        "%PDF%"
    ],
    "editor.minimap.enabled": true, //控制是否显示缩略图。
    //定义要在配方中使用的 LaTeX 编译工具。每个工具都标有其名称。 
    //调用时，命令会使用 args 中定义的参数和 env 中定义的环境变量生成。 
    //通常，除非在路径中，否则每个参数中不应出现空格。
    //占位符 %DOC%、%DOC_W32%、%DOC_EXT%、%DOC_EXT_W32%、%DOCFILE%、%DOCFILE_EXT%、%DIR%、%DIR_W32%、%TMPDIR% 和 %OUTDIR%、%OUTDIR_W32% 可用.
    "latex-workshop.latex.tools": [
        {
          "name": "latexmk",
          "command": "latexmk",
          "args": [
          "-synctex=1",
          "-interaction=nonstopmode",
          "-file-line-error",
          "-pdf",
          "%DOC%"
          ]
        },
        {
          "name": "xelatex",
          "command": "xelatex",
          "args": [
          "-synctex=1",
          "-interaction=nonstopmode",
          "-file-line-error",
          "%DOC%"
            ]
        },          
        {
          "name": "pdflatex",
          "command": "pdflatex",
          "args": [
          "-synctex=1",
          "-interaction=nonstopmode",
          "-file-line-error",
          "%DOC%"
          ]
        },
        {
          "name": "bibtex",
          "command": "bibtex",
          "args": [
          "%DOCFILE%"
          ]
        }
      ],
  "latex-workshop.latex.recipes": [
        {
          "name": "xelatex",
          "tools": [
          "xelatex"
                      ]
                },
        {
          "name": "latexmk",
          "tools": [
          "latexmk"
                      ]
        },

        {
          "name": "pdflatex -> bibtex -> pdflatex*2",
          "tools": [
          "pdflatex",
          "bibtex",
          "pdflatex",
          "pdflatex"
                      ]
        }
      ],
  "latex-workshop.view.pdf.viewer": "tab",
  "latex-workshop.latex.clean.enabled": true,
  "latex-workshop.latex.clean.fileTypes": [
      "*.aux",
      "*.bbl",
      "*.blg",
      "*.idx",
      "*.ind",
      "*.lof",
      "*.lot",
      "*.out",
      "*.toc",
      "*.acn",
      "*.acr",
      "*.alg",
      "*.glg",
      "*.glo",
      "*.gls",
      "*.ist",
      "*.fls",
      "*.log",
      "*.fdb_latexmk"
    ],
    //设置为onFaild 在构建失败后清除辅助文件
    "latex-workshop.latex.autoClean.run": "onFailed",
    // 使用上次的recipe编译组合
    "latex-workshop.latex.recipe.default": "lastUsed",
    // 用于反向同步的内部查看器的键绑定。ctrl/cmd +点击(默认)或双击
    "latex-workshop.view.pdf.internal.synctex.keybinding": "double-click",
    //右键菜单
    "latex-workshop.showContextMenu":true,
    //从使用的包中自动补全命令和环境
    "latex-workshop.intellisense.package.enabled": true,
    //将 glob 模式配置到编辑器(例如 "*十六进制": "hexEditor.hexEdit")。这些优先顺序高于默认行为。
    "workbench.editorAssociations": {
        "*.ipynb": "jupyter-notebook"
    },
    "kite.showWelcomeNotificationOnStartup": false,    //需要安装kite，show the Kite welcome notification on startup.
    "python.defaultInterpreterPath": "E:\\Python\\python.exe", //python路径
    //应在何处显示单元格工具栏，或是否隐藏它。
    "notebook.cellToolbarLocation": {
        "default": "right",
        "jupyter-notebook": "left"//为特定文件类型配置单元格工具栏位置
    },
    //若设置为 true，则自动从当前 Git 存储库的默认远程库提取提交。若设置为“全部”，则从所有远程库进行提取。
    "git.autofetch": true,
    //始终信任工作区
    "security.workspace.trust.untrustedFiles": "open",
    //不显示新版本消息
    "vsicons.dontShowNewVersionMessage": true,
    //针对某种语言，配置替代编辑器设置
    "[latex]": {
        "editor.formatOnPaste": false,//针对某种语言，配置替代编辑器设置
        "editor.suggestSelection": "recentlyUsedByPrefix" //控制在建议列表中如何预先选择建议。recentlyUsedByPrefix: 根据之前补全过的建议的前缀来进行选择。例如，co -> console、con -> const。
    },
    "code-runner.clearPreviousOutput": true,
    "code-runner.saveAllFilesBeforeRun": true,
    "code-runner.runInTerminal": true,
    "workbench.colorTheme": "Solarized Dark",
}
```
### 1.6 测试环节
&emsp;&emsp;接下来我们就测试一下看看，是否调试成功。

- 在桌面新建文件夹，并在vs code 上打开文件夹【test1】；

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWlu91T4XdOtlgxzDFffAQvdWjiag7XLLtK5t1tYg8ibq1bVEz0GO9Cq9Q/0?wx_fmt=png)

- 在vs code上，找到【test1】文件夹，并点击第一个选项【新建文件】；

- 新建文件【test.tex】，一定要加后缀名【.tex】，如果没有后缀名【.tex】，vs code不能识别latex文档；

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWWcEiaXRN0ta320so2H8AKM6yiaBZiaEqqyqk26KwIHiaFOV9m1mzo2O1xg/0?wx_fmt=png)

- 复制下列代码到输入框，并保存；

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWDCPSiaBnEGEZ4aQcAouhgQoQNjMB1rDRHvNtLgpMaXF7DObqqamsb2g/0?wx_fmt=png)

```
\documentclass[fontset=windows]{article}
\usepackage[zihao=-4]{ctex}
\usepackage[a4paper]{geometry}
\begin{document}
\centering
\LaTeX，你好呀！
\end{document}
```
- 接着看到左边一列有一个花写【tex】按钮，点击。

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWw2orM6QqtbzibKhM1StOPudFRBAbqVap5GN8Aekxqn6PAyRYYe3sMtw/0?wx_fmt=png)

- 找到第一个按钮【Build latex project】，点击展开，找到【Recipe：pdflatex....】，点击；

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWJD3EXsY0hgDB4jfuiaMVJcXccMJ0mNVY05Bdq4bs3rBjAUcwSRQibdRw/0?wx_fmt=png)

- 你会看到最下面有编译进展；

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWw6aABsr1oCBOdPCYqOao0fXs1ia3rhDL2iah4Zv8PszntCjicGnQL4upQ/0?wx_fmt=png)

- 成功后，再找到左上角【View LaTex Pdf】，点击展开，找到【View in VSCode tab】并点击确定。

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfW32ciburr2pqa73CpklUfibdrYf8CyYLIa20qWaWswXVJiaxBKaDOlHPvg/0?wx_fmt=png)

- 看到如下界面；就说明测试成功；接下来就可以愉快的在vs code上敲latex啦～

![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWGoQjuMppVoAtjicGmXcG2ibuqp6wj03O8vVCYE3FFx2Q7icttlw1iakSnw/0?wx_fmt=png)

# 二、vs code配置latex教程mac版本
&emsp;&emsp;mac上配置latex相对来说比较简单，在这里简单说明一下，同样是使用vs code下载软件
- vs code 安装; (见1.1)
- vs code 中文环境配置； (见1.2)
- vs code 安装插件【latexworkshop】； (1.5)
- 下载【MacTex】

  &emsp;&emsp;mac上的tex编译软件和windows不太一样，前面windows使用的是【textive2021】，这里mac使用的是【MacTex】，配置过程比较简单，找到【MacTex】官网[5]，下载安装即可。下载完成后关闭。

- 测试环节；(见1.6)
  
## 参考网站和资料

[1] visual studio code 官方网站：https://code.visualstudio.com

[2] 阿里云开源镜像网站： https://mirrors.aliyun.com/CTAN/systems/texlive/Images/

[3] 华为开源： https://mirrors.huaweicloud.com/CTAN/systems/texlive/Images/

[4] Sumatra PDF 官方网站： https://www.sumatrapdfreader.org/free-pdf-reader 

[5] MacTex 下载网站：https://tug.org/mactex/



![img](https://mmbiz.qpic.cn/sz_mmbiz_png/WefE7OF5zK9m9wbpQHiarJ1Zbt1eyKDfWEUmt6YHowBicSb5fIpr9q5AvWvK6xqJEDTs4vxqLicCeCg2sJiaZh7Ofg/0?wx_fmt=png)