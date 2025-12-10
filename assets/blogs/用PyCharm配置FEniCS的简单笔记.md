# 用PyCharm配置FEniCS的简单笔记

&emsp;&emsp;后台私信很多粉丝问我为啥最近没有更新，最近实在是事情比较多😂，要学习很多新东西，还有很多琐碎的事，大家见谅，但还是会保证一周至少更新一下！

&emsp;&emsp;顺便谢谢大家的支持，知乎流量再创新高，突破**100万**啦！

![](https://files.mdnice.com/user/25819/72b9a20d-6c46-4f6d-b6ea-aa094d167c9c.png)

&emsp;&emsp;**接下来进入今天的学习内容！**

&emsp;&emsp;FEniCS是一款有限元计算软件，由于PDE-FEM的需要，未来要使用FEniCS进行计算和数值模拟，出一篇Mac配置教程记录下来，以方便下次配置。

## 所需软件

- Python.
- PyCharm.
- Anacanda.
![](https://files.mdnice.com/user/25819/ded35f9c-3984-420c-a0ed-4c53778fdaab.png)
&emsp;&emsp;下载方法很简单，网上搜索官网下载安装即可。重点是下面**FEniCS**的配置。

## 配置FEniCS

- 终端下输入代码
```
 conda create -n fenicsproject -c conda-forge fenics
```
如图所示：
![](https://files.mdnice.com/user/25819/d338d962-1bff-47b9-95b8-ff36abf94f1f.png)
- 中间会输入一次[y]。
![](https://files.mdnice.com/user/25819/8c7a6182-79e2-4680-aa68-9f411d7dacf3.png)
- 看到上图应该配置好了。

- 可以通过【Anacanda】-【environment】验证是否有此环境。
![](https://files.mdnice.com/user/25819/253fb4b3-82c4-4d9c-bbea-8f94b42f6404.png)

- 看到上图的fenics的数据包就说明配置成功了。
- 接下来介绍一下怎么在PyCharm添加。

## 在PyCharm添加FEniCS解释器

- 找到这个路径并添加，注意不要找错了。

![](https://files.mdnice.com/user/25819/82035e33-1172-444b-8543-1a1fc4e92271.png)

## 在PyCharm使用FEniCS

- 接下来创建一个**python项目**，注意一定要**选择刚添加的解释器！**


![](https://files.mdnice.com/user/25819/5d09f091-fb99-47b5-bcfe-0501d4cea6ff.png)


- 找一个简单的例子模拟一下。

&emsp;&emsp;**使用FEniCS求解二维possion方程**
```
from __future__ import print_function
from fenics import *
import matplotlib.pyplot as plt

# Create mesh and define function space
mesh = UnitSquareMesh(8, 8)
V = FunctionSpace(mesh, 'P', 1)

# Define boundary condition
u_D = Expression('1 + x[0]*x[0] + 2*x[1]*x[1]', degree=2)

def boundary(x, on_boundary):
    return on_boundary

bc = DirichletBC(V, u_D, boundary)

# Define variational problem
u = TrialFunction(V)
v = TestFunction(V)
f = Constant(-6.0)
a = dot(grad(u), grad(v))*dx
L = f*v*dx

# Compute solution
u = Function(V)
solve(a == L, u, bc)

# Plot solution and mesh
plot(u)
plot(mesh)

# Save solution to file in VTK format
vtkfile = File('poisson/solution.pvd')
vtkfile << u

# Compute error in L2 norm
error_L2 = errornorm(u_D, u, 'L2')

# Compute maximum error at vertices
vertex_values_u_D = u_D.compute_vertex_values(mesh)
vertex_values_u = u.compute_vertex_values(mesh)
import numpy as np
error_max = np.max(np.abs(vertex_values_u_D - vertex_values_u))

# Print errors
print('error_L2  =', error_L2)
print('error_max =', error_max)

# Hold plot
plt.show()
```

- 运行结果如下：


![](https://files.mdnice.com/user/25819/0b43763d-8a70-4f56-a6fc-44432638906e.png)


- ok好啦，说明咱们配置成功，并且还可以运行，注意python3.0的语言和2.0有一些不一样，修改一下程序就可以了。

## 推荐阅读

&emsp;&emsp;[【贰陆壹】分享一款Latex在线编辑器 | 附Latex常用模版](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487025&idx=1&sn=7145e41b2cd7018c86ecb8a543e9748d&chksm=fc23cabdcb5443abb2a117a1bb2733f84a4647f5b30f09a900622d8f76dd17b2cc8a0f1fa346&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰伍伍】如何利用VSCode写Markdown笔记| 附Markdown常用语法](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247486768&idx=1&sn=0db4fb823f53e90b939145e0b3172bff&chksm=fc23c9bccb5440aa65726205bd61f0a63524a090b67441d77bde311a42584ae2e0ca3d5799d2&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰伍肆】VSCode 配置Latex环境 保姆级教程](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247486759&idx=1&sn=8989a47009c2f71aa3074ccc2ab52f11&chksm=fc23c9abcb5440bd6952b060b5d30c3b9ae3cda96f93f2667734118ab9ea693d175f9fb3f205&token=815776449&lang=zh_CN#rd)

&emsp;&emsp;[【贰柒零】推荐一款文献管理工具 Mendely Reference Manager](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487361&idx=1&sn=426568f304f7e14e7fe1ae7b47032553&chksm=fc23cb0dcb54421bc63670f687fa203ed86d1ab8f699bcdaa220fba3cf7c42a9dcc143612263&token=764014130&lang=zh_CN#rd)

&emsp;&emsp;[【贰柒伍】推荐一款制作表格工具｜Latex｜Markdown｜HTML｜Text｜Mediawiki](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487440&idx=1&sn=256dc2065da707eba911dc30cfdc6790&chksm=fc23cb5ccb54424a76edfa61f7bcd39d1748ad0db3ba08611b59cc1075b653f572a599517a3d&token=1165871660&lang=zh_CN#rd)

&emsp;&emsp;[【贰柒柒】推荐一款截屏翻译工具｜截屏提取文字｜划词翻译](https://mp.weixin.qq.com/s?__biz=MzU1ODcwMDAwMw==&mid=2247487470&idx=1&sn=c5a80decd3d46a1526ba3731b39cc7a1&chksm=fc23cb62cb544274b2337443747ec3dcbb9eb7185910193847e88325b399392c547b5b7080f4&token=151434469&lang=zh_CN#rd)