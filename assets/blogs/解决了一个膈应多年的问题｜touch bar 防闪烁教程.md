# 【叁贰柒】解决了一个膈应多年的问题｜touch bar 防闪烁教程

&emsp;我这台战斗机已经用到第五年了，平常用来写论文 跑程序 修照片都很流畅，除了剪视频处理素材过大就会反应贼慢，不过我现在不经常剪视频，平均一个月一条几十分钟的vlog，所以没有想着换掉。

![](https://files.mdnice.com/user/25819/c690fb06-d739-44ab-aec1-8a778b400cf5.png)

&emsp;但是之前导视频比较频繁，touch bar老是发烫我怀疑被烧坏了，然后一直会不定时的闪烁，很影响使用体验，然后我用黑色胶带把touch bar粘住，这一粘就是两三年哈哈哈哈哈，发现别人也这样子搞，哈哈哈哈笑不活了

![](https://files.mdnice.com/user/25819/85ea6c10-333c-475e-b3ff-5f79c0345b7c.png)

&emsp;今天我尝试去解决它，然后真的就不闪烁了，通过写一个小程序把它解决了哈哈哈

下面介绍我的方法

## 1: 设备键盘熄灭时间

![](https://files.mdnice.com/user/25819/f4a6ec1a-ae60-42ce-b2b2-2c1f65537d60.png)

&emsp; ⚠️：这里一定要设置闲置一分钟后关闭键盘背光灯

## 2: 利用脚本编辑器书写程序
```
global computerIsInUse, resetTime
  
on run
	set computerIsInUse to true
	set resetTime to (do shell script "date +%s") as integer
end run
 
on idle
	set idleTime to (do shell script "ioreg -c IOHIDSystem | awk '/HIDIdleTime/ {print $NF; exit}'") as integer
	if idleTime is greater than 5.9E+10 then
		if computerIsInUse then
			do shell script "pkill TouchBarServer" user name "用户名字" password "开机密码" with administrator privileges
			set computerIsInUse to false
		end if
	end if
	if idleTime is less than 5.9E+10 then
		set computerIsInUse to true
	end if
	
	set now to (do shell script "date +%s") as integer
	if (not computerIsInUse) and ((now - resetTime) is greater than 59) then
		do shell script "pkill TouchBarServer" user name "用户名" password "开机密码" with administrator privileges
		set resetTime to (do shell script "date +%s") as integer
	end if
	return 1
end idle
```

&emsp; 1⃣️：复制上述程序脚本编辑器里，文件位置随便放，⚠️：填写上面程序的“用户名字”和“开机密码”；

![](https://files.mdnice.com/user/25819/cfcd4306-4832-4424-80fa-1c1534214ecb.png)

&emsp; 2⃣️：导出脚本，⚠️：文件格式为应用程序，运行处理程序后保持打开，签名以本地运行；
![](https://files.mdnice.com/user/25819/f2d03aa0-dd48-4ae8-b1e5-87cbcd41ce9f.png)

&emsp; 3⃣️：完事儿之后直接打开就行，就会发现只要运行这个脚本，touchbar就不会一直闪烁了

&emsp; 4⃣️：但是你会发现程序栏上会一直出现脚本的应用图标，下面可以用过添加程序让我们的小程序从程序坞里消失并保持后台一直运行！

## 3: 程序坞图标去除并保持后台持续运行

&emsp; 1⃣️：找到我们的应用程序并显示包内容；
![](https://files.mdnice.com/user/25819/f398ab53-0dda-4bd3-9ec1-6119bee6f5c5.png)
&emsp; 2⃣️：找到contens中的info.plist
文件，并用文本编辑器打开；
![](https://files.mdnice.com/user/25819/5a03c934-d9af-43d1-a93b-e0882b1135b5.png)

&emsp; 3⃣️：复制下面两行代码到红色框框的位置
```
	<key>LSUIElement</key>
	<string>1</string>
```

![](https://files.mdnice.com/user/25819/825547ff-a1a3-40a6-a55e-a004553938c7.png)

&emsp; 4⃣️：保存退出，然后重新打开即可；

&emsp;到这里就全部结束啦！touch bar就修好啦！最喜欢touch bar的一个功能就是歌词显示！通过软件**LyricsX**可以实现歌词常驻在touch bar上！
![](https://files.mdnice.com/user/25819/a989e0c0-5a73-44f8-a76c-bcdcd7c458e8.jpg)

