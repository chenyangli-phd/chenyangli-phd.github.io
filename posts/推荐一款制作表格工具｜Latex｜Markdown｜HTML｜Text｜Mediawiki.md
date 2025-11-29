# 推荐一款制作表格工具｜Latex｜Markdown｜HTML｜Text｜Mediawiki


&emsp;&emsp;我们在使用latex的时候，偶尔会用到latex画表格，我们可以使用代码模版去制作表格，只不过在添加元素的时候，需要一个一个添加，过程会比较繁琐，我常用的代码模版如下：

```
\begin{table}[h]
\centering
\begin{tabular}{|c|c|}
\hline
\textbf{Distribution} & \textbf{Conjugate Prior} \\
\hline
Bernoulli distribution & Beta distribution\\
\hline
Multinomial distribution & Dirichlet distribution\\
\hline
Gassian,Given variance,mean unknown & Gaussian distribution\\
\hline
Gassian,Given mean,variance unknown & Gamma distribution\\
\hline
Gassian,both variance,mean unknown & Gaussian-Gamma distribution\\
\hline
\end{tabular}
\end{table}
```

&emsp;&emsp;其实还有更简洁的方法快速制作表格，就是**Table Generator**，这个网站不仅可以生成**latex代码**，还可以适用于**Markdown｜HTML｜Text｜Mediawiki**，生成表格非常快捷，界面如下；

