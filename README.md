# vue2+webpack 多页面应用


## 多页面说明

- `pages`目录下按页面名存放各个单页面的代码
- 每个页面都是单独的，所以没用路由去做跳转
- 启动后访问:
- localhost:8000/index.html 或  localhost:8000/othera.html 其它页面一样

## 目录结构

``` bash
| - vue-workflow
    | - build 配置：webpack开发和发布脚本
    | - config 配置：webpack开发和发布设置
    | - dist 发布目录
    | - node_modules node模块目录
    | - src 源代码目录
        | - assets 静态资源：图片、字体
        | - common 公共：js、样式、vue组件
        | - pages 多页面目录
            | - {page name} 页面名目录
                | - vue 组件：页面所用vue文件
                | - styles 样式：页面全局样式
                {page name}.js 页面入口js
                {page name}.html 页面模板html
    | - static 静态文件
    | - test
```

## 安装与使用

``` bash
# install dependencies
# 安装依赖
npm install 或 yarn

# serve with hot reload at localhost:8080
# 开发测试（热加载刷新）
npm run dev

# build distribution for production with minification
# 发布
npm run build

# build distribution for production and view the bundle analyzer report
npm run build --report
```
