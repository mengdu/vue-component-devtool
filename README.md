# vue-component-devtool

> 基于 webpack 打造的 Vue 组件开发工具。可以编写例子，文档。
> 基于vue init webpack 模板修改，参照了 [element-ui](https://github.com/ElemeFE/element) 的实现。


[Example](https://mengdu.github.io/m-button/example/)


**功能**

+ 打包vue组件，导出 `umd` 模式
+ 支持 `markdown` 解析
+ `markdwon` 可以编写编写vue例子

> 目前仅支持单组件打包导出


**目录**：

```html
├─build
├─config
├─dist
│  ├─index.js
│  └─css
├─src 组件源码，以 `index.js` 导出组件
├─docs 文档及在线列子源码
├─example 生成的文档及在线例子

```


可以在 `docs` 的文件里 `import MyComponent from '@/index'` 载入你的组件。



**开发模式**（支持热更新）

```ls
npm run dev
```

打开 `http://localhost:8080` 查看效果。



**打包组件**

```ls
npm run build
```

打包后组件被打包成js和css在 `dist` 文件夹中。

**生成文档**

```ls
npm run docs
```

生成文档在 `example` 文件夹，打开 `index.html` 可可以浏览。上传Github后可以在Github 开启项目Page访问。


## Other

[element-ui](https://github.com/ElemeFE/element)

[vue-markdown-loader](https://github.com/QingWei-Li/vue-markdown-loader)