![](https://files.mdnice.com/user/25819/05a0f887-be69-4170-8de5-0efc0023032c.png)

&emsp;&emsp;这里拿**latex制作表格**为例；

- 输入我们要生成的表格内容；

![](https://files.mdnice.com/user/25819/4c181fe7-1115-41d8-bb56-f9187da4eb83.png)

- 点击**Generator**；

![](https://files.mdnice.com/user/25819/ad0e5d38-32c5-4ee5-906a-3187892af5e4.png)

- 点击右边的**Copy to clipboard**（就是复制代码的意思）；

![](https://files.mdnice.com/user/25819/cc15dee7-1751-45e5-815c-af66147148ab.png)
- 复制到Latex的代码框里运行即可；
```
\begin{table}[]
\begin{tabular}{lllll}
\hline
1  & 2  & 3  & 4  & 5  \\ \hline
6  & 7  & 8  & 9  & 10 \\
11 & 12 & 13 & 14 & 15 \\
16 & 17 & 18 & 19 & 20 \\ \hline
\end{tabular}
\end{table}
```

- 效果图如下；
![](https://files.mdnice.com/user/25819/e3e72c41-e4b1-4af6-9610-297305707003.png)

&emsp;&emsp;这里面**Markdown、HTML、Text、Mediawiki**的制作表格方法和上述类似，这里不再一一举例。
## 推荐阅读

### 科研神器

&emsp;&emsp;[【贰陆壹】分享一款Latex在线编辑器 | 附Latex常用模版](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487025&idx=1&sn=7145e41b2cd7018c86ecb8a543e9748d&chksm=fc23cabdcb5443abb2a117a1bb2733f84a4647f5b30f09a900622d8f76dd17b2cc8a0f1fa346&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰伍伍】如何利用VSCode写Markdown笔记| 附Markdown常用语法](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247486768&idx=1&sn=0db4fb823f53e90b939145e0b3172bff&chksm=fc23c9bccb5440aa65726205bd61f0a63524a090b67441d77bde311a42584ae2e0ca3d5799d2&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰伍肆】VSCode 配置Latex环境 保姆级教程](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247486759&idx=1&sn=8989a47009c2f71aa3074ccc2ab52f11&chksm=fc23c9abcb5440bd6952b060b5d30c3b9ae3cda96f93f2667734118ab9ea693d175f9fb3f205&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰柒零】推荐一款文献管理工具 Mendely Reference Manager](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487361&idx=1&sn=426568f304f7e14e7fe1ae7b47032553&chksm=fc23cb0dcb54421bc63670f687fa203ed86d1ab8f699bcdaa220fba3cf7c42a9dcc143612263&token=764014130&lang=zh_CN#rd)


### 软件工具

&emsp;&emsp;[【贰陆捌】淘宝商家在哪里找的PDF？](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487279&idx=1&sn=ffb8fe429de817f492f19cf6399f2936&chksm=fc23cba3cb5442b5e8c8b0e4c9c814441d8989a5c07c1f602f21ce78f5493c9f7f4e953be751&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰陆伍】Android/IOS/PC端影视软件汇总|告别爱腾芒优](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487194&idx=1&sn=0293522f4f58c813b888a343ab752133&chksm=fc23ca56cb544340b3bbed77ff8cede1e4b34078e76d8cab098259be676d987871f5827deaa8&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰陆肆】秒杀各大网盘的不限速大文件传输工具](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487122&idx=1&sn=65ebf73f7218b481eaf8a7075e593c61&chksm=fc23ca1ecb544308fa362e5b0d224cfac61c893f7af7230c95d813ed55e83ac3810506a7624a&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰陆叁】如何光明正大的白嫖道客巴巴文档](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487094&idx=1&sn=769c5cd532d961ea6b9265d8d137a7ad&chksm=fc23cafacb5443ec82deeb15afa7777a8cca41bab91c204044c85cb91fa9931a6150d5a5fb3a&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰陆贰】如何优雅的获取百度文库资源！？](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487071&idx=1&sn=76ac1bc10433f746515162c783bcfeb9&chksm=fc23cad3cb5443c52ca979adc3c536edfc7a5176065cd11e4ad1026119a26972edd45f4f0bb5&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰伍玖】百度网盘青春版还没开始就凉了 | 附网盘提速神器](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247486955&idx=1&sn=9850555c2872764ffe7a3c8eafa9a5a0&chksm=fc23c967cb544071b79194e8cebcfa68e0bc8b214c4ec4400e884751b95273ff0d0d34688db2&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰伍陆】分享五款简单的OCR文档扫描工具 | 无水印 | 无广告|无付费](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247486805&idx=1&sn=2e4e481760a733c1ec10af7e1ba97496&chksm=fc23c9d9cb5440cfb705532f2b9aea836475624cfe3294baf08679938dda7c573d3e5623bfb2&token=815776449&lang=zh_CN#rd)


&emsp;&emsp;[【贰伍贰】Ai配音专家 语音转文字免费配置教程（适用于mac和windows系统）](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247486526&idx=1&sn=20a3c1c915ef5a3ffbf1fb89c960b134&chksm=fc23c8b2cb5441a44fc6109ff4c25929e892e921883c61f69731e810fa060831a18e872252c3&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰柒壹】推荐一款简洁的浏览器标签页](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487389&idx=1&sn=4b9eac95d21c2051601270f1c41e7046&chksm=fc23cb11cb5442076d977dee3a7e775153069d1116dd4eea549f14d151f6ed9deb358fb6fa56&token=764014130&lang=zh_CN#rd)

&emsp;&emsp;[【贰柒叁】一站解决PDF切割 转换 拆分 合并 压缩所有问题](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487418&idx=1&sn=6addb0c371d6ac6d1ba0505bcd18d9b1&chksm=fc23cb36cb54422057af86ef1bbd3ee67943db67e94c664c43d47ca95607148d8cbebb2259b5&token=764014130&lang=zh_CN#rd)

### 教程技巧

&emsp;&emsp;[【贰陆柒】一招实现 Iphone 长截图](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487263&idx=1&sn=385fb2e4fe7db61e7cb652183a8374be&chksm=fc23cb93cb5442855673b8df7c1cd3ee5ec527664dc159f953187469bca1880a31661c94bc21&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰陆陆】满屏的烟花送给你~](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487249&idx=1&sn=e1b759520955777062a69917e18f2a57&chksm=fc23cb9dcb54428b32bc9694e4b9aaefb05fcdcf8ee6fcd9a07966b79486c19ba94051bdc44a&token=815776449&lang=zh_CN#rd)


&emsp;&emsp;[【贰陆零】分享一组有趣代码哈哈哈 | 佛祖、耶稣、龙、键盘](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247486962&idx=1&sn=db9259bcc3769bf6c6f3d82f63f83587&chksm=fc23c97ecb5440686088511d95f08ddeb76d4f3c6189e900cd7fb08882310c6111b1c91b6516&token=815776449&lang=zh_CN#rd)


&emsp;&emsp;[【贰伍捌】如何用教育优惠开通Apple Music会员 5元/月并实现会员共享](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247486916&idx=1&sn=c53881d2ed09264f6342ad3772bf6c93&chksm=fc23c948cb54405e9034b5fa8b815f45afb3464d095ab81e5da8aec116f2c0a3a357b0866b89&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰伍柒】如何将网易云音乐/QQ音乐歌单转移到Apple Music](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247486843&idx=1&sn=ec3e31c4a8b72ddfcf0f094942a5866e&chksm=fc23c9f7cb5440e1428f4c8310dbceefcf1f56574bb70717594ac741b16868ea7662b895a3cc&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰柒贰】这样设置你的Mac，效率提升好几倍](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487410&idx=1&sn=51d812fe2c2a2673fe3054733634d193&chksm=fc23cb3ecb544228f6d66ea10a7d20ee68cd921d4ecc384f6e14e33a11c8b600e11bd36939de&token=764014130&lang=zh_CN#rd)

&emsp;&emsp;以上就是今天的全部内容，如果你觉得有用的话可以关注一下公众号**不喝水就犯困**，后台回复电影名即可在线看电影～









