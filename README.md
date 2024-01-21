---
title: hexo-theme-honeyworks 主题配置指南
date: 2024-01-21 23:28:00
author: lozhu
---

本主题是模仿日本一个创作团队 [Honeyworks](https://honeyworks.jp)（ハニーワークス）官方网站开发的一个 Hexo 主题。

<!-- more -->

## 前言

第一次了解到 Hexo 是在 2018 年，那时候还是学生时代，做为一个软件工程的学生，迫切的想拥有一个自己的个人网站。曾经想尝试学习 html 和 css 之后从 0 开始自己开发一个个人网站，但是学艺不精，花了好久也没有将首页跳到顺眼的程度。后来无意间在网上了解到 Hexo，简单的配置、几行命令就可以生成一个漂亮的静态网站，让我惊叹不已。虽然后来也了解了很多博客框架，如 wordpress、 typecho 等，还是 Hexo 更得我心。

几年中也换了不少 Hexo 主题，再精美的主题，或多或少都会有些地方不符合自己的心意，于是很早就萌生了自己开发一个主题的想法，鉴于没有系统的学习过前端知识，一直没能动手。2023 年听了几首 honeyworks 的歌曲，曲风偏可爱类型，歌词也很能给人积极向上的力量，尝试着了解了一下这个团队，发现他们的官网风格比较可爱，于是仿照其官网开发了本主题 [hexo-theme-honeyworks](https://github.com/lozhu20/hexo-theme-honeyworks) 。由于审美水平有限且只有首页可参照，所以一些页面还原度不高、全站页面风格不统一，请见谅。

## 前置准备

阅读本文前请确保您的 Hexo 版本在 7.0.0 以上，且 Hexo 站点已正确初始化好，本地可正常访问。

查看 Hexo 版本：

```sh
hexo -v
```

每次重启博客需要输入3条命令比较麻烦，建议在站点跟路径下新建一个 sh 脚本，将 `hexo clean` 、 `hexo g` 及 `hexo s` 写入并添加执行权限，这样每次只要运行脚本即可完成清理可重启，省事不少。

## 安装及初始化

主题地址：[hexo-theme-honeyworks - github](https://github.com/lozhu20/hexo-theme-honeyworks)

进入站点跟路径，下载主题到本地：

```sh
git clone git@github.com:lozhu20/hexo-theme-honeyworks.git themes/hexo-theme-honeyworks
```

网络状况不佳下载时间可能会比较长。

主题基于 pug 模板引擎开发，需要提前安装相关插件：

```sh
npm install --save hexo-render-pug
```

修改站点跟路径下的 _config.yml 文件中的 theme 配置：

```yaml
theme: hexo-theme-honeyworks
```

在站点跟路径 source 目录下新建文件夹 _data，将 hexo-theme-honeyworks 目录下的所有文件复制至 _data 文件夹下，重启之后就可以看到切换之后的主题。

## 页面

### 阅读

阅读页面的数据来自于站点跟路径下 source > _data > books.yml 文件中的配置：

| 字段         | 说明     | 备注               |
| ------------ | -------- | ------------------ |
| bookName     | 书籍名称 |                    |
| bookCover    | 封面图片 |                    |
| bookAuthor   | 书籍作者 |                    |
| readingState | 状态     | 想读｜在读｜已完成 |
| finishDate   | 读完日期 | 后续做年度读书统计 |

### 日程

日程页面的数据来自站点跟路径下 source > _data > schedule.yml 文件中的配置：

| 字段        | 说明         | 备注         |
| ----------- | ------------ | ------------ |
| taskName    | 事项名称     |              |
| startDate   | 开始日期     |              |
| planEndDate | 计划结束日期 | 影响排序     |
| progress    | 当前进度     |              |
| endDate     | 完成日期     | 后续做统计用 |

### 友链

友链页面的数据来自站点跟路径下 source > _data > links.yml 文件中的配置：

| 字段         | 说明     | 备注                                 |
| ------------ | -------- | ------------------------------------ |
| categoryName | 站点分类 |                                      |
| siteName     | 站点名称 |                                      |
| description  | 站点描述 | 最好不要超过20汉字，换行影响卡片高度 |
| url          | 跳转地址 |                                      |

### 关于

添加页面：

```sh
hexo new page "about"
```

按照普通的文章写即可。

## 重要配置项

重要的配置项：

```yaml
# 导航栏右侧功能按钮
tools:
  back:
    enable: true  # true | false  是否显示文章详情页面返回上一页按钮
  darkmode:
    enable: true # true | false  是否显示暗黑模式切换按钮，开发中
  search:
    enable: true # true | false  是否显示搜索按钮
    
# 社交媒体，修改链接即可
social:
  github: https://github.com
  twitter: https://baidu.com
  instagram: https://instagram.com
  weibo: https://weibo.com
  mail: lozhu20@solar.earth
  
# 页脚版权时间
startDate: 

# 默认书籍封面 
defaultBookCover: 

# 首页文章标题前的字符，仿照 honeyworks 官网
postTitlePrefix:

# 搜索功能，请勿改动
search:
  path: search.xml
  field: post
  content: true
  template: search.xml
  
# 自定义 js 文件和 css 样式
stylesheets: 
scripts: 
```

## 代码高亮

从站点跟路径 _config.yml 配置文件支持代码高亮，仅支持 highlight.js。

```yaml
syntax_highlighter: highlight.js
highlight:
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: true   # 一定要设置为 true
```

## 评论系统

开发中，先支持 git talk。

## 致谢

**[template engine - pug](https://pugjs.org/api/getting-started.html)**

开发前了解了到了 pug 这个模板引擎，真是帮了很大的忙，代码整洁易读，开发效率很高。之前看很多主题都是用 ejs 开发的，说实话，满屏的 < %  - = 符号让我眼花，不知道劝退多少像我这样的初学者。

**[Semantic UI](https://semantic-ui.com)**

本人没有前端功底，仅会使用 Element UI、Bootstrap、Ant design UI 等前端框架。前端时间了解到 Semantic UI，官网各种组件 demo 很漂亮，解决了开发中最最难的样式问题。

**[个人博客 - smile-yan](https://blog.csdn.net/smileyan9/article/details/124368376)**

增加本地搜索功能时完全参考了 [《Hexo: 从零开始编写自己的主题》5. 添加本地搜索功能以及发布博客让官网接收](https://blog.csdn.net/smileyan9/article/details/124368376) 这篇博客。

**[个人博客 - 云泥的网络日志](https://liuyib.github.io/2019/08/20/develop-hexo-theme-from-0-to-1/)**

开始开发前阅读了 [从 0 到 1 开发 Hexo 主题杂谈](https://liuyib.github.io/2019/08/20/develop-hexo-theme-from-0-to-1/) 这篇博客，得到了很多指导。自定义 js 文件中如何读取站点、主题配置项、使用 Hexo 内置函数等问题，都在这篇博客中有写到，很实用。



