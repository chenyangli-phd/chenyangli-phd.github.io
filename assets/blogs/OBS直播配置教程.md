
# Mac使用OBS直播配置教程｜解疑答惑

&emsp;&emsp;这个教程方便Mac使用OBS直播，解决了以下几个使用Mac直播中一定会遇到的问题；

- 主流直播平台，直播推流怎么配置？

- 为什么Mac直播的时候，别人听不到电脑里的声音？

- 怎样实现别人听到我电脑里声音的同时，我也可以听到自己电脑里的声音？

&emsp;&emsp;教程主要分为以下几个部分；
[TOC]

## 软件安装

&emsp;&emsp;首先列出需要下载的软件，软件：

- 直播推流：OBS

- 模拟声卡：Soundflower

- 弹幕点歌：弹幕君

&emsp;&emsp;下载安装都非常简单，基本操作，这里就不再啰嗦，重点是音频输出的配置教程。

## 推流服务
- 先到直播间里找到推流的网址，这里以B站为例；

![](https://files.mdnice.com/user/25819/35406637-b644-48ba-8fd9-74ef863b81c9.png)

- 复制**服务器地址**和**串流密钥**到OBS推流设置；

![](https://files.mdnice.com/user/25819/c907a821-e622-4dd4-9bd5-1b5ba11175f2.png)

- 关闭即完成；

## 显示器采集

- 在来源中添加**显示器采集**；

![](https://files.mdnice.com/user/25819/eaec7a56-e976-4391-8620-5964d11ed00d.png)

- 选择内置显示器确定即可；

![](https://files.mdnice.com/user/25819/6538399c-218f-4f33-b456-3d1fa8a879fb.png)

- 可以把**显示鼠标指针**关掉，这样直播的时候就不会看到你的鼠标轨迹了。

- 另外添加到屏幕采集画面可能偏大，调整合适大小即可。


## 视频采集设备

- 选择**视频采集设备**；
![](https://files.mdnice.com/user/25819/57234ac7-3812-4709-960d-a6c8fa2d0e79.png)

- 选择 **factime高清摄像头**
![](https://files.mdnice.com/user/25819/d2d61d32-6da3-412e-beb6-77636dd352ba.jpg)

- 也可以对自拍的图片进行处理，裁切、调色等等；（鼠标放到自拍画面上-右键选项-**滤镜**）

![](https://files.mdnice.com/user/25819/50d0b8e4-f4d8-49f1-88a9-c47d0f53a182.png)


## 音频输入配置

- 添加**音频输入配置**；

![](https://files.mdnice.com/user/25819/5c98e96c-bb83-4d45-b407-782126ce318e.png)

- 选择自己想使用的麦克风即可；

![](https://files.mdnice.com/user/25819/48ffa592-28fb-416e-b7df-3ee5287cfb5a.png)


## 音频输出配置

- 重点是音频输出配置，在你已经安装好**Soundflower**的前提下，添加**音频输出配置**；

![](https://files.mdnice.com/user/25819/e28bfc06-c3d5-4f0f-b59d-51e76c650205.png)

- 如果没有安装**模拟声卡Soundflower**是不会出现一下两个设备的;

- 选择其中任意一个即可Soundflower(2ch) or Soundflower(64ch)；

## 音频Mid设置

&emsp;&emsp; 这样你在直播的时候，别人就可以听到你电脑里的声音了，**但是由于Mac声卡的原因，你没有办法自己听到电脑里的声音；**

- 在**聚焦搜索（Command+空格）**中搜索**音频MID设置**；

![](https://files.mdnice.com/user/25819/ef74ce0c-5d5c-4111-b88f-b374a521bc59.png)

- 添加**多输出设备**；

![](https://files.mdnice.com/user/25819/0ddb07fa-a397-4c73-a343-041267f1c1b7.png)

- 勾选你的耳机或者扬声器，以及音频输出时的设备Soundflower(2ch) or Soundflower(64ch)；

![](https://files.mdnice.com/user/25819/bb64e1cd-66e9-42e0-8ce6-2309fd6a8cf0.png)

- 这样之后，别人可以听到你的电脑里的声音，你也可以听到～

## 开始直播

- B站先选择开始直播；

![](https://files.mdnice.com/user/25819/a698dd95-3c1c-4bab-a6a6-0eeda3524da6.png)


- OBS添加完推流以后，点击开始推流即可；


![](https://files.mdnice.com/user/25819/ce864be0-6387-47bd-a2cd-0634dcc59185.jpg)

&emsp;&emsp; 做到这里，你的Mac就可以直播推流了，音频和画面都不会有问题～







