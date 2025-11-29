# Matplotlib 画图不显示中文的有效解决方案|附折线变光滑

## 检查已有字体
```
from matplotlib.font_manager import FontManager

mpl_fonts = set(f.name for f in FontManager().ttflist)

print('all font list get from matplotlib.font_manager:')
for f in sorted(mpl_fonts):
    print('\t' + f)
```
运行结果：
![](https://files.mdnice.com/user/25819/652e02ff-897c-4a30-a06a-9b39567839c4.png)
&emsp;找到我们想要的中文字体;
```
import matplotlib
#设置语言为‘黑体’
matplotlib.rc("font", family='Heiti TC')
```
&emsp;添加到程序里即可；
![](https://files.mdnice.com/user/25819/3755128d-e18b-465b-98b7-b0ed71a0f7b4.png)

## 将折线变光滑的方法
```
import numpy as np
from matplotlib import pyplot as plt
from scipy.interpolate import make_interp_spline


def smooth_xy(lx, ly):
    """数据平滑处理

    :param lx: x轴数据，数组
    :param ly: y轴数据，数组
    :return: 平滑后的x、y轴数据，数组 [slx, sly]
    """
    x = np.array(lx)
    y = np.array(ly)
    x_smooth = np.linspace(x.min(), x.max(), 300)
    y_smooth = make_interp_spline(x, y)(x_smooth)
    return [x_smooth, y_smooth]


if __name__ == '__main__':
    x_raw = [6, 7, 8, 9, 10, 11, 12]
    y_raw = [1.53, 5.92, 2.04, 7.24, 2.72, 1.10, 4.70]
    xy_s = smooth_xy(x_raw, y_raw)

    # 原始折线图
    plt.plot(x_raw, y_raw)
    plt.show()

    # 处理后的平滑曲线
    plt.plot(xy_s[0], xy_s[1])
    plt.show()
```
