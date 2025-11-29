<!--
 * @Author: your name
 * @Date: 2021-11-24 15:23:18
 * @LastEditTime: 2022-02-02 19:44:47
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Code/Markdown 源代码/2021.11.24 Ai配音专家 免费配置教程（适用于mac和windows系统）/Ai配音专家 免费配置教程（适用于mac和windows系统）.md
-->
# Ai配音专家 语音转文字免费配置教程（适用于mac和windows系统）

  推荐一款免费文本转语音的软件，文件来源于github，如果你在做自媒体的时候也不想用真音，那这款软件绝对适合你。配置过程分为以下内容：

[TOC]



## 1. Ai配音专家安装

  这款软件安装很简单，但是安装好并不代表我们就能使用，因为这款软件需要我们调用语音包，而这款软件的语音包就来自于**阿里语音合成引擎**,   [下载链接](https://github.com/bawangxx/XZVoice)
  软件中其实还有背景音乐，github网站中也有附带，需要的可以自行下载。
  软件安装成功后会出现这样的界面：
![软件截图.jpg](https://i.loli.net/2021/11/24/RMaXJHxcwYm2fsj.png)

## 2. 获取自定义key
因为本身软件其实是不可以文本转成语音的，所以我们需要调用语音包，采用的是**阿里语音合成引擎**。
![key.png](https://i.loli.net/2021/11/24/wNupjW4yJc1DfVL.png)

### 2.1 获取AccessKey ID 和 AccessKey Secret

- 登陆 [阿里云网站](https://www.aliyun.com/?spm=5176.12818093.top-nav.dlogo.5adc16d0eErzGv)  注册并登陆。

- 然后进入[资源管理界面](https://homenew.console.aliyun.com/home/dashboard/ResourceDashboard)，鼠标放到右上角图标上，点击这个选项【accesskey管理】：

  ![管理.png](https://i.loli.net/2021/11/24/8gfOXjRDEwipcWZ.png)

- 点击【继续使用AccessKey】并【创建AccessKey】
  创建完成后，点击【查看Secret】，并复制如下图所示的AccessKey ID和AccessKey Secret，粘贴到我们下载好的软件里，接下来就差appkey需要获取。

  ![id.png](https://i.loli.net/2021/11/24/7HIpxVS1FRzGfg8.png)

### 2.2 获取appkey
- appkey的获取需要我们到[获取appkey](https://nls-portal.console.aliyun.com/applist)中获取
- 点击创建项目，选择语音合成功能就可以。

![项目.png](https://i.loli.net/2021/11/24/K6s8SuzCg7LBjMr.png)

- 你会看到你创建好的项目，并复制我们所需要的【appkey】，粘贴到【Ai配音专家】中即可。

![appkey.png](https://i.loli.net/2021/11/24/cPoM9OHenBER7Nw.png)
## 3. 软件使用

完成以上步骤以后，你的软件就可以使用了。
- 输入文本
- 点击【开始转换】
- 点击【试听一下】
如果出现转换成功，恭喜你，配置成功！

## 4. 注意事项

1. 在注册用户的时候需要身份认证是正常现象，这是阿里云网站提供的服务。
2. 在获取【AccessKey ID】、【AccessKey Secret】、【appkey】时，省略了一些繁琐步骤，不过没有技术难度。
2. 在获取【appkey】的过程中，如果看不懂可以参考github大神的[详细获取方案](https://github.com/bawangxx/XZVoice/wiki/阿里语音合成自定义key申请教程)
## 5. 参考资料 
[1] Ai配音专家下载链接: https://github.com/bawangxx/XZVoice

[2] 阿里云网站: https://www.aliyun.com/?spm=5176.12818093.top-nav.dlogo.5adc16d0eErzGv

[3] 资源管理界面: https://homenew.console.aliyun.com/home/dashboard/ResourceDashboard

[4] 获取appkey: https://nls-portal.console.aliyun.com/applist

[5] 详细获取方案: https://github.com/bawangxx/XZVoice/wiki/阿里语音合成自定义key申请教程
